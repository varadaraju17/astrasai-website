"use client"

import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Contact from '@/components/Contact'
import AskAI from '@/components/AskAI'
import About from '@/components/About'
import JsonLd from '@/components/JsonLd'

export default function HomePage() {
  return (
    <>
      <JsonLd />
      <Hero />
      <About />
      <Services />
      <Contact />
      <AskAI />
    </>
  )
}
