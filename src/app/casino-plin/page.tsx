import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ExternalLink, CheckCircle2, ChevronRight, Shield, Zap, Smartphone } from 'lucide-react';
import Breadcrumb from '@/components/ui/Breadcrumb';
import { casinos } from '@/lib/data/casinos';
import { faqSchema, ldJson } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Casino Online con Plin en Perú 2026 — Depósito y Retiro',
  description: 'Los mejores casinos online que aceptan Plin en Perú 2026. Deposita y retira con Plin de forma instantánea y sin comisiones. Guía actualizada.',
  alternates: { canonical: '/casino-plin' },
};

const plinFaqs = [
  {
    question: '¿Qué casinos online aceptan Plin en Perú?',
    answer: 'Los principales casinos que aceptan Plin en Perú son Betsson, Codere, LeoVegas, JackpotCity, Spin Casino, Betsafe, Wplay, MagicRed y MegaPari. Plin es compatible con BBVA, Interbank, Scotiabank y otras entidades financieras peruanas.',
  },
  {
    question: '¿Cómo depositar en un casino online con Plin?',
    answer: 'Es muy sencillo: 1) Ve a la sección de Caja o Depósitos del casino. 2) Selecciona Plin como método de pago. 3) Ingresa el monto a depositar. 4) El casino te mostrará un número o QR. 5) Realiza el pago desde tu app Plin. El depósito se acredita en segundos.',
  },
  {
    question: '¿Puedo retirar mis ganancias con Plin desde un casino online?',
    answer: 'Sí. La mayoría de casinos que aceptan Plin para depósitos también permiten retiros. Los retiros se procesan en 24-48 horas. Antes de tu primer retiro debes verificar tu identidad con tu DNI peruano.',
  },
  {
    question: '¿Cuál es la diferencia entre Yape y Plin para casinos online?',
    answer: 'Yape es del BCP y Plin es una alianza entre BBVA, Interbank, Scotiabank y otras entidades. Funcionan igual de rápido y ambos son gratuitos. La diferencia es el banco que usas: si tienes BBVA o Interbank, Plin es tu opción natural. Si tienes BCP, Yape es lo ideal.',
  },
  {
    question: '¿Hay comisiones al usar Plin en casinos online?',
    answer: 'No. Los depósitos con Plin en casinos online son gratuitos, sin comisiones adicionales ni por parte del casino ni de Plin. Es uno de los métodos más económicos disponibles para jugadores peruanos.',
  },
  {
    question: '¿Cuál es el depósito mínimo con Plin en casinos online peruanos?',
    answer: 'El depósito mínimo varía por casino: Wplay acepta desde S/10, y la mayoría como Betsson, Codere y LeoVegas tienen un mínimo de S/20. Todos están dentro del límite de transferencia diaria de Plin.',
  },
];

const plinSteps = [
  { step: '1', title: 'Elige tu casino', desc: 'Selecciona un casino de la lista de abajo que acepte Plin.' },
  { step: '2', title: 'Crea tu cuenta', desc: 'Regístrate con tu email y datos básicos. El proceso toma 2 minutos.' },
  { step: '3', title: 'Ve a Depósitos', desc: 'Accede a la sección de Caja o Depósitos dentro del casino.' },
  { step: '4', title: 'Selecciona Plin', desc: 'Elige Plin como método de pago e ingresa el monto deseado.' },
  { step: '5', title: 'Paga con la app', desc: 'Escanea el QR o usa el número de teléfono desde tu app Plin.' },
  { step: '6', title: '¡Listo!', desc: 'El saldo se acredita en segundos. Activa tu bono y empieza a jugar.' },
];

const plinFeatures = [
  { icon: <Zap size={20} />, title: 'Instantáneo', desc: 'Depósitos acreditados en segundos' },
  { icon: <Shield size={20} />, title: 'Seguro', desc: 'Sin compartir datos bancarios' },
  { icon: <CheckCircle2 size={20} />, title: 'Sin comisiones', desc: '0% de comisión en depósitos' },
  { icon: <Smartphone size={20} />, title: '100% móvil', desc: 'Deposita desde tu celular' },
];

export default function CasinoPlinPage() {
  const plinCasinos = casinos.filter((c) => c.paymentMethods.includes('Plin'));

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: ldJson(faqSchema(plinFaqs)) }} />

      <div className="max-w-7xl mx-auto px-4 py-8">
        <Breadcrumb items={[{ label: 'Casino con Plin' }]} />

        {/* Hero */}
        <div className="mt-6 mb-10">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 rounded-full px-4 py-1.5 text-sm mb-4">
            <span className="text-blue-400 font-semibold">📱 Depósito instantáneo con Plin</span>
          </div>
          <h1 className="text-4xl font-black text-white mb-4">
            Casinos Online que Aceptan Plin en Perú 2026
          </h1>
          <p className="text-slate-400 max-w-3xl text-lg leading-relaxed">
            Plin es la billetera digital preferida de los usuarios de BBVA, Interbank y Scotiabank en Perú. Depósitos instantáneos, sin comisiones y sin compartir datos bancarios en los mejores casinos online.
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
          {plinFeatures.map((f) => (
            <div key={f.title} className="bg-blue-900/20 border border-blue-500/30 rounded-2xl p-4 text-center">
              <div className="text-blue-400 flex justify-center mb-2">{f.icon}</div>
              <div className="font-bold text-white text-sm">{f.title}</div>
              <div className="text-slate-400 text-xs mt-1">{f.desc}</div>
            </div>
          ))}
        </div>

        {/* Casino list */}
        <section className="mb-14">
          <h2 className="text-2xl font-black text-white mb-6">Mejores Casinos con Plin en Perú</h2>
          <div className="space-y-4">
            {plinCasinos.map((casino, i) => (
              <div key={casino.slug} className="bg-slate-800/60 border border-slate-700 hover:border-blue-500/50 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(59,130,246,0.12)] rounded-2xl p-5 transition-all flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                <div className="flex items-center gap-1 flex-shrink-0">
                  <span className="text-slate-500 font-bold text-sm w-6">#{i + 1}</span>
                  <div className="w-14 h-14 rounded-xl bg-slate-700 overflow-hidden ml-1">
                    {casino.logo
                      ? <Image src={casino.logo} alt={casino.name} width={56} height={56} className="w-full h-full object-contain p-1" />
                      : <div className="w-full h-full flex items-center justify-center font-black text-blue-400">{casino.name.charAt(0)}</div>
                    }
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="font-bold text-white text-lg">{casino.name}</span>
                    <span className="text-xs bg-blue-500/20 text-blue-400 border border-blue-500/30 rounded-full px-2 py-0.5">📱 Plin</span>
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
                    className="flex items-center justify-center gap-1.5 bg-blue-500 hover:bg-blue-400 text-white font-black py-2.5 px-5 rounded-xl transition-colors text-sm"
                  >
                    Depositar con Plin <ExternalLink size={13} />
                  </a>
                  <Link href={`/casinos/${casino.slug}`} className="text-xs text-center text-slate-400 hover:text-blue-400 transition-colors">
                    Ver reseña completa
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* How to deposit */}
        <section className="mb-14">
          <h2 className="text-2xl font-black text-white mb-6">¿Cómo Depositar en un Casino Online con Plin?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {plinSteps.map((s) => (
              <div key={s.step} className="bg-slate-800/60 border border-slate-700 rounded-2xl p-5 flex gap-4">
                <div className="w-9 h-9 rounded-full bg-blue-500 text-white font-black flex items-center justify-center flex-shrink-0">
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

        {/* Plin vs Yape comparison */}
        <section className="mb-14">
          <h2 className="text-2xl font-black text-white mb-6">Plin vs Yape: ¿Cuál Usar en Casinos Online?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-blue-900/20 border border-blue-500/30 rounded-2xl p-5">
              <h3 className="font-black text-blue-400 text-lg mb-3">📱 Plin — Ideal si usas</h3>
              <ul className="space-y-2 text-sm text-slate-300">
                {['BBVA Perú', 'Interbank', 'Scotiabank', 'BanBif', 'Caja Piura'].map((b) => (
                  <li key={b} className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-blue-400 flex-shrink-0" /> {b}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-emerald-900/20 border border-emerald-500/30 rounded-2xl p-5">
              <h3 className="font-black text-emerald-400 text-lg mb-3">📱 Yape — Ideal si usas</h3>
              <ul className="space-y-2 text-sm text-slate-300">
                {['BCP (Banco de Crédito del Perú)', 'Cualquier banco (vinculación libre)', 'Cualquier operador móvil'].map((b) => (
                  <li key={b} className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-emerald-400 flex-shrink-0" /> {b}
                  </li>
                ))}
              </ul>
              <Link href="/casino-yape" className="mt-4 inline-flex items-center gap-1 text-sm text-emerald-400 hover:text-emerald-300 font-semibold">
                Ver casinos con Yape <ChevronRight size={14} />
              </Link>
            </div>
          </div>
        </section>

        {/* SEO content */}
        <section className="bg-slate-800/30 border border-slate-700 rounded-2xl p-6 mb-14">
          <h2 className="text-xl font-black text-white mb-4">Plin en Casinos Online: Todo lo que Necesitas Saber</h2>
          <p className="text-slate-400 leading-relaxed mb-4">
            Plin es la billetera digital impulsada por BBVA, Interbank, Scotiabank y otras entidades financieras peruanas. Permite transferencias instantáneas entre usuarios de distintos bancos participantes, lo que la convierte en una alternativa popular a Yape para jugadores peruanos.
          </p>
          <p className="text-slate-400 leading-relaxed mb-4">
            En los casinos online, Plin funciona exactamente igual que Yape: depósitos inmediatos sin comisiones y sin necesidad de ingresar datos de tarjeta. La principal ventaja es que si tienes BBVA o Interbank como banco principal, Plin ya está integrado en tu app bancaria y no necesitas descargar nada extra.
          </p>
          <p className="text-slate-400 leading-relaxed">
            Para retiros, el proceso es igual que con cualquier otro método: solicitas el retiro en el casino, esperas la verificación (24-48h) y recibes el dinero directamente en tu cuenta bancaria vinculada a Plin. Asegúrate de completar la verificación de identidad (KYC) antes de tu primer retiro.
          </p>
        </section>

        {/* FAQ */}
        <section>
          <h2 className="text-2xl font-black text-white mb-6">Preguntas Frecuentes — Casino con Plin Perú</h2>
          <div className="space-y-3">
            {plinFaqs.map((faq) => (
              <details key={faq.question} className="group bg-slate-800 border border-slate-700 rounded-xl overflow-hidden">
                <summary className="flex items-center justify-between gap-4 p-5 cursor-pointer font-semibold text-white list-none hover:text-blue-400 transition-colors">
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
