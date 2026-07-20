'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Menu, X, ChevronDown, Shield } from 'lucide-react';
import clsx from 'clsx';

const navItems = [
  {
    label: 'Casinos',
    href: '/casinos',
    children: [
      { label: 'Todos los Casinos', href: '/casinos' },
      { label: 'Casino en Vivo', href: '/casinos?filtro=en-vivo' },
      { label: 'Casinos con Yape', href: '/casino-yape' },
      { label: 'Casinos con Plin', href: '/casinos?filtro=plin' },
      { label: 'Casinos de Criptomonedas', href: '/casinos?filtro=cripto' },
    ],
  },
  {
    label: 'Bonos',
    href: '/bonos',
    children: [
      { label: 'Todos los Bonos', href: '/bonos' },
      { label: 'Bonos de Bienvenida', href: '/bonos/bienvenida' },
      { label: 'Bonos Sin Depósito', href: '/bonos/sin-deposito' },
      { label: 'Tiradas Gratis', href: '/bonos/tiradas-gratis' },
    ],
  },
  {
    label: 'Juegos',
    href: '/juegos',
    children: [
      { label: 'Tragamonedas', href: '/juegos/tragamonedas' },
      { label: 'Ruleta Online', href: '/juegos/ruleta' },
      { label: 'Blackjack', href: '/juegos/blackjack' },
      { label: 'Baccarat', href: '/juegos/baccarat' },
      { label: 'Casino en Vivo', href: '/juegos/en-vivo' },
    ],
  },
  { label: 'Pagos', href: '/metodos-de-pago' },
  { label: 'Blog', href: '/blog' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-700/50 bg-slate-900/90 backdrop-blur-xl">
      {/* Top bar */}
      <div className="bg-emerald-500/10 border-b border-emerald-500/20 py-1">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between text-xs">
          <span className="flex items-center gap-1.5 text-emerald-400">
            <Shield size={11} />
            Guía Independiente • No somos un casino • Actualizado junio 2026
          </span>
          <span className="text-slate-400 hidden sm:block">🔞 Solo para mayores de 18 años</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0">
            <Image
              src="/images/logo.svg"
              alt="CasinoPerú.com — Guía Independiente"
              width={200}
              height={50}
              priority
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative group"
                onMouseEnter={() => item.children && setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800 transition-all"
                >
                  {item.label}
                  {item.children && <ChevronDown size={14} className={clsx('transition-transform', openDropdown === item.label && 'rotate-180')} />}
                </Link>

                {item.children && openDropdown === item.label && (
                  <div className="absolute top-full left-0 pt-1 w-52">
                  <div className="bg-slate-800 border border-slate-700 rounded-xl shadow-2xl overflow-hidden">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2.5 text-sm text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <span className="hidden sm:flex items-center gap-1.5 text-xs font-medium text-red-400 bg-red-400/10 border border-red-400/20 rounded-full px-2.5 py-1">
              🔞 +18
            </span>
            <button
              className="md:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Menú"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-slate-700 bg-slate-900">
          {navItems.map((item) => (
            <div key={item.label}>
              <Link
                href={item.href}
                className="block px-4 py-3 text-slate-200 font-medium border-b border-slate-800"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
              {item.children?.map((child) => (
                <Link
                  key={child.href}
                  href={child.href}
                  className="block px-8 py-2.5 text-sm text-slate-400 hover:text-emerald-400 border-b border-slate-800/50"
                  onClick={() => setMobileOpen(false)}
                >
                  {child.label}
                </Link>
              ))}
            </div>
          ))}
        </div>
      )}
    </header>
  );
}
