import { Metadata } from 'next';
import Link from 'next/link';

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

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-black text-white py-32 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-950/30 text-cyan-300 text-xs font-mono uppercase tracking-wider mb-6">
            Blog
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI Insights &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
              Expert Guides
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Practical AI knowledge for Indian entrepreneurs, developers, and business owners.
            Written by the Astras AI team from Bangalore.
          </p>
        </div>

        {/* Featured Post */}
        <div className="mb-12">
          <Link
            href={`/blog/${posts[0].slug}`}
            className="group block rounded-2xl border border-white/10 bg-gradient-to-br from-cyan-950/20 to-purple-950/20 hover:border-cyan-500/40 transition-all overflow-hidden p-8 md:p-12"
          >
            <div className="flex flex-wrap gap-2 mb-4">
              <span className={`px-3 py-1 rounded-full border text-xs font-mono ${categoryColors[posts[0].category] || 'text-gray-400 bg-white/5 border-white/10'}`}>
                {posts[0].category}
              </span>
              <span className="text-gray-500 text-xs flex items-center">{posts[0].readTime}</span>
              <span className="text-gray-500 text-xs flex items-center">{posts[0].date}</span>
            </div>
            <h2 className="text-2xl md:text-4xl font-bold text-white group-hover:text-cyan-400 transition-colors mb-4">
              {posts[0].title}
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">{posts[0].excerpt}</p>
            <span className="text-cyan-400 font-medium group-hover:underline">Read Article →</span>
          </Link>
        </div>

        {/* Post Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.slice(1).map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block rounded-xl border border-white/10 bg-white/5 hover:border-cyan-500/30 transition-all p-6 flex flex-col"
            >
              <div className="flex flex-wrap gap-2 mb-4">
                <span className={`px-2 py-0.5 rounded-full border text-[10px] font-mono ${categoryColors[post.category] || 'text-gray-400 bg-white/5 border-white/10'}`}>
                  {post.category}
                </span>
              </div>
              <h2 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors mb-3 flex-grow">
                {post.title}
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>
              <div className="flex justify-between text-gray-600 text-xs pt-4 border-t border-white/5">
                <span>{post.readTime}</span>
                <span>{post.date}</span>
              </div>
            </Link>
          ))}
        </div>

        {/* Coming Soon notice */}
        <div className="mt-16 text-center p-8 rounded-2xl border border-white/10 bg-white/5">
          <p className="text-gray-400">
            📬 More articles coming weekly.{' '}
            <a href="mailto:services@astrasai.in" className="text-cyan-400 hover:underline">
              Subscribe to our newsletter
            </a>{' '}
            to get notified.
          </p>
        </div>
      </div>
    </main>
  );
}
