import { Metadata } from 'next';
import Link from 'next/link';

const domain = 'https://astrasai.in';

type ServicePageConfig = {
  slug: string;
  title: string;
  pageTitle: string;
  description: string;
  keywords: string[];
  color: 'cyan' | 'purple' | 'green' | 'pink' | 'yellow';
  emoji: string;
  tagline: string;
  startingPrice: string;
  timeline: string;
  what: { title: string; desc: string; price: string }[];
  stats: { value: string; label: string }[];
};

const serviceConfigs: ServicePageConfig[] = [
  {
    slug: 'mobile-app-development',
    pageTitle: 'AI Mobile App Development Bangalore | Astras AI — Flutter & React Native',
    title: 'AI Mobile App Development Bangalore',
    description: 'Astras AI builds AI-powered mobile apps in Bangalore for iOS and Android. Flutter and React Native cross-platform apps with AI features. Starting from ₹50,000. Delivered in 6–12 weeks.',
    keywords: ['mobile app development Bangalore', 'Flutter app development India', 'React Native company Bangalore', 'AI mobile app development', 'cross-platform app development India', 'iOS Android app Bangalore'],
    color: 'cyan',
    emoji: '📱',
    tagline: 'Flutter & React Native',
    startingPrice: '₹50,000',
    timeline: '6–12 weeks',
    what: [
      { title: 'Flutter Cross-Platform App', desc: 'One codebase for both iOS and Android. Native performance with beautiful UI. Most cost-effective for startups.', price: 'From ₹50,000' },
      { title: 'React Native App', desc: 'Facebook\'s proven framework for cross-platform apps. Large ecosystem and excellent performance for complex apps.', price: 'From ₹60,000' },
      { title: 'AI-Powered Mobile App', desc: 'Apps with AI recommendation engines, voice recognition, image processing, and predictive analytics built in.', price: 'From ₹1,20,000' },
      { title: 'E-Commerce App', desc: 'Full shopping app with cart, payments (Razorpay/Stripe), order tracking, and AI product recommendations.', price: 'From ₹90,000' },
      { title: 'On-Demand App', desc: 'Uber/Swiggy-style apps with real-time GPS tracking, driver/customer interfaces, and payment integration.', price: 'From ₹2,00,000' },
      { title: 'SaaS Mobile App', desc: 'Subscription-based mobile applications with user management, in-app purchases, and analytics dashboards.', price: 'From ₹1,50,000' },
    ],
    stats: [
      { value: '6–12 wks', label: 'Delivery timeline' },
      { value: '100%', label: 'Cross-platform coverage' },
      { value: '4.8★', label: 'App store rating avg.' },
      { value: '50+', label: 'Apps delivered' },
    ],
  },
  {
    slug: 'digital-marketing',
    pageTitle: 'AI Digital Marketing Agency Bangalore | Astras AI — SEO, Ads & Social',
    title: 'AI Digital Marketing Bangalore',
    description: 'Astras AI provides AI-enhanced digital marketing in Bangalore. SEO, Google Ads, social media marketing, content strategy, and email marketing. Data-driven results starting from ₹12,000/month.',
    keywords: ['digital marketing agency Bangalore', 'AI digital marketing India', 'SEO services Bangalore', 'Google Ads agency India', 'social media marketing Bangalore', 'content marketing India'],
    color: 'green',
    emoji: '📈',
    tagline: 'SEO · Ads · Social · Content',
    startingPrice: '₹12,000/mo',
    timeline: 'Monthly retainer',
    what: [
      { title: 'AI SEO Optimization', desc: 'Technical SEO, keyword research, on-page optimization, schema markup, and backlink building to dominate Google search.', price: 'From ₹12,000/mo' },
      { title: 'Google Ads (SEM)', desc: 'AI-optimized Google Ads campaigns with smart bidding, A/B testing, and continuous optimization for maximum ROI.', price: 'From ₹15,000/mo' },
      { title: 'Social Media Marketing', desc: 'AI-generated content, smart scheduling, community management, and paid social ads on Instagram, LinkedIn, and Facebook.', price: 'From ₹15,000/mo' },
      { title: 'Content Marketing', desc: 'SEO-optimized blog posts, landing pages, and long-form content that rank on Google and establish your brand authority.', price: 'From ₹20,000/mo' },
      { title: 'Email Marketing', desc: 'Personalized email sequences, newsletter campaigns, and automated drip campaigns that convert leads into customers.', price: 'From ₹8,000/mo' },
      { title: 'Full Marketing Suite', desc: 'Complete digital marketing management across all channels with dedicated account manager and weekly reporting.', price: 'From ₹50,000/mo' },
    ],
    stats: [
      { value: '90 days', label: 'To see Google ranking results' },
      { value: '3x', label: 'Average ROI on ad spend' },
      { value: '300%', label: 'Avg. organic traffic increase' },
      { value: '40+', label: 'Marketing clients served' },
    ],
  },
  {
    slug: 'startup-mvp',
    pageTitle: 'AI Startup MVP Development India | Astras AI — Launch in 6 Weeks',
    title: 'AI Startup MVP Development India',
    description: 'Astras AI builds investor-ready startup MVPs in 3–8 weeks. AI-integrated web and mobile apps, startup consulting, and scalable architecture. Starting from ₹50,000. Trusted by 15+ Indian startups.',
    keywords: ['startup MVP development India', 'AI startup Bangalore', 'rapid MVP development company', 'startup tech partner India', 'MVP app development Bangalore', 'SaaS MVP development India'],
    color: 'yellow',
    emoji: '🚀',
    tagline: 'From Idea to Launch',
    startingPrice: '₹50,000',
    timeline: '3–8 weeks',
    what: [
      { title: 'Prototype & Wireframes', desc: 'High-fidelity interactive mockups so you can validate your idea and get investor feedback before writing code.', price: 'From ₹15,000' },
      { title: 'Web MVP', desc: 'Functional web application with core features, user authentication, and basic analytics. Built to attract first users.', price: 'From ₹60,000' },
      { title: 'Mobile MVP', desc: 'Cross-platform mobile app MVP for iOS and Android with essential features and App Store submission.', price: 'From ₹80,000' },
      { title: 'AI-Integrated MVP', desc: 'MVP with AI features like recommendation engines, NLP, or prediction models that give you a competitive moat.', price: 'From ₹1,20,000' },
      { title: 'SaaS MVP', desc: 'Subscription-based web application with multi-tenant architecture, billing integration, and admin dashboard.', price: 'From ₹1,50,000' },
      { title: 'Scale to Product', desc: 'Post-MVP scaling: performance optimization, feature expansion, team training, and ongoing development support.', price: 'Custom' },
    ],
    stats: [
      { value: '15+', label: 'Startups launched' },
      { value: '3–8 wks', label: 'Average MVP delivery' },
      { value: '₹1.2Cr+', label: 'Funding raised by clients' },
      { value: '65%', label: 'Cost vs. traditional agencies' },
    ],
  },
  {
    slug: 'seo-optimization',
    pageTitle: 'AI SEO Optimization Bangalore | Astras AI — Rank on Google in 90 Days',
    title: 'AI SEO Optimization Bangalore',
    description: 'Astras AI provides AI-powered SEO services in Bangalore. Technical SEO, keyword research, content optimization, and backlink building. Rank on Google in 90 days. Starting from ₹12,000/month.',
    keywords: ['SEO services Bangalore', 'AI SEO optimization India', 'SEO agency Bangalore', 'technical SEO India', 'local SEO Bangalore', 'Google ranking services India'],
    color: 'cyan',
    emoji: '🔍',
    tagline: 'Rank · Traffic · Revenue',
    startingPrice: '₹12,000/mo',
    timeline: 'Results in 90 days',
    what: [
      { title: 'Technical SEO Audit', desc: 'Complete website audit: Core Web Vitals, crawlability, indexation, site structure, and schema markup analysis.', price: 'From ₹8,000 (one-time)' },
      { title: 'On-Page SEO', desc: 'Keyword optimization, meta tags, heading structure, internal linking, and content optimization for all target pages.', price: 'From ₹12,000/mo' },
      { title: 'Local SEO', desc: 'Google Business Profile optimization, local citations, NAP consistency, and map ranking for Bangalore searches.', price: 'From ₹8,000/mo' },
      { title: 'Content SEO', desc: 'AI-assisted blog writing, landing page creation, and topic clustering to rank for high-volume informational keywords.', price: 'From ₹20,000/mo' },
      { title: 'Link Building', desc: 'White-hat backlink acquisition from relevant Indian and international websites to boost domain authority.', price: 'From ₹15,000/mo' },
      { title: 'AEO (AI Search)', desc: 'Answer Engine Optimization for ChatGPT, Perplexity, and Google AI Overviews — the future of search visibility.', price: 'From ₹25,000/mo' },
    ],
    stats: [
      { value: '90 days', label: 'To measurable ranking improvement' },
      { value: '300%', label: 'Avg. organic traffic growth' },
      { value: 'Page 1', label: 'Target for all clients' },
      { value: '30+', label: 'SEO clients served' },
    ],
  },
  {
    slug: 'business-automation',
    pageTitle: 'AI Business Automation Bangalore | Astras AI — Save 10 Hours/Week',
    title: 'AI Business Automation Bangalore',
    description: 'Astras AI automates your business workflows with custom AI solutions in Bangalore. CRM automation, document processing, email automation, and reporting. Save 10+ hours per week starting from ₹40,000.',
    keywords: ['AI business automation Bangalore', 'workflow automation India', 'business process automation AI', 'RPA solutions India', 'AI automation company Bangalore'],
    color: 'pink',
    emoji: '⚡',
    tagline: 'Automate · Scale · Grow',
    startingPrice: '₹40,000',
    timeline: '2–6 weeks',
    what: [
      { title: 'CRM Automation', desc: 'Automate lead capture, follow-ups, deal updates, and reporting in your CRM. Never miss a lead again.', price: 'From ₹40,000' },
      { title: 'Document Processing', desc: 'AI extracts data from invoices, contracts, and forms automatically. 99.9% accuracy with zero manual entry.', price: 'From ₹60,000' },
      { title: 'Email Automation', desc: 'Personalized email sequences, auto-responses, and drip campaigns triggered by user behavior.', price: 'From ₹20,000' },
      { title: 'Reporting Automation', desc: 'Automated daily/weekly/monthly reports delivered to your inbox or Slack. Real-time business dashboards.', price: 'From ₹30,000' },
      { title: 'Multi-System Integration', desc: 'Connect your CRM, ERP, email, payments, and other tools into one automated workflow using AI middleware.', price: 'From ₹80,000' },
      { title: 'Full Automation Suite', desc: 'End-to-end business automation across all departments: sales, support, finance, HR, and operations.', price: 'Custom' },
    ],
    stats: [
      { value: '10 hrs', label: 'Avg. time saved per week' },
      { value: '60%', label: 'Reduction in operational costs' },
      { value: '99.9%', label: 'Accuracy in document processing' },
      { value: '2–6 wks', label: 'Implementation timeline' },
    ],
  },
  {
    slug: 'social-media',
    pageTitle: 'AI Social Media Management India | Astras AI — Viral Growth',
    title: 'AI Social Media Management India',
    description: 'Astras AI manages your social media with AI-generated content, smart scheduling, and growth analytics. Instagram, LinkedIn, YouTube, and Facebook. Starting from ₹15,000/month.',
    keywords: ['social media management India', 'AI social media Bangalore', 'Instagram management agency India', 'LinkedIn marketing Bangalore', 'social media agency India'],
    color: 'purple',
    emoji: '📣',
    tagline: 'Create · Post · Grow',
    startingPrice: '₹15,000/mo',
    timeline: 'Monthly retainer',
    what: [
      { title: 'Content Creation', desc: 'AI-assisted design and copywriting for posts, stories, reels, and carousels. Consistent brand voice across all platforms.', price: 'From ₹15,000/mo' },
      { title: 'Instagram Growth', desc: 'Strategic content planning, hashtag optimization, and engagement growth on Instagram for your brand or personal profile.', price: 'From ₹15,000/mo' },
      { title: 'LinkedIn Marketing', desc: 'Professional content, company page management, and LinkedIn ads to reach decision-makers and B2B clients.', price: 'From ₹18,000/mo' },
      { title: 'YouTube Management', desc: 'Video content strategy, thumbnail design, SEO-optimized descriptions, and channel growth for YouTube.', price: 'From ₹25,000/mo' },
      { title: 'Paid Social Ads', desc: 'Meta Ads (Facebook + Instagram), LinkedIn Ads, and YouTube Ads with AI optimization for lowest cost-per-click.', price: 'From ₹20,000/mo' },
      { title: 'Full Social Suite', desc: 'Complete management of all social channels with daily posting, community management, and monthly analytics.', price: 'From ₹45,000/mo' },
    ],
    stats: [
      { value: '300%', label: 'Avg. follower growth in 6 months' },
      { value: '10x', label: 'Content output vs. manual' },
      { value: '4x', label: 'Engagement rate improvement' },
      { value: '25+', label: 'Social media clients' },
    ],
  },
];

export async function generateStaticParams() {
  return serviceConfigs.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const config = serviceConfigs.find((s) => s.slug === params.slug);
  if (!config) return {};
  return {
    title: config.pageTitle,
    description: config.description,
    keywords: config.keywords,
    alternates: { canonical: `${domain}/services/${config.slug}` },
    openGraph: {
      title: config.pageTitle,
      description: config.description,
      url: `${domain}/services/${config.slug}`,
      locale: 'en_IN',
      images: [{ url: `${domain}/og-image.jpg`, width: 1200, height: 630, alt: config.title }],
    },
  };
}

const colorClasses: Record<string, { text: string; border: string; bg: string; btn: string }> = {
  cyan: { text: 'text-cyan-400', border: 'border-cyan-500/30', bg: 'bg-cyan-950/30', btn: 'bg-cyan-500 hover:bg-cyan-400 text-black' },
  purple: { text: 'text-purple-400', border: 'border-purple-500/30', bg: 'bg-purple-950/30', btn: 'bg-purple-600 hover:bg-purple-500 text-white' },
  green: { text: 'text-green-400', border: 'border-green-500/30', bg: 'bg-green-950/30', btn: 'bg-green-600 hover:bg-green-500 text-white' },
  pink: { text: 'text-pink-400', border: 'border-pink-500/30', bg: 'bg-pink-950/30', btn: 'bg-pink-600 hover:bg-pink-500 text-white' },
  yellow: { text: 'text-yellow-400', border: 'border-yellow-500/30', bg: 'bg-yellow-950/30', btn: 'bg-yellow-500 hover:bg-yellow-400 text-black' },
};

export default function ServicePage({ params }: { params: { slug: string } }) {
  const config = serviceConfigs.find((s) => s.slug === params.slug);
  if (!config) return <div className="min-h-screen bg-black text-white flex items-center justify-center"><p>Service not found. <Link href="/services" className="text-cyan-400 underline">View all services →</Link></p></div>;

  const c = colorClasses[config.color];

  return (
    <main className="min-h-screen bg-black text-white">
      <section className={`pt-32 pb-20 px-4 bg-gradient-to-b from-${config.color}-950/20 to-black`}>
        <div className="max-w-5xl mx-auto text-center">
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/" className="hover:text-cyan-400">Home</Link> &rsaquo;{' '}
            <Link href="/services" className="hover:text-cyan-400">Services</Link> &rsaquo;{' '}
            <span className="text-gray-300">{config.title}</span>
          </nav>
          <div className={`inline-block text-5xl mb-6`}>{config.emoji}</div>
          <span className={`inline-block px-4 py-1.5 rounded-full border ${c.border} ${c.bg} ${c.text} text-xs font-mono uppercase tracking-wider mb-6`}>
            {config.tagline}
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">{config.title}</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-10">
            {config.description.split('.')[0]}. Starting from{' '}
            <strong className={c.text}>{config.startingPrice}</strong>.{' '}
            Delivered in {config.timeline}.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className={`px-8 py-4 rounded-lg ${c.btn} font-bold transition-colors`}>Get Free Quote</Link>
            <Link href="/pricing" className="px-8 py-4 rounded-lg border border-white/20 hover:border-cyan-500/50 text-white hover:text-cyan-400 transition-colors">View Pricing</Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">What We Offer</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {config.what.map((w) => (
              <div key={w.title} className={`p-6 rounded-xl border border-white/10 bg-white/5 hover:${c.border} transition-colors`}>
                <h3 className="text-xl font-bold text-white mb-2">{w.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{w.desc}</p>
                <span className={`${c.text} font-bold text-sm`}>{w.price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-10">Results Our Clients Achieve</h2>
          <div className={`grid grid-cols-2 md:grid-cols-4 gap-6`}>
            {config.stats.map(({ value, label }) => (
              <div key={label} className={`text-center p-6 rounded-xl border ${c.border} ${c.bg}`}>
                <div className={`text-4xl font-bold ${c.text} mb-2`}>{value}</div>
                <div className="text-gray-400 text-sm">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center p-10 rounded-2xl border border-white/10 bg-gradient-to-br from-cyan-950/10 to-purple-950/10">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-gray-400 mb-8">Get a free 30-minute consultation. We&apos;ll discuss your specific needs and provide a custom quote within 24 hours.</p>
          <Link href="/contact" className={`inline-block px-10 py-4 rounded-lg ${c.btn} font-bold transition-colors text-lg`}>
            Book Free Consultation →
          </Link>
          <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm text-gray-500">
            <span>✓ Free consultation</span>
            <span>✓ Custom quote in 24hrs</span>
            <span>✓ No hidden fees</span>
            <span>✓ 30-day support included</span>
          </div>
        </div>
      </section>
    </main>
  );
}
