import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/ui/Breadcrumb';
import { casinos } from '@/lib/data/casinos';

export const metadata: Metadata = {
  title: 'Blackjack Online en Perú 2026 — Estrategia Básica y Mejores Casinos',
  description: 'Aprende a jugar blackjack online en Perú. Estrategia básica, variantes, ventaja de la casa y los mejores casinos con blackjack para peruanos en 2026.',
  alternates: { canonical: '/juegos/blackjack' },
};

const basicStrategy = [
  { hand: 'Hard 17+', dealer: 'Cualquier carta', action: 'Plantarse', color: 'emerald' },
  { hand: 'Hard 13-16', dealer: '2-6', action: 'Plantarse', color: 'emerald' },
  { hand: 'Hard 13-16', dealer: '7-A', action: 'Pedir carta', color: 'blue' },
  { hand: 'Hard 11', dealer: '2-10', action: 'Doblar', color: 'amber' },
  { hand: 'Hard 10', dealer: '2-9', action: 'Doblar', color: 'amber' },
  { hand: 'Hard 9', dealer: '3-6', action: 'Doblar', color: 'amber' },
  { hand: 'Par de Ases', dealer: 'Cualquier', action: 'Dividir siempre', color: 'purple' },
  { hand: 'Par de 8s', dealer: 'Cualquier', action: 'Dividir siempre', color: 'purple' },
  { hand: 'Par de 10s', dealer: 'Cualquier', action: 'No dividir nunca', color: 'red' },
];

export default function BlackjackPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Breadcrumb items={[{ label: 'Juegos', href: '/juegos' }, { label: 'Blackjack' }]} />

      <div className="mt-6 mb-10">
        <h1 className="text-4xl font-black text-white mb-3">Blackjack Online en Perú 2026</h1>
        <p className="text-slate-400 max-w-3xl">El blackjack es el juego de mesa con el menor porcentaje de ventaja para la casa. Con la estrategia básica correcta, el RTP alcanza el 99.5%. Guía completa para jugadores peruanos.</p>
      </div>

      {/* Why blackjack */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
        {[
          { icon: '📊', title: 'RTP hasta 99.5%', desc: 'Con estrategia básica. El juego de mesa con mejor retorno al jugador.' },
          { icon: '🧠', title: 'Juego de habilidad', desc: 'A diferencia de las tragamonedas, tus decisiones importan y afectan el resultado.' },
          { icon: '🎯', title: 'Objetivo claro', desc: 'Llegar a 21 o superar al crupier sin pasarte. Reglas simples, profundidad estratégica.' },
        ].map((item) => (
          <div key={item.title} className="bg-slate-800/60 border border-slate-700 rounded-xl p-4 text-center">
            <div className="text-3xl mb-2">{item.icon}</div>
            <div className="font-bold text-white text-sm mb-1">{item.title}</div>
            <div className="text-slate-400 text-xs">{item.desc}</div>
          </div>
        ))}
      </div>

      {/* Basic strategy */}
      <section className="mb-12">
        <h2 className="text-2xl font-black text-white mb-2">Estrategia Básica de Blackjack</h2>
        <p className="text-slate-400 text-sm mb-5">La estrategia básica reduce la ventaja de la casa al mínimo matemático. Memoriza estas reglas fundamentales:</p>
        <div className="space-y-2">
          {basicStrategy.map((row) => (
            <div key={`${row.hand}-${row.dealer}`} className="grid grid-cols-3 gap-2 text-sm">
              <div className="bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-slate-200 font-medium">{row.hand}</div>
              <div className="bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-slate-400">Crupier: {row.dealer}</div>
              <div className={`rounded-lg px-3 py-2 font-bold text-center ${
                row.color === 'emerald' ? 'bg-emerald-900/30 border border-emerald-500/30 text-emerald-400'
                : row.color === 'blue' ? 'bg-blue-900/30 border border-blue-500/30 text-blue-400'
                : row.color === 'amber' ? 'bg-amber-900/30 border border-amber-500/30 text-amber-400'
                : row.color === 'purple' ? 'bg-purple-900/30 border border-purple-500/30 text-purple-400'
                : 'bg-red-900/30 border border-red-500/30 text-red-400'
              }`}>{row.action}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Casinos */}
      <section>
        <h2 className="text-2xl font-black text-white mb-5">Mejores Casinos con Blackjack en Perú</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {casinos.filter((c) => c.games.blackjack).map((c) => (
            <Link key={c.slug} href={`/casinos/${c.slug}`} className="group bg-slate-800/60 border border-slate-700 hover:border-emerald-500/50 rounded-xl p-4 transition-all flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-slate-700 flex items-center justify-center font-black text-emerald-400 flex-shrink-0">{c.name.charAt(0)}</div>
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
