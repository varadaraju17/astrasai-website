"use client"

import JsonLd from '@/components/JsonLd'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Services from '@/components/Services'
import About from '@/components/About'
import Contact from '@/components/Contact'
import AskAI from '@/components/AskAI'

export default function HomePage() {
  return (
    <>
      <JsonLd />
      <Hero />
      <About />
      <Services />
      <Features />
      <Contact />
      <AskAI />
    </>
  )
}
