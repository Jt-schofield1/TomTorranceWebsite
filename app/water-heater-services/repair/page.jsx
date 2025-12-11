import { waterHeaterServicesContent, siteConfig } from '@/lib/content'
import { Wrench, CheckCircle, Phone } from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: 'Water Heater Repair | Tom Torrance Heating & Cooling',
  description: 'Fast water heater repair services in Erie County, PA. Emergency repairs, diagnostics, and same-day service to restore hot water quickly.',
  openGraph: {
    title: 'Water Heater Repair | Tom Torrance Heating & Cooling',
    description: 'Fast water heater repair services in Erie County, PA. Emergency repairs, diagnostics, and same-day service to restore hot water quickly.',
    type: 'website',
  },
}

export default function WaterHeaterRepairPage() {
  const service = waterHeaterServicesContent.services.find(s => s.slug === 'repair')

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-torranceBlue to-torranceBlue/80 text-white py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/10 p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
              <Wrench className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              {service.title}
            </h1>
            <p className="text-xl leading-relaxed mb-8 text-blue-50">
              {service.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href={`tel:${siteConfig.phone}`}
                className="bg-tomRed hover:bg-accentRed text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center justify-center"
              >
                <Phone className="mr-2 h-5 w-5" />
                Emergency Repair: (814) 885-2440
              </a>
              <Link 
                href="/contact-us"
                className="bg-white text-torranceBlue hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center justify-center"
              >
                Schedule Service
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
                Fast Water Heater Repair Services
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Don't let a broken water heater disrupt your daily routine. Our experienced 
                technicians provide fast, reliable repair services to get your hot water 
                flowing again quickly.
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
                Repair Service Benefits
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

      {/* Common Problems */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Common Water Heater Problems We Fix
            </h2>
            <p className="text-lg text-gray-600">
              Our technicians are experienced in diagnosing and repairing all types of water heater issues.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="font-semibold text-gray-900 mb-3">❄️ No Hot Water</h3>
              <p className="text-gray-600 text-sm">Complete loss of hot water due to heating element, pilot light, or gas valve issues</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="font-semibold text-gray-900 mb-3">🌡️ Not Hot Enough</h3>
              <p className="text-gray-600 text-sm">Insufficient water temperature caused by thermostat or heating element problems</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="font-semibold text-gray-900 mb-3">💧 Water Leaks</h3>
              <p className="text-gray-600 text-sm">Tank leaks, valve leaks, or pipe connection issues causing water damage</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="font-semibold text-gray-900 mb-3">🔊 Strange Noises</h3>
              <p className="text-gray-600 text-sm">Popping, banging, or rumbling sounds from sediment buildup or heating issues</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="font-semibold text-gray-900 mb-3">🟤 Rusty Water</h3>
              <p className="text-gray-600 text-sm">Discolored water indicating corrosion or anode rod replacement needed</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="font-semibold text-gray-900 mb-3">⚡ Frequent Cycling</h3>
              <p className="text-gray-600 text-sm">Water heater turning on and off too frequently, wasting energy</p>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Service */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              When to Call for Emergency Service
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-red-50 p-8 rounded-lg border-l-4 border-tomRed">
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-red-700">🚨 Call Immediately If:</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Gas smell near water heater</li>
                <li>• Active water leaking causing flooding</li>
                <li>• Electrical sparks or burning smell</li>
                <li>• No hot water in winter weather</li>
                <li>• Carbon monoxide detector alarm</li>
              </ul>
            </div>

            <div className="bg-yellow-50 p-8 rounded-lg border-l-4 border-yellow-500">
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-yellow-700">⚠️ Schedule Service Soon:</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Water not getting hot enough</li>
                <li>• Strange noises from unit</li>
                <li>• Rusty or discolored water</li>
                <li>• Higher than normal energy bills</li>
                <li>• Water heater over 10 years old</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="bg-tomRed py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Water Heater Emergency? We're Here 24/7!
          </h2>
          <p className="text-xl text-red-100 mb-6">
            Don't go without hot water - call for immediate repair service
          </p>
          <a 
            href={`tel:${siteConfig.phone}`}
            className="bg-white text-tomRed hover:bg-gray-100 px-8 py-4 rounded-lg font-bold text-lg transition-colors inline-flex items-center"
          >
            <Phone className="mr-2 h-5 w-5" />
            Emergency Repair: (814) 885-2440
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
            <Link href="/water-heater-services/tankless" className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow group">
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-tomRed transition-colors">
                Tankless Water Heaters
              </h3>
              <p className="text-gray-600">Energy-efficient on-demand hot water solutions</p>
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