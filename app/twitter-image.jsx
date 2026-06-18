import { ImageResponse } from 'next/og'

export const alt = 'Tom Torrance Heating & Cooling - HVAC Erie PA'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: '#002F5A',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(135deg, #002F5A 0%, #003E7A 50%, #002F5A 100%)',
            display: 'flex',
          }}
        />

        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '8px',
            backgroundColor: '#E30613',
            display: 'flex',
          }}
        />

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            padding: '60px',
            position: 'relative',
            zIndex: 1,
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '24px',
            }}
          >
            <div
              style={{
                width: '72px',
                height: '72px',
                borderRadius: '14px',
                background: 'linear-gradient(135deg, #1565C0, #0D47A1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '4px',
              }}
            >
              <span style={{ fontSize: '32px', fontWeight: 'bold', color: '#C62828' }}>T</span>
              <span style={{ fontSize: '32px', fontWeight: 'bold', color: '#FFFFFF' }}>T</span>
            </div>
          </div>

          <div
            style={{
              fontSize: '48px',
              fontWeight: 'bold',
              color: 'white',
              textAlign: 'center',
              lineHeight: 1.2,
              marginBottom: '8px',
              display: 'flex',
            }}
          >
            Tom Torrance Heating & Cooling
          </div>

          <div
            style={{
              fontSize: '26px',
              color: '#90CAF9',
              textAlign: 'center',
              marginBottom: '28px',
              display: 'flex',
            }}
          >
            #1 HVAC Company in Erie PA — 40+ Years Experience
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              backgroundColor: '#E30613',
              borderRadius: '12px',
              padding: '12px 32px',
              fontSize: '22px',
              fontWeight: 'bold',
              color: 'white',
            }}
          >
            Call (814) 825-7066 Today!
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
