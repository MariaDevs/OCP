import type { Metadata } from 'next';
import Link from 'next/link';
import { ExternalLink, ChevronRight, Gift } from 'lucide-react';
import Breadcrumb from '@/components/ui/Breadcrumb';
import StarRating from '@/components/ui/StarRating';
import { bonuses } from '@/lib/data/bonuses';

export const metadata: Metadata = {
  title: 'Mejores Bonos de Casino Online en Perú 2026',
  description: 'Compara los mejores bonos de casino online en Perú: bonos de bienvenida, sin depósito y tiradas gratis. Actualizado junio 2026.',
  alternates: { canonical: '/bonos' },
};

const bonusTypes = [
  { slug: 'bienvenida', label: 'Bonos de Bienvenida', icon: '🎁', desc: 'El mejor regalo para nuevos jugadores' },
  { slug: 'sin-deposito', label: 'Bonos Sin Depósito', icon: '🆓', desc: 'Prueba el casino sin arriesgar tu dinero' },
  { slug: 'tiradas-gratis', label: 'Tiradas Gratis', icon: '🎰', desc: 'Giros gratis en las mejores tragamonedas' },
];

export default function BonusesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Breadcrumb items={[{ label: 'Bonos de Casino' }]} />

      <div className="mt-6 mb-8">
        <h1 className="text-4xl font-black text-white mb-3">Mejores Bonos de Casino Online en Perú 2026</h1>
        <p className="text-slate-400 max-w-3xl">
          Analizamos y comparamos los bonos más generosos disponibles para jugadores peruanos. Todos con condiciones claras y verificadas por nuestro equipo.
        </p>
      </div>

      {/* Bonus type cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
        {bonusTypes.map((t) => (
          <Link key={t.slug} href={`/bonos/${t.slug}`} className="bg-slate-800/60 border border-slate-700 hover:border-emerald-500/50 rounded-2xl p-5 transition-all hover:-translate-y-1 group">
            <div className="text-4xl mb-3">{t.icon}</div>
            <h2 className="font-bold text-white group-hover:text-emerald-400 transition-colors">{t.label}</h2>
            <p className="text-slate-400 text-sm mt-1">{t.desc}</p>
            <div className="flex items-center gap-1 text-emerald-400 text-sm font-semibold mt-3">
              Ver bonos <ChevronRight size={14} />
            </div>
          </Link>
        ))}
      </div>

      <h2 className="text-2xl font-black text-white mb-6">Todos los Bonos Disponibles</h2>

      <div className="space-y-4">
        {bonuses.map((bonus) => (
          <div key={bonus.slug} className="bg-slate-800/60 border border-slate-700 hover:border-emerald-500/50 rounded-2xl p-5 transition-all flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            <div className="w-14 h-14 rounded-xl bg-slate-700 flex items-center justify-center text-2xl font-black text-emerald-400 flex-shrink-0">
              {bonus.casino.charAt(0)}
            </div>
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <span className="font-bold text-white">{bonus.casino}</span>
                <span className="text-xs bg-emerald-500/20 text-emerald-400 rounded-full px-2 py-0.5">
                  {bonus.type === 'bienvenida' ? '🎁 Bienvenida' : bonus.type === 'sin-deposito' ? '🆓 Sin Depósito' : '🎰 Tiradas Gratis'}
                </span>
              </div>
              <p className="text-xl font-black text-white">{bonus.amount}</p>
              <p className="text-sm text-slate-400 mt-1">{bonus.title}</p>
              <div className="flex flex-wrap gap-4 mt-2 text-xs text-slate-400">
                <span>Depósito min: <strong className="text-white">S/{bonus.minDeposit}</strong></span>
                <span>Wagering: <strong className="text-white">x{bonus.wagering}</strong></span>
                <span>Validez: <strong className="text-white">{bonus.validity} días</strong></span>
                {bonus.code && <span>Código: <strong className="text-amber-400 font-mono">{bonus.code}</strong></span>}
              </div>
            </div>
            <div className="flex flex-col gap-2 flex-shrink-0">
              <StarRating rating={bonus.rating} size="sm" showNumber={true} />
              <a href={bonus.affiliateUrl} target="_blank" rel="noopener noreferrer sponsored" className="flex items-center justify-center gap-1.5 bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-bold py-2.5 px-5 rounded-xl transition-colors text-sm whitespace-nowrap">
                Reclamar <ExternalLink size={13} />
              </a>
              <Link href={`/casinos/${bonus.casinoSlug}`} className="text-xs text-center text-slate-400 hover:text-emerald-400 transition-colors">
                Ver reseña
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* SEO section */}
      <section className="mt-16">
        <h2 className="text-2xl font-black text-white mb-4">¿Cómo Funcionan los Bonos de Casino Online en Perú?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-slate-400">
          <div>
            <h3 className="text-white font-bold mb-2">Requisitos de Apuesta (Wagering)</h3>
            <p className="text-sm leading-relaxed">El wagering o requisito de apuesta es la cantidad de veces que debes apostar el bono antes de poder retirarlo. Por ejemplo, un bono de S/100 con wagering x35 significa que debes apostar S/3,500 antes de retirar las ganancias.</p>
          </div>
          <div>
            <h3 className="text-white font-bold mb-2">Bonos Sin Depósito vs Bienvenida</h3>
            <p className="text-sm leading-relaxed">Los bonos sin depósito te dan crédito gratis sin arriesgar tu dinero, pero suelen ser pequeños (S/20-50). Los bonos de bienvenida son más grandes (hasta S/600), pero requieren un depósito inicial.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
