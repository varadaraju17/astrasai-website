/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: ['lucide-react', 'clsx'],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
          // {
          //   key: 'Content-Security-Policy-Report-Only',
          //   value: `
          //     default-src 'self';
          //     script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com;
          //     style-src 'self' 'unsafe-inline';
          //     img-src 'self' data: https://www.google-analytics.com;
          //     font-src 'self';
          //     connect-src 'self' https://www.google-analytics.com;
          //     frame-src 'self' https://www.googletagmanager.com;
          //     report-uri /api/csp-reports;
          //   `.replace(/\s{2,}/g, ' ').trim(),
          // },
        ],
      },
    ];
  },
};

export default nextConfig;