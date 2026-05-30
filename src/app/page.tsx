import { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Features from '@/components/Features';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import AskAI from '@/components/AskAI';

const domain = 'https://astrasai.in';

export const metadata: Metadata = {
  title: 'Astras AI | #1 AI Agency in Bangalore — Websites, Apps & AI Agents',
  description:
    'Astras AI is the leading AI agency in Bangalore, India. We build intelligent AI-powered websites, custom mobile apps, and autonomous AI agents for global startups and enterprises.',
  keywords: [
    'Astras AI', 'AstrasAI', 'Astras AI Bangalore', 'Astras AI India',
    'AI agency Bangalore', 'best AI development company India',
    'AI website builder Bangalore', 'custom AI agents India',
  ],
  alternates: {
    canonical: domain,
  },
  openGraph: {
    title: 'Astras AI | #1 AI Agency in Bangalore — Websites, Apps & AI Agents',
    description:
      'We build intelligent AI-powered websites, custom mobile apps, and autonomous AI agents for global startups and enterprises. Headquartered in Bangalore.',
    url: domain,
    siteName: 'Astras AI',
    images: [
      {
        url: `${domain}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'Astras AI — Bangalore\'s #1 AI Development Agency',
        type: 'image/jpeg',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@astras_ai',
    creator: '@astras_ai',
    title: 'Astras AI | Bangalore\'s #1 AI Agency — Websites, Apps & AI Agents',
    description:
      'We build intelligent AI-powered websites, custom mobile apps, and autonomous AI agents for global startups and enterprises. Headquartered in Bangalore.',
    images: [
      {
        url: `${domain}/og-image.jpg`,
        alt: 'Astras AI — Bangalore\'s #1 AI Development Agency',
      },
    ],
  },
};

export default function HomePage() {
  return (
    <>
      <JsonLd />
      <Hero />
      <About />
      <Services />
      <Features />
      <Testimonials />
      <Contact />
      <AskAI />
    </>
  );
}
