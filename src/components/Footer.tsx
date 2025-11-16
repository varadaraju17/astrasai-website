'use client'

import { Linkedin, Mail, Phone } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-cosmic-950 overflow-hidden pb-24 sm:pb-6">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-cosmic-950 via-mystic-900/20 to-cosmic-950" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-trishul-500/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-chakra-500/20 to-transparent" />
        <div className="absolute -left-48 -top-48 w-96 h-96 bg-trishul-500/5 rounded-full blur-3xl" />
        <div className="absolute -right-48 -bottom-48 w-96 h-96 bg-chakra-500/5 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(138,99,255,0.04),transparent_25%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(0,229,255,0.04),transparent_25%)]" />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 py-12 sm:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 lg:gap-16 mb-12 sm:mb-16">
          {/* Company Info */}
          <div className="space-y-4 sm:space-y-6">
            <h3 className="text-3xl sm:text-4xl font-display font-bold tracking-tight">
              <span className="bg-gradient-to-r from-white to-white/90 text-transparent bg-clip-text">ASTRAS</span>
              <span className="bg-gradient-to-r from-trishul-500 via-mystic-300 to-chakra-300 text-transparent bg-clip-text"> AI</span>
            </h3>
            <p className="text-sm sm:text-base md:text-lg font-sans font-light leading-relaxed text-cosmic-100/80">
              Empowering digital transformation through the fusion of ancient wisdom and artificial intelligence.
            </p>

            <div className="flex flex-col gap-3">
              <a href="mailto:services@astrasai.in" className="inline-flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 rounded-lg bg-gradient-to-r from-trishul-500 to-mystic-500 text-white text-sm sm:text-base shadow-sm hover:shadow-lg transition-all duration-300 w-fit">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-white flex-shrink-0" />
                <span className="font-medium truncate">services@astrasai.in</span>
              </a>

              {/* Phone CTA */}
              <a href="tel:+918197489255" className="inline-flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 rounded-lg bg-gradient-to-r from-chakra-300 to-mystic-300 text-cosmic-900 text-sm sm:text-base font-medium shadow-sm hover:shadow-lg transition-all duration-300 w-fit">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                <span>+91 8197489255</span>
              </a>
            </div>

            <div className="flex items-center gap-2 sm:gap-3 mt-4">
              <a
                href="https://www.instagram.com/astras_ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-2 sm:p-3 rounded-xl bg-gradient-to-r from-trishul-500/8 to-mystic-500/8 ring-1 ring-trishul-500/16 hover:ring-trishul-500/28 text-white transition-all duration-300"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-trishul-300 group-hover:text-trishul-500 transition-colors" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/astras-ai-tech"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-2 sm:p-3 rounded-xl bg-gradient-to-r from-mystic-500/8 to-chakra-500/8 ring-1 ring-mystic-500/16 hover:ring-mystic-500/28 text-white transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 text-mystic-300 group-hover:text-mystic-500 transition-colors" />
              </a>
            </div>
          </div>

          {/* Begin Your Journey */}
          <div>
            <h4 className="text-xl sm:text-2xl font-display font-semibold bg-gradient-to-r from-white via-white/90 to-white/80 text-transparent bg-clip-text mb-4 sm:mb-8">Begin Your Journey</h4>
            <ul className="space-y-3 sm:space-y-5">
              <li>
                <Link href="/services" className="group flex items-center gap-2 sm:gap-3 text-base sm:text-lg font-sans font-light text-cosmic-100/70 hover:text-trishul-300 transition-colors">
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-gradient-to-r from-trishul-500 to-mystic-500 group-hover:scale-150 transition-transform duration-500 flex-shrink-0"></span>
                  <span>Our Services</span>
                </Link>
              </li>
              <li>
                <Link href="/about" className="group flex items-center gap-2 sm:gap-3 text-base sm:text-lg font-sans font-light text-cosmic-100/70 hover:text-mystic-300 transition-colors">
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-gradient-to-r from-mystic-500 to-chakra-500 group-hover:scale-150 transition-transform duration-500 flex-shrink-0"></span>
                  <span>About Us</span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="group flex items-center gap-2 sm:gap-3 text-base sm:text-lg font-sans font-light text-cosmic-100/70 hover:text-chakra-300 transition-colors">
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-gradient-to-r from-chakra-500 to-trishul-500 group-hover:scale-150 transition-transform duration-500 flex-shrink-0"></span>
                  <span>Contact Us</span>
                </Link>
              </li>
              <li>
                <a 
                  href="https://www.instagram.com/astras_ai/"
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="group flex items-center gap-2 sm:gap-3 text-base sm:text-lg font-sans font-light text-cosmic-100/70 hover:text-trishul-300 transition-colors"
                >
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-gradient-to-r from-trishul-500 to-mystic-500 group-hover:scale-150 transition-transform duration-500 flex-shrink-0"></span>
                  <span>Latest Updates</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xl sm:text-2xl font-display font-semibold bg-gradient-to-r from-white via-white/90 to-white/80 text-transparent bg-clip-text mb-4 sm:mb-8">Company</h4>
            <ul className="space-y-3 sm:space-y-5">
              <li>
                <Link href="/about" className="group flex items-center gap-2 sm:gap-3 text-base sm:text-lg font-sans font-light text-cosmic-100/70 hover:text-trishul-300 transition-colors">
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-gradient-to-r from-trishul-500 to-mystic-500 group-hover:scale-150 transition-transform duration-500 flex-shrink-0"></span>
                  <span>About Us</span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="group flex items-center gap-2 sm:gap-3 text-base sm:text-lg font-sans font-light text-cosmic-100/70 hover:text-mystic-300 transition-colors">
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-gradient-to-r from-mystic-500 to-chakra-500 group-hover:scale-150 transition-transform duration-500 flex-shrink-0"></span>
                  <span>Contact</span>
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="group flex items-center gap-2 sm:gap-3 text-base sm:text-lg font-sans font-light text-cosmic-100/70 hover:text-chakra-300 transition-colors">
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-gradient-to-r from-chakra-500 to-trishul-500 group-hover:scale-150 transition-transform duration-500 flex-shrink-0"></span>
                  <span>Privacy Policy</span>
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="group flex items-center gap-2 sm:gap-3 text-base sm:text-lg font-sans font-light text-cosmic-100/70 hover:text-trishul-300 transition-colors">
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-gradient-to-r from-trishul-500 to-mystic-500 group-hover:scale-150 transition-transform duration-500 flex-shrink-0"></span>
                  <span>Terms of Service</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect With Us */}
          <div>
            <h4 className="text-xl sm:text-2xl font-display font-semibold bg-gradient-to-r from-white via-white/90 to-white/80 text-transparent bg-clip-text mb-4 sm:mb-8">Connect With Us</h4>
            <ul className="space-y-3 sm:space-y-4 lg:space-y-6">
              <li>
                <a
                  href="https://www.instagram.com/astras_ai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 sm:gap-3 lg:gap-4 text-sm sm:text-base lg:text-lg font-sans font-light text-cosmic-100/70 hover:text-trishul-300 transition-colors"
                >
                  <div className="p-1.5 sm:p-2 rounded-lg bg-gradient-to-r from-trishul-500/10 to-mystic-500/10 ring-1 ring-trishul-500/20 group-hover:ring-trishul-500/40 transition-all duration-300 flex-shrink-0">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-trishul-300 group-hover:text-trishul-500 transition-colors" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </div>
                  <span className="truncate">Follow on Instagram</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/astras-ai-tech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 sm:gap-3 lg:gap-4 text-sm sm:text-base lg:text-lg font-sans font-light text-cosmic-100/70 hover:text-mystic-300 transition-colors"
                >
                  <div className="p-1.5 sm:p-2 rounded-lg bg-gradient-to-r from-mystic-500/10 to-chakra-500/10 ring-1 ring-mystic-500/20 group-hover:ring-mystic-500/40 transition-all duration-300 flex-shrink-0">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-mystic-300 group-hover:text-mystic-500 transition-colors" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </div>
                  <span className="truncate">Connect on LinkedIn</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+918197489255"
                  className="group flex items-center gap-2 sm:gap-3 lg:gap-4 text-sm sm:text-base lg:text-lg font-sans font-light text-cosmic-100/70 hover:text-chakra-300 transition-colors"
                >
                  <div className="p-1.5 sm:p-2 rounded-lg bg-gradient-to-r from-chakra-500/10 to-trishul-500/10 ring-1 ring-chakra-500/20 group-hover:ring-chakra-500/40 transition-all duration-300 flex-shrink-0">
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-chakra-300 group-hover:text-chakra-500 transition-colors" />
                  </div>
                  <span className="truncate">+91 8197489255</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:services@astrasai.in"
                  className="group flex items-center gap-2 sm:gap-3 lg:gap-4 text-sm sm:text-base lg:text-lg font-sans font-light text-cosmic-100/70 hover:text-mystic-300 transition-colors"
                >
                  <div className="p-1.5 sm:p-2 rounded-lg bg-gradient-to-r from-mystic-500/10 to-trishul-500/10 ring-1 ring-mystic-500/20 group-hover:ring-mystic-500/40 transition-all duration-300 flex-shrink-0">
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-mystic-300 group-hover:text-mystic-500 transition-colors" />
                  </div>
                  <span className="truncate">services@astrasai.in</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="relative pt-8 sm:pt-12 lg:pt-16 mt-8 sm:mt-12 lg:mt-16 border-t border-mystic-300/20">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-trishul-500/20 to-transparent" />
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6">
            <p className="text-sm sm:text-base font-sans text-cosmic-100/60 font-light tracking-wide text-center sm:text-left">
              © {currentYear} AstrasAI. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-4 sm:gap-6 sm:gap-10 justify-center sm:justify-end">
              <Link href="/privacy-policy" className="text-sm sm:text-base font-sans text-cosmic-100/60 hover:text-trishul-300 transition-colors whitespace-nowrap">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="text-sm sm:text-base font-sans text-cosmic-100/60 hover:text-mystic-300 transition-colors whitespace-nowrap">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}