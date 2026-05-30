"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, Sparkles } from 'lucide-react';

interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: "Rajesh Kumar",
    role: "Founder",
    company: "TechVarta Bangalore",
    content: "Astras AI delivered our custom CRM solution in just 8 weeks. Our sales conversion rate grew by 45% because of their automated follow-up intelligence. Outstanding engineering.",
    rating: 5
  },
  {
    name: "Sneha Rao",
    role: "Marketing Director",
    company: "Veda Organics",
    content: "Their AI-powered SEO and local search strategies got us to Page 1 of Google in Bangalore in 90 days. Our organic inbound inquiries have tripled. Absolutely recommend their digital marketing suite!",
    rating: 5
  },
  {
    name: "Dr. Ananya Hegde",
    role: "MCA Coordinator",
    company: "RV College of Engineering",
    content: "The expert support and technical mentorship provided by Astras AI for our students' final year deep learning projects was exemplary. Highly structured, compliant, and deep domain knowledge.",
    rating: 5
  },
  {
    name: "Vikram Aditya",
    role: "CEO",
    company: "HoloScale",
    content: "Building our B2B SaaS MVP with Astras AI was the best decision. They delivered a highly polished, investor-ready product in 6 weeks. Their team is extremely professional.",
    rating: 5
  }
];

export default function Testimonials() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Astras AI",
    "image": "https://astrasai.in/logo.webp",
    "telephone": "+918197489255",
    "email": "services@astrasai.in",
    "priceRange": "₹₹–₹₹₹",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Bangalore",
      "addressLocality": "Bangalore",
      "addressRegion": "Karnataka",
      "postalCode": "560001",
      "addressCountry": "IN"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "48"
    },
    "review": testimonials.map((t) => ({
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": t.name
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": t.rating.toString()
      },
      "reviewBody": t.content
    }))
  };

  return (
    <section className="py-24 bg-black relative overflow-hidden border-t border-white/5">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container-width relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-950/30 text-cyan-300 text-xs font-mono uppercase tracking-wider mb-6 shadow-[0_0_20px_rgba(0,240,255,0.2)]">
            <Sparkles className="w-3 h-3 animate-pulse" />
            CLIENT_REVIEWS
          </div>
          
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
            What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Clients Say</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            From high-growth Bangalore startups to academic institutions, we build systems that yield massive commercial results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-cyan-500/30 hover:shadow-[0_0_30px_rgba(0,240,255,0.05)] transition-all duration-300 relative flex flex-col justify-between"
            >
              <div className="absolute top-6 right-8 text-white/5 pointer-events-none">
                <Quote className="w-12 h-12" />
              </div>

              <div>
                <div className="flex gap-1 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-cyan-400 text-cyan-400" />
                  ))}
                </div>
                <p className="text-gray-300 leading-relaxed mb-6 font-light italic">
                  &quot;{t.content}&quot;
                </p>
              </div>

              <div className="border-t border-white/5 pt-4 flex items-center justify-between">
                <div>
                  <h3 className="text-white font-bold text-base font-display">{t.name}</h3>
                  <p className="text-xs text-gray-500">{t.role}, <span className="text-cyan-500">{t.company}</span></p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
