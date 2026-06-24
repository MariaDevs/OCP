import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Tv, Wifi, Globe } from 'lucide-react';
import Breadcrumb from '@/components/ui/Breadcrumb';
import { casinos } from '@/lib/data/casinos';

export const metadata: Metadata = {
  title: 'Casino en Vivo en Perú 2026 — Los Mejores con Dealers en Español',
  description: 'Los mejores casinos en vivo disponibles en Perú: ruleta, blackjack y baccarat con dealers reales en español. Guía y comparativa 2026.',
  alternates: { canonical: '/juegos/en-vivo' },
};

const liveGames = [
  { name: 'Ruleta en Vivo', icon: '🎲', provider: 'Evolution Gaming', tables: '20+', desc: 'Ruleta europea y francesa con crupiers reales en HD. Múltiples mesas con diferentes límites.' },
  { name: 'Blackjack en Vivo', icon: '🃏', provider: 'Evolution + Pragmatic', tables: '30+', desc: 'Mesas para todos los presupuestos. Speed Blackjack para partidas rápidas.' },
  { name: 'Baccarat en Vivo', icon: '🎴', provider: 'Evolution Gaming', tables: '15+', desc: 'Speed Baccarat, Lightning Baccarat y No Commission Baccarat disponibles.' },
  { name: 'Game Shows', icon: '🎪', provider: 'Evolution Gaming', tables: '10+', desc: 'Crazy Time, Monopoly Live, Dream Catcher. Entretenimiento puro con multiplicadores enormes.' },
  { name: 'Póker en Vivo', icon: '🤝', provider: 'Evolution Gaming', tables: '8+', desc: 'Casino Hold\'em, Three Card Poker y Ultimate Texas Hold\'em.' },
  { name: 'Ruleta Relámpago', icon: '⚡', provider: 'Evolution Gaming', tables: '5+', desc: 'Lightning Roulette con multiplicadores aleatorios de hasta 500x en números directos.' },
];

export default function LiveCasinoPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Breadcrumb items={[{ label: 'Juegos', href: '/juegos' }, { label: 'Casino en Vivo' }]} />

      <div className="mt-6 mb-6">
        <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/30 rounded-full px-4 py-1.5 mb-4">
          <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse" />
          <span className="text-red-400 font-semibold text-sm">EN VIVO AHORA — 24/7</span>
        </div>
        <h1 className="text-4xl font-black text-white mb-3">Casino en Vivo en Perú 2026</h1>
        <p className="text-slate-400 max-w-3xl">Dealers reales filmados en estudio HD. Juega ruleta, blackjack y baccarat con crupiers en español desde Perú, disponible las 24 horas.</p>
      </div>

      {/* USPs */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
        {[
          { icon: <Tv size={20} />, title: 'HD 4K en Tiempo Real', desc: 'Streaming de alta calidad sin lag. Cámaras múltiples para ver cada detalle.' },
          { icon: <Globe size={20} />, title: 'Dealers en Español', desc: 'Crupiers hispanohablantes disponibles en Betsson, Bet365 y otros casinos top.' },
          { icon: <Wifi size={20} />, title: 'Disponible 24/7', desc: 'Mesas abiertas las 24 horas, los 365 días. Nunca esperas para jugar.' },
        ].map((u) => (
          <div key={u.title} className="bg-slate-800/60 border border-slate-700 rounded-xl p-4 flex items-start gap-3">
            <div className="text-emerald-400 flex-shrink-0 mt-0.5">{u.icon}</div>
            <div>
              <div className="font-bold text-white text-sm mb-1">{u.title}</div>
              <div className="text-slate-400 text-xs">{u.desc}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Live games */}
      <section className="mb-12">
        <h2 className="text-2xl font-black text-white mb-5">Juegos de Casino en Vivo Disponibles en Perú</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {liveGames.map((g) => (
            <div key={g.name} className="bg-slate-800/60 border border-slate-700 rounded-xl p-4">
              <div className="text-3xl mb-3">{g.icon}</div>
              <div className="font-bold text-white mb-1">{g.name}</div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs text-slate-400">{g.provider}</span>
                <span className="text-xs bg-emerald-500/20 text-emerald-400 rounded-full px-2 py-0.5">{g.tables} mesas</span>
              </div>
              <p className="text-slate-400 text-xs leading-relaxed">{g.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Casinos */}
      <section>
        <h2 className="text-2xl font-black text-white mb-5">Mejores Casinos en Vivo para Jugadores Peruanos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {casinos.filter((c) => c.games.liveCasino).map((c) => (
            <Link key={c.slug} href={`/casinos/${c.slug}`} className="group bg-slate-800/60 border border-slate-700 hover:border-emerald-500/50 rounded-xl p-4 transition-all flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-slate-700 flex-shrink-0 overflow-hidden">
                {c.logo ? <Image src={c.logo} alt={c.name} width={40} height={40} className="w-full h-full object-contain p-0.5" /> : <div className="w-full h-full flex items-center justify-center font-black text-emerald-400">{c.name.charAt(0)}</div>}
              </div>
              <div className="flex-1">
                <div className="font-bold text-white text-sm group-hover:text-emerald-400 transition-colors">{c.name}</div>
                <div className="text-xs text-slate-400">{c.bonus.amount}</div>
              </div>
              <span className="text-xs bg-red-500/20 text-red-400 border border-red-500/30 rounded-full px-2 py-0.5 font-semibold">EN VIVO</span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
