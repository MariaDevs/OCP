import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';
import Breadcrumb from '@/components/ui/Breadcrumb';
import { casinos } from '@/lib/data/casinos';
import { faqSchema, ldJson } from '@/lib/schema';

const tragamonedasFaqs = [
  {
    question: '¿Qué tragamoneda tiene el mejor RTP en Perú?',
    answer: 'Entre las tragamonedas más populares en Perú, Gates of Olympus de Pragmatic Play tiene un RTP de 96.5%, Sweet Bonanza de 96.48% y Book of Dead de 96.21%. Son las que ofrecen mejor retorno estadístico al jugador a largo plazo.',
  },
  {
    question: '¿Puedo jugar tragamonedas gratis en casinos online peruanos?',
    answer: 'Sí. Muchos casinos ofrecen modo demo gratuito sin necesidad de registrarse. Además, con bonos sin depósito como los S/30 de Codere o las tiradas gratis de LeoVegas y HellSpin, puedes jugar con dinero real sin depositar.',
  },
  {
    question: '¿Qué significa volatilidad alta en una tragamoneda?',
    answer: 'Volatilidad alta significa que la tragamoneda paga premios grandes pero con poca frecuencia. Gates of Olympus y Book of Dead son ejemplos de alta volatilidad — puedes pasar muchos giros sin ganar, pero cuando cae el premio suele ser grande. Baja volatilidad paga menos pero más seguido.',
  },
  {
    question: '¿Cuál es el mejor casino para jugar tragamonedas en Perú?',
    answer: 'MegaPari tiene el catálogo más grande con más de 6,000 juegos. 1xBet y HellSpin superan los 3,000 títulos. Betsson, con licencia MGA, ofrece más de 1,500 tragamonedas de los mejores proveedores con total garantía de seguridad.',
  },
  {
    question: '¿Las tragamonedas online en Perú son justas?',
    answer: 'Sí, siempre que juegues en casinos con licencia válida. Los casinos con licencia MGA o MINCETUR están obligados a usar RNG (generador de números aleatorios) certificado por auditores independientes como eCOGRA o iTech Labs, garantizando resultados aleatorios e imparciales.',
  },
];

export const metadata: Metadata = {
  title: 'Tragamonedas Online Perú 2026 — Juega y Gana',
  description: 'Las mejores tragamonedas online disponibles en Perú. Descubre los mejores RTP, las tragamonedas más populares y dónde jugarlas.',
  alternates: { canonical: '/juegos/tragamonedas' },
};

const featuredSlots = [
  { name: 'Gates of Olympus', provider: 'Pragmatic Play', rtp: 96.5, volatility: 'Alta', icon: '⚡' },
  { name: 'Sweet Bonanza', provider: 'Pragmatic Play', rtp: 96.48, volatility: 'Alta', icon: '🍬' },
  { name: 'Book of Dead', provider: 'Play\'n GO', rtp: 96.21, volatility: 'Alta', icon: '📖' },
  { name: 'Starburst', provider: 'NetEnt', rtp: 96.09, volatility: 'Baja', icon: '⭐' },
  { name: 'Mega Moolah', provider: 'Microgaming', rtp: 88.12, volatility: 'Media', icon: '🦁' },
  { name: 'Wolf Gold', provider: 'Pragmatic Play', rtp: 96.01, volatility: 'Media', icon: '🐺' },
];

const providers = [
  { name: 'Pragmatic Play', games: 200, icon: '🎮' },
  { name: 'NetEnt', games: 150, icon: '🎯' },
  { name: 'Play\'n GO', games: 180, icon: '🎪' },
  { name: 'Microgaming', games: 250, icon: '🎲' },
  { name: 'Evolution Gaming', games: 80, icon: '📺' },
  { name: 'Big Time Gaming', games: 60, icon: '⏰' },
];

export default function SlotsPage() {
  return (
    <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: ldJson(faqSchema(tragamonedasFaqs)) }} />
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Breadcrumb items={[{ label: 'Juegos', href: '/juegos' }, { label: 'Tragamonedas' }]} />

      <div className="mt-6 mb-10">
        <h1 className="text-4xl font-black text-white mb-3">Tragamonedas Online en Perú 2026</h1>
        <p className="text-slate-400 max-w-3xl">
          Las tragamonedas son el juego más popular en los casinos online peruanos. Descubre cuáles tienen el mejor RTP, las más populares del momento y en qué casinos puedes encontrarlas.
        </p>
      </div>

      {/* Featured slots */}
      <section className="mb-12">
        <h2 className="text-2xl font-black text-white mb-6">Tragamonedas Más Populares en Perú</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {featuredSlots.map((slot) => (
            <div key={slot.name} className="bg-slate-800/60 border border-slate-700 hover:border-emerald-500/50 rounded-2xl p-4 transition-all group">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center text-2xl">
                  {slot.icon}
                </div>
                <div>
                  <div className="font-bold text-white text-sm">{slot.name}</div>
                  <div className="text-xs text-slate-400">{slot.provider}</div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="bg-slate-700/50 rounded-lg p-2">
                  <div className="text-slate-400">RTP</div>
                  <div className="font-bold text-emerald-400">{slot.rtp}%</div>
                </div>
                <div className="bg-slate-700/50 rounded-lg p-2">
                  <div className="text-slate-400">Volatilidad</div>
                  <div className={`font-bold ${slot.volatility === 'Alta' ? 'text-red-400' : slot.volatility === 'Media' ? 'text-amber-400' : 'text-emerald-400'}`}>
                    {slot.volatility}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Providers */}
      <section className="mb-12">
        <h2 className="text-2xl font-black text-white mb-6">Mejores Proveedores de Tragamonedas</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {providers.map((p) => (
            <div key={p.name} className="bg-slate-800/60 border border-slate-700 rounded-xl p-4 text-center">
              <div className="text-3xl mb-2">{p.icon}</div>
              <div className="text-white font-bold text-xs">{p.name}</div>
              <div className="text-slate-400 text-xs mt-1">{p.games}+ juegos</div>
            </div>
          ))}
        </div>
      </section>

      {/* Casinos with slots */}
      <section className="mb-12">
        <h2 className="text-2xl font-black text-white mb-6">Casinos con Más Tragamonedas en Perú</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {casinos.filter((c) => c.games.slots).map((casino) => (
            <Link key={casino.slug} href={`/casinos/${casino.slug}`} className="flex items-center gap-3 bg-slate-800/60 border border-slate-700 hover:border-emerald-500/50 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(16,185,129,0.15)] rounded-xl p-4 transition-all group">
              <div className="w-10 h-10 rounded-lg bg-slate-700 flex-shrink-0 overflow-hidden">
                {casino.logo ? (
                  <Image src={casino.logo} alt={casino.name} width={40} height={40} className="w-full h-full object-contain p-0.5" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center font-black text-emerald-400">{casino.name.charAt(0)}</div>
                )}
              </div>
              <div className="flex-1">
                <div className="font-bold text-white text-sm group-hover:text-emerald-400 transition-colors">{casino.name}</div>
                <div className="text-xs text-slate-400">{casino.bonus.amount}</div>
              </div>
              <div className="text-xs font-bold text-emerald-400">⭐ {casino.rating}</div>
            </Link>
          ))}
        </div>
      </section>

      {/* Guide */}
      <section className="bg-slate-800/30 border border-slate-700 rounded-2xl p-6 mb-12">
        <h2 className="text-xl font-black text-white mb-4">¿Qué es el RTP en las Tragamonedas?</h2>
        <p className="text-slate-400 leading-relaxed mb-4">
          El RTP (Return to Player) es el porcentaje promedio del dinero apostado que una tragamoneda devuelve a los jugadores a largo plazo. Un RTP de 96% significa que, por cada S/100 apostado, la máquina devuelve en promedio S/96.
        </p>
        <p className="text-slate-400 leading-relaxed">
          <strong className="text-white">Importante:</strong> El RTP se calcula a lo largo de millones de giros. En sesiones cortas, los resultados pueden variar enormemente. Las tragamonedas de alta volatilidad pagan menos frecuentemente pero con premios más grandes. Las de baja volatilidad pagan más seguido pero con montos menores.
        </p>
      </section>

      {/* FAQ */}
      <section>
        <h2 className="text-2xl font-black text-white mb-6">Preguntas Frecuentes — Tragamonedas Online Perú</h2>
        <div className="space-y-3">
          {tragamonedasFaqs.map((faq) => (
            <details key={faq.question} className="group bg-slate-800 border border-slate-700 rounded-xl overflow-hidden">
              <summary className="flex items-center justify-between gap-4 p-5 cursor-pointer font-semibold text-white list-none hover:text-emerald-400 transition-colors">
                <span>{faq.question}</span>
                <ChevronRight size={16} className="flex-shrink-0 transition-transform group-open:rotate-90 text-slate-400" />
              </summary>
              <div className="px-5 pb-5 text-slate-400 text-sm leading-relaxed">{faq.answer}</div>
            </details>
          ))}
        </div>
      </section>
    </div>
    </>
  );
}
