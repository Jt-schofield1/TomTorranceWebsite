import { ImageResponse } from 'next/og'

export const size = {
  width: 32,
  height: 32,
}
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '32px',
          height: '32px',
          borderRadius: '6px',
          background: 'linear-gradient(135deg, #1565C0, #0D47A1)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1px',
        }}
      >
        <span style={{ fontSize: '12px', fontWeight: 'bold', color: '#C62828', marginTop: '-1px' }}>T</span>
        <span style={{ fontSize: '12px', fontWeight: 'bold', color: '#FFFFFF', marginTop: '-1px' }}>T</span>
      </div>
    ),
    {
      ...size,
    }
  )
}
