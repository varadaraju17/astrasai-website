import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';

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

export default function AIAgentsPage() {
  return (
    <>
      <Script id="service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <main className="min-h-screen bg-black text-white">
        <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-purple-950/20 to-black">
          <div className="max-w-5xl mx-auto text-center">
            <nav className="text-sm text-gray-500 mb-8">
              <Link href="/" className="hover:text-cyan-400">Home</Link> &rsaquo;{' '}
              <Link href="/services" className="hover:text-cyan-400">Services</Link> &rsaquo;{' '}
              <span className="text-gray-300">AI Agents</span>
            </nav>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Custom{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-500">
                AI Agents
              </span>{' '}
              Bangalore
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-10">
              Deploy intelligent digital workers that never sleep, never miss a lead, and automate 80% of your repetitive business tasks. Starting from <strong className="text-purple-400">₹25,000</strong>.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="px-8 py-4 rounded-lg bg-purple-600 hover:bg-purple-500 text-white font-bold transition-colors">Get Free Demo</Link>
              <Link href="/pricing" className="px-8 py-4 rounded-lg border border-white/20 hover:border-purple-500/50 text-white hover:text-purple-400 transition-colors">View Pricing</Link>
            </div>
          </div>
        </section>

        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Types of AI Agents We Build</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: '💬', title: 'WhatsApp AI Bot', desc: 'Handles customer inquiries, qualifies leads, and books appointments on WhatsApp Business — 24/7 with instant responses.' },
                { icon: '🎯', title: 'Sales Agent', desc: 'Engages website visitors, answers product questions, overcomes objections, and qualifies prospects automatically.' },
                { icon: '🎧', title: 'Support Agent', desc: 'Resolves 80% of customer support tickets instantly, learns from your knowledge base, and escalates complex issues.' },
                { icon: '📅', title: 'Appointment Scheduler', desc: 'Coordinates with clients, books appointments, sends confirmations, and reduces no-shows by 70%.' },
                { icon: '📊', title: 'Data Processing Agent', desc: 'Extracts information from invoices and forms with 99.9% accuracy. Updates your CRM/ERP automatically.' },
                { icon: '📣', title: 'Marketing Agent', desc: 'Sends personalized follow-up emails and nurtures leads through automated, AI-personalized sequences.' },
              ].map((a) => (
                <div key={a.title} className="p-6 rounded-xl border border-white/10 bg-white/5 hover:border-purple-500/30 transition-colors">
                  <div className="text-3xl mb-3">{a.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{a.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{a.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-4 bg-white/5">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-10">What Our Clients Achieve</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { value: '80%', label: 'Queries resolved automatically' },
                { value: '24/7', label: 'Always-on availability' },
                { value: '60%', label: 'Cost reduction in support' },
                { value: '3x', label: 'Lead conversion improvement' },
              ].map(({ value, label }) => (
                <div key={label} className="text-center p-6 rounded-xl border border-purple-500/20 bg-purple-950/10">
                  <div className="text-4xl font-bold text-purple-400 mb-2">{value}</div>
                  <div className="text-gray-400 text-sm">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-4">
          <div className="max-w-3xl mx-auto text-center p-10 rounded-2xl border border-purple-500/20 bg-gradient-to-br from-purple-950/20 to-cyan-950/20">
            <h2 className="text-3xl font-bold text-white mb-4">See Your AI Agent in Action</h2>
            <p className="text-gray-400 mb-8">Book a free demo. We&apos;ll build a prototype agent for your business and show you live how it works.</p>
            <Link href="/contact" className="inline-block px-10 py-4 rounded-lg bg-purple-600 hover:bg-purple-500 text-white font-bold transition-colors text-lg">Book Free Demo →</Link>
          </div>
        </section>
      </main>
    </>
  );
}
