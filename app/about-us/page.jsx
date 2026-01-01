import Link from 'next/link'
import ContactForm from '../../components/ContactForm'
import { aboutUsContent, homePageContent, siteConfig } from '../../lib/content'

export const metadata = {
  title: 'About Us - Tom Torrance Heating & Cooling',
  description: aboutUsContent.description.slice(0, 160),
  openGraph: {
    title: 'About Us - Tom Torrance Heating & Cooling',
    description: aboutUsContent.description.slice(0, 160),
    url: 'https://tomtorranceheatingandcooling.com/about-us',
  },
}

export default function AboutUsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-r from-darkNavy to-torranceBlue text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-montserrat font-bold mb-6">
            About Us
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Your search for an honest and reliable HVAC provider ends here
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-6">
                {siteConfig.yearsExperience} of Trusted Service
              </h2>
              <p className="text-lg text-darkGray mb-6 leading-relaxed">
                {aboutUsContent.description}
              </p>
              
              <div className="mb-8">
                <h3 className="text-xl font-montserrat font-semibold mb-4 text-darkGray">
                  Get immediate attention by calling:
                </h3>
                <a 
                  href={`tel:${siteConfig.phone}`}
                  className="text-2xl font-montserrat font-bold text-accentRed hover:text-tomRed transition-colors"
                >
                  {siteConfig.phone}
                </a>
              </div>

              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link href="/contact-us" className="btn-primary">
                  Get Free Estimate
                </Link>
                <Link href="/reviews" className="btn-secondary">
                  Read Our Reviews
                </Link>
              </div>
            </div>

            <div>
              <ContactForm 
                title="Contact Us Today"
                subtitle="Ready to Help With Your HVAC Needs"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Credentials Section */}
      <section className="section-padding bg-lightGray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-4">
              What Sets Us Apart
            </h2>
            <p className="text-lg text-darkGray max-w-3xl mx-auto">
              Our commitment to excellence and customer satisfaction has made us Erie County's most trusted HVAC provider
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {homePageContent.credentials.map((credential, index) => (
              <div key={index} className="card text-center">
                <div className="w-20 h-20 bg-accentRed rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-3xl font-bold">✓</span>
                </div>
                <h3 className="text-lg font-montserrat font-semibold text-darkGray mb-2">
                  {credential}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Details */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-8">
              Decades of Excellence in HVAC Services
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="text-4xl font-montserrat font-bold text-accentRed mb-2">
                  40+
                </div>
                <p className="text-lg text-darkGray">Years of Experience</p>
              </div>
              
              <div className="text-center">
                <div className="text-4xl font-montserrat font-bold text-accentRed mb-2">
                  1000+
                </div>
                <p className="text-lg text-darkGray">Jobs Completed</p>
              </div>
              
              <div className="text-center">
                <div className="text-4xl font-montserrat font-bold text-accentRed mb-2">
                  5★
                </div>
                <p className="text-lg text-darkGray">Customer Rating</p>
              </div>
            </div>

            <p className="text-lg text-darkGray leading-relaxed mb-8">
              Since opening our doors in {siteConfig.yearsFounded}, Tom Torrance Heating & Cooling has remained committed to providing 
              the highest level of service possible. As a family-owned and veteran-operated business, we understand the importance 
              of trust, reliability, and honest communication with our customers.
            </p>

            <p className="text-lg text-darkGray leading-relaxed">
              Our extensive training and industry certifications ensure that every technician who enters your home is equipped 
              with the knowledge and skills needed to provide safe, effective, and lasting solutions for all your HVAC and 
              water heater needs.
            </p>
          </div>
        </div>
      </section>

      {/* Service Areas Preview */}
      <section className="section-padding bg-lightGray">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-8">
            Proudly Serving Erie County
          </h2>
          <p className="text-lg text-darkGray mb-8 max-w-3xl mx-auto">
            We're honored to serve communities throughout Erie County and surrounding areas with professional HVAC services.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-8 max-w-4xl mx-auto">
            {['Erie', 'Waterford', 'Edinboro', 'Fairview', 'Girard', 'Corry', 'Union City', 'Lake City'].map((city) => (
              <div key={city} className="bg-white rounded-lg py-3 px-4 shadow-sm">
                <span className="text-darkGray font-medium">{city}</span>
              </div>
            ))}
          </div>
          
          <Link href="/service-areas" className="btn-secondary">
            View All Service Areas
          </Link>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-accentRed text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-4">
            Ready to Experience the Tom Torrance Difference?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Give us a call at {siteConfig.phone} for immediate attention or fill out our contact form below
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a href={`tel:${siteConfig.phone}`} className="btn-primary bg-white text-accentRed hover:bg-lightGray">
              Call Now
            </a>
            <Link href="/contact-us" className="btn-secondary border-white text-white hover:bg-white hover:text-accentRed">
              Get Free Estimate
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
} 