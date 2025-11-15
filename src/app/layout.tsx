import type { Metadata } from 'next';
import Script from 'next/script';
import '../styles/globals.css';

const domain = 'https://www.astrasai.in';
const companyName = 'Astras AI';
const description = 'Astras AI builds intelligent AI systems, automation workflows, agents, predictive analytics, AI-powered websites, and MVPs for startups and enterprises.';
const contact = '+91 8197489255';
const email = 'services@astrasai.in';
const social = {
  instagram: 'https://instagram.com/astrasai',
  linkedin: 'https://www.linkedin.com/company/astras-ai',
  whatsapp: 'https://wa.me/918197489255',
};

export const metadata: Metadata = {
  metadataBase: new URL(domain),
  title: {
    default: `${companyName}: Intelligent AI Systems & Automation`,
    template: `%s | ${companyName}`,
  },
  description: description,
  keywords: [
    'AI systems',
    'automation workflows',
    'AI agents',
    'predictive analytics',
    'AI-powered websites',
    'MVP development',
    'startup solutions',
    'enterprise AI',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: `${companyName}: Intelligent AI Systems & Automation`,
    description: description,
    url: domain,
    siteName: companyName,
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: `${companyName} Open Graph Image`,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${companyName}: Intelligent AI Systems & Automation`,
    description: description,
    images: ['/og-image.png'],
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  themeColor: '#000000',
  manifest: '/manifest.json',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${domain}/#organization`,
      name: companyName,
      url: domain,
      logo: `${domain}/logo.png`,
      sameAs: [social.instagram, social.linkedin],
      contactPoint: [
        {
          '@type': 'ContactPoint',
          telephone: contact,
          contactType: 'customer service',
          email: email,
        },
      ],
    },
    {
      '@type': 'WebSite',
      '@id': `${domain}/#website`,
      url: domain,
      name: companyName,
      description: description,
      publisher: {
        '@id': `${domain}/#organization`,
      },
      inLanguage: 'en-US',
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: domain,
        },
      ],
    },
    {
      '@type': 'LocalBusiness',
      name: companyName,
      image: `${domain}/logo.png`,
      '@id': '',
      url: domain,
      telephone: contact,
      priceRange: '$$',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Bengaluru',
        addressLocality: 'Bengaluru',
        postalCode: '560001',
        addressCountry: 'IN',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 12.9716,
        longitude: 77.5946,
      },
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '00:00',
        closes: '23:59',
      },
      sameAs: [social.instagram, social.linkedin, social.whatsapp],
    },
    // Placeholder for VideoObject
    // {
    //   "@type": "VideoObject",
    //   "name": "Video Title",
    //   "description": "Video description.",
    //   "thumbnailUrl": "https://www.astrasai.in/video-thumbnail.jpg",
    //   "uploadDate": "2025-11-15T08:00:00+08:00",
    //   "duration": "PT1M54S",
    //   "contentUrl": "https://www.astrasai.in/video.mp4",
    //   "embedUrl": "https://www.youtube.com/embed/your-video-id",
    //   "interactionStatistic": {
    //     "@type": "InteractionCounter",
    //     "interactionType": { "@type": "WatchAction" },
    //     "userInteractionCount": 12345
    //   }
    // }
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-KCTB8XZG');
          `,
          }}
        />
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-FS33ELQ6LY"
          strategy="afterInteractive"
        />
        <Script
          id="ga4-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-FS33ELQ6LY');
          `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="relative">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KCTB8XZG"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        {children}
      </body>
    </html>
  );
}
