import type { Metadata } from 'next';
import { Shield, Users, Star, CheckCircle2, Search, CreditCard, Headphones, Trophy, AlertTriangle, Mail } from 'lucide-react';
import Link from 'next/link';
import Breadcrumb from '@/components/ui/Breadcrumb';
import { ldJson } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Sobre Nosotros — CasinoPerú.com | Metodología y Equipo',
  description: 'Conoce al equipo editorial de CasinoPerú.com, nuestra metodología de análisis de casinos, política editorial y cómo protegemos a los jugadores peruanos.',
  alternates: { canonical: '/sobre-nosotros' },
};

const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'CasinoPerú.com',
  url: 'https://www.onlinecasinoperu.com',
  logo: 'https://www.onlinecasinoperu.com/images/logo.svg',
  description: 'Guía independiente de casinos online en Perú. Analizamos y comparamos los mejores casinos para jugadores peruanos desde 2020.',
  foundingDate: '2020',
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'editorial',
    email: 'editorial@onlinecasinoperu.com',
    availableLanguage: 'Spanish',
  },
  sameAs: [],
};

const team = [
  {
    name: 'Carlos Mendoza',
    role: 'Editor en Jefe',
    bio: 'Más de 10 años cubriendo el sector iGaming en Latinoamérica. Especialista en licencias de juego, regulación y análisis de plataformas. Supervisa todas las reseñas antes de publicación.',
    expertise: ['Licencias y regulación', 'Análisis de plataformas', 'Estrategia editorial'],
    icon: '👨‍💼',
  },
  {
    name: 'Ana Torres',
    role: 'Analista de Bonos y Promociones',
    bio: 'Ex-trabajadora del sector bancario peruano reconvertida al análisis de productos financieros de casino. Especialista en wagering, términos y condiciones y comparativas de bonos.',
    expertise: ['Análisis de bonos', 'Requisitos de apuesta', 'Términos y condiciones'],
    icon: '👩‍💻',
  },
  {
    name: 'Diego Ruiz',
    role: 'Especialista en Métodos de Pago',
    bio: 'Experto en pagos digitales peruanos con enfoque en Yape, Plin y criptomonedas. Prueba personalmente todos los flujos de depósito y retiro en cada casino analizado.',
    expertise: ['Yape y Plin', 'Criptomonedas', 'Velocidad de retiros'],
    icon: '💳',
  },
  {
    name: 'María López',
    role: 'Especialista en Casino en Vivo',
    bio: 'Jugadora experta con conocimiento profundo de Evolution Gaming, Pragmatic Play Live y otros proveedores de casino en vivo. Evalúa la calidad del streaming, los dealers y la experiencia de usuario.',
    expertise: ['Casino en vivo', 'Proveedores de juego', 'Experiencia móvil'],
    icon: '🎲',
  },
];

const methodology = [
  {
    icon: <Shield size={20} />,
    title: '1. Verificación de Licencia',
    desc: 'Comprobamos directamente en el registro público del regulador (MGA, MINCETUR, Curaçao) que la licencia es válida y está vigente. Un casino con licencia caducada o falsa es descartado inmediatamente.',
  },
  {
    icon: <Users size={20} />,
    title: '2. Creación de Cuenta Real',
    desc: 'Creamos una cuenta real con datos peruanos reales. Evaluamos la facilidad del registro, las verificaciones requeridas y el tiempo del proceso KYC con DNI peruano.',
  },
  {
    icon: <CreditCard size={20} />,
    title: '3. Depósito con Métodos Peruanos',
    desc: 'Realizamos depósitos reales con Yape, Plin, BCP y tarjetas peruanas. Medimos el tiempo de acreditación, las comisiones y cualquier problema en el proceso.',
  },
  {
    icon: <Search size={20} />,
    title: '4. Análisis del Catálogo de Juegos',
    desc: 'Exploramos el catálogo completo: número de tragamonedas, proveedores disponibles, calidad del casino en vivo, variantes de mesa y disponibilidad en móvil.',
  },
  {
    icon: <Trophy size={20} />,
    title: '5. Evaluación de Bonos',
    desc: 'Reclamamos el bono de bienvenida y leemos los términos completos. Evaluamos el wagering, los juegos excluidos, los límites de retiro de ganancias y la claridad de las condiciones.',
  },
  {
    icon: <Headphones size={20} />,
    title: '6. Prueba de Atención al Cliente',
    desc: 'Contactamos el soporte por chat en vivo, email y otros canales disponibles. Medimos el tiempo de respuesta, la calidad de la ayuda en español y la efectividad en resolver problemas.',
  },
  {
    icon: <CreditCard size={20} />,
    title: '7. Solicitud de Retiro Real',
    desc: 'Solicitamos un retiro real y medimos el tiempo total desde la solicitud hasta recibir el dinero en Yape o cuenta bancaria. Este paso es crítico — un casino que retrasa retiros sin causa no recibe recomendación.',
  },
  {
    icon: <Star size={20} />,
    title: '8. Puntuación Final y Publicación',
    desc: 'Combinamos todos los factores en una puntuación de 1 a 5. La reseña es revisada por el editor en jefe antes de publicarse. Actualizamos cada reseña al menos cada 3 meses.',
  },
];

const criteria = [
  { label: 'Seguridad y Licencia', weight: '25%', desc: 'La licencia válida es innegociable. MGA y MINCETUR tienen la máxima ponderación.' },
  { label: 'Métodos de Pago Peruanos', weight: '20%', desc: 'Prioridad a casinos con Yape, Plin y transferencias a bancos peruanos.' },
  { label: 'Velocidad de Retiros', weight: '20%', desc: 'Medimos el tiempo real desde solicitud hasta recepción del dinero.' },
  { label: 'Calidad de Bonos', weight: '15%', desc: 'Wagering bajo, condiciones claras y términos sin trampas ocultas.' },
  { label: 'Catálogo de Juegos', weight: '10%', desc: 'Variedad, proveedores de calidad y experiencia en móvil.' },
  { label: 'Atención al Cliente', weight: '10%', desc: 'Soporte en español, disponibilidad y efectividad.' },
];

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: ldJson(orgSchema) }} />

      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb items={[{ label: 'Sobre Nosotros' }]} />

        {/* Hero */}
        <div className="mt-6 mb-10">
          <h1 className="text-4xl font-black text-white mb-4">Sobre CasinoPerú.com</h1>
          <p className="text-slate-400 text-lg leading-relaxed mb-3">
            Somos una guía editorial independiente de casinos online creada para jugadores peruanos. Desde 2020 analizamos, comparamos y reseñamos los operadores disponibles en Perú con un único objetivo: ayudarte a jugar de forma segura e informada.
          </p>
          <p className="text-xs text-slate-500">Última actualización editorial: julio 2026</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
          {[
            { icon: <Shield size={22} />, value: '18+', label: 'Casinos analizados' },
            { icon: <Users size={22} />, value: '120K+', label: 'Jugadores ayudados' },
            { icon: <Star size={22} />, value: '6 años', label: 'De experiencia' },
            { icon: <CheckCircle2 size={22} />, value: '100%', label: 'Independiente' },
          ].map((s) => (
            <div key={s.label} className="bg-slate-800/60 border border-slate-700 rounded-2xl p-4 text-center">
              <div className="flex justify-center text-emerald-400 mb-2">{s.icon}</div>
              <div className="text-2xl font-black text-white">{s.value}</div>
              <div className="text-slate-400 text-xs mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Mission */}
        <section className="mb-12">
          <h2 className="text-2xl font-black text-white mb-4">Nuestra Misión</h2>
          <p className="text-slate-400 leading-relaxed mb-4">
            El mercado de casinos online en Perú puede ser confuso y a veces peligroso. Existen plataformas sin licencia, bonos con condiciones abusivas y juegos sin certificación de equidad. Los jugadores peruanos merecen información clara, honesta y actualizada para tomar decisiones informadas.
          </p>
          <p className="text-slate-400 leading-relaxed">
            CasinoPerú.com nació para cubrir ese vacío. Somos periodistas especializados en iGaming, no afiliados disfrazados de guía. Nuestra credibilidad depende de que nuestra información sea correcta y nuestras recomendaciones sean genuinas.
          </p>
        </section>

        {/* Team */}
        <section className="mb-12">
          <h2 className="text-2xl font-black text-white mb-2">Nuestro Equipo Editorial</h2>
          <p className="text-slate-400 text-sm mb-6">Todas las reseñas son firmadas por un miembro del equipo y revisadas por el editor en jefe antes de publicarse.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {team.map((member) => (
              <div key={member.name} className="bg-slate-800/60 border border-slate-700 rounded-2xl p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-full bg-slate-700 flex items-center justify-center text-2xl flex-shrink-0">
                    {member.icon}
                  </div>
                  <div>
                    <div className="font-bold text-white">{member.name}</div>
                    <div className="text-emerald-400 text-xs font-semibold">{member.role}</div>
                  </div>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed mb-3">{member.bio}</p>
                <div className="flex flex-wrap gap-1.5">
                  {member.expertise.map((e) => (
                    <span key={e} className="text-xs bg-slate-700 text-slate-300 rounded-full px-2.5 py-1">{e}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Methodology */}
        <section className="mb-12">
          <h2 className="text-2xl font-black text-white mb-2">Nuestra Metodología de Análisis</h2>
          <p className="text-slate-400 text-sm mb-6">Cada casino pasa por un proceso de evaluación de 8 semanas antes de ser publicado en el sitio. No publicamos reseñas de casinos que no hemos probado con dinero real.</p>
          <div className="space-y-4">
            {methodology.map((step) => (
              <div key={step.title} className="bg-slate-800/60 border border-slate-700 rounded-xl p-5 flex gap-4">
                <div className="text-emerald-400 flex-shrink-0 mt-0.5">{step.icon}</div>
                <div>
                  <div className="font-bold text-white text-sm mb-1">{step.title}</div>
                  <div className="text-slate-400 text-sm leading-relaxed">{step.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Criteria weights */}
        <section className="mb-12">
          <h2 className="text-2xl font-black text-white mb-6">Criterios de Puntuación</h2>
          <div className="space-y-4">
            {criteria.map((c) => (
              <div key={c.label}>
                <div className="flex justify-between items-center mb-1.5">
                  <span className="text-white font-semibold text-sm">{c.label}</span>
                  <span className="text-emerald-400 font-black text-sm">{c.weight}</span>
                </div>
                <div className="h-2 bg-slate-700 rounded-full overflow-hidden mb-1.5">
                  <div className="h-full bg-gradient-to-r from-emerald-500 to-emerald-400 rounded-full" style={{ width: c.weight }} />
                </div>
                <p className="text-slate-500 text-xs">{c.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Affiliate disclosure */}
        <section className="mb-12">
          <h2 className="text-2xl font-black text-white mb-4">Política de Afiliación y Conflicto de Intereses</h2>
          <div className="bg-amber-900/20 border border-amber-500/30 rounded-2xl p-5 mb-4">
            <div className="flex items-start gap-3">
              <AlertTriangle size={18} className="text-amber-400 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-slate-300 leading-relaxed text-sm mb-3">
                  <strong className="text-amber-400">Divulgación de afiliación:</strong> CasinoPerú.com genera ingresos mediante comisiones de afiliado. Cuando un usuario hace clic en un enlace marcado como "sponsored" o "patrocinado" y realiza un depósito en un casino, podemos recibir una compensación económica del operador.
                </p>
                <p className="text-slate-300 leading-relaxed text-sm">
                  <strong className="text-white">Cómo protegemos nuestra independencia editorial:</strong> Las comisiones de afiliado no influyen en nuestras puntuaciones ni en el contenido de las reseñas. Los casinos no pueden pagar por reseñas positivas ni por posiciones en nuestro ranking. Si un casino no supera nuestros estándares de seguridad, no lo publicamos, independientemente de las comisiones ofrecidas. Nuestro equipo editorial opera de forma independiente del equipo comercial.
                </p>
              </div>
            </div>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed">
            Los casinos marcados con <strong className="text-white">"Verificado"</strong> han completado nuestro proceso de evaluación completo. Los casinos marcados como <strong className="text-white">"Nuevo"</strong> están en período de seguimiento de 6 meses antes de recibir una puntuación definitiva.
          </p>
        </section>

        {/* Update policy */}
        <section className="mb-12">
          <h2 className="text-2xl font-black text-white mb-4">Política de Actualización de Contenidos</h2>
          <div className="space-y-3">
            {[
              'Las reseñas de casinos se actualizan cada 3 meses o inmediatamente si hay cambios relevantes en el operador.',
              'Los bonos y promociones se verifican semanalmente — los bonos caducados se marcan o eliminan.',
              'Si un casino pierde su licencia o recibimos reportes fundados de problemas de pago, retiramos la recomendación inmediatamente.',
              'Las correcciones de errores factuales se realizan en menos de 24 horas una vez notificadas.',
              'Publicamos la fecha de última actualización en cada reseña para que el lector sepa cuán reciente es la información.',
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 text-slate-400 text-sm">
                <CheckCircle2 size={14} className="text-emerald-400 mt-0.5 flex-shrink-0" />
                {item}
              </div>
            ))}
          </div>
        </section>

        {/* Complaints */}
        <section className="mb-12">
          <h2 className="text-2xl font-black text-white mb-4">Quejas, Correcciones y Contacto</h2>
          <div className="bg-slate-800/60 border border-slate-700 rounded-2xl p-5">
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              Si tienes una disputa con un casino que hemos recomendado, si encuentras un error factual en nuestro contenido, o si quieres reportar un problema con algún operador, contáctanos. Investigamos todas las quejas y actuamos en consecuencia.
            </p>
            <div className="flex items-center gap-3">
              <Mail size={16} className="text-emerald-400" />
              <span className="text-emerald-400 font-semibold text-sm">editorial@onlinecasinoperu.com</span>
            </div>
            <p className="text-slate-500 text-xs mt-3">Tiempo de respuesta habitual: menos de 48 horas en días laborables.</p>
          </div>
        </section>

        {/* Responsible gambling */}
        <section>
          <h2 className="text-2xl font-black text-white mb-4">Compromiso con el Juego Responsable</h2>
          <p className="text-slate-400 text-sm leading-relaxed mb-4">
            El juego online debe ser entretenimiento, no una fuente de ingresos ni una solución a problemas financieros. CasinoPerú.com promueve activamente el juego responsable y nunca recomendamos casinos que no tengan herramientas de autoexclusión, límites de depósito y acceso a recursos de ayuda.
          </p>
          <p className="text-slate-400 text-sm leading-relaxed mb-4">
            Si tú o alguien que conoces tiene un problema con el juego, existen recursos de ayuda disponibles en Perú a través del Ministerio de Salud (MINSA) y organizaciones especializadas en adicciones.
          </p>
          <Link href="/juego-responsable" className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 font-semibold text-sm transition-colors">
            Ver nuestra guía de juego responsable →
          </Link>
        </section>
      </div>
    </>
  );
}
