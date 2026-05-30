import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Breadcrumb from '@/components/Breadcrumb';
import { Sparkles } from 'lucide-react';

const domain = 'https://astrasai.in';

type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  tags: string[];
  keywords: string[];
  contentHtml: string;
  faq?: { question: string; answer: string }[];
};

const blogPosts: Record<string, BlogPost> = {
  'ai-website-cost-india': {
    slug: 'ai-website-cost-india',
    title: 'How Much Does an AI Website Cost in India? (2025 Complete Guide)',
    excerpt: 'A detailed breakdown of AI website development costs in India — from ₹15,000 static sites to ₹5,00,000+ enterprise platforms. What affects pricing and how to get the best value.',
    category: 'Web Development',
    readTime: '8 min read',
    date: 'May 30, 2026',
    tags: ['AI Website', 'Pricing', 'India'],
    keywords: ['AI website cost India', 'website development cost Bangalore', 'how much does a website cost India', 'Next.js website cost India'],
    contentHtml: `
      <h2>The Short Answer: Website Costs in India 2025</h2>
      <div class="overflow-x-auto my-6">
        <table class="w-full border-collapse border border-white/10">
          <thead>
            <tr class="border-b border-white/20 bg-white/5">
              <th class="text-left py-3 px-4 text-cyan-400 font-bold">Website Type</th>
              <th class="text-left py-3 px-4 text-cyan-400 font-bold">Cost Range (INR)</th>
              <th class="text-left py-3 px-4 text-cyan-400 font-bold">Timeline</th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-b border-white/10 hover:bg-white/5">
              <td class="py-3 px-4 text-gray-300">Basic Portfolio/Business Site</td>
              <td class="py-3 px-4 text-green-400 font-mono">₹10,000 – ₹30,000</td>
              <td class="py-3 px-4 text-gray-400">1–2 weeks</td>
            </tr>
            <tr class="border-b border-white/10 hover:bg-white/5">
              <td class="py-3 px-4 text-gray-300">Professional Business Website</td>
              <td class="py-3 px-4 text-green-400 font-mono">₹25,000 – ₹70,000</td>
              <td class="py-3 px-4 text-gray-400">2–4 weeks</td>
            </tr>
            <tr class="border-b border-white/10 hover:bg-white/5">
              <td class="py-3 px-4 text-gray-300">AI-Powered Website + Chatbot</td>
              <td class="py-3 px-4 text-green-400 font-mono">₹50,000 – ₹1,50,000</td>
              <td class="py-3 px-4 text-gray-400">3–6 weeks</td>
            </tr>
            <tr class="border-b border-white/10 hover:bg-white/5">
              <td class="py-3 px-4 text-gray-300">E-Commerce Store</td>
              <td class="py-3 px-4 text-green-400 font-mono">₹40,000 – ₹2,00,000</td>
              <td class="py-3 px-4 text-gray-400">4–8 weeks</td>
            </tr>
            <tr class="border-b border-white/10 hover:bg-white/5">
              <td class="py-3 px-4 text-gray-300">Custom Web Application</td>
              <td class="py-3 px-4 text-green-400 font-mono">₹1,00,000 – ₹5,00,000+</td>
              <td class="py-3 px-4 text-gray-400">8–20 weeks</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <h3 class="text-xl font-bold text-cyan-400 mt-8">1. Number of Pages</h3>
      <p class="text-gray-400">Each page requires structured UI development. A base 5-page site (Home, About, Services, Blog, Contact) is cleanest. Additional dynamic templates are usually ₹1,500–₹5,000 each depending on custom schemas.</p>
      
      <h3 class="text-xl font-bold text-cyan-400 mt-6">2. Design Premiumness</h3>
      <p class="text-gray-400">Custom animations, glow elements, glassmorphic card grids, and reactive layouts cost slightly more but yield massive visitor retention. template pagebuilders are sluggish, whereas Next.js provides unmatched conversion rates.</p>

      <h3 class="text-xl font-bold text-cyan-400 mt-6">3. AI Integrations</h3>
      <p class="text-gray-400">Adding vector-supported support chatbots, autonomous scheduling handlers, or real-time personalizers ranges from ₹15,000 to ₹50,000 depending on API scopes and dataset training structures.</p>
    `,
    faq: [
      { question: 'How much does an AI website cost in India?', answer: 'In India in 2025, a professional AI-integrated website starts from ₹50,000 and can go up to ₹1,50,000+ depending on the complexity of model APIs, database requirements, and custom user journeys.' }
    ]
  },
  'what-is-an-ai-agent': {
    slug: 'what-is-an-ai-agent',
    title: 'What is an AI Agent? How It Can Transform Your Business in 2025',
    excerpt: 'A plain-English explanation of AI agents — what they are, how they work, and real examples of how Indian businesses are saving 10+ hours per week with custom AI automation.',
    category: 'AI Agents',
    readTime: '6 min read',
    date: 'May 28, 2026',
    tags: ['AI Agents', 'Automation', 'Business'],
    keywords: ['what is an AI agent', 'AI agents business India', 'custom AI chatbot Bangalore', 'intelligent automation agency'],
    contentHtml: `
      <h2>The Core Concept: Autonomous Execution vs Simple Chatbots</h2>
      <p class="text-gray-400 leading-relaxed mb-6">
        Most people are familiar with basic chatbots that simply answer queries using pre-defined paths. An <strong>AI Agent</strong> is completely different. It has <strong>autonomy, reasoning, and tool access</strong>.
      </p>
      
      <div class="p-6 rounded-xl border border-purple-500/20 bg-purple-950/10 my-8">
        <h4 class="text-purple-400 font-bold mb-2">How an Agent Operates (The ReAct Loop):</h4>
        <ul class="space-y-2 text-gray-300 text-sm">
          <li><strong>1. Observation:</strong> Evaluates incoming inputs (emails, sheets, leads).</li>
          <li><strong>2. Thought:</strong> Decides the optimal next logical step.</li>
          <li><strong>3. Action:</strong> Triggers tools (creates calendar events, writes codes, updates CRM).</li>
        </ul>
      </div>

      <h2 class="text-2xl font-bold text-white mt-10">Real-World Business Impact</h2>
      <p class="text-gray-400">
        In Bangalore, modern agencies are using autonomous AI agents to automate:
      </p>
      <ul class="text-gray-400 space-y-2 pl-6 my-6">
        <li>💼 <strong>Customer Support:</strong> Instantly parsing complex tickets and replying with contextual vector database lookups.</li>
        <li>📈 <strong>Lead Qualification:</strong> Chatting with users over WhatsApp, screening their requirements, and setting up clean calls on Google Calendar.</li>
        <li>📂 <strong>Operations:</strong> Reading invoices, entering structured details into ERPs, and flagging anomalies.</li>
      </ul>
    `,
    faq: [
      { question: 'What is an AI Agent?', answer: 'An AI Agent is an autonomous program powered by LLMs (Large Language Models) that can observe inputs, make structured decisions, and execute actions using external tools like APIs, databases, and third-party apps.' }
    ]
  },
  'best-ai-agencies-bangalore': {
    slug: 'best-ai-agencies-bangalore',
    title: 'Best AI Agencies in Bangalore 2025 — Complete Comparison',
    excerpt: 'An honest comparison of the top AI development agencies in Bangalore, covering pricing, specializations, client reviews, and what makes each unique.',
    category: 'Industry',
    readTime: '10 min read',
    date: 'May 25, 2026',
    tags: ['Bangalore', 'AI Agency', 'Comparison'],
    keywords: ['best AI agency Bangalore', 'top AI companies Bangalore', 'AI development company India', 'AI web developers Bangalore'],
    contentHtml: `
      <h2>Bangalore: The AI Capital of India</h2>
      <p class="text-gray-400">
        Bangalore is home to some of the finest engineering talent globally. Here is an honest review of the top AI consultation and development paradigms available in the city:
      </p>

      <h3 class="text-xl font-bold text-cyan-400 mt-8">1. Custom Model Fine-Tuning Labs</h3>
      <p class="text-gray-400">These companies specialize strictly in deep training, neural weights optimization, and dedicated on-prem LLM setups. They serve enterprise corporations with budgets starting from ₹10 Lakhs+.</p>
      
      <h3 class="text-xl font-bold text-cyan-400 mt-6">2. Traditional Software Development Houses</h3>
      <p class="text-gray-400">Standard firms that have recently added basic AI wrappers to their services. While capable, their codebases are often heavy and suffer from outdated web framework architectures.</p>

      <h3 class="text-xl font-bold text-cyan-400 mt-6">3. Agile Innovation Studios (Like Astras AI)</h3>
      <p class="text-gray-400">Focused on speed, visual excellence, and extreme optimization. We build on state-of-the-art architectures (Next.js 14, Tailwind, Vercel) for blisteringly fast pages, zero latency, and perfect SEO indexing scores starting from very accessible price tags.</p>
    `,
    faq: [
      { question: 'Why Astras AI is a leading choice in Bangalore?', answer: 'We combine advanced AI integrations (WhatsApp bots, agent automations) with premium visual frontends that load in under 1 second, resulting in massive PageSpeed scores (90+) and organic SEO dominance.' }
    ]
  },
  'nextjs-vs-wordpress-ai-websites': {
    slug: 'nextjs-vs-wordpress-ai-websites',
    title: 'Next.js vs WordPress for AI Websites: Which Should You Choose in 2025?',
    excerpt: 'A technical and practical comparison of Next.js and WordPress for building AI-powered websites. Speed, SEO, cost, and maintenance — everything you need to decide.',
    category: 'Web Development',
    readTime: '7 min read',
    date: 'May 22, 2026',
    tags: ['Next.js', 'WordPress', 'Web Dev'],
    keywords: ['Next.js vs WordPress', 'best framework for AI website', 'Nextjs performance SEO', 'WordPress AI integration'],
    contentHtml: `
      <h2>The Technical Battle: Core Architecture</h2>
      <p class="text-gray-400">
        When integrating dynamic AI assets (such as vector chats, generative streams, and complex state loops), the platform foundation matters immensely.
      </p>

      <h3 class="text-xl font-bold text-cyan-400 mt-8">Next.js 14 (React)</h3>
      <ul class="text-gray-400 space-y-2 pl-6 my-4">
        <li>⚡ <strong>Performance:</strong> Blistering static site generation (SSG) and server-side rendering (SSR) yield 90+ PageSpeed instantly.</li>
        <li>🔒 <strong>Security:</strong> Server-less routing avoids common database injection and CMS hacks.</li>
        <li>🤖 <strong>AI Ready:</strong> Native stream support for standard OpenAI/Anthropic stream responses.</li>
      </ul>

      <h3 class="text-xl font-bold text-purple-400 mt-8">WordPress (PHP)</h3>
      <p class="text-gray-400">
        Great for standard content blogs, but highly restrictive for AI state cycles. Sluggish execution loops, heavy database loads, and reliance on dozens of bloated plugins usually drag down mobile performance scores.
      </p>
    `
  },
  'startup-mvp-with-ai-30-days': {
    slug: 'startup-mvp-with-ai-30-days',
    title: 'How to Build a Startup MVP with AI in 30 Days (Step-by-Step)',
    excerpt: 'The exact process Astras AI uses to take a startup from idea to investor-ready MVP in 30 days. Includes tech stack choices, common mistakes, and cost estimates.',
    category: 'Startups',
    readTime: '9 min read',
    date: 'May 18, 2026',
    tags: ['Startup', 'MVP', 'AI Development'],
    keywords: ['build startup MVP fast', 'AI MVP in 30 days', 'rapid software prototyping Bangalore', 'minimum viable product cost'],
    contentHtml: `
      <h2>The 30-Day Sprint Formula</h2>
      <p class="text-gray-400">
        Building a Minimum Viable Product (MVP) isn't about packing in 100 features. It is about validating your core thesis rapidly. Here is how we execute it in exactly 4 weeks:
      </p>

      <div class="space-y-4 my-8">
        <div class="p-4 rounded-lg bg-white/5 border border-white/10">
          <strong class="text-cyan-400 block">📅 Week 1: Mockups & Database Scoping</strong>
          <span class="text-gray-400 text-sm">Fleshing out high-fidelity screen paths and structured schemas to prevent feature creep.</span>
        </div>
        <div class="p-4 rounded-lg bg-white/5 border border-white/10">
          <strong class="text-cyan-400 block">📅 Week 2 & 3: Core Logic Integration</strong>
          <span class="text-gray-400 text-sm">Wiring up backend triggers, API gateways, database mutations, and local state flows.</span>
        </div>
        <div class="p-4 rounded-lg bg-white/5 border border-white/10">
          <strong class="text-cyan-400 block">📅 Week 4: Polishing, QA & Vercel Deployment</strong>
          <span class="text-gray-400 text-sm">Rigorous unit testing, responsive design adjustments, and pushing to an ultra-fast global edge domain.</span>
        </div>
      </div>
    `
  },
  'flutter-vs-react-native-ai-apps': {
    slug: 'flutter-vs-react-native-ai-apps',
    title: 'Flutter vs React Native for AI Mobile Apps in 2025 — Which is Better?',
    excerpt: 'A detailed technical comparison of Flutter and React Native for building AI-powered mobile apps. Performance benchmarks, AI library support, and Astras AI\'s recommendation.',
    category: 'Mobile Development',
    readTime: '8 min read',
    date: 'May 15, 2026',
    tags: ['Flutter', 'React Native', 'Mobile'],
    keywords: ['Flutter vs React Native mobile apps', 'AI mobile app development India', 'hybrid app compiler latency', 'best cross-platform framework'],
    contentHtml: `
      <h2>The Cross-Platform Mobile Duel</h2>
      <p class="text-gray-400">
        To support responsive mobile interfaces containing real-time voice synthesis or visual model feeds, choosing the right cross-platform mobile stack is critical.
      </p>

      <h3 class="text-xl font-bold text-cyan-400 mt-8">Flutter (Dart)</h3>
      <p class="text-gray-400">
        Compiles directly to native machine code. It offers absolute rendering precision (60–120 FPS) and superior performance for heavy layout calculations or continuous Canvas updates.
      </p>
      
      <h3 class="text-xl font-bold text-purple-400 mt-6">React Native (JS Bridge)</h3>
      <p class="text-gray-400">
        Uses a Javascript execution bridge. Excellent for text-heavy interfaces or sites already sharing a React/Web core, but can suffer minor frames-per-second drops when processing massive JSON streams from complex LLM parameters.
      </p>
    `
  }
};

export async function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = blogPosts[params.slug];
  if (!post) return {};

  return {
    title: `${post.title} | Astras AI Blog`,
    description: post.excerpt,
    keywords: post.keywords,
    alternates: { canonical: `${domain}/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `${domain}/blog/${post.slug}`,
      locale: 'en_IN',
      type: 'article',
      images: [{ url: `${domain}/og-image.jpg`, width: 1200, height: 630, alt: post.title }],
    },
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug];
  if (!post) notFound();

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    author: { '@type': 'Organization', name: 'Astras AI', url: domain },
    publisher: { '@type': 'Organization', name: 'Astras AI', url: domain, logo: { '@type': 'ImageObject', url: `${domain}/logo.webp` } },
    datePublished: '2026-05-30',
    dateModified: '2026-05-30',
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${domain}/blog/${post.slug}` },
    image: `${domain}/og-image.jpg`,
  };

  const faqSchema = post.faq ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: post.faq.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer }
    }))
  } : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      <main className="min-h-screen bg-black text-white py-32 px-4 relative overflow-hidden font-body">
        {/* Background Aurora Orbs */}
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
          {/* Glowing Orbs */}
          <div className="absolute top-1/4 left-1/4 w-[45vw] h-[45vw] rounded-full"
            style={{
              background: 'rgba(0,240,255,0.12)',
              filter: 'blur(100px)',
              animation: 'blogPostOrb1 18s ease-in-out infinite',
              willChange: 'transform',
            }}
          />
          <div className="absolute bottom-1/4 right-1/4 w-[35vw] h-[35vw] rounded-full"
            style={{
              background: 'rgba(112,0,255,0.08)',
              filter: 'blur(110px)',
              animation: 'blogPostOrb2 22s ease-in-out infinite',
              willChange: 'transform',
            }}
          />
          <style>{`
            @keyframes blogPostOrb1 {
              0%, 100% { transform: translate(0, 0) scale(1); }
              50% { transform: translate(3vw, -3vh) scale(1.05); }
            }
            @keyframes blogPostOrb2 {
              0%, 100% { transform: translate(0, 0) scale(1); }
              50% { transform: translate(-3vw, 3vh) scale(0.95); }
            }
          `}</style>
        </div>

        <div className="max-w-3xl mx-auto relative z-10">
          {/* Breadcrumbs */}
          <div className="flex justify-start mb-6">
            <Breadcrumb
              items={[
                { label: 'Home', href: '/' },
                { label: 'Blog', href: '/blog' },
                { label: post.title }
              ]}
            />
          </div>

          {/* Header */}
          <div className="mb-12">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-950/30 text-cyan-300 text-xs font-mono uppercase tracking-wider mb-6">
              <Sparkles className="w-3 h-3 text-cyan-400 animate-pulse" />
              {post.category}
            </span>
            <h1 className="font-display font-black tracking-tight text-white leading-tight mb-6 text-3xl sm:text-4xl md:text-5xl">
              {post.title}
            </h1>
            <div className="flex items-center gap-3 text-gray-500 text-xs font-mono uppercase tracking-wider mb-8">
              <span className="text-gray-300 font-bold">By Astras AI Team</span>
              <span>·</span>
              <span>{post.date}</span>
              <span>·</span>
              <span>{post.readTime}</span>
            </div>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed border-l-4 border-cyan-500 pl-6 font-light italic">
              {post.excerpt}
            </p>
          </div>

          {/* Body Content */}
          <div
            className="prose prose-invert prose-lg max-w-none space-y-6 text-gray-300 font-sans leading-relaxed my-12"
            dangerouslySetInnerHTML={{ __html: post.contentHtml }}
          />

          {/* Frequently Asked Questions */}
          {post.faq && post.faq.length > 0 && (
            <div className="mt-20 space-y-5">
              <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-8 tracking-tight">Frequently Asked Questions</h3>
              {post.faq.map((faq, i) => (
                <details key={i} className="group border border-white/10 rounded-2xl bg-black/60 backdrop-blur-xl hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(0,240,255,0.1)] transition-all duration-500 overflow-hidden">
                  <summary className="flex items-center justify-between p-6 cursor-pointer list-none font-bold text-white group-hover:text-cyan-400 transition-colors font-display tracking-tight text-base md:text-lg">
                    <span className="pr-6">{faq.question}</span>
                    <span className="text-cyan-400 text-2xl font-light shrink-0 group-open:rotate-45 transition-transform duration-300 select-none">+</span>
                  </summary>
                  <div className="px-6 pb-6 text-gray-400 leading-relaxed border-t border-white/5 pt-6 font-light text-sm md:text-base">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          )}

          {/* CTA Box */}
          <div className="mt-20 p-10 rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-cyan-950/20 to-purple-950/10 shadow-[0_0_50px_rgba(0,240,255,0.05)] text-center">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">Get a Free Quote for Your Website</h2>
            <p className="text-gray-400 mb-8 font-light max-w-lg mx-auto">Tell us what you need and we&apos;ll give you an exact quote within 24 hours — no vague estimates.</p>
            <Link href="/contact" className="inline-block px-8 py-3.5 bg-cyan-500 hover:bg-cyan-400 text-black font-bold rounded-xl transition-all shadow-lg shadow-cyan-500/20 text-sm md:text-base uppercase tracking-wider">
              Get Free Quote →
            </Link>
          </div>

          {/* Related Articles */}
          <div className="mt-20 pt-10 border-t border-white/10">
            <h3 className="text-xl md:text-2xl font-display font-bold text-white mb-8 tracking-tight">Related Articles</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Object.values(blogPosts)
                .filter((p) => p.slug !== post.slug)
                .slice(0, 2)
                .map((post) => (
                  <Link key={post.slug} href={`/blog/${post.slug}`} className="p-6 rounded-2xl border border-white/10 bg-black/60 backdrop-blur-xl hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(0,240,255,0.05)] transition-all duration-300 block">
                    <p className="text-white hover:text-cyan-400 transition-colors font-semibold font-display tracking-tight leading-snug">{post.title} →</p>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
