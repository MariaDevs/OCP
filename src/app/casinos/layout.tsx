import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mejores Casinos Online en Perú 2026',
  description: 'Compara los mejores casinos online en Perú para 2026. Filtra por método de pago (Yape, Plin, Bitcoin), tipo de bono y licencia. Análisis independiente y actualizado.',
  alternates: { canonical: '/casinos' },
  openGraph: {
    title: 'Mejores Casinos Online en Perú 2026',
    description: 'Compara los mejores casinos online en Perú. Filtra por Yape, Plin, bonos y licencias.',
    url: 'https://onlinecasinoperu.com/casinos',
    type: 'website',
    images: [{ url: 'https://onlinecasinoperu.com/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mejores Casinos Online en Perú 2026',
    description: 'Compara los mejores casinos online en Perú. Filtra por Yape, Plin, bonos y licencias.',
    images: ['https://onlinecasinoperu.com/og-image.png'],
  },
};

export default function CasinosLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
