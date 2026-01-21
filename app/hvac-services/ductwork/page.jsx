import { hvacServicesContent } from '@/lib/content'
import { Wrench, CheckCircle, Phone } from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: 'Ductwork Installation & Repair Erie PA | Air Duct Services',
  description: 'Professional ductwork installation, repair & cleaning in Erie County PA. Improve HVAC efficiency & air quality. Call (814) 825-7066 for duct services!',
  alternates: {
    canonical: 'https://tomtorranceheatingcooling.com/hvac-services/ductwork',
  },
  openGraph: {
    title: 'Ductwork Services | Tom Torrance Erie PA',
    description: 'Professional ductwork installation, repair & cleaning in Erie County PA. Improve efficiency & air quality.',
    url: 'https://tomtorranceheatingcooling.com/hvac-services/ductwork',
    type: 'website',
  },
}

export default function DuctworkPage() {
  const service = hvacServicesContent.services.find(s => s.slug === 'ductwork')

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
                Professional Ductwork Solutions
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Your ductwork is the circulatory system of your HVAC equipment. Properly designed, 
                installed, and maintained ducts ensure optimal airflow, energy efficiency, and 
                indoor air quality throughout your home.
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
                Benefits of Professional Ductwork
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

      {/* Ductwork Problems */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Signs You Need Ductwork Service
            </h2>
            <p className="text-lg text-gray-600">
              Don't let faulty ductwork waste energy and compromise your comfort. 
              Watch for these warning signs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="text-4xl mb-4">💨</div>
              <h3 className="font-semibold mb-2">Uneven Temperatures</h3>
              <p className="text-gray-600 text-sm">Some rooms too hot or cold</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="text-4xl mb-4">💸</div>
              <h3 className="font-semibold mb-2">High Energy Bills</h3>
              <p className="text-gray-600 text-sm">Increased heating/cooling costs</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="text-4xl mb-4">🌪️</div>
              <h3 className="font-semibold mb-2">Poor Airflow</h3>
              <p className="text-gray-600 text-sm">Weak air coming from vents</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="text-4xl mb-4">🫁</div>
              <h3 className="font-semibold mb-2">Air Quality Issues</h3>
              <p className="text-gray-600 text-sm">Excessive dust or odors</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Our Ductwork Service Process
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-tomRed/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-tomRed">1</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Inspection & Assessment</h3>
              <p className="text-gray-600">Comprehensive evaluation of your duct system</p>
            </div>
            <div className="text-center">
              <div className="bg-tomRed/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-tomRed">2</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Professional Service</h3>
              <p className="text-gray-600">Installation, repair, or cleaning as needed</p>
            </div>
            <div className="text-center">
              <div className="bg-tomRed/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-tomRed">3</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Testing & Verification</h3>
              <p className="text-gray-600">Ensure optimal airflow and system performance</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service CTA */}
      <section className="bg-tomRed py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ductwork Problems Affecting Your Comfort?
          </h2>
          <p className="text-xl text-red-100 mb-6">
            Get professional ductwork services to improve your HVAC system efficiency
          </p>
          <a 
            href="tel:814-825-7066"
            className="bg-white text-tomRed hover:bg-gray-100 px-8 py-4 rounded-lg font-bold text-lg transition-colors inline-flex items-center"
          >
            <Phone className="mr-2 h-5 w-5" />
            Call for Service: (814) 825-7066
          </a>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Related HVAC Services
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/hvac-services/air-conditioning" className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow group">
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-tomRed transition-colors">
                Air Conditioning
              </h3>
              <p className="text-gray-600">Expert AC installation, repair, and maintenance</p>
            </Link>
            <Link href="/hvac-services/furnace-installation-repair" className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow group">
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-tomRed transition-colors">
                Furnace Services
              </h3>
              <p className="text-gray-600">Professional furnace installation and repair</p>
            </Link>
            <Link href="/hvac-services/air-purification" className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow group">
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-tomRed transition-colors">
                Air Purification
              </h3>
              <p className="text-gray-600">Advanced air quality solutions for healthier indoor air</p>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
} 