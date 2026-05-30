import { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import { ArrowRight, Sparkles, CheckCircle2, Zap } from 'lucide-react';

const domain = 'https://astrasai.in';

type ServicePageConfig = {
  slug: string;
  title: string;
  pageTitle: string;
  description: string;
  keywords: string[];
  color: 'cyan' | 'purple' | 'green' | 'pink' | 'yellow';
  emoji: string;
  tagline: string;
  startingPrice: string;
  timeline: string;
  what: { title: string; desc: string; price: string }[];
  stats: { value: string; label: string }[];
};

const serviceConfigs: ServicePageConfig[] = [
  {
    slug: 'mobile-app-development',
    pageTitle: 'AI Mobile App Development Bangalore | Astras AI — Flutter & React Native',
    title: 'AI Mobile App Development Bangalore',
    description: 'Astras AI builds AI-powered mobile apps in Bangalore for iOS and Android. Flutter and React Native cross-platform apps with AI features. Starting from ₹50,000. Delivered in 6–12 weeks.',
    keywords: ['mobile app development Bangalore', 'Flutter app development India', 'React Native company Bangalore', 'AI mobile app development', 'cross-platform app development India', 'iOS Android app Bangalore'],
    color: 'cyan',
    emoji: '📱',
    tagline: 'Flutter & React Native',
    startingPrice: '₹50,000',
    timeline: '6–12 weeks',
    what: [
      { title: 'Flutter Cross-Platform App', desc: 'One codebase for both iOS and Android. Native performance with beautiful UI. Most cost-effective for startups.', price: 'From ₹50,000' },
      { title: 'React Native App', desc: 'Facebook\'s proven framework for cross-platform apps. Large ecosystem and excellent performance for complex apps.', price: 'From ₹60,000' },
      { title: 'AI-Powered Mobile App', desc: 'Apps with AI recommendation engines, voice recognition, image processing, and predictive analytics built in.', price: 'From ₹1,20,000' },
      { title: 'E-Commerce App', desc: 'Full shopping app with cart, payments (Razorpay/Stripe), order tracking, and AI product recommendations.', price: 'From ₹90,000' },
      { title: 'On-Demand App', desc: 'Uber/Swiggy-style apps with real-time GPS tracking, driver/customer interfaces, and payment integration.', price: 'From ₹2,00,000' },
      { title: 'SaaS Mobile App', desc: 'Subscription-based mobile applications with user management, in-app purchases, and analytics dashboards.', price: 'From ₹1,50,000' },
    ],
    stats: [
      { value: '6–12 wks', label: 'Delivery timeline' },
      { value: '100%', label: 'Cross-platform coverage' },
      { value: '4.8★', label: 'App store rating avg.' },
      { value: '50+', label: 'Apps delivered' },
    ],
  },
  {
    slug: 'digital-marketing',
    pageTitle: 'AI Digital Marketing Agency Bangalore | Astras AI — SEO, Ads & Social',
    title: 'AI Digital Marketing Bangalore',
    description: 'Astras AI provides AI-enhanced digital marketing in Bangalore. SEO, Google Ads, social media marketing, content strategy, and email marketing. Data-driven results starting from ₹12,000/month.',
    keywords: ['digital marketing agency Bangalore', 'AI digital marketing India', 'SEO services Bangalore', 'Google Ads agency India', 'social media marketing Bangalore', 'content marketing India'],
    color: 'green',
    emoji: '📈',
    tagline: 'SEO · Ads · Social · Content',
    startingPrice: '₹12,000/mo',
    timeline: 'Monthly retainer',
    what: [
      { title: 'AI SEO Optimization', desc: 'Technical SEO, keyword research, on-page optimization, schema markup, and backlink building to dominate Google search.', price: 'From ₹12,000/mo' },
      { title: 'Google Ads (SEM)', desc: 'AI-optimized Google Ads campaigns with smart bidding, A/B testing, and continuous optimization for maximum ROI.', price: 'From ₹15,000/mo' },
      { title: 'Social Media Marketing', desc: 'AI-generated content, smart scheduling, community management, and paid social ads on Instagram, LinkedIn, and Facebook.', price: 'From ₹15,000/mo' },
      { title: 'Content Marketing', desc: 'SEO-optimized blog posts, landing pages, and long-form content that rank on Google and establish your brand authority.', price: 'From ₹20,000/mo' },
      { title: 'Email Marketing', desc: 'Personalized email sequences, newsletter campaigns, and automated drip campaigns that convert leads into customers.', price: 'From ₹8,000/mo' },
      { title: 'Full Marketing Suite', desc: 'Complete digital marketing management across all channels with dedicated account manager and weekly reporting.', price: 'From ₹50,000/mo' },
    ],
    stats: [
      { value: '90 days', label: 'To see Google ranking results' },
      { value: '3x', label: 'Average ROI on ad spend' },
      { value: '300%', label: 'Avg. organic traffic increase' },
      { value: '40+', label: 'Marketing clients served' },
    ],
  },
  {
    slug: 'startup-mvp',
    pageTitle: 'AI Startup MVP Development India | Astras AI — Launch in 6 Weeks',
    title: 'AI Startup MVP Development India',
    description: 'Astras AI builds investor-ready startup MVPs in 3–8 weeks. AI-integrated web and mobile apps, startup consulting, and scalable architecture. Starting from ₹50,000. Trusted by 15+ Indian startups.',
    keywords: ['startup MVP development India', 'AI startup Bangalore', 'rapid MVP development company', 'startup tech partner India', 'MVP app development Bangalore', 'SaaS MVP development India'],
    color: 'yellow',
    emoji: '🚀',
    tagline: 'From Idea to Launch',
    startingPrice: '₹50,000',
    timeline: '3–8 weeks',
    what: [
      { title: 'Prototype & Wireframes', desc: 'High-fidelity interactive mockups so you can validate your idea and get investor feedback before writing code.', price: 'From ₹15,000' },
      { title: 'Web MVP', desc: 'Functional web application with core features, user authentication, and basic analytics. Built to attract first users.', price: 'From ₹60,000' },
      { title: 'Mobile MVP', desc: 'Cross-platform mobile app MVP for iOS and Android with essential features and App Store submission.', price: 'From ₹80,000' },
      { title: 'AI-Integrated MVP', desc: 'MVP with AI features like recommendation engines, NLP, or prediction models that give you a competitive moat.', price: 'From ₹1,20,000' },
      { title: 'SaaS MVP', desc: 'Subscription-based web application with multi-tenant architecture, billing integration, and admin dashboard.', price: 'From ₹1,50,000' },
      { title: 'Scale to Product', desc: 'Post-MVP scaling: performance optimization, feature expansion, team training, and ongoing development support.', price: 'Custom' },
    ],
    stats: [
      { value: '15+', label: 'Startups launched' },
      { value: '3–8 wks', label: 'Average MVP delivery' },
      { value: '₹1.2Cr+', label: 'Funding raised by clients' },
      { value: '65%', label: 'Cost vs. traditional agencies' },
    ],
  },
  {
    slug: 'seo-optimization',
    pageTitle: 'AI SEO Optimization Bangalore | Astras AI — Rank on Google in 90 Days',
    title: 'AI SEO Optimization Bangalore',
    description: 'Astras AI provides AI-powered SEO services in Bangalore. Technical SEO, keyword research, content optimization, and backlink building. Rank on Google in 90 days. Starting from ₹12,000/month.',
    keywords: ['SEO services Bangalore', 'AI SEO optimization India', 'SEO agency Bangalore', 'technical SEO India', 'local SEO Bangalore', 'Google ranking services India'],
    color: 'cyan',
    emoji: '🔍',
    tagline: 'Rank · Traffic · Revenue',
    startingPrice: '₹12,000/mo',
    timeline: 'Results in 90 days',
    what: [
      { title: 'Technical SEO Audit', desc: 'Complete website audit: Core Web Vitals, crawlability, indexation, site structure, and schema markup analysis.', price: 'From ₹8,000 (one-time)' },
      { title: 'On-Page SEO', desc: 'Keyword optimization, meta tags, heading structure, internal linking, and content optimization for all target pages.', price: 'From ₹12,000/mo' },
      { title: 'Local SEO', desc: 'Google Business Profile optimization, local citations, NAP consistency, and map ranking for Bangalore searches.', price: 'From ₹8,000/mo' },
      { title: 'Content SEO', desc: 'AI-assisted blog writing, landing page creation, and topic clustering to rank for high-volume informational keywords.', price: 'From ₹20,000/mo' },
      { title: 'Link Building', desc: 'White-hat backlink acquisition from relevant Indian and international websites to boost domain authority.', price: 'From ₹15,000/mo' },
      { title: 'AEO (AI Search)', desc: 'Answer Engine Optimization for ChatGPT, Perplexity, and Google AI Overviews — the future of search visibility.', price: 'From ₹25,000/mo' },
    ],
    stats: [
      { value: '90 days', label: 'To measurable ranking improvement' },
      { value: '300%', label: 'Avg. organic traffic growth' },
      { value: 'Page 1', label: 'Target for all clients' },
      { value: '30+', label: 'SEO clients served' },
    ],
  },
  {
    slug: 'business-automation',
    pageTitle: 'AI Business Automation Bangalore | Astras AI — Save 10 Hours/Week',
    title: 'AI Business Automation Bangalore',
    description: 'Astras AI automates your business workflows with custom AI solutions in Bangalore. CRM automation, document processing, email automation, and reporting. Save 10+ hours per week starting from ₹40,000.',
    keywords: ['AI business automation Bangalore', 'workflow automation India', 'business process automation AI', 'RPA solutions India', 'AI automation company Bangalore'],
    color: 'pink',
    emoji: '⚡',
    tagline: 'Automate · Scale · Grow',
    startingPrice: '₹40,000',
    timeline: '2–6 weeks',
    what: [
      { title: 'CRM Automation', desc: 'Automate lead capture, follow-ups, deal updates, and reporting in your CRM. Never miss a lead again.', price: 'From ₹40,000' },
      { title: 'Document Processing', desc: 'AI extracts data from invoices, contracts, and forms automatically. 99.9% accuracy with zero manual entry.', price: 'From ₹60,000' },
      { title: 'Email Automation', desc: 'Personalized email sequences, auto-responses, and drip campaigns triggered by user behavior.', price: 'From ₹20,000' },
      { title: 'Reporting Automation', desc: 'Automated daily/weekly/monthly reports delivered to your inbox or Slack. Real-time business dashboards.', price: 'From ₹30,000' },
      { title: 'Multi-System Integration', desc: 'Connect your CRM, ERP, email, payments, and other tools into one automated workflow using AI middleware.', price: 'From ₹80,000' },
      { title: 'Full Automation Suite', desc: 'End-to-end business automation across all departments: sales, support, finance, HR, and operations.', price: 'Custom' },
    ],
    stats: [
      { value: '10 hrs', label: 'Avg. time saved per week' },
      { value: '60%', label: 'Reduction in operational costs' },
      { value: '99.9%', label: 'Accuracy in document processing' },
      { value: '2–6 wks', label: 'Implementation timeline' },
    ],
  },
  {
    slug: 'social-media',
    pageTitle: 'AI Social Media Management India | Astras AI — Viral Growth',
    title: 'AI Social Media Management India',
    description: 'Astras AI manages your social media with AI-generated content, smart scheduling, and growth analytics. Instagram, LinkedIn, YouTube, and Facebook. Starting from ₹15,000/month.',
    keywords: ['social media management India', 'AI social media Bangalore', 'Instagram management agency India', 'LinkedIn marketing Bangalore', 'social media agency India'],
    color: 'purple',
    emoji: '📣',
    tagline: 'Create · Post · Grow',
    startingPrice: '₹15,000/mo',
    timeline: 'Monthly retainer',
    what: [
      { title: 'Content Creation', desc: 'AI-assisted design and copywriting for posts, stories, reels, and carousels. Consistent brand voice across all platforms.', price: 'From ₹15,000/mo' },
      { title: 'Instagram Growth', desc: 'Strategic content planning, hashtag optimization, and engagement growth on Instagram for your brand or personal profile.', price: 'From ₹15,000/mo' },
      { title: 'LinkedIn Marketing', desc: 'Professional content, company page management, and LinkedIn ads to reach decision-makers and B2B clients.', price: 'From ₹18,000/mo' },
      { title: 'YouTube Management', desc: 'Video content strategy, thumbnail design, SEO-optimized descriptions, and channel growth for YouTube.', price: 'From ₹25,000/mo' },
      { title: 'Paid Social Ads', desc: 'Meta Ads (Facebook + Instagram), LinkedIn Ads, and YouTube Ads with AI optimization for lowest cost-per-click.', price: 'From ₹20,000/mo' },
      { title: 'Full Social Suite', desc: 'Complete management of all social channels with daily posting, community management, and monthly analytics.', price: 'From ₹45,000/mo' },
    ],
    stats: [
      { value: '300%', label: 'Avg. follower growth in 6 months' },
      { value: '10x', label: 'Content output vs. manual' },
      { value: '4x', label: 'Engagement rate improvement' },
      { value: '25+', label: 'Social media clients' },
    ],
  },
  {
    slug: 'custom-software',
    pageTitle: 'AI Custom Software Development Bangalore | Astras AI',
    title: 'AI Custom Software Development Bangalore',
    description: 'Astras AI builds bespoke AI-integrated software solutions in Bangalore. ERP, CRM, internal tools, and SaaS platforms powered by machine learning. Starting from ₹1,00,000.',
    keywords: ['custom software development Bangalore', 'bespoke software India', 'AI software development Bangalore', 'ERP development India', 'CRM development Bangalore', 'SaaS development India'],
    color: 'cyan',
    emoji: '💻',
    tagline: 'Bespoke AI Solutions',
    startingPrice: '₹1,00,000',
    timeline: '8–12 weeks',
    what: [
      { title: 'Custom CRM Platform', desc: 'Smart CRM system that tracks leads, automates sales follow-ups, and predicts deal closures using custom AI.', price: 'From ₹1,00,000' },
      { title: 'Enterprise ERP Suite', desc: 'Connect operations, finance, and logistics in one unified dashboard with AI-driven inventory forecasting.', price: 'From ₹3,00,000' },
      { title: 'B2B SaaS Platform', desc: 'Multi-tenant secure SaaS platform built with robust modern architecture, subscription billing, and custom AI tools.', price: 'From ₹5,00,000' },
      { title: 'Custom Dashboards', desc: 'Real-time internal operations dashboards that clean, analyze, and visualize complex metrics using AI.', price: 'From ₹1,00,000' },
      { title: 'AI Database Integration', desc: 'Convert legacy databases into vector databases enabling semantic search and smart document retrieval.', price: 'From ₹1,50,000' },
    ],
    stats: [
      { value: '8–12 wks', label: 'Small System Delivery' },
      { value: '16–24 wks', label: 'Medium System Delivery' },
      { value: '99.9%', label: 'Uptime & reliability' },
      { value: '100%', label: 'IP & Code Ownership' },
    ],
  },
  {
    slug: 'academic-projects',
    pageTitle: 'AI Academic Project Help Bangalore | Final Year Projects | Astras AI',
    title: 'AI Academic Projects Bangalore',
    description: 'Astras AI provides expert support for AI/ML academic projects, final year projects, and research in Bangalore. Code, documentation, presentation, and viva preparation.',
    keywords: ['AI academic projects Bangalore', 'final year project help India', 'machine learning project help Bangalore', 'deep learning project India', 'BE BTech project help Bangalore', 'academic AI project support India'],
    color: 'purple',
    emoji: '🎓',
    tagline: 'Final Year Projects & Research',
    startingPrice: '₹3,000',
    timeline: '2–4 weeks',
    what: [
      { title: 'Mini Project Support', desc: 'Simple machine learning or web project with working code and essential project documentation.', price: '₹3,000 - ₹8,000' },
      { title: 'Major Project Support', desc: 'Full AI/ML system implementation, comprehensive documentation, PPT design, and dedicated viva preparation.', price: '₹8,000 - ₹25,000' },
      { title: 'Research Implementation', desc: 'Reproduce and extend a published high-impact IEEE or Springer research paper with detailed performance metrics.', price: '₹15,000 - ₹40,000' },
      { title: 'Dataset Processing', desc: 'Collection, cleaning, labeling, and training-test split of specialized domain datasets for custom models.', price: 'From ₹5,000' },
      { title: 'Viva & PPT Preparation', desc: 'Mock viva presentation sessions and professionally designed slides to confidently defend your project.', price: 'From ₹3,000' },
    ],
    stats: [
      { value: '100%', label: 'Project selection approval' },
      { value: '2–4 wks', label: 'Completion timeline' },
      { value: '500+', label: 'Students mentored' },
      { value: 'A+ Grade', label: 'Avg. project result' },
    ],
  },
  {
    slug: 'career-mentorship',
    pageTitle: 'AI Career Mentorship Bangalore | Resume & Interview Coaching | Astras AI',
    title: 'AI Career Mentorship Bangalore',
    description: 'Astras AI\'s career mentorship in Bangalore helps you land your dream tech job. AI-optimized resume, LinkedIn makeover, mock interviews, and job roadmaps.',
    keywords: ['career mentorship Bangalore', 'AI resume writing India', 'LinkedIn optimization Bangalore', 'interview coaching India', 'career coaching Bangalore', 'job search help India', 'ATS resume optimization'],
    color: 'green',
    emoji: '💼',
    tagline: 'Land Your Dream Tech Job',
    startingPrice: '₹2,500',
    timeline: '1–4 weeks',
    what: [
      { title: 'ATS Resume Makeover', desc: 'Rewrite and optimize your resume to pass automated ATS screenings with keyword integration.', price: 'From ₹2,500' },
      { title: 'LinkedIn Profile Makeover', desc: 'Revamp headline, summary, skills, and featured sections to attract global recruiters organically.', price: 'From ₹3,500' },
      { title: 'Mock Interviews', desc: 'Realistic technical and HR mock interviews with detailed feedback on coding, system design, and communication.', price: 'From ₹4,000' },
      { title: 'Job Search Strategy', desc: 'Customized 90-day cold emailing scripts, networking templates, and warm introduction strategies.', price: 'From ₹5,000' },
      { title: 'Tech Career Transition', desc: 'Complete personalized program for transitioning into AI, data science, or web development from non-tech roles.', price: 'From ₹10,000' },
    ],
    stats: [
      { value: '3 callback', label: 'Increase in recruiter calls' },
      { value: '150+', label: 'Professionals placed' },
      { value: '45%', label: 'Average salary hike' },
      { value: '100%', label: 'ATS pass guarantee' },
    ],
  },
  {
    slug: 'profile-building',
    pageTitle: 'AI Profile Building & Resume Optimization Bangalore | Astras AI',
    title: 'AI Profile Building Bangalore',
    description: 'Beat the ATS. Astras AI uses advanced AI to optimize your resume, LinkedIn, and GitHub profiles so top recruiters in Bangalore find and hire you.',
    keywords: ['profile building Bangalore', 'resume writing services Bangalore', 'LinkedIn profile makeover India', 'GitHub portfolio review Bangalore', 'ATS resume optimization India'],
    color: 'pink',
    emoji: '⭐',
    tagline: 'Beat the ATS Filters',
    startingPrice: '₹3,00,000', // Updated to match user config
    timeline: '3–5 days',
    what: [
      { title: 'ATS-Optimized Resume', desc: 'A professional resume formatted and optimized with high-impact industry keywords to pass all ATS software.', price: 'From ₹3,000' },
      { title: 'LinkedIn Profile Makeover', desc: 'Complete revamp of your headline, summary, featured items, and skills to boost organic views from recruiters.', price: 'From ₹3,500' },
      { title: 'GitHub Portfolio Review', desc: 'Structuring your repositories, polishing READMEs, and pinning high-impact code showcases for technical reviewers.', price: 'From ₹2,000' },
      { title: 'Elevator Pitch & Brand Statement', desc: 'Craft a compelling 30-second personal value statement that leaves an indelible impression on hiring managers.', price: 'From ₹1,500' },
      { title: 'Recommendation Strategy', desc: 'Structured templates and step-by-step guidance on securing powerful peer and mentor recommendations.', price: 'From ₹1,000' },
    ],
    stats: [
      { value: '3 days', label: 'Fast delivery' },
      { value: '98%', label: 'ATS compatibility' },
      { value: '5x', label: 'Profile visibility increase' },
      { value: '200+', label: 'Successful makeovers' },
    ],
  },
];

export async function generateStaticParams() {
  return serviceConfigs.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const config = serviceConfigs.find((s) => s.slug === params.slug);
  if (!config) return {};
  return {
    title: config.pageTitle,
    description: config.description,
    keywords: config.keywords,
    alternates: { canonical: `${domain}/services/${config.slug}` },
    openGraph: {
      title: config.pageTitle,
      description: config.description,
      url: `${domain}/services/${config.slug}`,
      locale: 'en_IN',
      images: [{ url: `${domain}/og-image.jpg`, width: 1200, height: 630, alt: config.title }],
    },
  };
}

const colorClasses: Record<string, { text: string; border: string; bg: string; btn: string; glow: string }> = {
  cyan: { text: 'text-cyan-400', border: 'border-cyan-500/30', bg: 'bg-cyan-950/20', btn: 'bg-cyan-500 text-black hover:bg-cyan-400 hover:shadow-[0_0_30px_rgba(0,240,255,0.5)]', glow: 'rgba(0,240,255,0.15)' },
  purple: { text: 'text-purple-400', border: 'border-purple-500/30', bg: 'bg-purple-950/20', btn: 'bg-purple-600 text-white hover:bg-purple-500 hover:shadow-[0_0_30px_rgba(112,0,255,0.5)]', glow: 'rgba(112,0,255,0.15)' },
  green: { text: 'text-green-400', border: 'border-green-500/30', bg: 'bg-green-950/20', btn: 'bg-green-600 text-white hover:bg-green-500 hover:shadow-[0_0_30px_rgba(34,197,94,0.5)]', glow: 'rgba(34,197,94,0.12)' },
  pink: { text: 'text-pink-400', border: 'border-pink-500/30', bg: 'bg-pink-950/20', btn: 'bg-pink-600 text-white hover:bg-pink-500 hover:shadow-[0_0_30px_rgba(236,72,153,0.5)]', glow: 'rgba(236,72,153,0.12)' },
  yellow: { text: 'text-yellow-400', border: 'border-yellow-500/30', bg: 'bg-yellow-950/20', btn: 'bg-yellow-500 text-black hover:bg-yellow-400 hover:shadow-[0_0_30px_rgba(234,179,8,0.5)]', glow: 'rgba(234,179,8,0.12)' },
};

// --- CSS Aurora Background ---
const AuroraBackground = ({ glowColor }: { glowColor: string }) => (
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
    {/* Dynamic Orb */}
    <div className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] rounded-full"
      style={{
        background: glowColor,
        filter: 'blur(100px)',
        animation: 'serviceOrb1 18s ease-in-out infinite',
        willChange: 'transform',
      }}
    />
    <div className="absolute bottom-1/4 right-1/4 w-[35vw] h-[35vw] rounded-full"
      style={{
        background: 'rgba(112,0,255,0.06)',
        filter: 'blur(110px)',
        animation: 'serviceOrb2 22s ease-in-out infinite',
        willChange: 'transform',
      }}
    />
    <style>{`
      @keyframes serviceOrb1 {
        0%, 100% { transform: translate(0, 0) scale(1); }
        50% { transform: translate(3vw, -4vh) scale(1.08); }
      }
      @keyframes serviceOrb2 {
        0%, 100% { transform: translate(0, 0) scale(1); }
        50% { transform: translate(-3vw, 3vh) scale(0.92); }
      }
    `}</style>
  </div>
);

export default function ServicePage({ params }: { params: { slug: string } }) {
  const config = serviceConfigs.find((s) => s.slug === params.slug);
  if (!config) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <p>Service not found. <Link href="/services" className="text-cyan-400 underline">View all services →</Link></p>
      </div>
    );
  }

  const c = colorClasses[config.color] || colorClasses.cyan;

  return (
    <main className="min-h-screen bg-black text-white relative overflow-hidden font-body">
      {/* Aurora Ambience */}
      <AuroraBackground glowColor={c.glow} />

      {/* ── HERO SECTION ── */}
      <section className="relative pt-32 pb-20 px-4 md:px-8 z-10">
        <div className="max-w-5xl mx-auto text-center flex flex-col items-center">
          
          <div className="flex justify-center mb-6">
            <Breadcrumb
              items={[
                { label: 'Home', href: '/' },
                { label: 'Services', href: '/services' },
                { label: config.title }
              ]}
            />
          </div>

          <div className="text-6xl mb-6 animate-bounce">{config.emoji}</div>
          
          <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border ${c.border} ${c.bg} ${c.text} text-xs font-semibold tracking-wider uppercase mb-8 shadow-inner`}>
            <Sparkles className="w-3.5 h-3.5 animate-pulse" />
            <span>{config.tagline}</span>
          </div>

          <h1 className="font-display font-black tracking-tight text-white leading-tight mb-8 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
            {config.title}
          </h1>

          <p className="speakable text-lg sm:text-xl text-gray-300 leading-relaxed mb-12 max-w-3xl font-light">
            {config.description.split('.')[0]}. Starting from{' '}
            <span className={`${c.text} font-medium`}>{config.startingPrice}</span>. Completed within {config.timeline}.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full sm:w-auto">
            <Link href="/contact" className={`relative flex items-center justify-center gap-2.5 px-8 py-4 rounded-full font-bold text-sm md:text-base transition-all duration-300 w-full sm:w-auto ${c.btn}`}>
              Get Free Quote
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/pricing" className="flex items-center justify-center gap-2.5 px-8 py-4 rounded-full font-bold text-sm md:text-base bg-white/5 text-white border border-white/20 hover:bg-white/10 hover:border-cyan-400/50 backdrop-blur-md transition-all duration-300 w-full sm:w-auto">
              View Pricing
            </Link>
          </div>

        </div>
      </section>

      {/* ── WHAT WE OFFER ── */}
      <section className="relative py-24 px-4 md:px-8 z-10 border-t border-white/10 bg-black/40">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white tracking-tight">
              Elite <span className={c.text}>Capabilities</span>
            </h2>
            <p className="text-gray-400 mt-4 text-base md:text-lg max-w-2xl mx-auto font-light">
              Bespoke systems engineered with next-gen AI to give you a definitive market advantage.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {config.what.map((w) => (
              <div 
                key={w.title} 
                className={`group flex flex-col justify-between p-8 rounded-2xl bg-black/60 backdrop-blur-xl border border-white/10 shadow-[0_0_30px_rgba(0,240,255,0.02)] hover:border-${config.color}-400/60 hover:shadow-[0_0_40px_rgba(0,240,255,0.15)] transition-all duration-500`}
              >
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors font-display tracking-tight">
                    {w.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6 font-light">
                    {w.desc}
                  </p>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-white/5">
                  <span className={`${c.text} font-bold text-sm tracking-wide`}>{w.price}</span>
                  <span className="text-xs uppercase tracking-wider text-cyan-400/70 group-hover:text-cyan-300 flex items-center gap-1 transition-colors">
                    Request <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CLIENT STATS BOARD ── */}
      <section className="relative py-24 px-4 md:px-8 z-10 border-t border-white/10 bg-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white tracking-tight">
              Sovereign <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Milestones</span>
            </h2>
            <p className="text-gray-400 mt-4 text-sm md:text-base font-light">
              Demonstrated success parameters across our operational profiles.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {config.stats.map(({ value, label }) => (
              <div 
                key={label} 
                className={`p-6 rounded-2xl border border-white/10 bg-black/60 flex flex-col items-center text-center hover:border-cyan-500/30 transition-all duration-300`}
              >
                <div className="p-3 rounded-xl bg-black/40 border border-white/5 mb-4">
                  <Zap className={`w-6 h-6 ${c.text}`} />
                </div>
                <div className="text-3xl font-black text-white font-display mb-1">{value}</div>
                <div className="text-gray-400 text-xs uppercase tracking-wider">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CALL TO ACTION ── */}
      <section className="relative py-24 px-4 md:px-8 z-10">
        <div className="max-w-3xl mx-auto text-center p-12 rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-cyan-950/20 to-purple-950/10 shadow-[0_0_50px_rgba(0,240,255,0.08)]">
          <h2 className="text-2xl md:text-4xl font-display font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto font-light leading-relaxed">
            Get a free 30-minute consultation. We&apos;ll discuss your specific needs and provide a custom quote within 24 hours.
          </p>
          <Link href="/contact" className={`inline-block px-10 py-4 rounded-full ${c.btn} font-bold transition-all text-lg shadow-lg`}>
            Book Free Consultation →
          </Link>
          <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-gray-500">
            <span className="flex items-center gap-1"><CheckCircle2 className="w-3.5 h-3.5 text-green-400" /> Free consultation</span>
            <span className="flex items-center gap-1"><CheckCircle2 className="w-3.5 h-3.5 text-green-400" /> Custom quote in 24hrs</span>
            <span className="flex items-center gap-1"><CheckCircle2 className="w-3.5 h-3.5 text-green-400" /> No hidden fees</span>
            <span className="flex items-center gap-1"><CheckCircle2 className="w-3.5 h-3.5 text-green-400" /> 30-day support</span>
          </div>
        </div>
      </section>
    </main>
  );
}
