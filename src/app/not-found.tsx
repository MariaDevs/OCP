import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
      <div className="text-8xl mb-6">🎰</div>
      <h1 className="text-6xl font-black text-white mb-3">404</h1>
      <p className="text-2xl font-bold text-slate-300 mb-2">Página no encontrada</p>
      <p className="text-slate-400 mb-8 max-w-md">
        Esta página no existe o fue movida. Pero tenemos mejores apuestas esperándote.
      </p>
      <div className="flex flex-col sm:flex-row gap-3">
        <Link href="/" className="bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-black py-3 px-8 rounded-xl transition-colors">
          Volver al Inicio
        </Link>
        <Link href="/casinos" className="border border-slate-600 hover:border-emerald-500 text-slate-300 hover:text-white font-semibold py-3 px-8 rounded-xl transition-colors">
          Ver Casinos
        </Link>
      </div>
    </div>
  );
}
