import Link from 'next/link';
import Image from 'next/image';
import { CheckCircle2, XCircle, ExternalLink, Shield, Clock, Banknote } from 'lucide-react';
import { Casino } from '@/types';
import StarRating from './StarRating';
import Badge from './Badge';
import clsx from 'clsx';

interface CasinoCardProps {
  casino: Casino;
  rank?: number;
  compact?: boolean;
}

const paymentIcons: Record<string, string> = {
  Yape: '💜',
  Plin: '💙',
  Visa: '💳',
  Mastercard: '💳',
  BCP: '🏦',
  BBVA: '🏦',
  Interbank: '🏦',
  Bitcoin: '₿',
  'USDT': '💵',
  Criptomonedas: '🪙',
  PayPal: '🅿',
  Efecty: '💵',
};

export default function CasinoCard({ casino, rank, compact = false }: CasinoCardProps) {
  return (
    <article className={clsx(
      'relative rounded-2xl border border-slate-700/50 bg-slate-800/60 backdrop-blur-sm overflow-hidden',
      'transition-all duration-300 hover:border-emerald-500/50 hover:shadow-[0_8px_30px_rgba(16,185,129,0.15)] hover:-translate-y-1',
      'group'
    )}>
      {/* Rank badge */}
      {rank && (
        <div className={clsx(
          'absolute top-0 left-0 w-10 h-10 flex items-center justify-center text-sm font-black rounded-br-xl',
          rank === 1 ? 'bg-amber-400 text-slate-900' : rank === 2 ? 'bg-slate-400 text-slate-900' : rank === 3 ? 'bg-amber-700 text-white' : 'bg-slate-700 text-slate-300'
        )}>
          #{rank}
        </div>
      )}

      {/* Top ribbon */}
      {casino.badge && (
        <div className="absolute top-3 right-3">
          <Badge type={casino.badge} />
        </div>
      )}

      <div className="p-5 pt-6">
        <div className="flex items-start gap-4">
          {/* Logo */}
          <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-slate-700 border border-slate-600 mt-1 overflow-hidden">
            {casino.logo ? (
              <Image src={casino.logo} alt={casino.name} width={64} height={64} className="w-full h-full object-contain p-1" />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-2xl font-black text-emerald-400">{casino.name.charAt(0)}</div>
            )}
          </div>

          <div className="flex-1 min-w-0">
            <h3 className="font-bold text-white text-lg leading-tight group-hover:text-emerald-400 transition-colors">
              {casino.name}
            </h3>
            <StarRating rating={casino.rating} reviewCount={casino.reviewCount} size="sm" />
            <div className="flex items-center gap-3 mt-2 text-xs text-slate-400">
              <span className="flex items-center gap-1"><Shield size={11} className="text-emerald-400" />{casino.license.split(' ')[0]}</span>
              <span className="flex items-center gap-1"><Clock size={11} className="text-emerald-400" />{casino.withdrawalTime}</span>
            </div>
          </div>
        </div>

        {/* Bonus highlight */}
        <div className="mt-4 rounded-xl bg-gradient-to-r from-emerald-500/10 to-amber-500/10 border border-emerald-500/20 p-3">
          <p className="text-xs text-emerald-400 font-semibold uppercase tracking-wider mb-1">{casino.bonus.title}</p>
          <p className="text-xl font-black text-white">{casino.bonus.amount}</p>
          {casino.bonus.freeSpins && (
            <p className="text-sm text-amber-400 font-semibold">+ {casino.bonus.freeSpins} Tiradas Gratis</p>
          )}
          <div className="flex items-center gap-3 mt-2 text-xs text-slate-400">
            <span>Depósito min: <strong className="text-slate-200">S/{casino.bonus.minDeposit}</strong></span>
            <span>Rollover: <strong className="text-slate-200">x{casino.bonus.wagering}</strong></span>
          </div>
          {casino.bonus.code && (
            <div className="mt-2 inline-flex items-center gap-1.5 bg-slate-900 border border-dashed border-amber-400/50 rounded-lg px-2 py-1">
              <span className="text-xs text-slate-400">Código:</span>
              <span className="text-xs font-mono font-bold text-amber-400">{casino.bonus.code}</span>
            </div>
          )}
        </div>

        {!compact && (
          <>
            {/* Pros */}
            <ul className="mt-4 space-y-1.5">
              {casino.pros.slice(0, 3).map((pro) => (
                <li key={pro} className="flex items-start gap-2 text-sm text-slate-300">
                  <CheckCircle2 size={15} className="text-emerald-400 mt-0.5 flex-shrink-0" />
                  {pro}
                </li>
              ))}
              {casino.cons.slice(0, 1).map((con) => (
                <li key={con} className="flex items-start gap-2 text-sm text-slate-500">
                  <XCircle size={15} className="text-red-400/70 mt-0.5 flex-shrink-0" />
                  {con}
                </li>
              ))}
            </ul>

            {/* Payment methods */}
            <div className="mt-4 flex flex-wrap gap-1.5">
              {casino.paymentMethods.slice(0, 6).map((method) => (
                <span key={method} className="text-xs bg-slate-700 text-slate-300 px-2 py-0.5 rounded-full flex items-center gap-1">
                  <span>{paymentIcons[method] || '💳'}</span> {method}
                </span>
              ))}
            </div>
          </>
        )}

        {/* CTAs */}
        <div className="mt-4 flex gap-3">
          <a
            href={casino.affiliateUrl}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="flex-1 flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-bold py-2.5 px-4 rounded-xl transition-colors text-sm"
          >
            Obtener Bono <ExternalLink size={14} />
          </a>
          <Link
            href={`/casinos/${casino.slug}`}
            className="flex items-center justify-center gap-2 border border-slate-600 hover:border-emerald-500 text-slate-300 hover:text-emerald-400 font-semibold py-2.5 px-4 rounded-xl transition-colors text-sm"
          >
            Reseña
          </Link>
        </div>

        <p className="text-xs text-slate-500 mt-2 text-center">
          Se aplican términos y condiciones. Juega con responsabilidad. +18
        </p>
      </div>
    </article>
  );
}
