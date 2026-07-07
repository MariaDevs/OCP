import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Breadcrumb from '@/components/ui/Breadcrumb';
import { casinos } from '@/lib/data/casinos';

export const metadata: Metadata = {
  title: 'Baccarat Online Perú 2026 — Guía y Mejores Casinos',
  description: 'Guía completa de baccarat online en Perú: reglas, variantes, estrategias y los mejores casinos donde jugar en 2026.',
  alternates: { canonical: '/juegos/baccarat' },
};

const variants = [
  { name: 'Baccarat Clásico', edge: '1.06%', desc: 'La versión estándar. Apuesta al Banker para la menor ventaja de la casa.', recommended: true },
  { name: 'Speed Baccarat', edge: '1.06%', desc: 'Mismas reglas pero con rondas de solo 27 segundos. Ideal para sesiones rápidas.', recommended: true },
  { name: 'Lightning Baccarat', edge: '2.85%', desc: 'Evolution Gaming. Multiplicadores aleatorios de hasta 512x en apuestas ganadoras.', recommended: false },
  { name: 'No Commission Baccarat', edge: '1.24%', desc: 'Sin comisión del 5% en apuestas Banker. La ganancia de Banker se paga 1:1 (salvo en 6).', recommended: true },
];

const tips = [
  { icon: '🏦', title: 'Apuesta siempre al Banker', desc: 'Con una ventaja del 1.06%, Banker es matemáticamente la mejor apuesta. La comisión del 5% ya está incluida en ese porcentaje.' },
  { icon: '🚫', title: 'Evita la apuesta Tie', desc: 'El Tie paga 8:1 pero tiene una ventaja de la casa del 14.4%. Atractivo visualmente, terrible matemáticamente.' },
  { icon: '📊', title: 'Gestiona tu bankroll', desc: 'Define un límite de pérdida antes de sentarte. El baccarat puede tener rachas largas — ten presupuesto para aguantarlas.' },
  { icon: '⚡', title: 'Juega Speed Baccarat', desc: 'Si buscas más partidas por hora, Speed Baccarat mantiene las mismas probabilidades con rondas de 27 segundos.' },
];

export default function BaccaratPage() {
  const liveCasinos = casinos.filter((c) => c.games.liveCasino);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Breadcrumb items={[{ label: 'Juegos', href: '/juegos' }, { label: 'Baccarat' }]} />

      <div className="mt-6 mb-10">
        <h1 className="text-4xl font-black text-white mb-3">Baccarat Online en Perú 2026</h1>
        <p className="text-slate-400 max-w-3xl">El baccarat es el juego favorito de los high rollers. Con una ventaja de la casa del 1.06%, es uno de los juegos de mesa con mejor retorno. Guía completa para jugadores peruanos.</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
        {[
          { icon: '📊', title: 'Ventaja 1.06%', desc: 'Apuesta al Banker. Uno de los mejores RTPs en casino.' },
          { icon: '🎯', title: 'Solo 3 apuestas', desc: 'Banker, Player o Tie. Reglas simples, sin decisiones complejas.' },
          { icon: '🎴', title: 'Favorito de VIPs', desc: 'El juego más jugado en casinos de Asia y entre high rollers del mundo.' },
        ].map((item) => (
          <div key={item.title} className="bg-slate-800/60 border border-slate-700 rounded-xl p-4 text-center">
            <div className="text-3xl mb-2">{item.icon}</div>
            <div className="font-bold text-white text-sm mb-1">{item.title}</div>
            <div className="text-slate-400 text-xs">{item.desc}</div>
          </div>
        ))}
      </div>

      {/* Reglas básicas */}
      <section className="mb-12">
        <h2 className="text-2xl font-black text-white mb-4">Cómo se Juega el Baccarat</h2>
        <div className="bg-slate-800/60 border border-slate-700 rounded-xl p-6">
          <p className="text-slate-400 mb-4">El baccarat es simple: dos manos se reparten (Banker y Player), y debes apostar cuál tendrá un valor más cercano a 9.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            <div>
              <div className="font-bold text-white mb-2">Valor de las cartas:</div>
              <ul className="space-y-1 text-slate-400">
                <li>• As = 1 punto</li>
                <li>• 2-9 = valor nominal</li>
                <li>• 10, J, Q, K = 0 puntos</li>
              </ul>
            </div>
            <div>
              <div className="font-bold text-white mb-2">Pagos:</div>
              <ul className="space-y-1 text-slate-400">
                <li>• Banker gana: paga 0.95:1 (5% comisión)</li>
                <li>• Player gana: paga 1:1</li>
                <li>• Tie: paga 8:1 (evitar)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Variantes */}
      <section className="mb-12">
        <h2 className="text-2xl font-black text-white mb-5">Variantes de Baccarat Disponibles en Perú</h2>
        <div className="space-y-3">
          {variants.map((v) => (
            <div key={v.name} className={`rounded-xl border p-4 flex flex-col sm:flex-row gap-3 items-start ${v.recommended ? 'bg-emerald-900/10 border-emerald-500/30' : 'bg-slate-800/50 border-slate-700'}`}>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-bold text-white">{v.name}</span>
                  {v.recommended && <span className="text-xs bg-emerald-500/20 text-emerald-400 rounded-full px-2 py-0.5">Recomendado</span>}
                </div>
                <p className="text-slate-400 text-sm">{v.desc}</p>
              </div>
              <div className="text-right flex-shrink-0">
                <div className="text-xs text-slate-400">Ventaja casa</div>
                <div className={`font-black text-lg ${v.recommended ? 'text-emerald-400' : 'text-red-400'}`}>{v.edge}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tips */}
      <section className="mb-12">
        <h2 className="text-2xl font-black text-white mb-5">Consejos para Jugar Baccarat</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {tips.map((t) => (
            <div key={t.title} className="bg-slate-800/60 border border-slate-700 rounded-xl p-4 flex gap-3">
              <span className="text-2xl flex-shrink-0">{t.icon}</span>
              <div>
                <div className="font-bold text-white text-sm mb-1">{t.title}</div>
                <p className="text-slate-400 text-xs leading-relaxed">{t.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Casinos */}
      <section>
        <h2 className="text-2xl font-black text-white mb-5">Mejores Casinos con Baccarat en Perú</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {liveCasinos.map((c) => (
            <Link key={c.slug} href={`/casinos/${c.slug}`} className="group bg-slate-800/60 border border-slate-700 hover:border-emerald-500/50 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(16,185,129,0.15)] rounded-xl p-4 transition-all flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-slate-700 flex-shrink-0 overflow-hidden">
                {c.logo ? <Image src={c.logo} alt={c.name} width={40} height={40} className="w-full h-full object-contain p-0.5" /> : <div className="w-full h-full flex items-center justify-center font-black text-emerald-400">{c.name.charAt(0)}</div>}
              </div>
              <div className="flex-1">
                <div className="font-bold text-white text-sm group-hover:text-emerald-400 transition-colors">{c.name}</div>
                <div className="text-xs text-slate-400">{c.bonus.amount}</div>
              </div>
              <div className="text-amber-400 font-bold text-sm">⭐ {c.rating}</div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
