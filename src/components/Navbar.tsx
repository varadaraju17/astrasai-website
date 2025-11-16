"use client"

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Image from 'next/image' // Import Image component

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const menuItems = [
    { href: '/services', label: 'Services' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Connect' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="absolute inset-0 bg-cosmic-900/10 backdrop-blur-xl border-b border-mystic-300/10"></div>
      <div className="container mx-auto px-6 py-4 relative">
        <div className="flex items-center justify-between">
          <Link href="/" className="group flex items-center gap-3">
            <Image 
              src="/logo.png" 
              alt="Astras AI Logo" 
              width={80} 
              height={80} 
              className="relative z-10"
            />
            <span className="text-2xl font-display bg-gradient-to-r from-trishul-500 via-mystic-300 to-chakra-300 bg-clip-text text-transparent">
              ASTRAS <span className="font-bold">AI</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <Link 
                key={item.label} 
                href={item.href} 
                className="nav-link relative text-cosmic-100/80 hover:text-cosmic-100 transition-colors duration-300 font-display text-lg"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-trishul-500 to-mystic-300 transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100"></span>
              </Link>
            ))}
            <Link 
              href="/contact" 
              className="px-6 py-2.5 rounded-lg bg-gradient-to-r from-trishul-500 via-mystic-500 to-chakra-500 text-white font-display 
                       hover:shadow-lg hover:shadow-trishul-500/25 transition-all duration-300 
                       border border-white/10 relative overflow-hidden group"
            >
              <span className="relative z-10">Get Started</span>
              <div className="absolute inset-0 bg-gradient-to-r from-mystic-500 via-chakra-500 to-trishul-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </Link>
          </nav>

          <button 
            onClick={() => setOpen(!open)} 
            className="md:hidden p-2 text-white relative overflow-hidden rounded-lg border border-white/10"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-trishul-500/10 to-mystic-500/10 backdrop-blur-sm"></div>
            {open ? <X className="w-6 h-6 relative z-10" /> : <Menu className="w-6 h-6 relative z-10" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden relative">
          <div className="absolute inset-0 bg-cosmic-900/95 backdrop-blur-xl"></div>
          <nav className="relative flex flex-col gap-4 p-6">
            {menuItems.map((item) => (
              <Link 
                key={item.label} 
                href={item.href} 
                onClick={() => setOpen(false)} 
                className="text-cosmic-100/80 hover:text-cosmic-100 py-2 text-lg font-display hover:pl-2 transition-all duration-300"
              >
                {item.label}
              </Link>
            ))}
            <Link 
              href="/contact" 
              onClick={() => setOpen(false)} 
              className="mt-4 px-6 py-3 rounded-lg bg-gradient-to-r from-trishul-500 to-mystic-500 text-white text-center font-display
                       hover:shadow-lg hover:shadow-trishul-500/25 transition-all duration-300"
            >
              Get Started
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}