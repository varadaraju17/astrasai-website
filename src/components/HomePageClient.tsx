"use client"

import dynamic from 'next/dynamic';
import JsonLd from '@/components/JsonLd';
import Hero from '@/components/Hero';

// Lazy load below-the-fold components — ssr:false = zero SSR cost, loaded only after hydration
const About = dynamic(() => import('@/components/About'), { ssr: false });
const Services = dynamic(() => import('@/components/Services'), { ssr: false });
const Features = dynamic(() => import('@/components/Features'), { ssr: false });
const Contact = dynamic(() => import('@/components/Contact'), { ssr: false });
const AskAI = dynamic(() => import('@/components/AskAI'), { ssr: false });


export default function HomePageClient() {
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
