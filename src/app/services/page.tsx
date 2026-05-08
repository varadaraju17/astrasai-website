import { Metadata } from 'next';
import Services from "@/components/Services";

export const runtime = 'edge';


const domain = 'https://astrasai.in';

export const metadata: Metadata = {
  title: 'AI Services — Website, App, AI Agents & Digital Marketing | Astras AI Bangalore',
  description:
    'Explore Astras AI\'s full suite of services: AI-powered websites, mobile app development, custom AI agents, digital marketing, startup MVPs, and business automation. Serving startups & enterprises in Bangalore and globally.',
  keywords: [
    'AI services Bangalore', 'website development services India',
    'mobile app development services Bangalore', 'AI agent development services',
    'digital marketing services Bangalore', 'Brahmastra AI services',
    'Sudarshana Chakra services', 'startup MVP development services India',
    'business automation services Bangalore', 'custom software development India',
  ],
  alternates: {
    canonical: `${domain}/services`,
  },
  openGraph: {
    title: 'AI Services — Websites, Apps, AI Agents & Marketing | Astras AI',
    description:
      'Full-service AI agency in Bangalore. We build intelligent websites, apps, AI agents, and run performance marketing campaigns that deliver measurable ROI.',
    url: `${domain}/services`,
    images: [{ url: `${domain}/og-image.png`, width: 1200, height: 630, alt: 'Astras AI Services' }],
  },
  twitter: {
    title: 'AI Services — Websites, Apps, AI Agents | Astras AI Bangalore',
    description: 'Explore Astras AI\'s full suite: AI websites, apps, agents, and digital marketing services.',
  },
};

export default function ServicesPage() {
  return <Services />;
}
