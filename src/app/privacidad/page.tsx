import type { Metadata } from 'next';
import Breadcrumb from '@/components/ui/Breadcrumb';

export const metadata: Metadata = {
  title: 'Política de Privacidad — CasinoPerú.com',
  description: 'Política de privacidad de CasinoPerú.com. Cómo recopilamos, usamos y protegemos tus datos personales.',
  alternates: { canonical: '/privacidad' },
};

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <Breadcrumb items={[{ label: 'Política de Privacidad' }]} />
      <div className="mt-6 mb-8">
        <h1 className="text-4xl font-black text-white mb-2">Política de Privacidad</h1>
        <p className="text-slate-500 text-sm">Última actualización: 1 de junio de 2026</p>
      </div>
      <div className="prose-casino space-y-6 text-slate-400 leading-relaxed">
        {[
          ['1. Información que Recopilamos', 'CasinoPerú.com puede recopilar información que nos proporcionas voluntariamente al contactarnos o suscribirte a nuestra newsletter, incluyendo nombre y dirección de correo electrónico. También recopilamos datos de uso mediante cookies y herramientas de análisis como Google Analytics.'],
          ['2. Uso de la Información', 'Utilizamos tu información para responder a tus consultas, enviar nuestro newsletter (si te suscribes), mejorar el contenido del sitio basándonos en el comportamiento de los usuarios, y cumplir con obligaciones legales.'],
          ['3. Cookies', 'Usamos cookies propias y de terceros para mejorar la experiencia del usuario y analizar el tráfico. Puedes configurar tu navegador para rechazar cookies, aunque esto puede afectar la funcionalidad del sitio.'],
          ['4. Links de Afiliado', 'CasinoPerú.com contiene links de afiliado a casinos online. Al hacer clic en estos enlaces y registrarte, podemos recibir una comisión del casino. Esto no supone ningún coste adicional para ti.'],
          ['5. Compartición de Datos', 'No vendemos ni alquilamos tu información personal a terceros. Podemos compartir datos agregados y anónimos con socios publicitarios o de análisis.'],
          ['6. Seguridad', 'Tomamos medidas razonables para proteger tu información, incluyendo el uso de conexiones SSL/TLS encriptadas en todo el sitio.'],
          ['7. Tus Derechos (Ley Peruana)', 'De acuerdo con la Ley N° 29733 de Protección de Datos Personales de Perú, tienes derecho a acceder, rectificar, cancelar u oponerte al tratamiento de tus datos personales. Contáctanos para ejercer estos derechos.'],
          ['8. Contacto', 'Si tienes preguntas sobre esta política, escríbenos a: hola@onlinecasinoperu.com'],
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
