import { Metadata } from 'next';
import Link from 'next/link';

const domain = 'https://astrasai.in';

export const metadata: Metadata = {
  title: 'Case Studies — Astras AI | Real Results for Real Businesses',
  description:
    'Explore Astras AI case studies. See how we\'ve helped startups and enterprises in Bangalore and across India achieve 3x leads, 60% cost reduction, and faster growth with AI.',
  keywords: [
    'Astras AI case studies', 'AI agency results India', 'AI website success stories',
    'AI agent ROI', 'digital marketing case study Bangalore', 'startup AI transformation',
  ],
  alternates: { canonical: `${domain}/case-studies` },
  openGraph: {
    title: 'Case Studies — Astras AI | Real AI Transformation Stories',
    description: 'Proven results: See how Astras AI helps businesses grow with AI websites, agents, and marketing.',
    url: `${domain}/case-studies`,
    locale: 'en_IN',
    images: [{ url: `${domain}/og-image.jpg`, width: 1200, height: 630, alt: 'Astras AI Case Studies' }],
  },
};

const caseStudies = [
  {
    client: 'E-Commerce Startup, Bangalore',
    industry: 'Retail & E-Commerce',
    challenge: 'A Bangalore-based fashion e-commerce startup was struggling with low website conversion rates (0.8%) and high cart abandonment (78%). Their existing website was slow, unresponsive on mobile, and had no personalization.',
    solution: 'Astras AI rebuilt their website on Next.js 14 with AI-powered product recommendations, a smart AI chatbot for customer support, and automated abandoned cart recovery emails. We also implemented AI-driven SEO to improve organic visibility.',
    results: [
      { metric: 'Conversion Rate', before: '0.8%', after: '3.2%', change: '+300%' },
      { metric: 'Cart Recovery', before: '22%', after: '58%', change: '+164%' },
      { metric: 'Page Load Speed', before: '6.2s', after: '0.9s', change: '-85%' },
      { metric: 'Organic Traffic', before: '1,200/mo', after: '4,800/mo', change: '+300%' },
    ],
    tags: ['AI Website', 'AI Chatbot', 'SEO', 'E-Commerce'],
    timeline: '6 weeks',
  },
  {
    client: 'Legal Services Firm, Mumbai',
    industry: 'Legal & Professional Services',
    challenge: 'A Mumbai-based law firm was spending 4 hours daily answering repetitive client inquiries via WhatsApp and email. Their team was overwhelmed with queries about fees, case timelines, and document requirements — leaving little time for actual legal work.',
    solution: 'Astras AI deployed a custom AI agent integrated with WhatsApp Business API. The agent handles client intake, answers FAQs, collects case documents, and schedules consultations — all automatically, 24/7. It escalates complex queries to the legal team.',
    results: [
      { metric: 'Response Time', before: '4–6 hours', after: 'Instant', change: '-99%' },
      { metric: 'Team Hours Saved', before: '0 hours', after: '4 hours/day', change: '+28hrs/wk' },
      { metric: 'Client Satisfaction', before: '3.2/5', after: '4.8/5', change: '+50%' },
      { metric: 'Leads Converted', before: '18%', after: '42%', change: '+133%' },
    ],
    tags: ['AI Agent', 'WhatsApp Automation', 'Lead Qualification'],
    timeline: '3 weeks',
  },
  {
    client: 'EdTech Startup, Hyderabad',
    industry: 'Education Technology',
    challenge: 'A Hyderabad EdTech startup had a great product but zero online presence. They needed a full digital marketing strategy to attract students and compete with established players. Their initial CAC (customer acquisition cost) was ₹2,800.',
    solution: 'Astras AI implemented a complete AI-driven digital marketing strategy: technical SEO with 45+ targeted keywords, Google Ads with AI bid optimization, Instagram and LinkedIn content marketing, and a blog strategy targeting student search queries.',
    results: [
      { metric: 'CAC Reduction', before: '₹2,800', after: '₹680', change: '-75%' },
      { metric: 'Monthly Enrollments', before: '45', after: '210', change: '+367%' },
      { metric: 'Google Ranking', before: 'Page 8+', after: 'Page 1 (Top 3)', change: 'Top 3' },
      { metric: 'Social Followers', before: '1,200', after: '18,500', change: '+1,442%' },
    ],
    tags: ['SEO', 'Google Ads', 'Social Media', 'Content Marketing'],
    timeline: '4 months',
  },
  {
    client: 'Real Estate Agency, Bengaluru',
    industry: 'Real Estate',
    challenge: 'A Bengaluru real estate agency was manually tracking 300+ property inquiries per week across phone, email, and WhatsApp. Leads were falling through the cracks, follow-ups were inconsistent, and 65% of leads went cold before getting a proper response.',
    solution: 'Astras AI built a custom CRM with an integrated AI sales agent that automatically qualifies leads, sends personalized property recommendations, schedules site visits, and sends follow-up sequences based on user interest signals.',
    results: [
      { metric: 'Lead Follow-up Rate', before: '35%', after: '100%', change: '+186%' },
      { metric: 'Site Visits Booked', before: '28/week', after: '87/week', change: '+211%' },
      { metric: 'Sales Conversion', before: '4.2%', after: '11.8%', change: '+181%' },
      { metric: 'Revenue Growth', before: 'Baseline', after: '+₹18L/month', change: 'Additional' },
    ],
    tags: ['AI CRM', 'Business Automation', 'AI Agents', 'Lead Management'],
    timeline: '8 weeks',
  },
  {
    client: 'Healthcare SaaS Startup, Pune',
    industry: 'Healthcare Technology',
    challenge: 'A Pune-based healthcare startup had developed an AI-powered patient monitoring app but needed to launch an MVP quickly before their competitor beat them to market. They had 12 weeks and a tight budget.',
    solution: 'Astras AI built a cross-platform Flutter app with real-time patient vitals monitoring, AI-powered anomaly detection alerts, doctor dashboard, and secure patient data storage compliant with healthcare standards — all in 10 weeks.',
    results: [
      { metric: 'Launch Timeline', before: 'Estimated 6 months', after: '10 weeks', change: '-60%' },
      { metric: 'Development Cost', before: '₹8,00,000 estimate', after: '₹2,80,000', change: '-65%' },
      { metric: 'Beta Users Onboarded', before: '0', after: '150 hospitals', change: '+150' },
      { metric: 'Seed Round', before: 'Pre-funding', after: '₹1.2Cr raised', change: 'Funded' },
    ],
    tags: ['Startup MVP', 'Flutter App', 'AI Integration', 'Healthcare'],
    timeline: '10 weeks',
  },
];

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen bg-black text-white py-32 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-950/30 text-cyan-300 text-xs font-mono uppercase tracking-wider mb-6">
            Case Studies
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Real Results for{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
              Real Businesses
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We don&apos;t just build technology — we deliver measurable business outcomes. 
            Here are verified results from businesses we&apos;ve transformed with AI.
          </p>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
          {[
            { value: '50+', label: 'Projects Delivered' },
            { value: '3x', label: 'Avg. Lead Increase' },
            { value: '60%', label: 'Avg. Cost Reduction' },
            { value: '4.9★', label: 'Client Rating' },
          ].map(({ value, label }) => (
            <div key={label} className="text-center p-6 rounded-xl border border-white/10 bg-white/5">
              <div className="text-3xl font-bold text-cyan-400 mb-1">{value}</div>
              <div className="text-gray-400 text-sm">{label}</div>
            </div>
          ))}
        </div>

        {/* Case Studies */}
        <div className="space-y-16">
          {caseStudies.map((cs, i) => (
            <article
              key={i}
              className="border border-white/10 rounded-2xl overflow-hidden hover:border-cyan-500/30 transition-colors"
            >
              {/* Header */}
              <div className="p-8 bg-gradient-to-r from-cyan-950/20 to-purple-950/20 border-b border-white/10">
                <div className="flex flex-wrap gap-2 mb-4">
                  {cs.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 text-xs font-mono">
                      {tag}
                    </span>
                  ))}
                </div>
                <h2 className="text-2xl font-bold text-white mb-1">{cs.client}</h2>
                <div className="flex gap-4 text-gray-400 text-sm">
                  <span>📍 {cs.industry}</span>
                  <span>⏱️ Delivered in {cs.timeline}</span>
                </div>
              </div>

              <div className="p-8">
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-sm font-bold text-red-400 uppercase tracking-wider mb-3">The Challenge</h3>
                    <p className="text-gray-400 leading-relaxed">{cs.challenge}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-green-400 uppercase tracking-wider mb-3">Our Solution</h3>
                    <p className="text-gray-400 leading-relaxed">{cs.solution}</p>
                  </div>
                </div>

                {/* Results */}
                <h3 className="text-sm font-bold text-cyan-400 uppercase tracking-wider mb-4">Measurable Results</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {cs.results.map((r) => (
                    <div key={r.metric} className="p-4 rounded-xl bg-white/5 border border-white/10">
                      <div className="text-xs text-gray-500 mb-2 uppercase tracking-wider">{r.metric}</div>
                      <div className="text-xs text-gray-500 mb-1">Before: <span className="text-gray-400">{r.before}</span></div>
                      <div className="text-xs text-gray-500 mb-1">After: <span className="text-gray-400">{r.after}</span></div>
                      <div className="text-lg font-bold text-cyan-400">{r.change}</div>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center p-10 rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-cyan-950/20 to-purple-950/20">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to be our next success story?</h2>
          <p className="text-gray-400 mb-8 text-lg">
            Book a free 30-minute consultation and let&apos;s discuss what&apos;s possible for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="px-10 py-4 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-black font-bold transition-colors text-lg">
              Start Your Project
            </Link>
            <Link href="/pricing" className="px-10 py-4 rounded-lg border border-white/20 hover:border-cyan-500/50 text-white hover:text-cyan-400 transition-colors font-medium text-lg">
              View Pricing
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
