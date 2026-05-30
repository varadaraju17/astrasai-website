import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';

const domain = 'https://astrasai.in';

export const metadata: Metadata = {
  title: 'How Much Does an AI Website Cost in India? (2025 Guide) | Astras AI Blog',
  description:
    'Complete breakdown of AI website costs in India in 2025. From ₹15,000 basic sites to ₹5L+ enterprise platforms. Learn what factors affect pricing and how to get the best value for your budget.',
  keywords: [
    'AI website cost India 2025', 'website development cost Bangalore', 'how much does a website cost India',
    'AI website price', 'Next.js website cost India', 'website development price Bangalore',
  ],
  alternates: { canonical: `${domain}/blog/ai-website-cost-india` },
  openGraph: {
    title: 'How Much Does an AI Website Cost in India? (2025 Complete Guide)',
    description: 'Honest breakdown of website development costs in India — from ₹15K to ₹5L+. What you pay for and how to avoid overpaying.',
    url: `${domain}/blog/ai-website-cost-india`,
    locale: 'en_IN',
    type: 'article',
    images: [{ url: `${domain}/og-image.jpg`, width: 1200, height: 630, alt: 'AI Website Cost India 2025' }],
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'How Much Does an AI Website Cost in India? (2025 Complete Guide)',
  description: 'Complete breakdown of AI website development costs in India for 2025.',
  author: { '@type': 'Organization', name: 'Astras AI', url: domain },
  publisher: { '@type': 'Organization', name: 'Astras AI', url: domain, logo: { '@type': 'ImageObject', url: `${domain}/logo.webp` } },
  datePublished: '2026-05-30',
  dateModified: '2026-05-30',
  mainEntityOfPage: { '@type': 'WebPage', '@id': `${domain}/blog/ai-website-cost-india` },
  image: `${domain}/og-image.jpg`,
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How much does a website cost in India in 2025?', acceptedAnswer: { '@type': 'Answer', text: 'In India in 2025, a basic business website costs ₹10,000–₹30,000. A professional website with CMS costs ₹30,000–₹80,000. An AI-powered website with chatbot and advanced features costs ₹50,000–₹2,00,000. Enterprise web applications start from ₹2,00,000.' } },
    { '@type': 'Question', name: 'Is Next.js cheaper than WordPress for a website?', acceptedAnswer: { '@type': 'Answer', text: 'Next.js websites are typically more expensive upfront (₹25,000–₹1,00,000) but cheaper to maintain long-term. WordPress sites are cheaper initially (₹15,000–₹40,000) but require plugin costs, security patches, and hosting maintenance that add up over time.' } },
    { '@type': 'Question', name: 'What is included in a ₹15,000 website?', acceptedAnswer: { '@type': 'Answer', text: 'A ₹15,000 website from Astras AI includes: 5–7 pages, mobile-responsive design, basic SEO (meta tags, sitemap), contact form, Google Analytics setup, and 1 month of free support. It does NOT include AI chatbots, user login, e-commerce, or custom backend functionality.' } },
  ],
};

export default function BlogPostPage() {
  return (
    <>
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <main className="min-h-screen bg-black text-white py-32 px-4">
        <div className="max-w-3xl mx-auto">
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/" className="hover:text-cyan-400">Home</Link> &rsaquo;{' '}
            <Link href="/blog" className="hover:text-cyan-400">Blog</Link> &rsaquo;{' '}
            <span className="text-gray-300">AI Website Cost India 2025</span>
          </nav>

          {/* Header */}
          <div className="mb-10">
            <span className="inline-block px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-4">Web Development</span>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              How Much Does an AI Website Cost in India? (2025 Complete Guide)
            </h1>
            <div className="flex gap-4 text-gray-500 text-sm mb-8">
              <span>By Astras AI Team</span>
              <span>·</span>
              <span>May 30, 2026</span>
              <span>·</span>
              <span>8 min read</span>
            </div>
            <p className="text-xl text-gray-300 leading-relaxed border-l-4 border-cyan-500 pl-6">
              The most common question we get from clients: &ldquo;How much will a website cost?&rdquo; 
              The honest answer is: it depends. But in this guide, we break it all down — so you know exactly what you&apos;re paying for, and what you&apos;re not.
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-invert prose-lg max-w-none space-y-8">
            
            <h2 className="text-2xl font-bold text-white">The Short Answer: Website Costs in India 2025</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-white/20">
                    <th className="text-left py-3 px-4 text-cyan-400 font-bold">Website Type</th>
                    <th className="text-left py-3 px-4 text-cyan-400 font-bold">Cost Range (INR)</th>
                    <th className="text-left py-3 px-4 text-cyan-400 font-bold">Timeline</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Basic Portfolio/Business Site', '₹10,000 – ₹30,000', '1–2 weeks'],
                    ['Professional Business Website', '₹25,000 – ₹70,000', '2–4 weeks'],
                    ['AI-Powered Website + Chatbot', '₹50,000 – ₹1,50,000', '3–6 weeks'],
                    ['E-Commerce Store', '₹40,000 – ₹2,00,000', '4–8 weeks'],
                    ['Custom Web Application', '₹1,00,000 – ₹5,00,000+', '8–20 weeks'],
                    ['Enterprise Platform', '₹5,00,000+', '6–12 months'],
                  ].map(([type, cost, time]) => (
                    <tr key={type} className="border-b border-white/10 hover:bg-white/5">
                      <td className="py-3 px-4 text-gray-300">{type}</td>
                      <td className="py-3 px-4 text-green-400 font-mono">{cost}</td>
                      <td className="py-3 px-4 text-gray-400">{time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-white mt-10">What Factors Affect Website Cost?</h2>
            
            <h3 className="text-xl font-bold text-cyan-400">1. Number of Pages</h3>
            <p className="text-gray-400 leading-relaxed">
              Each page requires design, content, and development. A 5-page site (Home, About, Services, Blog, Contact) costs significantly less than a 50-page e-commerce catalog. At Astras AI, our base packages start with 5–7 pages. Additional pages are typically ₹1,500–₹5,000 each depending on complexity.
            </p>

            <h3 className="text-xl font-bold text-cyan-400">2. Design Complexity</h3>
            <p className="text-gray-400 leading-relaxed">
              A standard template-based design costs less. A fully custom design with unique animations, glassmorphism effects, 3D elements, and branded micro-interactions costs 2–3x more. Most clients in the ₹25,000–₹60,000 range get a premium custom design within their budget at Astras AI.
            </p>

            <h3 className="text-xl font-bold text-cyan-400">3. AI Features</h3>
            <p className="text-gray-400 leading-relaxed">
              This is where costs jump significantly. AI features like:
            </p>
            <ul className="text-gray-400 space-y-2 pl-6">
              <li>• <strong className="text-white">AI Chatbot:</strong> Add ₹15,000–₹40,000 depending on complexity</li>
              <li>• <strong className="text-white">Product Recommendations:</strong> Add ₹25,000–₹60,000</li>
              <li>• <strong className="text-white">AI Content Generation:</strong> Add ₹20,000–₹50,000</li>
              <li>• <strong className="text-white">Voice Search:</strong> Add ₹30,000–₹80,000</li>
            </ul>

            <h3 className="text-xl font-bold text-cyan-400">4. Backend & Database</h3>
            <p className="text-gray-400 leading-relaxed">
              A static website (just HTML/CSS/JS) has no backend and is cheapest to build and host. The moment you add user login, a database, or an admin panel, you&apos;re in custom backend territory — which adds ₹40,000–₹1,50,000 depending on scope.
            </p>

            <h3 className="text-xl font-bold text-cyan-400">5. Technology Stack</h3>
            <p className="text-gray-400 leading-relaxed">
              WordPress is generally cheaper to build but has ongoing plugin and maintenance costs. Next.js (React) is more expensive upfront but delivers better performance, SEO, and scalability with lower long-term costs. At Astras AI, we build all websites on Next.js 14 for the best long-term results.
            </p>

            <h2 className="text-2xl font-bold text-white mt-10">Why Some Agencies Charge ₹5,000 and Others Charge ₹5,00,000</h2>
            <p className="text-gray-400 leading-relaxed">
              You&apos;ll find websites advertised for everything from ₹3,000 to ₹50,00,000 in India. The massive range comes down to:
            </p>
            <ul className="text-gray-400 space-y-2 pl-6">
              <li>• <strong className="text-white">₹3,000–₹10,000:</strong> Freelancers using page builders (Wix, Squarespace). Fast but limited, not SEO-optimized, no custom code.</li>
              <li>• <strong className="text-white">₹15,000–₹60,000:</strong> Small agencies or experienced freelancers using WordPress or React. Good quality for most SMBs.</li>
              <li>• <strong className="text-white">₹75,000–₹3,00,000:</strong> Professional agencies like Astras AI using modern tech stacks with AI integration and proper SEO.</li>
              <li>• <strong className="text-white">₹5,00,000+:</strong> Large agencies or enterprise software companies building complex platforms for large corporations.</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-10">What Does Astras AI Charge? (Honest Breakdown)</h2>
            <p className="text-gray-400 leading-relaxed">Here&apos;s exactly what you get at each price point with us:</p>
            <div className="space-y-4">
              {[
                { price: '₹15,000', label: 'Starter', features: ['5–7 page site', 'Mobile responsive', 'Basic SEO', 'Contact form', '1 month support'] },
                { price: '₹45,000', label: 'Business', features: ['10–15 pages', 'AI chatbot', 'Advanced SEO + Schema', 'Blog/CMS', 'WhatsApp integration', '3 months support'] },
                { price: '₹1,20,000+', label: 'Enterprise', features: ['Custom web app', 'User authentication', 'AI personalization', 'Payment gateway', 'Admin dashboard', '6 months support'] },
              ].map((plan) => (
                <div key={plan.price} className="p-6 rounded-xl border border-white/10 bg-white/5">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="text-2xl font-bold text-cyan-400">{plan.price}</span>
                    <span className="text-gray-400 font-medium">{plan.label}</span>
                  </div>
                  <ul className="grid grid-cols-2 gap-1">
                    {plan.features.map((f) => <li key={f} className="text-gray-400 text-sm flex items-center gap-2"><span className="text-green-400">✓</span>{f}</li>)}
                  </ul>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-white mt-10">Red Flags When Hiring a Website Developer</h2>
            <ul className="text-gray-400 space-y-2 pl-6">
              <li>🚩 No portfolio or only shows template websites</li>
              <li>🚩 Charges monthly fees for a &ldquo;website subscription&rdquo; (you never own the site)</li>
              <li>🚩 Uses page builders (Wix/Squarespace) but charges ₹50,000+</li>
              <li>🚩 Can&apos;t explain what technology they&apos;re using</li>
              <li>🚩 No contract or project specification document</li>
              <li>🚩 Zero mention of SEO optimization in their proposal</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-10">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqSchema.mainEntity.map((faq, i) => (
                <details key={i} className="border border-white/10 rounded-xl bg-white/5 overflow-hidden">
                  <summary className="flex items-center justify-between p-5 cursor-pointer list-none font-semibold text-white">
                    <span className="pr-4">{faq.name}</span>
                    <span className="text-cyan-400 text-xl shrink-0">+</span>
                  </summary>
                  <div className="px-5 pb-5 text-gray-400 leading-relaxed border-t border-white/5 pt-4">{faq.acceptedAnswer.text}</div>
                </details>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-12 p-8 rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-cyan-950/20 to-purple-950/20 text-center">
              <h2 className="text-2xl font-bold text-white mb-3">Get a Free Quote for Your Website</h2>
              <p className="text-gray-400 mb-6">Tell us what you need and we&apos;ll give you an exact quote within 24 hours — no vague estimates.</p>
              <Link href="/contact" className="inline-block px-8 py-3 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-black font-bold transition-colors">
                Get Free Quote →
              </Link>
            </div>

            {/* Related Posts */}
            <div className="mt-12 pt-8 border-t border-white/10">
              <h3 className="text-xl font-bold text-white mb-6">Related Articles</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { slug: 'what-is-an-ai-agent', title: 'What is an AI Agent? How It Can Transform Your Business' },
                  { slug: 'nextjs-vs-wordpress-ai-websites', title: 'Next.js vs WordPress: Which is Better for AI Websites?' },
                ].map((post) => (
                  <Link key={post.slug} href={`/blog/${post.slug}`} className="p-4 rounded-xl border border-white/10 hover:border-cyan-500/30 transition-colors">
                    <p className="text-white hover:text-cyan-400 transition-colors font-medium">{post.title} →</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
