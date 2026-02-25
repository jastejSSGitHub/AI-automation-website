import { ImageResponse } from 'next/og';
import type { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);

  const title =
    searchParams.get('title') ||
    'App Design, Website Design & AI Automation Agency';

  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #050505 0%, #0f172a 55%, #1e1b4b 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          padding: '64px 80px',
          fontFamily: 'sans-serif',
          position: 'relative',
        }}
      >
        {/* Decorative glow blobs */}
        <div
          style={{
            position: 'absolute',
            top: -80,
            right: -80,
            width: 500,
            height: 500,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(139,92,246,0.18) 0%, transparent 70%)',
            display: 'flex',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: -60,
            left: 200,
            width: 400,
            height: 400,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(59,130,246,0.14) 0%, transparent 70%)',
            display: 'flex',
          }}
        />

        {/* Top: Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: 12,
              background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <div
              style={{
                width: 24,
                height: 24,
                borderRadius: '50%',
                border: '3px solid rgba(255,255,255,0.9)',
                display: 'flex',
              }}
            />
          </div>
          <span
            style={{
              color: '#ffffff',
              fontSize: 30,
              fontWeight: 700,
              letterSpacing: '-0.5px',
            }}
          >
            LoopSuit
          </span>
          <div
            style={{
              marginLeft: 8,
              background: 'rgba(59,130,246,0.2)',
              border: '1px solid rgba(59,130,246,0.4)',
              borderRadius: 999,
              padding: '4px 14px',
              display: 'flex',
            }}
          >
            <span style={{ color: '#60a5fa', fontSize: 14, fontWeight: 600 }}>
              loopsuitai.com
            </span>
          </div>
        </div>

        {/* Middle: Headline */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            maxWidth: 960,
          }}
        >
          <span
            style={{
              color: '#ffffff',
              fontSize: title.length > 60 ? 50 : 62,
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: '-2.5px',
            }}
          >
            {title}
          </span>
          <span
            style={{
              color: '#94a3b8',
              fontSize: 22,
              fontWeight: 400,
              letterSpacing: '-0.3px',
            }}
          >
            Premium design + AI automation. Ship faster. Scale smarter.
          </span>
        </div>

        {/* Bottom: Tags */}
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          {[
            'App Design',
            'Website Design',
            'Dashboard Design',
            'MVP Development',
            'AI Automation',
          ].map((tag) => (
            <div
              key={tag}
              style={{
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: 999,
                padding: '10px 22px',
                display: 'flex',
              }}
            >
              <span style={{ color: '#cbd5e1', fontSize: 15, fontWeight: 500 }}>
                {tag}
              </span>
            </div>
          ))}
          <div
            style={{
              background: 'linear-gradient(90deg, rgba(59,130,246,0.2), rgba(139,92,246,0.2))',
              border: '1px solid rgba(139,92,246,0.35)',
              borderRadius: 999,
              padding: '10px 22px',
              display: 'flex',
            }}
          >
            <span style={{ color: '#a78bfa', fontSize: 15, fontWeight: 600 }}>
              USA · Canada · India
            </span>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
