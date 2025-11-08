'use client'

import { useState } from 'react'
import { Send, Mail } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    service: 'general'
  })
  
  const [status, setStatus] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    
    try {
      // In production, replace with your actual API endpoint
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })
      
      if (response.ok) {
        setStatus('success')
        setFormData({
          name: '',
          email: '',
          company: '',
          message: '',
          service: 'general'
        })
      } else {
        setStatus('error')
      }
    } catch (error) {
      console.error('Error:', error)
      setStatus('error')
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-cosmic-900 via-cosmic-900/95 to-cosmic-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 bg-gradient-to-r from-trishul-500 via-mystic-300 to-chakra-300 bg-clip-text text-transparent">
            Begin Your Journey
          </h2>
          <p className="text-lg font-sans text-cosmic-100/80 max-w-3xl mx-auto">
            Connect with us to explore how our intelligence can transform your digital presence.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="glass-card backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-sans font-medium text-cosmic-100/80 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-mystic-900/50 border border-mystic-300/20 rounded-lg text-cosmic-100 placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-trishul-500 focus:border-trishul-500 transition-all"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-sans font-medium text-cosmic-100/80 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-mystic-900/50 border border-mystic-300/20 rounded-lg text-cosmic-100 placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-trishul-500 focus:border-trishul-500 transition-all"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-sans font-medium text-cosmic-100/80 mb-2">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-mystic-900/50 border border-mystic-300/20 rounded-lg text-cosmic-100 placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-trishul-500 focus:border-trishul-500 transition-all"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-sans font-medium text-cosmic-100/80 mb-2">
                  Service Interest
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-mystic-900/50 border border-mystic-300/20 rounded-lg text-cosmic-100 focus:outline-none focus:ring-2 focus:ring-mystic-500 focus:border-mystic-500 transition-all"
                >
                  <option value="general">General Inquiry</option>
                  <option value="brahmastra">Brahmastra AI</option>
                  <option value="pashupatastra">Pashupatastra Marketing</option>
                  <option value="vajra">Vajra MVP Development</option>
                  <option value="narayanastra">Narayanastra AI Agents</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-sans font-medium text-cosmic-100/80 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2 bg-mystic-900/50 border border-mystic-300/20 rounded-lg text-cosmic-100 placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-trishul-500 focus:border-trishul-500 transition-all"
                />
              </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full py-3 bg-gradient-to-r from-trishul-500 via-mystic-500 to-chakra-500 rounded-lg text-white font-display font-semibold shadow-lg hover:shadow-trishul-500/25 transition-all duration-300 disabled:opacity-50"
                >
                  {status === 'sending' ? (
                    'Sending...'
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      Send Message <Send className="w-4 h-4" />
                    </span>
                  )}
                </button>

              {status === 'success' && (
                  <p className="text-green-400 text-center">Message sent successfully!</p>
                )}
                {status === 'error' && (
                  <p className="text-red-400 text-center">Error sending message. Please try again.</p>
                )}
              </form>
            </div>

          {/* Contact Information */}
          <div className="lg:pl-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-display mb-6 text-cosmic-100">Connect With Us</h3>
                <div className="space-y-4">
                  <a
                    href="https://www.instagram.com/astras_ai/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 text-cosmic-100/80 hover:text-trishul-300 transition-colors"
                  >
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-trishul-500 to-mystic-500 flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                      </svg>
                    </div>
                    <div>
                      <p className="font-sans font-medium">Instagram</p>
                      <p className="text-sm font-sans text-cosmic-100/60">Follow for updates</p>
                    </div>
                  </a>

                  <a
                    href="https://www.linkedin.com/company/astras-ai-tech"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 text-cosmic-100/80 hover:text-mystic-300 transition-colors"
                  >
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-mystic-500 to-chakra-500 flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect x="2" y="9" width="4" height="12"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                    </div>
                    <div>
                      <p className="font-sans font-medium">LinkedIn</p>
                      <p className="text-sm font-sans text-cosmic-100/60">Follow us for updates</p>
                    </div>
                  </a>

                  <a
                    href="https://wa.me/918197489255"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 text-cosmic-100/80 hover:text-chakra-300 transition-colors"
                  >
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-chakra-500 to-chakra-700 flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                      </svg>
                    </div>
                    <div>
                      <p className="font-sans font-medium">WhatsApp</p>
                      <p className="text-sm font-sans text-cosmic-100/60">Chat with us</p>
                    </div>
                  </a>

                  <a
                    href="tel:+918197489255"
                    className="flex items-center gap-4 text-cosmic-100/80 hover:text-trishul-300 transition-colors"
                  >
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-trishul-500 to-mystic-500 flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                      </svg>
                    </div>
                    <div>
                      <p className="font-sans font-medium">Call Us</p>
                      <p className="text-sm font-sans text-cosmic-100/60">+91 8197489255</p>
                    </div>
                  </a>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-gradient-to-r from-vajra-900 to-mystic-900 border border-mystic-300/20">
                <h4 className="text-xl font-display mb-4 text-cosmic-100">Why Choose Astras AI?</h4>
                <ul className="space-y-3 font-sans text-cosmic-100/80">
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-vajra-500" />
                    Cutting-edge AI solutions
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-trishul-500" />
                    Expert team of innovators
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-chakra-500" />
                    Proven track record of success
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-mystic-500" />
                    24/7 support and maintenance
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}