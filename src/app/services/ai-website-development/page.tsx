import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';

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

export default function AIWebsiteDevelopmentPage() {
  return (
    <>
      <Script id="service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <main className="min-h-screen bg-black text-white">
        {/* Hero */}
        <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-cyan-950/20 to-black">
          <div className="max-w-5xl mx-auto text-center">
            <nav className="text-sm text-gray-500 mb-8" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-cyan-400">Home</Link> &rsaquo;{' '}
              <Link href="/services" className="hover:text-cyan-400">Services</Link> &rsaquo;{' '}
              <span className="text-gray-300">AI Website Development</span>
            </nav>
            <span className="inline-block px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-950/30 text-cyan-300 text-xs font-mono uppercase tracking-wider mb-6">
              Brahmastra AI — Web
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Website Development{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                Bangalore
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-10">
              We build intelligent, high-performance websites that work as your 24/7 sales engine. 
              Powered by Next.js 14, AI chatbots, and proven SEO strategies. 
              Starting from <strong className="text-cyan-400">₹15,000</strong>.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="px-8 py-4 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-black font-bold transition-colors">
                Get Free Quote
              </Link>
              <Link href="/pricing" className="px-8 py-4 rounded-lg border border-white/20 hover:border-cyan-500/50 text-white hover:text-cyan-400 transition-colors">
                View Pricing
              </Link>
            </div>
          </div>
        </section>

        {/* What We Build */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">What We Build</h2>
            <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
              From simple portfolio sites to complex AI-powered web applications — we cover the full spectrum.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: 'Business Websites', desc: 'Professional, fast-loading websites that represent your brand and convert visitors into customers. Includes contact forms, Google Maps, and WhatsApp integration.', price: 'From ₹15,000' },
                { title: 'AI Chatbot Websites', desc: 'Websites with an embedded AI assistant that answers customer queries, qualifies leads, and books appointments automatically — 24/7 without human intervention.', price: 'From ₹35,000' },
                { title: 'E-Commerce Stores', desc: 'AI-powered online stores with product recommendations, abandoned cart recovery, and smart search. Built on Next.js for maximum performance and SEO.', price: 'From ₹60,000' },
                { title: 'Web Applications', desc: 'Custom web apps with user authentication, dashboards, payment gateways, and real-time features. CRMs, SaaS platforms, booking systems, and more.', price: 'From ₹1,20,000' },
                { title: 'WordPress Sites', desc: 'AI-enhanced WordPress websites that are easy to manage. Perfect for businesses that want to update their own content without technical knowledge.', price: 'From ₹20,000' },
                { title: 'Landing Pages', desc: 'High-converting single-page designs for product launches, ad campaigns, and lead generation. A/B tested for maximum conversion rates.', price: 'From ₹8,000' },
              ].map((item) => (
                <div key={item.title} className="p-6 rounded-xl border border-white/10 bg-white/5 hover:border-cyan-500/30 transition-colors">
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">{item.desc}</p>
                  <span className="text-cyan-400 font-bold text-sm">{item.price}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 px-4 bg-white/5">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">How We Work</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { step: '01', title: 'Discovery Call', desc: 'Free 30-min call to understand your business goals, target audience, and technical requirements.' },
                { step: '02', title: 'Design & Plan', desc: 'We create wireframes and a project plan. You approve the design before we write a single line of code.' },
                { step: '03', title: 'Build & Test', desc: 'We develop your website with weekly check-ins and a staging link so you can review progress at any time.' },
                { step: '04', title: 'Launch & Support', desc: 'We deploy your site, submit it to Google Search Console, and provide 30 days of free post-launch support.' },
              ].map((s) => (
                <div key={s.step} className="text-center">
                  <div className="text-4xl font-bold text-cyan-400/30 mb-3">{s.step}</div>
                  <h3 className="text-lg font-bold text-white mb-2">{s.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="py-20 px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Our Technology Stack</h2>
            <p className="text-gray-400 mb-10">We use the same technologies as the world&apos;s fastest websites.</p>
            <div className="flex flex-wrap justify-center gap-4">
              {['Next.js 14', 'React 18', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'OpenAI API', 'Vercel', 'PostgreSQL', 'Supabase', 'Stripe'].map((tech) => (
                <span key={tech} className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-gray-300 text-sm hover:border-cyan-500/30 hover:text-cyan-400 transition-colors">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 px-4 bg-white/5">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-10">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqSchema.mainEntity.map((item, i) => (
                <details key={i} className="group border border-white/10 rounded-xl bg-black overflow-hidden hover:border-cyan-500/30 transition-colors">
                  <summary className="flex items-center justify-between p-6 cursor-pointer list-none font-semibold text-white group-hover:text-cyan-400 transition-colors">
                    <span className="pr-4">{item.name}</span>
                    <span className="text-cyan-400 text-2xl shrink-0 group-open:rotate-45 transition-transform duration-300">+</span>
                  </summary>
                  <div className="px-6 pb-6 text-gray-400 leading-relaxed border-t border-white/5 pt-4">
                    {item.acceptedAnswer.text}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4">
          <div className="max-w-3xl mx-auto text-center p-10 rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-cyan-950/20 to-purple-950/20">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Build Your AI Website?</h2>
            <p className="text-gray-400 mb-8">Get a free consultation and custom quote within 24 hours.</p>
            <Link href="/contact" className="inline-block px-10 py-4 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-black font-bold transition-colors text-lg">
              Get Free Quote →
            </Link>
            <p className="text-gray-500 text-sm mt-4">Starting from ₹15,000 · Delivered in 2–6 weeks · 30 days free support</p>
          </div>
        </section>
      </main>
    </>
  );
}
