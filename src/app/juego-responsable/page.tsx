import type { Metadata } from 'next';
import { HeartHandshake, Phone, Globe, Shield } from 'lucide-react';
import Breadcrumb from '@/components/ui/Breadcrumb';

export const metadata: Metadata = {
  title: 'Juego Responsable en Perú — Ayuda y Recursos',
  description: 'Información sobre juego responsable en Perú. Recursos de ayuda, señales de alerta y cómo establecer límites de juego saludables.',
  alternates: { canonical: '/juego-responsable' },
};

const helpResources = [
  { name: 'Gambling Therapy', url: 'https://www.gamblingtherapy.org/es', desc: 'Apoyo gratuito en línea para problemas de juego', icon: <Globe size={20} /> },
  { name: 'Jugadores Anónimos Perú', url: '#', desc: 'Grupos de apoyo presenciales en Lima y otras ciudades', icon: <Phone size={20} /> },
  { name: 'SAMU (emergencias)', url: 'tel:106', desc: 'Línea de emergencias médicas en Perú: 106', icon: <Phone size={20} /> },
];

const warningSigns = [
  'Jugar con dinero que necesitas para gastos básicos',
  'Intentar recuperar pérdidas apostando más',
  'Mentir a familiares sobre cuánto juegas o gastas',
  'Sentir ansiedad o irritabilidad cuando no puedes jugar',
  'Descuidar el trabajo, estudios o familia por el juego',
  'Pedir dinero prestado para seguir jugando',
  'Pensar constantemente en el juego aunque no estés jugando',
];

export default function ResponsibleGamblingPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumb items={[{ label: 'Juego Responsable' }]} />

      <div className="mt-6 mb-10">
        <div className="flex items-center gap-3 mb-4">
          <HeartHandshake size={32} className="text-emerald-400" />
          <h1 className="text-4xl font-black text-white">Juego Responsable en Perú</h1>
        </div>
        <p className="text-slate-400 text-lg leading-relaxed">
          En CasinoPerú.com creemos que el juego debe ser entretenimiento, nunca una fuente de ingresos ni un escape emocional. Esta página está dedicada a proporcionar información y recursos para que puedas jugar de forma segura.
        </p>
      </div>

      {/* Emergency banner */}
      <div className="bg-red-900/30 border border-red-500/50 rounded-2xl p-5 mb-8">
        <div className="flex items-center gap-3">
          <div className="text-3xl">🆘</div>
          <div>
            <div className="font-bold text-white">¿Necesitas ayuda ahora mismo?</div>
            <p className="text-slate-300 text-sm mt-1">Contacta con <strong>Gambling Therapy</strong> para apoyo gratuito y confidencial en español.</p>
            <a href="https://www.gamblingtherapy.org/es" target="_blank" rel="noopener noreferrer" className="inline-block mt-2 bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-5 rounded-lg text-sm transition-colors">
              Buscar Ayuda Gratuita →
            </a>
          </div>
        </div>
      </div>

      {/* Warning signs */}
      <section className="mb-10">
        <h2 className="text-2xl font-black text-white mb-4">Señales de Alerta del Juego Problemático</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {warningSigns.map((sign, i) => (
            <div key={i} className="flex items-start gap-3 bg-slate-800 border border-slate-700 rounded-xl p-3">
              <div className="w-6 h-6 rounded-full bg-amber-500/20 border border-amber-500/50 flex items-center justify-center text-xs font-black text-amber-400 flex-shrink-0 mt-0.5">
                {i + 1}
              </div>
              <span className="text-slate-300 text-sm">{sign}</span>
            </div>
          ))}
        </div>
        <p className="text-slate-400 text-sm mt-4">
          Si reconoces 3 o más de estas señales en ti mismo o en alguien cercano, te recomendamos buscar ayuda profesional de inmediato.
        </p>
      </section>

      {/* Tips */}
      <section className="mb-10">
        <h2 className="text-2xl font-black text-white mb-4">Consejos para Jugar de Forma Responsable</h2>
        <div className="space-y-4">
          {[
            ['Establece un presupuesto', 'Decide cuánto dinero puedes gastar como entretenimiento antes de empezar a jugar. Nunca lo aumentes una vez que hayas llegado al límite.'],
            ['Pon límites de tiempo', 'Establece un límite de tiempo para cada sesión de juego. Usa el temporizador de tu teléfono como recordatorio.'],
            ['Nunca persigas las pérdidas', 'Si pierdes tu presupuesto, detente. Intentar recuperar lo perdido es uno de los mayores errores del juego problemático.'],
            ['El juego no es una inversión', 'Los casinos tienen ventaja matemática en todos los juegos. El juego es entretenimiento, no una forma de ganar dinero consistentemente.'],
            ['Usa las herramientas del casino', 'Los casinos responsables ofrecen autoexclusión, límites de depósito y períodos de enfriamiento. Úsalos si los necesitas.'],
          ].map(([title, desc]) => (
            <div key={title} className="bg-slate-800/60 border border-slate-700 rounded-xl p-4">
              <div className="flex items-start gap-3">
                <Shield size={16} className="text-emerald-400 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="font-bold text-white text-sm mb-1">{title}</div>
                  <div className="text-slate-400 text-sm">{desc}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Resources */}
      <section>
        <h2 className="text-2xl font-black text-white mb-4">Recursos de Ayuda en Perú</h2>
        <div className="space-y-3">
          {helpResources.map((r) => (
            <a key={r.name} href={r.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 bg-slate-800 border border-slate-700 hover:border-emerald-500/50 rounded-xl p-4 transition-all group">
              <div className="text-emerald-400 flex-shrink-0">{r.icon}</div>
              <div className="flex-1">
                <div className="font-bold text-white group-hover:text-emerald-400 transition-colors">{r.name}</div>
                <div className="text-slate-400 text-sm">{r.desc}</div>
              </div>
              <div className="text-slate-600 group-hover:text-emerald-400 transition-colors">→</div>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}

