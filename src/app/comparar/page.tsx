import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';
import Breadcrumb from '@/components/ui/Breadcrumb';
import { casinos } from '@/lib/data/casinos';
import { comparisons } from '@/lib/data/comparisons';

export const metadata: Metadata = {
  title: 'Comparar Casinos Online en Perú 2026 — ¿Cuál es Mejor?',
  description: 'Compara los mejores casinos online en Perú lado a lado: bonos, licencias, métodos de pago, retiros y más. Elige el casino que mejor se adapta a ti.',
  alternates: { canonical: '/comparar' },
};

export default function ComparePage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <Breadcrumb items={[{ label: 'Comparar Casinos' }]} />

      <div className="mt-6 mb-10">
        <h1 className="text-4xl font-black text-white mb-4">Comparar Casinos Online en Perú</h1>
        <p className="text-slate-400 text-lg max-w-2xl">
          Análisis lado a lado de los casinos más populares en Perú. Encuentra cuál ofrece el mejor bono, los retiros más rápidos y la mejor experiencia para jugadores peruanos.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {comparisons.map((comp) => {
          const c1 = casinos.find((c) => c.slug === comp.casino1Slug);
          const c2 = casinos.find((c) => c.slug === comp.casino2Slug);
          if (!c1 || !c2) return null;
          return (
            <Link
              key={comp.slug}
              href={`/comparar/${comp.slug}`}
              className="group bg-slate-800/60 border border-slate-700 hover:border-emerald-500/50 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(16,185,129,0.12)] rounded-2xl p-5 transition-all"
            >
              <div className="flex items-center justify-between gap-2 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-xl bg-slate-700 overflow-hidden flex-shrink-0">
                    {c1.logo
                      ? <Image src={c1.logo} alt={c1.name} width={40} height={40} className="w-full h-full object-contain p-0.5" />
                      : <div className="w-full h-full flex items-center justify-center font-black text-emerald-400 text-sm">{c1.name.charAt(0)}</div>
                    }
                  </div>
                  <span className="font-bold text-white text-sm">{c1.name.replace(' Perú', '')}</span>
                </div>
                <span className="text-slate-500 font-black text-sm">VS</span>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-white text-sm">{c2.name.replace(' Perú', '')}</span>
                  <div className="w-10 h-10 rounded-xl bg-slate-700 overflow-hidden flex-shrink-0">
                    {c2.logo
                      ? <Image src={c2.logo} alt={c2.name} width={40} height={40} className="w-full h-full object-contain p-0.5" />
                      : <div className="w-full h-full flex items-center justify-center font-black text-emerald-400 text-sm">{c2.name.charAt(0)}</div>
                    }
                  </div>
                </div>
              </div>
              <div className="flex justify-between text-xs text-slate-400 mb-3">
                <span>{c1.bonus.amount}</span>
                <span>{c2.bonus.amount}</span>
              </div>
              <div className="flex items-center gap-1 text-emerald-400 text-xs font-semibold group-hover:text-emerald-300 transition-colors">
                Ver comparativa completa <ChevronRight size={13} />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
