import { Metadata } from 'next';
import Link from 'next/link';

const domain = 'https://astrasai.in';

export const metadata: Metadata = {
  title: 'Pricing — Astras AI | AI Websites, Apps & Agents Starting ₹15,000',
  description:
    'Transparent pricing for AI website development, mobile apps, AI agents, and digital marketing. Astras AI delivers world-class AI solutions starting from ₹15,000. View all plans.',
  keywords: [
    'AI website cost India', 'AI agency pricing Bangalore', 'AI app development cost',
    'how much AI website costs', 'AI agent development price', 'digital marketing pricing India',
    'mobile app development cost Bangalore', 'startup MVP price India',
  ],
  alternates: { canonical: `${domain}/pricing` },
  openGraph: {
    title: 'Pricing — Astras AI | AI Services Starting ₹15,000',
    description: 'Transparent, affordable pricing for AI websites, apps, agents, and marketing. No hidden fees.',
    url: `${domain}/pricing`,
    locale: 'en_IN',
    images: [{ url: `${domain}/og-image.jpg`, width: 1200, height: 630, alt: 'Astras AI Pricing' }],
  },
};

const pricingPlans = [
  {
    category: 'AI Website Development',
    href: '/services/ai-website-development',
    plans: [
      {
        name: 'Starter',
        price: '₹15,000',
        timeline: '1–2 weeks',
        description: 'Perfect for freelancers and small businesses',
        features: [
          '5–7 page website',
          'Mobile responsive design',
          'Basic SEO optimization',
          'Contact form integration',
          'Google Analytics setup',
          '1 month free support',
        ],
        highlight: false,
      },
      {
        name: 'Business',
        price: '₹45,000',
        timeline: '3–4 weeks',
        description: 'Ideal for growing businesses wanting AI features',
        features: [
          '10–15 page website',
          'AI chatbot integration',
          'Advanced SEO + schema markup',
          'Blog / CMS setup',
          'WhatsApp integration',
          'Performance optimization',
          '3 months free support',
        ],
        highlight: true,
      },
      {
        name: 'Enterprise',
        price: '₹1,20,000+',
        timeline: '6–10 weeks',
        description: 'Full-featured web application with AI capabilities',
        features: [
          'Custom web application',
          'User authentication & dashboard',
          'AI-powered personalization',
          'Payment gateway integration',
          'Custom AI agents',
          'Multi-language support',
          '6 months free support',
        ],
        highlight: false,
      },
    ],
  },
  {
    category: 'Mobile App Development',
    href: '/services/mobile-app-development',
    plans: [
      {
        name: 'Basic App',
        price: '₹50,000',
        timeline: '4–6 weeks',
        description: 'Simple mobile app for iOS & Android',
        features: [
          'Flutter cross-platform app',
          'Up to 8 screens',
          'Basic API integration',
          'Push notifications',
          'App Store submission',
          '1 month support',
        ],
        highlight: false,
      },
      {
        name: 'AI-Powered App',
        price: '₹1,25,000',
        timeline: '8–12 weeks',
        description: 'Feature-rich app with AI capabilities',
        features: [
          'Flutter or React Native',
          'AI recommendations engine',
          'User authentication',
          'Real-time features',
          'Custom backend API',
          'Analytics dashboard',
          '3 months support',
        ],
        highlight: true,
      },
      {
        name: 'Super App',
        price: '₹3,00,000+',
        timeline: '16–24 weeks',
        description: 'Multi-feature enterprise mobile platform',
        features: [
          'Custom native or cross-platform',
          'Multiple user roles',
          'AI/ML integration',
          'Payment processing',
          'Admin panel',
          'Scalable backend',
          '6 months support',
        ],
        highlight: false,
      },
    ],
  },
  {
    category: 'AI Agents & Automation',
    href: '/services/ai-agents',
    plans: [
      {
        name: 'Chatbot',
        price: '₹25,000',
        timeline: '1–2 weeks',
        description: 'Basic AI chatbot for your website or WhatsApp',
        features: [
          'FAQ-based AI chatbot',
          'WhatsApp or website integration',
          'Up to 50 intents',
          'Basic analytics',
          '1 month training & support',
        ],
        highlight: false,
      },
      {
        name: 'Smart Agent',
        price: '₹75,000',
        timeline: '3–5 weeks',
        description: 'Autonomous AI agent for business tasks',
        features: [
          'LLM-powered agent (GPT-4/Gemini)',
          'Custom business logic',
          'CRM integration',
          'Email & WhatsApp automation',
          'Lead qualification',
          'Monthly optimization',
        ],
        highlight: true,
      },
      {
        name: 'Full Automation',
        price: '₹2,00,000+',
        timeline: '8–12 weeks',
        description: 'Complete business process automation',
        features: [
          'Multi-agent orchestration',
          'Full workflow automation',
          'ERP/CRM integration',
          'Document processing (OCR)',
          'Custom AI model training',
          'Dedicated support',
        ],
        highlight: false,
      },
    ],
  },
  {
    category: 'Digital Marketing & SEO',
    href: '/services/digital-marketing',
    plans: [
      {
        name: 'Starter',
        price: '₹12,000/mo',
        timeline: 'Monthly',
        description: 'Essential digital marketing for small businesses',
        features: [
          'Basic SEO (10 keywords)',
          '8 social media posts/month',
          'Google Analytics reporting',
          'Monthly strategy call',
        ],
        highlight: false,
      },
      {
        name: 'Growth',
        price: '₹30,000/mo',
        timeline: 'Monthly',
        description: 'Full-service AI digital marketing',
        features: [
          'Advanced SEO (30+ keywords)',
          'Google Ads management',
          '20 social media posts/month',
          'Content marketing (2 blogs)',
          'Email marketing',
          'Weekly reports',
        ],
        highlight: true,
      },
      {
        name: 'Dominance',
        price: '₹75,000/mo',
        timeline: 'Monthly',
        description: 'Total digital dominance package',
        features: [
          'Full SEO + AEO strategy',
          'Google + Meta Ads',
          'Daily social media content',
          'Video marketing',
          '4 blog posts/month',
          'AI-powered analytics',
          'Dedicated account manager',
        ],
        highlight: false,
      },
    ],
  },
];

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-black text-white py-32 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-950/30 text-cyan-300 text-xs font-mono uppercase tracking-wider mb-6">
            Pricing
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Transparent{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
              Pricing
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            No hidden fees. No surprises. World-class AI solutions built for Indian businesses — 
            from startups to enterprises. All prices in INR.
          </p>
        </div>

        {/* Pricing Sections */}
        <div className="space-y-24">
          {pricingPlans.map((section) => (
            <div key={section.category}>
              <div className="flex items-center gap-4 mb-10">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent to-cyan-500/50" />
                <h2 className="text-2xl md:text-3xl font-bold text-white text-center px-4">
                  {section.category}
                </h2>
                <div className="h-px flex-1 bg-gradient-to-l from-transparent to-cyan-500/50" />
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {section.plans.map((plan) => (
                  <div
                    key={plan.name}
                    className={`relative rounded-2xl border p-8 flex flex-col transition-all duration-300 ${
                      plan.highlight
                        ? 'border-cyan-500/60 bg-gradient-to-br from-cyan-950/30 to-purple-950/20 shadow-[0_0_30px_rgba(0,240,255,0.15)]'
                        : 'border-white/10 bg-white/5 hover:border-cyan-500/30'
                    }`}
                  >
                    {plan.highlight && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                        <span className="px-4 py-1 rounded-full bg-cyan-500 text-black text-xs font-bold uppercase">
                          Most Popular
                        </span>
                      </div>
                    )}

                    <div className="mb-6">
                      <h3 className="text-xl font-bold text-white mb-1">{plan.name}</h3>
                      <p className="text-gray-400 text-sm mb-4">{plan.description}</p>
                      <div className="text-4xl font-bold text-cyan-400 mb-1">{plan.price}</div>
                      <div className="text-gray-500 text-sm">Timeline: {plan.timeline}</div>
                    </div>

                    <ul className="space-y-3 mb-8 flex-grow">
                      {plan.features.map((f) => (
                        <li key={f} className="flex items-start gap-2 text-gray-400 text-sm">
                          <span className="text-cyan-400 mt-0.5">✓</span>
                          {f}
                        </li>
                      ))}
                    </ul>

                    <Link
                      href="/contact"
                      className={`w-full py-3 rounded-lg font-bold text-center transition-all ${
                        plan.highlight
                          ? 'bg-cyan-500 hover:bg-cyan-400 text-black'
                          : 'border border-cyan-500/30 hover:bg-cyan-500/10 text-cyan-400'
                      }`}
                    >
                      Get Started
                    </Link>
                  </div>
                ))}
              </div>

              <p className="text-center text-gray-500 text-sm mt-4">
                Need something custom?{' '}
                <Link href={section.href} className="text-cyan-400 hover:underline">
                  Learn more about {section.category}
                </Link>{' '}
                or{' '}
                <Link href="/contact" className="text-cyan-400 hover:underline">
                  contact us for a custom quote
                </Link>.
              </p>
            </div>
          ))}
        </div>

        {/* FAQ Teaser */}
        <div className="mt-24 text-center p-10 rounded-2xl border border-white/10 bg-gradient-to-br from-cyan-950/10 to-purple-950/10">
          <h2 className="text-2xl font-bold text-white mb-3">Have pricing questions?</h2>
          <p className="text-gray-400 mb-6">All projects come with a free 30-minute consultation call.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/faq" className="px-8 py-3 rounded-lg border border-white/20 hover:border-cyan-500/50 text-white hover:text-cyan-400 transition-colors font-medium">
              View FAQ
            </Link>
            <Link href="/contact" className="px-8 py-3 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-black font-bold transition-colors">
              Book Free Consultation
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
