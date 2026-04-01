import { ImageResponse } from 'next/og'

export const alt = 'Tom Torrance Heating & Cooling - #1 HVAC Company in Erie PA'
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
        {/* Gradient overlay */}
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

        {/* Red accent bar at top */}
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

        {/* Main content */}
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
          {/* TT Logo Mark */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '30px',
            }}
          >
            <div
              style={{
                width: '80px',
                height: '80px',
                borderRadius: '16px',
                background: 'linear-gradient(135deg, #1565C0, #0D47A1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '4px',
              }}
            >
              <span style={{ fontSize: '36px', fontWeight: 'bold', color: '#C62828' }}>T</span>
              <span style={{ fontSize: '36px', fontWeight: 'bold', color: '#FFFFFF' }}>T</span>
            </div>
          </div>

          {/* Company Name */}
          <div
            style={{
              fontSize: '52px',
              fontWeight: 'bold',
              color: 'white',
              textAlign: 'center',
              lineHeight: 1.2,
              marginBottom: '8px',
              display: 'flex',
            }}
          >
            Tom Torrance
          </div>
          <div
            style={{
              fontSize: '36px',
              fontWeight: 'bold',
              color: '#90CAF9',
              textAlign: 'center',
              lineHeight: 1.2,
              marginBottom: '24px',
              display: 'flex',
            }}
          >
            Heating & Cooling
          </div>

          {/* Tagline */}
          <div
            style={{
              fontSize: '24px',
              color: '#BBDEFB',
              textAlign: 'center',
              marginBottom: '32px',
              display: 'flex',
            }}
          >
            Erie County&apos;s Trusted HVAC Experts — 40+ Years Experience
          </div>

          {/* Service badges */}
          <div
            style={{
              display: 'flex',
              gap: '16px',
              marginBottom: '24px',
            }}
          >
            {['Furnace Repair', 'AC Installation', 'Water Heaters', 'Ductwork'].map((service) => (
              <div
                key={service}
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: '8px',
                  padding: '8px 20px',
                  fontSize: '16px',
                  color: 'white',
                  display: 'flex',
                }}
              >
                {service}
              </div>
            ))}
          </div>

          {/* Phone + CTA */}
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
            Call (814) 825-7066 — Family & Veteran Owned
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '4px',
            backgroundColor: '#E30613',
            display: 'flex',
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  )
}
