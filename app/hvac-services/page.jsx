import { hvacServicesContent, siteConfig } from '@/lib/content'
import ServiceCard from '@/components/ServiceCard'
import { Thermometer, Wind, Wrench, Shield } from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: 'HVAC Services | Tom Torrance Heating & Cooling',
  description: 'Professional HVAC services in Erie County, PA. Air conditioning, furnace installation & repair, ductwork, and air purification systems.',
  openGraph: {
    title: 'HVAC Services | Tom Torrance Heating & Cooling',
    description: 'Professional HVAC services in Erie County, PA. Air conditioning, furnace installation & repair, ductwork, and air purification systems.',
    type: 'website',
  },
}

const serviceIcons = {
  'air-conditioning': Thermometer,
  'furnace-installation-repair': Wind,
  'ductwork': Wrench,
  'air-purification': Shield
}

export default function HVACServicesPage() {
  const { hero, services } = hvacServicesContent

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
              Complete HVAC Solutions
            </h2>
            <p className="text-lg text-gray-600">
              From installation to emergency repairs, we provide comprehensive HVAC services 
              to keep your home comfortable throughout the year.
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
                    href={`/hvac-services/${service.slug}`}
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

      {/* Emergency Service CTA */}
      <section className="bg-tomRed py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Need Emergency HVAC Service?
          </h2>
          <p className="text-xl text-red-100 mb-6">
            We provide 24/7 emergency HVAC repairs throughout Erie County, PA
          </p>
          <a 
            href={`tel:${siteConfig.phone}`}
            className="bg-white text-tomRed hover:bg-gray-100 px-8 py-4 rounded-lg font-bold text-lg transition-colors inline-block"
          >
            Call Now: {siteConfig.phone}
          </a>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">
              Why Choose Tom Torrance Heating & Cooling?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-tomRed/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-tomRed">40</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Nearly 40 Years Experience</h3>
                <p className="text-gray-600">Decades of trusted HVAC service in Erie County</p>
              </div>
              <div className="text-center">
                <div className="bg-tomRed/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-tomRed">24/7</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Emergency Service</h3>
                <p className="text-gray-600">Available when you need us most</p>
              </div>
              <div className="text-center">
                <div className="bg-tomRed/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-tomRed">PA</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Licensed & Insured</h3>
                <p className="text-gray-600">PA License #066651</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 