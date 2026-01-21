import ContactForm from '../../components/ContactForm'
import { testimonials, siteConfig, businessHours } from '../../lib/content'
import { Phone, MapPin, Clock } from 'lucide-react'

export const metadata = {
  title: 'Contact Us | Schedule HVAC Service Erie PA | (814) 825-7066',
  description: 'Contact Tom Torrance Heating & Cooling for fast HVAC service in Erie County. Free estimates! Call (814) 825-7066 or schedule online. 707 Moore Rd, Waterford PA.',
  alternates: {
    canonical: 'https://tomtorranceheatingcooling.com/contact-us',
  },
  openGraph: {
    title: 'Contact Tom Torrance Heating & Cooling | Erie PA',
    description: 'Schedule HVAC service in Erie County. Free estimates! Call (814) 825-7066.',
    url: 'https://tomtorranceheatingcooling.com/contact-us',
  },
}

export default function ContactUsPage() {
  // Featured testimonials for contact page
  const featuredTestimonials = testimonials.slice(0, 3)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-r from-darkNavy to-torranceBlue text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-montserrat font-bold mb-6">
            Contact Us
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Ready to get started? Contact us today for fast, reliable HVAC services in Erie County
          </p>
        </div>
      </section>

      {/* Contact Information & Form Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <ContactForm 
                title="Get Your Free Estimate"
                subtitle="We're Ready to Help With Your HVAC Needs"
              />
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-montserrat font-bold mb-8 text-darkGray">
                Get In Touch Today
              </h2>
              
              {/* Phone */}
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 bg-accentRed rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-montserrat font-semibold text-darkGray mb-1">
                    Call Us Today
                  </h3>
                  <a 
                    href={`tel:${siteConfig.phone}`}
                    className="text-2xl font-montserrat font-bold text-accentRed hover:text-tomRed transition-colors"
                  >
                    {siteConfig.phone}
                  </a>
                  <p className="text-darkGray mt-1">We're here to help with your HVAC needs</p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 bg-accentRed rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-montserrat font-semibold text-darkGray mb-1">
                    Our Location
                  </h3>
                  <address className="text-darkGray not-italic">
                    {siteConfig.address.street}<br />
                    {siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.zip}
                  </address>
                  <a 
                    href={`https://maps.google.com/?q=${siteConfig.address.street},+${siteConfig.address.city},+${siteConfig.address.state}+${siteConfig.address.zip}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accentRed hover:text-tomRed transition-colors mt-2 inline-block"
                  >
                    Get Directions →
                  </a>
                </div>
              </div>

              {/* Service Hours */}
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 bg-accentRed rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-montserrat font-semibold text-darkGray mb-1">
                    Service Hours
                  </h3>
                  <div className="text-darkGray">
                    <p><span className="font-medium">Mon - Fri:</span> {businessHours.weekdays}</p>
                    <p><span className="font-medium">Saturday:</span> {businessHours.saturday}</p>
                    <p><span className="font-medium">Sunday:</span> {businessHours.sunday}</p>
                  </div>
                </div>
              </div>

              {/* License */}
              <div className="bg-lightGray rounded-lg p-6 mt-8">
                <h3 className="text-lg font-montserrat font-semibold text-darkGray mb-2">
                  Licensed & Insured
                </h3>
                <p className="text-darkGray">
                  PA License #: {siteConfig.license}<br />
                  Fully licensed and insured for your protection
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="bg-lightGray py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="w-20 h-20 bg-accentRed rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl font-montserrat font-bold mb-4 text-darkGray">
                Based in Waterford, PA
              </h2>
              <p className="text-lg text-darkGray mb-6">
                Proudly serving Erie County and surrounding areas from our Waterford location.
              </p>
              <address className="text-darkGray not-italic text-lg mb-6">
                <strong>{siteConfig.address.street}</strong><br />
                {siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.zip}
              </address>
              <a 
                href={`https://maps.google.com/?q=${siteConfig.address.street},+${siteConfig.address.city},+${siteConfig.address.state}+${siteConfig.address.zip}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Testimonials */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-montserrat font-bold text-center mb-12 text-darkGray">
            What Our Customers Say
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {featuredTestimonials.map((testimonial) => (
              <div key={testimonial.id} className="card text-center">
                {/* Stars */}
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>
                
                {/* Quote */}
                <blockquote className="text-darkGray mb-4 leading-relaxed">
                  "{testimonial.text.length > 150 ? testimonial.text.slice(0, 150) + '...' : testimonial.text}"
                </blockquote>
                
                {/* Author */}
                <cite className="text-accentRed font-medium not-italic">
                  - {testimonial.name}
                </cite>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <a href="/reviews" className="btn-secondary">
              Read More Reviews
            </a>
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
            Contact us today for reliable HVAC and water heater services. We're here to help with all your comfort needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a href={`tel:${siteConfig.phone}`} className="btn-primary bg-white text-accentRed hover:bg-lightGray text-lg px-8 py-4">
              Call Us: {siteConfig.phone}
            </a>
          </div>
        </div>
      </section>
    </div>
  )
} 