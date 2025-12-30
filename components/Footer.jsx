import Link from 'next/link'
import Image from 'next/image'
import { Phone, MapPin, ExternalLink } from 'lucide-react'
import { siteConfig } from '../lib/content'

export default function Footer() {
  return (
    <footer className="bg-darkNavy text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Contact */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/TTlogo.png"
                alt="Tom Torrance Heating & Cooling"
                width={200}
                height={60}
                className="h-12 w-auto bg-white rounded p-2"
              />
            </Link>
            
            <div className="space-y-3">
              <a 
                href={`tel:${siteConfig.phone}`} 
                className="flex items-center space-x-2 text-white hover:text-accentRed transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span className="text-lg font-semibold">{siteConfig.phone}</span>
              </a>
              
              <a 
                href="https://maps.google.com/?q=707+Moore+Rd,+Waterford,+PA+16441"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start space-x-2 text-white hover:text-accentRed transition-colors"
              >
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <div>
                  <div>707 Moore Rd</div>
                  <div>Waterford, PA 16441</div>
                </div>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-montserrat font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about-us" className="text-white hover:text-accentRed transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/hvac-services" className="text-white hover:text-accentRed transition-colors">
                  HVAC Services
                </Link>
              </li>
              <li>
                <Link href="/water-heater-services" className="text-white hover:text-accentRed transition-colors">
                  Water Heaters
                </Link>
              </li>
              <li>
                <Link href="/service-areas" className="text-white hover:text-accentRed transition-colors">
                  Service Areas
                </Link>
              </li>
              <li>
                <Link href="/reviews" className="text-white hover:text-accentRed transition-colors">
                  Reviews
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="text-white hover:text-accentRed transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="text-lg font-montserrat font-semibold mb-4">Follow Us</h3>
            <div className="space-y-3">
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-white hover:text-accentRed transition-colors"
              >
                <ExternalLink className="w-5 h-5" />
                <span>Yelp</span>
              </a>
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-white hover:text-accentRed transition-colors"
              >
                <ExternalLink className="w-5 h-5" />
                <span>Google Business Profile</span>
              </a>
              <a 
                href="https://www.bbb.org/us/pa/waterford/profile/heating-and-air-conditioning/tom-torrance-heating-cooling-and-refrigeration-0141-71036869/#sealclick" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-white hover:text-accentRed transition-colors"
              >
                <ExternalLink className="w-5 h-5" />
                <span>BBB.org</span>
              </a>
            </div>
            
            <div className="mt-6">
              <p className="text-sm text-gray-300">License #: PA066651</p>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-600 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-300">
              © 2025 All Rights Reserved.
            </p>
            <p className="text-sm text-gray-300">
              Built by <a href= "https://www.jamesschofield.com" className="text-white hover:text-accentRed transition-colors">James Schofield</a>
            </p>
            
          </div>
        </div>
      </div>
    </footer>
  )
} 