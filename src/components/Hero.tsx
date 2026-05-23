"use client";

import React, { useRef, useEffect, useState } from "react";
import Link from "next/link";
import { motion, useMotionValue } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

// --- Magnetic CTA Button ---
const MagneticButton = ({
    children,
    href,
    primary = false,
}: {
    children: React.ReactNode;
    href: string;
    primary?: boolean;
}) => {
    const ref = useRef<HTMLAnchorElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
        if (!ref.current) return;
        const { clientX, clientY } = e;
        const { left, top, width, height } = ref.current.getBoundingClientRect();
        x.set((clientX - (left + width / 2)) * 0.25);
        y.set((clientY - (top + height / 2)) * 0.25);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div style={{ x, y }} className="relative z-20">
            <Link
                href={href}
                ref={ref}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                className={`relative group flex sm:inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full font-bold text-sm md:text-base overflow-hidden transition-all duration-300 w-full sm:w-auto ${
                    primary
                        ? "bg-cyan-500 text-black shadow-[0_0_25px_rgba(0,240,255,0.45)] hover:shadow-[0_0_50px_rgba(0,240,255,0.7)] hover:bg-cyan-400"
                        : "bg-white/5 text-white border border-white/20 hover:bg-white/10 hover:border-cyan-400/50 backdrop-blur-md"
                }`}
            >
                {primary && (
                    <span className="absolute inset-0 overflow-hidden rounded-full pointer-events-none">
                        <span className="absolute -inset-x-full top-0 h-full w-[200%] bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                    </span>
                )}
                <span className="relative z-10 flex items-center gap-2.5">{children}</span>
            </Link>
        </motion.div>
    );
};


// --- Floating Tag ---
const FloatingTag = ({
    text,
    className,
    delay,
}: {
    text: string;
    className: string;
    delay: number;
}) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay, ease: "easeOut" }}
        className={`hidden lg:block absolute px-4 py-2 rounded-lg bg-black/60 backdrop-blur-md border border-white/10 text-xs font-mono text-cyan-400 whitespace-nowrap shadow-[0_0_20px_rgba(0,240,255,0.1)] z-10 ${className}`}
    >
        {text}
    </motion.div>
);

// --- Background Aurora Animation ---
const AuroraBackground = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [startAnim, setStartAnim] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();

        if (window.innerWidth >= 768) {
            const timer = setTimeout(() => {
                setStartAnim(true);
            }, 1000);
            return () => clearTimeout(timer);
        }

        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    if (isMobile) {
        return (
            <div className="absolute inset-0 bg-black pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-black to-purple-900/20 opacity-50" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,240,255,0.1),transparent_70%)]" />
            </div>
        );
    }

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none bg-black">
            {/* Base Grid Pattern */}
            <div 
                className="absolute inset-0 z-0 opacity-[0.15]"
                style={{
                    backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
                    backgroundSize: '40px 40px',
                    maskImage: 'radial-gradient(ellipse 80% 50% at 50% 50%, black 40%, transparent 100%)',
                    WebkitMaskImage: 'radial-gradient(ellipse 80% 50% at 50% 50%, black 40%, transparent 100%)',
                }}
            />

            {/* Animated Glowing Orbs - Desktop Only */}
            {startAnim && (
                <>
                    <motion.div 
                        animate={{ 
                            x: [0, 100, -50, 0], 
                            y: [0, -50, 50, 0],
                            scale: [1, 1.2, 0.9, 1]
                        }}
                        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] bg-cyan-500/20 rounded-full blur-[140px] mix-blend-screen"
                    />
                    
                    <motion.div 
                        animate={{ 
                            x: [0, -100, 50, 0], 
                            y: [0, 80, -40, 0],
                            scale: [1, 1.1, 0.8, 1]
                        }}
                        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                        className="absolute bottom-1/4 right-1/4 w-[35vw] h-[35vw] bg-purple-600/20 rounded-full blur-[140px] mix-blend-screen"
                    />

                    <motion.div 
                        animate={{ 
                            x: [0, 50, -80, 0], 
                            y: [0, -30, 60, 0],
                            scale: [1, 0.9, 1.3, 1]
                        }}
                        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[45vw] h-[45vw] bg-blue-500/15 rounded-full blur-[140px] mix-blend-screen"
                    />
                </>
            )}

            {/* Fade Out Edges */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black pointer-events-none" />
        </div>
    );
};

// --- Main Hero ---
const Hero = () => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Prevent hydration mismatch on initial render with heavy animations
    if (!mounted) return <section className="min-h-screen bg-black" />;

    return (
        <section
            id="home"
            className="relative min-h-[100svh] w-full flex flex-col items-center justify-center overflow-hidden bg-black"
        >
            <AuroraBackground />

            {/* ── Floating tech tags (desktop only) ────────────────────────── */}
            <FloatingTag text="▸ AI Agents" className="top-[25%] left-[10%] rotate-[-2deg]" delay={1.2} />
            <FloatingTag text="▸ Next.js 14" className="top-[35%] right-[10%] rotate-[2deg]" delay={1.4} />
            <FloatingTag text="▸ Flutter Apps" className="bottom-[35%] left-[12%] rotate-[1deg]" delay={1.6} />

            {/* ── Main Content ──────────────────────────────────────────────── */}
            <div className="container-width relative z-10 w-full pt-32 pb-20">
                <div className="max-w-5xl mx-auto text-center flex flex-col items-center">

                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-black/40 text-cyan-300 text-[10px] sm:text-xs font-semibold tracking-widest uppercase backdrop-blur-md mb-8 shadow-[0_0_20px_rgba(0,240,255,0.15)] min-h-[34px]"
                    >
                        <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
                        <span>Bangalore&apos;s #1 AI Agency</span>
                    </motion.div>

                    {/* H1 — SEO + Visual */}
                    <div className="min-h-[140px] sm:min-h-[180px] flex flex-col items-center justify-center">
                        <h1
                            className="font-display font-black tracking-tight text-white leading-[1.1] sm:leading-[1.05] mb-6 sm:mb-8 text-[2.5rem] min-[400px]:text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] px-2 sm:px-4"
                        >
                            <span className="sr-only">
                                Astras AI — Building Intelligent Websites, Mobile Apps &amp; AI Agents in Bangalore
                            </span>

                            <span aria-hidden="true" className="block">
                                Building the{" "}
                                <br className="hidden sm:block" />
                                <span className="relative inline-block mt-2 sm:mt-4">
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 drop-shadow-[0_0_30px_rgba(0,240,255,0.4)]">
                                        Intelligent Future
                                    </span>
                                </span>
                            </span>
                        </h1>
                    </div>

                    {/* Subheadline */}
                    <p
                        className="speakable text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed mb-12 max-w-3xl mx-auto font-light px-6"
                    >
                        From{" "}
                        <span className="text-cyan-400 font-medium">AI Websites</span> and{" "}
                        <span className="text-cyan-400 font-medium">Custom Apps</span> to{" "}
                        <span className="text-purple-400 font-medium">AI Agents</span> and{" "}
                        <span className="text-purple-400 font-medium">Marketing</span> — we engineer technology that
                        drives your exponential growth.
                    </p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.45 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-20 w-full px-6 sm:px-0"
                    >
                        <MagneticButton href="/contact" primary>
                            Start Your Project
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
