import { hvacServicesContent } from '@/lib/content'
import { Wind, CheckCircle, Phone } from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: 'Furnace Installation & Repair | Tom Torrance Heating & Cooling',
  description: 'Professional furnace installation and repair services in Erie County, PA. High-efficiency heating systems and maintenance.',
  openGraph: {
    title: 'Furnace Installation & Repair | Tom Torrance Heating & Cooling',
    description: 'Professional furnace installation and repair services in Erie County, PA. High-efficiency heating systems and maintenance.',
    type: 'website',
  },
}

export default function FurnaceInstallationRepairPage() {
  const service = hvacServicesContent.services.find(s => s.slug === 'furnace-installation-repair')

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-torranceBlue to-torranceBlue/80 text-white py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/10 p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
              <Wind className="h-10 w-10 text-white" />
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
                Expert Furnace Services
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Keep your home warm and comfortable during Pennsylvania's cold winters with our 
                professional furnace services. We install high-efficiency heating systems and 
                provide reliable repair services when you need them most.
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
                Benefits of Our Furnace Services
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

      {/* Winter Safety */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Don't Get Caught in the Cold
            </h2>
            <p className="text-lg text-gray-600">
              Pennsylvania winters can be harsh. Make sure your furnace is ready with our 
              comprehensive heating services and reliable repair availability.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="bg-tomRed/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-tomRed">40+</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Years Experience</h3>
              <p className="text-gray-600">Trusted expertise when you need it most</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="bg-tomRed/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-tomRed">✓</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Safety Inspections</h3>
              <p className="text-gray-600">Comprehensive safety checks and carbon monoxide testing</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="bg-tomRed/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-tomRed">$</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Energy Savings</h3>
              <p className="text-gray-600">High-efficiency systems reduce monthly heating costs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service CTA */}
      <section className="bg-tomRed py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Furnace Not Working? We're Here to Help!
          </h2>
          <p className="text-xl text-red-100 mb-6">
            Don't wait when your furnace breaks down. Call for professional service.
          </p>
          <a 
            href="tel:814-885-2440"
            className="bg-white text-tomRed hover:bg-gray-100 px-8 py-4 rounded-lg font-bold text-lg transition-colors inline-flex items-center"
          >
            <Phone className="mr-2 h-5 w-5" />
            Call Us: (814) 885-2440
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
            <Link href="/hvac-services/ductwork" className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow group">
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-tomRed transition-colors">
                Ductwork Services
              </h3>
              <p className="text-gray-600">Duct installation, repair, and optimization</p>
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