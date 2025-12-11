import './globals.css'

export const metadata = {
  title: 'Tom Torrance Heating & Cooling',
  description: 'Your trusted local HVAC experts in Erie County with nearly 40 years of experience. Family & veteran owned company providing heating, AC, ductwork, and water heater services.',
  openGraph: {
    title: 'Tom Torrance Heating & Cooling',
    description: 'Your trusted local HVAC experts in Erie County with nearly 40 years of experience. Family & veteran owned company providing heating, AC, ductwork, and water heater services.',
    url: 'https://tomtorranceheatingandcooling.com',
    siteName: 'Tom Torrance Heating & Cooling',
    type: 'website',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Roboto:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-white">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

// Import components after the function to avoid hoisting issues
import Header from '../components/Header'
import Footer from '../components/Footer' 