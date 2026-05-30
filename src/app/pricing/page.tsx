import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Sparkles, Check } from 'lucide-react';
import Breadcrumb from '@/components/Breadcrumb';

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

// --- CSS Aurora Background ---
const AuroraBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none bg-black">
    {/* Base Grid Pattern */}
    <div
      className="absolute inset-0 z-0 opacity-[0.12]"
      style={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.08) 1px, transparent 1px)`,
        backgroundSize: '45px 45px',
        maskImage: 'radial-gradient(ellipse 80% 50% at 50% 50%, black 40%, transparent 100%)',
        WebkitMaskImage: 'radial-gradient(ellipse 80% 50% at 50% 50%, black 40%, transparent 100%)',
      }}
    />
    {/* Orbs */}
    <div className="absolute top-1/3 left-1/4 w-[40vw] h-[40vw] rounded-full"
      style={{
        background: 'rgba(0,240,255,0.14)',
        filter: 'blur(100px)',
        animation: 'pricingOrb1 20s ease-in-out infinite',
        willChange: 'transform',
      }}
    />
    <div className="absolute bottom-1/3 right-1/4 w-[35vw] h-[35vw] rounded-full"
      style={{
        background: 'rgba(112,0,255,0.12)',
        filter: 'blur(110px)',
        animation: 'pricingOrb2 24s ease-in-out infinite',
        willChange: 'transform',
      }}
    />
    <style>{`
      @keyframes pricingOrb1 {
        0%, 100% { transform: translate(0, 0) scale(1); }
        50% { transform: translate(4vw, -4vh) scale(1.08); }
      }
      @keyframes pricingOrb2 {
        0%, 100% { transform: translate(0, 0) scale(1); }
        50% { transform: translate(-4vw, 4vh) scale(0.92); }
      }
    `}</style>
  </div>
);

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-black text-white py-32 px-4 relative overflow-hidden font-body">
      <AuroraBackground />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Breadcrumb */}
        <div className="flex justify-center mb-6">
          <Breadcrumb
            items={[
              { label: 'Home', href: '/' },
              { label: 'Pricing' }
            ]}
          />
        </div>

        {/* Header */}
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-950/30 text-cyan-300 text-xs font-semibold tracking-wider uppercase mb-6 shadow-[0_0_20px_rgba(0,240,255,0.15)]">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
            <span>TRANSPARENT_MUTATIONS</span>
          </div>
          
          <h1 className="font-display font-black tracking-tight text-white leading-tight mb-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
            Sovereign <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 drop-shadow-[0_0_20px_rgba(0,240,255,0.3)]">Pricing</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto font-light leading-relaxed">
            No hidden retainers. No surprise clauses. High-fidelity systems engineered in Bangalore, deployed globally. All metrics mapped in INR.
          </p>
        </div>

        {/* Pricing Sections */}
        <div className="space-y-32">
          {pricingPlans.map((section) => (
            <div key={section.category} className="border-t border-white/10 pt-16">
              
              <div className="flex items-center gap-6 mb-12">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent to-cyan-500/30" />
                <h2 className="text-2xl md:text-4xl font-display font-bold text-white text-center px-4 tracking-tight drop-shadow-[0_0_10px_rgba(0,240,255,0.3)]">
                  {section.category}
                </h2>
                <div className="h-px flex-1 bg-gradient-to-l from-transparent to-cyan-500/30" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                {section.plans.map((plan) => (
                  <div
                    key={plan.name}
                    className={`group relative rounded-3xl border flex flex-col p-8 md:p-10 transition-all duration-500 hover:-translate-y-2 ${
                      plan.highlight
                        ? 'border-cyan-500/50 bg-gradient-to-br from-cyan-950/20 to-purple-950/20 shadow-[0_0_40px_rgba(0,240,255,0.15)] hover:border-cyan-400 hover:shadow-[0_0_60px_rgba(0,240,255,0.3)]'
                        : 'border-white/10 bg-black/60 backdrop-blur-xl hover:border-cyan-500/40 hover:shadow-[0_0_40px_rgba(0,240,255,0.1)]'
                    }`}
                  >
                    {plan.highlight && (
                      <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 shadow-lg">
                        <span className="px-4 py-1.5 rounded-full bg-cyan-500 text-black text-[10px] font-black uppercase tracking-widest flex items-center gap-1">
                          <Sparkles className="w-3 h-3 text-black fill-black" /> Most Popular
                        </span>
                      </div>
                    )}

                    <div className="mb-8">
                      <h3 className="text-2xl font-bold text-white mb-2 font-display tracking-tight group-hover:text-cyan-400 transition-colors">
                        {plan.name}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed mb-6 font-light">{plan.description}</p>
                      
                      <div className="flex items-baseline gap-1.5 my-4">
                        <span className="text-4xl md:text-5xl font-black text-cyan-400 font-display drop-shadow-[0_0_15px_rgba(0,240,255,0.2)]">
                          {plan.price}
                        </span>
                      </div>
                      
                      <div className="text-gray-500 text-xs uppercase tracking-wider font-mono">Timeline: {plan.timeline}</div>
                    </div>

                    <ul className="space-y-4 mb-8 flex-grow">
                      {plan.features.map((f) => (
                        <li key={f} className="flex items-start gap-3 text-gray-300 text-sm">
                          <div className="mt-0.5 p-0.5 rounded-full bg-cyan-950 border border-cyan-500/30 text-cyan-400 shrink-0 shadow-inner">
                            <Check className="w-3.5 h-3.5" />
                          </div>
                          <span className="font-light">{f}</span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      href="/contact"
                      className={`w-full py-4 rounded-full font-bold text-center text-sm md:text-base uppercase tracking-wider transition-all duration-300 shadow-md ${
                        plan.highlight
                          ? 'bg-cyan-500 hover:bg-cyan-400 text-black hover:shadow-[0_0_30px_rgba(0,240,255,0.5)]'
                          : 'border border-cyan-500/30 hover:bg-cyan-500 hover:text-black hover:border-cyan-400 text-cyan-400'
                      }`}
                    >
                      Get Started
                    </Link>
                  </div>
                ))}
              </div>

              <p className="text-center text-gray-500 text-xs mt-6 font-mono uppercase tracking-wide">
                Custom parameters?{' '}
                <Link href={section.href} className="text-cyan-400 hover:underline">
                  Explore {section.category} Details
                </Link>{' '}
                or{' '}
                <Link href="/contact" className="text-cyan-400 hover:underline">
                  Initiate System Scope
                </Link>.
              </p>
            </div>
          ))}
        </div>

        {/* FAQ Teaser */}
        <div className="mt-32 text-center p-12 rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-cyan-950/20 to-purple-950/10 shadow-[0_0_50px_rgba(0,240,255,0.05)] max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-display font-bold text-white mb-4">Have Pricing Questions?</h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto font-light leading-relaxed">
            All custom builds start with a detailed 30-minute system assessment. Let&apos;s map your competitive advantages together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/faq" className="px-8 py-3.5 border border-white/20 hover:border-cyan-500/50 text-white hover:text-cyan-400 rounded-xl transition-all flex items-center justify-center font-medium">
              View FAQ
            </Link>
            <Link href="/contact" className="px-8 py-3.5 bg-cyan-500 hover:bg-cyan-400 text-black font-bold rounded-xl transition-all shadow-lg shadow-cyan-500/20 flex items-center justify-center gap-2">
              Book Free Consultation <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
