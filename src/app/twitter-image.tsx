import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'CasinoPerú.com — Mejores Casinos Online en Perú 2026';
export const size = { width: 1200, height: 600 };
export const contentType = 'image/png';

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '600px',
          background: 'linear-gradient(135deg, #0a0e1a 0%, #071525 50%, #0a1a0e 100%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'sans-serif',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div style={{ position: 'absolute', top: '-80px', left: '8%', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(16,185,129,0.12) 0%, transparent 70%)' }} />
        <div style={{ position: 'absolute', bottom: '-60px', right: '8%', width: '350px', height: '350px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(245,158,11,0.08) 0%, transparent 70%)' }} />

        <div style={{ width: '100px', height: '100px', borderRadius: '50%', background: 'linear-gradient(135deg, #065f46, #022c22)', border: '3px solid #059669', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px', fontSize: '50px' }}>
          ♦
        </div>

        <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px', marginBottom: '12px' }}>
          <span style={{ fontSize: '64px', fontWeight: 900, color: 'white', letterSpacing: '-2px' }}>Casino</span>
          <span style={{ fontSize: '64px', fontWeight: 900, letterSpacing: '-2px', color: '#f59e0b' }}>Perú</span>
          <span style={{ fontSize: '32px', fontWeight: 600, color: '#10b981', marginLeft: '4px' }}>.com</span>
        </div>

        <p style={{ fontSize: '24px', color: '#94a3b8', margin: '0 0 32px', letterSpacing: '1px' }}>
          Guía Independiente de Casinos Online en Perú
        </p>

        <div style={{ display: 'flex', gap: '40px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(16,185,129,0.2)', borderRadius: '14px', padding: '16px 40px' }}>
          {[['50+', 'Casinos'], ['Yape & Plin', 'Pagos'], ['2026', 'Actualizado']].map(([v, l]) => (
            <div key={l} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2px' }}>
              <span style={{ fontSize: '24px', fontWeight: 900, color: '#10b981' }}>{v}</span>
              <span style={{ fontSize: '14px', color: '#64748b' }}>{l}</span>
            </div>
          ))}
        </div>

        <p style={{ position: 'absolute', bottom: '22px', fontSize: '16px', color: '#475569', letterSpacing: '2px' }}>ONLINECASINOPERU.COM</p>
      </div>
    ),
    { ...size }
  );
}
