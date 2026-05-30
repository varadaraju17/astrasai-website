import { Metadata } from 'next';
import Script from 'next/script';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';
import Breadcrumb from '@/components/Breadcrumb';

const domain = 'https://astrasai.in';

export const metadata: Metadata = {
  title: 'FAQ — Astras AI | Answers to Your AI Agency Questions',
  description:
    'Get answers to common questions about Astras AI — Bangalore\'s leading AI agency. Learn about pricing, timelines, services, AI agents, and how we can help your business.',
  keywords: [
    'Astras AI FAQ', 'AI agency questions', 'AI website cost India',
    'AI agent development questions', 'Astras AI pricing', 'AI services Bangalore FAQ',
  ],
  alternates: { canonical: `${domain}/faq` },
  openGraph: {
    title: 'FAQ — Astras AI | AI Agency Questions Answered',
    description: 'Common questions about AI websites, apps, agents, and digital marketing services from Astras AI in Bangalore.',
    url: `${domain}/faq`,
    locale: 'en_IN',
    images: [{ url: `${domain}/og-image.jpg`, width: 1200, height: 630, alt: 'Astras AI FAQ' }],
  },
};

const faqs = [
  {
    q: 'What is Astras AI and what services do you offer?',
    a: 'Astras AI is Bangalore\'s leading AI-powered technology agency. We offer AI-powered website development, mobile app development (Flutter & React Native), custom AI agent development, business automation, AI-enhanced digital marketing (SEO, SEM, SMM), startup MVP development, and personal services like academic project support and career mentorship.',
  },
  {
    q: 'How much does an AI website cost in Bangalore?',
    a: 'Astras AI builds AI-powered websites starting from ₹15,000. A standard business website with AI chatbot and SEO optimization costs ₹25,000–₹60,000. Complex enterprise web applications with custom AI features, user authentication, and third-party integrations range from ₹75,000–₹2,00,000+. All websites are built on Next.js 14 and are fully responsive.',
  },
  {
    q: 'What is an AI agent and how can it help my business?',
    a: 'An AI agent is a software program that autonomously performs tasks like answering customer queries, processing orders, sending follow-up emails, qualifying leads, and managing data — 24 hours a day, 7 days a week. Astras AI builds custom AI agents that reduce operational costs by up to 60% and increase productivity by automating repetitive workflows.',
  },
  {
    q: 'How long does it take to build an AI-powered website?',
    a: 'Astras AI typically delivers AI-powered websites in 2–6 weeks. A standard business website takes 2–3 weeks. A web application with AI features, user logins, and database integration takes 4–8 weeks. We provide weekly progress updates and a staging environment for review throughout development.',
  },
  {
    q: 'How long does it take to build a mobile app?',
    a: 'Astras AI delivers AI-powered mobile apps in 6–12 weeks. A basic Flutter app takes 6–8 weeks. Complex apps with custom AI models, voice recognition, or real-time features take 10–16 weeks. We develop for both iOS and Android simultaneously from a single codebase to save time and cost.',
  },
  {
    q: 'Does Astras AI work with startups?',
    a: 'Yes. Astras AI specializes in AI-accelerated startup MVPs. We help founders validate ideas and build investor-ready prototypes quickly. Our Startup MVP service starts at ₹50,000 and can be delivered in 3–6 weeks depending on complexity. We have helped 15+ startups launch and secure their first customers.',
  },
  {
    q: 'Is Astras AI based in Bangalore?',
    a: 'Yes. Astras AI is headquartered in Bangalore, Karnataka, India. While we are based in Bangalore, we serve clients across India and globally, including startups and enterprises in the US, UK, UAE, and Singapore. All client communication is in English and we work across time zones.',
  },
  {
    q: 'What technologies does Astras AI use?',
    a: 'Astras AI uses Next.js 14 for websites, Flutter and React Native for cross-platform mobile apps, Python and LangChain for AI agents, and cloud infrastructure on AWS and Google Cloud. For AI models, we integrate OpenAI GPT-4, Google Gemini, Anthropic Claude, and custom fine-tuned models depending on the use case.',
  },
  {
    q: 'Can Astras AI help with SEO and digital marketing?',
    a: 'Yes. Astras AI provides full-service AI-enhanced digital marketing including technical SEO, Google Ads (SEM), social media marketing, content marketing, email marketing, and video marketing. Results typically show measurable improvement in Google rankings within 60–90 days. We use AI tools to analyze keywords, optimize content, and maximize ROI.',
  },
  {
    q: 'What is the difference between Brahmastra AI and Sudarshana Chakra?',
    a: 'Brahmastra AI is our suite of business-grade services: website development, mobile apps, AI agents, digital marketing, business automation, custom software, and SEO — designed for companies and enterprises. Sudarshana Chakra is our suite of personal services: academic project support, resume and LinkedIn profile optimization, and AI career mentorship — designed for students and individual professionals.',
  },
  {
    q: 'What payment methods does Astras AI accept?',
    a: 'Astras AI accepts UPI payments (Google Pay, PhonePe, Paytm), bank transfers (NEFT/RTGS/IMPS), credit and debit cards, and international wire transfers. For most projects, we work on a 50% advance and 50% on delivery model. We also offer flexible EMI arrangements for larger projects.',
  },
  {
    q: 'Do you offer post-launch support and maintenance?',
    a: 'Yes. All projects include 30 days of free post-launch support. After that, we offer monthly maintenance plans starting from ₹5,000/month that include bug fixes, performance monitoring, security updates, and minor feature additions. Annual maintenance contracts are also available at a discounted rate.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
};

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
    <div className="absolute top-1/4 left-1/4 w-[45vw] h-[45vw] rounded-full"
      style={{
        background: 'rgba(0,240,255,0.13)',
        filter: 'blur(110px)',
        animation: 'faqOrb1 20s ease-in-out infinite',
        willChange: 'transform',
      }}
    />
    <div className="absolute bottom-1/4 right-1/4 w-[40vw] h-[40vw] rounded-full"
      style={{
        background: 'rgba(112,0,255,0.11)',
        filter: 'blur(120px)',
        animation: 'faqOrb2 25s ease-in-out infinite',
        willChange: 'transform',
      }}
    />
    <style>{`
      @keyframes faqOrb1 {
        0%, 100% { transform: translate(0, 0) scale(1); }
        50% { transform: translate(3vw, -3vh) scale(1.05); }
      }
      @keyframes faqOrb2 {
        0%, 100% { transform: translate(0, 0) scale(1); }
        50% { transform: translate(-3vw, 3vh) scale(0.95); }
      }
    `}</style>
  </div>
);

export default function FAQPage() {
  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main className="min-h-screen bg-black text-white py-32 px-4 relative overflow-hidden font-body">
        <AuroraBackground />

        <div className="max-w-4xl mx-auto relative z-10">
          
          {/* Breadcrumb */}
          <div className="flex justify-center mb-6">
            <Breadcrumb
              items={[
                { label: 'Home', href: '/' },
                { label: 'FAQ' }
              ]}
            />
          </div>

          {/* Header */}
          <div className="text-center mb-20">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-950/30 text-cyan-300 text-xs font-semibold tracking-wider uppercase mb-6 shadow-[0_0_20px_rgba(0,240,255,0.15)]">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
              <span>KNOWLEDGE_NODE</span>
            </span>
            
            <h1 className="font-display font-black tracking-tight text-white leading-tight mb-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
              Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 drop-shadow-[0_0_20px_rgba(0,240,255,0.3)]">Questions</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
              Find technical documentation, SLA timelines, pricing schedules, and operational blueprints.
              Need custom assessments? <Link href="/contact" className="text-cyan-400 hover:underline">Contact us</Link>.
            </p>
          </div>

          {/* FAQ Items */}
          <div className="space-y-5">
            {faqs.map(({ q, a }, i) => (
              <details
                key={i}
                className="group border border-white/10 rounded-2xl bg-black/60 backdrop-blur-xl hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(0,240,255,0.1)] transition-all duration-500 overflow-hidden"
              >
                <summary className="flex items-center justify-between p-6 md:p-8 cursor-pointer list-none font-bold text-white group-hover:text-cyan-400 transition-colors font-display tracking-tight text-base md:text-lg">
                  <span className="pr-6">{q}</span>
                  <span className="text-cyan-400 text-3xl font-light shrink-0 group-open:rotate-45 transition-transform duration-300 select-none">+</span>
                </summary>
                <div className="px-6 md:px-8 pb-6 md:pb-8 text-gray-400 leading-relaxed border-t border-white/5 pt-6 font-light text-sm md:text-base">
                  {a}
                </div>
              </details>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-24 text-center p-12 rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-cyan-950/20 to-purple-950/10 shadow-[0_0_50px_rgba(0,240,255,0.05)]">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">Still Have Questions?</h2>
            <p className="text-gray-400 mb-8 font-light max-w-lg mx-auto">
              Our engineering triage team processes assessments and replies within 2 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-3.5 bg-cyan-500 hover:bg-cyan-400 text-black font-bold rounded-xl transition-all shadow-lg shadow-cyan-500/20 flex items-center justify-center gap-2"
              >
                Contact Us <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="https://wa.me/918197489255"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 border border-white/20 hover:border-cyan-500/50 text-white hover:text-cyan-400 rounded-xl transition-all flex items-center justify-center font-medium"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
