import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://astrasai.in';
  const now = new Date();

  const servicePages = [
    'ai-website-development',
    'mobile-app-development',
    'ai-agents',
    'digital-marketing',
    'business-automation',
    'startup-mvp',
    'seo-optimization',
    'social-media',
    'custom-software',
    'academic-projects',
    'profile-building',
    'career-mentorship',
  ];

  const blogPosts = [
    'ai-website-cost-india',
    'what-is-an-ai-agent',
    'best-ai-agencies-bangalore',
    'nextjs-vs-wordpress-ai-websites',
    'startup-mvp-with-ai-30-days',
    'flutter-vs-react-native-ai-apps',
  ];

  return [
    // Core pages — highest priority
    { url: baseUrl, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${baseUrl}/services`, lastModified: now, changeFrequency: 'weekly', priority: 0.95 },
    { url: `${baseUrl}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/features`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/pricing`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/faq`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/case-studies`, lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/blog`, lastModified: now, changeFrequency: 'weekly', priority: 0.85 },

    // Individual service pages — high priority for keyword targeting
    ...servicePages.map((slug) => ({
      url: `${baseUrl}/services/${slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    })),

    // Blog posts
    ...blogPosts.map((slug) => ({
      url: `${baseUrl}/blog/${slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.75,
    })),

    // Legal pages
    { url: `${baseUrl}/privacy-policy`, lastModified: now, changeFrequency: 'yearly', priority: 0.4 },
    { url: `${baseUrl}/terms-of-service`, lastModified: now, changeFrequency: 'yearly', priority: 0.4 },
  ];
}
