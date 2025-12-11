'use client'

import { Star, ExternalLink } from 'lucide-react'

export default function ReviewForm() {
  const handleGoogleReviewClick = () => {
    window.open('https://g.co/kgs/8sHTRgw', '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="card max-w-2xl mx-auto text-center">
      <div className="mb-6">
        <div className="flex justify-center mb-4">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              className="w-8 h-8 text-yellow-400 fill-current mx-1"
            />
          ))}
        </div>
        <h3 className="text-2xl font-semibold text-darkGray mb-4">
          Leave a Google Review
        </h3>
        <p className="text-lg text-gray-600 mb-6">
          Help other customers in Erie County find reliable HVAC services! 
          Your honest review on Google helps our local business grow and helps 
          neighbors find trusted heating and cooling experts.
        </p>
      </div>

      <div className="space-y-4">
        <button
          onClick={handleGoogleReviewClick}
          className="btn-primary w-full flex items-center justify-center space-x-2 text-lg py-4"
        >
          <span>Write a Google Review</span>
          <ExternalLink className="w-5 h-5" />
        </button>
        
        <p className="text-sm text-gray-500">
          You'll be redirected to our Google Business page where you can leave your review
        </p>
      </div>

      {/* $10 Off Reminder */}
      <div className="mt-6 bg-gradient-to-r from-accentRed to-tomRed rounded-lg p-4 text-white text-center">
        <p className="font-semibold text-lg">
          ⭐ Don't forget: Get <span className="text-yellow-300 font-bold">$10 OFF</span> your next Clean & Check! ⭐
        </p>
        <p className="text-sm text-white/80 mt-1">
          Just mention your 5-star review when you schedule your appointment.
        </p>
      </div>

      <div className="mt-6 pt-6 border-t border-gray-200">
        <h4 className="font-semibold text-darkGray mb-3">Why Google Reviews Matter:</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
          <div className="flex items-start space-x-2">
            <span className="text-tomRed font-bold">•</span>
            <span>Helps local customers find us</span>
          </div>
          <div className="flex items-start space-x-2">
            <span className="text-tomRed font-bold">•</span>
            <span>Builds trust in our community</span>
          </div>
          <div className="flex items-start space-x-2">
            <span className="text-tomRed font-bold">•</span>
            <span>Shows our commitment to quality</span>
          </div>
          <div className="flex items-start space-x-2">
            <span className="text-tomRed font-bold">•</span>
            <span>Takes less than 2 minutes</span>
          </div>
        </div>
      </div>
    </div>
  )
} 