export interface Casino {
  slug: string;
  name: string;
  logo: string;
  rating: number;
  reviewCount: number;
  badge?: 'top' | 'nuevo' | 'recomendado' | 'exclusivo';
  bonus: {
    title: string;
    amount: string;
    freeSpins?: number;
    wagering: number;
    minDeposit: number;
    code?: string;
  };
  license: string;
  founded: number;
  paymentMethods: string[];
  supportLanguages: string[];
  withdrawalTime: string;
  minWithdrawal: number;
  pros: string[];
  cons: string[];
  description: string;
  longDescription: string;
  games: {
    slots: boolean;
    liveCasino: boolean;
    blackjack: boolean;
    roulette: boolean;
    poker: boolean;
    sportsBetting: boolean;
  };
  mobileApp: boolean;
  liveChat: boolean;
  verified: boolean;
  affiliateUrl: string;
  scores?: {
    seguridad: number;
    juegos: number;
    bonos: number;
    pagos: number;
    soporte: number;
  };
}

export interface Bonus {
  slug: string;
  casino: string;
  casinoSlug: string;
  casinoLogo: string;
  type: 'bienvenida' | 'sin-deposito' | 'tiradas-gratis' | 'recarga' | 'cashback' | 'vip';
  title: string;
  amount: string;
  wagering: number;
  minDeposit: number;
  validity: number;
  code?: string;
  rating: number;
  affiliateUrl: string;
}

export interface Game {
  slug: string;
  name: string;
  category: 'tragamonedas' | 'ruleta' | 'blackjack' | 'poker' | 'baccarat' | 'en-vivo';
  provider: string;
  rtp?: number;
  volatility?: 'baja' | 'media' | 'alta';
  freePlay: boolean;
  description: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  /** Markdown-ish body for static posts. Empty for engine posts (use `html`). */
  content: string;
  category: string;
  author: string;
  date: string;
  readTime: number;
  image: string;
  /** Pre-rendered, sanitized + affiliate-hardened HTML body (engine posts). */
  html?: string;
  /** Hero image URL from the content engine, if any. */
  heroImage?: string | null;
  heroImageAlt?: string | null;
  /** Where the post came from. Static (curated) or the content engine. */
  source?: "static" | "engine";
}

export interface PaymentMethod {
  slug: string;
  name: string;
  logo: string;
  type: 'tarjeta' | 'billetera' | 'banco' | 'cripto' | 'efectivo';
  minDeposit: number;
  maxDeposit: number;
  depositTime: string;
  withdrawalTime: string;
  fees: string;
  casinos: string[];
}
