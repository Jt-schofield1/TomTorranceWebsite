import Link from 'next/link'
import ContactForm from '../../components/ContactForm'
import { serviceAreas, siteConfig, businessHours } from '../../lib/content'
import { MapPin, Phone, Clock } from 'lucide-react'

export const metadata = {
  title: 'Service Areas - Tom Torrance Heating & Cooling',
  description: 'Tom Torrance Heating & Cooling proudly serves Erie County and surrounding areas including Erie, Waterford, Edinboro, Fairview, Girard, and more.',
  openGraph: {
    title: 'Service Areas - Tom Torrance Heating & Cooling',
    description: 'Tom Torrance Heating & Cooling proudly serves Erie County and surrounding areas including Erie, Waterford, Edinboro, Fairview, Girard, and more.',
    url: 'https://tomtorranceheatingandcooling.com/service-areas',
  },
}

export default function ServiceAreasPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-r from-darkNavy to-torranceBlue text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-montserrat font-bold mb-6">
            Service Areas
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Proudly serving Erie County and surrounding areas with professional HVAC services
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-6">
              We Serve These Communities
            </h2>
            <p className="text-lg text-darkGray leading-relaxed">
              Tom Torrance Heating & Cooling is proud to provide reliable HVAC and water heater services 
              throughout Erie County and the surrounding areas. Our experienced technicians are familiar 
              with the unique climate challenges of the region and are committed to keeping your home 
              comfortable year-round.
            </p>
          </div>

          {/* Service Areas Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
            {serviceAreas.map((area, index) => (
              <div 
                key={index} 
                className="card text-center hover:shadow-lg transition-shadow duration-300"
              >
                <MapPin className="w-8 h-8 text-accentRed mx-auto mb-3" />
                <h3 className="text-lg font-montserrat font-semibold text-darkGray">
                  {area}
                </h3>
              </div>
            ))}
          </div>

          {/* Service Coverage Information */}
          <div className="bg-lightGray rounded-lg p-8 mb-12">
            <h3 className="text-2xl font-montserrat font-bold text-center mb-6 text-darkGray">
              Don't See Your Area Listed?
            </h3>
            <p className="text-lg text-darkGray text-center mb-6">
              We may still be able to serve you! Our service area continues to expand, and we often 
              provide services to communities beyond our core coverage area. Give us a call to check 
              if we can help with your HVAC needs.
            </p>
            <div className="text-center">
              <a 
                href={`tel:${siteConfig.phone}`}
                className="btn-primary mr-4"
              >
                Call {siteConfig.phone}
              </a>
              <Link href="/contact-us" className="btn-secondary">
                Contact Us Online
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Local Section */}
      <section className="section-padding bg-lightGray">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-center mb-12">
              Why Choose a Local HVAC Company?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="card">
                <h3 className="text-xl font-montserrat font-semibold mb-4 text-darkGray">
                  Fast Response Times
                </h3>
                <p className="text-darkGray">
                  Being locally based means we can reach you quickly when you need 
                  service. No waiting for technicians from distant locations.
                </p>
              </div>
              
              <div className="card">
                <h3 className="text-xl font-montserrat font-semibold mb-4 text-darkGray">
                  Local Climate Knowledge
                </h3>
                <p className="text-darkGray">
                  We understand Erie County's unique weather patterns and how they affect your 
                  HVAC systems, allowing us to provide better recommendations and service.
                </p>
              </div>
              
              <div className="card">
                <h3 className="text-xl font-montserrat font-semibold mb-4 text-darkGray">
                  Community Investment
                </h3>
                <p className="text-darkGray">
                  As a local business, we're invested in our community. Your satisfaction directly 
                  impacts our reputation with your neighbors and friends.
                </p>
              </div>
              
              <div className="card">
                <h3 className="text-xl font-montserrat font-semibold mb-4 text-darkGray">
                  Personal Service
                </h3>
                <p className="text-darkGray">
                  You're not just a number to us. We build lasting relationships with our customers 
                  and provide personalized service tailored to your specific needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-6">
                Ready to Schedule Service?
              </h2>
              <p className="text-lg text-darkGray mb-6 leading-relaxed">
                Whether you need routine maintenance, repairs, or a complete system 
                replacement, Tom Torrance Heating & Cooling is here to help. Contact us today 
                to schedule your service.
              </p>
              
              <div className="flex items-center space-x-4 mb-6">
                <Phone className="w-6 h-6 text-accentRed" />
                <div>
                  <p className="text-darkGray">Call us directly:</p>
                  <a 
                    href={`tel:${siteConfig.phone}`}
                    className="text-xl font-montserrat font-bold text-accentRed hover:text-tomRed transition-colors"
                  >
                    {siteConfig.phone}
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 mb-6">
                <MapPin className="w-6 h-6 text-accentRed" />
                <div>
                  <p className="text-darkGray">Service Area:</p>
                  <p className="font-medium text-darkGray">Erie County & Surrounding Areas</p>
                </div>
              </div>

              {/* Hours of Operation */}
              <div className="flex items-start space-x-4">
                <Clock className="w-6 h-6 text-accentRed mt-1" />
                <div>
                  <p className="text-darkGray font-medium mb-2">Hours of Operation:</p>
                  <div className="text-darkGray space-y-1">
                    <p><span className="font-medium">Mon - Fri:</span> {businessHours.weekdays}</p>
                    <p><span className="font-medium">Saturday:</span> {businessHours.saturday}</p>
                    <p><span className="font-medium">Sunday:</span> {businessHours.sunday}</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <ContactForm 
                title="Schedule Your Service"
                subtitle="Get Your Free Estimate Today"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="section-padding bg-accentRed text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today for reliable HVAC services throughout Erie County and surrounding areas.
          </p>
          <a href={`tel:${siteConfig.phone}`} className="btn-primary bg-white text-accentRed hover:bg-lightGray text-lg px-8 py-4">
            Call Us: {siteConfig.phone}
          </a>
        </div>
      </section>
    </div>
  )
} 