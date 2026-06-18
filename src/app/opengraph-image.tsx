import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'CasinoPerú.com — Mejores Casinos Online en Perú 2026';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
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
        {/* Background glow blobs */}
        <div
          style={{
            position: 'absolute',
            top: '-100px',
            left: '10%',
            width: '500px',
            height: '500px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(16,185,129,0.12) 0%, transparent 70%)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-80px',
            right: '10%',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(245,158,11,0.08) 0%, transparent 70%)',
          }}
        />

        {/* Icon: sun + diamond */}
        <div
          style={{
            width: '120px',
            height: '120px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #065f46, #022c22)',
            border: '3px solid #059669',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '32px',
            fontSize: '60px',
          }}
        >
          ♦
        </div>

        {/* Wordmark */}
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px', marginBottom: '16px' }}>
          <span style={{ fontSize: '72px', fontWeight: 900, color: 'white', letterSpacing: '-2px' }}>
            Casino
          </span>
          <span
            style={{
              fontSize: '72px',
              fontWeight: 900,
              letterSpacing: '-2px',
              background: 'linear-gradient(90deg, #fcd34d, #f59e0b)',
              backgroundClip: 'text',
              color: 'transparent',
            }}
          >
            Perú
          </span>
          <span style={{ fontSize: '36px', fontWeight: 600, color: '#10b981', marginLeft: '4px' }}>
            .com
          </span>
        </div>

        {/* Tagline */}
        <p
          style={{
            fontSize: '28px',
            color: '#94a3b8',
            margin: '0 0 40px',
            letterSpacing: '1px',
          }}
        >
          Guía Independiente de Casinos Online en Perú
        </p>

        {/* Stats bar */}
        <div
          style={{
            display: 'flex',
            gap: '48px',
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(16,185,129,0.2)',
            borderRadius: '16px',
            padding: '20px 48px',
          }}
        >
          {[
            { value: '50+', label: 'Casinos' },
            { value: 'Yape & Plin', label: 'Métodos de Pago' },
            { value: '2026', label: 'Actualizado' },
          ].map((stat) => (
            <div
              key={stat.label}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}
            >
              <span style={{ fontSize: '28px', fontWeight: 900, color: '#10b981' }}>{stat.value}</span>
              <span style={{ fontSize: '16px', color: '#64748b' }}>{stat.label}</span>
            </div>
          ))}
        </div>

        {/* Bottom URL */}
        <p style={{ position: 'absolute', bottom: '28px', fontSize: '18px', color: '#475569', letterSpacing: '2px' }}>
          ONLINECASINOPERU.COM
        </p>
      </div>
    ),
    { ...size }
  );
}
