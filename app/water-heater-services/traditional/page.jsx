import { waterHeaterServicesContent } from '@/lib/content'
import { Droplets, CheckCircle, Phone } from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: 'Traditional Water Heaters | Tom Torrance Heating & Cooling',
  description: 'Reliable traditional tank water heater installation and service in Erie County, PA. Gas and electric models with proven technology and affordable pricing.',
  openGraph: {
    title: 'Traditional Water Heaters | Tom Torrance Heating & Cooling',
    description: 'Reliable traditional tank water heater installation and service in Erie County, PA. Gas and electric models with proven technology and affordable pricing.',
    type: 'website',
  },
}

export default function TraditionalWaterHeatersPage() {
  const service = waterHeaterServicesContent.services.find(s => s.slug === 'traditional')

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-torranceBlue to-torranceBlue/80 text-white py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/10 p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
              <Droplets className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              {service.title}
            </h1>
            <p className="text-xl leading-relaxed mb-8 text-blue-50">
              {service.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:814-885-2440"
                className="bg-tomRed hover:bg-accentRed text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center justify-center"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call (814) 885-2440
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

      {/* Service Features */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Proven Reliable Technology
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Traditional tank water heaters remain the most popular choice for American 
                homes due to their reliability, affordability, and simple operation. With 
                modern energy-efficient designs, they provide dependable hot water for your family.
              </p>
              
              <div className="space-y-4">
                {service.features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-tomRed mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Traditional Water Heater Benefits
              </h3>
              <div className="space-y-4">
                {service.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-tomRed/10 p-1 rounded-full mr-3 mt-1">
                      <div className="w-2 h-2 bg-tomRed rounded-full"></div>
                    </div>
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tank Sizes & Options */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Choose the Right Size for Your Home
            </h2>
            <p className="text-lg text-gray-600">
              We help you select the perfect tank size based on your household's hot water usage
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="text-4xl mb-4 text-tomRed">30-40</div>
              <h3 className="font-semibold mb-2">Gallons</h3>
              <p className="text-gray-600 text-sm mb-3">1-2 People</p>
              <p className="text-gray-600 text-xs">Small apartments, condos</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="text-4xl mb-4 text-tomRed">40-50</div>
              <h3 className="font-semibold mb-2">Gallons</h3>
              <p className="text-gray-600 text-sm mb-3">2-3 People</p>
              <p className="text-gray-600 text-xs">Small homes, townhouses</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center border-2 border-tomRed">
              <div className="text-4xl mb-4 text-tomRed">50-60</div>
              <h3 className="font-semibold mb-2">Gallons</h3>
              <p className="text-gray-600 text-sm mb-3">3-4 People</p>
              <p className="text-gray-600 text-xs">Most popular size</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="text-4xl mb-4 text-tomRed">60-80</div>
              <h3 className="font-semibold mb-2">Gallons</h3>
              <p className="text-gray-600 text-sm mb-3">4+ People</p>
              <p className="text-gray-600 text-xs">Large families, high usage</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gas vs Electric */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Gas vs Electric Water Heaters
            </h2>
            <p className="text-lg text-gray-600">
              Both fuel types have advantages - we'll help you choose the best option for your home
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                  <span className="text-2xl">🔥</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Gas Water Heaters</h3>
              </div>
              <ul className="space-y-3 text-gray-600 mb-6">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Faster heating recovery time
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Lower operating costs
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Works during power outages
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  More environmentally friendly
                </li>
              </ul>
              <p className="text-sm text-gray-500 italic">Best for: Homes with existing gas lines, high hot water usage</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center mb-6">
                <div className="bg-yellow-100 p-3 rounded-lg mr-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Electric Water Heaters</h3>
              </div>
              <ul className="space-y-3 text-gray-600 mb-6">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Lower upfront installation cost
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Easier installation process
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Higher energy efficiency rating
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  No venting requirements
                </li>
              </ul>
              <p className="text-sm text-gray-500 italic">Best for: Homes without gas lines, smaller households, easy installation</p>
            </div>
          </div>
        </div>
      </section>

      {/* Maintenance Tips */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Keep Your Water Heater Running Efficiently
            </h2>
            <p className="text-lg text-gray-600">
              Simple maintenance can extend your water heater's life and improve efficiency
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="font-semibold text-gray-900 mb-3">💧 Annual Flushing</h3>
              <p className="text-gray-600 text-sm mb-3">Remove sediment buildup to maintain efficiency and extend lifespan</p>
              <p className="text-tomRed font-semibold text-sm">We recommend professional service</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="font-semibold text-gray-900 mb-3">🛡️ Anode Rod Replacement</h3>
              <p className="text-gray-600 text-sm mb-3">Replace sacrificial anode rod every 3-5 years to prevent tank corrosion</p>
              <p className="text-tomRed font-semibold text-sm">Professional replacement recommended</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="font-semibold text-gray-900 mb-3">🌡️ Temperature Setting</h3>
              <p className="text-gray-600 text-sm mb-3">Set thermostat to 120°F for optimal efficiency and safety</p>
              <p className="text-green-600 font-semibold text-sm">Homeowner adjustable</p>
            </div>
          </div>
        </div>
      </section>

      {/* When to Replace */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Signs It's Time for a New Water Heater
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-red-50 p-8 rounded-lg border-l-4 border-red-500">
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-red-700">🚨 Replace Immediately:</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Water heater is 10+ years old</li>
                <li>• Visible rust or corrosion on tank</li>
                <li>• Water pooling around unit</li>
                <li>• Rusty or metallic-tasting water</li>
                <li>• Frequent repairs needed</li>
              </ul>
            </div>

            <div className="bg-yellow-50 p-8 rounded-lg border-l-4 border-yellow-500">
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-yellow-700">⚠️ Consider Replacement:</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Not enough hot water</li>
                <li>• Takes longer to heat water</li>
                <li>• Strange noises during operation</li>
                <li>• Higher energy bills</li>
                <li>• Inconsistent water temperature</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-tomRed py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Need a New Traditional Water Heater?
          </h2>
          <p className="text-xl text-red-100 mb-6">
            Get reliable, affordable hot water with professional installation
          </p>
          <a 
            href="tel:814-885-2440"
            className="bg-white text-tomRed hover:bg-gray-100 px-8 py-4 rounded-lg font-bold text-lg transition-colors inline-flex items-center"
          >
            <Phone className="mr-2 h-5 w-5" />
            Call for Quote: (814) 885-2440
          </a>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Related Water Heater Services
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/water-heater-services/installation" className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow group">
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-tomRed transition-colors">
                Water Heater Installation
              </h3>
              <p className="text-gray-600">Professional installation of new water heater systems</p>
            </Link>
            <Link href="/water-heater-services/repair" className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow group">
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-tomRed transition-colors">
                Water Heater Repair
              </h3>
              <p className="text-gray-600">Fast, reliable repair services to restore hot water</p>
            </Link>
            <Link href="/water-heater-services/tankless" className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow group">
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-tomRed transition-colors">
                Tankless Water Heaters
              </h3>
              <p className="text-gray-600">Energy-efficient on-demand hot water solutions</p>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
} 