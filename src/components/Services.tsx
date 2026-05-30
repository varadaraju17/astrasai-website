"use client";

import React from "react";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
    ArrowRight, Sparkles
} from "lucide-react";
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

// --- Service Card Component ---
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

    const maskImage = useMotionTemplate`radial-gradient(240px at ${mouseX}px ${mouseY}px, white, transparent)`;
    const style = { maskImage, WebkitMaskImage: maskImage };

    return (
        <div
            onMouseMove={onMouseMove}
            className="overflow-hidden relative duration-700 border rounded-xl hover:bg-white/5 group md:gap-8 hover:border-cyan-500/50 border-cyan-500/20 bg-black/60 backdrop-blur-sm flex flex-col h-full shadow-[0_0_30px_rgba(0,240,255,0.1)]"
        >
            <div className="pointer-events-none">
                <div className="absolute inset-0 z-0 transition duration-1000 [mask-image:linear-gradient(black,transparent)]" />
                <motion.div
                    className="absolute inset-0 z-10 bg-gradient-to-br opacity-100 via-cyan-500/10 transition duration-500 group-hover:opacity-100"
                    style={style}
                />
                <motion.div
                    className="absolute inset-0 z-10 opacity-0 mix-blend-overlay transition duration-500 group-hover:opacity-100"
                    style={style}
                />
            </div>

            {/* Service Image */}
            <div className="relative aspect-video w-full overflow-hidden border-b border-white/10 shrink-0" style={{ aspectRatio: '16/9' }}>
                <Image
                    src={service.image}
                    alt={service.title}
                    title={service.title}
                    fill
                    quality={60}
                    sizes="(max-width: 768px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

                <div className="absolute bottom-2 left-2 md:bottom-4 md:left-4 z-20">
                    <div className="inline-flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-lg bg-black/60 backdrop-blur-md text-cyan-400 border border-cyan-500/30 shadow-[0_0_10px_rgba(0,240,255,0.2)]">
                        {React.cloneElement(service.icon as React.ReactElement<{ className?: string }>, { className: "w-4 h-4 md:w-6 md:h-6" })}
                    </div>
                </div>
            </div>

            <div className="relative z-20 p-3 md:p-6 flex flex-col flex-grow">
                <div className="mb-2 md:mb-4">
                    <span className="inline-block px-2 py-0.5 md:px-3 md:py-1 text-[10px] md:text-xs font-bold tracking-wider text-cyan-400 uppercase bg-cyan-950/30 border border-cyan-500/30 rounded-full mb-1 md:mb-2 shadow-[0_0_10px_rgba(0,240,255,0.1)]">
                        {service.benefit}
                    </span>
                    <h3 className="text-sm md:text-xl font-bold text-white group-hover:text-cyan-400 transition-colors font-display leading-tight">
                        {service.title}
                    </h3>
                </div>

                <p className="text-gray-400 text-xs md:text-sm leading-relaxed mb-3 md:mb-6 flex-grow group-hover:text-gray-300 transition-colors line-clamp-3 md:line-clamp-none">
                    {service.desc}
                </p>

                <div className="pt-2 md:pt-4 mt-auto">
                    <Link
                        href={`/services/${serviceSlugs[service.id] || "ai-website-development"}`}
                        className="w-full py-1.5 px-3 md:py-2 md:px-4 rounded-lg border border-cyan-500/30 bg-cyan-950/20 hover:bg-cyan-500 hover:text-black hover:border-cyan-400 text-cyan-400 transition-all duration-300 flex items-center justify-center gap-2 group/btn shadow-[0_0_10px_rgba(0,240,255,0.1)]"
                    >
                        <span className="text-xs md:text-sm font-bold uppercase tracking-wider">Know More</span>
                        <ArrowRight className="w-3 h-3 md:w-4 md:h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

const Services = () => {
    return (
        <section id="services" className="py-24 bg-black relative overflow-hidden">

            {/* Background Elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

            <div className="container-width relative z-10">
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-950/30 text-cyan-300 text-xs font-medium font-mono tracking-wider mb-6 shadow-[0_0_20px_rgba(0,240,255,0.2)]"
                    >
                        <Sparkles className="w-3 h-3 animate-pulse" />
                        OUR_CAPABILITIES
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-display font-bold text-white mb-6"
                    >
                        Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Services</span>
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600 drop-shadow-[0_0_20px_rgba(0,240,255,0.3)]">
                            Intelligence Redefined
                        </span>
                    </motion.h2>

                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        Transforming businesses and lives with the fusion of Ancient Wisdom and Next-Gen AI.
                    </p>
                </div>

                {/* Brahmastra AI */}
                <div className="mb-32">
                    <div className="flex items-center gap-4 mb-12">
                        <div className="h-px flex-1 bg-gradient-to-r from-transparent to-cyan-500/50" />
                        <div className="text-center">
                            <h3 className="text-3xl md:text-4xl font-display font-bold text-white drop-shadow-[0_0_10px_rgba(0,240,255,0.5)]">
                                Brahmastra AI
                            </h3>
                            <p className="text-cyan-400 text-lg font-sans mt-2 tracking-widest uppercase text-xs">Ultimate Weapons for Business Growth</p>
                        </div>
                        <div className="h-px flex-1 bg-gradient-to-l from-transparent to-cyan-500/50" />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
                        {businessServices.map((service, index) => (
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
                    </div>
                </div>

                {/* Sudarshana Chakra */}
                <div>
                    <div className="flex items-center gap-4 mb-12">
                        <div className="h-px flex-1 bg-gradient-to-r from-transparent to-purple-500/50" />
                        <div className="text-center">
                            <h3 className="text-3xl md:text-4xl font-display font-bold text-white drop-shadow-[0_0_10px_rgba(168,85,247,0.5)]">
                                Sudarshana Chakra
                            </h3>
                            <p className="text-purple-400 text-lg font-sans mt-2 tracking-widest uppercase text-xs">Precision Tools for Individual Success</p>
                        </div>
                        <div className="h-px flex-1 bg-gradient-to-l from-transparent to-purple-500/50" />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {individualServices.map((service, index) => (
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
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;