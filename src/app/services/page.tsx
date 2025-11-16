import { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/pageSeo';
import Services from '@/components/Services';

export const metadata: Metadata = generatePageMetadata({
  title: 'AI & Website Services in Bangalore',
  description: 'Explore our services, including the best AI agent and website builder services in Bangalore. We help software startups and academic projects.',
  pathname: '/services',
});

export default function ServicesPage() {
  return <Services />;
}
