"use client"

import dynamic from 'next/dynamic'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

const HeroCanvas = dynamic(() => import('./HeroCanvas'), { ssr: false })

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Layers */}
      <div className="absolute inset-0 bg-cosmic-900"></div>
      <div className="absolute inset-0 bg-cosmic-grid bg-[length:50px_50px] opacity-20"></div>
      <div className="absolute inset-0 bg-hero-gradient animate-cosmic-pulse"></div>
      
      {/* Sacred Geometry Patterns */}
      <div className="absolute inset-0">
        <HeroCanvas />
      </div>

      {/* Glowing Orbs */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-trishul-500/30 rounded-full blur-3xl animate-cosmic-pulse"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-chakra-300/20 rounded-full blur-3xl animate-float"></div>

      <div className="relative z-10 container mx-auto px-6 py-32">
        <div className="max-w-5xl mx-auto text-center">
          {/* Sacred Symbol */}
          <div className="mb-8 flex justify-center">
            <div className="w-20 h-20 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-trishul-500 via-mystic-300 to-chakra-300 rounded-full animate-chakra-spin"></div>
              <div className="absolute inset-1 bg-cosmic-900 rounded-full flex items-center justify-center">
                <div className="w-12 h-12 bg-gradient-to-r from-trishul-500 via-mystic-300 to-chakra-300 rounded-full animate-cosmic-pulse"></div>
              </div>
            </div>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-tight">
            <span className="block bg-gradient-to-r from-trishul-500 via-mystic-300 to-chakra-300 bg-clip-text text-transparent animate-astra-flow pb-4">
              Astras AI: Next-Gen Intelligence,
            </span>
            <span className="block text-4xl md:text-6xl lg:text-7xl bg-gradient-to-r from-trishul-500 via-mystic-300 to-chakra-300 bg-clip-text text-transparent mt-2">
              Next-Level You.
            </span>
          </h1>

          <p className="mt-8 text-xl md:text-2xl text-cosmic-100/80 max-w-4xl mx-auto leading-relaxed font-body">
            We build AI-powered ecosystems that help startups scale faster, businesses grow smarter, and people achieve more.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
            <a 
              href="#services" 
              className="group relative px-8 py-4 rounded-xl bg-gradient-to-r from-trishul-500 via-mystic-500 to-chakra-500 
                       text-white font-display text-lg flex items-center gap-3 overflow-hidden
                       hover:shadow-lg hover:shadow-trishul-500/25 transition-all duration-500"
            >
              <span className="relative z-10">Explore Astras</span>
              <ChevronRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-r from-mystic-500 via-chakra-500 to-trishul-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </a>
            
            <a 
              href="#contact" 
              className="group px-8 py-4 rounded-xl border border-mystic-300/20 text-cosmic-100 font-display text-lg
                       hover:border-mystic-300/40 hover:bg-mystic-300/5 transition-all duration-300
                       flex items-center gap-3"
            >
              Begin Your Journey
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

