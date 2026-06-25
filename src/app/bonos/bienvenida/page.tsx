import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ExternalLink } from 'lucide-react';
import Breadcrumb from '@/components/ui/Breadcrumb';
import { bonuses } from '@/lib/data/bonuses';
import { casinos } from '@/lib/data/casinos';

export const metadata: Metadata = {
  title: 'Mejores Bonos de Bienvenida en Perú 2026 — Hasta S/600',
  description: 'Compara los mejores bonos de bienvenida en casinos online peruanos para 2026. Análisis completo de condiciones y valor real.',
  alternates: { canonical: '/bonos/bienvenida' },
};

export default function WelcomeBonusPage() {
  const welcomeBonuses = bonuses.filter((b) => b.type === 'bienvenida');
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumb items={[{ label: 'Bonos', href: '/bonos' }, { label: 'Bienvenida' }]} />
      <div className="mt-6 mb-8">
        <h1 className="text-4xl font-black text-white mb-3">Mejores Bonos de Bienvenida en Perú 2026</h1>
        <p className="text-slate-400 max-w-2xl">Los bonos de bienvenida son la oferta que un casino te hace al registrarte y hacer tu primer depósito. Comparamos los más generosos del mercado peruano.</p>
      </div>
      <div className="space-y-4 mb-12">
        {welcomeBonuses.map((bonus, i) => (
          <div key={bonus.slug} className="bg-slate-800/60 border border-slate-700 hover:border-emerald-500/50 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(16,185,129,0.15)] rounded-2xl p-5 transition-all">
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <div className="relative">
                <div className="w-14 h-14 rounded-xl bg-slate-700 flex-shrink-0 overflow-hidden">
                  {(() => { const logo = casinos.find(c => c.name === bonus.casino)?.logo; return logo ? <Image src={logo} alt={bonus.casino} width={56} height={56} className="w-full h-full object-contain p-1" /> : <div className="w-full h-full flex items-center justify-center text-2xl font-black text-emerald-400">{bonus.casino.charAt(0)}</div>; })()}
                </div>
                {i === 0 && <div className="absolute -top-1 -right-1 w-5 h-5 bg-amber-400 rounded-full flex items-center justify-center text-xs font-black text-slate-900">1</div>}
              </div>
              <div className="flex-1">
                <div className="font-bold text-white">{bonus.casino}</div>
                <div className="text-2xl font-black text-white mt-1">{bonus.amount}</div>
                <p className="text-slate-400 text-sm mt-1">{bonus.title}</p>
                <div className="flex gap-4 mt-2 text-xs text-slate-400">
                  <span>Depósito mín: <strong className="text-white">S/{bonus.minDeposit}</strong></span>
                  <span>Wagering: <strong className="text-white">x{bonus.wagering}</strong></span>
                  {bonus.code && <span>Código: <strong className="text-amber-400 font-mono">{bonus.code}</strong></span>}
                </div>
              </div>
              <div className="flex flex-col gap-2 flex-shrink-0">
                <a href={bonus.affiliateUrl} target="_blank" rel="noopener noreferrer sponsored" className="flex items-center gap-1.5 bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-black py-3 px-6 rounded-xl transition-colors text-sm">
                  Reclamar Bono <ExternalLink size={14} />
                </a>
                <Link href={`/casinos/${bonus.casinoSlug}`} className="text-xs text-center text-slate-400 hover:text-emerald-400">Ver reseña</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
