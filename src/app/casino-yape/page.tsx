import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ExternalLink, CheckCircle2, ChevronRight, Shield, Zap, Smartphone } from 'lucide-react';
import Breadcrumb from '@/components/ui/Breadcrumb';
import { casinos } from '@/lib/data/casinos';
import { faqSchema, ldJson } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Casino Online con Yape en Perú 2026 — Depósito y Retiro',
  description: 'Los mejores casinos online que aceptan Yape en Perú 2026. Deposita y retira con Yape de forma instantánea y sin comisiones. Guía actualizada.',
  alternates: { canonical: '/casino-yape' },
};

const yapeFaqs = [
  {
    question: '¿Qué casinos online aceptan Yape en Perú?',
    answer: 'Los principales casinos que aceptan Yape en Perú son Betsson, 1xBet, Codere, Bet365, LeoVegas, JackpotCity, Spin Casino, Wplay, Betsafe y MegaPari. La lista sigue creciendo ya que Yape es el método de pago más popular en el país.',
  },
  {
    question: '¿Cómo depositar en un casino online con Yape?',
    answer: 'Es muy sencillo: 1) Accede a la sección de Caja o Depósitos en el casino. 2) Selecciona Yape como método de pago. 3) Ingresa el monto que deseas depositar. 4) El casino te mostrará un número de teléfono o QR. 5) Realiza el pago desde tu app de Yape. El depósito se acredita en segundos.',
  },
  {
    question: '¿Puedo retirar mis ganancias con Yape?',
    answer: 'Sí, la mayoría de casinos que aceptan Yape para depósitos también permiten retiros. El tiempo de procesamiento es de 24-48 horas. Necesitas haber verificado tu identidad (DNI) antes de solicitar tu primer retiro.',
  },
  {
    question: '¿Hay comisiones al usar Yape en casinos online?',
    answer: 'No. Los depósitos y retiros con Yape en casinos online no tienen comisiones adicionales. Ni el casino ni Yape cobran comisión por estas transacciones, lo que lo convierte en el método más económico disponible en Perú.',
  },
  {
    question: '¿Es seguro usar Yape en casinos online?',
    answer: 'Sí. Yape es más seguro que las tarjetas de crédito porque no compartes datos bancarios con el casino. Solo necesitas el número de teléfono vinculado a tu Yape. Úsalo siempre en casinos con licencia válida (MGA, MINCETUR o Curaçao) para máxima seguridad.',
  },
  {
    question: '¿Cuál es el depósito mínimo con Yape en casinos online peruanos?',
    answer: 'El depósito mínimo varía por casino: Wplay acepta desde S/10, 1xBet desde S/15, y la mayoría como Betsson, Codere y LeoVegas tienen un mínimo de S/20. Todos están dentro del límite diario de Yape.',
  },
];

const yapeSteps = [
  { step: '1', title: 'Elige tu casino', desc: 'Selecciona un casino de la lista de abajo que acepte Yape.' },
  { step: '2', title: 'Crea tu cuenta', desc: 'Regístrate con tu email y datos básicos. El proceso toma 2 minutos.' },
  { step: '3', title: 'Ve a Depósitos', desc: 'Accede a la sección de Caja o Depósitos dentro del casino.' },
  { step: '4', title: 'Selecciona Yape', desc: 'Elige Yape como método de pago e ingresa el monto.' },
  { step: '5', title: 'Paga con la app', desc: 'Escanea el QR o usa el número de teléfono desde tu app Yape.' },
  { step: '6', title: '¡Listo!', desc: 'El saldo se acredita en segundos. Activa tu bono y empieza a jugar.' },
];

const yapeFeatures = [
  { icon: <Zap size={20} />, title: 'Instantáneo', desc: 'Depósitos acreditados en segundos' },
  { icon: <Shield size={20} />, title: 'Seguro', desc: 'Sin compartir datos bancarios' },
  { icon: <CheckCircle2 size={20} />, title: 'Sin comisiones', desc: '0% de comisión en depósitos' },
  { icon: <Smartphone size={20} />, title: '100% móvil', desc: 'Deposita desde tu celular' },
];

export default function CasinoYapePage() {
  const yapeCasinos = casinos.filter((c) => c.paymentMethods.includes('Yape'));

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: ldJson(faqSchema(yapeFaqs)) }} />

      <div className="max-w-7xl mx-auto px-4 py-8">
        <Breadcrumb items={[{ label: 'Casino con Yape' }]} />

        {/* Hero */}
        <div className="mt-6 mb-10">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full px-4 py-1.5 text-sm mb-4">
            <span className="text-emerald-400 font-semibold">📱 Depósito instantáneo con Yape</span>
          </div>
          <h1 className="text-4xl font-black text-white mb-4">
            Casinos Online que Aceptan Yape en Perú 2026
          </h1>
          <p className="text-slate-400 max-w-3xl text-lg leading-relaxed">
            Yape es el método de pago favorito de los peruanos para casinos online. Depósitos instantáneos, sin comisiones y sin compartir datos bancarios. Aquí tienes los mejores casinos que lo aceptan.
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
          {yapeFeatures.map((f) => (
            <div key={f.title} className="bg-emerald-900/20 border border-emerald-500/30 rounded-2xl p-4 text-center">
              <div className="text-emerald-400 flex justify-center mb-2">{f.icon}</div>
              <div className="font-bold text-white text-sm">{f.title}</div>
              <div className="text-slate-400 text-xs mt-1">{f.desc}</div>
            </div>
          ))}
        </div>

        {/* Casino list */}
        <section className="mb-14">
          <h2 className="text-2xl font-black text-white mb-6">Mejores Casinos con Yape en Perú</h2>
          <div className="space-y-4">
            {yapeCasinos.map((casino, i) => (
              <div key={casino.slug} className="bg-slate-800/60 border border-slate-700 hover:border-emerald-500/50 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(16,185,129,0.12)] rounded-2xl p-5 transition-all flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                <div className="flex items-center gap-1 flex-shrink-0">
                  <span className="text-slate-500 font-bold text-sm w-6">#{i + 1}</span>
                  <div className="w-14 h-14 rounded-xl bg-slate-700 overflow-hidden ml-1">
                    {casino.logo
                      ? <Image src={casino.logo} alt={casino.name} width={56} height={56} className="w-full h-full object-contain p-1" />
                      : <div className="w-full h-full flex items-center justify-center font-black text-emerald-400">{casino.name.charAt(0)}</div>
                    }
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="font-bold text-white text-lg">{casino.name}</span>
                    <span className="text-xs bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded-full px-2 py-0.5">📱 Yape</span>
                    {casino.paymentMethods.includes('Plin') && (
                      <span className="text-xs bg-blue-500/20 text-blue-400 border border-blue-500/30 rounded-full px-2 py-0.5">Plin</span>
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
                    className="flex items-center justify-center gap-1.5 bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-black py-2.5 px-5 rounded-xl transition-colors text-sm"
                  >
                    Depositar con Yape <ExternalLink size={13} />
                  </a>
                  <Link href={`/casinos/${casino.slug}`} className="text-xs text-center text-slate-400 hover:text-emerald-400 transition-colors">
                    Ver reseña completa
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* How to deposit */}
        <section className="mb-14">
          <h2 className="text-2xl font-black text-white mb-6">¿Cómo Depositar en un Casino Online con Yape?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {yapeSteps.map((s) => (
              <div key={s.step} className="bg-slate-800/60 border border-slate-700 rounded-2xl p-5 flex gap-4">
                <div className="w-9 h-9 rounded-full bg-emerald-500 text-slate-900 font-black flex items-center justify-center flex-shrink-0">
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
          <h2 className="text-xl font-black text-white mb-4">Yape en Casinos Online: Todo lo que Necesitas Saber</h2>
          <p className="text-slate-400 leading-relaxed mb-4">
            Yape, la billetera digital del BCP, se ha convertido en el método de pago preferido de los jugadores peruanos para casinos online. Su popularidad se debe a la combinación perfecta de velocidad, seguridad y comodidad. Con más de 12 millones de usuarios en Perú, prácticamente cualquier persona puede usarlo.
          </p>
          <p className="text-slate-400 leading-relaxed mb-4">
            La principal ventaja de Yape frente a las tarjetas de crédito es la privacidad: no necesitas ingresar datos bancarios en el casino, reduciendo el riesgo de fraude. Además, los depósitos se acreditan en segundos, lo que significa que puedes empezar a jugar inmediatamente.
          </p>
          <p className="text-slate-400 leading-relaxed">
            Para los retiros, la mayoría de casinos procesan las solicitudes en 24-48 horas. Recuerda que antes de tu primer retiro deberás verificar tu identidad con tu DNI peruano, un proceso estándar de seguridad conocido como KYC que protege tanto al jugador como al casino.
          </p>
        </section>

        {/* FAQ */}
        <section>
          <h2 className="text-2xl font-black text-white mb-6">Preguntas Frecuentes — Casino con Yape Perú</h2>
          <div className="space-y-3">
            {yapeFaqs.map((faq) => (
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
