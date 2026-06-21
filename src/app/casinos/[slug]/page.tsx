import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle2, XCircle, ExternalLink, Shield, Clock, Star, Trophy, ChevronRight, Banknote } from 'lucide-react';
import Breadcrumb from '@/components/ui/Breadcrumb';
import StarRating from '@/components/ui/StarRating';
import Badge from '@/components/ui/Badge';
import { casinos, getCasinoBySlug } from '@/lib/data/casinos';
import { casinoReviewSchema, breadcrumbSchema } from '@/lib/schema';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return casinos.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const casino = getCasinoBySlug(slug);
  if (!casino) return {};
  const title = `${casino.name} Reseña 2026 — Bono ${casino.bonus.amount}`;
  const description = `Reseña completa y actualizada de ${casino.name}. ${casino.description} Bono de bienvenida: ${casino.bonus.amount}. Análisis de expertos.`;
  const url = `https://onlinecasinoperu.com/casinos/${slug}`;
  return {
    title,
    description,
    alternates: { canonical: `/casinos/${slug}` },
    openGraph: {
      title,
      description,
      url,
      type: 'article',
      images: [{ url: 'https://onlinecasinoperu.com/og-image.png', width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['https://onlinecasinoperu.com/og-image.png'],
    },
  };
}

export default async function CasinoReviewPage({ params }: Props) {
  const { slug } = await params;
  const casino = getCasinoBySlug(slug);
  if (!casino) notFound();

  const url = `https://onlinecasinoperu.com/casinos/${slug}`;
  const schema = casinoReviewSchema(casino, url);
  const breadcrumbs = breadcrumbSchema([
    { name: 'Inicio', url: 'https://onlinecasinoperu.com' },
    { name: 'Casinos', url: 'https://onlinecasinoperu.com/casinos' },
    { name: casino.name, url },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />

      <div className="max-w-7xl mx-auto px-4 py-8">
        <Breadcrumb items={[{ label: 'Casinos', href: '/casinos' }, { label: casino.name }]} />

        <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main content */}
          <div className="lg:col-span-2">
            {/* Header */}
            <div className="bg-slate-800/60 border border-slate-700 rounded-2xl p-6 mb-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-20 h-20 rounded-xl bg-slate-700 flex items-center justify-center text-3xl font-black text-emerald-400 border border-slate-600 flex-shrink-0">
                  {casino.name.charAt(0)}
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h1 className="text-2xl font-black text-white">{casino.name}</h1>
                    {casino.badge && <Badge type={casino.badge} />}
                    {casino.verified && <Badge type="verificado" />}
                  </div>
                  <StarRating rating={casino.rating} reviewCount={casino.reviewCount} size="md" />
                  <div className="flex flex-wrap gap-4 mt-3 text-sm text-slate-400">
                    <span className="flex items-center gap-1.5"><Shield size={13} className="text-emerald-400" />{casino.license}</span>
                    <span className="flex items-center gap-1.5"><Clock size={13} className="text-emerald-400" />Retiros: {casino.withdrawalTime}</span>
                  </div>
                </div>
              </div>

              <p className="text-slate-300 leading-relaxed">{casino.description}</p>

              <div className="flex gap-3 mt-5">
                <a
                  href={casino.affiliateUrl}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="flex-1 flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-black py-3 px-6 rounded-xl transition-colors"
                >
                  Obtener Bono — {casino.bonus.amount} <ExternalLink size={16} />
                </a>
              </div>
              <p className="text-xs text-slate-500 mt-2 text-center">Se aplican T&C. Juega con responsabilidad. +18</p>
            </div>

            {/* Pros & Cons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="bg-emerald-900/20 border border-emerald-500/30 rounded-2xl p-4">
                <h2 className="font-bold text-emerald-400 mb-3 flex items-center gap-2">
                  <CheckCircle2 size={16} /> Ventajas
                </h2>
                <ul className="space-y-2">
                  {casino.pros.map((pro) => (
                    <li key={pro} className="flex items-start gap-2 text-sm text-slate-300">
                      <CheckCircle2 size={14} className="text-emerald-400 mt-0.5 flex-shrink-0" />
                      {pro}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-red-900/20 border border-red-500/30 rounded-2xl p-4">
                <h2 className="font-bold text-red-400 mb-3 flex items-center gap-2">
                  <XCircle size={16} /> Desventajas
                </h2>
                <ul className="space-y-2">
                  {casino.cons.map((con) => (
                    <li key={con} className="flex items-start gap-2 text-sm text-slate-300">
                      <XCircle size={14} className="text-red-400 mt-0.5 flex-shrink-0" />
                      {con}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Full review */}
            <div className="bg-slate-800/60 border border-slate-700 rounded-2xl p-6 mb-6">
              <h2 className="text-xl font-black text-white mb-4">Reseña Completa de {casino.name}</h2>
              <p className="text-slate-300 leading-relaxed">{casino.longDescription}</p>

              <h3 className="text-lg font-bold text-white mt-6 mb-3">Métodos de Pago Aceptados</h3>
              <div className="flex flex-wrap gap-2">
                {casino.paymentMethods.map((method) => (
                  <span key={method} className="text-sm bg-slate-700 text-slate-200 border border-slate-600 rounded-lg px-3 py-1.5 font-medium">
                    {method}
                  </span>
                ))}
              </div>

              <h3 className="text-lg font-bold text-white mt-6 mb-3">Tipos de Juegos Disponibles</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {Object.entries(casino.games).map(([game, available]) => (
                  <div key={game} className={`flex items-center gap-2 text-sm rounded-lg px-3 py-2 border ${available ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400' : 'bg-slate-700 border-slate-600 text-slate-500'}`}>
                    {available ? <CheckCircle2 size={14} /> : <XCircle size={14} />}
                    {game === 'slots' ? 'Tragamonedas' : game === 'liveCasino' ? 'Casino en Vivo' : game === 'blackjack' ? 'Blackjack' : game === 'roulette' ? 'Ruleta' : game === 'poker' ? 'Poker' : 'Deportes'}
                  </div>
                ))}
              </div>
            </div>

            {/* Rating breakdown */}
            <div className="bg-slate-800/60 border border-slate-700 rounded-2xl p-6">
              <h2 className="text-xl font-black text-white mb-4">Calificación Detallada</h2>
              {[
                { label: 'Seguridad y Licencia', score: 9.5 },
                { label: 'Variedad de Juegos', score: 9.0 },
                { label: 'Bonos y Promociones', score: 8.8 },
                { label: 'Métodos de Pago', score: 9.2 },
                { label: 'Soporte al Cliente', score: 8.9 },
                { label: 'Experiencia Móvil', score: casino.mobileApp ? 9.5 : 8.0 },
              ].map((item) => (
                <div key={item.label} className="mb-4">
                  <div className="flex justify-between text-sm mb-1.5">
                    <span className="text-slate-300 font-medium">{item.label}</span>
                    <span className="text-emerald-400 font-bold">{item.score}/10</span>
                  </div>
                  <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-emerald-500 to-emerald-400 rounded-full" style={{ width: `${item.score * 10}%` }} />
                  </div>
                </div>
              ))}

              <div className="mt-4 pt-4 border-t border-slate-700 flex items-center justify-between">
                <span className="font-bold text-white">Puntuación Total</span>
                <div className="flex items-center gap-2">
                  <StarRating rating={casino.rating} size="lg" showNumber={false} />
                  <span className="text-2xl font-black text-amber-400">{casino.rating}/5</span>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-4">
            {/* Bonus card */}
            <div className="bg-gradient-to-br from-emerald-900/30 to-slate-800/60 border border-emerald-500/30 rounded-2xl p-5 sticky top-24">
              <div className="flex items-center gap-2 mb-3">
                <Trophy size={16} className="text-amber-400" />
                <span className="text-amber-400 font-bold text-sm uppercase tracking-wider">Bono Exclusivo</span>
              </div>
              <div className="text-3xl font-black text-white mb-1">{casino.bonus.amount}</div>
              {casino.bonus.freeSpins && (
                <div className="text-amber-400 font-bold text-lg">+ {casino.bonus.freeSpins} Tiradas Gratis</div>
              )}
              <div className="mt-4 space-y-2 text-sm">
                <div className="flex justify-between text-slate-400 border-b border-slate-700 pb-2">
                  <span>Depósito mínimo</span>
                  <strong className="text-white">S/{casino.bonus.minDeposit}</strong>
                </div>
                <div className="flex justify-between text-slate-400 border-b border-slate-700 pb-2">
                  <span>Requisito de apuesta</span>
                  <strong className="text-white">x{casino.bonus.wagering}</strong>
                </div>
                {casino.bonus.code && (
                  <div className="flex justify-between text-slate-400 border-b border-slate-700 pb-2">
                    <span>Código promo</span>
                    <strong className="text-amber-400 font-mono">{casino.bonus.code}</strong>
                  </div>
                )}
                <div className="flex justify-between text-slate-400">
                  <span>Licencia</span>
                  <strong className="text-white text-right max-w-[60%]">{casino.license.split(' ')[0]}</strong>
                </div>
              </div>
              <a
                href={casino.affiliateUrl}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="mt-5 w-full flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-black py-3.5 rounded-xl transition-colors"
              >
                Reclamar Bono <ExternalLink size={16} />
              </a>
              <p className="text-xs text-slate-500 mt-2 text-center">Se aplican T&C. +18</p>
            </div>

            {/* Quick facts */}
            <div className="bg-slate-800/60 border border-slate-700 rounded-2xl p-4">
              <h3 className="font-bold text-white mb-3 text-sm">Datos Rápidos</h3>
              <div className="space-y-2 text-sm">
                {[
                  ['Fundado', casino.founded.toString()],
                  ['Retiro mínimo', `S/${casino.minWithdrawal}`],
                  ['App móvil', casino.mobileApp ? '✅ Disponible' : '❌ No disponible'],
                  ['Chat en vivo', casino.liveChat ? '✅ 24/7' : '❌ No disponible'],
                ].map(([key, val]) => (
                  <div key={key} className="flex justify-between text-slate-400 border-b border-slate-800 pb-2 last:border-0 last:pb-0">
                    <span>{key}</span>
                    <strong className="text-slate-200">{val}</strong>
                  </div>
                ))}
              </div>
            </div>

            {/* Other casinos */}
            <div className="bg-slate-800/60 border border-slate-700 rounded-2xl p-4">
              <h3 className="font-bold text-white mb-3 text-sm">Otros Casinos Recomendados</h3>
              <div className="space-y-3">
                {casinos.filter((c) => c.slug !== casino.slug).slice(0, 3).map((c) => (
                  <Link key={c.slug} href={`/casinos/${c.slug}`} className="flex items-center gap-3 group">
                    <div className="w-8 h-8 rounded-lg bg-slate-700 flex items-center justify-center text-xs font-black text-emerald-400 flex-shrink-0">
                      {c.name.charAt(0)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-medium text-slate-200 group-hover:text-emerald-400 transition-colors truncate">{c.name}</div>
                      <div className="text-xs text-slate-400">{c.bonus.amount}</div>
                    </div>
                    <ChevronRight size={14} className="text-slate-600 group-hover:text-emerald-400 transition-colors" />
                  </Link>
                ))}
              </div>
              <Link href="/casinos" className="mt-3 block text-center text-xs text-emerald-400 hover:text-emerald-300 font-semibold">
                Ver todos los casinos →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
