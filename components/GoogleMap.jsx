'use client'

import { useEffect, useRef } from 'react'
import { siteConfig } from '../lib/content'

export default function GoogleMap() {
  const mapRef = useRef(null)
  const mapInstanceRef = useRef(null)

  useEffect(() => {
    const initMap = () => {
      // Use Google's Geocoding service to get exact coordinates
      const geocoder = new window.google.maps.Geocoder()
      const fullAddress = `${siteConfig.address.street}, ${siteConfig.address.city}, ${siteConfig.address.state} ${siteConfig.address.zip}`

      geocoder.geocode({ address: fullAddress }, (results, status) => {
        if (status === 'OK' && results[0]) {
          const businessLocation = results[0].geometry.location

          // Create map centered on the exact geocoded location
          const map = new window.google.maps.Map(mapRef.current, {
            zoom: 16,
            center: businessLocation,
            styles: [
              // Custom styling to match website theme
              {
                featureType: 'poi',
                elementType: 'labels',
                stylers: [{ visibility: 'off' }]
              }
            ]
          })

          // Create marker at the exact geocoded location
          const marker = new window.google.maps.Marker({
            position: businessLocation,
            map: map,
            title: siteConfig.businessName,
            icon: {
              url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(`
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 2C11.58 2 8 5.58 8 10C8 16 16 30 16 30S24 16 24 10C24 5.58 20.42 2 16 2ZM16 13.5C14.07 13.5 12.5 11.93 12.5 10S14.07 6.5 16 6.5S19.5 8.07 19.5 10S17.93 13.5 16 13.5Z" fill="#C8102E"/>
                </svg>
              `),
              scaledSize: new window.google.maps.Size(32, 32),
              anchor: new window.google.maps.Point(16, 32)
            }
          })

          // Create info window
          const infoWindow = new window.google.maps.InfoWindow({
            content: `
              <div style="padding: 10px; font-family: Arial, sans-serif;">
                <h3 style="margin: 0 0 8px 0; color: #C8102E; font-size: 16px;">
                  ${siteConfig.businessName}
                </h3>
                <p style="margin: 0 0 4px 0; color: #333; font-size: 14px;">
                  ${siteConfig.address.street}<br>
                  ${siteConfig.address.city}, ${siteConfig.address.state} ${siteConfig.address.zip}
                </p>
                <p style="margin: 0 0 8px 0; color: #C8102E; font-weight: bold; font-size: 14px;">
                  ${siteConfig.phone}
                </p>
                <a href="tel:${siteConfig.phone}" 
                   style="background: #C8102E; color: white; padding: 6px 12px; text-decoration: none; border-radius: 4px; font-size: 12px;">
                  Call Now
                </a>
              </div>
            `
          })

          // Add click listener to marker
          marker.addListener('click', () => {
            infoWindow.open(map, marker)
          })

          // Open info window by default
          infoWindow.open(map, marker)

          mapInstanceRef.current = map
        } else {
          console.error('Geocoding failed:', status)
          // Fallback to approximate coordinates if geocoding fails
          const fallbackLocation = {
            lat: 41.9428,
            lng: -80.0492
          }
          
          const map = new window.google.maps.Map(mapRef.current, {
            zoom: 15,
            center: fallbackLocation
          })
          
          const marker = new window.google.maps.Marker({
            position: fallbackLocation,
            map: map,
            title: siteConfig.businessName
          })
          
          mapInstanceRef.current = map
        }
      })
    }

    // Load Google Maps API if not already loaded
    if (!window.google) {
      const script = document.createElement('script')
      script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&callback=initGoogleMap`
      script.async = true
      script.defer = true
      
      // Set global callback
      window.initGoogleMap = initMap
      
      document.head.appendChild(script)
    } else {
      // Google Maps already loaded
      initMap()
    }

    // Cleanup
    return () => {
      if (window.initGoogleMap) {
        delete window.initGoogleMap
      }
    }
  }, [])

  return (
    <div className="w-full h-full min-h-[400px] relative">
      <div 
        ref={mapRef} 
        className="w-full h-full rounded-lg"
        style={{ minHeight: '400px' }}
      />
      
      {/* Fallback for when API key is not configured */}
      {!process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY && (
        <div className="absolute inset-0 bg-gray-200 rounded-lg flex items-center justify-center">
          <div className="text-center p-4">
            <div className="w-16 h-16 bg-accentRed rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-darkGray mb-2">Business Location</h3>
            <p className="text-darkGray mb-4">
              {siteConfig.address.street}<br />
              {siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.zip}
            </p>
            <a 
              href={`https://maps.google.com/?q=${siteConfig.address.street},+${siteConfig.address.city},+${siteConfig.address.state}+${siteConfig.address.zip}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Open in Google Maps
            </a>
          </div>
        </div>
      )}
    </div>
  )
} 