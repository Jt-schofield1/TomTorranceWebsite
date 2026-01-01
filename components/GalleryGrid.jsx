'use client'

import { useState } from 'react'
import Image from 'next/image'
import { X } from 'lucide-react'

const galleryImages = [
  {
    id: 1,
    src: '/tempstar-furnace.png',
    alt: 'Tempstar High-Efficiency Gas Furnace',
    wide: false
  },
  {
    id: 2,
    src: '/OIP.jpg',
    alt: 'Furnace Maintenance Service',
    wide: false
  },
  {
    id: 3,
    src: '/tempstar-products.png',
    alt: 'Tempstar Heating and Cooling Products Lineup',
    wide: true // This is a wide panoramic image
  },
  {
    id: 4,
    src: '/tempstar-ac-unit.png',
    alt: 'Tempstar SmartComfort Air Conditioner Unit',
    wide: false
  },
  {
    id: 5,
    src: '/truck.jpeg',
    alt: 'Tom Torrance Service Truck',
    wide: false
  },
  {
    id: 6,
    src: '/maint.png',
    alt: 'HVAC Equipment',
    wide: false
  }
]

function Lightbox({ image, onClose }) {
  if (!image) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
      <div className="relative max-w-4xl max-h-full">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
          aria-label="Close lightbox"
        >
          <X className="w-8 h-8" />
        </button>
        <Image
          src={image.src}
          alt={image.alt}
          width={800}
          height={600}
          className="max-w-full max-h-full object-contain"
        />
      </div>
    </div>
  )
}

export function GalleryGrid() {
  const [selectedImage, setSelectedImage] = useState(null)

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
      {galleryImages.map((image) => (
        <div
          key={image.id}
          className={`relative cursor-pointer group overflow-hidden rounded-lg ${
            image.id === 5 ? 'bg-gray-100' : ''
          } ${
            image.wide 
              ? 'col-span-2 aspect-[2/1] md:col-span-2 md:aspect-[3/1]' 
              : 'aspect-square'
          }`}
          onClick={() => setSelectedImage(image)}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className={`transition-transform duration-300 group-hover:scale-105 ${
              image.id === 5 || image.wide ? 'object-contain' : 'object-cover'
            }`}
          />
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
        </div>
      ))}
      
      <Lightbox 
        image={selectedImage} 
        onClose={() => setSelectedImage(null)} 
      />
    </div>
  )
}

export function GallerySection() {
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-4">
            View Our Recent Work
          </h2>
          <p className="text-lg text-darkGray max-w-2xl mx-auto">
            See examples of our professional HVAC installations and service work throughout Erie County.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <GalleryGrid />
        </div>
      </div>
    </section>
  )
}
