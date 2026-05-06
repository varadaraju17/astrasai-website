import Script from 'next/script';

export default function JsonLd() {
  const domain = 'https://www.astrasai.in';
  const companyName = 'Astras AI';
  const description =
    'Astras AI is Bangalore\'s leading AI agency specializing in AI-powered website development, mobile app development, custom AI agents, and data-driven digital marketing. We help startups and enterprises grow with cutting-edge technology and intelligent automation.';
  const contact = '+91 8197489255';
  const email = 'services@astrasai.in';
  const social = {
    instagram: 'https://www.instagram.com/astras_ai/',
    linkedin: 'https://www.linkedin.com/company/astras-ai-tech/',
    twitter: 'https://x.com/astras_ai',
    whatsapp: 'https://wa.me/918197489255',
  };

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      // ─── Organization ───────────────────────────────────────────────────────
      {
        '@type': 'Organization',
        '@id': `${domain}/#organization`,
        name: companyName,
        alternateName: ['Astras AI Tech', 'Astras AI Bangalore'],
        url: domain,
        logo: {
          '@type': 'ImageObject',
          url: `${domain}/logo.png`,
          width: 400,
          height: 100,
        },
        description,
        foundingDate: '2024',
        numberOfEmployees: { '@type': 'QuantitativeValue', minValue: 5, maxValue: 50 },
        areaServed: [
          { '@type': 'Country', name: 'India' },
          { '@type': 'Country', name: 'United States' },
          { '@type': 'Country', name: 'United Kingdom' },
          { '@type': 'Country', name: 'Australia' },
          { '@type': 'AdministrativeArea', name: 'Bangalore, Karnataka' },
        ],
        knowsAbout: [
          'Artificial Intelligence',
          'Machine Learning',
          'Website Development',
          'Mobile App Development',
          'AI Agents',
          'Digital Marketing',
          'SEO',
          'Automation',
          'Chatbot Development',
          'Startup MVP Development',
        ],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'AI Technology Services',
          itemListElement: [
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AI-Powered Website Development' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Mobile App Development' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Custom AI Agent Development' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AI-Enhanced Digital Marketing' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Startup MVP Development' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Business Automation Solutions' } },
          ],
        },
        sameAs: [social.instagram, social.linkedin, social.twitter],
        contactPoint: [
          {
            '@type': 'ContactPoint',
            telephone: contact,
            contactType: 'customer service',
            email: email,
            availableLanguage: ['English', 'Hindi', 'Kannada'],
            hoursAvailable: {
              '@type': 'OpeningHoursSpecification',
              dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
              opens: '09:00',
              closes: '21:00',
            },
          },
          {
            '@type': 'ContactPoint',
            telephone: contact,
            contactType: 'sales',
            email: email,
          },
        ],
      },

      // ─── LocalBusiness ──────────────────────────────────────────────────────
      {
        '@type': ['LocalBusiness', 'ProfessionalService', 'SoftwareApplication'],
        '@id': `${domain}/#localbusiness`,
        name: companyName,
        image: [`${domain}/og-image.png`, `${domain}/logo.png`],
        url: domain,
        telephone: contact,
        email: email,
        priceRange: '₹₹–₹₹₹',
        description,
        currenciesAccepted: 'INR, USD',
        paymentAccepted: 'Cash, Credit Card, Bank Transfer, UPI',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Bangalore',
          addressLocality: 'Bangalore',
          addressRegion: 'Karnataka',
          postalCode: '560001',
          addressCountry: 'IN',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 12.9716,
          longitude: 77.5946,
        },
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            opens: '09:00',
            closes: '21:00',
          },
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Saturday', 'Sunday'],
            opens: '10:00',
            closes: '18:00',
          },
        ],
        sameAs: [social.instagram, social.linkedin, social.twitter, social.whatsapp],
        hasMap: `https://www.google.com/maps/search/Astras+AI+Bangalore`,
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.9',
          reviewCount: '47',
          bestRating: '5',
          worstRating: '1',
        },
      },

      // ─── WebSite ────────────────────────────────────────────────────────────
      {
        '@type': 'WebSite',
        '@id': `${domain}/#website`,
        url: domain,
        name: `${companyName} — AI Agency Bangalore`,
        description,
        publisher: { '@id': `${domain}/#organization` },
        inLanguage: 'en-IN',
        potentialAction: {
          '@type': 'SearchAction',
          target: { '@type': 'EntryPoint', urlTemplate: `${domain}/?s={search_term_string}` },
          'query-input': 'required name=search_term_string',
        },
        copyrightYear: 2025,
      },

      // ─── WebPage (Home) ─────────────────────────────────────────────────────
      {
        '@type': 'WebPage',
        '@id': `${domain}/#webpage`,
        url: domain,
        name: 'Astras AI | #1 AI Agency — Websites, Apps & AI Agents in Bangalore',
        isPartOf: { '@id': `${domain}/#website` },
        about: { '@id': `${domain}/#organization` },
        description,
        breadcrumb: { '@id': `${domain}/#breadcrumb` },
        inLanguage: 'en-IN',
        speakable: {
          '@type': 'SpeakableSpecification',
          cssSelector: ['h1', 'h2', '.speakable'],
        },
      },

      // ─── BreadcrumbList ─────────────────────────────────────────────────────
      {
        '@type': 'BreadcrumbList',
        '@id': `${domain}/#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: domain },
          { '@type': 'ListItem', position: 2, name: 'Services', item: `${domain}/services` },
          { '@type': 'ListItem', position: 3, name: 'About', item: `${domain}/about` },
          { '@type': 'ListItem', position: 4, name: 'Contact', item: `${domain}/contact` },
        ],
      },

      // ─── FAQPage (GEO/AI-Overviews trigger) ────────────────────────────────
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What is the best AI agency in Bangalore?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Astras AI is Bangalore\'s leading AI agency, specializing in AI-powered website development, mobile app development, custom AI agents, and data-driven digital marketing. We have helped 50+ startups and enterprises grow with intelligent technology.',
            },
          },
          {
            '@type': 'Question',
            name: 'How much does it cost to build a website in Bangalore?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'The cost to build a website in Bangalore ranges from ₹15,000 for a basic portfolio site to ₹2,00,000+ for an AI-powered enterprise portal. Astras AI offers competitive pricing with no compromise on quality.',
            },
          },
          {
            '@type': 'Question',
            name: 'What is an AI agent and how can it help my business?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'An AI agent is an intelligent software program that autonomously performs tasks like customer support, lead qualification, appointment scheduling, and data processing. Astras AI builds custom AI agents that work 24/7, reducing operational costs by up to 60% and increasing productivity.',
            },
          },
          {
            '@type': 'Question',
            name: 'Which is the best mobile app development company in Bangalore?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Astras AI is among the top mobile app development companies in Bangalore, building AI-powered Flutter and React Native apps for iOS and Android. We specialize in cross-platform apps that deliver native performance with faster delivery timelines.',
            },
          },
          {
            '@type': 'Question',
            name: 'Can Astras AI help with digital marketing and SEO?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes, Astras AI provides full-service AI-enhanced digital marketing including SEO, Google Ads (SEM), social media marketing, content marketing, and email marketing. Our AI tools analyze data to maximize ROI and organic rankings.',
            },
          },
          {
            '@type': 'Question',
            name: 'How long does it take to build an AI-powered website?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Astras AI typically delivers AI-powered websites in 2–6 weeks depending on complexity. A standard business website takes 2–3 weeks, while a full-featured web application with AI features takes 4–8 weeks.',
            },
          },
          {
            '@type': 'Question',
            name: 'What is the difference between Brahmastra AI and Sudarshana Chakra?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Brahmastra AI is Astras AI\'s suite of business-focused services including AI websites, apps, software development, AI agents, digital marketing, and MVP development. Sudarshana Chakra is the precision toolkit for individuals — offering personal branding, content creation, resume building, and freelancing tools powered by AI.',
            },
          },
        ],
      },

      // ─── Service Schema ─────────────────────────────────────────────────────
      {
        '@type': 'Service',
        name: 'AI-Powered Website Development',
        description: 'We build intelligent, high-performance websites with AI chatbots, personalization engines, and SEO automation. Trusted by startups and enterprises across India.',
        provider: { '@id': `${domain}/#organization` },
        serviceType: 'Web Development',
        areaServed: { '@type': 'Country', name: 'India' },
        url: `${domain}/services`,
        offers: {
          '@type': 'Offer',
          availability: 'https://schema.org/InStock',
          priceCurrency: 'INR',
          priceSpecification: {
            '@type': 'PriceSpecification',
            minPrice: 15000,
            priceCurrency: 'INR',
          },
        },
      },
      {
        '@type': 'Service',
        name: 'Custom AI Agent Development',
        description: 'Deploy intelligent AI agents that automate customer support, lead qualification, and business workflows 24/7. Built on the latest LLMs and NLP technology.',
        provider: { '@id': `${domain}/#organization` },
        serviceType: 'AI Development',
        areaServed: { '@type': 'Country', name: 'India' },
        url: `${domain}/services`,
      },
      {
        '@type': 'Service',
        name: 'Mobile App Development Bangalore',
        description: 'AI-integrated mobile apps for iOS and Android built with Flutter and React Native. Delivered in 4–8 weeks with full support.',
        provider: { '@id': `${domain}/#organization` },
        serviceType: 'Mobile App Development',
        areaServed: { '@type': 'Country', name: 'India' },
        url: `${domain}/services`,
      },
      {
        '@type': 'Service',
        name: 'AI-Enhanced Digital Marketing',
        description: 'Data-driven SEO, Google Ads, social media marketing, and content marketing powered by AI. We maximize your ROI and organic reach.',
        provider: { '@id': `${domain}/#organization` },
        serviceType: 'Digital Marketing',
        areaServed: { '@type': 'Country', name: 'India' },
        url: `${domain}/services`,
      },

      // ─── SoftwareApplication ────────────────────────────────────────────────
      {
        '@type': 'SoftwareApplication',
        name: 'Brahmastra AI Platform',
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web, iOS, Android',
        description: 'Brahmastra AI is an all-in-one business growth engine by Astras AI, providing AI websites, apps, automation, and marketing in one integrated platform.',
        offers: {
          '@type': 'Offer',
          availability: 'https://schema.org/InStock',
          priceCurrency: 'INR',
        },
        provider: { '@id': `${domain}/#organization` },
      },
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
