import { Metadata } from 'next';

const domain = 'https://www.astrasai.in';

interface PageSEO {
  title: string;
  description: string;
  pathname: string;
  keywords?: string[];
  imageAlt?: string;
}

export function generatePageMetadata({
  title,
  description,
  pathname,
  keywords = [],
  imageAlt,
}: PageSEO): Metadata {
  const url = `${domain}${pathname}`;
  const ogTitle = title.length > 70 ? title.substring(0, 67) + '...' : title;
  const ogDesc = description.length > 155 ? description.substring(0, 152) + '...' : description;

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: ogTitle,
      description: ogDesc,
      url,
      images: [
        {
          url: `${domain}/og-image.webp`,
          width: 1200,
          height: 630,
          alt: imageAlt ?? `${title} | Astras AI`,
        },
      ],
      locale: 'en_IN',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: ogTitle,
      description: ogDesc,
      site: '@astras_ai',
      images: [`${domain}/og-image.webp`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, 'max-snippet': -1 },
    },
  };
}
