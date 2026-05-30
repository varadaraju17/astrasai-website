import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Sparkles, BookOpen } from 'lucide-react';
import Breadcrumb from '@/components/Breadcrumb';

const domain = 'https://astrasai.in';

export const metadata: Metadata = {
  title: 'Blog — Astras AI | AI Insights, Tutorials & Industry News',
  description:
    'The Astras AI blog — your source for AI trends, tutorials, and practical guides on AI websites, mobile apps, AI agents, digital marketing, and startup growth in India.',
  keywords: [
    'AI blog India', 'AI agency blog Bangalore', 'AI website tutorial India',
    'AI agent guide', 'digital marketing AI blog', 'startup AI India',
  ],
  alternates: { canonical: `${domain}/blog` },
  openGraph: {
    title: 'Blog — Astras AI | AI Insights for Indian Businesses',
    description: 'Expert AI tutorials, guides, and industry insights from Bangalore\'s leading AI agency.',
    url: `${domain}/blog`,
    locale: 'en_IN',
    images: [{ url: `${domain}/og-image.jpg`, width: 1200, height: 630, alt: 'Astras AI Blog' }],
  },
};

const posts = [
  {
    slug: 'ai-website-cost-india',
    title: 'How Much Does an AI Website Cost in India? (2025 Complete Guide)',
    excerpt: 'A detailed breakdown of AI website development costs in India — from ₹15,000 static sites to ₹5,00,000+ enterprise platforms. What affects pricing and how to get the best value.',
    category: 'Web Development',
    readTime: '8 min read',
    date: 'May 30, 2026',
    tags: ['AI Website', 'Pricing', 'India'],
  },
  {
    slug: 'what-is-an-ai-agent',
    title: 'What is an AI Agent? How It Can Transform Your Business in 2025',
    excerpt: 'A plain-English explanation of AI agents — what they are, how they work, and real examples of how Indian businesses are saving 10+ hours per week with custom AI automation.',
    category: 'AI Agents',
    readTime: '6 min read',
    date: 'May 28, 2026',
    tags: ['AI Agents', 'Automation', 'Business'],
  },
  {
    slug: 'best-ai-agencies-bangalore',
    title: 'Best AI Agencies in Bangalore 2025 — Complete Comparison',
    excerpt: 'An honest comparison of the top AI development agencies in Bangalore, covering pricing, specializations, client reviews, and what makes each unique.',
    category: 'Industry',
    readTime: '10 min read',
    date: 'May 25, 2026',
    tags: ['Bangalore', 'AI Agency', 'Comparison'],
  },
  {
    slug: 'nextjs-vs-wordpress-ai-websites',
    title: 'Next.js vs WordPress for AI Websites: Which Should You Choose in 2025?',
    excerpt: 'A technical and practical comparison of Next.js and WordPress for building AI-powered websites. Speed, SEO, cost, and maintenance — everything you need to decide.',
    category: 'Web Development',
    readTime: '7 min read',
    date: 'May 22, 2026',
    tags: ['Next.js', 'WordPress', 'Web Dev'],
  },
  {
    slug: 'startup-mvp-with-ai-30-days',
    title: 'How to Build a Startup MVP with AI in 30 Days (Step-by-Step)',
    excerpt: 'The exact process Astras AI uses to take a startup from idea to investor-ready MVP in 30 days. Includes tech stack choices, common mistakes, and cost estimates.',
    category: 'Startups',
    readTime: '9 min read',
    date: 'May 18, 2026',
    tags: ['Startup', 'MVP', 'AI Development'],
  },
  {
    slug: 'flutter-vs-react-native-ai-apps',
    title: 'Flutter vs React Native for AI Mobile Apps in 2025 — Which is Better?',
    excerpt: 'A detailed technical comparison of Flutter and React Native for building AI-powered mobile apps. Performance benchmarks, AI library support, and Astras AI\'s recommendation.',
    category: 'Mobile Development',
    readTime: '8 min read',
    date: 'May 15, 2026',
    tags: ['Flutter', 'React Native', 'Mobile'],
  },
];

const categoryColors: Record<string, string> = {
  'Web Development': 'text-cyan-400 bg-cyan-950/40 border-cyan-500/30',
  'AI Agents': 'text-purple-400 bg-purple-950/40 border-purple-500/30',
  'Industry': 'text-yellow-400 bg-yellow-950/40 border-yellow-500/30',
  'Startups': 'text-green-400 bg-green-950/40 border-green-500/30',
  'Mobile Development': 'text-pink-400 bg-pink-950/40 border-pink-500/30',
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
    <div className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] rounded-full"
      style={{
        background: 'rgba(0,240,255,0.13)',
        filter: 'blur(100px)',
        animation: 'blogOrb1 20s ease-in-out infinite',
        willChange: 'transform',
      }}
    />
    <div className="absolute bottom-1/4 right-1/4 w-[35vw] h-[35vw] rounded-full"
      style={{
        background: 'rgba(112,0,255,0.11)',
        filter: 'blur(110px)',
        animation: 'blogOrb2 25s ease-in-out infinite',
        willChange: 'transform',
      }}
    />
    <style>{`
      @keyframes blogOrb1 {
        0%, 100% { transform: translate(0, 0) scale(1); }
        50% { transform: translate(4vw, -4vh) scale(1.06); }
      }
      @keyframes blogOrb2 {
        0%, 100% { transform: translate(0, 0) scale(1); }
        50% { transform: translate(-4vw, 4vh) scale(0.94); }
      }
    `}</style>
  </div>
);

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-black text-white py-32 px-4 relative overflow-hidden font-body">
      <AuroraBackground />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Breadcrumb */}
        <div className="flex justify-center mb-6">
          <Breadcrumb
            items={[
              { label: 'Home', href: '/' },
              { label: 'Blog' }
            ]}
          />
        </div>

        {/* Header */}
        <div className="text-center mb-20">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-950/30 text-cyan-300 text-xs font-semibold tracking-wider uppercase mb-6 shadow-[0_0_20px_rgba(0,240,255,0.15)]">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
            <span>TRANSMISSION_FEED</span>
          </span>
          
          <h1 className="font-display font-black tracking-tight text-white leading-tight mb-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
            AI Insights & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 drop-shadow-[0_0_20px_rgba(0,240,255,0.3)]">Expert Guides</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
            Practical AI knowledge, systems documentation, and digital tactical guidelines curated by Astras AI.
          </p>
        </div>

        {/* Featured Post */}
        <div className="mb-16">
          <Link
            href={`/blog/${posts[0].slug}`}
            className="group block rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-950/20 to-purple-950/20 hover:border-cyan-500/50 hover:shadow-[0_0_40px_rgba(0,240,255,0.15)] transition-all duration-500 p-8 md:p-12"
          >
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className={`px-3 py-1 rounded-full border text-[10px] font-mono uppercase tracking-wider ${categoryColors[posts[0].category] || 'text-gray-400 bg-white/5 border-white/10'}`}>
                {posts[0].category}
              </span>
              <span className="text-gray-500 text-xs font-mono">{posts[0].readTime}</span>
              <span className="text-gray-500 text-xs font-mono">{posts[0].date}</span>
            </div>
            
            <h2 className="text-2xl md:text-4xl font-display font-bold text-white group-hover:text-cyan-400 transition-colors mb-4 tracking-tight leading-tight">
              {posts[0].title}
            </h2>
            
            <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-6 font-light">{posts[0].excerpt}</p>
            
            <span className="text-cyan-400 font-bold group-hover:text-cyan-300 flex items-center gap-2 transition-colors text-sm uppercase tracking-wider">
              Read Complete Guide <ArrowRight className="w-4 h-4" />
            </span>
          </Link>
        </div>

        {/* Post Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {posts.slice(1).map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col justify-between rounded-2xl border border-white/10 bg-black/60 backdrop-blur-xl hover:border-cyan-500/50 hover:shadow-[0_0_40px_rgba(0,240,255,0.1)] transition-all duration-500 p-6 md:p-8"
            >
              <div>
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className={`px-2.5 py-0.5 rounded-full border text-[9px] font-mono uppercase tracking-wider ${categoryColors[post.category] || 'text-gray-400 bg-white/5 border-white/10'}`}>
                    {post.category}
                  </span>
                </div>
                
                <h2 className="text-lg md:text-xl font-display font-bold text-white group-hover:text-cyan-400 transition-colors mb-4 tracking-tight leading-snug">
                  {post.title}
                </h2>
                
                <p className="text-gray-400 text-sm leading-relaxed mb-6 font-light line-clamp-3">{post.excerpt}</p>
              </div>

              <div className="flex items-center justify-between text-gray-500 text-[10px] font-mono pt-4 border-t border-white/5 uppercase tracking-wider">
                <span>{post.readTime}</span>
                <span>{post.date}</span>
              </div>
            </Link>
          ))}
        </div>

        {/* Coming Soon notice */}
        <div className="mt-20 text-center p-10 rounded-2xl border border-white/10 bg-black/40 backdrop-blur-md max-w-2xl mx-auto">
          <p className="text-gray-400 font-light flex items-center justify-center gap-2">
            <BookOpen className="w-5 h-5 text-cyan-400" />
            <span>
              📬 System telemetry signals updated weekly.{' '}
              <a href="mailto:services@astrasai.in" className="text-cyan-400 hover:text-cyan-300 font-bold hover:underline">
                Subscribe to transmission feed
              </a>.
            </span>
          </p>
        </div>
      </div>
    </main>
  );
}
