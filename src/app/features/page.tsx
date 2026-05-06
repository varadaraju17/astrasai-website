import { Metadata } from 'next';
import Features from "@/components/Features";

const domain = 'https://www.astrasai.in';

export const metadata: Metadata = {
  title: 'Why Choose Astras AI — AI Technology Capabilities & Key Features',
  description:
    'Discover what makes Astras AI the top choice in Bangalore: cutting-edge AI technology, rapid delivery, enterprise-grade security, global scalability, and a proven track record with 50+ clients across India and the world.',
  keywords: [
    'AI agency features India', 'why choose Astras AI',
    'AI technology capabilities', 'top AI development features Bangalore',
    'enterprise AI solutions India', 'AI agency advantages',
  ],
  alternates: {
    canonical: `${domain}/features`,
  },
  openGraph: {
    title: 'Why Astras AI — Capabilities that Set Us Apart',
    description: 'From AI websites to autonomous agents — discover the technology, process, and expertise that make Astras AI the #1 AI agency in Bangalore.',
    url: `${domain}/features`,
    images: [{ url: `${domain}/og-image.png`, width: 1200, height: 630, alt: 'Astras AI Features and Capabilities' }],
  },
};

export default function FeaturesPage() {
  return <Features />;
}
