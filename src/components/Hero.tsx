"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { motion, useMotionValue } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

// --- UI Components ---

const MagneticButton = ({ children, href, primary = false }: { children: React.ReactNode; href: string; primary?: boolean }) => {
    const ref = useRef<HTMLAnchorElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
        const { clientX, clientY } = e;
        const { left, top, width, height } = ref.current!.getBoundingClientRect();
        const centerX = left + width / 2;
        const centerY = top + height / 2;
        x.set((clientX - centerX) * 0.3);
        y.set((clientY - centerY) * 0.3);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div style={{ x, y }}>
            <Link
                href={href}
                ref={ref}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                className={`relative group px-6 py-3 md:px-8 md:py-4 rounded-full font-bold text-base md:text-lg flex items-center gap-2 overflow-hidden transition-all duration-300 ${primary
                    ? "bg-cyan-500 text-black shadow-[0_0_30px_rgba(0,240,255,0.4)] hover:shadow-[0_0_60px_rgba(0,240,255,0.6)]"
                    : "bg-black/50 text-white border border-cyan-500/30 hover:bg-cyan-950/30 hover:border-cyan-400/50 backdrop-blur-md shadow-[0_0_20px_rgba(0,240,255,0.1)]"
                    }`}
            >
                {primary && (
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover:animate-shimmer" />
                )}
                {children}
            </Link>
        </motion.div>
    );
};

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
            {/* Video Background */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-contain md:object-cover object-center opacity-50"
                >
                    <source src="/hero_logo.mp4" type="video/mp4" />
                </video>
            </div>

            {/* Advanced Gradient Overlays */}
            <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/90 via-black/40 to-black/90 pointer-events-none" />
            <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_100%)] opacity-80 pointer-events-none" />
            <div className="absolute inset-0 z-0 bg-gradient-to-r from-black/50 via-transparent to-black/50 pointer-events-none" />

            {/* Content */}
            <div className="container-width relative z-10 pt-32 md:pt-20">
                <div className="max-w-6xl mx-auto text-center">
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-950/30 text-cyan-300 text-xs md:text-sm font-medium backdrop-blur-md mb-8 shadow-[0_0_20px_rgba(0,240,255,0.2)] hover:shadow-[0_0_30px_rgba(0,240,255,0.4)] transition-shadow duration-500"
                    >
                        <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
                        <span className="tracking-wide uppercase">The Future of Intelligence</span>
                    </motion.div>

                    {/* Headline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="text-5xl sm:text-7xl md:text-9xl font-display font-bold text-white mb-8 leading-tight tracking-tight drop-shadow-2xl"
                    >
                        Building the <br />
                        <span className="relative inline-block">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 animate-gradient-x drop-shadow-[0_0_30px_rgba(0,240,255,0.3)]">
                                Intelligent Future
                            </span>
                            {/* Glitch/Glow Effect Layer */}
                            <span className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 blur-xl opacity-50 animate-pulse">
                                Intelligent Future
                            </span>
                        </span>
                    </motion.h1>

                    {/* Subheadline */}
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                        className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-12 max-w-4xl mx-auto font-light"
                    >
                        We forge digital dominance. From <span className="text-cyan-400 font-medium drop-shadow-[0_0_10px_rgba(0,240,255,0.5)]">AI Websites</span> and <span className="text-cyan-400 font-medium drop-shadow-[0_0_10px_rgba(0,240,255,0.5)]">Custom Apps</span> to intelligent <span className="text-purple-400 font-medium drop-shadow-[0_0_10px_rgba(168,85,247,0.5)]">Agents</span> and <span className="text-purple-400 font-medium drop-shadow-[0_0_10px_rgba(168,85,247,0.5)]">Startup MVPs</span>, we engineer the technology that powers your exponential growth.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                        className="flex flex-wrap justify-center gap-6 mb-24"
                    >
                        <MagneticButton href="/contact" primary>
                            Start Your Project
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </MagneticButton>

                        <MagneticButton href="#services">
                            Explore Services
                        </MagneticButton>
                    </motion.div>
                </div>
            </div>


        </section>
    );
};

export default Hero;
