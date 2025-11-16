import type { Metadata } from 'next';
import Script from 'next/script';
import { Inter } from 'next/font/google';
import '../styles/globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

const domain = 'https://www.astrasai.in';
const companyName = 'Astras AI';
const description = 'Astras AI in Bangalore builds intelligent AI systems, automation, AI agents, and AI-powered websites. We help startups and enterprises build the future with the best AI and website services.';
const keywords = [
  'best website builder in bangalore',
  'best ai agents builder in banglore',
  'best website services in banglore',
  'best ai agent service in bangalore',
  'best academic project builders in banglore',
  'best software startup creator',
  'best softaware startup building helper',
  'AI systems Bangalore',
  'automation workflows',
  'AI agents Bangalore',
  'predictive analytics',
  'AI-powered websites Bangalore',
  'MVP development',
  'startup solutions',
  'enterprise AI',
  'website builder Bangalore',
  'AI development Bangalore',
];

export const metadata: Metadata = {
  metadataBase: new URL(domain),
  title: {
    default: `Astras AI | AI-Powered Websites & Automation in Bangalore`,
    template: `%s | ${companyName}`,
  },
  description: description,
  keywords: keywords,
  creator: companyName,
  publisher: companyName,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Astras AI | AI-Powered Websites & Automation in Bangalore',
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
    title: 'Astras AI | AI-Powered Websites & Automation in Bangalore',
    description: description,
    images: [`${domain}/og-image.png`],
    creator: '@astras_ai',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/manifest.json',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const GTM_ID = 'GTM-KCTB8XZG';
  const GA4_ID = 'G-FS33ELQ6LY';

  return (
    <html lang="en" className={`${inter.className} scroll-smooth`}>
      <head>
        <meta name="theme-color" content="#000000" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
      </head>
      <body className="bg-cosmic-900 text-white overflow-x-hidden">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        <Navbar />
        <main>{children}</main>
        <Footer />

        {/* Google Tag Manager */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${GTM_ID}');
          `}
        </Script>
        {/* End Google Tag Manager */}

        {/* 
          GA4 script is recommended to be loaded through GTM. 
          Including it here separately for redundancy as requested.
        */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA4_ID}');
          `}
        </Script>
      </body>
    </html>
  );
}