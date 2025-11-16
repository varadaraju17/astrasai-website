import { Metadata } from 'next';

const domain = 'https://www.astrasai.in';

interface PageSEO {
  title: string;
  description: string;
  pathname: string;
}

export function generatePageMetadata({ title, description, pathname }: PageSEO): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: `${domain}${pathname}`,
    },
    openGraph: {
      title,
      description,
      url: `${domain}${pathname}`,
    },
    twitter: {
      title,
      description,
    },
  };
}
