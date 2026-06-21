import { Casino } from '@/types';

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
      url: 'https://onlinecasinoperu.com',
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

export function articleSchema(post: { title: string; excerpt: string; date: string; slug: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    url: `https://onlinecasinoperu.com/blog/${post.slug}`,
    image: 'https://onlinecasinoperu.com/og-image.png',
    author: {
      '@type': 'Organization',
      name: 'OnlineCasinoPerú',
      url: 'https://onlinecasinoperu.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'OnlineCasinoPerú',
      url: 'https://onlinecasinoperu.com',
      logo: { '@type': 'ImageObject', url: 'https://onlinecasinoperu.com/images/logo.svg' },
    },
    inLanguage: 'es-PE',
  };
}

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'OnlineCasinoPerú',
    url: 'https://onlinecasinoperu.com',
    logo: 'https://onlinecasinoperu.com/images/logo.svg',
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
    url: 'https://onlinecasinoperu.com',
    description: 'Guía independiente de casinos online en Perú. Comparamos, analizamos y reseñamos los mejores casinos online para jugadores peruanos.',
    inLanguage: 'es-PE',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://onlinecasinoperu.com/buscar?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  };
}
