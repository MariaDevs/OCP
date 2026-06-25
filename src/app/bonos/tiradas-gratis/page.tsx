import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ExternalLink } from 'lucide-react';
import Breadcrumb from '@/components/ui/Breadcrumb';
import { bonuses } from '@/lib/data/bonuses';
import { casinos } from '@/lib/data/casinos';

export const metadata: Metadata = {
  title: 'Tiradas Gratis en Casinos Online Perú 2026 — Free Spins',
  description: 'Los mejores bonos de tiradas gratis (free spins) en casinos online para jugadores peruanos. Gira sin riesgo y gana real.',
  alternates: { canonical: '/bonos/tiradas-gratis' },
};

export default function FreeSpinsPage() {
  const freeSpinsBonuses = bonuses.filter((b) => b.type === 'tiradas-gratis');
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumb items={[{ label: 'Bonos', href: '/bonos' }, { label: 'Tiradas Gratis' }]} />
      <div className="mt-6 mb-8">
        <h1 className="text-4xl font-black text-white mb-3">Tiradas Gratis (Free Spins) en Perú 2026</h1>
        <p className="text-slate-400 max-w-2xl">Las tiradas gratis te permiten girar las mejores tragamonedas sin gastar tu propio dinero. Perfectas para descubrir nuevos juegos y ganar sin riesgo adicional.</p>
      </div>
      <div className="space-y-4 mb-12">
        {freeSpinsBonuses.length > 0 ? freeSpinsBonuses.map((bonus) => (
          <div key={bonus.slug} className="bg-gradient-to-r from-purple-900/20 to-slate-800/60 border border-purple-500/30 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(16,185,129,0.15)] rounded-2xl p-5 transition-all">
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <div className="w-14 h-14 rounded-xl bg-slate-700 flex-shrink-0 overflow-hidden">
                {(() => { const logo = casinos.find(c => c.name === bonus.casino)?.logo; return logo ? <Image src={logo} alt={bonus.casino} width={56} height={56} className="w-full h-full object-contain p-1" /> : <div className="w-full h-full flex items-center justify-center text-2xl font-black text-purple-400">{bonus.casino.charAt(0)}</div>; })()}
              </div>
              <div className="flex-1">
                <div className="font-bold text-white">{bonus.casino}</div>
                <div className="text-3xl font-black text-purple-400 mt-1">{bonus.amount}</div>
                <p className="text-slate-400 text-sm mt-1">{bonus.title}</p>
                <div className="flex gap-4 mt-2 text-xs text-slate-400">
                  <span>Wagering: <strong className="text-white">x{bonus.wagering}</strong></span>
                  <span>Validez: <strong className="text-white">{bonus.validity} días</strong></span>
                </div>
              </div>
              <a href={bonus.affiliateUrl} target="_blank" rel="noopener noreferrer sponsored" className="flex items-center gap-1.5 bg-purple-500 hover:bg-purple-400 text-white font-black py-3 px-6 rounded-xl transition-colors text-sm flex-shrink-0">
                Obtener Spins <ExternalLink size={14} />
              </a>
            </div>
          </div>
        )) : (
          <div className="text-center py-12 text-slate-400">
            <div className="text-5xl mb-4">🎰</div>
            <p>Tiradas gratis próximamente. Mientras tanto, consulta los <Link href="/bonos/bienvenida" className="text-emerald-400 hover:underline">bonos de bienvenida</Link> que incluyen free spins.</p>
          </div>
        )}
      </div>

      <section>
        <h2 className="text-2xl font-black text-white mb-4">¿Qué son las Tiradas Gratis en Casinos Online?</h2>
        <p className="text-slate-400 leading-relaxed mb-4">Las tiradas gratis (también llamadas free spins) son giros adicionales en tragamonedas que el casino te regala como parte de un bono. Son una de las formas más populares de bonificación porque te permiten ganar dinero real sin necesidad de arriesgar el tuyo.</p>
        <p className="text-slate-400 leading-relaxed">La mayoría de tiradas gratis tienen un valor fijo por spin (generalmente S/0.10 - S/0.20) y se aplican a tragamonedas específicas elegidas por el casino. Las ganancias obtenidas suelen estar sujetas a requisitos de apuesta antes de poder retirarse.</p>
      </section>
    </div>
  );
}
