"use client"

import dynamic from 'next/dynamic';
import JsonLd from '@/components/JsonLd';
import Hero from '@/components/Hero';

// Lazy load below-the-fold components 
const About = dynamic(() => import('@/components/About'), { ssr: true });
const Services = dynamic(() => import('@/components/Services'), { ssr: true });
const Features = dynamic(() => import('@/components/Features'), { ssr: true });
const Contact = dynamic(() => import('@/components/Contact'), { ssr: true });
const AskAI = dynamic(() => import('@/components/AskAI'), { ssr: true });


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
