import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/'],
      },
    ],
    // Canonical host is www (see the canonical tags and sitemap <loc> values).
    // Pointing these at the bare domain sent crawlers through a 308 hop on the
    // one file they use to discover everything.
    sitemap: 'https://www.onlinecasinoperu.com/sitemap.xml',
    host: 'https://www.onlinecasinoperu.com',
  };
}
