import type { Metadata } from 'next'
import '../styles/globals.css'

export const metadata: Metadata = {
  title: 'Astras AI: Next-Gen Intelligence, Next-Level You',
  description: 'We build AI-powered ecosystems that help startups scale faster, businesses grow smarter, and people achieve more.',
  icons: [{ rel: 'icon', url: '/favicon.ico' }],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="relative">{children}</body>
    </html>
  )
}
