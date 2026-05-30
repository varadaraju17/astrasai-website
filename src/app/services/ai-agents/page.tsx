import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import Breadcrumb from '@/components/Breadcrumb';
import { ArrowRight, Sparkles, CheckCircle2, Zap, Cpu, MessageSquare, Bot, Calendar, Layers, ShieldCheck, Mail, Database } from 'lucide-react';

const domain = 'https://astrasai.in';

export const metadata: Metadata = {
  title: 'Custom AI Agent Development Bangalore | Astras AI — 24/7 Automation',
  description:
    'Astras AI builds custom AI agents in Bangalore that automate customer support, lead qualification, and business workflows 24/7. LangChain, GPT-4, Gemini. Starting ₹25,000.',
  keywords: [
    'AI agent development Bangalore', 'custom AI agent India', 'WhatsApp AI chatbot Bangalore',
    'AI automation agency India', 'LLM agent development company', 'autonomous AI agents India',
  ],
  alternates: { canonical: `${domain}/services/ai-agents` },
  openGraph: {
    title: 'Custom AI Agent Development Bangalore | Astras AI',
    description: 'Build autonomous AI agents that work 24/7. Customer support, lead qualification, workflow automation. Starting ₹25,000.',
    url: `${domain}/services/ai-agents`,
    locale: 'en_IN',
    images: [{ url: `${domain}/og-image.jpg`, width: 1200, height: 630, alt: 'AI Agent Development by Astras AI Bangalore' }],
  },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Custom AI Agent Development',
  description: 'Astras AI builds custom AI agents that automate customer support, lead qualification, and business workflows 24/7.',
  provider: { '@type': 'Organization', name: 'Astras AI', url: domain },
  serviceType: 'AI Development',
  areaServed: [{ '@type': 'Country', name: 'India' }],
  url: `${domain}/services/ai-agents`,
  offers: { '@type': 'Offer', priceCurrency: 'INR', priceSpecification: { '@type': 'PriceSpecification', minPrice: 25000, priceCurrency: 'INR' } },
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
    <div className="absolute top-1/4 left-1/3 w-[45vw] h-[45vw] rounded-full"
      style={{
        background: 'rgba(157, 78, 221, 0.15)',
        filter: 'blur(120px)',
        animation: 'orbPurple 22s ease-in-out infinite',
        willChange: 'transform',
      }}
    />
    <div className="absolute bottom-1/4 left-1/4 w-[40vw] h-[40vw] rounded-full"
      style={{
        background: 'rgba(0, 240, 255, 0.08)',
        filter: 'blur(110px)',
        animation: 'orbCyan 26s ease-in-out infinite',
        willChange: 'transform',
      }}
    />
    <style>{`
      @keyframes orbPurple {
        0%, 100% { transform: translate(0, 0) scale(1); }
        50% { transform: translate(5vw, -6vh) scale(1.1); }
      }
      @keyframes orbCyan {
        0%, 100% { transform: translate(0, 0) scale(1); }
        50% { transform: translate(-3vw, 5vh) scale(0.9); }
      }
    `}</style>
  </div>
);

export default function AIAgentsPage() {
  return (
    <>
      <Script id="service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <main className="min-h-screen bg-black text-white relative overflow-hidden font-body">
        {/* Ambient Glows */}
        <AuroraBackground />

        {/* ── HERO SECTION ── */}
        <section className="relative pt-32 pb-20 px-4 md:px-8 z-10">
          <div className="max-w-5xl mx-auto text-center flex flex-col items-center">
            
            <div className="flex justify-center mb-6">
              <Breadcrumb
                items={[
                  { label: 'Home', href: '/' },
                  { label: 'Services', href: '/services' },
                  { label: 'AI Agents' }
                ]}
              />
            </div>

            <div className="text-6xl mb-6 animate-pulse">🤖</div>

            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-950/20 text-purple-400 text-xs font-semibold tracking-wider uppercase mb-8 shadow-inner">
              <Sparkles className="w-3.5 h-3.5 animate-pulse" />
              <span>BRAHMASTRA SERIES · INTELLIGENCE</span>
            </div>

            <h1 className="font-display font-black tracking-tight text-white leading-tight mb-8 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
              Autonomous{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400">
                AI Agents
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-12 max-w-3xl font-light">
              Deploy dedicated, round-the-clock digital workforces trained on your unique knowledge bases. Automate 80% of client support and qualification channels. Starting from{' '}
              <span className="text-purple-400 font-semibold">₹25,000</span>.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full sm:w-auto">
              <Link href="/contact" className="relative flex items-center justify-center gap-2.5 px-8 py-4 rounded-full font-bold text-sm md:text-base transition-all duration-300 w-full sm:w-auto bg-purple-600 text-white hover:bg-purple-500 hover:shadow-[0_0_30px_rgba(168,85,247,0.5)]">
                Get Free Demo
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/pricing" className="flex items-center justify-center gap-2.5 px-8 py-4 rounded-full font-bold text-sm md:text-base bg-white/5 text-white border border-white/20 hover:bg-white/10 hover:border-purple-400/50 backdrop-blur-md transition-all duration-300 w-full sm:w-auto">
                View Pricing
              </Link>
            </div>

          </div>
        </section>

        {/* ── CAPABILITIES ── */}
        <section className="relative py-24 px-4 md:px-8 z-10 border-t border-white/10 bg-black/40">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-display font-bold text-white tracking-tight">
                Types of <span className="text-purple-400">AI Agents</span> We Build
              </h2>
              <p className="text-gray-400 mt-4 text-base md:text-lg max-w-2xl mx-auto font-light">
                Tailored cognitive architectures optimized for multi-platform deployment.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {[
                { icon: MessageSquare, title: 'WhatsApp AI Agents', desc: 'Engage customers instantly, pre-qualify leads, and capture contact information directly on WhatsApp Business 24/7.' },
                { icon: Bot, title: 'Sovereign Sales Bots', desc: 'Interact with site visitors live, handle common purchase doubts, outline options, and drive bookings automatically.' },
                { icon: Cpu, title: 'Auto Support Agents', desc: 'Instantly resolve up to 80% of support requests, parsing user inquiries using advanced dynamic prompt structures.' },
                { icon: Calendar, title: 'Appointment Co-pilots', desc: 'Manage booking flows, send automatic confirmation sheets, coordinate schedules, and reduce no-shows by 70%.' },
                { icon: Database, title: 'Structured Data Extraction', desc: 'Read invoices, parse complex documents, and automatically update CRM cards with 99.9% precision.' },
                { icon: Mail, title: 'Dynamic Outreach Workers', desc: 'Deliver highly targeted, fully personalized follow-up campaigns and customer nurture patterns at scale.' },
              ].map((item) => (
                <div 
                  key={item.title} 
                  className="group flex flex-col justify-between p-8 rounded-2xl bg-black/60 backdrop-blur-xl border border-white/10 shadow-[0_0_30px_rgba(168,85,247,0.01)] hover:border-purple-400/60 hover:shadow-[0_0_40px_rgba(168,85,247,0.15)] transition-all duration-500"
                >
                  <div>
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-purple-950/20 border border-purple-500/30 text-purple-400 mb-6 group-hover:bg-purple-500 group-hover:text-white transition-all duration-300">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors font-display tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-6 font-light">
                      {item.desc}
                    </p>
                  </div>
                  <div className="flex items-center justify-end pt-4 border-t border-white/5">
                    <span className="text-xs uppercase tracking-wider text-purple-400/70 group-hover:text-purple-300 flex items-center gap-1 transition-colors">
                      Integrate <ArrowRight className="w-3.5 h-3.5 animate-pulse" />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── IMPACT STATS ── */}
        <section className="relative py-24 px-4 md:px-8 z-10 border-t border-white/10 bg-white/5">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-center text-white tracking-tight mb-16">
              Empirical <span className="text-purple-400">Impact Indicators</span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {[
                { value: '80%', label: 'Automatic Issue Resolving' },
                { value: '24/7', label: 'Continuous Operating Cycle' },
                { value: '60%', label: 'Client Support Overhead Cut' },
                { value: '3x', label: 'Lead Capture Multiplication' },
              ].map(({ value, label }) => (
                <div key={label} className="text-center p-8 rounded-2xl border border-purple-500/20 bg-purple-950/10 shadow-inner">
                  <div className="text-3xl md:text-5xl font-black text-purple-400 mb-3 tracking-tight font-display drop-shadow-[0_0_10px_rgba(168,85,247,0.3)]">{value}</div>
                  <div className="text-gray-400 text-xs md:text-sm font-light leading-snug">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CALL TO ACTION ── */}
        <section className="relative py-24 px-4 md:px-8 z-10">
          <div className="max-w-3xl mx-auto text-center p-12 rounded-3xl border border-purple-500/20 bg-gradient-to-br from-purple-950/20 to-cyan-950/10 shadow-[0_0_50px_rgba(168,85,247,0.08)]">
            <h2 className="text-2xl md:text-4xl font-display font-bold text-white mb-4">Experience Intelligent AI Automation</h2>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto font-light leading-relaxed">
              Unlock maximum operational throughput. Get a tailored, functioning prototype agent built for your custom channel within 24 hours.
            </p>
            <Link href="/contact" className="inline-block px-10 py-4 rounded-full bg-purple-600 text-white hover:bg-purple-500 hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] font-bold transition-all text-lg shadow-lg">
              Initiate Prototype Demo →
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
