'use client'

import { useEffect } from 'react'
import { CheckCircle, XCircle, X } from 'lucide-react'

export default function Notification({ 
  isVisible, 
  onClose, 
  type = 'success', 
  title, 
  message,
  autoClose = true,
  duration = 5000 
}) {
  useEffect(() => {
    if (isVisible && autoClose) {
      const timer = setTimeout(() => {
        onClose()
      }, duration)

      return () => clearTimeout(timer)
    }
  }, [isVisible, autoClose, duration, onClose])

  if (!isVisible) return null

  const isSuccess = type === 'success'
  const bgColor = isSuccess ? 'bg-green-50' : 'bg-red-50'
  const borderColor = isSuccess ? 'border-green-200' : 'border-red-200'
  const textColor = isSuccess ? 'text-green-800' : 'text-red-800'
  const iconColor = isSuccess ? 'text-green-600' : 'text-red-600'

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        {/* Modal */}
        <div 
          className={`max-w-md w-full ${bgColor} ${borderColor} border rounded-lg shadow-xl transform transition-all duration-300 scale-100`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-6">
            {/* Header with icon and close button */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center">
                {isSuccess ? (
                  <CheckCircle className={`w-6 h-6 ${iconColor} mr-3 flex-shrink-0`} />
                ) : (
                  <XCircle className={`w-6 h-6 ${iconColor} mr-3 flex-shrink-0`} />
                )}
                <h3 className={`text-lg font-montserrat font-semibold ${textColor}`}>
                  {title}
                </h3>
              </div>
              <button
                onClick={onClose}
                className={`${textColor} hover:opacity-70 transition-opacity ml-4 flex-shrink-0`}
                aria-label="Close notification"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            {/* Message */}
            <p className={`${textColor} text-sm leading-relaxed mb-6`}>
              {message}
            </p>
            
            {/* Action button */}
            <div className="flex justify-end">
              <button
                onClick={onClose}
                className={`${isSuccess ? 'bg-green-600 hover:bg-green-700' : 'bg-red-600 hover:bg-red-700'} text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200`}
              >
                {isSuccess ? 'Great!' : 'Got it'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
