'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Phone, Menu, X, ChevronDown } from 'lucide-react'

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const toggleDropdown = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown)
  }

  const hvacServices = [
    { name: 'Air Conditioning Installation & Repair', href: '/hvac-services/air-conditioning' },
    { name: 'Furnace Installation & Repair', href: '/hvac-services/furnace-installation-repair' },
    { name: 'Ductwork Services', href: '/hvac-services/ductwork' },
    { name: 'Air Purification Systems', href: '/hvac-services/air-purification' },
  ]

  const waterHeaterServices = [
    { name: 'Water Heater Installation', href: '/water-heater-services/installation' },
    { name: 'Water Heater Repair', href: '/water-heater-services/repair' },
    { name: 'Tankless Water Heaters', href: '/water-heater-services/tankless' },
    { name: 'Traditional Water Heaters', href: '/water-heater-services/traditional' },
  ]

  return (
    <header className="relative">
      {/* Top Bar */}
      <div className="bg-darkNavy text-white py-2 text-sm">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <span>Serving Erie County and Surrounding Areas</span>
          <div className="flex items-center space-x-4">
            <Link href="/contact-us" className="hover:text-accentRed transition-colors">
              Contact Us
            </Link>
            <a 
              href="tel:814-825-7066" 
              className="flex items-center space-x-1 hover:text-accentRed transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>814-825-7066</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white shadow-lg relative z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/TTlogo.png"
                alt="Tom Torrance Heating & Cooling"
                width={200}
                height={60}
                className="h-12 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <Link href="/" className="text-darkGray hover:text-accentRed transition-colors font-medium">
                Home
              </Link>
              
              <Link href="/about-us" className="text-darkGray hover:text-accentRed transition-colors font-medium">
                About Us
              </Link>

              {/* HVAC Services Dropdown */}
              <div className="relative group">
                <button 
                  className="flex items-center space-x-1 text-darkGray hover:text-accentRed transition-colors font-medium"
                  onClick={() => toggleDropdown('hvac')}
                >
                  <span>HVAC Services</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                <div className="absolute top-full left-0 mt-1 w-64 bg-white shadow-xl rounded-lg border border-lightGray opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <div className="py-2">
                    <Link href="/hvac-services" className="block px-4 py-2 text-darkGray hover:bg-lightGray hover:text-accentRed transition-colors font-medium border-b border-lightGray">
                      All HVAC Services
                    </Link>
                    {hvacServices.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className="block px-4 py-2 text-darkGray hover:bg-lightGray hover:text-accentRed transition-colors"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Water Heaters Dropdown */}
              <div className="relative group">
                <button 
                  className="flex items-center space-x-1 text-darkGray hover:text-accentRed transition-colors font-medium"
                  onClick={() => toggleDropdown('water')}
                >
                  <span>Water Heaters</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                <div className="absolute top-full left-0 mt-1 w-56 bg-white shadow-xl rounded-lg border border-lightGray opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <div className="py-2">
                    <Link href="/water-heater-services" className="block px-4 py-2 text-darkGray hover:bg-lightGray hover:text-accentRed transition-colors font-medium border-b border-lightGray">
                      All Water Heaters
                    </Link>
                    {waterHeaterServices.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className="block px-4 py-2 text-darkGray hover:bg-lightGray hover:text-accentRed transition-colors"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>


              
              <Link href="/service-areas" className="text-darkGray hover:text-accentRed transition-colors font-medium">
                Service Areas
              </Link>
              
              <Link href="/reviews" className="text-darkGray hover:text-accentRed transition-colors font-medium">
                Reviews
              </Link>
              
              <Link href="/contact-us" className="text-darkGray hover:text-accentRed transition-colors font-medium">
                Contact
              </Link>
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Link href="/contact-us" className="btn-primary">
                Schedule Service
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-darkGray"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-lightGray z-40">
            <div className="py-4 space-y-2">
              <Link href="/" className="block px-4 py-2 text-darkGray hover:bg-lightGray hover:text-accentRed transition-colors">
                Home
              </Link>
              <Link href="/about-us" className="block px-4 py-2 text-darkGray hover:bg-lightGray hover:text-accentRed transition-colors">
                About Us
              </Link>
              
              {/* Mobile HVAC Services */}
              <div>
                <button 
                  className="w-full flex items-center justify-between px-4 py-2 text-darkGray hover:bg-lightGray hover:text-accentRed transition-colors"
                  onClick={() => toggleDropdown('hvac-mobile')}
                >
                  <span>HVAC Services</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === 'hvac-mobile' ? 'rotate-180' : ''}`} />
                </button>
                {openDropdown === 'hvac-mobile' && (
                  <div className="bg-lightGray">
                    <Link href="/hvac-services" className="block px-8 py-2 text-darkGray hover:text-accentRed transition-colors">
                      All HVAC Services
                    </Link>
                    {hvacServices.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className="block px-8 py-2 text-darkGray hover:text-accentRed transition-colors"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Water Heaters */}
              <div>
                <button 
                  className="w-full flex items-center justify-between px-4 py-2 text-darkGray hover:bg-lightGray hover:text-accentRed transition-colors"
                  onClick={() => toggleDropdown('water-mobile')}
                >
                  <span>Water Heaters</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === 'water-mobile' ? 'rotate-180' : ''}`} />
                </button>
                {openDropdown === 'water-mobile' && (
                  <div className="bg-lightGray">
                    <Link href="/water-heater-services" className="block px-8 py-2 text-darkGray hover:text-accentRed transition-colors">
                      All Water Heaters
                    </Link>
                    {waterHeaterServices.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className="block px-8 py-2 text-darkGray hover:text-accentRed transition-colors"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>


              <Link href="/service-areas" className="block px-4 py-2 text-darkGray hover:bg-lightGray hover:text-accentRed transition-colors">
                Service Areas
              </Link>
              <Link href="/reviews" className="block px-4 py-2 text-darkGray hover:bg-lightGray hover:text-accentRed transition-colors">
                Reviews
              </Link>
              <Link href="/contact-us" className="block px-4 py-2 text-darkGray hover:bg-lightGray hover:text-accentRed transition-colors">
                Contact
              </Link>
              
              <div className="px-4 py-4">
                <Link href="/contact-us" className="btn-primary w-full text-center">
                  Schedule Service
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
} 