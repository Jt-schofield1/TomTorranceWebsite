import { testimonials, siteConfig } from '../../lib/content'
import { Star, User } from 'lucide-react'
import ReviewForm from './ReviewForm'

export const metadata = {
  title: 'Reviews - Tom Torrance Heating & Cooling',
  description: 'Read customer reviews and testimonials for Tom Torrance Heating & Cooling. See why we\'re Erie County\'s most trusted HVAC provider.',
  openGraph: {
    title: 'Reviews - Tom Torrance Heating & Cooling',
    description: 'Read customer reviews and testimonials for Tom Torrance Heating & Cooling. See why we\'re Erie County\'s most trusted HVAC provider.',
    url: 'https://tomtorranceheatingandcooling.com/reviews',
  },
}

export default function ReviewsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-torranceBlue to-torranceBlue/80 text-white py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Customer Reviews
            </h1>
            <p className="text-xl leading-relaxed text-blue-50">
              See what our customers say about Tom Torrance Heating & Cooling. 
              Your satisfaction is our priority, and we're proud to serve Erie County.
            </p>
          </div>
        </div>
      </section>

      {/* $10 Off Promotion Banner */}
      <section className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 py-6">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 border-4 border-dashed border-accentRed">
              <div className="flex items-center justify-center mb-3">
                <span className="text-4xl">🎉</span>
                <h3 className="text-2xl md:text-3xl font-montserrat font-bold text-accentRed mx-4">
                  SPECIAL OFFER!
                </h3>
                <span className="text-4xl">🎉</span>
              </div>
              <p className="text-xl md:text-2xl font-bold text-darkGray mb-2">
                Leave us a 5-Star Review & Get <span className="text-accentRed">$10 OFF</span>
              </p>
              <p className="text-lg text-darkGray mb-4">
                your next Clean & Check service!
              </p>
              <p className="text-sm text-gray-500 italic">
                * Limited to one discount per household. Mention your review when scheduling.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Add Review Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-center mb-8">
              Share Your Experience
            </h2>
            <p className="text-lg text-darkGray text-center mb-12">
              We'd love to hear about your experience with Tom Torrance Heating & Cooling. 
              Your feedback helps us continue to provide excellent service to our community.
            </p>

            <ReviewForm />
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="section-padding bg-lightGray">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-center mb-12">
              What Our Customers Say
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="card">
                  {/* Stars */}
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>

                  {/* Title */}
                  <h3 className="font-semibold text-darkGray mb-3">
                    {testimonial.title}
                  </h3>

                  {/* Review Text */}
                  <p className="text-gray-600 mb-4 italic">
                    "{testimonial.text}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center">
                    <User className="w-8 h-8 text-gray-400 mr-3" />
                    <div>
                      <p className="font-semibold text-darkGray">{testimonial.name}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* External Review Links */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-8">
              Find Us Online
            </h2>
            <p className="text-lg text-darkGray mb-12">
              Read more reviews and share your experience on these platforms:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-lightGray p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Google Reviews</h3>
                <p className="text-gray-600 mb-4">
                  See our Google Business reviews and leave your feedback.
                </p>
                <a 
                  href="https://www.google.com/search?q=Tom+Torrance+Heating+%26+Cooling+reviews"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  View Reviews
                </a>
              </div>
              
              <div className="bg-lightGray p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Yelp Reviews</h3>
                <p className="text-gray-600 mb-4">
                  Read our Yelp reviews and share your experience with other customers.
                </p>
                <a 
                  href="https://www.yelp.com/biz/tom-torrance-heating-and-cooling-and-refrigeration-waterford-3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  View Yelp Reviews
                </a>
              </div>
              
              <div className="bg-lightGray p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Better Business Bureau</h3>
                <p className="text-gray-600 mb-4">
                  Check our BBB rating and customer feedback.
                </p>
                <a 
                  href="https://www.bbb.org/us/pa/waterford/profile/heating-and-air-conditioning/tom-torrance-heating-cooling-and-refrigeration-0141-71036869/#sealclick"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  View BBB Profile
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-accentRed text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-4">
            Ready to Experience Our Service?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join our satisfied customers in Erie County. Call us today for reliable HVAC services.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a href={`tel:${siteConfig.phone}`} className="btn-primary bg-white text-accentRed hover:bg-lightGray">
              Call {siteConfig.phone}
            </a>
            <a href="/contact-us" className="btn-secondary border-white text-white hover:bg-white hover:text-accentRed">
              Schedule Service
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

 