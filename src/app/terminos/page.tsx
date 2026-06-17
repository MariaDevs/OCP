import type { Metadata } from 'next';
import Breadcrumb from '@/components/ui/Breadcrumb';

export const metadata: Metadata = {
  title: 'Términos y Condiciones — CasinoPerú.com',
  description: 'Términos y condiciones de uso de CasinoPerú.com.',
  alternates: { canonical: '/terminos' },
};

export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <Breadcrumb items={[{ label: 'Términos y Condiciones' }]} />
      <div className="mt-6 mb-8">
        <h1 className="text-4xl font-black text-white mb-2">Términos y Condiciones</h1>
        <p className="text-slate-500 text-sm">Última actualización: 1 de junio de 2026</p>
      </div>
      <div className="space-y-6 text-slate-400 leading-relaxed">
        {[
          ['1. Aceptación de los Términos', 'Al acceder y utilizar CasinoPerú.com, aceptas estos Términos y Condiciones en su totalidad. Si no estás de acuerdo, no debes usar este sitio.'],
          ['2. Propósito del Sitio', 'CasinoPerú.com es un sitio de información y comparación independiente. No somos un operador de casino y no aceptamos apuestas. Nuestro objetivo es proporcionar información objetiva sobre casinos online disponibles en Perú.'],
          ['3. Edad Mínima', 'Este sitio está destinado exclusivamente a personas mayores de 18 años. Al usar este sitio, confirmas que tienes al menos 18 años de edad.'],
          ['4. Links de Afiliado y Responsabilidad', 'Incluimos links de afiliado a casinos online. No somos responsables de las prácticas, términos, bonos ni acciones de los casinos enlazados. Lee siempre los términos y condiciones de cada casino antes de registrarte.'],
          ['5. Precisión de la Información', 'Hacemos nuestro mejor esfuerzo para mantener la información actualizada y precisa. Sin embargo, no garantizamos la exactitud completa de toda la información publicada. Los bonos, términos y condiciones de los casinos pueden cambiar sin previo aviso.'],
          ['6. Juego Responsable', 'Promovemos activamente el juego responsable. Si el juego se está convirtiendo en un problema, visita nuestra página de Juego Responsable o contacta con Gambling Therapy.'],
          ['7. Propiedad Intelectual', 'Todo el contenido de CasinoPerú.com, incluyendo textos, logos, imágenes y diseño, está protegido por derechos de autor. No está permitida su reproducción sin autorización previa.'],
          ['8. Modificaciones', 'Nos reservamos el derecho de modificar estos términos en cualquier momento. Las modificaciones entrarán en vigor inmediatamente tras su publicación.'],
          ['9. Ley Aplicable', 'Estos términos se rigen por las leyes de la República del Perú.'],
        ].map(([title, content]) => (
          <div key={title}>
            <h2 className="text-white text-lg font-bold mb-2">{title}</h2>
            <p>{content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
