import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { CheckCircle2, X, ChevronRight, ExternalLink, Trophy } from 'lucide-react';
import Breadcrumb from '@/components/ui/Breadcrumb';
import { casinos } from '@/lib/data/casinos';
import { comparisons } from '@/lib/data/comparisons';
import { faqSchema, ldJson } from '@/lib/schema';
import type { Casino } from '@/types';

export function generateStaticParams() {
  return comparisons.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const comp = comparisons.find((c) => c.slug === slug);
  if (!comp) return {};
  const c1 = casinos.find((c) => c.slug === comp.casino1Slug);
  const c2 = casinos.find((c) => c.slug === comp.casino2Slug);
  if (!c1 || !c2) return {};
  const name1 = c1.name.replace(' Perú', '');
  const name2 = c2.name.replace(' Perú', '');
  return {
    title: `${name1} vs ${name2} Perú 2026 — ¿Cuál es Mejor?`,
    description: `Comparativa completa de ${name1} vs ${name2} en Perú. Bonos, licencias, métodos de pago con Yape y Plin, velocidad de retiros y veredicto final.`,
    alternates: { canonical: `/comparar/${slug}` },
  };
}

function licenseRank(license: string): number {
  if (license.includes('Malta') || license.includes('MGA')) return 3;
  if (license.includes('Gibraltar') || license.includes('UKGC')) return 2;
  return 1;
}

function wageringScore(w: number): number {
  if (w <= 20) return 3;
  if (w <= 35) return 2;
  return 1;
}

function withdrawalScore(time: string): number {
  if (time.includes('24')) return 3;
  if (time.includes('48')) return 2;
  return 1;
}

function buildFaqs(c1: Casino, c2: Casino) {
  const n1 = c1.name.replace(' Perú', '');
  const n2 = c2.name.replace(' Perú', '');
  return [
    {
      question: `¿Cuál es mejor, ${n1} o ${n2} en Perú?`,
      answer: `Depende de lo que busques. ${n1} destaca en ${licenseRank(c1.license) >= licenseRank(c2.license) ? 'seguridad y licencia' : 'variedad de juegos'}. ${n2} es mejor en ${wageringScore(c2.bonus.wagering) > wageringScore(c1.bonus.wagering) ? 'requisitos de apuesta del bono' : 'métodos de pago peruanos'}. Para la mayoría de jugadores peruanos que priorizan retiros rápidos a Yape, recomendamos el que tiene mejor tiempo de retiro.`,
    },
    {
      question: `¿${n1} o ${n2} acepta Yape en Perú?`,
      answer: `${c1.paymentMethods.includes('Yape') ? `${n1} sí acepta Yape` : `${n1} no acepta Yape directamente`}. ${c2.paymentMethods.includes('Yape') ? `${n2} también acepta Yape` : `${n2} no acepta Yape`}. Ambos permiten depósitos con transferencia bancaria peruana.`,
    },
    {
      question: `¿Cuál tiene mejor bono de bienvenida, ${n1} o ${n2}?`,
      answer: `${n1} ofrece ${c1.bonus.amount} con wagering x${c1.bonus.wagering} y depósito mínimo de S/${c1.bonus.minDeposit}. ${n2} ofrece ${c2.bonus.amount} con wagering x${c2.bonus.wagering} y depósito mínimo de S/${c2.bonus.minDeposit}. Un wagering más bajo es siempre mejor — significa que puedes retirar las ganancias del bono más fácilmente.`,
    },
    {
      question: `¿Cuánto tarda un retiro en ${n1} vs ${n2}?`,
      answer: `${n1} procesa retiros a Yape en ${c1.withdrawalTime}. ${n2} en ${c2.withdrawalTime}. En ambos casos debes completar la verificación KYC (DNI + selfie) antes de tu primer retiro.`,
    },
  ];
}

export default async function ComparisonPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const comp = comparisons.find((c) => c.slug === slug);
  if (!comp) notFound();

  const c1 = casinos.find((c) => c.slug === comp.casino1Slug);
  const c2 = casinos.find((c) => c.slug === comp.casino2Slug);
  if (!c1 || !c2) notFound();

  const n1 = c1.name.replace(' Perú', '');
  const n2 = c2.name.replace(' Perú', '');
  const faqs = buildFaqs(c1, c2);

  const rows: { label: string; v1: string; v2: string; winner: 1 | 2 | 0 }[] = [
    {
      label: 'Bono de bienvenida',
      v1: c1.bonus.amount,
      v2: c2.bonus.amount,
      winner: 0,
    },
    {
      label: 'Depósito mínimo',
      v1: `S/${c1.bonus.minDeposit}`,
      v2: `S/${c2.bonus.minDeposit}`,
      winner: c1.bonus.minDeposit <= c2.bonus.minDeposit ? 1 : 2,
    },
    {
      label: 'Wagering (rollover)',
      v1: `x${c1.bonus.wagering}`,
      v2: `x${c2.bonus.wagering}`,
      winner: c1.bonus.wagering <= c2.bonus.wagering ? 1 : 2,
    },
    {
      label: 'Tiradas gratis',
      v1: c1.bonus.freeSpins ? `${c1.bonus.freeSpins} FS` : '—',
      v2: c2.bonus.freeSpins ? `${c2.bonus.freeSpins} FS` : '—',
      winner: (c1.bonus.freeSpins ?? 0) >= (c2.bonus.freeSpins ?? 0) ? 1 : 2,
    },
    {
      label: 'Licencia',
      v1: c1.license.split('(')[0].trim(),
      v2: c2.license.split('(')[0].trim(),
      winner: licenseRank(c1.license) >= licenseRank(c2.license) ? 1 : 2,
    },
    {
      label: 'Velocidad de retiro',
      v1: c1.withdrawalTime,
      v2: c2.withdrawalTime,
      winner: withdrawalScore(c1.withdrawalTime) >= withdrawalScore(c2.withdrawalTime) ? 1 : 2,
    },
    {
      label: 'Yape / Plin',
      v1: [c1.paymentMethods.includes('Yape') && 'Yape', c1.paymentMethods.includes('Plin') && 'Plin'].filter(Boolean).join(' & ') || '—',
      v2: [c2.paymentMethods.includes('Yape') && 'Yape', c2.paymentMethods.includes('Plin') && 'Plin'].filter(Boolean).join(' & ') || '—',
      winner: 0,
    },
    {
      label: 'Casino en vivo',
      v1: c1.games.liveCasino ? 'Sí' : 'No',
      v2: c2.games.liveCasino ? 'Sí' : 'No',
      winner: c1.games.liveCasino && !c2.games.liveCasino ? 1 : !c1.games.liveCasino && c2.games.liveCasino ? 2 : 0,
    },
    {
      label: 'Puntuación general',
      v1: `${c1.rating}/5`,
      v2: `${c2.rating}/5`,
      winner: c1.rating >= c2.rating ? 1 : 2,
    },
  ];

  const c1Wins = rows.filter((r) => r.winner === 1).length;
  const c2Wins = rows.filter((r) => r.winner === 2).length;
  const overallWinner = c1Wins > c2Wins ? 1 : c2Wins > c1Wins ? 2 : 0;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: ldJson(faqSchema(faqs)) }} />

      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb items={[{ label: 'Comparar', href: '/comparar' }, { label: `${n1} vs ${n2}` }]} />

        {/* Hero */}
        <div className="mt-6 mb-10 text-center">
          <h1 className="text-4xl font-black text-white mb-3">
            {n1} vs {n2} Perú 2026
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Comparativa completa de dos de los casinos online más populares en Perú. Analizamos bonos, licencias, pagos y experiencia de juego para ayudarte a elegir.
          </p>
        </div>

        {/* Casino logos side by side */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          {[
            { casino: c1, name: n1, wins: c1Wins, isWinner: overallWinner === 1 },
            { casino: c2, name: n2, wins: c2Wins, isWinner: overallWinner === 2 },
          ].map(({ casino, name, wins, isWinner }) => (
            <div key={casino.slug} className={`relative bg-slate-800/60 border rounded-2xl p-5 text-center transition-all ${isWinner ? 'border-emerald-500/60 shadow-[0_0_30px_rgba(16,185,129,0.15)]' : 'border-slate-700'}`}>
              {isWinner && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-emerald-500 text-slate-900 font-black text-xs px-3 py-1 rounded-full flex items-center gap-1">
                  <Trophy size={11} /> GANADOR
                </div>
              )}
              <div className="w-16 h-16 rounded-2xl bg-slate-700 mx-auto mb-3 overflow-hidden">
                {casino.logo
                  ? <Image src={casino.logo} alt={casino.name} width={64} height={64} className="w-full h-full object-contain p-1" />
                  : <div className="w-full h-full flex items-center justify-center font-black text-emerald-400 text-xl">{name.charAt(0)}</div>
                }
              </div>
              <div className="font-black text-white text-lg mb-1">{name}</div>
              <div className="text-emerald-400 font-bold text-sm mb-1">{casino.bonus.amount}</div>
              <div className="text-slate-500 text-xs">{wins} categorías ganadas</div>
              <a
                href={casino.affiliateUrl !== '#' ? casino.affiliateUrl : `/casinos/${casino.slug}`}
                target={casino.affiliateUrl !== '#' ? '_blank' : undefined}
                rel={casino.affiliateUrl !== '#' ? 'noopener noreferrer sponsored' : undefined}
                className={`mt-3 w-full flex items-center justify-center gap-1.5 font-black py-2 px-4 rounded-xl text-sm transition-colors ${isWinner ? 'bg-emerald-500 hover:bg-emerald-400 text-slate-900' : 'bg-slate-700 hover:bg-slate-600 text-white'}`}
              >
                Ir al casino <ExternalLink size={12} />
              </a>
            </div>
          ))}
        </div>

        {/* Comparison table */}
        <section className="mb-12">
          <h2 className="text-2xl font-black text-white mb-4">Comparativa Detallada</h2>
          <div className="bg-slate-800/60 border border-slate-700 rounded-2xl overflow-hidden">
            <div className="grid grid-cols-3 bg-slate-700/50 px-4 py-3 text-xs font-bold text-slate-400 uppercase tracking-wider">
              <span>Criterio</span>
              <span className="text-center">{n1}</span>
              <span className="text-center">{n2}</span>
            </div>
            {rows.map((row, i) => (
              <div key={row.label} className={`grid grid-cols-3 px-4 py-3.5 items-center text-sm ${i % 2 === 0 ? '' : 'bg-slate-700/20'}`}>
                <span className="text-slate-400 font-medium">{row.label}</span>
                <span className={`text-center font-semibold flex items-center justify-center gap-1 ${row.winner === 1 ? 'text-emerald-400' : 'text-slate-300'}`}>
                  {row.winner === 1 && <CheckCircle2 size={13} />}
                  {row.v1}
                </span>
                <span className={`text-center font-semibold flex items-center justify-center gap-1 ${row.winner === 2 ? 'text-emerald-400' : 'text-slate-300'}`}>
                  {row.winner === 2 && <CheckCircle2 size={13} />}
                  {row.v2}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Pros/cons */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {[
            { casino: c1, name: n1 },
            { casino: c2, name: n2 },
          ].map(({ casino, name }) => (
            <div key={casino.slug} className="bg-slate-800/60 border border-slate-700 rounded-2xl p-5">
              <div className="font-black text-white text-lg mb-4">{name}</div>
              <div className="mb-3">
                <div className="text-xs font-bold text-emerald-400 uppercase mb-2">Ventajas</div>
                <ul className="space-y-1.5">
                  {casino.pros.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-sm text-slate-300">
                      <CheckCircle2 size={13} className="text-emerald-400 flex-shrink-0 mt-0.5" /> {p}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="text-xs font-bold text-red-400 uppercase mb-2">Desventajas</div>
                <ul className="space-y-1.5">
                  {casino.cons.map((c) => (
                    <li key={c} className="flex items-start gap-2 text-sm text-slate-300">
                      <X size={13} className="text-red-400 flex-shrink-0 mt-0.5" /> {c}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Verdict */}
        <section className="bg-emerald-900/20 border border-emerald-500/30 rounded-2xl p-6 mb-12">
          <h2 className="text-xl font-black text-white mb-3">
            Veredicto: {overallWinner === 1 ? n1 : overallWinner === 2 ? n2 : 'Empate técnico'}
            {overallWinner !== 0 && ' es la Mejor Opción'}
          </h2>
          <p className="text-slate-300 leading-relaxed text-sm">
            {overallWinner === 1
              ? `${n1} gana ${c1Wins} de ${rows.filter((r) => r.winner !== 0).length} categorías evaluadas. Destaca especialmente en ${rows.filter((r) => r.winner === 1).slice(0, 2).map((r) => r.label.toLowerCase()).join(' y ')}. Para la mayoría de jugadores peruanos, ${n1} es la opción más sólida.`
              : overallWinner === 2
              ? `${n2} gana ${c2Wins} de ${rows.filter((r) => r.winner !== 0).length} categorías evaluadas. Destaca especialmente en ${rows.filter((r) => r.winner === 2).slice(0, 2).map((r) => r.label.toLowerCase()).join(' y ')}. Para la mayoría de jugadores peruanos, ${n2} es la opción más sólida.`
              : `${n1} y ${n2} son muy similares en calidad. La elección depende de tu preferencia personal: si priorizas la variedad de juegos, elige ${n1}. Si priorizas el bono de bienvenida, ${n2} puede ser mejor opción.`
            }
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link href={`/casinos/${overallWinner === 2 ? c2.slug : c1.slug}`} className="inline-flex items-center gap-1.5 text-sm text-emerald-400 hover:text-emerald-300 font-semibold transition-colors">
              Ver reseña completa <ChevronRight size={14} />
            </Link>
            <Link href="/comparar" className="inline-flex items-center gap-1.5 text-sm text-slate-400 hover:text-slate-300 font-semibold transition-colors">
              Ver todas las comparativas <ChevronRight size={14} />
            </Link>
          </div>
        </section>

        {/* FAQ */}
        <section>
          <h2 className="text-2xl font-black text-white mb-6">Preguntas Frecuentes — {n1} vs {n2}</h2>
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
