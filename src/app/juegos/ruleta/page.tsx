import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Breadcrumb from '@/components/ui/Breadcrumb';
import { casinos } from '@/lib/data/casinos';

export const metadata: Metadata = {
  title: 'Ruleta Online en Perú 2026 — Guía Completa y Mejores Casinos',
  description: 'Guía completa de ruleta online en Perú: tipos de ruleta, estrategias, ventaja de la casa y los mejores casinos para jugar en 2026.',
  alternates: { canonical: '/juegos/ruleta' },
};

const variants = [
  { name: 'Ruleta Europea', edge: '2.70%', zeros: '1 zero', recommended: true, desc: 'La mejor opción. Un solo cero reduce la ventaja de la casa a la mitad vs. americana.' },
  { name: 'Ruleta Francesa', edge: '1.35%', zeros: '1 zero + La Partage', recommended: true, desc: 'La regla La Partage devuelve la mitad de las apuestas pares al caer en cero. Mejor RTP.' },
  { name: 'Ruleta Americana', edge: '5.26%', zeros: '0 y 00', recommended: false, desc: 'Doble cero duplica la ventaja de la casa. Evítala salvo que el casino ofrezca bonificación.' },
  { name: 'Speed Roulette', edge: '2.70%', zeros: '1 zero', recommended: true, desc: 'Mismas reglas que europea pero giros cada 25 segundos. Ideal para sesiones rápidas.' },
  { name: 'Lightning Roulette', edge: '3.30%', zeros: '1 zero', recommended: false, desc: 'Evolution Gaming. Multiplicadores aleatorios hasta 500x. Mayor volatilidad y emoción.' },
];

const strategies = [
  { name: 'Martingala', risk: 'Alto', desc: 'Dobla la apuesta tras cada pérdida. Recupera pérdidas rápido pero el riesgo de ruina es real con racha larga.' },
  { name: 'Fibonacci', risk: 'Medio', desc: 'Sigue la secuencia 1-1-2-3-5-8-13... tras perder. Más conservadora que Martingala.' },
  { name: "D'Alembert", risk: 'Bajo', desc: 'Sube 1 unidad tras perder, baja 1 tras ganar. Muy conservadora, ganancias lentas pero menos riesgo.' },
  { name: 'James Bond', risk: 'Medio', desc: 'Apuesta fija distribuida: 70% en altos (19-36), 25% en docena 13-18, 5% en cero. Cubre 2/3 del tablero.' },
];

export default function RouletteePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Breadcrumb items={[{ label: 'Juegos', href: '/juegos' }, { label: 'Ruleta Online' }]} />

      <div className="mt-6 mb-10">
        <h1 className="text-4xl font-black text-white mb-3">Ruleta Online en Perú 2026</h1>
        <p className="text-slate-400 max-w-3xl">Todo lo que necesitas saber para jugar ruleta online en Perú: tipos de ruleta, las mejores estrategias y dónde encontrar las mejores mesas.</p>
      </div>

      {/* Variants */}
      <section className="mb-12">
        <h2 className="text-2xl font-black text-white mb-5">Tipos de Ruleta Online Disponibles en Perú</h2>
        <div className="space-y-3">
          {variants.map((v) => (
            <div key={v.name} className={`rounded-xl border p-4 flex flex-col sm:flex-row gap-3 items-start ${v.recommended ? 'bg-emerald-900/10 border-emerald-500/30' : 'bg-slate-800/50 border-slate-700'}`}>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-bold text-white">{v.name}</span>
                  {v.recommended && <span className="text-xs bg-emerald-500/20 text-emerald-400 rounded-full px-2 py-0.5">Recomendada</span>}
                </div>
                <p className="text-slate-400 text-sm">{v.desc}</p>
              </div>
              <div className="text-right flex-shrink-0">
                <div className="text-xs text-slate-400">Ventaja casa</div>
                <div className={`font-black text-lg ${v.recommended ? 'text-emerald-400' : 'text-red-400'}`}>{v.edge}</div>
                <div className="text-xs text-slate-500">{v.zeros}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Strategies */}
      <section className="mb-12">
        <h2 className="text-2xl font-black text-white mb-2">Estrategias de Ruleta: ¿Cuál Funciona?</h2>
        <p className="text-slate-400 text-sm mb-5">Ninguna estrategia elimina la ventaja de la casa a largo plazo. Estas sistemas gestionan tu bankroll y pueden maximizar la diversión.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {strategies.map((s) => (
            <div key={s.name} className="bg-slate-800/60 border border-slate-700 rounded-xl p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold text-white">{s.name}</span>
                <span className={`text-xs font-semibold rounded-full px-2.5 py-0.5 ${s.risk === 'Alto' ? 'bg-red-500/20 text-red-400' : s.risk === 'Medio' ? 'bg-amber-500/20 text-amber-400' : 'bg-emerald-500/20 text-emerald-400'}`}>
                  Riesgo {s.risk}
                </span>
              </div>
              <p className="text-slate-400 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 bg-amber-900/20 border border-amber-500/30 rounded-xl p-4 text-sm text-slate-300">
          ⚠️ <strong className="text-amber-400">Importante:</strong> La ruleta es un juego de azar. Ninguna estrategia garantiza ganancias. Juega solo con dinero que puedas permitirte perder.
        </div>
      </section>

      {/* Casinos */}
      <section>
        <h2 className="text-2xl font-black text-white mb-5">Mejores Casinos con Ruleta Online en Perú</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {casinos.filter((c) => c.games.roulette).map((c) => (
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
