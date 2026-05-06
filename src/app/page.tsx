import { Metadata } from 'next';
import HomePageClient from '@/components/HomePageClient';

const domain = 'https://www.astrasai.in';

export const metadata: Metadata = {
  title: 'Astras AI | #1 AI Agency in Bangalore — Websites, Apps, AI Agents & Digital Marketing',
  description:
    'Astras AI is Bangalore\'s #1 AI agency. We build AI-powered websites, mobile apps, custom AI agents, and run data-driven digital marketing campaigns. Trusted by 50+ startups & enterprises. Get a free consultation today.',
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
