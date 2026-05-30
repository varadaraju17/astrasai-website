"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles, ChevronRight } from "lucide-react";
import { businessServices, individualServices, ServiceData } from "@/data/servicesData";

const serviceSlugs: Record<string, string> = {
  "web-dev": "ai-website-development",
  "app-dev": "mobile-app-development",
  "software-dev": "custom-software",
  "ai-ads": "digital-marketing",
  "ai-agents": "ai-agents",
  "ai-mvp": "startup-mvp",
  "ai-social": "social-media",
  "ai-strategy": "business-automation",
  "ai-seo": "seo-optimization",
  "academic": "academic-projects",
  "profile": "profile-building",
  "career": "career-mentorship"
};

// Premium visual theme dictionary mapped to service IDs
const SERVICE_THEMES: Record<string, {
  accent: string;
  glow: string;
  gradient: string;
  glowColor: string;
}> = {
  "web-dev": {
    accent: "from-sky-400 to-blue-500",
    glow: "rgba(56, 189, 248, 0.15)",
    glowColor: "rgba(56, 189, 248, 0.3)",
    gradient: "from-sky-500/20 via-blue-500/5 to-transparent",
  },
  "app-dev": {
    accent: "from-indigo-400 to-purple-500",
    glow: "rgba(99, 102, 241, 0.15)",
    glowColor: "rgba(99, 102, 241, 0.3)",
    gradient: "from-indigo-500/20 via-purple-500/5 to-transparent",
  },
  "software-dev": {
    accent: "from-violet-400 to-fuchsia-600",
    glow: "rgba(168, 85, 247, 0.15)",
    glowColor: "rgba(168, 85, 247, 0.3)",
    gradient: "from-purple-500/20 via-fuchsia-500/5 to-transparent",
  },
  "ai-ads": {
    accent: "from-rose-400 to-pink-600",
    glow: "rgba(244, 63, 94, 0.15)",
    glowColor: "rgba(244, 63, 94, 0.3)",
    gradient: "from-rose-500/20 via-pink-500/5 to-transparent",
  },
  "ai-agents": {
    accent: "from-emerald-400 to-teal-500",
    glow: "rgba(16, 185, 129, 0.15)",
    glowColor: "rgba(16, 185, 129, 0.3)",
    gradient: "from-emerald-500/20 via-teal-500/5 to-transparent",
  },
  "ai-mvp": {
    accent: "from-amber-400 to-orange-500",
    glow: "rgba(245, 158, 11, 0.15)",
    glowColor: "rgba(245, 158, 11, 0.3)",
    gradient: "from-amber-500/20 via-orange-500/5 to-transparent",
  },
  "ai-social": {
    accent: "from-pink-400 to-rose-500",
    glow: "rgba(236, 72, 153, 0.15)",
    glowColor: "rgba(236, 72, 153, 0.3)",
    gradient: "from-pink-500/20 via-rose-500/5 to-transparent",
  },
  "ai-strategy": {
    accent: "from-fuchsia-400 to-violet-600",
    glow: "rgba(217, 70, 239, 0.15)",
    glowColor: "rgba(217, 70, 239, 0.3)",
    gradient: "from-fuchsia-500/20 via-violet-500/5 to-transparent",
  },
  "academic": {
    accent: "from-purple-400 to-indigo-500",
    glow: "rgba(147, 51, 234, 0.15)",
    glowColor: "rgba(147, 51, 234, 0.3)",
    gradient: "from-purple-500/20 via-indigo-500/5 to-transparent",
  },
  "profile": {
    accent: "from-cyan-400 to-blue-500",
    glow: "rgba(6, 182, 212, 0.15)",
    glowColor: "rgba(6, 182, 212, 0.3)",
    gradient: "from-cyan-500/20 via-blue-500/5 to-transparent",
  },
  "career": {
    accent: "from-emerald-400 to-blue-500",
    glow: "rgba(16, 185, 129, 0.15)",
    glowColor: "rgba(16, 185, 129, 0.3)",
    gradient: "from-emerald-500/20 via-blue-500/5 to-transparent",
  }
};

const ServiceCard = ({ service }: { service: ServiceData }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
  const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

  function onMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const theme = SERVICE_THEMES[service.id] || SERVICE_THEMES["web-dev"];
  const spotlightMask = useMotionTemplate`radial-gradient(300px at ${mouseX}px ${mouseY}px, rgba(255,255,255,0.08), transparent)`;

  return (
    <motion.div
      onMouseMove={onMouseMove}
      whileHover={{ y: -8, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 350, damping: 25 }}
      className="group relative flex flex-col h-full overflow-hidden rounded-3xl border border-white/[0.07] hover:border-white/[0.15] bg-black/40 backdrop-blur-xl transition-colors duration-500"
    >
      {/* Dynamic Background Spot Glow */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-[80px]"
        style={{
          background: `radial-gradient(circle at ${mouseX}px ${mouseY}px, ${theme.glow}, transparent 60%)`,
          WebkitBackdropFilter: "blur(80px)"
        }}
      />

      {/* Interactive border trace overlay */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: spotlightMask }}
      />

      {/* Product Image Header */}
      <div className="relative aspect-video w-full overflow-hidden shrink-0">
        <Image
          src={service.image}
          alt={service.title}
          title={service.title}
          fill
          quality={60}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 filter brightness-[0.8] contrast-[1.05]"
        />
        {/* Soft elegant vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-black/30 to-transparent" />

        {/* Float capsule - benefit */}
        <div className="absolute top-4 left-4 z-20">
          <span className="inline-flex px-3 py-1 text-[10px] font-bold tracking-widest text-white uppercase bg-white/5 border border-white/10 backdrop-blur-md rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
            {service.benefit}
          </span>
        </div>

        {/* Dynamic Glowing Icon Sphere */}
        <div className="absolute bottom-4 left-4 z-20">
          <div
            className={`inline-flex items-center justify-center w-11 h-11 rounded-2xl bg-black/85 backdrop-blur-md text-white border border-white/10 shadow-lg group-hover:border-transparent group-hover:bg-gradient-to-r group-hover:${theme.accent} group-hover:text-black transition-all duration-300`}
            style={{ boxShadow: `0 4px 20px ${theme.glow}` }}
          >
            {React.cloneElement(service.icon as React.ReactElement<{ className?: string }>, {
              className: "w-5 h-5 transition-transform duration-500 group-hover:rotate-[360deg]"
            })}
          </div>
        </div>
      </div>

      {/* Body Information */}
      <div className="relative z-20 p-6 flex flex-col flex-grow text-left">
        <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:${theme.accent} transition-all duration-300 font-display leading-tight tracking-tight">
          {service.title}
        </h3>

        <p className="text-gray-400 text-sm leading-relaxed mt-3 mb-6 flex-grow group-hover:text-gray-300 transition-colors line-clamp-3">
          {service.desc}
        </p>

        {/* Core Capabilities Bullet Checklist */}
        {service.details?.features && (
          <div className="grid grid-cols-2 gap-2 mt-2 mb-6 pb-6 border-b border-white/[0.05]">
            {service.details.features.slice(0, 4).map((feat) => (
              <div key={feat} className="flex items-center gap-2">
                <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${theme.accent} group-hover:shadow-[0_0_10px_${theme.glowColor}] transition-all`} />
                <span className="text-[11px] text-gray-400 font-mono tracking-tight leading-none group-hover:text-gray-200 transition-colors">
                  {feat}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Action button */}
        <div className="mt-auto">
          <Link
            href={`/services/${serviceSlugs[service.id] || "ai-website-development"}`}
            className={`w-full py-2.5 px-4 rounded-xl border border-white/[0.07] bg-white/[0.01] hover:bg-gradient-to-r hover:${theme.accent} hover:text-black hover:border-transparent text-white font-mono text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 group/btn`}
          >
            <span>Initialize System</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1.5 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

const Services = () => {
  const [activeTab, setActiveTab] = useState<"business" | "individual">("business");

  return (
    <section id="services" className="py-28 bg-black relative overflow-hidden">
      {/* Elegant Ambient Deep Backlighting */}
      <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-sky-500/[0.03] rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-1/4 w-[600px] h-[600px] bg-purple-500/[0.02] rounded-full blur-[140px] pointer-events-none" />

      <div className="container-width relative z-10">
        
        {/* Header container */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-sky-500/25 bg-sky-950/20 text-sky-400 text-[11px] font-mono tracking-widest mb-6 shadow-[0_0_20px_rgba(0,240,255,0.1)]"
          >
            <Sparkles className="w-3.5 h-3.5 animate-pulse" />
            CORE_CAPABILITIES
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-display font-extrabold text-white tracking-tight mb-6"
          >
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-400 to-indigo-500">Services</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-indigo-400 to-purple-500 drop-shadow-[0_0_15px_rgba(0,240,255,0.2)] text-3xl md:text-5xl">
              Digital Weaponry Redefined
            </span>
          </motion.h2>

          <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Harness the power of high-converting architectural interfaces, autonomous neural systems, and optimized growth parameters.
          </p>
        </div>

        {/* High-Tech Dynamic Segment Selector */}
        <div className="flex justify-center mb-16">
          <div className="relative flex p-1.5 bg-white/[0.02] border border-white/[0.08] rounded-full backdrop-blur-md">
            <button
              onClick={() => setActiveTab("business")}
              className={`relative px-6 py-2.5 text-xs font-mono font-bold uppercase tracking-widest rounded-full transition-colors duration-300 z-10 ${
                activeTab === "business" ? "text-black" : "text-gray-400 hover:text-white"
              }`}
            >
              {activeTab === "business" && (
                <motion.div
                  layoutId="activeTabSlider"
                  className="absolute inset-0 bg-white rounded-full z-[-1]"
                  transition={{ type: "spring", stiffness: 350, damping: 25 }}
                />
              )}
              Enterprise Solutions
            </button>
            <button
              onClick={() => setActiveTab("individual")}
              className={`relative px-6 py-2.5 text-xs font-mono font-bold uppercase tracking-widest rounded-full transition-colors duration-300 z-10 ${
                activeTab === "individual" ? "text-black" : "text-gray-400 hover:text-white"
              }`}
            >
              {activeTab === "individual" && (
                <motion.div
                  layoutId="activeTabSlider"
                  className="absolute inset-0 bg-white rounded-full z-[-1]"
                  transition={{ type: "spring", stiffness: 350, damping: 25 }}
                />
              )}
              Precision Engines
            </button>
          </div>
        </div>

        {/* Dynamic Grid Layout */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto"
          >
            {activeTab === "business"
              ? businessServices.map((service, index) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="h-full"
                  >
                    <ServiceCard service={service} />
                  </motion.div>
                ))
              : individualServices.map((service, index) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="h-full"
                  >
                    <ServiceCard service={service} />
                  </motion.div>
                ))}
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};

export default Services;