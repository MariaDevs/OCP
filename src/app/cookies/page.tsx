import type { Metadata } from 'next';
import Breadcrumb from '@/components/ui/Breadcrumb';

export const metadata: Metadata = {
  title: 'Política de Cookies',
  description: 'Política de cookies de OnlineCasinoPerú.com. Información sobre qué cookies usamos y cómo gestionarlas.',
  alternates: { canonical: '/cookies' },
  robots: { index: true, follow: true },
};

const sections = [
  {
    title: '¿Qué son las Cookies?',
    body: 'Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas un sitio web. Nos ayudan a recordar tus preferencias, analizar el tráfico y mejorar tu experiencia de navegación.',
  },
  {
    title: 'Tipos de Cookies que Usamos',
    body: `**Cookies esenciales:** Necesarias para el funcionamiento básico del sitio. No pueden desactivarse.

**Cookies de análisis:** Utilizamos Google Analytics para entender cómo los visitantes usan nuestro sitio (páginas visitadas, tiempo en página, fuente de tráfico). Los datos son anónimos y agregados.

**Cookies de funcionalidad:** Recuerdan tus preferencias como el idioma seleccionado.

**Cookies de terceros:** Algunos de nuestros socios afiliados pueden establecer cookies cuando haces clic en sus enlaces. Consulta sus propias políticas de privacidad para más información.`,
  },
  {
    title: 'Duración de las Cookies',
    body: `**Cookies de sesión:** Se eliminan automáticamente cuando cierras tu navegador.

**Cookies persistentes:** Permanecen en tu dispositivo durante un período determinado (generalmente entre 30 días y 2 años) o hasta que las elimines manualmente.`,
  },
  {
    title: 'Cómo Gestionar las Cookies',
    body: `Puedes controlar y/o eliminar las cookies como desees. Puedes eliminar todas las cookies que ya están en tu dispositivo y configurar la mayoría de los navegadores para que no acepten cookies nuevas.

**Chrome:** Configuración → Privacidad y seguridad → Cookies y otros datos de sitios

**Firefox:** Opciones → Privacidad y seguridad → Cookies y datos del sitio

**Safari:** Preferencias → Privacidad → Gestionar datos del sitio web

**Edge:** Configuración → Cookies y permisos del sitio → Cookies y datos del sitio

Ten en cuenta que si deshabilitas las cookies, algunas funcionalidades del sitio pueden no funcionar correctamente.`,
  },
  {
    title: 'Cookies de Google Analytics',
    body: `Utilizamos Google Analytics 4 para analizar el uso de nuestro sitio web. Google Analytics usa cookies para recopilar información estándar de registro de Internet y datos de comportamiento de visitantes de forma anónima.

Puedes optar por no ser rastreado por Google Analytics instalando el complemento de inhabilitación de Google Analytics para navegadores: tools.google.com/dlpage/gaoptout`,
  },
  {
    title: 'Actualizaciones de esta Política',
    body: 'Podemos actualizar esta política de cookies periódicamente para reflejar cambios en las cookies que usamos o por otras razones operativas, legales o reglamentarias. Revisa esta página regularmente para estar informado.',
  },
  {
    title: 'Contacto',
    body: 'Si tienes preguntas sobre nuestra política de cookies, puedes contactarnos a través de nuestra página de contacto.',
  },
];

export default function CookiesPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <Breadcrumb items={[{ label: 'Cookies' }]} />
      <div className="mt-6 mb-8">
        <h1 className="text-3xl font-black text-white mb-3">Política de Cookies</h1>
        <p className="text-slate-400">Última actualización: enero 2026</p>
      </div>
      <div className="space-y-8">
        {sections.map((s) => (
          <section key={s.title}>
            <h2 className="text-xl font-bold text-white mb-3">{s.title}</h2>
            <div className="text-slate-400 leading-relaxed space-y-2">
              {s.body.split('\n\n').map((para, i) => (
                <p key={i} dangerouslySetInnerHTML={{
                  __html: para
                    .replace(/\*\*(.+?)\*\*/g, '<strong class="text-slate-200">$1</strong>')
                    .replace(/\n/g, '<br />')
                }} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
