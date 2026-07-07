import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Breadcrumb from '@/components/ui/Breadcrumb';
import { casinos } from '@/lib/data/casinos';

export const metadata: Metadata = {
  title: 'Video Póker Online Perú 2026 — Guía y Mejores Casinos',
  description: 'Guía completa de video póker online en Perú: variantes, estrategia básica y casinos con mejor RTP en 2026.',
  alternates: { canonical: '/juegos/poker' },
};

const variants = [
  { name: 'Jacks or Better', rtp: '99.54%', desc: 'La variante más popular y con el mejor RTP jugando con estrategia perfecta. Punto de partida ideal para principiantes.', recommended: true },
  { name: 'Deuces Wild', rtp: '100.76%', desc: 'Los 2 actúan como comodines. Con estrategia perfecta supera el 100% de RTP — solo disponible en algunas versiones.', recommended: true },
  { name: 'Double Bonus', rtp: '99.11%', desc: 'Pagos bonificados por ciertos pókeres. Mayor volatilidad que Jacks or Better.', recommended: true },
  { name: 'Joker Poker', rtp: '98.60%', desc: 'Un joker añadido a la baraja estándar. Necesitas par de reyes o mejor para ganar.', recommended: false },
];

const hands = [
  { hand: 'Par de Jotas+', payout: '1:1', color: 'slate' },
  { hand: 'Doble par', payout: '2:1', color: 'slate' },
  { hand: 'Trío', payout: '3:1', color: 'blue' },
  { hand: 'Escalera', payout: '4:1', color: 'blue' },
  { hand: 'Color', payout: '6:1', color: 'emerald' },
  { hand: 'Full house', payout: '9:1', color: 'emerald' },
  { hand: 'Póker', payout: '25:1', color: 'amber' },
  { hand: 'Escalera de color', payout: '50:1', color: 'amber' },
  { hand: 'Escalera real', payout: '800:1', color: 'purple' },
];

export default function PokerPage() {
  const pokerCasinos = casinos.filter((c) => c.games.poker);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Breadcrumb items={[{ label: 'Juegos', href: '/juegos' }, { label: 'Video Póker' }]} />

      <div className="mt-6 mb-10">
        <h1 className="text-4xl font-black text-white mb-3">Video Póker Online en Perú 2026</h1>
        <p className="text-slate-400 max-w-3xl">El video póker combina la habilidad del póker con la comodidad de las tragamonedas. Con estrategia correcta, el RTP supera el 99% — uno de los mejores retornos en casino online.</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
        {[
          { icon: '🎯', title: 'RTP hasta 99.54%', desc: 'Jacks or Better con estrategia perfecta. Supera a la mayoría de tragamonedas.' },
          { icon: '🧠', title: 'Juego de habilidad', desc: 'Tus decisiones afectan el resultado. La estrategia correcta maximiza el retorno.' },
          { icon: '⚡', title: 'Ritmo propio', desc: 'Sin presión de otros jugadores. Juega a tu ritmo y toma decisiones sin apuros.' },
        ].map((item) => (
          <div key={item.title} className="bg-slate-800/60 border border-slate-700 rounded-xl p-4 text-center">
            <div className="text-3xl mb-2">{item.icon}</div>
            <div className="font-bold text-white text-sm mb-1">{item.title}</div>
            <div className="text-slate-400 text-xs">{item.desc}</div>
          </div>
        ))}
      </div>

      {/* Manos y pagos */}
      <section className="mb-12">
        <h2 className="text-2xl font-black text-white mb-2">Tabla de Pagos — Jacks or Better</h2>
        <p className="text-slate-400 text-sm mb-5">Los pagos estándar de la variante más popular (versión 9/6 — Full House 9:1, Color 6:1):</p>
        <div className="space-y-2">
          {hands.map((h) => (
            <div key={h.hand} className="flex items-center justify-between bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-sm">
              <span className="text-slate-200">{h.hand}</span>
              <span className={`font-bold ${h.color === 'purple' ? 'text-purple-400' : h.color === 'amber' ? 'text-amber-400' : h.color === 'emerald' ? 'text-emerald-400' : h.color === 'blue' ? 'text-blue-400' : 'text-slate-400'}`}>{h.payout}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Variantes */}
      <section className="mb-12">
        <h2 className="text-2xl font-black text-white mb-5">Variantes de Video Póker en Perú</h2>
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
                <div className="text-xs text-slate-400">RTP óptimo</div>
                <div className="font-black text-lg text-emerald-400">{v.rtp}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tips */}
      <section className="mb-12">
        <h2 className="text-2xl font-black text-white mb-4">Estrategia Básica de Video Póker</h2>
        <div className="bg-slate-800/60 border border-slate-700 rounded-xl p-6 space-y-3 text-sm text-slate-400">
          <p><strong className="text-white">1. Siempre guarda escalera real, escalera de color, póker y full house.</strong> Nunca rompas estas manos.</p>
          <p><strong className="text-white">2. Guarda tres cartas para escalera real o de color</strong> si no tienes nada mejor.</p>
          <p><strong className="text-white">3. Guarda pares altos (J, Q, K, A) sobre cartas sin par</strong> aunque tengas posibilidad de color o escalera.</p>
          <p><strong className="text-white">4. Nunca guardes un kicker</strong> junto a un par. Desecha siempre la quinta carta si tienes un par.</p>
          <p><strong className="text-white">5. Juega la versión 9/6</strong> (Full House paga 9, Color paga 6). Evita versiones con peores tablas de pago.</p>
        </div>
      </section>

      {/* Casinos */}
      <section>
        <h2 className="text-2xl font-black text-white mb-5">Casinos con Video Póker en Perú</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {pokerCasinos.map((c) => (
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
