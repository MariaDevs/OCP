import clsx from 'clsx';

interface BadgeProps {
  type: 'top' | 'nuevo' | 'recomendado' | 'exclusivo' | 'verificado';
  className?: string;
}

const config = {
  top: { label: '🏆 TOP', className: 'bg-amber-400/20 text-amber-400 border-amber-400/30' },
  nuevo: { label: '✨ NUEVO', className: 'bg-emerald-400/20 text-emerald-400 border-emerald-400/30' },
  recomendado: { label: '⭐ RECOMENDADO', className: 'bg-blue-400/20 text-blue-400 border-blue-400/30' },
  exclusivo: { label: '💎 EXCLUSIVO', className: 'bg-purple-400/20 text-purple-400 border-purple-400/30' },
  verificado: { label: '✓ VERIFICADO', className: 'bg-emerald-400/20 text-emerald-400 border-emerald-400/30' },
};

export default function Badge({ type, className }: BadgeProps) {
  const { label, className: typeClass } = config[type];
  return (
    <span className={clsx('inline-flex items-center px-2 py-0.5 rounded-full text-xs font-bold border tracking-wide', typeClass, className)}>
      {label}
    </span>
  );
}
