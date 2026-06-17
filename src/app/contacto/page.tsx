import type { Metadata } from 'next';
import { Mail, MessageSquare, Clock } from 'lucide-react';
import Breadcrumb from '@/components/ui/Breadcrumb';

export const metadata: Metadata = {
  title: 'Contacto — CasinoPerú.com',
  description: 'Contacta con el equipo de CasinoPerú.com. Respondemos todas las consultas de jugadores peruanos en menos de 24 horas.',
  alternates: { canonical: '/contacto' },
};

export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <Breadcrumb items={[{ label: 'Contacto' }]} />

      <div className="mt-6 mb-10">
        <h1 className="text-4xl font-black text-white mb-3">Contacta con Nosotros</h1>
        <p className="text-slate-400">¿Tienes una pregunta sobre un casino, un bono o necesitas ayuda? Nuestro equipo responde en menos de 24 horas.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
        {[
          { icon: <Mail size={20} />, title: 'Email', value: 'hola@onlinecasinoperu.com', sub: 'Respuesta en 24h' },
          { icon: <MessageSquare size={20} />, title: 'Consultas', value: 'Casinos, bonos, pagos', sub: 'Cualquier duda' },
          { icon: <Clock size={20} />, title: 'Horario', value: 'Lun–Vie 9:00–18:00', sub: 'Hora Perú (PET)' },
        ].map((c) => (
          <div key={c.title} className="bg-slate-800/60 border border-slate-700 rounded-xl p-4 text-center">
            <div className="flex justify-center text-emerald-400 mb-2">{c.icon}</div>
            <div className="font-bold text-white text-sm">{c.title}</div>
            <div className="text-slate-300 text-sm mt-1">{c.value}</div>
            <div className="text-slate-500 text-xs mt-0.5">{c.sub}</div>
          </div>
        ))}
      </div>

      <div className="bg-slate-800/60 border border-slate-700 rounded-2xl p-6">
        <h2 className="text-xl font-black text-white mb-5">Envíanos un Mensaje</h2>
        <form className="space-y-4" action={process.env.NEXT_PUBLIC_FORM_ENDPOINT || '#'} method="POST">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-1.5">Nombre</label>
              <input type="text" name="name" required className="w-full bg-slate-700 border border-slate-600 rounded-xl px-4 py-2.5 text-white placeholder-slate-400 focus:outline-none focus:border-emerald-500 transition-colors" placeholder="Tu nombre" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-1.5">Email</label>
              <input type="email" name="email" required className="w-full bg-slate-700 border border-slate-600 rounded-xl px-4 py-2.5 text-white placeholder-slate-400 focus:outline-none focus:border-emerald-500 transition-colors" placeholder="tu@email.com" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1.5">Asunto</label>
            <select name="subject" className="w-full bg-slate-700 border border-slate-600 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-emerald-500 transition-colors">
              <option value="casino">Pregunta sobre un casino</option>
              <option value="bono">Pregunta sobre un bono</option>
              <option value="pago">Problemas con un pago</option>
              <option value="colaboracion">Colaboración / Afiliados</option>
              <option value="otro">Otro</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1.5">Mensaje</label>
            <textarea name="message" rows={5} required className="w-full bg-slate-700 border border-slate-600 rounded-xl px-4 py-2.5 text-white placeholder-slate-400 focus:outline-none focus:border-emerald-500 transition-colors resize-none" placeholder="Cuéntanos cómo podemos ayudarte..." />
          </div>
          <button type="submit" className="w-full bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-black py-3 rounded-xl transition-colors">
            Enviar Mensaje
          </button>
          <p className="text-xs text-slate-500 text-center">Al enviar este formulario aceptas nuestra <a href="/privacidad" className="text-emerald-400 hover:underline">política de privacidad</a>.</p>
        </form>
      </div>

      <div className="mt-8 bg-amber-900/20 border border-amber-500/30 rounded-xl p-4 text-sm text-slate-300">
        <strong className="text-amber-400">¿Problema con un casino?</strong> Si tienes un problema con un pago o bono, te recomendamos primero contactar con el soporte del casino directamente. Si no lo resuelven, puedes escalar la queja a <a href="https://casino.guru/es/quejas" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline">Casino Guru</a>, que ofrece mediación gratuita.
      </div>
    </div>
  );
}
