/**
 * Matching Visions Content Engine — build-time loader for OnlineCasinoPerú.
 *
 * Pulls this site's Spanish article feed from the engine at BUILD TIME and
 * exposes it as `BlogPost`s, merged with the curated static posts in
 * `lib/data/blog.ts`. This mirrors how the sibling sites (KIR / OCL) consume
 * the engine, adapted from an Astro content-collection loader to a plain
 * async function for Next.js Server Components / static export.
 *
 * Contract (engine `GET /v1/articles`):
 *   ?status=delivered  — only deliverable, compliance-passed content (S5)
 *   &include=body      — full HTML/markdown renderings in one response
 *   &language=es       — Spanish only (defensive; the site-scoped API key
 *                        already restricts the feed to THIS site's locale)
 *   &cursor=…          — opaque pagination cursor
 *   Authorization: Bearer <CE_API_KEY>
 *
 * The API key is restricted server-side, so the feed only ever contains this
 * site's deliverable articles. When CE_API_URL / CE_API_KEY are not set (or the
 * engine is unreachable) the loader is a NO-OP returning [] — the site builds
 * fine, the blog just shows the static posts. Set the two env vars (see
 * .env.example) once OCP is registered as a site in the engine admin.
 *
 * Caching note (Next.js 16): `fetch` is NOT cached by default and `React.cache`
 * is per-render only. A static export renders the blog list, every [slug] page,
 * generateStaticParams, the homepage teaser and the sitemap as SEPARATE render
 * passes — so we memoize the feed at MODULE scope (the build is a single Node
 * process) to fetch it exactly once per build, and additionally wrap the public
 * getter in React.cache for per-render dedup. To pick up new engine content,
 * rebuild (same build-time-sync model as the Astro siblings).
 */
import { cache } from "react";
import { blogPosts as staticPosts } from "@/lib/data/blog";
import type { BlogPost } from "@/types";
// Committed snapshot of the delivered engine feed. This is what ships to
// production: a Vercel/Cloudways build cannot reach the (localhost) engine, so
// the articles are baked into the repo and read from here when CE_API_URL/
// CE_API_KEY are not set. Refresh it by re-pulling the feed and re-committing.
import engineSnapshot from "@/lib/data/engine-articles.json";

/* -------------------------------------------------------------------------- */
/* Engine wire shapes (only the fields we read)                               */
/* -------------------------------------------------------------------------- */

interface EngineArticle {
  id: string;
  status: string;
  title: string | null;
  slug: string | null;
  language: string;
  article_type: string | null;
  renderings: { html: string | null; markdown: string | null };
  meta: { title: string | null; description: string | null };
  media: { kind: string; url: string | null; alt_text?: string | null }[];
  published_at: string | null;
  updated_at: string;
}

interface FeedPage {
  data: EngineArticle[];
  next_cursor: string | null;
  has_more: boolean;
}

/* -------------------------------------------------------------------------- */
/* HTML hardening (security #18) — engine HTML is rendered via                 */
/* dangerouslySetInnerHTML, so we harden it BY CONSTRUCTION at load time.      */
/* -------------------------------------------------------------------------- */

/** Drop <script>/<iframe>/<object>/<embed> and inline on*= handlers + js: URLs.
 *  The engine's compliance gate already delivers clean copy; this is defence
 *  in depth so a future/misbehaving feed can never inject active content. */
function sanitizeHtml(html: string): string {
  return (
    html
      // Remove dangerous elements WITH their content (so the inner JS/CSS text
      // is gone too, not just the tags).
      .replace(
        /<(script|style|iframe|object|embed|noscript|template)\b[^>]*>[\s\S]*?<\/\1>/gi,
        "",
      )
      // Strip any stray/unpaired dangerous or document-metadata tags left over.
      .replace(
        /<\/?(script|style|iframe|object|embed|noscript|template|link|meta|base)\b[^>]*>/gi,
        "",
      )
      // Strip inline event handlers (onclick=, onerror=, …).
      .replace(/\son\w+\s*=\s*("[^"]*"|'[^']*'|[^\s>]+)/gi, "")
      // Neutralize javascript: URLs in href/src.
      .replace(/(href|src)\s*=\s*("|')\s*javascript:[^"']*\2/gi, "$1=$2#$2")
  );
}

/** Force rel="sponsored nofollow noopener" + target="_blank" on every external
 *  / affiliate link in the delivered HTML (affiliate-compliance, mirrors the
 *  siblings' `ensureSponsored`). Internal root-relative links are left as-is. */
function hardenAffiliateLinks(html: string): string {
  return html.replace(/<a\b([^>]*)>/gi, (whole, attrs: string) => {
    const href = /\bhref\s*=\s*("|')(.*?)\1/i.exec(attrs)?.[2]?.trim();
    if (!href) return whole;
    const isInternal =
      href.startsWith("/") ||
      href.startsWith("#") ||
      /^https?:\/\/(www\.)?onlinecasinoperu\.com/i.test(href);
    if (isInternal) return whole;
    const withoutRelTarget = attrs
      .replace(/\srel\s*=\s*("[^"]*"|'[^']*'|[^\s>]+)/gi, "")
      .replace(/\starget\s*=\s*("[^"]*"|'[^']*'|[^\s>]+)/gi, "");
    return `<a${withoutRelTarget} target="_blank" rel="sponsored nofollow noopener">`;
  });
}

/** Strip HTML tags and collapse whitespace — for excerpt/readTime estimation. */
function toPlainText(html: string): string {
  return html
    .replace(/<[^>]+>/g, " ")
    .replace(/&[a-z]+;/gi, " ")
    .replace(/\s+/g, " ")
    .trim();
}

/* -------------------------------------------------------------------------- */
/* Mapping engine article -> BlogPost                                         */
/* -------------------------------------------------------------------------- */

/** Engine `article_type` -> the blog's Spanish category labels (drives the
 *  category chips, emoji and "related" grouping on the blog surfaces). */
function categoryForType(articleType: string | null): string {
  switch ((articleType ?? "").toLowerCase()) {
    case "guide":
      return "Guías";
    case "review":
    case "comparison":
    case "listicle":
      return "Reseñas";
    default:
      return "Noticias";
  }
}

/** Decorative emoji for a blog category label. Shared by the blog list, the
 *  blog detail hero, and the homepage teaser so static and engine categories
 *  render consistently. Always rendered with aria-hidden (the category text is
 *  shown alongside). */
export function categoryEmoji(category: string): string {
  switch (category) {
    case "Tragamonedas": return "🎰";
    case "Métodos de Pago": return "💳";
    case "Legal": return "⚖️";
    case "Estrategias": return "🧠";
    case "Bonos": return "🎁";
    case "Casino Móvil": return "📱";
    case "Guías": return "📚";
    case "Reseñas": return "⭐";
    case "Noticias": return "📰";
    default: return "📰";
  }
}

const WORDS_PER_MINUTE = 200;

function toBlogPost(a: EngineArticle): BlogPost | null {
  const slug = a.slug ?? null;
  const html = a.renderings.html;
  if (!slug || !html) return null; // need a route key and a body to render

  const safeHtml = hardenAffiliateLinks(sanitizeHtml(html));
  const plain = toPlainText(safeHtml);
  const title = a.meta.title ?? a.title ?? slug;
  const excerpt =
    a.meta.description ?? (plain.length > 160 ? `${plain.slice(0, 157)}…` : plain);
  const hero = a.media.find((m) => m.kind === "image")?.url ?? null;
  const heroAlt = a.media.find((m) => m.kind === "image")?.alt_text ?? null;

  return {
    slug,
    title,
    excerpt,
    content: "", // engine posts render `html`, not the markdown-ish `content`
    html: safeHtml,
    category: categoryForType(a.article_type),
    author: "Redacción OnlineCasinoPerú",
    date: (a.published_at ?? a.updated_at ?? "").slice(0, 10),
    readTime: Math.max(1, Math.round(plain.split(" ").length / WORDS_PER_MINUTE)),
    image: hero ?? "/og-image.png",
    heroImage: hero,
    heroImageAlt: heroAlt,
    source: "engine",
  };
}

/* -------------------------------------------------------------------------- */
/* Feed fetch (module-memoized: one network round per build)                  */
/* -------------------------------------------------------------------------- */

let feedPromise: Promise<BlogPost[]> | null = null;

async function loadEngineFeed(): Promise<BlogPost[]> {
  const apiUrl = process.env.CE_API_URL;
  const apiKey = process.env.CE_API_KEY;
  if (!apiUrl || !apiKey) {
    // No live engine (production / CI / Vercel build): read the committed
    // snapshot baked into the repo so the articles ship without a reachable
    // engine. Processed through the SAME sanitize/harden/map path as live.
    const snap = engineSnapshot as unknown as EngineArticle[];
    const out = snap
      .map(toBlogPost)
      .filter((p): p is BlogPost => p !== null);
    console.info(
      `[content-engine] loaded ${out.length} article(s) from committed snapshot ` +
        "(CE_API_URL/CE_API_KEY not set — live engine not used).",
    );
    return out;
  }

  const out: BlogPost[] = [];
  let cursor: string | null = null;
  const base = apiUrl.replace(/\/$/, "");

  try {
    do {
      const url = new URL(`${base}/articles`);
      url.searchParams.set("status", "delivered");
      url.searchParams.set("include", "body");
      url.searchParams.set("language", "es");
      if (cursor) url.searchParams.set("cursor", cursor);

      const res = await fetch(url, {
        headers: { authorization: `Bearer ${apiKey}` },
        // MUST be cacheable: under `output: export` Next.js renders with
        // dynamic="error", so a no-store/revalidate:0 fetch would make the
        // route dynamic and fail the static export. We WANT the feed baked in
        // at build time anyway, so force-cache is correct (a rebuild re-pulls).
        cache: "force-cache",
      });
      if (!res.ok) {
        console.warn(
          `[content-engine] feed request failed (${res.status} ${res.statusText}); ` +
            "serving static blog posts only for this build.",
        );
        return out; // graceful: never break the build on an engine hiccup
      }
      const page = (await res.json()) as FeedPage;
      for (const article of page.data) {
        const post = toBlogPost(article);
        if (post) out.push(post);
      }
      cursor = page.has_more ? page.next_cursor : null;
    } while (cursor);
  } catch (err) {
    console.warn(
      `[content-engine] feed sync errored (${(err as Error).message}); ` +
        "serving static blog posts only for this build.",
    );
    return out;
  }

  console.info(`[content-engine] synced ${out.length} Spanish article(s).`);
  return out;
}

/** Engine posts only (memoized once per build process). */
function getEnginePosts(): Promise<BlogPost[]> {
  return (feedPromise ??= loadEngineFeed());
}

/* -------------------------------------------------------------------------- */
/* Public API                                                                 */
/* -------------------------------------------------------------------------- */

/**
 * All blog posts for the site: curated static posts + engine (Spanish) posts,
 * de-duplicated by slug (curated wins on collision) and sorted newest-first.
 * Use this everywhere the blog is rendered (list, [slug], homepage teaser,
 * sitemap) instead of importing the static array directly.
 */
export const getBlogPosts = cache(async (): Promise<BlogPost[]> => {
  const engine = await getEnginePosts();
  const bySlug = new Map<string, BlogPost>();
  // Engine first, then static — so a curated post overrides an engine post that
  // happens to share its slug.
  for (const p of engine) bySlug.set(p.slug, p);
  for (const p of staticPosts) bySlug.set(p.slug, { ...p, source: p.source ?? "static" });
  return [...bySlug.values()].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
});

/** Single post by slug (or undefined). Shares the memoized merged set. */
export async function getBlogPost(slug: string): Promise<BlogPost | undefined> {
  return (await getBlogPosts()).find((p) => p.slug === slug);
}
