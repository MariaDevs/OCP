import type { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight, Shield, Wallet, ScrollText, CircleHelp } from 'lucide-react';
import Breadcrumb from '@/components/ui/Breadcrumb';
import { faqSchema, ldJson } from '@/lib/schema';

/**
 * Intent separation (deliberate — avoid cannibalising existing pages):
 *   /                -> "mejores casinos online peru" (brand + best-of, ranked hero list)
 *   /casinos         -> "casinos online peru" (plural, filterable listing)
 *   /casino-online-peru (this page) -> "casino online peru" (singular, informational:
 *                       what it is, whether it's legal, how to start). No "mejores…"
 *                       phrasing in title/H1/description, no ranked list — it links out
 *                       to /casinos for that instead.
 */
export const metadata: Metadata = {
  title: 'Casino Online en Perú: Cómo Funciona y Cómo Empezar',
  description:
    'Qué es un casino online en Perú, si es legal, cómo se deposita con Yape o Plin y qué revisar antes de registrarte. Guía explicativa para empezar desde cero.',
  alternates: { canonical: '/casino-online-peru' },
};

const faqs = [
  {
    question: '¿Qué es exactamente un casino online?',
    answer:
      'Es una plataforma web o app donde puedes jugar tragamonedas, ruleta, blackjack o baccarat con dinero real desde tu celular o PC. Los resultados los decide un generador de números aleatorios (RNG) auditado por laboratorios externos, o un dealer real transmitido por video en el caso del casino en vivo.',
  },
  {
    question: '¿Necesito ser mayor de edad para jugar en Perú?',
    answer:
      'Sí. La edad mínima legal para jugar en casinos online en Perú es 18 años, y todos los operadores con licencia verifican tu DNI antes de permitir un retiro. Registrarse siendo menor de edad implica la cancelación de la cuenta y de cualquier saldo asociado.',
  },
  {
    question: '¿Cuánto dinero necesito para empezar?',
    answer:
      'Menos de lo que la mayoría supone. El depósito mínimo habitual en Perú va de S/10 a S/20 según el operador. También existen bonos sin depósito, como los S/30 de Codere, que permiten probar una plataforma sin ingresar dinero propio.',
  },
  {
    question: '¿El casino online paga realmente las ganancias?',
    answer:
      'Un operador con licencia válida está obligado a pagar las ganancias legítimas y a mantener el dinero de los jugadores en cuentas separadas de su capital operativo. El riesgo real no está en jugar online, sino en elegir plataformas sin licencia verificable.',
  },
  {
    question: '¿Qué diferencia hay entre un casino online y una casa de apuestas?',
    answer:
      'Un casino online ofrece juegos de azar (tragamonedas, ruleta, blackjack, casino en vivo). Una casa de apuestas se centra en apuestas deportivas. Muchos operadores en Perú combinan ambas secciones dentro de la misma cuenta y el mismo saldo.',
  },
  {
    question: '¿Puedo jugar desde el celular sin descargar nada?',
    answer:
      'Sí. Prácticamente todos los operadores disponibles en Perú funcionan directamente desde el navegador del celular, sin instalar ninguna app. Algunos ofrecen además una app nativa para Android o iOS, pero no es obligatoria para jugar.',
  },
];

const steps = [
  {
    step: '1',
    title: 'Verifica la licencia',
    desc: 'Debe estar visible en el pie de página: MINCETUR, MGA, UKGC o Curaçao. Sin licencia verificable, no sigas.',
  },
  {
    step: '2',
    title: 'Crea tu cuenta con datos reales',
    desc: 'Tu nombre debe coincidir exactamente con tu DNI, o el retiro se bloqueará más adelante.',
  },
  {
    step: '3',
    title: 'Completa la verificación (KYC)',
    desc: 'Hazlo antes de depositar, no después de ganar. Suele tardar entre 1 y 24 horas.',
  },
  {
    step: '4',
    title: 'Deposita con Yape, Plin o tarjeta',
    desc: 'El depósito se acredita en segundos. El mínimo habitual va de S/10 a S/20.',
  },
  {
    step: '5',
    title: 'Lee las condiciones del bono antes de activarlo',
    desc: 'Un bono activo con wagering pendiente bloquea los retiros hasta completarlo o cancelarlo.',
  },
  {
    step: '6',
    title: 'Fija tus límites desde el primer día',
    desc: 'Depósito máximo, tiempo de sesión y pérdida máxima. Todos los operadores serios lo permiten.',
  },
];

const checks = [
  {
    icon: <ScrollText size={20} />,
    title: 'Licencia verificable',
    desc: 'MINCETUR, MGA, UKGC o Curaçao, visible y con número de registro.',
  },
  {
    icon: <Wallet size={20} />,
    title: 'Pagos locales reales',
    desc: 'Yape y Plin para depósito y retiro, en soles y sin conversión de divisa.',
  },
  {
    icon: <Shield size={20} />,
    title: 'Condiciones de retiro claras',
    desc: 'Tiempos, mínimos y límites publicados antes de registrarte, no después.',
  },
  {
    icon: <CircleHelp size={20} />,
    title: 'Soporte en español',
    desc: 'Chat en vivo que responde en horario peruano, no solo un formulario de correo.',
  },
];

export default function CasinoOnlinePeruPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: ldJson(faqSchema(faqs)) }} />
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb items={[{ label: 'Casino Online en Perú' }]} />

        <div className="mt-6 mb-10">
          <h1 className="text-4xl font-black text-white mb-4">Casino Online en Perú: Cómo Funciona y Cómo Empezar</h1>
          <p className="text-slate-400 leading-relaxed">
            Esta es una guía explicativa para quien nunca ha jugado en un casino online desde Perú: qué es,
            si es legal, cómo se deposita con Yape o Plin y qué revisar antes de registrarte. Si ya sabes
            cómo funciona y solo buscas comparar operadores, ve directamente a nuestra{' '}
            <Link href="/casinos" className="text-emerald-400 hover:underline">
              lista de casinos analizados
            </Link>
            .
          </p>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-black text-white mb-3">¿Es legal jugar en un casino online en Perú?</h2>
          <p className="text-slate-400 leading-relaxed mb-4">
            Sí. El juego online está regulado en Perú por la Ley 31557 y supervisado por MINCETUR, que otorga
            licencias locales a los operadores autorizados. Jugar en plataformas con licencia internacional
            reconocida (MGA, UKGC o Curaçao) tampoco está prohibido para el jugador peruano.
          </p>
          <p className="text-slate-400 leading-relaxed">
            La distinción importante no es nacional contra internacional, sino con licencia contra sin
            licencia. Puedes profundizar en el marco legal en nuestra guía sobre la{' '}
            <Link href="/blog/ley-31557-peru-regulacion-juego-online-mincetur" className="text-emerald-400 hover:underline">
              Ley 31557 y la regulación de MINCETUR
            </Link>
            , y en el listado de{' '}
            <Link href="/blog/casinos-online-legales-peru" className="text-emerald-400 hover:underline">
              casinos legales en Perú
            </Link>
            .
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-black text-white mb-4">Qué encuentras dentro de un casino online</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              ['Tragamonedas', 'El juego más popular en Perú. Giras y el resultado lo decide un RNG auditado.', '/juegos/tragamonedas'],
              ['Casino en vivo', 'Dealers reales transmitidos en HD, con mesas en español.', '/juegos/en-vivo'],
              ['Ruleta', 'Europea, americana y variantes con multiplicadores.', '/juegos/ruleta'],
              ['Blackjack', 'El juego con la ventaja de casa más baja si aplicas estrategia básica.', '/juegos/blackjack'],
            ].map(([title, desc, href]) => (
              <Link
                key={title}
                href={href}
                className="bg-slate-800/60 border border-slate-700 hover:border-emerald-500/40 rounded-xl p-4 transition-colors group"
              >
                <div className="font-bold text-white group-hover:text-emerald-400 transition-colors">{title}</div>
                <div className="text-slate-400 text-sm mt-1">{desc}</div>
              </Link>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-black text-white mb-4">Cómo empezar paso a paso</h2>
          <div className="space-y-3">
            {steps.map((s) => (
              <div key={s.step} className="flex gap-4 bg-slate-800/60 border border-slate-700 rounded-xl p-4">
                <div className="w-8 h-8 rounded-full bg-emerald-500 text-slate-900 font-black flex items-center justify-center flex-shrink-0 text-sm">
                  {s.step}
                </div>
                <div>
                  <div className="font-bold text-white text-sm">{s.title}</div>
                  <div className="text-slate-400 text-sm mt-0.5">{s.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-black text-white mb-4">Cómo se deposita y se retira desde Perú</h2>
          <p className="text-slate-400 leading-relaxed mb-4">
            Yape y Plin son los métodos dominantes: el depósito se acredita en segundos y el retiro suele
            tardar entre 24 y 48 horas una vez verificada la cuenta. Ambos operan en soles, sin conversión de
            divisa ni comisión añadida.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/casino-yape" className="bg-slate-800 border border-slate-700 hover:border-emerald-500/40 rounded-xl px-4 py-2.5 text-sm text-slate-300 hover:text-emerald-400 transition-colors">
              Casinos que aceptan Yape
            </Link>
            <Link href="/casino-plin" className="bg-slate-800 border border-slate-700 hover:border-emerald-500/40 rounded-xl px-4 py-2.5 text-sm text-slate-300 hover:text-emerald-400 transition-colors">
              Casinos que aceptan Plin
            </Link>
            <Link href="/blog/como-retirar-dinero-casino-yape-peru" className="bg-slate-800 border border-slate-700 hover:border-emerald-500/40 rounded-xl px-4 py-2.5 text-sm text-slate-300 hover:text-emerald-400 transition-colors">
              Cómo retirar a Yape
            </Link>
            <Link href="/metodos-de-pago" className="bg-slate-800 border border-slate-700 hover:border-emerald-500/40 rounded-xl px-4 py-2.5 text-sm text-slate-300 hover:text-emerald-400 transition-colors">
              Todos los métodos de pago
            </Link>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-black text-white mb-4">Qué revisar antes de registrarte</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {checks.map((c) => (
              <div key={c.title} className="bg-slate-800/60 border border-slate-700 rounded-xl p-4">
                <div className="text-emerald-400 mb-2">{c.icon}</div>
                <div className="font-bold text-white text-sm">{c.title}</div>
                <div className="text-slate-400 text-sm mt-1">{c.desc}</div>
              </div>
            ))}
          </div>
          <p className="text-slate-400 text-sm leading-relaxed mt-4">
            Nuestro{' '}
            <Link href="/blog/casino-seguro-peru-checklist-licencia-cifrado-reputacion" className="text-emerald-400 hover:underline">
              checklist completo de seguridad
            </Link>{' '}
            desarrolla cada punto, y la{' '}
            <Link href="/blog/como-verificar-cuenta-casino-online-peru" className="text-emerald-400 hover:underline">
              guía de verificación KYC
            </Link>{' '}
            explica el proceso que bloquea la mayoría de retiros cuando se deja para el final.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-black text-white mb-3">Juega con límites, no con expectativas</h2>
          <p className="text-slate-400 leading-relaxed">
            Todos los juegos de casino tienen ventaja matemática a favor de la casa. A largo plazo la casa
            gana: el juego es entretenimiento, no una fuente de ingresos. Define cuánto estás dispuesto a
            perder antes de depositar y no persigas pérdidas. Si el juego deja de ser entretenimiento,
            consulta nuestra sección de{' '}
            <Link href="/juego-responsable" className="text-emerald-400 hover:underline">
              juego responsable
            </Link>
            .
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-black text-white mb-6">Preguntas Frecuentes</h2>
          <div className="space-y-3">
            {faqs.map((faq) => (
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

        <div className="bg-gradient-to-br from-emerald-900/30 to-slate-800/60 border border-emerald-500/30 rounded-2xl p-6">
          <h2 className="text-xl font-black text-white mb-2">¿Listo para elegir un operador?</h2>
          <p className="text-slate-400 text-sm mb-4">
            Ya sabes cómo funciona. El siguiente paso es comparar licencias, bonos y tiempos de retiro entre
            los casinos disponibles en Perú.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/casinos" className="bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-bold py-2.5 px-5 rounded-xl transition-colors text-sm">
              Ver casinos analizados
            </Link>
            <Link href="/bonos/sin-deposito" className="bg-slate-800 border border-slate-700 hover:border-emerald-500/40 text-slate-300 hover:text-emerald-400 font-bold py-2.5 px-5 rounded-xl transition-colors text-sm">
              Empezar con un bono sin depósito
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
