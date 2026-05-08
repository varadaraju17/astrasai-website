import { Metadata } from 'next';
import About from "@/components/About";

export const runtime = 'edge';


const domain = 'https://astrasai.in';

export const metadata: Metadata = {
  title: 'About Astras AI — Bangalore\'s #1 AI Agency for Websites, Apps & Automation',
  description:
    'Learn about Astras AI — an elite AI innovation studio based in Bangalore. We build intelligent websites, mobile apps, AI agents, and automation solutions that help businesses grow exponentially. Security-first, scalable, and human-centric.',
  keywords: [
    'about Astras AI', 'AI company Bangalore', 'AI innovation studio India',
    'best AI agency India', 'technology company Bangalore',
    'AI development team India', 'elite software company Bangalore',
  ],
  alternates: {
    canonical: `${domain}/about`,
  },
  openGraph: {
    title: 'About Astras AI — Elite AI Innovation Studio in Bangalore',
    description: 'We are Astras AI — building the intelligent digital future for startups and enterprises. Human-centric AI, enterprise-grade security, and infinite scalability.',
    url: `${domain}/about`,
    images: [{ url: `${domain}/og-image.png`, width: 1200, height: 630, alt: 'About Astras AI' }],
  },
  twitter: {
    title: 'About Astras AI — Bangalore\'s AI Innovation Studio',
    description: 'Meet the team building intelligent websites, apps, and AI agents in Bangalore.',
  },
};

export default function AboutPage() {
  return <About />;
}
