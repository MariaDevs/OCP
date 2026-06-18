import { MetadataRoute } from 'next';
import { casinos } from '@/lib/data/casinos';
import { blogPosts } from '@/lib/data/blog';

export const dynamic = 'force-static';

const BASE_URL = 'https://onlinecasinoperu.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    { url: BASE_URL, changeFrequency: 'daily' as const, priority: 1.0 },
    { url: `${BASE_URL}/casinos`, changeFrequency: 'daily' as const, priority: 0.9 },
    { url: `${BASE_URL}/bonos`, changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: `${BASE_URL}/bonos/bienvenida`, changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${BASE_URL}/bonos/sin-deposito`, changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${BASE_URL}/bonos/tiradas-gratis`, changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${BASE_URL}/metodos-de-pago`, changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${BASE_URL}/juegos/tragamonedas`, changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${BASE_URL}/blog`, changeFrequency: 'daily' as const, priority: 0.8 },
    { url: `${BASE_URL}/juego-responsable`, changeFrequency: 'monthly' as const, priority: 0.5 },
    { url: `${BASE_URL}/juegos`, changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${BASE_URL}/juegos/ruleta`, changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${BASE_URL}/juegos/blackjack`, changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${BASE_URL}/juegos/en-vivo`, changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${BASE_URL}/sobre-nosotros`, changeFrequency: 'monthly' as const, priority: 0.4 },
    { url: `${BASE_URL}/contacto`, changeFrequency: 'monthly' as const, priority: 0.4 },
    { url: `${BASE_URL}/privacidad`, changeFrequency: 'yearly' as const, priority: 0.3 },
    { url: `${BASE_URL}/terminos`, changeFrequency: 'yearly' as const, priority: 0.3 },
  ];

  const casinoRoutes = casinos.map((c) => ({
    url: `${BASE_URL}/casinos/${c.slug}`,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  const blogRoutes = blogPosts.map((p) => ({
    url: `${BASE_URL}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...casinoRoutes, ...blogRoutes];
}
