import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { websiteSchema, organizationSchema, ldJson } from "@/lib/schema";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.onlinecasinoperu.com"),
  title: {
    default: "Mejores Casinos Online en Perú 2026 | CasinoPerú.com",
    template: "%s | CasinoPerú.com",
  },
  description:
    "Guía independiente de casinos online en Perú. Comparamos los mejores casinos, bonos, tiradas gratis y métodos de pago como Yape y Plin para jugadores peruanos en 2026.",
  keywords: [
    "casino online peru",
    "casinos online peru",
    "casino online peru 2026",
    "bonos casino peru",
    "yape casino",
    "plin casino",
    "casino en vivo peru",
    "tragamonedas peru",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_PE",
    siteName: "CasinoPerú.com",
    title: "Mejores Casinos Online en Perú 2026",
    description:
      "Guía independiente con los mejores casinos online para jugadores peruanos. Compara bonos, métodos de pago y reseñas expertas.",
    url: "https://www.onlinecasinoperu.com",
    images: [
      {
        url: "https://www.onlinecasinoperu.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "CasinoPerú.com — Mejores Casinos Online en Perú 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mejores Casinos Online en Perú 2026 | CasinoPerú.com",
    description:
      "Guía independiente con los mejores casinos online para jugadores peruanos. Compara bonos, métodos de pago y reseñas expertas.",
    images: ["https://www.onlinecasinoperu.com/og-image.png"],
  },
  icons: {
    icon: '/images/logo-icon.svg',
    apple: '/images/logo-icon.svg',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es-PE"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: ldJson(websiteSchema()) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: ldJson(organizationSchema()) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#0A0E1A] text-slate-100">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
