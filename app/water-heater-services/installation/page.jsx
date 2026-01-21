import { waterHeaterServicesContent, siteConfig } from '@/lib/content'
import { Settings, CheckCircle, Phone } from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: 'Water Heater Installation Erie PA | Tank & Tankless',
  description: 'Professional water heater installation in Erie County PA. Tank & tankless options. Code-compliant installation with warranty. Call (814) 825-7066 for free estimates!',
  alternates: {
    canonical: 'https://tomtorranceheatingcooling.com/water-heater-services/installation',
  },
  openGraph: {
    title: 'Water Heater Installation | Tom Torrance Erie PA',
    description: 'Professional water heater installation in Erie County PA. Tank & tankless options with expert sizing.',
    url: 'https://tomtorranceheatingcooling.com/water-heater-services/installation',
    type: 'website',
  },
}

export default function WaterHeaterInstallationPage() {
  const service = waterHeaterServicesContent.services.find(s => s.slug === 'installation')

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-torranceBlue to-torranceBlue/80 text-white py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/10 p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
              <Settings className="h-10 w-10 text-white" />
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

      {/* Service Features */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Professional Water Heater Installation
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Get reliable hot water for your home with professional water heater installation. 
                Our experienced technicians ensure proper sizing, safe installation, and optimal 
                performance for years to come.
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
                Installation Benefits
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

      {/* Installation Process */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Our Installation Process
            </h2>
            <p className="text-lg text-gray-600">
              From consultation to completion, we ensure a smooth installation experience.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-tomRed/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-tomRed">1</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Assessment</h3>
              <p className="text-gray-600">Evaluate your hot water needs and space requirements</p>
            </div>
            <div className="text-center">
              <div className="bg-tomRed/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-tomRed">2</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Selection</h3>
              <p className="text-gray-600">Choose the right water heater for your home and budget</p>
            </div>
            <div className="text-center">
              <div className="bg-tomRed/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-tomRed">3</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Installation</h3>
              <p className="text-gray-600">Professional installation by certified technicians</p>
            </div>
            <div className="text-center">
              <div className="bg-tomRed/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-tomRed">4</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Testing</h3>
              <p className="text-gray-600">Complete system testing and customer walkthrough</p>
            </div>
          </div>
        </div>
      </section>

      {/* Water Heater Types */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Water Heater Options We Install
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Traditional Tank Water Heaters</h3>
              <ul className="space-y-3 text-gray-600 mb-6">
                <li>• 30-80 gallon capacity options</li>
                <li>• Gas and electric models available</li>
                <li>• Energy-efficient designs</li>
                <li>• Reliable, proven technology</li>
                <li>• Lower upfront investment</li>
              </ul>
              <Link href="/water-heater-services/traditional" className="text-tomRed font-semibold hover:text-accentRed">
                Learn more about traditional water heaters →
              </Link>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Tankless Water Heaters</h3>
              <ul className="space-y-3 text-gray-600 mb-6">
                <li>• Unlimited hot water on demand</li>
                <li>• Space-saving wall-mount design</li>
                <li>• Up to 30% energy savings</li>
                <li>• Longer lifespan (20+ years)</li>
                <li>• Advanced digital controls</li>
              </ul>
              <Link href="/water-heater-services/tankless" className="text-tomRed font-semibold hover:text-accentRed">
                Learn more about tankless water heaters →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-tomRed py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready for a New Water Heater?
          </h2>
          <p className="text-xl text-red-100 mb-6">
            Get expert installation with warranty coverage and reliable hot water
          </p>
          <a 
            href={`tel:${siteConfig.phone}`}
            className="bg-white text-tomRed hover:bg-gray-100 px-8 py-4 rounded-lg font-bold text-lg transition-colors inline-flex items-center"
          >
            <Phone className="mr-2 h-5 w-5" />
            Call for Installation: {siteConfig.phone}
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