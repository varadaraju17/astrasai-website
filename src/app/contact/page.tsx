import { Metadata } from 'next';
import Contact from "@/components/Contact";

export const runtime = 'edge';


const domain = 'https://astrasai.in';

export const metadata: Metadata = {
  title: 'Contact Astras AI — Start Your AI Project in Bangalore Today',
  description:
    'Ready to build an AI-powered website, app, or automation? Contact Astras AI in Bangalore. Get a free consultation for website development, mobile apps, AI agents, and digital marketing services. Available Mon–Sun.',
  keywords: [
    'contact Astras AI', 'hire AI agency Bangalore', 'get a website quote India',
    'start AI project Bangalore', 'website development consultation India',
    'AI agent development inquiry', 'digital marketing agency contact Bangalore',
    'free consultation AI agency India',
  ],
  alternates: {
    canonical: `${domain}/contact`,
  },
  openGraph: {
    title: 'Contact Astras AI — Build Your AI-Powered Website, App or Agent',
    description: 'Get in touch with Bangalore\'s top AI agency. Free consultation for AI websites, apps, agents, and marketing. Fast response guaranteed.',
    url: `${domain}/contact`,
    images: [
      {
        url: `${domain}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'Contact Astras AI — Build Your AI-Powered Website, App or Agent',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Astras AI — Start Your Project Today',
    description: 'Get a free consultation for AI websites, apps, agents, and digital marketing. Based in Bangalore, serving globally.',
    images: [
      {
        url: `${domain}/og-image.jpg`,
        alt: 'Contact Astras AI — Build Your AI-Powered Website, App or Agent',
      },
    ],
  },
};

export default function ContactPage() {
  return <Contact />;
}
