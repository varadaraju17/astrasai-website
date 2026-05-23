import type { Metadata, Viewport } from 'next';
import Script from 'next/script';

import { Syne, Space_Grotesk } from 'next/font/google';
import '../styles/globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import Background3D from '@/components/Background3D';


const syne = Syne({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-syne',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-grotesk',
});

const domain = 'https://astrasai.in';
const companyName = 'Astras AI';

// Concise, keyword-rich description — under 160 chars for full Google preview
const description =
  'Astras AI — Bangalore\'s #1 AI agency. We build AI websites, mobile apps & autonomous AI agents for startups & enterprises. Get results in weeks, not months.';

const keywords = [
  // Core brand / product
  'Astras AI', 'Brahmastra AI', 'Sudarshana Chakra',
  // Website building
  'website development company Bangalore', 'AI website builder India',
  'best website development company in Bangalore',
  'custom website development Bangalore', 'Next.js development company India',
  'website design and development services', 'web development agency India',
  // App development
  'mobile app development company Bangalore', 'AI mobile app development India',
  'Flutter app development Bangalore', 'React Native development company',
  'cross-platform app development India', 'iOS Android app development Bangalore',
  // AI Agents
  'AI agent development company India', 'AI automation agency Bangalore',
  'WhatsApp AI chatbot Bangalore', 'custom AI agent development',
  'intelligent automation solutions India', 'AI-powered chatbot development',
  'LLM agent development company', 'autonomous AI agents India',
  // Digital Marketing
  'digital marketing agency Bangalore', 'AI digital marketing India',
  'SEO services Bangalore', 'performance marketing agency India',
  'social media marketing Bangalore', 'Google Ads management India',
  'content marketing agency Bangalore',
  // Startup / MVP
  'startup MVP development Bangalore', 'AI startup development India',
  'rapid MVP development company', 'startup tech partner Bangalore',
  // General AI
  'artificial intelligence company Bangalore', 'AI software development India',
  'machine learning solutions Bangalore', 'generative AI development company',
];

export const metadata: Metadata = {
  metadataBase: new URL(domain),
  title: {
    default: 'Astras AI | #1 AI Agency for Websites, Apps & AI Agents in Bangalore',
    template: `%s | ${companyName}`,
  },
  description,
  keywords,
  creator: companyName,
  publisher: companyName,
  authors: [{ name: companyName, url: domain }],
  category: 'technology',
  classification: 'AI Agency, Software Development, Digital Marketing',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: '/',
    languages: {
      'en-IN': '/',
      'en-US': '/',
    },
  },
  openGraph: {
    title: 'Astras AI | #1 AI Agency — Websites, Apps, AI Agents & Digital Marketing',
    description,
    url: domain,
    siteName: companyName,
    images: [
      {
        url: `${domain}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'Astras AI — Building Intelligent Websites, Apps & AI Agents in Bangalore',
        type: 'image/jpeg',
      },
    ],
    locale: 'en_IN',
    type: 'website',
    countryName: 'India',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@astras_ai',
    creator: '@astras_ai',
    title: 'Astras AI | Bangalore\'s #1 AI Agency — Websites, Apps & AI Agents',
    description,
    images: [
      {
        url: `${domain}/og-image.jpg`,
        alt: 'Astras AI — AI Websites, Apps & Automation in Bangalore',
      },
    ],
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/logo.webp', sizes: '192x192', type: 'image/webp' },
    ],
    shortcut: '/favicon.ico',
    apple: '/logo.webp',
  },
  manifest: '/manifest.json',
  verification: {
    google: 'xHl_uSbdQQsEqiFc23phtEJ_NMMieSurUWoVgrdtnTc',
  },
  other: {
    // GEO tags for local discovery
    'geo.region': 'IN-KA',
    'geo.placename': 'Bangalore',
    'geo.position': '12.9716;77.5946',
    'ICBM': '12.9716, 77.5946',
    // Generative Engine Optimization (GEO) context hints
    'og:locale:alternate': 'en_US',
  },
};

export const viewport: Viewport = {
  themeColor: '#02040A',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const GTM_ID = 'GTM-KCTB8XZG';
  const GA4_ID = 'G-FS33ELQ6LY';

  return (
    <html lang="en-IN" className={`${syne.variable} ${spaceGrotesk.variable} scroll-smooth`}>
      <head>
        {/* Preconnects for performance */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        
        {/* Explicit Favicons for SEO Scrapers */}
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/webp" sizes="192x192" href="/logo.webp" />
        <link rel="apple-touch-icon" href="/logo.webp" />
      </head>
      <body className={`${syne.variable} ${spaceGrotesk.variable} font-body bg-void text-white antialiased selection:bg-hologram-cyan selection:text-void`}>
        <Background3D />
        
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>

        <Navbar />
        <main id="main-content" className="min-h-screen">
          {children}
        </main>
        <Footer />
        <JsonLd />
        <SpeedInsights />
        <Analytics />


        {/* Google Tag Manager */}
        <Script id="gtm-script" strategy="lazyOnload">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${GTM_ID}');
          `}
        </Script>

        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`}
          strategy="lazyOnload"
        />
        <Script id="ga4-init" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA4_ID}', { page_location: window.location.href });
          `}
        </Script>
      </body>
    </html>
  );
}
