import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/ui/Breadcrumb';
import { paymentMethods } from '@/lib/data/payments';
import { casinos } from '@/lib/data/casinos';

export const metadata: Metadata = {
  title: 'Métodos de Pago en Casinos Online Perú 2026 — Yape, Plin, BCP',
  description: 'Guía completa de métodos de pago en casinos online para jugadores peruanos: Yape, Plin, BCP, BBVA, tarjetas y criptomonedas. Comparativa actualizada.',
  alternates: { canonical: '/metodos-de-pago' },
};

const typeLabels: Record<string, string> = {
  billetera: '📱 Billetera Digital',
  tarjeta: '💳 Tarjeta de Crédito/Débito',
  banco: '🏦 Transferencia Bancaria',
  cripto: '🪙 Criptomonedas',
  efectivo: '💵 Efectivo',
};

export default function PaymentsPage() {
  const grouped = paymentMethods.reduce((acc, method) => {
    if (!acc[method.type]) acc[method.type] = [];
    acc[method.type].push(method);
    return acc;
  }, {} as Record<string, typeof paymentMethods>);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Breadcrumb items={[{ label: 'Métodos de Pago' }]} />

      <div className="mt-6 mb-8">
        <h1 className="text-4xl font-black text-white mb-3">Métodos de Pago en Casinos Online Perú 2026</h1>
        <p className="text-slate-400 max-w-3xl">
          Guía completa de todos los métodos de depósito y retiro disponibles en casinos online para jugadores peruanos. Desde Yape y Plin hasta criptomonedas.
        </p>
      </div>

      {/* Quick summary cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
        {[
          { icon: '📱', label: 'Yape & Plin', desc: 'Instantáneo · Sin comisiones', highlight: true },
          { icon: '💳', label: 'Visa & Mastercard', desc: 'Instantáneo · Global', highlight: false },
          { icon: '🏦', label: 'Bancos Peruanos', desc: '1-3h · BCP, BBVA, Interbank', highlight: false },
          { icon: '🪙', label: 'Criptomonedas', desc: 'Rápido · Privado · Bitcoin', highlight: false },
        ].map((item) => (
          <div key={item.label} className={`rounded-2xl p-4 border ${item.highlight ? 'bg-emerald-900/20 border-emerald-500/30' : 'bg-slate-800/60 border-slate-700'}`}>
            <div className="text-3xl mb-2">{item.icon}</div>
            <div className={`font-bold text-sm ${item.highlight ? 'text-emerald-400' : 'text-white'}`}>{item.label}</div>
            <div className="text-xs text-slate-400 mt-1">{item.desc}</div>
          </div>
        ))}
      </div>

      {/* Method groups */}
      {Object.entries(grouped).map(([type, methods]) => (
        <section key={type} className="mb-10" id={methods[0].slug}>
          <h2 className="text-xl font-black text-white mb-4">{typeLabels[type] || type}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {methods.map((method) => (
              <div key={method.slug} id={method.slug} className="bg-slate-800/60 border border-slate-700 rounded-2xl p-5">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-700 flex items-center justify-center text-2xl">
                    {type === 'billetera' ? '📱' : type === 'tarjeta' ? '💳' : type === 'banco' ? '🏦' : type === 'cripto' ? '🪙' : '💵'}
                  </div>
                  <div>
                    <div className="font-bold text-white">{method.name}</div>
                    <div className="text-xs text-slate-400">{method.fees}</div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 text-sm mb-4">
                  {[
                    ['Depósito mínimo', `S/${method.minDeposit}`],
                    ['Depósito máximo', `S/${method.maxDeposit.toLocaleString()}`],
                    ['Tiempo depósito', method.depositTime],
                    ['Tiempo retiro', method.withdrawalTime],
                  ].map(([key, val]) => (
                    <div key={key} className="bg-slate-700/50 rounded-lg px-3 py-2">
                      <div className="text-slate-400 text-xs">{key}</div>
                      <div className="text-white font-semibold text-sm mt-0.5">{val}</div>
                    </div>
                  ))}
                </div>

                <div>
                  <div className="text-xs text-slate-400 mb-2">Casinos que lo aceptan:</div>
                  <div className="flex flex-wrap gap-2">
                    {method.casinos.map((casinoSlug) => {
                      const casino = casinos.find((c) => c.slug === casinoSlug);
                      return casino ? (
                        <Link key={casinoSlug} href={`/casinos/${casinoSlug}`} className="text-xs bg-slate-700 hover:bg-slate-600 text-slate-200 rounded-lg px-2.5 py-1 transition-colors">
                          {casino.name}
                        </Link>
                      ) : null;
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}

      {/* SEO content */}
      <section className="mt-8 bg-slate-800/30 border border-slate-700 rounded-2xl p-6">
        <h2 className="text-xl font-black text-white mb-4">¿Por qué Yape y Plin son los Métodos Más Populares en Casinos Online Peruanos?</h2>
        <p className="text-slate-400 leading-relaxed mb-3">
          Yape y Plin se han convertido en los métodos de pago favoritos de los peruanos para prácticamente todo, incluyendo los casinos online. Permiten depósitos y retiros instantáneos, sin comisiones y desde el móvil en segundos.
        </p>
        <p className="text-slate-400 leading-relaxed">
          La gran ventaja frente a las tarjetas bancarias es que no requieres ingresar datos sensibles en el casino, lo que añade una capa extra de seguridad. Además, están vinculadas a tu número de DNI y teléfono peruano, lo que hace las transacciones más seguras y verificables.
        </p>
      </section>
    </div>
  );
}
