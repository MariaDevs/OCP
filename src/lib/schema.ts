import { Casino } from '@/types';

/**
 * Serialize an object for safe injection into a <script type="application/ld+json">.
 * JSON.stringify does NOT escape `<`, `>` or `&`, so a string containing
 * "</script>" (e.g. from remote content-engine copy) would close the script
 * element early and enable XSS. Escaping these to their \uXXXX forms keeps the
 * JSON valid while making break-out impossible.
 */
export function ldJson(schema: unknown): string {
  return JSON.stringify(schema)
    .replace(/</g, '\\u003c')
    .replace(/>/g, '\\u003e')
    .replace(/&/g, '\\u0026');
}

export function casinoReviewSchema(casino: Casino, url: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Review',
    name: `Reseña de ${casino.name}`,
    reviewBody: casino.longDescription,
    reviewRating: {
      '@type': 'Rating',
      ratingValue: casino.rating,
      bestRating: 5,
      worstRating: 1,
    },
    author: {
      '@type': 'Organization',
      name: 'OnlineCasinoPerú',
      url: 'https://www.onlinecasinoperu.com',
    },
    itemReviewed: {
      '@type': 'Casino',
      name: casino.name,
      url: casino.affiliateUrl,
    },
    url,
    datePublished: '2026-01-01',
    dateModified: new Date().toISOString().split('T')[0],
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function articleSchema(post: {
  title: string;
  excerpt: string;
  date: string;
  slug: string;
  image?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    url: `https://www.onlinecasinoperu.com/blog/${post.slug}`,
    image: post.image ?? 'https://www.onlinecasinoperu.com/og-image.png',
    author: {
      '@type': 'Organization',
      name: 'OnlineCasinoPerú',
      url: 'https://www.onlinecasinoperu.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'OnlineCasinoPerú',
      url: 'https://www.onlinecasinoperu.com',
      logo: { '@type': 'ImageObject', url: 'https://www.onlinecasinoperu.com/images/logo.svg' },
    },
    inLanguage: 'es-PE',
  };
}

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'OnlineCasinoPerú',
    url: 'https://www.onlinecasinoperu.com',
    logo: 'https://www.onlinecasinoperu.com/images/logo.svg',
    description: 'Guía independiente de casinos online en Perú.',
    inLanguage: 'es-PE',
    sameAs: [],
  };
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'OnlineCasinoPerú',
    url: 'https://www.onlinecasinoperu.com',
    description: 'Guía independiente de casinos online en Perú. Comparamos, analizamos y reseñamos los mejores casinos online para jugadores peruanos.',
    inLanguage: 'es-PE',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://www.onlinecasinoperu.com/buscar?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  };
}
