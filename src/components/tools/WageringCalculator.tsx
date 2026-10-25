'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';
import { bonuses } from '@/lib/data/bonuses';

/** How the operator applies the multiplier. Varies per casino — always check the T&C. */
type Basis = 'bono' | 'deposito' | 'ambos';

/**
 * Soles value out of the bonus headline ("Hasta S/500" -> 500, "S/30 Gratis" -> 30).
 * Returns null for anything not quoted in PEN (e.g. Betpanda's "Hasta 1 BTC"), so
 * those are left out of the presets rather than loaded as "1".
 */
function solesAmount(amount: string): number | null {
  const m = amount.match(/S\/\s?([\d.,]+)/);
  if (!m) return null;
  const n = Number(m[1].replace(/,/g, ''));
  return Number.isFinite(n) && n > 0 ? n : null;
}

const PRESETS = bonuses
  .filter((b) => b.wagering > 0 && solesAmount(b.amount) !== null)
  .slice(0, 8)
  .map((b) => ({
    slug: b.slug,
    label: `${b.casino} — ${b.amount}`,
    wagering: b.wagering,
    // No-deposit bonuses have minDeposit 0; the bonus value is the headline amount.
    bonus: solesAmount(b.amount) as number,
    deposit: b.minDeposit,
  }));

const money = (n: number) =>
  n.toLocaleString('es-PE', { style: 'currency', currency: 'PEN', maximumFractionDigits: 0 });

export default function WageringCalculator() {
  const [bonus, setBonus] = useState(200);
  const [deposit, setDeposit] = useState(200);
  const [wagering, setWagering] = useState(35);
  const [basis, setBasis] = useState<Basis>('bono');
  const [bet, setBet] = useState(2);
  const [contribution, setContribution] = useState(100);
  const [rtp, setRtp] = useState(96);

  const r = useMemo(() => {
    const base = basis === 'bono' ? bonus : basis === 'deposito' ? deposit : bonus + deposit;
    const required = base * wagering;
    // Contribution: a S/1 bet on a game at 20% only counts S/0.20 toward the requirement.
    const actualBets = contribution > 0 ? required / (contribution / 100) : 0;
    const spins = bet > 0 ? actualBets / bet : 0;
    // Expected cost of clearing = everything you stake × the house edge.
    const expectedLoss = actualBets * (1 - rtp / 100);
    // Round to cents before comparing: an exactly break-even bonus (Codere's
    // S/30 at x25 with 96% RTP) otherwise lands on -3e-14 and renders as a loss.
    const net = Math.round((bonus - expectedLoss) * 100) / 100;
    const hours = spins / 400; // ~400 spins/hour is a typical slots pace
    return { base, required, actualBets, spins, expectedLoss, net, hours };
  }, [bonus, deposit, wagering, basis, bet, contribution, rtp]);

  const applyPreset = (slug: string) => {
    const p = PRESETS.find((x) => x.slug === slug);
    if (!p) return;
    setWagering(p.wagering);
    setBonus(p.bonus);
    // A no-deposit bonus has no deposit to wager; otherwise assume the player
    // deposits enough to claim the headline amount at a 100% match.
    setDeposit(p.deposit === 0 ? 0 : p.bonus);
    setBasis(p.deposit === 0 ? 'bono' : basis);
  };

  const field = 'w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-white focus:border-emerald-500 focus:outline-none';
  const label = 'block text-xs font-semibold text-slate-400 mb-1.5';

  return (
    <div className="space-y-6">
      {/* Presets */}
      <div>
        <div className={label}>Cargar un bono real del mercado peruano</div>
        <div className="flex flex-wrap gap-2">
          {PRESETS.map((p) => (
            <button
              key={p.slug}
              onClick={() => applyPreset(p.slug)}
              className="text-xs bg-slate-800 border border-slate-700 hover:border-emerald-500/50 hover:text-emerald-400 text-slate-300 rounded-lg px-3 py-1.5 transition-colors"
            >
              {p.label} (x{p.wagering})
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Inputs */}
        <div className="bg-slate-800/60 border border-slate-700 rounded-2xl p-5 space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className={label} htmlFor="bonus">Importe del bono (S/)</label>
              <input id="bonus" type="number" min={0} className={field} value={bonus}
                onChange={(e) => setBonus(Math.max(0, Number(e.target.value)))} />
            </div>
            <div>
              <label className={label} htmlFor="deposit">Tu depósito (S/)</label>
              <input id="deposit" type="number" min={0} className={field} value={deposit}
                onChange={(e) => setDeposit(Math.max(0, Number(e.target.value)))} />
            </div>
          </div>

          <div>
            <label className={label} htmlFor="wagering">Requisito de apuesta (wagering)</label>
            <div className="flex items-center gap-3">
              <input id="wagering" type="range" min={1} max={60} value={wagering} className="flex-1 accent-emerald-500"
                onChange={(e) => setWagering(Number(e.target.value))} />
              <span className="text-white font-black w-14 text-right">x{wagering}</span>
            </div>
          </div>

          <div>
            <span className={label}>¿Sobre qué se aplica?</span>
            <div className="grid grid-cols-3 gap-2">
              {([['bono', 'Bono'], ['deposito', 'Depósito'], ['ambos', 'Bono + depósito']] as [Basis, string][]).map(
                ([val, text]) => (
                  <button key={val} onClick={() => setBasis(val)}
                    className={`text-xs rounded-lg px-2 py-2 border transition-colors ${
                      basis === val
                        ? 'bg-emerald-500 text-slate-900 border-emerald-500 font-bold'
                        : 'bg-slate-900 text-slate-300 border-slate-700 hover:border-emerald-500/40'
                    }`}>
                    {text}
                  </button>
                )
              )}
            </div>
            <p className="text-xs text-slate-500 mt-1.5">Varía según el operador. Revisa los T&amp;C del bono.</p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className={label} htmlFor="bet">Apuesta media por giro (S/)</label>
              <input id="bet" type="number" min={0.1} step={0.1} className={field} value={bet}
                onChange={(e) => setBet(Math.max(0.1, Number(e.target.value)))} />
            </div>
            <div>
              <label className={label} htmlFor="contribution">Contribución del juego (%)</label>
              <select id="contribution" className={field} value={contribution}
                onChange={(e) => setContribution(Number(e.target.value))}>
                <option value={100}>Tragamonedas — 100%</option>
                <option value={20}>Casino en vivo — 20%</option>
                <option value={10}>Ruleta / blackjack — 10%</option>
              </select>
            </div>
          </div>

          <div>
            <label className={label} htmlFor="rtp">RTP del juego (%)</label>
            <div className="flex items-center gap-3">
              <input id="rtp" type="range" min={90} max={99} step={0.1} value={rtp} className="flex-1 accent-emerald-500"
                onChange={(e) => setRtp(Number(e.target.value))} />
              <span className="text-white font-black w-16 text-right">{rtp.toFixed(1)}%</span>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="space-y-3">
          <div className="bg-gradient-to-br from-emerald-900/30 to-slate-800/60 border border-emerald-500/30 rounded-2xl p-5">
            <div className="text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-1">
              Tienes que apostar en total
            </div>
            <div className="text-4xl font-black text-white">{money(r.required)}</div>
            <p className="text-slate-400 text-sm mt-1">
              {money(r.base)} × {wagering}
            </p>
          </div>

          {contribution < 100 && (
            <div className="bg-amber-900/20 border border-amber-500/30 rounded-2xl p-4">
              <div className="text-xs font-semibold text-amber-400 uppercase tracking-wider mb-1">
                Apuestas reales necesarias
              </div>
              <div className="text-2xl font-black text-white">{money(r.actualBets)}</div>
              <p className="text-slate-400 text-sm mt-1">
                Al {contribution}% de contribución, cada S/1 apostado solo cuenta S/{(contribution / 100).toFixed(2)}.
              </p>
            </div>
          )}

          <div className="grid grid-cols-2 gap-3">
            <div className="bg-slate-800/60 border border-slate-700 rounded-2xl p-4">
              <div className="text-xs text-slate-400 mb-1">Giros aproximados</div>
              <div className="text-xl font-black text-white">{Math.round(r.spins).toLocaleString('es-PE')}</div>
              <p className="text-xs text-slate-500 mt-1">≈ {r.hours.toFixed(1)} h de juego</p>
            </div>
            <div className="bg-slate-800/60 border border-slate-700 rounded-2xl p-4">
              <div className="text-xs text-slate-400 mb-1">Coste esperado</div>
              <div className="text-xl font-black text-white">{money(r.expectedLoss)}</div>
              <p className="text-xs text-slate-500 mt-1">Con RTP {rtp.toFixed(1)}%</p>
            </div>
          </div>

          <div className={`rounded-2xl p-5 border ${
            r.net >= 0 ? 'bg-emerald-900/20 border-emerald-500/30' : 'bg-red-900/20 border-red-500/30'
          }`}>
            <div className="text-xs font-semibold uppercase tracking-wider mb-1 text-slate-300">
              Valor esperado del bono
            </div>
            <div className={`text-3xl font-black ${r.net >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
              {r.net >= 0 ? '+' : ''}{money(r.net)}
            </div>
            <p className="text-slate-400 text-sm mt-2 leading-relaxed">
              {r.net > 0
                ? `El bono de ${money(bonus)} supera al coste estadístico de liberarlo (${money(r.expectedLoss)}). A largo plazo, un bono así tiene sentido matemático.`
                : r.net === 0
                ? `Liberar este bono cuesta de media exactamente lo que recibes (${money(r.expectedLoss)}). En el mejor de los casos sales en tablas, así que el atractivo está en la posibilidad de tener suerte, no en la matemática.`
                : `Liberar este bono cuesta de media ${money(r.expectedLoss)}, más que los ${money(bonus)} que recibes. Estadísticamente pierdes dinero por aceptarlo.`}
            </p>
          </div>
        </div>
      </div>

      <div className="bg-slate-800/40 border border-slate-700 rounded-2xl p-5">
        <h3 className="font-bold text-white mb-2 text-sm">Cómo leer estos números</h3>
        <p className="text-slate-400 text-sm leading-relaxed mb-3">
          El <strong className="text-white">coste esperado</strong> es lo que pierdes de media al apostar esa cantidad
          total, calculado con el RTP del juego. Es un promedio estadístico a largo plazo: en una sesión concreta puedes
          terminar bastante por encima o por debajo, porque la varianza de las tragamonedas es alta. No es una
          predicción de lo que te va a pasar a ti.
        </p>
        <p className="text-slate-400 text-sm leading-relaxed">
          El cálculo tampoco incluye tres límites que sí aparecen en los T&amp;C y que pueden cambiarlo todo: la
          <strong className="text-white"> apuesta máxima computable</strong> (suele ser S/20-50 por ronda), el
          <strong className="text-white"> plazo</strong> para completar el wagering (de 7 a 30 días) y los
          <strong className="text-white"> juegos excluidos</strong>. Compruébalos antes de aceptar cualquier bono.
        </p>
      </div>

      <div className="flex flex-wrap gap-3">
        <Link href="/bonos" className="bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-bold py-2.5 px-5 rounded-xl transition-colors text-sm">
          Ver todos los bonos
        </Link>
        <Link href="/bonos/sin-deposito" className="bg-slate-800 border border-slate-700 hover:border-emerald-500/40 text-slate-300 hover:text-emerald-400 font-bold py-2.5 px-5 rounded-xl transition-colors text-sm">
          Bonos sin depósito
        </Link>
        <Link href="/blog/como-cumplir-wagering-mas-rapido-casino-online" className="inline-flex items-center gap-1.5 bg-slate-800 border border-slate-700 hover:border-emerald-500/40 text-slate-300 hover:text-emerald-400 font-bold py-2.5 px-5 rounded-xl transition-colors text-sm">
          Cómo cumplir el wagering más rápido <ExternalLink size={14} />
        </Link>
      </div>
    </div>
  );
}
