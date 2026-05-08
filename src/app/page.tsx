import { Metadata } from 'next';
import HomePageClient from '@/components/HomePageClient';

export const runtime = 'edge';


const domain = 'https://astrasai.in';

export const metadata: Metadata = {
  title: 'Astras AI — Bangalore\'s #1 AI Development Agency',
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
      'Build your digital future with Astras AI. AI websites from ₹15,000 | Apps from ₹50,000 | AI Agents 24/7 | Performance Marketing. Based in Bangalore, serving globally.',
    url: domain,
  },
};

export default function HomePage() {
  return <HomePageClient />;
}
