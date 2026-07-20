import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Tv, Wifi, Globe, ExternalLink, ChevronRight, Shield, Star } from 'lucide-react';
import Breadcrumb from '@/components/ui/Breadcrumb';
import { casinos } from '@/lib/data/casinos';
import { faqSchema, ldJson } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Casino en Vivo Perú 2026 — Dealers Reales en Español',
  description: 'Los mejores casinos en vivo en Perú 2026. Ruleta, blackjack y baccarat con dealers reales en español. Compara bonos, proveedores y juega desde S/1.',
  alternates: { canonical: '/juegos/en-vivo' },
};

const liveFaqs = [
  {
    question: '¿Cuál es el mejor casino en vivo en Perú?',
    answer: 'Betsson y LeoVegas tienen el mejor casino en vivo para jugadores peruanos. Ambos usan Evolution Gaming como proveedor principal, ofrecen dealers en español y tienen mesas disponibles 24/7. Betsson destaca por su licencia MGA y retiros rápidos a Yape.',
  },
  {
    question: '¿Puedo jugar casino en vivo desde mi celular en Perú?',
    answer: 'Sí. Todos los casinos en vivo recomendados son 100% compatibles con móvil. No necesitas descargar ninguna app — el casino en vivo funciona directamente desde el navegador de tu celular Android o iPhone con buena conexión a internet.',
  },
  {
    question: '¿Qué conexión a internet necesito para el casino en vivo?',
    answer: 'Se recomienda una conexión de al menos 4 Mbps para streaming HD estable. El 4G/LTE de los operadores peruanos (Claro, Movistar, Entel) es suficiente. Con WiFi doméstico de 20 Mbps o más tendrás la mejor experiencia visual.',
  },
  {
    question: '¿Cuál es la apuesta mínima en casino en vivo?',
    answer: 'Depende del casino y la mesa: las mesas de entrada tienen límites desde S/2-S/5 en ruleta y blackjack. Algunas mesas de baccarat aceptan desde S/1. Los Game Shows de Evolution Gaming también tienen apuestas mínimas muy bajas, ideales para principiantes.',
  },
  {
    question: '¿Los dealers hablan español en los casinos en vivo?',
    answer: 'Algunos casinos como Betsson tienen mesas dedicadas con dealers en español. Evolution Gaming también ofrece mesas en español con crupiers nativos. En la mayoría de casinos puedes encontrar al menos algunas mesas con dealers hispanohablantes disponibles en horario peak.',
  },
  {
    question: '¿El casino en vivo usa juego justo?',
    answer: 'Sí. A diferencia de los juegos RNG (generador de números aleatorios), en el casino en vivo puedes ver el desarrollo del juego en tiempo real. No hay software que decida el resultado — lo que ves es lo que ocurre. Los proveedores como Evolution Gaming están certificados por eCOGRA e iTech Labs.',
  },
];

const liveGames = [
  { name: 'Ruleta en Vivo', icon: '🎲', provider: 'Evolution Gaming', tables: '20+', desc: 'Ruleta europea y francesa con crupiers reales en HD. Lightning Roulette con multiplicadores hasta 500x.' },
  { name: 'Blackjack en Vivo', icon: '🃏', provider: 'Evolution + Pragmatic', tables: '30+', desc: 'Mesas para todos los presupuestos. Speed Blackjack para partidas rápidas desde S/5.' },
  { name: 'Baccarat en Vivo', icon: '🎴', provider: 'Evolution Gaming', tables: '15+', desc: 'Speed Baccarat, Lightning Baccarat y No Commission Baccarat disponibles.' },
  { name: 'Game Shows', icon: '🎪', provider: 'Evolution Gaming', tables: '10+', desc: 'Crazy Time, Monopoly Live, Dream Catcher. Multiplicadores enormes con entretenimiento único.' },
  { name: 'Póker en Vivo', icon: '🤝', provider: 'Evolution Gaming', tables: '8+', desc: "Casino Hold'em, Three Card Poker y Ultimate Texas Hold'em." },
  { name: 'Ruleta Relámpago', icon: '⚡', provider: 'Evolution Gaming', tables: '5+', desc: 'Lightning Roulette con multiplicadores aleatorios de hasta 500x en números directos.' },
];

const providers = [
  {
    name: 'Evolution Gaming',
    flag: '🥇',
    rating: '9.8',
    games: ['Lightning Roulette', 'Crazy Time', 'Monopoly Live', 'Speed Baccarat', 'Dream Catcher'],
    pros: 'El estándar de oro. Mayor variedad de mesas, dealers hispanohablantes, streaming 4K.',
    casinos: ['Betsson', 'LeoVegas', 'Bet365', 'Betsafe'],
  },
  {
    name: 'Pragmatic Play Live',
    flag: '🥈',
    rating: '9.2',
    games: ['Mega Wheel', 'Sweet Bonanza CandyLand', 'Roulette 1', 'Blackjack Azure'],
    pros: 'Excelente alternativa. Game shows originales y mesas con apuestas muy bajas desde S/1.',
    casinos: ['1xBet', 'Codere', 'MegaPari'],
  },
];

const liveCasinos = casinos.filter((c) => c.games.liveCasino);

export default function LiveCasinoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: ldJson(faqSchema(liveFaqs)) }} />

      <div className="max-w-7xl mx-auto px-4 py-8">
        <Breadcrumb items={[{ label: 'Juegos', href: '/juegos' }, { label: 'Casino en Vivo' }]} />

        {/* Hero */}
        <div className="mt-6 mb-10">
          <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/30 rounded-full px-4 py-1.5 mb-4">
            <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse" />
            <span className="text-red-400 font-semibold text-sm">EN VIVO AHORA — 24/7</span>
          </div>
          <h1 className="text-4xl font-black text-white mb-4">Casino en Vivo en Perú 2026</h1>
          <p className="text-slate-400 max-w-3xl text-lg leading-relaxed">
            Dealers reales filmados en estudio HD. Juega ruleta, blackjack y baccarat con crupiers en español desde Perú — deposita con Yape o Plin y empieza en segundos.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
          {[
            { icon: <Tv size={20} />, value: '500+', label: 'Mesas en vivo' },
            { icon: <Globe size={20} />, value: '24/7', label: 'Disponibilidad' },
            { icon: <Wifi size={20} />, value: '4K HD', label: 'Calidad streaming' },
            { icon: <Shield size={20} />, value: '100%', label: 'Juego justo' },
          ].map((s) => (
            <div key={s.label} className="bg-slate-800/60 border border-slate-700 rounded-2xl p-4 text-center">
              <div className="flex justify-center text-emerald-400 mb-2">{s.icon}</div>
              <div className="text-2xl font-black text-white">{s.value}</div>
              <div className="text-slate-400 text-xs mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Casino list */}
        <section className="mb-14">
          <h2 className="text-2xl font-black text-white mb-6">Mejores Casinos en Vivo para Jugadores Peruanos</h2>
          <div className="space-y-4">
            {liveCasinos.map((casino, i) => (
              <div key={casino.slug} className="bg-slate-800/60 border border-slate-700 hover:border-red-500/40 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(239,68,68,0.1)] rounded-2xl p-5 transition-all flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                <div className="flex items-center gap-2 flex-shrink-0">
                  <span className="text-slate-500 font-bold text-sm w-6">#{i + 1}</span>
                  <div className="w-14 h-14 rounded-xl bg-slate-700 overflow-hidden">
                    {casino.logo
                      ? <Image src={casino.logo} alt={casino.name} width={56} height={56} className="w-full h-full object-contain p-1" />
                      : <div className="w-full h-full flex items-center justify-center font-black text-red-400">{casino.name.charAt(0)}</div>
                    }
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="font-bold text-white text-lg">{casino.name}</span>
                    <span className="text-xs bg-red-500/20 text-red-400 border border-red-500/30 rounded-full px-2 py-0.5 font-semibold">🎥 EN VIVO</span>
                    {casino.paymentMethods.includes('Yape') && (
                      <span className="text-xs bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded-full px-2 py-0.5">Yape</span>
                    )}
                  </div>
                  <p className="text-emerald-400 font-black text-xl">{casino.bonus.amount}</p>
                  {casino.bonus.freeSpins && (
                    <p className="text-amber-400 font-semibold text-sm">+ {casino.bonus.freeSpins} Tiradas Gratis</p>
                  )}
                  <div className="flex flex-wrap gap-4 mt-1 text-xs text-slate-400">
                    <span>Depósito mín: <strong className="text-white">S/{casino.bonus.minDeposit}</strong></span>
                    <span>Wagering: <strong className="text-white">x{casino.bonus.wagering}</strong></span>
                    <span>Licencia: <strong className="text-white">{casino.license.split(' ')[0]}</strong></span>
                  </div>
                </div>
                <div className="flex flex-col gap-2 flex-shrink-0 w-full sm:w-auto">
                  <a
                    href={casino.affiliateUrl !== '#' ? casino.affiliateUrl : `/casinos/${casino.slug}`}
                    target={casino.affiliateUrl !== '#' ? '_blank' : undefined}
                    rel={casino.affiliateUrl !== '#' ? 'noopener noreferrer sponsored' : undefined}
                    className="flex items-center justify-center gap-1.5 bg-red-500 hover:bg-red-400 text-white font-black py-2.5 px-5 rounded-xl transition-colors text-sm"
                  >
                    Jugar en Vivo <ExternalLink size={13} />
                  </a>
                  <Link href={`/casinos/${casino.slug}`} className="text-xs text-center text-slate-400 hover:text-red-400 transition-colors">
                    Ver reseña completa
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Live games */}
        <section className="mb-14">
          <h2 className="text-2xl font-black text-white mb-6">Juegos de Casino en Vivo Disponibles en Perú</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {liveGames.map((g) => (
              <div key={g.name} className="bg-slate-800/60 border border-slate-700 rounded-2xl p-5">
                <div className="text-3xl mb-3">{g.icon}</div>
                <div className="font-bold text-white mb-1">{g.name}</div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs text-slate-400">{g.provider}</span>
                  <span className="text-xs bg-red-500/20 text-red-400 rounded-full px-2 py-0.5">{g.tables} mesas</span>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">{g.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Providers */}
        <section className="mb-14">
          <h2 className="text-2xl font-black text-white mb-6">Proveedores de Casino en Vivo en Perú</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {providers.map((p) => (
              <div key={p.name} className="bg-slate-800/60 border border-slate-700 rounded-2xl p-5">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">{p.flag}</span>
                  <div>
                    <div className="font-black text-white">{p.name}</div>
                    <div className="flex items-center gap-1 text-amber-400 text-xs font-semibold">
                      <Star size={11} /> {p.rating}/10
                    </div>
                  </div>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed mb-3">{p.pros}</p>
                <div className="mb-3">
                  <div className="text-xs text-slate-500 mb-1.5">Juegos destacados:</div>
                  <div className="flex flex-wrap gap-1.5">
                    {p.games.map((g) => (
                      <span key={g} className="text-xs bg-slate-700 text-slate-300 rounded-full px-2.5 py-1">{g}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="text-xs text-slate-500 mb-1.5">Disponible en:</div>
                  <div className="flex flex-wrap gap-1.5">
                    {p.casinos.map((c) => (
                      <span key={c} className="text-xs bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-full px-2.5 py-1">{c}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* How to start */}
        <section className="mb-14">
          <h2 className="text-2xl font-black text-white mb-6">¿Cómo Empezar a Jugar Casino en Vivo en Perú?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { step: '1', title: 'Elige un casino', desc: 'Selecciona un casino de la lista de arriba con casino en vivo y buena licencia.' },
              { step: '2', title: 'Crea tu cuenta', desc: 'Registro en 2 minutos con tu email y datos básicos. Sin verificación inicial.' },
              { step: '3', title: 'Deposita con Yape', desc: 'Deposita desde S/20 con Yape, Plin o transferencia bancaria. Acreditación inmediata.' },
              { step: '4', title: 'Entra al casino en vivo', desc: 'Busca "Casino en Vivo" en el menú, elige tu mesa y empieza a jugar.' },
            ].map((s) => (
              <div key={s.step} className="bg-slate-800/60 border border-slate-700 rounded-2xl p-5 flex gap-4">
                <div className="w-9 h-9 rounded-full bg-red-500 text-white font-black flex items-center justify-center flex-shrink-0 text-sm">
                  {s.step}
                </div>
                <div>
                  <div className="font-bold text-white text-sm mb-1">{s.title}</div>
                  <div className="text-slate-400 text-sm">{s.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SEO content */}
        <section className="bg-slate-800/30 border border-slate-700 rounded-2xl p-6 mb-14">
          <h2 className="text-xl font-black text-white mb-4">Casino en Vivo en Perú: Todo lo que Necesitas Saber</h2>
          <p className="text-slate-400 leading-relaxed mb-4">
            El casino en vivo es la modalidad de juego de casino online que más ha crecido en Perú en los últimos años. A diferencia de las tragamonedas o los juegos RNG, el casino en vivo te conecta con un dealer real en un estudio filmado en alta definición. Puedes ver las cartas en tiempo real, interactuar con el crupier por chat y vivir una experiencia idéntica a la de un casino físico desde tu casa o tu celular.
          </p>
          <p className="text-slate-400 leading-relaxed mb-4">
            El proveedor dominante es Evolution Gaming, con sede en Letonia y estudios en toda Europa. Sus juegos — Lightning Roulette, Crazy Time, Speed Blackjack — están disponibles en los mejores casinos peruanos como Betsson, LeoVegas y Bet365. Pragmatic Play Live es la segunda opción con excelentes alternativas y apuestas mínimas muy bajas.
          </p>
          <p className="text-slate-400 leading-relaxed">
            Para jugadores peruanos, lo más importante es que el casino acepte Yape o Plin para depósitos y que procese los retiros en menos de 24 horas. Betsson cumple ambos criterios con su licencia MGA y retiros a Yape garantizados en 24 horas.
          </p>
        </section>

        {/* Cross-links */}
        <div className="flex flex-wrap gap-3 mb-14">
          <Link href="/casino-yape" className="inline-flex items-center gap-1.5 text-sm text-emerald-400 hover:text-emerald-300 font-semibold transition-colors">
            Casinos con Yape <ChevronRight size={14} />
          </Link>
          <Link href="/casino-plin" className="inline-flex items-center gap-1.5 text-sm text-blue-400 hover:text-blue-300 font-semibold transition-colors">
            Casinos con Plin <ChevronRight size={14} />
          </Link>
          <Link href="/bonos/bienvenida" className="inline-flex items-center gap-1.5 text-sm text-amber-400 hover:text-amber-300 font-semibold transition-colors">
            Bonos de Bienvenida <ChevronRight size={14} />
          </Link>
        </div>

        {/* FAQ */}
        <section>
          <h2 className="text-2xl font-black text-white mb-6">Preguntas Frecuentes — Casino en Vivo Perú</h2>
          <div className="space-y-3">
            {liveFaqs.map((faq) => (
              <details key={faq.question} className="group bg-slate-800 border border-slate-700 rounded-xl overflow-hidden">
                <summary className="flex items-center justify-between gap-4 p-5 cursor-pointer font-semibold text-white list-none hover:text-red-400 transition-colors">
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
