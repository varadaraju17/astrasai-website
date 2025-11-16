'use client'

import { Sparkles, Compass, Feather, Shield, Sun } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      {/* Mystical Background Elements */}
      <div className="absolute inset-0 bg-cosmic-grid bg-[length:30px_30px] opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-cosmic-900 via-cosmic-900/95 to-cosmic-900"></div>
      
      {/* Animated Gradient Orbs */}
      <div className="absolute top-1/4 -left-64 w-96 h-96 bg-trishul-500/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 -right-64 w-96 h-96 bg-chakra-300/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '-2s' }}></div>

      <div className="container mx-auto px-6 relative">
        {/* Section Title with Sacred Symbol */}
        <div className="flex flex-col items-center text-center mb-20">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-trishul-500/20 to-mystic-300/20 backdrop-blur-sm mb-6">
            <Sparkles className="w-10 h-10 text-trishul-500 animate-cosmic-pulse" />
          </div>
          <h2 className="text-4xl md:text-5xl font-display bg-gradient-to-r from-trishul-500 via-mystic-300 to-chakra-300 bg-clip-text text-transparent pb-4">
            Bangalore's Premier AI & Web-Builders
          </h2>
          <p className="mt-4 text-lg text-cosmic-100/80 max-w-2xl mx-auto">
            Fusing ancient wisdom with next-generation technology, we are your partners in innovation.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-trishul-500 to-mystic-300 rounded-full mt-6"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Who We Are */}
          <div className="relative">
            {/* Card Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-trishul-500/10 to-mystic-300/5 rounded-2xl"></div>
            <div className="relative glass-card backdrop-blur-sm border border-white/10 rounded-2xl p-8 h-full">
              <div className="absolute inset-0 bg-cosmic-900/40 rounded-2xl"></div>
              <div className="relative">
                <h3 className="text-3xl md:text-4xl font-display bg-gradient-to-r from-trishul-500 to-mystic-300 bg-clip-text text-transparent mb-6">
                  Who We Are
                </h3>
                <div className="space-y-6 text-lg text-cosmic-100/80">
                  <p>
                    Astras AI is a top-tier innovation studio in Bangalore, specializing in AI agent and website building. We harmoniously blend artificial intelligence and automation to forge transformative solutions for software startups and enterprises.
                  </p>
                  <p>
                    Like the divine Astras of mythology, we harness diverse forms of intelligence to create technology that's not just powerful, but conscious—providing the best AI agent and website services in Bangalore.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Our Philosophy */}
          <div className="relative">
            {/* Card Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-mystic-300/10 to-chakra-300/5 rounded-2xl"></div>
            <div className="relative glass-card backdrop-blur-sm border border-white/10 rounded-2xl p-8 h-full">
              <div className="absolute inset-0 bg-cosmic-900/40 rounded-2xl"></div>
              <div className="relative">
                <h3 className="text-3xl md:text-4xl font-display bg-gradient-to-r from-mystic-300 to-chakra-300 bg-clip-text text-transparent mb-6">
                  Our Philosophy
                </h3>
                <div className="space-y-8">
                  <p className="text-lg text-cosmic-100/80">
                    As a leading software startup creator, we craft AI systems with the same reverence for power and responsibility as the ancient sages.
                  </p>
                  <ul className="space-y-6">
                    {[
                      {
                        icon: Feather,
                        title: "Divine Wisdom",
                        text: "Guided by ancient wisdom, empowered by modern intelligence"
                      },
                      {
                        icon: Shield,
                        title: "Sacred Ethics",
                        text: "Committed to ethical AI development and deployment"
                      },
                      {
                        icon: Sun,
                        title: "Eternal Growth",
                        text: "Focused on meaningful impact and sustainable evolution"
                      }
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-4 group">
                        <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-trishul-500/20 to-mystic-300/20 backdrop-blur-sm flex items-center justify-center">
                          <item.icon className="w-6 h-6 text-trishul-500 group-hover:scale-110 transition-transform duration-300" />
                        </div>
                        <div>
                          <h4 className="text-lg font-display text-cosmic-100 mb-1">{item.title}</h4>
                          <p className="text-cosmic-100/70">{item.text}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}