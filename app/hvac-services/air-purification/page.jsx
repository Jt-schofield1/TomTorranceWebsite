import { hvacServicesContent } from '@/lib/content'
import { Shield, CheckCircle, Phone } from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: 'Air Purification Systems | Tom Torrance Heating & Cooling',
  description: 'Advanced air purification solutions in Erie County, PA. Improve indoor air quality with whole-home air purifiers, UV lights, and HEPA systems.',
  openGraph: {
    title: 'Air Purification Systems | Tom Torrance Heating & Cooling',
    description: 'Advanced air purification solutions in Erie County, PA. Improve indoor air quality with whole-home air purifiers, UV lights, and HEPA systems.',
    type: 'website',
  },
}

export default function AirPurificationPage() {
  const service = hvacServicesContent.services.find(s => s.slug === 'air-purification')

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-torranceBlue to-torranceBlue/80 text-white py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/10 p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
              <Shield className="h-10 w-10 text-white" />
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
                Breathe Cleaner, Healthier Air
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Indoor air can be up to 5 times more polluted than outdoor air. Our advanced air 
                purification systems remove harmful pollutants, allergens, and contaminants, 
                creating a healthier environment for you and your family.
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
                Health Benefits
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

      {/* Air Quality Concerns */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Common Indoor Air Pollutants
            </h2>
            <p className="text-lg text-gray-600">
              Our air purification systems target these common indoor air quality issues 
              to protect your family's health.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="text-4xl mb-4">🤧</div>
              <h3 className="font-semibold mb-2">Allergens</h3>
              <p className="text-gray-600 text-sm">Pollen, dust mites, pet dander</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="text-4xl mb-4">🦠</div>
              <h3 className="font-semibold mb-2">Germs & Viruses</h3>
              <p className="text-gray-600 text-sm">Bacteria, viruses, mold spores</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="text-4xl mb-4">💨</div>
              <h3 className="font-semibold mb-2">Odors</h3>
              <p className="text-gray-600 text-sm">Cooking, pets, smoke odors</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="text-4xl mb-4">⚗️</div>
              <h3 className="font-semibold mb-2">Chemicals</h3>
              <p className="text-gray-600 text-sm">VOCs, cleaning products</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Types */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Air Purification Technologies
            </h2>
            <p className="text-lg text-gray-600">
              We offer multiple air purification technologies to address specific air quality concerns.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">HEPA Filtration</h3>
              <p className="text-gray-600 mb-4">
                High-Efficiency Particulate Air filters remove 99.97% of particles 0.3 microns or larger.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Removes fine dust and pollen</li>
                <li>• Captures pet dander</li>
                <li>• Filters smoke particles</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">UV Light Systems</h3>
              <p className="text-gray-600 mb-4">
                Ultraviolet light destroys bacteria, viruses, and mold at the cellular level.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Kills airborne pathogens</li>
                <li>• Prevents mold growth</li>
                <li>• Chemical-free sanitization</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Activated Carbon</h3>
              <p className="text-gray-600 mb-4">
                Absorbs odors, gases, and volatile organic compounds (VOCs).
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Eliminates household odors</li>
                <li>• Removes chemical vapors</li>
                <li>• Absorbs cooking smells</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Health Benefits CTA */}
      <section className="bg-tomRed py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Improve Your Family's Health with Cleaner Air
          </h2>
          <p className="text-xl text-red-100 mb-6">
            Breathe easier with professional air purification systems installed by our experts
          </p>
          <a 
            href="tel:814-885-2440"
            className="bg-white text-tomRed hover:bg-gray-100 px-8 py-4 rounded-lg font-bold text-lg transition-colors inline-flex items-center"
          >
            <Phone className="mr-2 h-5 w-5" />
            Call for Clean Air: (814) 885-2440
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
            <Link href="/hvac-services/ductwork" className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow group">
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-tomRed transition-colors">
                Ductwork Services
              </h3>
              <p className="text-gray-600">Duct installation, repair, cleaning, and optimization</p>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
} 