import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.astrasai.in';

  // Assuming these are your main pages. Add any other pages here.
  const pages = ['/', '/about', '/services', '/contact', '/privacy-policy', '/terms-of-service'];

  const sitemap = pages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: page === '/' ? 1 : 0.8,
  }));

  return sitemap;
}
