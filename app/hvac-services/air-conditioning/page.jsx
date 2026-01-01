import { hvacServicesContent, siteConfig } from '@/lib/content'
import { Thermometer, CheckCircle, Phone } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Air Conditioning Installation & Repair | Tom Torrance Heating & Cooling',
  description: 'Expert AC installation, repair, and maintenance services in Erie County, PA. Energy-efficient systems and preventive maintenance.',
  openGraph: {
    title: 'Air Conditioning Installation & Repair | Tom Torrance Heating & Cooling',
    description: 'Expert AC installation, repair, and maintenance services in Erie County, PA. Energy-efficient systems and preventive maintenance.',
    type: 'website',
  },
}

export default function AirConditioningPage() {
  const service = hvacServicesContent.services.find(s => s.slug === 'air-conditioning')

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-torranceBlue to-torranceBlue/80 text-white py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/10 p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
              <Thermometer className="h-10 w-10 text-white" />
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
                Our Air Conditioning Services
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Stay cool and comfortable all summer long with our professional air conditioning services. 
                We specialize in energy-efficient AC systems that reduce your utility bills while keeping 
                your home at the perfect temperature.
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
                Why Choose Our AC Services?
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

      {/* AC Units Showcase */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Professional AC Installation & Service
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our certified technicians work with top-quality air conditioning units from leading manufacturers. 
                Whether you need a new installation, routine maintenance, or repair, we ensure your 
                system operates at peak efficiency.
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-tomRed mr-3" />
                  <span className="text-gray-700">Energy-efficient systems that reduce utility costs</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-tomRed mr-3" />
                  <span className="text-gray-700">Professional installation and maintenance</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-tomRed mr-3" />
                  <span className="text-gray-700">Reliable repair services</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/acUnits.jpg"
                alt="Professional AC units installation by Tom Torrance Heating & Cooling"
                width={600}
                height={400}
                className="rounded-lg shadow-lg object-cover w-full h-[400px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Our AC Service Process
            </h2>
            <p className="text-lg text-gray-600">
              From initial consultation to final testing, we ensure your air conditioning system 
              is installed or repaired to the highest standards.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-tomRed/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-tomRed">1</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Assessment</h3>
              <p className="text-gray-600">We evaluate your cooling needs and existing system</p>
            </div>
            <div className="text-center">
              <div className="bg-tomRed/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-tomRed">2</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Recommendation</h3>
              <p className="text-gray-600">We recommend the best solution for your home and budget</p>
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

      {/* Service CTA */}
      <section className="bg-tomRed py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            AC Not Working? We're Here to Help!
          </h2>
          <p className="text-xl text-red-100 mb-6">
            Professional air conditioning repair services throughout Erie County
          </p>
          <a 
            href={`tel:${siteConfig.phone}`}
            className="bg-white text-tomRed hover:bg-gray-100 px-8 py-4 rounded-lg font-bold text-lg transition-colors inline-flex items-center"
          >
            <Phone className="mr-2 h-5 w-5" />
            Call Us: {siteConfig.phone}
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
            <Link href="/hvac-services/furnace-installation-repair" className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow group">
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-tomRed transition-colors">
                Furnace Services
              </h3>
              <p className="text-gray-600">Professional furnace installation, repair, and maintenance</p>
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