'use client';

import { useState, useMemo } from 'react';
import { SlidersHorizontal, Search, ChevronRight } from 'lucide-react';
import CasinoCard from '@/components/ui/CasinoCard';
import Breadcrumb from '@/components/ui/Breadcrumb';
import { casinos } from '@/lib/data/casinos';

const casinosFaqs = [
  {
    question: '¿Cuál es el mejor casino online en Perú en 2026?',
    answer: 'Betsson es el casino mejor valorado en Perú en 2026 con una puntuación de 4.9/5. Combina licencia MGA, más de 1,500 juegos, soporte 24/7 en español y aceptación de Yape y Plin. LeoVegas y Bet365 también destacan como opciones premium.',
  },
  {
    question: '¿Qué casino online es legal en Perú?',
    answer: 'Codere es el único casino con licencia directa de MINCETUR (regulador peruano). Otros como Betsson, LeoVegas y JackpotCity operan con licencia de Malta Gaming Authority (MGA), igualmente válidas y reconocidas a nivel internacional.',
  },
  {
    question: '¿Qué casino acepta Yape en Perú?',
    answer: 'Los casinos que aceptan Yape en Perú incluyen Betsson, 1xBet, Codere, Bet365, LeoVegas, Wplay, Betsafe y MegaPari, entre otros. Es el método de pago más popular para depósitos y retiros en casinos online peruanos.',
  },
  {
    question: '¿Cómo verifico si un casino online es confiable en Perú?',
    answer: 'Verifica que tenga licencia válida visible en el pie de página (MGA, UKGC, MINCETUR o Curaçao), conexión HTTPS, políticas claras de retiro y soporte en español. Todos los casinos listados en CasinoPerú.com han pasado nuestra verificación de 8 semanas.',
  },
  {
    question: '¿Puedo jugar en casinos online desde mi celular en Perú?',
    answer: 'Sí. La mayoría de casinos tienen versión móvil optimizada o app nativa. LeoVegas destaca como el mejor casino móvil con app premiada para Android e iOS. 1xBet y Betsson también tienen excelentes apps móviles.',
  },
];

const casinosFaqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: casinosFaqs.map((f) => ({
    '@type': 'Question',
    name: f.question,
    acceptedAnswer: { '@type': 'Answer', text: f.answer },
  })),
};

const paymentFilters = ['Todos', 'Yape', 'Plin', 'Bitcoin', 'Visa', 'BCP'];
const bonusFilters = ['Todos', 'Bienvenida', 'Sin Depósito', 'Tiradas Gratis', 'Cripto'];
const licenseFilters = ['Todos', 'MGA', 'Gibraltar', 'Curaçao', 'MINCETUR'];

export default function CasinosPage() {
  const [paymentFilter, setPaymentFilter] = useState('Todos');
  const [bonusFilter, setBonusFilter] = useState('Todos');
  const [licenseFilter, setLicenseFilter] = useState('Todos');
  const [search, setSearch] = useState('');

  const filtered = useMemo(() => {
    return casinos.filter((c) => {
      if (search && !c.name.toLowerCase().includes(search.toLowerCase())) return false;
      if (paymentFilter !== 'Todos' && !c.paymentMethods.includes(paymentFilter)) return false;
      if (licenseFilter !== 'Todos' && !c.license.includes(licenseFilter)) return false;
      return true;
    });
  }, [paymentFilter, bonusFilter, licenseFilter, search]);

  return (
    <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(casinosFaqSchema) }} />
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Breadcrumb items={[{ label: 'Casinos Online' }]} />

      <div className="mt-6 mb-8">
        <h1 className="text-4xl font-black text-white mb-3">
          Mejores Casinos Online en Perú 2026
        </h1>
        <p className="text-slate-400 max-w-3xl">
          Hemos analizado más de 50 casinos online disponibles en Perú. A continuación encontrarás
          solo los que superaron nuestro proceso de verificación de seguridad, fairness y calidad.
          Actualizado junio 2026.
        </p>
      </div>

      {/* Filters */}
      <div className="bg-slate-800/60 border border-slate-700 rounded-2xl p-4 mb-8">
        <div className="flex items-center gap-2 mb-4">
          <SlidersHorizontal size={16} className="text-emerald-400" />
          <span className="text-white font-semibold text-sm">Filtrar casinos</span>
          <span className="ml-auto text-sm text-slate-400">{filtered.length} casinos encontrados</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {/* Search */}
          <div className="relative">
            <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Buscar casino..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-slate-700 border border-slate-600 rounded-xl pl-9 pr-4 py-2.5 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-emerald-500"
            />
          </div>

          {/* Payment filter */}
          <select
            value={paymentFilter}
            onChange={(e) => setPaymentFilter(e.target.value)}
            className="bg-slate-700 border border-slate-600 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-emerald-500"
          >
            <option value="Todos">💳 Pago: Todos</option>
            {paymentFilters.slice(1).map((f) => (
              <option key={f} value={f}>{f}</option>
            ))}
          </select>

          {/* License filter */}
          <select
            value={licenseFilter}
            onChange={(e) => setLicenseFilter(e.target.value)}
            className="bg-slate-700 border border-slate-600 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-emerald-500"
          >
            <option value="Todos">🛡️ Licencia: Todas</option>
            {licenseFilters.slice(1).map((f) => (
              <option key={f} value={f}>{f}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Results */}
      {filtered.length === 0 ? (
        <div className="text-center py-20 text-slate-400">
          <div className="text-5xl mb-4">🔍</div>
          <p className="text-lg font-semibold">No encontramos casinos con ese filtro</p>
          <button onClick={() => { setPaymentFilter('Todos'); setLicenseFilter('Todos'); setSearch(''); }} className="mt-4 text-emerald-400 hover:underline text-sm">
            Restablecer filtros
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((casino, i) => (
            <CasinoCard key={casino.slug} casino={casino} rank={i + 1} />
          ))}
        </div>
      )}

      {/* SEO Content */}
      <section className="mt-16 prose-casino max-w-none">
        <h2 className="text-white text-2xl font-bold mb-4">¿Cómo Elegimos los Mejores Casinos Online en Perú?</h2>
        <p className="text-slate-400 leading-relaxed mb-4">
          En CasinoPerú.com evaluamos cada casino a través de un proceso riguroso de 8 semanas. Nuestro equipo crea cuentas reales, hace depósitos con Yape, Plin y tarjetas bancarias, juega con dinero real y solicita retiros para medir la velocidad y fiabilidad del casino.
        </p>
        <p className="text-slate-400 leading-relaxed mb-4">
          Los criterios más importantes para nuestra evaluación son: la seguridad y validez de la licencia, la variedad y calidad de los juegos, la generosidad y claridad de los bonos, la disponibilidad de métodos de pago peruanos como Yape y Plin, y la calidad del soporte en español.
        </p>
        <h3 className="text-white text-xl font-bold mb-3 mt-6">¿Qué Licencias Son las Más Seguras para Jugadores Peruanos?</h3>
        <p className="text-slate-400 leading-relaxed">
          La Malta Gaming Authority (MGA) y la UK Gambling Commission (UKGC) son los organismos reguladores más exigentes del mundo. Un casino con cualquiera de estas licencias tiene que cumplir estrictos requisitos de seguridad financiera, fairness y protección del jugador. La Curaçao eGaming License también es válida y muy común entre plataformas internacionales. La licencia de MINCETUR es la única 100% peruana.
        </p>
      </section>

      {/* FAQ */}
      <section className="mt-16">
        <h2 className="text-white text-2xl font-bold mb-6">Preguntas Frecuentes sobre Casinos Online en Perú</h2>
        <div className="space-y-3">
          {casinosFaqs.map((faq) => (
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
