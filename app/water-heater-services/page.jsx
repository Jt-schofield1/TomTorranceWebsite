import { waterHeaterServicesContent, siteConfig } from '@/lib/content'
import { Droplets, Wrench, Zap, Settings } from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: 'Water Heater Services Erie PA | Installation & Repair',
  description: 'Water heater installation & repair in Erie County PA. Tankless & traditional water heaters. Same-day service available. Call (814) 825-7066 for hot water solutions!',
  alternates: {
    canonical: 'https://tomtorranceheatingcooling.com/water-heater-services',
  },
  openGraph: {
    title: 'Water Heater Services | Tom Torrance Erie PA',
    description: 'Expert water heater installation, repair & maintenance in Erie County PA. Tankless & traditional options.',
    url: 'https://tomtorranceheatingcooling.com/water-heater-services',
    type: 'website',
  },
}

const serviceIcons = {
  'installation': Settings,
  'repair': Wrench,
  'tankless': Zap,
  'traditional': Droplets
}

export default function WaterHeaterServicesPage() {
  const { hero, services } = waterHeaterServicesContent

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-torranceBlue to-torranceBlue/80 text-white py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              {hero.title}
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-blue-100">
              {hero.subtitle}
            </p>
            <p className="text-lg leading-relaxed mb-8 text-blue-50">
              {hero.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href={`tel:${siteConfig.phone}`}
                className="bg-tomRed hover:bg-accentRed text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center justify-center"
              >
                Call {siteConfig.phone}
              </a>
              <Link 
                href="/contact-us"
                className="bg-white text-torranceBlue hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center justify-center"
              >
                Get Free Estimate
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Complete Water Heater Solutions
            </h2>
            <p className="text-lg text-gray-600">
              From repairs to new installations, we provide reliable water heater 
              services to ensure you never run out of hot water.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {services.map((service) => {
              const IconComponent = serviceIcons[service.slug]
              return (
                <div key={service.slug} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
                  <div className="flex items-center mb-6">
                    <div className="bg-tomRed/10 p-3 rounded-lg mr-4">
                      <IconComponent className="h-8 w-8 text-tomRed" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {service.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                    <ul className="text-gray-600 space-y-1">
                      {service.features.slice(0, 3).map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-tomRed mr-2">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link 
                    href={`/water-heater-services/${service.slug}`}
                    className="bg-tomRed hover:bg-accentRed text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-block"
                  >
                    Learn More
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Service CTA */}
      <section className="bg-tomRed py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            No Hot Water? We Can Help!
          </h2>
          <p className="text-xl text-red-100 mb-6">
            Professional water heater repair services available throughout Erie County, PA
          </p>
          <a 
            href={`tel:${siteConfig.phone}`}
            className="bg-white text-tomRed hover:bg-gray-100 px-8 py-4 rounded-lg font-bold text-lg transition-colors inline-block"
          >
            Call Now: {siteConfig.phone}
          </a>
        </div>
      </section>

      {/* Water Heater Types Comparison */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Tankless vs Traditional Water Heaters
            </h2>
            <p className="text-lg text-gray-600">
              Choose the right water heater for your home and budget
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center mb-6">
                <Zap className="h-8 w-8 text-tomRed mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Tankless Water Heaters</h3>
              </div>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Unlimited hot water on demand
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Energy efficient - up to 30% savings
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Space-saving design
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Longer lifespan (20+ years)
                </li>
              </ul>
              <Link href="/water-heater-services/tankless" className="mt-6 bg-tomRed text-white px-6 py-3 rounded-lg inline-block hover:bg-accentRed transition-colors">
                Learn More
              </Link>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center mb-6">
                <Droplets className="h-8 w-8 text-tomRed mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Traditional Tank Water Heaters</h3>
              </div>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Lower upfront installation cost
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Simple, reliable operation
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Easy maintenance and repair
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Proven technology
                </li>
              </ul>
              <Link href="/water-heater-services/traditional" className="mt-6 bg-tomRed text-white px-6 py-3 rounded-lg inline-block hover:bg-accentRed transition-colors">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">
              Why Choose Tom Torrance for Water Heater Service?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-tomRed/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-tomRed">Fast</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Same-Day Service</h3>
                <p className="text-gray-600">Quick response for water heater emergencies</p>
              </div>
              <div className="text-center">
                <div className="bg-tomRed/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-tomRed">Pro</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Expert Installation</h3>
                <p className="text-gray-600">Professional installation with warranty coverage</p>
              </div>
              <div className="text-center">
                <div className="bg-tomRed/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-tomRed">$</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Upfront Pricing</h3>
                <p className="text-gray-600">No surprises - clear pricing before we start</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 