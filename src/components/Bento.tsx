'use client'

import { ReactNode } from 'react'

export function BentoCard({
  className = '',
  title,
  desc,
  children,
}: {
  className?: string
  title: string
  desc: string
  children?: ReactNode
}) {
  return (
  <div style={{ cursor: 'pointer' }} className={`transition-transform transform hover:-translate-y-1 hover:scale-105 rounded-2xl p-6 glass-card backdrop-blur-lg border border-mystic-300/20 shadow-lg transition-all duration-300 hover:shadow-2xl ${className}`}>
      <h3 className="text-xl font-display font-bold mb-1 bg-gradient-to-r from-trishul-500 to-mystic-300 bg-clip-text text-transparent">{title}</h3>
      <p className="text-sm font-sans text-cosmic-100/70 mb-4">{desc}</p>
      {children}
    </div>
  )
}

export default function BentoGrid({ children }: { children?: ReactNode }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
      {children ?? (
        <>
          <BentoCard
            title="AI-Powered Websites"
            desc="Craft futuristic, responsive web apps integrated with real AI systems — built for speed and scalability."
          >
            <div className="text-trishul-300 font-sans font-semibold">⚡ Powered by Next.js + Gemini AI</div>
          </BentoCard>

          <BentoCard
            title="Intelligent Marketing"
            desc="AI-driven SEO, ads, and content creation that adapts to your brand tone and audience trends."
          >
            <div className="font-sans text-cosmic-100/80">🚀 Smart Campaign Automation</div>
          </BentoCard>

          <BentoCard
            title="AI Agents & Analytics"
            desc="Deploy AI agents for WhatsApp, CRM, or internal workflows — boosting insights and automation."
          >
            <div className="text-chakra-300 font-sans font-semibold">🤖 Astra Intelligence Suite</div>
          </BentoCard>
        </>
      )}
    </div>
  )
}
