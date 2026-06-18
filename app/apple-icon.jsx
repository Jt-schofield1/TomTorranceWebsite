import { ImageResponse } from 'next/og'

export const size = {
  width: 180,
  height: 180,
}
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '180px',
          height: '180px',
          borderRadius: '36px',
          background: 'linear-gradient(135deg, #1565C0, #0D47A1)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '4px',
        }}
      >
        <span style={{ fontSize: '72px', fontWeight: 'bold', color: '#C62828', marginTop: '-4px' }}>T</span>
        <span style={{ fontSize: '72px', fontWeight: 'bold', color: '#FFFFFF', marginTop: '-4px' }}>T</span>
      </div>
    ),
    {
      ...size,
    }
  )
}
