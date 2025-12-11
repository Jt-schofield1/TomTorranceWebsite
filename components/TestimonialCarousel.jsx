'use client'

import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

export default function TestimonialCarousel({ testimonials, autoPlay = true, autoPlayDelay = 5000 }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Auto-play functionality
  useEffect(() => {
    if (!autoPlay || testimonials.length <= 1) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      )
    }, autoPlayDelay)

    return () => clearInterval(interval)
  }, [autoPlay, autoPlayDelay, testimonials.length])

  const goToSlide = (index) => {
    setCurrentIndex(index)
  }

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)
  }

  const goToNext = () => {
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)
  }

  if (!testimonials || testimonials.length === 0) {
    return null
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <div className="relative">
      {/* Testimonial Content */}
      <div className="card max-w-4xl mx-auto text-center">
        {/* Stars */}
        <div className="flex justify-center mb-4">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className="w-5 h-5 text-yellow-400 fill-current"
            />
          ))}
        </div>

        {/* Quote */}
        <blockquote className="text-lg md:text-xl text-darkGray mb-6 leading-relaxed">
          <span className="text-4xl text-accentRed leading-none">"</span>
          {currentTestimonial.text}
          <span className="text-4xl text-accentRed leading-none">"</span>
        </blockquote>

        {/* Title */}
        {currentTestimonial.title && (
          <h4 className="text-lg font-montserrat font-semibold text-darkGray mb-2">
            {currentTestimonial.title}
          </h4>
        )}

        {/* Author */}
        <cite className="text-accentRed font-medium not-italic">
          - {currentTestimonial.name}
        </cite>
      </div>

      {/* Navigation Arrows */}
      {testimonials.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 p-2 rounded-full bg-white shadow-lg hover:bg-lightGray transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 text-darkGray" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 p-2 rounded-full bg-white shadow-lg hover:bg-lightGray transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 text-darkGray" />
          </button>
        </>
      )}

      {/* Pagination Dots */}
      {testimonials.length > 1 && (
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex 
                  ? 'bg-accentRed' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}

// Section wrapper for testimonials
export function TestimonialsSection({ testimonials, title = "Hear From Our Happy Clients", className = "" }) {
  return (
    <section className={`section-padding bg-lightGray ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-4">
            {title}
          </h2>
        </div>
        
        <TestimonialCarousel testimonials={testimonials} />
        
        <div className="text-center mt-8">
          <a href="/reviews" className="btn-secondary">
            View All Reviews
          </a>
        </div>
      </div>
    </section>
  )
} 