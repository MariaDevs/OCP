import type { Metadata } from 'next';
import { Shield, Users, Star, CheckCircle2 } from 'lucide-react';
import Breadcrumb from '@/components/ui/Breadcrumb';

export const metadata: Metadata = {
  title: 'Sobre Nosotros — CasinoPerú.com',
  description: 'Conoce al equipo de CasinoPerú.com. Somos una guía independiente de casinos online para jugadores peruanos desde 2020.',
  alternates: { canonical: '/sobre-nosotros' },
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumb items={[{ label: 'Sobre Nosotros' }]} />

      <div className="mt-6 mb-10">
        <h1 className="text-4xl font-black text-white mb-4">Sobre CasinoPerú.com</h1>
        <p className="text-slate-400 text-lg leading-relaxed">
          Somos una guía independiente de casinos online diseñada específicamente para jugadores peruanos. Desde 2020 ayudamos a más de 120,000 peruanos a encontrar el casino online más seguro, justo y generoso para sus necesidades.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
        {[
          { icon: <Shield size={24} />, title: '100% Independiente', desc: 'No somos propiedad de ningún casino. Nuestras reseñas son honestas y objetivas.' },
          { icon: <Users size={24} />, title: '120K+ Jugadores', desc: 'Más de 120,000 jugadores peruanos confían en nuestras recomendaciones.' },
          { icon: <Star size={24} />, title: '6 Años de Experiencia', desc: 'Desde 2020 somos referencia en el mercado de casinos online peruano.' },
        ].map((item) => (
          <div key={item.title} className="bg-slate-800/60 border border-slate-700 rounded-2xl p-5 text-center">
            <div className="flex justify-center text-emerald-400 mb-3">{item.icon}</div>
            <div className="font-bold text-white mb-2">{item.title}</div>
            <div className="text-slate-400 text-sm">{item.desc}</div>
          </div>
        ))}
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-black text-white mb-4">Nuestra Misión</h2>
        <p className="text-slate-400 leading-relaxed mb-4">
          El mercado de casinos online en Perú puede ser confuso y, a veces, peligroso. Existen plataformas sin licencia, bonos con condiciones abusivas y juegos sin fair play. Nuestra misión es ayudar a los jugadores peruanos a navegar este mercado con seguridad y confianza.
        </p>
        <p className="text-slate-400 leading-relaxed">
          Analizamos cada casino a través de un proceso riguroso que incluye crear cuentas reales, hacer depósitos y retiros con Yape, Plin y otros métodos peruanos, probar los juegos y verificar la validez de las licencias. Solo recomendamos casinos que cumplan nuestros estándares de calidad y seguridad.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-black text-white mb-4">¿Cómo Ganamos Dinero?</h2>
        <div className="bg-amber-900/20 border border-amber-500/30 rounded-2xl p-5">
          <p className="text-slate-300 leading-relaxed">
            <strong className="text-amber-400">Transparencia total:</strong> CasinoPerú.com gana dinero a través de comisiones de afiliado. Cuando un jugador hace clic en un enlace de nuestro sitio y se registra en un casino, recibimos una comisión del casino.
          </p>
          <p className="text-slate-300 leading-relaxed mt-3">
            <strong className="text-white">Esto NO afecta nuestras reseñas.</strong> Nunca hemos aceptado dinero por publicar una reseña positiva. Si un casino no supera nuestros estándares, no lo recomendamos, aunque nos ofrezcan comisiones más altas. Nuestra reputación vale más que cualquier comisión.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-black text-white mb-4">Nuestros Compromisos</h2>
        <ul className="space-y-3">
          {[
            'Solo recomendamos casinos con licencias válidas y verificadas',
            'Probamos cada casino con dinero real antes de reseñarlo',
            'Actualizamos todas las reseñas y datos al menos cada 3 meses',
            'Publicamos los pros y contras de forma honesta, sin ocultar problemas',
            'Somos defensores del juego responsable y lo promovemos activamente',
            'Respondemos a todas las consultas de jugadores peruanos',
          ].map((commitment) => (
            <li key={commitment} className="flex items-start gap-3 text-slate-400">
              <CheckCircle2 size={16} className="text-emerald-400 mt-0.5 flex-shrink-0" />
              {commitment}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
