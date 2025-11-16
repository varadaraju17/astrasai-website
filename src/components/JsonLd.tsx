import Script from 'next/script';

export default function JsonLd() {
  const domain = 'https://www.astrasai.in';
  const companyName = 'Astras AI';
  const description = 'Astras AI in Bangalore builds intelligent AI systems, automation, AI agents, and AI-powered websites. We help startups and enterprises build the future with the best AI and website services.';
  const contact = '+91 8197489255';
  const email = 'services@astrasai.in';
  const social = {
    instagram: 'https://www.instagram.com/astras_ai/',
    linkedin: 'https://www.linkedin.com/company/astras-ai-tech/',
    whatsapp: 'https://wa.me/918197489255',
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
        '@id': `${domain}/#localbusiness`,
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
      {
        "@type": "VideoObject",
        "name": "Astras AI: Building Intelligent Systems",
        "description": "Watch how Astras AI creates custom AI solutions, automation, and websites for businesses in Bangalore.",
        "thumbnailUrl": `${domain}/og-image.png`,
        "uploadDate": "2025-01-01T08:00:00+08:00",
        "duration": "PT1M30S", // Placeholder duration
        "contentUrl": `${domain}/video.mp4`, // Placeholder video URL
        "embedUrl": "https://www.youtube.com/embed/your-video-id", // Placeholder embed URL
        "interactionStatistic": {
          "@type": "InteractionCounter",
          "interactionType": { "@type": "WatchAction" },
          "userInteractionCount": 0 // Placeholder
        }
      }
    ],
  };

  return (
    <Script
      id="json-ld"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
