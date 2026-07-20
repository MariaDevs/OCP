import type { Metadata } from "next";
import Link from "next/link";
import {
  Trophy,
  Gift,
  Zap,
  Shield,
  Star,
  ChevronRight,
  CheckCircle2,
  TrendingUp,
  Users,
  Clock,
} from "lucide-react";
import CasinoCard from "@/components/ui/CasinoCard";
import { casinos } from "@/lib/data/casinos";
import { getBlogPosts, categoryEmoji } from "@/lib/content-engine";
import { paymentMethods } from "@/lib/data/payments";
import { faqSchema, ldJson } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Mejores Casinos Online en Perú 2026 | CasinoPerú.com",
  description:
    "Compara los mejores casinos online en Perú para 2026. Análisis experto de bonos, métodos de pago como Yape y Plin, y reseñas actualizadas.",
  alternates: { canonical: "/" },
};

const homeFaqs = [
  {
    question: "¿Son legales los casinos online en Perú?",
    answer:
      "Sí, los casinos online son legales en Perú bajo la Ley 27153 y sus modificatorias. MINCETUR es el organismo regulador. Operadores internacionales con licencias de MGA, UKGC o Curaçao también operan legalmente en Perú.",
  },
  {
    question: "¿Puedo depositar en casinos online con Yape o Plin?",
    answer:
      "Sí, muchos casinos online en Perú aceptan Yape y Plin como métodos de pago. Son las opciones más populares por su rapidez. Betsson, Codere, 1xBet y Wplay son algunos que los aceptan.",
  },
  {
    question: "¿Cuál es el casino online con el mejor bono de bienvenida en Perú?",
    answer:
      "1xBet ofrece el bono más alto con hasta S/600 + 150 tiradas gratis. Sin embargo, Codere destaca con su bono sin depósito de S/30 sin riesgo inicial. La elección depende de tu preferencia.",
  },
  {
    question: "¿Cómo sé si un casino online es seguro en Perú?",
    answer:
      "Verifica que tenga licencia válida (MGA, UKGC, Curaçao o MINCETUR), conexión SSL encriptada, políticas de juego responsable y soporte en español. Todos los casinos que recomendamos han sido verificados.",
  },
  {
    question: "¿En qué moneda puedo jugar en casinos online desde Perú?",
    answer:
      "La mayoría permite jugar en Soles Peruanos (PEN). Betsson y Codere ofrecen cuentas en soles sin conversión de moneda, evitando comisiones extra.",
  },
  {
    question: "¿Cuánto tiempo tardan los retiros en casinos online en Perú?",
    answer:
      "Yape y Plin procesan retiros en 24 horas. Las transferencias bancarias al BCP o BBVA toman 1-2 días hábiles. Las tarjetas de crédito/débito pueden demorar 3-5 días hábiles.",
  },
];

const stats = [
  { icon: <Trophy size={20} />, value: "50+", label: "Casinos Analizados" },
  { icon: <Users size={20} />, value: "120K+", label: "Jugadores Ayudados" },
  { icon: <Star size={20} />, value: "6 años", label: "De Experiencia" },
  { icon: <TrendingUp size={20} />, value: "100%", label: "Independiente" },
];

const categories = [
  { icon: "🎰", label: "Tragamonedas", href: "/juegos/tragamonedas", count: "1,500+" },
  { icon: "🎲", label: "Ruleta Online", href: "/juegos/ruleta", count: "50+" },
  { icon: "🃏", label: "Blackjack", href: "/juegos/blackjack", count: "40+" },
  { icon: "📺", label: "Casino en Vivo", href: "/juegos/en-vivo", count: "200+" },
  { icon: "⚽", label: "Apuestas Deportivas", href: "/casinos?filtro=deportes", count: "20+" },
  { icon: "🪙", label: "Casino Cripto", href: "/casinos?filtro=cripto", count: "10+" },
];

export default async function HomePage() {
  const blogPosts = await getBlogPosts();
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: ldJson(faqSchema(homeFaqs)) }}
      />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/8 rounded-full blur-3xl" />
          <div className="absolute top-20 right-1/4 w-64 h-64 bg-amber-500/6 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 py-16 md:py-24 relative">
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full px-4 py-2 text-sm">
              <Shield size={14} className="text-emerald-400" />
              <span className="text-emerald-400 font-semibold">Guía Independiente • Actualizado junio 2026</span>
            </div>
          </div>

          <h1 className="text-center text-4xl md:text-6xl font-black text-white leading-tight mb-6">
            Los Mejores{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Casinos Online
            </span>{" "}
            <br className="hidden md:block" />
            en{" "}
            <span className="bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 bg-clip-text text-transparent">
              Perú 2026
            </span>
          </h1>

          <p className="text-center text-slate-400 text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed">
            Comparamos y analizamos más de 50 casinos online para encontrar los mejores para
            jugadores peruanos. Bonos reales, pagos con{" "}
            <span className="text-emerald-400 font-semibold">Yape y Plin</span>, y reseñas
            honestas sin publicidad encubierta.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
            <Link
              href="/casinos"
              className="flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-black py-4 px-8 rounded-2xl transition-all text-lg shadow-[0_0_30px_rgba(16,185,129,0.3)] hover:shadow-[0_0_50px_rgba(16,185,129,0.4)]"
            >
              <Trophy size={20} />
              Ver Todos los Casinos
            </Link>
            <Link
              href="/bonos"
              className="flex items-center justify-center gap-2 border border-slate-600 hover:border-emerald-500 text-white font-bold py-4 px-8 rounded-2xl transition-all text-lg hover:bg-slate-800"
            >
              <Gift size={20} />
              Mejores Bonos
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {stats.map((s) => (
              <div key={s.label} className="text-center bg-slate-800/50 border border-slate-700/50 rounded-2xl py-4 px-3">
                <div className="flex justify-center text-emerald-400 mb-2">{s.icon}</div>
                <div className="text-2xl font-black text-white">{s.value}</div>
                <div className="text-xs text-slate-400 mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TOP CASINOS */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Trophy size={18} className="text-amber-400" />
              <span className="text-amber-400 text-sm font-bold uppercase tracking-wider">Ranking 2026</span>
            </div>
            <h2 className="text-3xl font-black text-white">Top Casinos Online en Perú</h2>
            <p className="text-slate-400 mt-1">Verificados por nuestro equipo en junio 2026</p>
          </div>
          <Link href="/casinos" className="hidden sm:flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-semibold text-sm transition-colors">
            Ver los {casinos.length} casinos <ChevronRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {casinos.slice(0, 6).map((casino, i) => (
            <CasinoCard key={casino.slug} casino={casino} rank={i + 1} />
          ))}
        </div>

        <div className="text-center mt-8">
          <Link href="/casinos" className="inline-flex items-center gap-2 border border-slate-600 hover:border-emerald-500 text-slate-300 hover:text-white font-semibold py-3 px-8 rounded-xl transition-all">
            Ver todos los casinos <ChevronRight size={16} />
          </Link>
        </div>
      </section>

      {/* BONUS TYPES */}
      <section className="bg-gradient-to-r from-emerald-900/20 via-slate-900 to-amber-900/20 border-y border-slate-700/50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Gift size={18} className="text-amber-400" />
              <span className="text-amber-400 text-sm font-bold uppercase tracking-wider">Bonos Exclusivos</span>
            </div>
            <h2 className="text-3xl font-black text-white">Mejores Bonos de Casino en Perú</h2>
            <p className="text-slate-400 mt-2 max-w-2xl mx-auto">
              Analiza y compara los bonos más generosos disponibles para jugadores peruanos
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { type: "Bienvenida", icon: "🎁", href: "/bonos/bienvenida", desc: "100% hasta S/600", color: "from-emerald-500/20 to-emerald-900/20 border-emerald-500/30" },
              { type: "Sin Depósito", icon: "🆓", href: "/bonos/sin-deposito", desc: "Hasta S/30 Gratis", color: "from-amber-500/20 to-amber-900/20 border-amber-500/30" },
              { type: "Tiradas Gratis", icon: "🎰", href: "/bonos/tiradas-gratis", desc: "Hasta 150 Spins", color: "from-purple-500/20 to-purple-900/20 border-purple-500/30" },
              { type: "Cashback", icon: "💰", href: "/bonos?filtro=cashback", desc: "Hasta 20% Reembolso", color: "from-blue-500/20 to-blue-900/20 border-blue-500/30" },
            ].map((b) => (
              <Link key={b.type} href={b.href} className={`bg-gradient-to-br ${b.color} border rounded-2xl p-5 hover:scale-105 transition-transform group`}>
                <div className="text-3xl mb-3">{b.icon}</div>
                <h3 className="font-bold text-white group-hover:text-emerald-400 transition-colors">Bono {b.type}</h3>
                <p className="text-slate-300 text-sm mt-1">{b.desc}</p>
                <div className="flex items-center gap-1 text-emerald-400 text-xs mt-3 font-semibold">Ver bonos <ChevronRight size={13} /></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* GAME CATEGORIES */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Zap size={18} className="text-emerald-400" />
            <span className="text-emerald-400 text-sm font-bold uppercase tracking-wider">Catálogo de Juegos</span>
          </div>
          <h2 className="text-3xl font-black text-white">Juegos de Casino Online en Perú</h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((cat) => (
            <Link key={cat.label} href={cat.href} className="bg-slate-800/60 border border-slate-700/50 hover:border-emerald-500/50 rounded-2xl p-4 text-center transition-all group hover:-translate-y-1">
              <div className="text-4xl mb-3">{cat.icon}</div>
              <div className="font-bold text-white text-sm group-hover:text-emerald-400 transition-colors">{cat.label}</div>
              <div className="text-xs text-slate-400 mt-1">{cat.count} juegos</div>
            </Link>
          ))}
        </div>
      </section>

      {/* PAYMENT METHODS */}
      <section className="bg-slate-800/30 border-y border-slate-700/50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-black text-white">Métodos de Pago para Casinos Online en Perú</h2>
            <p className="text-slate-400 mt-2">Deposita y retira con los métodos más usados en Perú</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {paymentMethods.slice(0, 8).map((method) => (
              <Link key={method.slug} href={`/metodos-de-pago#${method.slug}`} className="bg-slate-800 border border-slate-700 hover:border-emerald-500/50 rounded-xl p-4 transition-all group">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-slate-700 flex items-center justify-center text-xl">
                    {method.type === "billetera" ? "📱" : method.type === "tarjeta" ? "💳" : method.type === "banco" ? "🏦" : method.type === "cripto" ? "🪙" : "💵"}
                  </div>
                  <div>
                    <div className="font-bold text-white text-sm group-hover:text-emerald-400 transition-colors">{method.name}</div>
                    <div className="text-xs text-slate-400">{method.depositTime}</div>
                  </div>
                </div>
                <div className="flex justify-between text-xs text-slate-400">
                  <span>Min: <strong className="text-slate-200">S/{method.minDeposit}</strong></span>
                  <span className="text-emerald-400">{method.fees}</span>
                </div>
              </Link>
            ))}
          </div>
          {/* Yape & Plin dedicated pages */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 mb-4">
            <Link href="/casino-yape" className="flex items-center gap-4 bg-emerald-900/20 border border-emerald-500/30 hover:border-emerald-400/60 rounded-2xl p-4 transition-all group">
              <div className="text-3xl flex-shrink-0">📱</div>
              <div className="flex-1">
                <div className="font-black text-emerald-400 text-sm group-hover:text-emerald-300 transition-colors">Casinos con Yape en Perú</div>
                <div className="text-slate-400 text-xs mt-0.5">Depósito y retiro instantáneo con tu app Yape</div>
              </div>
              <ChevronRight size={16} className="text-emerald-500 flex-shrink-0" />
            </Link>
            <Link href="/casino-plin" className="flex items-center gap-4 bg-blue-900/20 border border-blue-500/30 hover:border-blue-400/60 rounded-2xl p-4 transition-all group">
              <div className="text-3xl flex-shrink-0">💙</div>
              <div className="flex-1">
                <div className="font-black text-blue-400 text-sm group-hover:text-blue-300 transition-colors">Casinos con Plin en Perú</div>
                <div className="text-slate-400 text-xs mt-0.5">Ideal para usuarios de BBVA, Interbank y Scotiabank</div>
              </div>
              <ChevronRight size={16} className="text-blue-500 flex-shrink-0" />
            </Link>
          </div>
          <div className="text-center mt-2">
            <Link href="/metodos-de-pago" className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 font-semibold transition-colors">
              Ver todos los métodos de pago <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* HOW WE RATE */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <CheckCircle2 size={18} className="text-emerald-400" />
              <span className="text-emerald-400 text-sm font-bold uppercase tracking-wider">Nuestra Metodología</span>
            </div>
            <h2 className="text-3xl font-black text-white mb-4">¿Cómo Evaluamos los Casinos Online?</h2>
            <p className="text-slate-400 leading-relaxed mb-6">
              Nuestro equipo de expertos analiza cada casino durante semanas antes de publicar una reseña. Probamos los juegos, hacemos depósitos y retiros reales, contactamos al soporte y verificamos las licencias.
            </p>
            <ul className="space-y-3">
              {[
                ["Seguridad y Licencia", "Verificamos que la licencia sea válida y activa"],
                ["Bonos y Promociones", "Probamos las condiciones reales de los bonos"],
                ["Métodos de Pago", "Testamos depósitos y retiros con Yape, Plin y bancos"],
                ["Experiencia de Juego", "Evaluamos el catálogo, velocidad y calidad"],
                ["Soporte al Cliente", "Contactamos el soporte en español y medimos respuesta"],
              ].map(([title, desc]) => (
                <li key={title} className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-emerald-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-white text-sm">{title}: </span>
                    <span className="text-slate-400 text-sm">{desc}</span>
                  </div>
                </li>
              ))}
            </ul>
            <Link href="/sobre-nosotros" className="inline-flex items-center gap-2 mt-6 text-emerald-400 hover:text-emerald-300 font-semibold transition-colors">
              Conoce más sobre nosotros <ChevronRight size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: "🔒", title: "Seguridad", score: "10/10", desc: "SSL, licencia y protección" },
              { icon: "💳", title: "Pagos", score: "9.5/10", desc: "Yape, Plin, bancos, cripto" },
              { icon: "🎰", title: "Juegos", score: "9/10", desc: "Variedad y calidad" },
              { icon: "🎁", title: "Bonos", score: "9.5/10", desc: "Valor real para el jugador" },
              { icon: "📱", title: "Móvil", score: "9/10", desc: "App y web móvil" },
              { icon: "💬", title: "Soporte", score: "9/10", desc: "Español 24/7" },
            ].map((item) => (
              <div key={item.title} className="bg-slate-800/60 border border-slate-700/50 rounded-xl p-4">
                <div className="text-2xl mb-2">{item.icon}</div>
                <div className="font-bold text-white text-sm">{item.title}</div>
                <div className="text-emerald-400 font-black text-lg">{item.score}</div>
                <div className="text-slate-400 text-xs">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-slate-800/30 border-t border-slate-700/50 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-black text-white">Preguntas Frecuentes sobre Casinos Online en Perú</h2>
          </div>
          <div className="space-y-4">
            {homeFaqs.map((faq) => (
              <details key={faq.question} className="group bg-slate-800 border border-slate-700 rounded-xl overflow-hidden">
                <summary className="flex items-center justify-between cursor-pointer px-5 py-4 font-semibold text-white hover:text-emerald-400 transition-colors list-none">
                  <span>{faq.question}</span>
                  <span className="text-slate-500 group-open:text-emerald-400 transition-colors text-lg ml-4 flex-shrink-0">+</span>
                </summary>
                <div className="px-5 pb-5 text-slate-400 leading-relaxed text-sm border-t border-slate-700">
                  <div className="pt-4">{faq.answer}</div>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* BLOG */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-black text-white">Últimas Guías y Noticias</h2>
            <p className="text-slate-400 mt-1">Consejos de expertos para jugadores peruanos</p>
          </div>
          <Link href="/blog" className="hidden sm:flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-semibold text-sm transition-colors">
            Ver todo el blog <ChevronRight size={16} />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {blogPosts.slice(0, 6).map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group bg-slate-800/60 border border-slate-700/50 hover:border-emerald-500/50 rounded-2xl overflow-hidden transition-all hover:-translate-y-1">
              <div className="h-40 bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center text-5xl" aria-hidden="true">
                {categoryEmoji(post.category)}
              </div>
              <div className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs bg-emerald-500/20 text-emerald-400 rounded-full px-2.5 py-0.5 font-semibold">{post.category}</span>
                  <span className="text-xs text-slate-500 flex items-center gap-1"><Clock size={11} /> {post.readTime} min</span>
                </div>
                <h3 className="font-bold text-white text-sm leading-tight group-hover:text-emerald-400 transition-colors mb-2">{post.title}</h3>
                <p className="text-slate-400 text-xs leading-relaxed line-clamp-2">{post.excerpt}</p>
                <div className="flex items-center gap-1 text-emerald-400 text-xs mt-3 font-semibold">
                  Leer artículo <ChevronRight size={13} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* DISCLAIMER */}
      <div className="bg-slate-900 border-t border-slate-800 py-4">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-xs text-slate-500 text-center">
            ⚠️ Los juegos de azar implican riesgo financiero. El juego puede crear adicción. Juega de forma responsable. Solo para mayores de 18 años. CasinoPerú.com es un sitio de información independiente con links de afiliado.
          </p>
        </div>
      </div>
    </>
  );
}
