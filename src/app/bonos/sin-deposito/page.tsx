import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ExternalLink } from 'lucide-react';
import Breadcrumb from '@/components/ui/Breadcrumb';
import { bonuses } from '@/lib/data/bonuses';
import { casinos } from '@/lib/data/casinos';

export const metadata: Metadata = {
  title: 'Bonos Sin Depósito en Perú 2026 — Juega Gratis',
  description: 'Los mejores bonos sin depósito en casinos online peruanos para 2026. Obtén crédito gratis sin arriesgar tu dinero. Lista actualizada.',
  alternates: { canonical: '/bonos/sin-deposito' },
};

export default function NodepositPage() {
  const noDepositBonuses = bonuses.filter((b) => b.type === 'sin-deposito');

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumb items={[{ label: 'Bonos', href: '/bonos' }, { label: 'Sin Depósito' }]} />

      <div className="mt-6 mb-8">
        <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 rounded-full px-4 py-1.5 text-sm mb-4">
          <span className="text-amber-400 font-semibold">🆓 Dinero gratis — sin depósito requerido</span>
        </div>
        <h1 className="text-4xl font-black text-white mb-3">Bonos Sin Depósito en Perú 2026</h1>
        <p className="text-slate-400 max-w-2xl">
          Los bonos sin depósito te permiten probar un casino con dinero real sin arriesgar el tuyo. Son perfectos para nuevos jugadores que quieren explorar la plataforma antes de depositar.
        </p>
      </div>

      <div className="space-y-4 mb-12">
        {noDepositBonuses.length > 0 ? noDepositBonuses.map((bonus) => (
          <div key={bonus.slug} className="bg-gradient-to-r from-amber-900/20 to-slate-800/60 border border-amber-500/30 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(16,185,129,0.15)] rounded-2xl p-5 transition-all">
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <div className="w-14 h-14 rounded-xl bg-slate-700 flex-shrink-0 overflow-hidden">
                {(() => { const logo = casinos.find(c => c.name === bonus.casino)?.logo; return logo ? <Image src={logo} alt={bonus.casino} width={56} height={56} className="w-full h-full object-contain p-1" /> : <div className="w-full h-full flex items-center justify-center text-2xl font-black text-amber-400">{bonus.casino.charAt(0)}</div>; })()}
              </div>
              <div className="flex-1">
                <div className="font-bold text-white text-lg">{bonus.casino}</div>
                <div className="text-3xl font-black text-amber-400 mt-1">{bonus.amount}</div>
                {bonus.code && (
                  <div className="mt-2 inline-flex items-center gap-2 bg-slate-900 border border-dashed border-amber-400/50 rounded-lg px-3 py-1.5">
                    <span className="text-xs text-slate-400">Código:</span>
                    <span className="text-sm font-mono font-black text-amber-400">{bonus.code}</span>
                  </div>
                )}
                <div className="flex gap-4 mt-2 text-xs text-slate-400">
                  <span>Wagering: <strong className="text-white">x{bonus.wagering}</strong></span>
                  <span>Validez: <strong className="text-white">{bonus.validity} días</strong></span>
                </div>
              </div>
              <div className="flex flex-col gap-2 flex-shrink-0">
                <a href={bonus.affiliateUrl} target="_blank" rel="noopener noreferrer sponsored" className="flex items-center gap-1.5 bg-amber-500 hover:bg-amber-400 text-slate-900 font-black py-3 px-6 rounded-xl transition-colors">
                  Obtener Gratis <ExternalLink size={14} />
                </a>
                <Link href={`/casinos/${bonus.casinoSlug}`} className="text-xs text-center text-slate-400 hover:text-emerald-400">Ver reseña completa</Link>
              </div>
            </div>
          </div>
        )) : (
          <div className="text-center py-12 text-slate-400">
            <div className="text-5xl mb-4">🔜</div>
            <p>Pronto tendremos bonos sin depósito actualizados. Visita la <Link href="/bonos" className="text-emerald-400 hover:underline">página de bonos</Link> para ver todas las ofertas.</p>
          </div>
        )}
      </div>

      <section>
        <h2 className="text-2xl font-black text-white mb-4">¿Cómo Reclamar un Bono Sin Depósito en Perú?</h2>
        <div className="space-y-4">
          {[
            ['Registra tu cuenta', 'Crea una cuenta en el casino que ofrece el bono. Solo necesitas un email y datos básicos.'],
            ['Verifica tu identidad', 'Algunos casinos piden verificar tu DNI peruano antes de entregar el bono.'],
            ['Introduce el código', 'Si el bono tiene código promocional, introdúcelo en la sección de bonos de tu cuenta.'],
            ['Recibe el bono', 'El crédito se acreditará automáticamente en tu cuenta. ¡Ya puedes jugar!'],
            ['Cumple el wagering', 'Apuesta el bono la cantidad de veces indicada antes de solicitar un retiro.'],
          ].map(([title, desc], i) => (
            <div key={title} className="flex gap-4 bg-slate-800/60 border border-slate-700 rounded-xl p-4">
              <div className="w-8 h-8 rounded-full bg-emerald-500 text-slate-900 font-black flex items-center justify-center flex-shrink-0 text-sm">
                {i + 1}
              </div>
              <div>
                <div className="font-bold text-white text-sm">{title}</div>
                <div className="text-slate-400 text-sm mt-0.5">{desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
