import Link from 'next/link';
import Image from 'next/image';
import { Shield, Lock, HeartHandshake } from 'lucide-react';

const footerLinks = {
  Casinos: [
    { label: 'Todos los Casinos', href: '/casinos' },
    { label: 'Casino en Vivo', href: '/juegos/en-vivo' },
    { label: 'Casinos con Yape', href: '/casinos?filtro=yape' },
    { label: 'Casinos con Plin', href: '/casinos?filtro=plin' },
    { label: 'Nuevos Casinos', href: '/casinos?filtro=nuevo' },
  ],
  Bonos: [
    { label: 'Bonos de Bienvenida', href: '/bonos/bienvenida' },
    { label: 'Bonos Sin Depósito', href: '/bonos/sin-deposito' },
    { label: 'Tiradas Gratis', href: '/bonos/tiradas-gratis' },
    { label: 'Códigos Promocionales', href: '/bonos?filtro=codigos' },
  ],
  Juegos: [
    { label: 'Tragamonedas', href: '/juegos/tragamonedas' },
    { label: 'Ruleta Online', href: '/juegos/ruleta' },
    { label: 'Blackjack', href: '/juegos/blackjack' },
    { label: 'Baccarat', href: '/juegos/baccarat' },
    { label: 'Casino en Vivo', href: '/juegos/en-vivo' },
  ],
  Información: [
    { label: 'Sobre Nosotros', href: '/sobre-nosotros' },
    { label: 'Métodos de Pago', href: '/metodos-de-pago' },
    { label: 'Blog', href: '/blog' },
    { label: 'Juego Responsable', href: '/juego-responsable' },
    { label: 'Política de Privacidad', href: '/privacidad' },
    { label: 'Términos y Condiciones', href: '/terminos' },
    { label: 'Contacto', href: '/contacto' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      {/* Responsible gaming banner */}
      <div className="bg-gradient-to-r from-emerald-900/30 to-slate-900/30 border-b border-emerald-800/30">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <HeartHandshake className="text-emerald-400 flex-shrink-0" size={24} />
              <div>
                <p className="font-bold text-white text-sm">¿El juego se está convirtiendo en un problema?</p>
                <p className="text-slate-400 text-xs">El juego debe ser entretenimiento, no una fuente de ingresos. Juega con responsabilidad.</p>
              </div>
            </div>
            <a
              href="https://www.gamblingtherapy.org/es"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 text-sm font-semibold text-emerald-400 border border-emerald-400/50 rounded-lg px-4 py-2 hover:bg-emerald-400/10 transition-colors"
            >
              Buscar Ayuda →
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Logo + description */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="block mb-3">
              <Image
                src="/images/logo.svg"
                alt="CasinoPerú.com"
                width={180}
                height={45}
                className="h-9 w-auto"
              />
            </Link>
            <p className="text-slate-400 text-xs leading-relaxed">
              Guía independiente de casinos online en Perú. Comparamos y analizamos las mejores plataformas para jugadores peruanos desde 2020.
            </p>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white font-bold text-sm mb-3">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-slate-400 text-xs hover:text-emerald-400 transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="border-t border-slate-800 pt-8 mb-8">
          <div className="flex flex-wrap items-center justify-center gap-6">
            {[
              { icon: <Lock size={16} />, label: 'SSL 256-bit' },
              { icon: <Shield size={16} />, label: 'Guía Independiente' },
              { icon: '🔞', label: '+18 Sólo' },
              { icon: '🎰', label: 'No somos un casino' },
              { icon: '🇵🇪', label: 'Hecho para Perú' },
            ].map((badge) => (
              <div key={badge.label} className="flex items-center gap-1.5 text-xs text-slate-500">
                <span className="text-emerald-400">{typeof badge.icon === 'string' ? badge.icon : badge.icon}</span>
                {badge.label}
              </div>
            ))}
          </div>
        </div>

        {/* Disclaimer */}
        <div className="bg-slate-900 rounded-xl p-4 mb-8">
          <p className="text-slate-500 text-xs leading-relaxed text-center">
            <strong className="text-slate-400">Aviso Legal:</strong> CasinoPerú.com es un sitio de información y comparación independiente. No somos un operador de casino ni aceptamos apuestas. Podemos recibir comisiones de afiliados de los casinos que recomendamos, lo que no influye en nuestras valoraciones. Los juegos de azar implican riesgo económico. Juega solo con dinero que puedas permitirte perder. Solo para mayores de 18 años. Si el juego te está causando problemas, contacta con la <a href="https://www.gamblingtherapy.org/es" className="text-emerald-400 hover:underline">Línea de Ayuda para el Juego</a>.
          </p>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>© 2026 CasinoPerú.com — Todos los derechos reservados</p>
          <div className="flex items-center gap-4">
            <Link href="/privacidad" className="hover:text-slate-300 transition-colors">Privacidad</Link>
            <Link href="/terminos" className="hover:text-slate-300 transition-colors">Términos</Link>
            <Link href="/cookies" className="hover:text-slate-300 transition-colors">Cookies</Link>
            <Link href="/contacto" className="hover:text-slate-300 transition-colors">Contacto</Link>
            <a href="https://kasinotilmanrekisteroitymista.com/" target="_blank" rel="noopener noreferrer" className="hover:text-slate-300 transition-colors">Kasinot Ilman Rekisteröitymistä</a>
            <a href="https://geekygambler.com/" target="_blank" rel="noopener noreferrer" className="hover:text-slate-300 transition-colors">Geeky Gambler</a>
            <a href="https://onlinecasinolatino.com/" target="_blank" rel="noopener noreferrer" className="hover:text-slate-300 transition-colors">Online Casino Latino</a>
            <a href="https://internettikasino.com/" target="_blank" rel="noopener noreferrer" className="hover:text-slate-300 transition-colors">Internetti Kasino</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
