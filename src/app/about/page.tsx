import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn more about Astras AI, our mission, vision, and the team behind our intelligent AI systems.',
  alternates: {
    canonical: 'https://www.astrasai.in/about',
  },
  openGraph: {
    title: 'About Astras AI',
    description: 'Learn more about Astras AI and our mission to build intelligent AI systems.',
    url: 'https://www.astrasai.in/about',
    images: [
      {
        url: 'https://www.astrasai.in/og-image.png', // Use your specific OG image for the about page if available
        width: 1200,
        height: 630,
        alt: 'About Astras AI Open Graph Image',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Astras AI',
    description: 'Learn more about Astras AI and our mission to build intelligent AI systems.',
    images: ['https://www.astrasai.in/og-image.png'], // Use your specific Twitter image for the about page if available
  },
};

export default function AboutPage() {
  return (
    <main>
      <h1>About Astras AI</h1>
      <p>This is the about page content.</p>
    </main>
  );
}
