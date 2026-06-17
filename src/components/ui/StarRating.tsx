'use client';

import { Star } from 'lucide-react';
import clsx from 'clsx';

interface StarRatingProps {
  rating: number;
  maxRating?: number;
  size?: 'sm' | 'md' | 'lg';
  showNumber?: boolean;
  reviewCount?: number;
}

export default function StarRating({ rating, maxRating = 5, size = 'md', showNumber = true, reviewCount }: StarRatingProps) {
  const sizeMap = { sm: 12, md: 16, lg: 20 };
  const px = sizeMap[size];

  return (
    <div className="flex items-center gap-1.5">
      <div className="flex items-center gap-0.5">
        {Array.from({ length: maxRating }).map((_, i) => {
          const filled = i < Math.floor(rating);
          const partial = !filled && i < rating;
          return (
            <span key={i} className="relative inline-block" style={{ width: px, height: px }}>
              <Star size={px} className="text-slate-600" />
              {(filled || partial) && (
                <span
                  className="absolute inset-0 overflow-hidden"
                  style={{ width: partial ? `${(rating % 1) * 100}%` : '100%' }}
                >
                  <Star size={px} className="text-amber-400 fill-amber-400" />
                </span>
              )}
            </span>
          );
        })}
      </div>
      {showNumber && (
        <span className={clsx('font-bold text-amber-400', size === 'sm' ? 'text-xs' : size === 'lg' ? 'text-lg' : 'text-sm')}>
          {rating.toFixed(1)}
        </span>
      )}
      {reviewCount && (
        <span className="text-slate-400 text-xs">({reviewCount.toLocaleString('es-PE')} reseñas)</span>
      )}
    </div>
  );
}
