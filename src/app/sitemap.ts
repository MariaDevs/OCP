import { MetadataRoute } from 'next';
import { casinos } from '@/lib/data/casinos';
import { comparisons } from '@/lib/data/comparisons';
import { getBlogPosts } from '@/lib/content-engine';

export const dynamic = 'force-static';

const BASE_URL = 'https://www.onlinecasinoperu.com';

/**
 * Real last-modified dates, taken from the last commit that touched each route's
 * source. Google uses <lastmod> to prioritise recrawling, and 49 of our 93 URLs
 * previously shipped without one — including every page we edited on 09-30.
 *
 * Deliberately NOT build time: stamping every route as "changed" on each deploy
 * is a signal Google learns to distrust. Update the date here when a page's
 * content actually changes.
 */
const LAST_MODIFIED: Record<string, string> = {
  '/': '2026-09-30',
  '/casinos': '2026-09-30',
  '/casino-online-peru': '2026-09-30',
  '/bonos': '2026-07-20',
  '/bonos/bienvenida': '2026-07-08',
  '/bonos/sin-deposito': '2026-08-31',
  '/bonos/tiradas-gratis': '2026-07-07',
  '/casino-yape': '2026-07-20',
  '/casino-plin': '2026-07-20',
  '/metodos-de-pago': '2026-07-20',
};

/** Casino and comparison pages render from these data files. */
const CASINOS_DATA_UPDATED = '2026-09-18';
const COMPARISONS_DATA_UPDATED = '2026-07-20';

const lastModified = (path: string): Date | undefined => {
  const d = LAST_MODIFIED[path];
  return d ? new Date(d) : undefined;
};

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const blogPosts = await getBlogPosts();
  const staticRoutes = [
    { url: BASE_URL, lastModified: lastModified('/'), changeFrequency: 'daily' as const, priority: 1.0 },
    { url: `${BASE_URL}/casinos`, lastModified: lastModified('/casinos'), changeFrequency: 'daily' as const, priority: 0.9 },
    { url: `${BASE_URL}/bonos`, lastModified: lastModified('/bonos'), changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: `${BASE_URL}/bonos/bienvenida`, lastModified: lastModified('/bonos/bienvenida'), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${BASE_URL}/bonos/sin-deposito`, lastModified: lastModified('/bonos/sin-deposito'), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${BASE_URL}/bonos/tiradas-gratis`, lastModified: lastModified('/bonos/tiradas-gratis'), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${BASE_URL}/casino-online-peru`, lastModified: lastModified('/casino-online-peru'), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${BASE_URL}/casino-yape`, lastModified: lastModified('/casino-yape'), changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: `${BASE_URL}/casino-plin`, lastModified: lastModified('/casino-plin'), changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: `${BASE_URL}/metodos-de-pago`, lastModified: lastModified('/metodos-de-pago'), changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${BASE_URL}/juegos/tragamonedas`, changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${BASE_URL}/blog`, changeFrequency: 'daily' as const, priority: 0.8 },
    { url: `${BASE_URL}/juego-responsable`, changeFrequency: 'monthly' as const, priority: 0.5 },
    { url: `${BASE_URL}/juegos`, changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${BASE_URL}/juegos/ruleta`, changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${BASE_URL}/juegos/blackjack`, changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${BASE_URL}/juegos/en-vivo`, changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${BASE_URL}/juegos/baccarat`, changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${BASE_URL}/juegos/poker`, changeFrequency: 'monthly' as const, priority: 0.6 },
    { url: `${BASE_URL}/cookies`, changeFrequency: 'yearly' as const, priority: 0.2 },
    { url: `${BASE_URL}/sobre-nosotros`, changeFrequency: 'monthly' as const, priority: 0.4 },
    { url: `${BASE_URL}/contacto`, changeFrequency: 'monthly' as const, priority: 0.4 },
    { url: `${BASE_URL}/privacidad`, changeFrequency: 'yearly' as const, priority: 0.3 },
    { url: `${BASE_URL}/terminos`, changeFrequency: 'yearly' as const, priority: 0.3 },
  ];

  const comparisonRoutes = [
    { url: `${BASE_URL}/comparar`, lastModified: new Date(COMPARISONS_DATA_UPDATED), changeFrequency: 'monthly' as const, priority: 0.7 },
    ...comparisons.map((c) => ({
      url: `${BASE_URL}/comparar/${c.slug}`,
      lastModified: new Date(COMPARISONS_DATA_UPDATED),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  ];

  const casinoRoutes = casinos.map((c) => ({
    url: `${BASE_URL}/casinos/${c.slug}`,
    lastModified: new Date(CASINOS_DATA_UPDATED),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  const blogRoutes = blogPosts.map((p) => ({
    url: `${BASE_URL}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...comparisonRoutes, ...casinoRoutes, ...blogRoutes];
}
