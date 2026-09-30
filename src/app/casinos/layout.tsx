import type { Metadata } from 'next';

/**
 * Intent separation (see also /casino-online-peru):
 *   /        -> "mejores casinos online peru" (editorial best-of ranking)
 *   /casinos -> "casinos online peru" (this page: the full filterable directory)
 * Keep "Mejores ..." phrasing on the homepage only — these two titles were
 * byte-identical before, which split their signals for the same SERP.
 */
export const metadata: Metadata = {
  title: 'Casinos Online en Perú 2026: Lista Completa de Operadores',
  description: 'Directorio completo de casinos online disponibles en Perú. Filtra por método de pago (Yape, Plin, Bitcoin), tipo de bono, licencia y tiempo de retiro.',
  alternates: { canonical: '/casinos' },
  openGraph: {
    title: 'Casinos Online en Perú 2026: Lista Completa de Operadores',
    description: 'Directorio filtrable de casinos online en Perú: método de pago, bono, licencia y tiempos de retiro.',
    url: 'https://www.onlinecasinoperu.com/casinos',
    type: 'website',
    images: [{ url: 'https://www.onlinecasinoperu.com/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Casinos Online en Perú 2026: Lista Completa de Operadores',
    description: 'Directorio filtrable de casinos online en Perú: método de pago, bono, licencia y tiempos de retiro.',
    images: ['https://www.onlinecasinoperu.com/og-image.png'],
  },
};

export default function CasinosLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
