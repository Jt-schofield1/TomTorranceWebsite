import Image from 'next/image'
import Link from 'next/link'
import ContactForm from '../components/ContactForm'
import { ServiceCardsGrid } from '../components/ServiceCard'
import { TestimonialsSection } from '../components/TestimonialCarousel'
import { GallerySection } from '../components/GalleryGrid'
import { homePageContent, testimonials, siteConfig } from '../lib/content'

export const metadata = {
  title: 'Home - Tom Torrance Heating & Cooling',
  description: homePageContent.intro.description.slice(0, 160),
  openGraph: {
    title: 'Tom Torrance Heating & Cooling',
    description: homePageContent.intro.description.slice(0, 160),
    url: 'https://tomtorranceheatingandcooling.com',
  },
}

export default function HomePage() {
  // Define services for the home page
  const featuredServices = [
    {
      title: 'AC Installation',
      description: 'Professional AC installation services for your home or business with energy-efficient systems.',
      href: '/hvac-services/air-conditioning'
    },
    {
      title: 'Furnace Installation',
      description: 'Expert furnace installation with top-rated, high-efficiency heating systems.',
      href: '/hvac-services/furnace-installation-repair'
    },
    {
      title: 'AC Repair',
      description: 'Fast and reliable AC repair services to keep you cool during Erie summers.',
      href: '/hvac-services/air-conditioning'
    },
    {
      title: 'Furnace Repair',
      description: 'Emergency furnace repair services to keep you warm all winter long.',
      href: '/hvac-services/furnace-installation-repair'
    },
    {
      title: 'Duct Cleaning',
      description: 'Professional duct cleaning services to improve your indoor air quality.',
      href: '/hvac-services/ductwork'
    },
    {
      title: 'Water Heaters',
      description: 'Complete water heater services including tankless and traditional systems.',
      href: '/water-heater-services'
    },
    {
      title: 'Ductwork Installation',
      description: 'Custom ductwork installation and replacement for optimal HVAC performance.',
      href: '/hvac-services/ductwork'
    },
    {
      title: 'Ductwork Repair',
      description: 'Professional ductwork repair to improve efficiency and reduce energy costs.',
      href: '/hvac-services/ductwork'
    },
    {
      title: 'Air Purification',
      description: 'REME HALO® in-duct purifier installations for cleaner, healthier air.',
      href: '/hvac-services/air-purification'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-r from-darkNavy to-torranceBlue text-white pt-24 pb-12 md:pt-20 md:pb-16 lg:pt-0 lg:pb-0">
        {/* Base gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-darkNavy via-torranceBlue to-darkNavy"></div>
        
        {/* Background Image with subtle texture */}
        <div className="absolute inset-0 z-10">
          <Image
            src="/backgrounnd.png"
            alt=""
            fill
            className="object-cover opacity-15 mix-blend-soft-light"
            priority
          />
        </div>
        
        <div className="relative z-20 container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Hero Content */}
            <div className="text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-montserrat font-bold mb-4 sm:mb-6 text-shadow uppercase leading-tight">
                {homePageContent.hero.title}
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl mb-4 sm:mb-6 text-shadow">
                {homePageContent.hero.subtitle}
              </p>
              <p className="text-base sm:text-lg mb-6 sm:mb-8 text-shadow">
                {homePageContent.hero.tagline}
              </p>
              <div className="flex justify-center lg:justify-start">
                <Link href="/contact-us" className="btn-primary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4">
                  Schedule Service
                </Link>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:block mt-8 lg:mt-0">
              <div className="max-w-lg mx-auto">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* $10 Off Review Promotion Banner */}
      <section className="bg-gradient-to-r from-tomRed to-accentRed py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center text-center md:text-left space-y-2 md:space-y-0 md:space-x-4">
            <div className="flex items-center space-x-2">
              <span className="text-3xl">⭐</span>
              <span className="text-white font-montserrat font-bold text-lg md:text-xl">
                Leave us a 5-Star Review & Get $10 OFF
              </span>
              <span className="text-3xl">⭐</span>
            </div>
            <span className="text-white/90 text-sm md:text-base">
              your next Clean & Check! <span className="text-white/70">(Limited to one per household)</span>
            </span>
            <Link href="/reviews" className="bg-white text-accentRed px-4 py-2 rounded-md font-semibold hover:bg-lightGray transition-colors text-sm">
              Leave a Review
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <ServiceCardsGrid 
        services={featuredServices}
        title={homePageContent.intro.title}
        subtitle={homePageContent.intro.subtitle}
        className="bg-white"
      />

      {/* About Section */}
      <section className="section-padding bg-lightGray">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Image */}
            <div className="relative">
              <Image
                src="/image0.jpeg"
                alt="Tom Torrance working on an AC unit - Your local HVAC expert in Erie County"
                width={600}
                height={750}
                className="rounded-lg shadow-lg object-cover w-full h-[500px]"
              />
              <div className="absolute -bottom-4 -right-4 bg-accentRed text-white py-3 px-6 rounded-lg shadow-lg">
                <span className="font-montserrat font-bold">40+ Years Experience</span>
              </div>
            </div>
            
            {/* Content */}
            <div className="text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-8">
                No Job Is Too Big or Too Small
              </h2>
              <p className="text-lg text-darkGray mb-8 leading-relaxed">
                {homePageContent.intro.description}
              </p>
              <p className="text-lg text-darkGray mb-8 font-medium">
                {homePageContent.hero.cta}
              </p>
              <Link href="/about-us" className="btn-primary">
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-4">
              Work With Your Local Experts
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {homePageContent.credentials.map((credential, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-accentRed rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">✓</span>
                </div>
                <h3 className="text-lg font-montserrat font-semibold text-darkGray">
                  {credential}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seasonal Clean & Check Promotions */}
      <section className="section-padding bg-gradient-to-br from-darkNavy to-torranceBlue text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-4">
              Seasonal Clean & Check Services
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Keep your HVAC system running efficiently with our seasonal maintenance programs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* AC Clean & Check */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
              <div className="flex items-center justify-center mb-4">
                <span className="text-5xl">❄️</span>
              </div>
              <h3 className="text-2xl font-montserrat font-bold text-center mb-4">
                AC Clean & Check
              </h3>
              <div className="bg-white/20 rounded-lg py-3 px-4 text-center mb-4">
                <span className="font-semibold text-lg">📅 Late April – June 20th</span>
              </div>
              <p className="text-blue-100 text-center mb-6">
                Get your air conditioning system ready for summer! Our comprehensive AC tune-up ensures peak performance and efficiency during the hot months.
              </p>
              <div className="text-center">
                <Link href="/contact-us" className="bg-white text-torranceBlue px-6 py-3 rounded-md font-semibold hover:bg-lightGray transition-colors inline-block">
                  Schedule AC Check
                </Link>
              </div>
            </div>

            {/* Furnace Clean & Check */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
              <div className="flex items-center justify-center mb-4">
                <span className="text-5xl">🔥</span>
              </div>
              <h3 className="text-2xl font-montserrat font-bold text-center mb-4">
                Furnace Clean & Check
              </h3>
              <div className="bg-white/20 rounded-lg py-3 px-4 text-center mb-4">
                <span className="font-semibold text-lg">📅 October 5th – December 15th</span>
              </div>
              <p className="text-blue-100 text-center mb-6">
                Prepare your furnace for winter! Our thorough inspection and cleaning keeps you warm and safe all season long.
              </p>
              <div className="text-center">
                <Link href="/contact-us" className="bg-white text-torranceBlue px-6 py-3 rounded-md font-semibold hover:bg-lightGray transition-colors inline-block">
                  Schedule Furnace Check
                </Link>
              </div>
            </div>
          </div>

          {/* $10 Off Reminder */}
          <div className="mt-10 text-center">
            <div className="inline-block bg-accentRed/90 rounded-lg py-4 px-8">
              <p className="text-lg font-semibold">
                ⭐ Remember: Leave a 5-Star Review & Get <span className="text-yellow-300 font-bold">$10 OFF</span> your Clean & Check! ⭐
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services List Section */}
      <section className="section-padding bg-lightGray">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-center mb-8">
              Complete HVAC & Water Heater Services
            </h2>
            <p className="text-lg text-darkGray text-center mb-12">
              Equipped with state-of-the-art tools and technology, Tom Torrance Heating & Cooling handles all of your comfort needs.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {homePageContent.services.map((service, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accentRed rounded-full flex-shrink-0"></div>
                  <span className="text-darkGray">{service}</span>
                </div>
              ))}
            </div>
            
            <div className="text-center">
              <Link href="/hvac-services" className="btn-primary mr-4">
                View All HVAC Services
              </Link>
                              <Link href="/water-heater-services" className="btn-secondary">
                Water Heater Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* AC Services Showcase */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <Image
                src="/acUnits.jpg"
                alt="Professional AC installation and repair services in Erie County, PA"
                width={600}
                height={400}
                className="rounded-lg shadow-lg object-cover w-full h-[400px]"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-6">
                Professional AC Installation & Repair
              </h2>
              <p className="text-lg text-darkGray mb-6 leading-relaxed">
                Beat the Erie County heat with our expert air conditioning services. Our licensed technicians 
                specialize in installing and maintaining high-efficiency AC systems that keep you cool while 
                reducing energy costs.
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-accentRed rounded-full mr-3"></div>
                  <span className="text-darkGray">Energy-efficient system installations</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-accentRed rounded-full mr-3"></div>
                  <span className="text-darkGray">24/7 emergency repair services</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-accentRed rounded-full mr-3"></div>
                  <span className="text-darkGray">Preventive maintenance programs</span>
                </div>
              </div>
              <Link href="/hvac-services/air-conditioning" className="btn-primary">
                Learn More About AC Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* REME HALO Section */}
      <section className="section-padding bg-lightGray">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-6">
                REME HALO® In-Duct Purifiers
              </h2>
              <p className="text-lg text-darkGray mb-6 leading-relaxed">
                At Tom Torrance Heating & Cooling, your comfort and safety are our priorities. To help you breathe fresher, cleaner air, we are proud to provide professional REME HALO® in-duct purifier installations. These purifiers are shown to improve the quality of air in your home by reducing harmful pollutants such as bacteria, viruses, odors, and mold spores.
              </p>
              <Link href="/hvac-services/air-purification" className="btn-primary">
                Learn More About Air Purification
              </Link>
            </div>
            <div className="text-center">
              <div className="bg-lightGray rounded-lg p-8">
                <div className="w-32 h-32 bg-accentRed rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-4xl">🌬️</span>
                </div>
                <h3 className="text-xl font-montserrat font-semibold text-darkGray">
                  Cleaner Air for Your Family
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You Can Expect Section */}
      <section className="section-padding bg-lightGray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-4">
              Never Compromising on Quality
            </h2>
            <p className="text-lg text-darkGray max-w-3xl mx-auto">
              Here at Tom Torrance Heating & Cooling, we never cut corners or settle for work that is "good enough" because we care a great deal about your safety and comfort.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-montserrat font-semibold text-center mb-8">
              When you hire Tom Torrance Heating & Cooling, you can expect:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {homePageContent.expectations.map((expectation, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-accentRed rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <span className="text-darkGray text-lg">{expectation}</span>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <p className="text-lg text-darkGray mb-6">
                Let Tom Torrance Heating & Cooling make sure your home or business is taken care of by turning to us for your every HVAC and water heater need. With thousands of jobs handled, we can take care of any repair, replacement, maintenance, or installation service that comes our way!
              </p>
              <Link href="/contact-us" className="btn-primary">
                Get Started Today
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialsSection testimonials={testimonials} />

      {/* Gallery Section */}
      <GallerySection />

      {/* Final CTA Section */}
      <section className="section-padding bg-accentRed text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-4">
            Ready to Schedule Service?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Schedule an HVAC service in Erie by calling {siteConfig.phone} today! We look forward to serving you.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a href={`tel:${siteConfig.phone}`} className="btn-primary bg-white text-accentRed hover:bg-lightGray">
              Call {siteConfig.phone}
            </a>
            <Link href="/contact-us" className="btn-secondary border-white text-white hover:bg-white hover:text-accentRed">
              Schedule Online
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
} 