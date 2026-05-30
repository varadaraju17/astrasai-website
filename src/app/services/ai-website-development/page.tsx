import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import Breadcrumb from '@/components/Breadcrumb';
import { ArrowRight, Sparkles, Laptop, ShieldCheck, Database, Rocket } from 'lucide-react';

const domain = 'https://astrasai.in';

export const metadata: Metadata = {
  title: 'AI Website Development Bangalore | Astras AI — Starting ₹15,000',
  description:
    'Astras AI builds AI-powered websites in Bangalore starting from ₹15,000. Next.js 14, AI chatbots, SEO optimization, lightning-fast performance. Delivered in 2–6 weeks. Get a free quote.',
  keywords: [
    'AI website development Bangalore', 'AI website builder India', 'Next.js development company Bangalore',
    'best website development company Bangalore', 'custom website development India',
    'website development cost Bangalore', 'AI chatbot website India',
  ],
  alternates: { canonical: `${domain}/services/ai-website-development` },
  openGraph: {
    title: 'AI Website Development Bangalore | Astras AI — Starting ₹15,000',
    description: 'Premium AI-powered websites built on Next.js 14. Chatbots, SEO, lightning speed. Delivered in 2–6 weeks from Bangalore.',
    url: `${domain}/services/ai-website-development`,
    locale: 'en_IN',
    images: [{ url: `${domain}/og-image.jpg`, width: 1200, height: 630, alt: 'AI Website Development by Astras AI Bangalore' }],
  },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'AI-Powered Website Development',
  description: 'Astras AI builds intelligent, high-performance websites with AI chatbots, personalization engines, and SEO automation. Starting from ₹15,000. Delivered in 2–6 weeks from Bangalore, India.',
  provider: { '@type': 'Organization', name: 'Astras AI', url: domain },
  serviceType: 'Web Development',
  areaServed: [{ '@type': 'Country', name: 'India' }, { '@type': 'City', name: 'Bangalore' }],
  url: `${domain}/services/ai-website-development`,
  offers: {
    '@type': 'Offer',
    availability: 'https://schema.org/InStock',
    priceCurrency: 'INR',
    priceSpecification: { '@type': 'PriceSpecification', minPrice: 15000, priceCurrency: 'INR' },
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does AI website development cost in Bangalore?',
      acceptedAnswer: { '@type': 'Answer', text: 'Astras AI builds AI-powered websites starting from ₹15,000 for basic sites up to ₹2,00,000+ for enterprise web applications. The cost depends on the number of pages, AI features required, and integrations needed.' },
    },
    {
      '@type': 'Question',
      name: 'How long does it take to build an AI website?',
      acceptedAnswer: { '@type': 'Answer', text: 'Standard business websites take 2–3 weeks. Web applications with AI chatbots, user authentication, and custom features take 4–8 weeks. We provide weekly updates and a staging link for review.' },
    },
    {
      '@type': 'Question',
      name: 'What technology does Astras AI use for website development?',
      acceptedAnswer: { '@type': 'Answer', text: 'Astras AI builds websites on Next.js 14 (React framework), which provides the best combination of performance, SEO, and AI integration capabilities. We use Tailwind CSS for design and deploy on Vercel or your preferred cloud provider.' },
    },
    {
      '@type': 'Question',
      name: 'Will my website rank on Google?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. Every website we build includes full technical SEO: proper meta tags, schema markup, sitemap, robots.txt, Core Web Vitals optimization, and mobile responsiveness. We also offer ongoing SEO services to improve your Google rankings over time.' },
    },
  ],
};

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
    {/* Dynamic Glowing Orbs */}
    <div className="absolute top-1/4 left-1/4 w-[45vw] h-[45vw] rounded-full"
      style={{
        background: 'rgba(0, 240, 255, 0.15)',
        filter: 'blur(110px)',
        animation: 'serviceOrb1 20s ease-in-out infinite',
        willChange: 'transform',
      }}
    />
    <div className="absolute bottom-1/4 right-1/4 w-[40vw] h-[40vw] rounded-full"
      style={{
        background: 'rgba(157, 78, 221, 0.08)',
        filter: 'blur(120px)',
        animation: 'serviceOrb2 25s ease-in-out infinite',
        willChange: 'transform',
      }}
    />
    <style>{`
      @keyframes serviceOrb1 {
        0%, 100% { transform: translate(0, 0) scale(1); }
        50% { transform: translate(4vw, -5vh) scale(1.1); }
      }
      @keyframes serviceOrb2 {
        0%, 100% { transform: translate(0, 0) scale(1); }
        50% { transform: translate(-4vw, 4vh) scale(0.9); }
      }
    `}</style>
  </div>
);

export default function AIWebsiteDevelopmentPage() {
  return (
    <>
      <Script id="service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <main className="min-h-screen bg-black text-white relative overflow-hidden font-body">
        {/* Aurora Ambience */}
        <AuroraBackground />

        {/* ── HERO SECTION ── */}
        <section className="relative pt-32 pb-20 px-4 md:px-8 z-10">
          <div className="max-w-5xl mx-auto text-center flex flex-col items-center">
            
            <div className="flex justify-center mb-6">
              <Breadcrumb
                items={[
                  { label: 'Home', href: '/' },
                  { label: 'Services', href: '/services' },
                  { label: 'AI Website Development' }
                ]}
              />
            </div>

            <div className="text-6xl mb-6 animate-pulse">💻</div>
            
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-950/20 text-cyan-400 text-xs font-semibold tracking-wider uppercase mb-8 shadow-inner">
              <Sparkles className="w-3.5 h-3.5 animate-pulse" />
              <span>BRAHMASTRA SERIES · WEB</span>
            </div>

            <h1 className="font-display font-black tracking-tight text-white leading-tight mb-8 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
              AI-Powered{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-400">
                Web Development
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-12 max-w-3xl font-light">
              We build intelligent, high-performance websites built on Next.js 14, dynamic lead capture, and absolute SEO perfection. Starting from{' '}
              <span className="text-cyan-400 font-semibold">₹15,000</span>. Completed in 2–6 weeks.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full sm:w-auto">
              <Link href="/contact" className="relative flex items-center justify-center gap-2.5 px-8 py-4 rounded-full font-bold text-sm md:text-base transition-all duration-300 w-full sm:w-auto bg-cyan-500 text-black hover:bg-cyan-400 hover:shadow-[0_0_30px_rgba(0,240,255,0.5)]">
                Get Free Quote
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/pricing" className="flex items-center justify-center gap-2.5 px-8 py-4 rounded-full font-bold text-sm md:text-base bg-white/5 text-white border border-white/20 hover:bg-white/10 hover:border-cyan-400/50 backdrop-blur-md transition-all duration-300 w-full sm:w-auto">
                View Pricing
              </Link>
            </div>

          </div>
        </section>

        {/* ── WHAT WE BUILD ── */}
        <section className="relative py-24 px-4 md:px-8 z-10 border-t border-white/10 bg-black/40">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-display font-bold text-white tracking-tight">
                Sovereign <span className="text-cyan-400">Capabilities</span>
              </h2>
              <p className="text-gray-400 mt-4 text-base md:text-lg max-w-2xl mx-auto font-light">
                Premium, speed-optimized digital architecture constructed to dominate search and convert visitors.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {[
                { title: 'Business Platforms', desc: 'Convert traffic with professional, zero-delay websites loaded with integrated WhatsApp and automated form qualification systems.', price: 'From ₹15,000' },
                { title: 'AI Chatbot Interfaces', desc: 'Train automated customer assistants qualified to address user queries, schedule appointments, and capture leads 24/7.', price: 'From ₹35,000' },
                { title: 'Full E-Commerce Suites', desc: 'Modern catalogs optimized with smart recommendations, zero-checkout friction, and dynamic discount triggers.', price: 'From ₹60,000' },
                { title: 'Custom Web Apps', desc: 'Secure custom apps with advanced role structures, database syncs, payment splits, and clean administrative control cards.', price: 'From ₹1,20,000' },
                { title: 'CMS-Managed Hubs', desc: 'High-performance headless WordPress or Sanity platforms engineered for rapid content uploads and seamless team management.', price: 'From ₹20,000' },
                { title: 'High-Converting Landers', desc: 'Single pages engineered with strict A/B guidelines to direct focus entirely on product conversion or marketing capture.', price: 'From ₹8,000' },
              ].map((item) => (
                <div 
                  key={item.title} 
                  className="group flex flex-col justify-between p-8 rounded-2xl bg-black/60 backdrop-blur-xl border border-white/10 shadow-[0_0_30px_rgba(0,240,255,0.02)] hover:border-cyan-400/60 hover:shadow-[0_0_40px_rgba(0,240,255,0.15)] transition-all duration-500"
                >
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors font-display tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-6 font-light">
                      {item.desc}
                    </p>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-white/5">
                    <span className="text-cyan-400 font-bold text-sm tracking-wide">{item.price}</span>
                    <span className="text-xs uppercase tracking-wider text-cyan-400/70 group-hover:text-cyan-300 flex items-center gap-1 transition-colors">
                      Request <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── WORK PROCESS ── */}
        <section className="relative py-24 px-4 md:px-8 z-10 border-t border-white/10 bg-white/5">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-center text-white tracking-tight mb-16">
              Development <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Chronicle</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { step: '01', title: 'Discovery Sync', desc: 'A dedicated call mapping goals, target keywords, and integrations.', icon: Database },
                { step: '02', title: 'Tactical Design', desc: 'Stunning Figma wireframes refined and approved before any coding.', icon: ShieldCheck },
                { step: '03', title: 'Next.js Build', desc: 'Deploying optimized React trees with full micro-animation triggers.', icon: Laptop },
                { step: '04', title: 'Deploy & Audit', desc: 'Core Web Vitals launch, sitemap sync, and organic Google checklist.', icon: Rocket },
              ].map((s) => (
                <div key={s.step} className="flex flex-col p-6 rounded-2xl border border-white/5 bg-black/40 hover:border-cyan-500/30 transition-all duration-300">
                  <div className="text-3xl font-black text-cyan-500/20 font-mono mb-4">{s.step}</div>
                  <h3 className="text-lg font-bold text-white mb-2 font-display">{s.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed font-light">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TECH STACK ── */}
        <section className="relative py-24 px-4 md:px-8 z-10 border-t border-white/10 bg-black/40">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white tracking-tight mb-6">
              Elite Technology <span className="text-cyan-400">Blueprint</span>
            </h2>
            <p className="text-gray-400 mb-12 max-w-xl mx-auto font-light text-sm md:text-base">
              We compile code exclusively on high-performance frameworks serving fast speed scales.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {['Next.js 14', 'React 18', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'OpenAI GPT-4', 'Vercel Node', 'PostgreSQL', 'Supabase', 'Stripe Integration'].map((tech) => (
                <span 
                  key={tech} 
                  className="px-5 py-2 rounded-full border border-cyan-500/10 bg-cyan-950/10 text-cyan-400 text-xs font-semibold hover:border-cyan-400 hover:text-white hover:shadow-[0_0_15px_rgba(0,240,255,0.2)] transition-all duration-300 cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ SECTION ── */}
        <section className="relative py-24 px-4 md:px-8 z-10 border-t border-white/10 bg-white/5">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-display font-bold text-white tracking-tight">
                Frequently Addressed <span className="text-cyan-400">Inquiries</span>
              </h2>
            </div>
            <div className="space-y-4">
              {faqSchema.mainEntity.map((item, i) => (
                <details 
                  key={i} 
                  className="group border border-white/10 rounded-2xl bg-black/60 overflow-hidden hover:border-cyan-500/30 transition-all duration-300"
                >
                  <summary className="flex items-center justify-between p-6 cursor-pointer list-none font-bold text-white group-hover:text-cyan-300 transition-colors">
                    <span className="pr-4 font-display text-sm md:text-base">{item.name}</span>
                    <span className="text-cyan-400 text-xl font-light shrink-0 group-open:rotate-45 transition-transform duration-300">+</span>
                  </summary>
                  <div className="px-6 pb-6 text-gray-400 text-sm md:text-base leading-relaxed border-t border-white/5 pt-4 font-light">
                    {item.acceptedAnswer.text}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ── CALL TO ACTION ── */}
        <section className="relative py-24 px-4 md:px-8 z-10">
          <div className="max-w-3xl mx-auto text-center p-12 rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-cyan-950/20 to-purple-950/10 shadow-[0_0_50px_rgba(0,240,255,0.08)]">
            <h2 className="text-2xl md:text-4xl font-display font-bold text-white mb-4">Ready to Launch Your Platform?</h2>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto font-light leading-relaxed">
              Book a custom quote. Get complete wireframes, a transparent timeline, and technical SEO structure mapped within 24 hours.
            </p>
            <Link href="/contact" className="inline-block px-10 py-4 rounded-full bg-cyan-500 text-black hover:bg-cyan-400 hover:shadow-[0_0_30px_rgba(0,240,255,0.5)] font-bold transition-all text-lg shadow-lg">
              Start Project Development →
            </Link>
            <p className="text-gray-500 text-xs mt-6">Starting from ₹15,000 · Completed in 2–6 Weeks · 30 Days Sovereign Support</p>
          </div>
        </section>
      </main>
    </>
  );
}
