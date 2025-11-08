'use client'

import { Sparkles, Brain, Rocket, Bot } from 'lucide-react'

const services = [
  {
    id: 'brahmastra',
    icon: <Sparkles className="w-8 h-8" />,
    name: 'Brahmastra AI',
    title: 'Power of Creation',
    description: 'For Businesses, Startups, and Founders - We design and deploy intelligent systems that accelerate your digital transformation.',
    color: 'from-vajra-500 to-mystic-500',
    details: [
      'AI-powered Websites & Applications',
      'Startup MVP Development',
      'Conversational AI & WhatsApp Bots',
      'Predictive Analytics & BI Dashboards',
      'AI-driven SEO & Marketing Automation'
    ]
  },
  {
    id: 'sudarshana',
    icon: <Brain className="w-8 h-8" />,
    name: 'Sudarshana Chakra',
    title: 'Power of Precision',
    description: 'For Individuals, Students, and Professionals - Personalized AI-driven growth and mentorship tools for your career and learning.',
    color: 'from-trishul-500 to-chakra-500',
    details: [
      'AI Research & Academic Intelligence',
      'Resume & LinkedIn Optimization',
      'Interview Coaching & Mock AI Evaluations',
      'Skill Pathways & Learning Automation',
      'Personal AI Mentors for Growth'
    ]
  },
  {
    id: 'features',
    icon: <Bot className="w-8 h-8" />,
    name: 'Key Features',
    title: 'Our Capabilities',
    description: 'Comprehensive suite of features designed for maximum impact and efficiency.',
    color: 'from-mystic-500 to-trishul-500',
    details: [
      'Sovereign AI Systems - Privacy-first, secure by design',
      'Lightning UX - 45ms interactions, buttery animations',
      'Autonomous Workflows - Agents that plan, book, and optimize',
      'Composable Stack - Easy integration with CRM, ERP, Cloud',
      'Proof of Impact - Measurable ROI on every engagement',
      'Mythic Design - Timeless aesthetic meets modern UX'
    ]
  }
]

export default function Services() {
  return (
    <section id="services" className="py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-cosmic-grid bg-[length:30px_30px] opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-cosmic-900/95 via-cosmic-900 to-cosmic-900/95"></div>
      
      {/* Sacred Geometry Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 -right-32 w-96 h-96 bg-trishul-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-chakra-300/10 rounded-full blur-3xl animate-float"></div>
      </div>

      <div className="container mx-auto px-6 relative">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-trishul-500/20 to-mystic-300/20 backdrop-blur-sm mb-6">
            <Rocket className="w-10 h-10 text-trishul-500 animate-float" />
          </div>
          <h2 className="text-4xl md:text-5xl font-display bg-gradient-to-r from-trishul-500 via-mystic-300 to-chakra-300 bg-clip-text text-transparent pb-4">
            Divine Powers of Intelligence
          </h2>
          <p className="text-xl text-cosmic-100/80 max-w-3xl mx-auto mt-6">
            Harness the power of legendary Astras transformed into cutting-edge AI solutions for the modern age.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-trishul-500 to-mystic-300 rounded-full mx-auto mt-8"></div>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="group relative"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Card Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-trishul-500/10 via-mystic-300/5 to-chakra-300/10 rounded-2xl transition-opacity duration-500 opacity-0 group-hover:opacity-100"></div>
              
              {/* Main Card */}
              <div className="relative glass-card backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <div className="absolute inset-0 bg-cosmic-900/40 rounded-2xl"></div>
                
                <div className="relative">
                  {/* Service Icon */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} p-0.5`}>
                      <div className="w-full h-full rounded-xl bg-cosmic-900/50 backdrop-blur-sm flex items-center justify-center">
                        {service.icon}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-display text-cosmic-100">
                        {service.name}
                      </h3>
                      <h4 className="text-lg font-display bg-gradient-to-r from-trishul-500 to-mystic-300 bg-clip-text text-transparent">
                        {service.title}
                      </h4>
                    </div>
                  </div>

                  {/* Service Description */}
                  <p className="text-lg text-cosmic-100/80 mb-8">
                    {service.description}
                  </p>

                  {/* Service Details */}
                  <div className="space-y-4">
                    {service.details.map((detail, idx) => (
                      <div key={idx} className="flex items-start gap-3 group/item">
                        <div className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-gradient-to-r from-trishul-500 to-mystic-300 group-hover/item:scale-150 transition-transform duration-300"></div>
                        <p className="text-cosmic-100/70 group-hover/item:text-cosmic-100 transition-colors duration-300">
                          {detail}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}