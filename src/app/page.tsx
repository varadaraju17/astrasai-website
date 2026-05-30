import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import JsonLd from '@/components/JsonLd';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Features from '@/components/Features';

// Dynamic imports to reduce initial HTTP requests and payload size
const Testimonials = dynamic(() => import('@/components/Testimonials'), {
  loading: () => <div className="min-h-[400px] bg-black" />,
  ssr: true,
});

const Contact = dynamic(() => import('@/components/Contact'), {
  loading: () => <div className="min-h-[500px] bg-black" />,
  ssr: true,
});

const AskAI = dynamic(() => import('@/components/AskAI'), {
  ssr: false,
});

const domain = 'https://astrasai.in';

export const metadata: Metadata = {
  title: 'Astras AI | #1 AI Agency Bangalore — Build AI Websites & Business Services',
  description:
    'Astras AI is the leading AI agency in Bangalore. We build intelligent websites, custom mobile apps, and autonomous AI agents to automate business workflows and services. Learn more!',
  keywords: [
    'Astras AI', 'AstrasAI', 'Astras AI Bangalore', 'Astras AI India',
    'AI agency Bangalore', 'best AI development company India',
    'AI website builder Bangalore', 'custom AI agents India',
  ],
  alternates: {
    canonical: domain,
  },
  openGraph: {
    title: 'Astras AI | #1 AI Agency Bangalore — Build AI Websites & Business Services',
    description:
      'We build intelligent websites, custom mobile apps, and autonomous AI agents to automate business workflows and services. Learn more!',
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
    title: 'Astras AI | #1 AI Agency Bangalore — Build AI Websites & Business Services',
    description:
      'We build intelligent websites, custom mobile apps, and autonomous AI agents to automate business workflows and services. Learn more!',
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
