import type { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import Breadcrumb from '@/components/ui/Breadcrumb';
import WageringCalculator from '@/components/tools/WageringCalculator';
import { faqSchema, ldJson } from '@/lib/schema';

/**
 * Linkable asset, not another review page. People cite tools; they rarely cite
 * casino reviews. Targets "calculadora wagering / rollover" and supports the
 * bonus cluster we already rank in.
 */
export const metadata: Metadata = {
  title: 'Calculadora de Wagering: Cuánto Debes Apostar por un Bono',
  description:
    'Calcula cuánto tienes que apostar para liberar un bono de casino, cuántos giros necesitas y cuánto cuesta de media conseguirlo. Con los bonos reales del mercado peruano.',
  alternates: { canonical: '/calculadora-wagering' },
};

const faqs = [
  {
    question: '¿Cómo se calcula el wagering de un bono?',
    answer:
      'Se multiplica el importe base por el número del requisito. Un bono de S/200 con wagering x35 aplicado al bono exige apostar S/7,000 en total. El detalle que cambia el resultado es sobre qué se aplica: algunos operadores lo calculan sobre el bono, otros sobre el depósito y otros sobre la suma de ambos, lo que puede duplicar la cifra.',
  },
  {
    question: '¿Qué significa la contribución de los juegos?',
    answer:
      'Es el porcentaje de cada apuesta que cuenta para el requisito. Las tragamonedas suelen aportar el 100%, el casino en vivo alrededor del 20% y la ruleta o el blackjack a menudo solo el 10%. Con una contribución del 20%, apostar S/1 solo descuenta S/0.20 del wagering, así que necesitas apostar cinco veces más dinero para liberar el mismo bono.',
  },
  {
    question: '¿Qué es el coste esperado de liberar un bono?',
    answer:
      'Es lo que pierdes de media al apostar el total exigido, según el RTP del juego. Con un RTP del 96%, la casa se queda estadísticamente con el 4% de todo lo apostado: si debes apostar S/7,000, el coste medio ronda los S/280. Si ese coste supera el importe del bono, aceptarlo no tiene sentido matemático.',
  },
  {
    question: '¿Un wagering bajo siempre es mejor?',
    answer:
      'Casi siempre sí, y suele importar más que el tamaño del bono. Un bono de S/30 con wagering x25 exige apostar S/750, mientras que uno de S/1,600 con x50 exige S/80,000. El segundo parece mucho más generoso y en la práctica es mucho más difícil de liberar.',
  },
  {
    question: '¿La calculadora garantiza esos resultados?',
    answer:
      'No. El coste esperado es un promedio estadístico a largo plazo, no una predicción de tu sesión: la varianza de las tragamonedas es alta y puedes terminar muy por encima o muy por debajo. Además, el cálculo no incluye la apuesta máxima computable, el plazo para completar el wagering ni los juegos excluidos, tres condiciones que siempre debes leer en los términos del bono.',
  },
];

export default function CalculadoraWageringPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: ldJson(faqSchema(faqs)) }} />
      <div className="max-w-5xl mx-auto px-4 py-8">
        <Breadcrumb items={[{ label: 'Bonos', href: '/bonos' }, { label: 'Calculadora de Wagering' }]} />

        <div className="mt-6 mb-8">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full px-4 py-1.5 text-sm mb-4">
            <span className="text-emerald-400 font-semibold">🧮 Herramienta gratuita</span>
          </div>
          <h1 className="text-4xl font-black text-white mb-3">Calculadora de Wagering</h1>
          <p className="text-slate-400 max-w-3xl leading-relaxed">
            Antes de aceptar un bono conviene saber dos cosas: cuánto tienes que apostar realmente para liberarlo y
            cuánto cuesta de media conseguirlo. Esta calculadora responde a ambas con los requisitos reales de los
            casinos disponibles en Perú.
          </p>
        </div>

        <WageringCalculator />

        <section className="mt-12">
          <h2 className="text-2xl font-black text-white mb-4">Por qué el wagering importa más que el importe</h2>
          <p className="text-slate-400 leading-relaxed mb-4">
            El error más común al elegir un bono es mirar solo la cifra grande. Un bono de S/1,600 con wagering x50
            obliga a apostar S/80,000 antes de poder retirar nada; uno de S/30 con x25 exige S/750. El segundo es
            pequeño, pero es el único de los dos que una persona normal puede liberar de verdad.
          </p>
          <p className="text-slate-400 leading-relaxed">
            Por eso comparamos los requisitos de apuesta de todos los operadores en nuestra{' '}
            <Link href="/blog/casinos-menor-wagering-peru-2026" className="text-emerald-400 hover:underline">
              guía de casinos con menor wagering
            </Link>
            , y explicamos las técnicas para completarlo más rápido en{' '}
            <Link href="/blog/como-cumplir-wagering-mas-rapido-casino-online" className="text-emerald-400 hover:underline">
              cómo cumplir el wagering más rápido
            </Link>
            . Si prefieres no arriesgar dinero propio, el{' '}
            <Link href="/bonos/sin-deposito" className="text-emerald-400 hover:underline">
              bono sin depósito
            </Link>{' '}
            de Codere tiene el requisito más bajo del mercado peruano (x25).
          </p>
        </section>

        <section className="mt-12">
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
      </div>
    </>
  );
}
