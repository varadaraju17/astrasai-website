import { Metadata } from 'next';
import Link from 'next/link';
import { Brain, Shield, Zap, Sparkles, MapPin, Target, Calendar, Award, ArrowRight } from "lucide-react";

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
    locale: 'en_IN',
    alternateLocale: 'en_US',
    images: [
      {
        url: `${domain}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'About Astras AI — Elite AI Innovation Studio in Bangalore',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Astras AI — Bangalore\'s AI Innovation Studio',
    description: 'Meet the team building intelligent websites, apps, and AI agents in Bangalore.',
    images: [
      {
        url: `${domain}/og-image.jpg`,
        alt: 'About Astras AI — Elite AI Innovation Studio in Bangalore',
      },
    ],
  },
};

export default function AboutPage() {
  const stats = [
    { value: "2024", label: "Founding Year", icon: <Calendar className="w-5 h-5 text-cyan-400" /> },
    { value: "50+", label: "Projects Delivered", icon: <Award className="w-5 h-5 text-purple-400" /> },
    { value: "15+", label: "Startups Launched", icon: <Zap className="w-5 h-5 text-yellow-400" /> },
    { value: "99.9%", label: "System Uptime", icon: <Shield className="w-5 h-5 text-green-400" /> }
  ];

  const pillars = [
    {
      title: "Human-Centric AI",
      desc: "AI shouldn't replace humans; it should amplify them. We design intuitive, explainable AI workflows that seamlessly integrate into your daily business processes.",
      icon: <Brain className="w-6 h-6 text-cyan-400" />
    },
    {
      title: "Sovereign Security",
      desc: "In the age of LLMs, your data is your competitive moat. We implement absolute 256-bit encryption and private local nodes so your proprietary data never leaks.",
      icon: <Shield className="w-6 h-6 text-green-400" />
    },
    {
      title: "Infinite Scalability",
      desc: "Built on modern cloud-native architectures that automatically scale from your first local user to millions of concurrent sessions without slowdowns.",
      icon: <Zap className="w-6 h-6 text-yellow-400" />
    }
  ];

  return (
    <main className="min-h-screen bg-black text-white py-32 px-4 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-purple-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-950/30 text-cyan-300 text-xs font-mono uppercase tracking-wider mb-6 shadow-[0_0_20px_rgba(0,240,255,0.2)]">
            <Sparkles className="w-3 h-3 animate-pulse" />
            OUR_GENESIS
          </span>
          <h1 className="text-4xl md:text-7xl font-display font-bold text-white mb-6 tracking-tight">
            Architects of the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 drop-shadow-[0_0_20px_rgba(0,240,255,0.3)]">
              Intelligent Future
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Based in Bangalore, India, Astras AI is an elite technology partner and AI innovation studio. 
            We build next-generation websites, apps, and digital weapons to transform business workflows globally.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">
          {stats.map((stat, idx) => (
            <div key={idx} className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm flex flex-col items-center text-center hover:border-cyan-500/30 transition-all duration-300">
              <div className="p-3 rounded-xl bg-black/40 border border-white/5 mb-4 shadow-lg">
                {stat.icon}
              </div>
              <div className="text-3xl md:text-4xl font-bold text-white font-display mb-1">{stat.value}</div>
              <div className="text-gray-400 text-xs uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Story Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-28 border-t border-white/10 pt-16">
          <div>
            <div className="inline-flex items-center gap-2 text-cyan-400 text-xs font-mono uppercase tracking-widest mb-4">
              <MapPin className="w-4 h-4" /> Bangalore, India — The Silicon Valley of Asia
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Our Story</h2>
            <div className="space-y-4 text-gray-300 leading-relaxed text-base font-light">
              <p>
                Astras AI was founded in <strong>2024</strong> in the heart of Bangalore. 
                Our name draws inspiration from the ancient Sanskrit term <em>&quot;Astras&quot;</em> — powerful, super-advanced, guided weapons. 
                In the modern digital battlefield, the ultimate weapon is intelligence.
              </p>
              <p>
                We saw that traditional development models were too slow, static, and expensive. 
                Startups and businesses were building legacy software destined to become obsolete in a world driven by generative models and dynamic AI. 
              </p>
              <p>
                We established Astras AI to merge deep technical expertise with state-of-the-art AI orchestration. 
                We operate as a high-velocity innovation partner, delivering production-grade systems, automated workflows, and search-optimized platforms that drive real commercial advantages.
              </p>
            </div>
          </div>
          <div className="relative p-8 rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-cyan-950/20 to-purple-950/10 shadow-[0_0_50px_rgba(0,240,255,0.05)]">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <Target className="w-6 h-6 text-cyan-400" />
              Our Mission
            </h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              To equip ambitious startups and established enterprises with custom, high-velocity AI platforms 
              that automate routine tasks, attract massive organic traffic via AI search, and multiply bottom-line revenue.
            </p>
            <div className="border-t border-white/10 pt-6">
              <h4 className="text-xs font-bold text-cyan-400 uppercase tracking-widest mb-2 font-mono">Location & Access</h4>
              <p className="text-gray-400 text-sm">
                Headquartered in Bangalore, Karnataka. Proudly building sovereign digital infrastructure for global markets.
              </p>
            </div>
          </div>
        </div>

        {/* Pillars Section */}
        <div className="mb-28">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">Our Core Pillars</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {pillars.map((pillar, idx) => (
              <div key={idx} className="p-8 rounded-2xl border border-white/10 bg-white/5 hover:border-cyan-500/40 hover:shadow-[0_0_30px_rgba(0,240,255,0.05)] transition-all duration-300 flex flex-col">
                <div className="p-4 rounded-xl bg-black/40 border border-white/5 w-fit mb-6">
                  {pillar.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{pillar.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed flex-grow font-light">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="text-center p-12 rounded-3xl border border-cyan-500/30 bg-gradient-to-br from-cyan-950/20 to-purple-950/10 max-w-4xl mx-auto shadow-[0_0_40px_rgba(0,240,255,0.1)]">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">Let&apos;s Build Your Digital Moat</h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            Partner with Bangalore&apos;s leading AI development team. Get in touch for a free 30-minute system assessment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="px-8 py-3.5 bg-cyan-500 hover:bg-cyan-400 text-black font-bold rounded-xl transition-all shadow-lg shadow-cyan-500/20 flex items-center justify-center gap-2">
              Start Project <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/services" className="px-8 py-3.5 border border-white/20 hover:border-cyan-500/50 text-white hover:text-cyan-400 rounded-xl transition-all flex items-center justify-center">
              Explore Our Services
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
