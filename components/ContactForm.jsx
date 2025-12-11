'use client'

import { useState } from 'react'
import { siteConfig } from '../lib/content'
import Notification from './Notification'

export default function ContactForm({ title = "Contact Us Today", subtitle = "We're Ready to Help" }) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    address: '',
    customerType: '',
    message: ''
  })

  const [notification, setNotification] = useState({
    isVisible: false,
    type: 'success',
    title: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    try {
      // Create FormData object for Formspree
      const formDataToSend = new FormData()
      formDataToSend.append('firstName', formData.firstName)
      formDataToSend.append('lastName', formData.lastName)
      formDataToSend.append('phone', formData.phone)
      formDataToSend.append('email', formData.email)
      formDataToSend.append('address', formData.address)
      formDataToSend.append('customerType', formData.customerType)
      formDataToSend.append('message', formData.message)
      
      // Add a formatted subject line for better email organization
      formDataToSend.append('_subject', `New Contact Form Submission - ${formData.firstName} ${formData.lastName}`)

      const response = await fetch('https://formspree.io/f/xpwlbvep', {
        method: 'POST',
        body: formDataToSend,
        headers: {
          'Accept': 'application/json'
        }
      })

      // Formspree returns 200 for success, but let's also check the response body
      if (response.ok) {
        try {
          const result = await response.json()
          // Check if Formspree returned an error in the JSON
          if (result.error || result.errors) {
            setNotification({
              isVisible: true,
              type: 'error',
              title: 'Form Error',
              message: 'Please check your form and try again. Some fields may have errors.'
            })
          } else {
            // Success - either no errors or explicit success
            setNotification({
              isVisible: true,
              type: 'success',
              title: 'Message Sent Successfully!',
              message: 'Thank you for your message! We will contact you soon to discuss your HVAC needs.'
            })
            setFormData({
              firstName: '',
              lastName: '',
              phone: '',
              email: '',
              address: '',
              customerType: '',
              message: ''
            })
          }
        } catch (jsonError) {
          // If JSON parsing fails but response was ok, treat as success
          setNotification({
            isVisible: true,
            type: 'success',
            title: 'Message Sent Successfully!',
            message: 'Thank you for your message! We will contact you soon to discuss your HVAC needs.'
          })
          setFormData({
            firstName: '',
            lastName: '',
            phone: '',
            email: '',
            address: '',
            customerType: '',
            message: ''
          })
        }
      } else {
        // Handle HTTP error status codes
        const errorData = await response.json().catch(() => ({}))
        if (errorData.errors) {
          setNotification({
            isVisible: true,
            type: 'error',
            title: 'Form Error',
            message: 'Please check your form and try again. Some fields may have errors.'
          })
        } else {
          setNotification({
            isVisible: true,
            type: 'error',
            title: 'Submission Error',
            message: `Sorry, there was an error sending your message. Please try calling us directly at ${siteConfig.phone}.`
          })
        }
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setNotification({
        isVisible: true,
        type: 'error',
        title: 'Connection Error',
        message: `Sorry, there was an error sending your message. Please try calling us directly at ${siteConfig.phone}.`
      })
    }
  }

  const closeNotification = () => {
    setNotification(prev => ({ ...prev, isVisible: false }))
  }

  return (
    <>
      <div className="card max-w-lg mx-auto">
      <div className="text-center mb-3">
        <h4 className="text-lg font-montserrat font-semibold text-darkGray mb-1">
          {title}
        </h4>
        <h5 className="text-sm font-montserrat text-accentRed">
          {subtitle}
        </h5>
      </div>

      <form onSubmit={handleSubmit} className="space-y-2">
        {/* Formspree configuration fields */}
        <input type="hidden" name="_next" value="https://tomtorranceheatingandcooling.com/contact-us?success=true" />
        <input type="hidden" name="_cc" value="" />
        
        {/* Honeypot field for spam protection */}
        <input type="text" name="_gotcha" style={{ display: 'none' }} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div>
            <label htmlFor="firstName" className="label">
              First Name *
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="input-field"
            />
          </div>
          
          <div>
            <label htmlFor="lastName" className="label">
              Last Name *
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="input-field"
            />
          </div>
        </div>

        <div>
          <label htmlFor="phone" className="label">
            Phone *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="input-field"
          />
        </div>

        <div>
          <label htmlFor="email" className="label">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="input-field"
          />
        </div>

        <div>
          <label htmlFor="address" className="label">
            Address
          </label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="input-field"
          />
        </div>

        <div>
          <label htmlFor="customerType" className="label">
            Are you a new customer? *
          </label>
          <select
            id="customerType"
            name="customerType"
            value={formData.customerType}
            onChange={handleChange}
            required
            className="input-field"
          >
            <option value="">Please select...</option>
            <option value="new">Yes, I am a potential new customer</option>
            <option value="existing">No, I'm a current existing customer</option>
            <option value="neither">I'm neither</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="label">
            How can we help you? *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={2}
            className="input-field resize-vertical"
            placeholder="Please describe your HVAC or water heater needs..."
          ></textarea>
        </div>



        <button
          type="submit"
          className="btn-primary w-full py-1.5"
        >
          Send Message
        </button>
      </form>
    </div>
    
      {/* Notification Popup */}
      <Notification
        isVisible={notification.isVisible}
        onClose={closeNotification}
        type={notification.type}
        title={notification.title}
        message={notification.message}
      />
    </>
  )
} 