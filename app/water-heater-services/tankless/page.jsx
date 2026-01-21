import { waterHeaterServicesContent, siteConfig } from '@/lib/content'
import { Zap, CheckCircle, Phone } from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: 'Tankless Water Heaters Erie PA | On-Demand Hot Water',
  description: 'Tankless water heater installation in Erie County PA. Unlimited hot water on demand. Save 30% on energy! Space-saving design. Call (814) 825-7066 for free estimates!',
  alternates: {
    canonical: 'https://tomtorranceheatingcooling.com/water-heater-services/tankless',
  },
  openGraph: {
    title: 'Tankless Water Heaters | Tom Torrance Erie PA',
    description: 'Energy-efficient tankless water heaters in Erie County PA. Unlimited hot water, 30% energy savings.',
    url: 'https://tomtorranceheatingcooling.com/water-heater-services/tankless',
    type: 'website',
  },
}

export default function TanklessWaterHeatersPage() {
  const service = waterHeaterServicesContent.services.find(s => s.slug === 'tankless')

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-torranceBlue to-torranceBlue/80 text-white py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/10 p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
              <Zap className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              {service.title}
            </h1>
            <p className="text-xl leading-relaxed mb-8 text-blue-50">
              {service.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:814-825-7066"
                className="bg-tomRed hover:bg-accentRed text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center justify-center"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call (814) 825-7066
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
                Unlimited Hot Water On Demand
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Experience the convenience of endless hot water with our energy-efficient tankless 
                water heaters. Heat water only when you need it, saving space, energy, and money 
                while providing reliable hot water for your entire home.
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
                Tankless Advantages
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

      {/* Comparison */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Tankless vs Traditional Water Heaters
            </h2>
            <p className="text-lg text-gray-600">
              See why tankless water heaters are the smart choice for modern homes
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-tomRed text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Feature</th>
                    <th className="px-6 py-4 text-center">Tankless</th>
                    <th className="px-6 py-4 text-center">Traditional Tank</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 font-medium">Hot Water Supply</td>
                    <td className="px-6 py-4 text-center text-green-600">✓ Unlimited</td>
                    <td className="px-6 py-4 text-center text-yellow-600">Limited by tank size</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-medium">Energy Efficiency</td>
                    <td className="px-6 py-4 text-center text-green-600">✓ Up to 30% savings</td>
                    <td className="px-6 py-4 text-center text-yellow-600">Standard efficiency</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium">Space Required</td>
                    <td className="px-6 py-4 text-center text-green-600">✓ Wall-mounted, compact</td>
                    <td className="px-6 py-4 text-center text-yellow-600">Large floor space needed</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-medium">Lifespan</td>
                    <td className="px-6 py-4 text-center text-green-600">✓ 20+ years</td>
                    <td className="px-6 py-4 text-center text-yellow-600">8-12 years</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium">Installation Cost</td>
                    <td className="px-6 py-4 text-center text-yellow-600">Higher upfront</td>
                    <td className="px-6 py-4 text-center text-green-600">✓ Lower upfront</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Is Tankless Right for You? */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Is Tankless Right for Your Home?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-green-50 p-8 rounded-lg border-l-4 border-green-500">
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-green-700">✓ Great Choice If You Have:</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• High hot water usage (large family)</li>
                <li>• Limited space for water heater</li>
                <li>• Long-term home ownership plans</li>
                <li>• Interest in energy efficiency</li>
                <li>• Need for multiple simultaneous uses</li>
                <li>• Want to reduce utility bills</li>
              </ul>
            </div>

            <div className="bg-blue-50 p-8 rounded-lg border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-blue-700">💡 Consider Traditional If:</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Lower upfront budget is priority</li>
                <li>• Minimal hot water usage</li>
                <li>• Existing gas line limitations</li>
                <li>• Prefer simple technology</li>
                <li>• Short-term housing situation</li>
                <li>• Current tank system works well</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Installation Process */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Professional Tankless Installation
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-tomRed/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-tomRed">1</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Home Assessment</h3>
              <p className="text-gray-600">Evaluate gas lines, electrical, and space requirements</p>
            </div>
            <div className="text-center">
              <div className="bg-tomRed/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-tomRed">2</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">System Sizing</h3>
              <p className="text-gray-600">Calculate proper BTU capacity for your home's needs</p>
            </div>
            <div className="text-center">
              <div className="bg-tomRed/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-tomRed">3</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Installation</h3>
              <p className="text-gray-600">Professional installation with code compliance</p>
            </div>
            <div className="text-center">
              <div className="bg-tomRed/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-tomRed">4</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Testing & Training</h3>
              <p className="text-gray-600">System testing and customer operation training</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-tomRed py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready for Unlimited Hot Water?
          </h2>
          <p className="text-xl text-red-100 mb-6">
            Upgrade to a tankless water heater and start saving energy and money
          </p>
          <a 
            href="tel:814-885-2440"
            className="bg-white text-tomRed hover:bg-gray-100 px-8 py-4 rounded-lg font-bold text-lg transition-colors inline-flex items-center"
          >
            <Phone className="mr-2 h-5 w-5" />
            Call for Tankless Quote: (814) 825-7066
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
            <Link href="/water-heater-services/traditional" className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow group">
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-tomRed transition-colors">
                Traditional Water Heaters
              </h3>
              <p className="text-gray-600">Reliable tank water heater installation and service</p>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
} 