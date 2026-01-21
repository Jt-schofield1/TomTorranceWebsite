import './globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

const SITE_URL = 'https://tomtorranceheatingcooling.com'

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'HVAC Erie PA | #1 Heating & Cooling Company | Tom Torrance',
    template: '%s | Tom Torrance Heating & Cooling Erie PA'
  },
  description: '#1 HVAC company in Erie PA with 40+ years experience. Furnace repair, AC installation, water heaters. Family & veteran owned. Call (814) 825-7066. Serving Erie, Waterford, Edinboro & all Erie County.',
  keywords: ['HVAC Erie PA', 'HVAC Erie', 'heating and cooling Erie PA', 'furnace repair Erie PA', 'AC repair Erie PA', 'AC installation Erie', 'heating company Erie PA', 'air conditioning Erie PA', 'HVAC contractor Erie County', 'furnace installation Erie', 'water heater Erie PA', 'Tom Torrance HVAC', 'Waterford PA HVAC', 'Edinboro HVAC'],
  authors: [{ name: 'Tom Torrance Heating & Cooling' }],
  creator: 'Tom Torrance Heating & Cooling',
  publisher: 'Tom Torrance Heating & Cooling',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: '32x32' },
    ],
    apple: '/favicon.svg',
  },
  openGraph: {
    title: 'HVAC Erie PA | #1 Heating & Cooling | Tom Torrance',
    description: '#1 HVAC company in Erie PA. 40+ years experience. Furnace repair, AC installation, water heaters. Call (814) 825-7066!',
    url: SITE_URL,
    siteName: 'Tom Torrance Heating & Cooling - Erie PA',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/home-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Tom Torrance Heating & Cooling - HVAC Erie PA',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HVAC Erie PA | Tom Torrance Heating & Cooling',
    description: '#1 HVAC company in Erie PA. 40+ years experience. Call (814) 825-7066!',
    images: ['/home-hero.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
  verification: {
    // Add your Google Search Console verification code here
    // google: 'your-verification-code',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#003E7A',
}

// Organization Schema - Specifically for Google to show logo in search results
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Tom Torrance Heating & Cooling',
  alternateName: ['Tom Torrance HVAC', 'Tom Torrance Heating and Cooling'],
  url: SITE_URL,
  logo: {
    '@type': 'ImageObject',
    url: `${SITE_URL}/TTlogo.png`,
    width: 512,
    height: 512,
    caption: 'Tom Torrance Heating & Cooling Logo'
  },
  image: `${SITE_URL}/TTlogo.png`,
  telephone: '+1-814-825-7066',
  email: 'info@tomtorranceheatingcooling.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '707 Moore Rd',
    addressLocality: 'Waterford',
    addressRegion: 'PA',
    postalCode: '16441',
    addressCountry: 'US',
  },
  sameAs: [
    'https://www.bbb.org/us/pa/waterford/profile/heating-and-air-conditioning/tom-torrance-heating-cooling-and-refrigeration-0141-71036869',
    'https://www.yelp.com/biz/tom-torrance-heating-and-cooling-and-refrigeration-waterford-3',
  ],
}

// JSON-LD Structured Data for Local Business
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HVACBusiness',
  '@id': `${SITE_URL}/#business`,
  name: 'Tom Torrance Heating & Cooling',
  alternateName: 'Tom Torrance HVAC',
  description: 'Erie County\'s trusted HVAC experts providing heating, cooling, water heater, and ductwork services for nearly 40 years. Family & veteran owned.',
  url: SITE_URL,
  logo: {
    '@type': 'ImageObject',
    url: `${SITE_URL}/TTlogo.png`,
    width: 512,
    height: 512,
  },
  image: [
    `${SITE_URL}/TTlogo.png`,
    `${SITE_URL}/home-hero.jpg`,
    `${SITE_URL}/truck.jpeg`
  ],
  telephone: '+1-814-825-7066',
  email: 'info@tomtorranceheatingcooling.com',
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '707 Moore Rd',
    addressLocality: 'Waterford',
    addressRegion: 'PA',
    postalCode: '16441',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 41.9428,
    longitude: -80.0492,
  },
  areaServed: [
    { '@type': 'City', name: 'Erie', addressRegion: 'PA' },
    { '@type': 'City', name: 'Waterford', addressRegion: 'PA' },
    { '@type': 'City', name: 'Edinboro', addressRegion: 'PA' },
    { '@type': 'City', name: 'Fairview', addressRegion: 'PA' },
    { '@type': 'City', name: 'Girard', addressRegion: 'PA' },
    { '@type': 'City', name: 'Harborcreek', addressRegion: 'PA' },
    { '@type': 'City', name: 'North East', addressRegion: 'PA' },
    { '@type': 'City', name: 'Millcreek', addressRegion: 'PA' },
    { '@type': 'City', name: 'McKean', addressRegion: 'PA' },
    { '@type': 'City', name: 'Union City', addressRegion: 'PA' },
    { '@type': 'AdministrativeArea', name: 'Erie County', addressRegion: 'PA' },
  ],
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '07:00',
      closes: '19:30',
    },
  ],
  sameAs: [
    'https://www.bbb.org/us/pa/waterford/profile/heating-and-air-conditioning/tom-torrance-heating-cooling-and-refrigeration-0141-71036869',
    'https://www.yelp.com/biz/tom-torrance-heating-and-cooling-and-refrigeration-waterford-3',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'HVAC Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Air Conditioning Installation & Repair',
          description: 'Professional AC installation, repair, and maintenance services',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Furnace Installation & Repair',
          description: 'Expert furnace installation, repair, and maintenance services',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Water Heater Services',
          description: 'Tankless and traditional water heater installation and repair',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Ductwork Services',
          description: 'Professional ductwork installation, repair, and cleaning',
        },
      },
    ],
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5.0',
    reviewCount: '50',
    bestRating: '5',
    worstRating: '1',
  },
  founder: {
    '@type': 'Person',
    name: 'Tom Torrance',
  },
  foundingDate: '1985',
  slogan: 'Your Comfort is Our Priority!',
  knowsAbout: ['HVAC', 'Heating', 'Air Conditioning', 'Furnace Repair', 'Water Heaters', 'Ductwork', 'Indoor Air Quality'],
  paymentAccepted: ['Cash', 'Check', 'Credit Card'],
  currenciesAccepted: 'USD',
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
        {/* Organization Schema for Logo in Search Results */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {/* Local Business Schema for Rich Results */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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