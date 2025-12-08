import type { Metadata } from 'next';
import Script from 'next/script';
import { Syne, Space_Grotesk } from 'next/font/google';
import '../styles/globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';

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

const domain = 'https://www.astrasai.in';
const companyName = 'Astras AI';
const description = 'Astras AI is the best software startup creator in Bangalore, specializing in AI agents, website building, and digital growth engines (Brahmastra & Sudarshana).';
const keywords = ['AI Agent', 'Website Builder', 'Bangalore', 'Software Startup Creator', 'Brahmastra AI', 'Sudarshana Chakra', 'Ads Marketing', 'Social Media AI'];

export const metadata: Metadata = {
  metadataBase: new URL(domain),
  title: {
    default: `Astras AI | Best AI Agent & Website Builder in Bangalore`,
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
    title: 'Astras AI | Best AI Agent & Website Builder in Bangalore',
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
    title: 'Astras AI | Intelligent Enterprise Systems',
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
    <html lang="en" className={`${syne.variable} ${spaceGrotesk.variable} scroll-smooth`}>
      <head>
        <meta name="theme-color" content="#02040A" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
      </head>
      <body className={`${syne.variable} ${spaceGrotesk.variable} font-body bg-void text-white antialiased selection:bg-hologram-cyan selection:text-void`}>
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
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <JsonLd />

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