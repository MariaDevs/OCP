import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Clock, Calendar, ArrowLeft } from 'lucide-react';
import Breadcrumb from '@/components/ui/Breadcrumb';
import { getBlogPosts, getBlogPost, categoryEmoji } from '@/lib/content-engine';
import { articleSchema, ldJson } from '@/lib/schema';
import type { BlogPost } from '@/types';

interface Props {
  params: Promise<{ slug: string }>;
}

/** Fixed locale + timeZone so build output is deterministic (review #17). */
const PE_DATE = { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'America/Lima' } as const;

/** Escape text before it is injected via dangerouslySetInnerHTML (review #18). */
function esc(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/** `**bold**` -> <strong> on already-escaped text. */
function inlineBold(s: string): string {
  return esc(s).replace(/\*\*(.*?)\*\*/g, '<strong class="text-white">$1</strong>');
}

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPost(slug);
  if (!post) return {};
  const url = `https://onlinecasinoperu.com/blog/${slug}`;
  const ogImage = post.heroImage ?? 'https://onlinecasinoperu.com/og-image.png';
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url,
      type: 'article',
      publishedTime: post.date,
      images: [{ url: ogImage, width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [ogImage],
    },
  };
}

/** Render a static (markdown-ish) post body. Engine posts use `post.html`. */
function StaticBody({ content }: { content: string }) {
  return (
    <>
      {content.split('\n\n').map((block, i) => {
        if (block.startsWith('## ')) {
          return <h2 key={i} className="text-2xl font-black text-white mt-8 mb-2">{block.replace('## ', '')}</h2>;
        }
        if (block.startsWith('### ')) {
          return <h3 key={i} className="text-xl font-bold text-white mt-6 mb-2">{block.replace('### ', '')}</h3>;
        }
        // A whole block that is just **…** (starts AND ends with **) — a lead line.
        if (block.startsWith('**') && block.endsWith('**')) {
          return <p key={i} className="font-semibold text-slate-200">{block.replace(/\*\*/g, '')}</p>;
        }
        if (block.startsWith('1. ') || block.startsWith('2. ')) {
          const items = block.split('\n');
          return (
            <ol key={i} className="list-decimal list-inside space-y-1">
              {items.map((item, j) => <li key={j} className="text-slate-300">{item.replace(/^\d+\.\s/, '')}</li>)}
            </ol>
          );
        }
        // Bulleted list ONLY when the block actually starts with "- " (review #8:
        // a paragraph that merely starts with "**Bold:**" is NOT a list).
        if (block.startsWith('- ')) {
          const items = block.split('\n');
          return (
            <ul key={i} className="space-y-1">
              {items.map((item, j) => (
                <li key={j} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 flex-shrink-0" />
                  <span dangerouslySetInnerHTML={{ __html: inlineBold(item.replace(/^- /, '')) }} />
                </li>
              ))}
            </ul>
          );
        }
        return <p key={i} dangerouslySetInnerHTML={{ __html: inlineBold(block) }} />;
      })}
    </>
  );
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const posts = await getBlogPosts();
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  const related: BlogPost[] = posts.filter((p) => p.slug !== slug && p.category === post.category).slice(0, 3);
  const schema = articleSchema({ ...post, image: post.heroImage ?? undefined });

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: ldJson(schema) }} />
      <Breadcrumb items={[{ label: 'Blog', href: '/blog' }, { label: post.category, href: '/blog' }, { label: post.title }]} />

      <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <article className="lg:col-span-2">
          {/* Header */}
          <div className="mb-6">
            <span className="text-xs bg-emerald-500/20 text-emerald-400 rounded-full px-3 py-1 font-semibold">{post.category}</span>
            <h1 className="text-3xl md:text-4xl font-black text-white mt-4 mb-3 leading-tight">{post.title}</h1>
            <p className="text-slate-400 text-lg leading-relaxed mb-4">{post.excerpt}</p>
            <div className="flex items-center gap-4 text-sm text-slate-500 border-b border-slate-700 pb-4">
              <span className="flex items-center gap-1.5"><Calendar size={14} />{new Date(post.date).toLocaleDateString('es-PE', PE_DATE)}</span>
              <span className="flex items-center gap-1.5"><Clock size={14} />{post.readTime} min de lectura</span>
              <span>Por {post.author}</span>
            </div>
          </div>

          {/* Hero */}
          {post.heroImage ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={post.heroImage} alt={post.heroImageAlt ?? post.title} className="w-full h-64 object-cover rounded-2xl mb-8" />
          ) : (
            <div className="h-64 bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl flex items-center justify-center text-8xl mb-8" aria-hidden="true">
              {categoryEmoji(post.category)}
            </div>
          )}

          {/* Body: engine HTML (sanitized + affiliate-hardened at load time) or static markdown */}
          {post.html ? (
            <div className="article-html text-slate-400 leading-relaxed" dangerouslySetInnerHTML={{ __html: post.html }} />
          ) : (
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <StaticBody content={post.content} />
            </div>
          )}

          {/* Navigation */}
          <div className="flex items-center justify-between mt-10 pt-6 border-t border-slate-700">
            <Link href="/blog" className="flex items-center gap-2 text-slate-400 hover:text-emerald-400 transition-colors">
              <ArrowLeft size={16} /> Volver al blog
            </Link>
          </div>
        </article>

        {/* Sidebar */}
        <aside className="lg:col-span-1 space-y-5">
          {related.length > 0 && (
            <div className="bg-slate-800/60 border border-slate-700 rounded-2xl p-4">
              <h3 className="font-bold text-white mb-4">Artículos Relacionados</h3>
              <div className="space-y-4">
                {related.map((r) => (
                  <Link key={r.slug} href={`/blog/${r.slug}`} className="flex gap-3 group">
                    <div className="w-10 h-10 rounded-lg bg-slate-700 flex items-center justify-center text-lg flex-shrink-0" aria-hidden="true">
                      {categoryEmoji(r.category)}
                    </div>
                    <div>
                      <div className="text-sm text-slate-300 group-hover:text-emerald-400 transition-colors leading-tight">{r.title}</div>
                      <div className="text-xs text-slate-500 mt-1 flex items-center gap-1"><Clock size={10} /> {r.readTime} min</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* CTA */}
          <div className="bg-gradient-to-br from-emerald-900/30 to-slate-800/60 border border-emerald-500/30 rounded-2xl p-5">
            <div className="text-2xl mb-3" aria-hidden="true">🎰</div>
            <h3 className="font-bold text-white mb-2">¿Listo para Jugar?</h3>
            <p className="text-slate-400 text-sm mb-4">Compara los mejores casinos online disponibles en Perú con bonos exclusivos.</p>
            <Link href="/casinos" className="block text-center bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-bold py-2.5 rounded-xl transition-colors text-sm">
              Ver Casinos Recomendados
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
}
