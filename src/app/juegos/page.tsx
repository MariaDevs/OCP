import type { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import Breadcrumb from '@/components/ui/Breadcrumb';

export const metadata: Metadata = {
  title: 'Juegos de Casino Online en Perú 2026',
  description: 'Explora todos los juegos de casino online disponibles en Perú: tragamonedas, ruleta, blackjack, baccarat y casino en vivo. Guías y estrategias.',
  alternates: { canonical: '/juegos' },
};

const games = [
  { slug: 'tragamonedas', icon: '🎰', name: 'Tragamonedas', count: '1,500+', desc: 'El juego más popular. Desde clásicos hasta megaways con jackpots millonarios.', highlights: ['RTP hasta 98%', 'Jackpots progresivos', 'Modos demo gratis'] },
  { slug: 'ruleta', icon: '🎲', name: 'Ruleta Online', count: '50+', desc: 'Europea, americana y francesa. Con dealers en vivo o en versión RNG.', highlights: ['Ruleta europea (2.7% ventaja)', 'En vivo con crupier', 'Variantes exclusivas'] },
  { slug: 'blackjack', icon: '🃏', name: 'Blackjack', count: '40+', desc: 'El juego de mesa con menor ventaja de la casa. Estrategia básica incluida.', highlights: ['RTP hasta 99.5%', 'Blackjack en vivo', 'Múltiples variantes'] },
  { slug: 'en-vivo', icon: '📺', name: 'Casino en Vivo', count: '200+', desc: 'Dealers reales en streaming HD. Ruleta, blackjack, baccarat y shows de juego.', highlights: ['Crupiers en español', 'HD 24/7', 'Evolution Gaming'] },
  { slug: 'baccarat', icon: '🎴', name: 'Baccarat', count: '30+', desc: 'El favorito de los high rollers. Simple, rápido y con baja ventaja de la casa.', highlights: ['Baja ventaja 1.06%', 'Versión en vivo', 'Speed baccarat'] },
  { slug: 'poker', icon: '🤝', name: 'Video Póker', count: '25+', desc: 'Combina habilidad y suerte. RTP superior al 99% con la estrategia correcta.', highlights: ['Jacks or Better', 'Deuces Wild', 'Multi-mano'] },
];

export default function GamesHubPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Breadcrumb items={[{ label: 'Juegos de Casino' }]} />

      <div className="mt-6 mb-10">
        <h1 className="text-4xl font-black text-white mb-3">Juegos de Casino Online en Perú 2026</h1>
        <p className="text-slate-400 max-w-3xl">Guía completa de todos los juegos disponibles en casinos online para jugadores peruanos. Reglas, estrategias y dónde jucarlos con los mejores bonos.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {games.map((g) => (
          <Link key={g.slug} href={`/juegos/${g.slug}`} className="group bg-slate-800/60 border border-slate-700/50 hover:border-emerald-500/50 rounded-2xl p-5 transition-all hover:-translate-y-1">
            <div className="flex items-start gap-4 mb-4">
              <div className="text-4xl">{g.icon}</div>
              <div>
                <h2 className="font-black text-white text-lg group-hover:text-emerald-400 transition-colors">{g.name}</h2>
                <span className="text-xs text-emerald-400 font-semibold">{g.count} variantes</span>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">{g.desc}</p>
            <ul className="space-y-1.5 mb-4">
              {g.highlights.map((h) => (
                <li key={h} className="flex items-center gap-2 text-xs text-slate-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0" />{h}
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-1 text-emerald-400 text-sm font-semibold">
              Ver guía completa <ChevronRight size={14} />
            </div>
          </Link>
        ))}
      </div>

      <section className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-black text-white mb-4">¿Qué Juego de Casino tiene Mejor RTP en Perú?</h2>
          <div className="space-y-3">
            {[
              { game: 'Video Póker (estrategia óptima)', rtp: '99.5%', bar: 99.5 },
              { game: 'Blackjack (estrategia básica)', rtp: '99.4%', bar: 99.4 },
              { game: 'Baccarat (apuesta Banker)', rtp: '98.9%', bar: 98.9 },
              { game: 'Ruleta Europea', rtp: '97.3%', bar: 97.3 },
              { game: 'Tragamonedas (media)', rtp: '96.0%', bar: 96.0 },
              { game: 'Ruleta Americana', rtp: '94.7%', bar: 94.7 },
            ].map((r) => (
              <div key={r.game}>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-slate-300">{r.game}</span>
                  <span className="text-emerald-400 font-bold">{r.rtp}</span>
                </div>
                <div className="h-1.5 bg-slate-700 rounded-full">
                  <div className="h-full bg-gradient-to-r from-emerald-500 to-emerald-400 rounded-full" style={{ width: `${(r.bar - 94) / 6 * 100}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-black text-white mb-4">Juegos de Casino en Vivo vs RNG</h2>
          <div className="space-y-4 text-sm text-slate-400">
            <p><strong className="text-white">Casino en Vivo:</strong> Dealers reales filmados en estudio HD. Mayor inmersión, juego más lento, mesas con límites más altos. Ideal para jugadores que buscan experiencia auténtica.</p>
            <p><strong className="text-white">RNG (generador aleatorio):</strong> Resultados generados por software certificado. Más rápido, disponible en modo demo, sin presión social. Ideal para aprender estrategias.</p>
            <div className="bg-emerald-900/20 border border-emerald-500/20 rounded-xl p-4 mt-4">
              <p className="text-emerald-400 font-semibold mb-1">Recomendación</p>
              <p>Aprende con RNG, disfruta en vivo. Los juegos en vivo de Evolution Gaming son el estándar de oro — disponibles en Betsson, Bet365 y 1xBet Perú.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
