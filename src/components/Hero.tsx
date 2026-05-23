"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

// --- Floating Tag — pure CSS fade-in, no Framer Motion ---
const FloatingTag = ({
    text,
    className,
    delay,
}: {
    text: string;
    className: string;
    delay: number;
}) => (
    <div
        className={`hidden lg:block absolute px-4 py-2 rounded-lg bg-black/60 backdrop-blur-md border border-white/10 text-xs font-mono text-cyan-400 whitespace-nowrap shadow-[0_0_20px_rgba(0,240,255,0.1)] z-10 ${className}`}
        style={{
            opacity: 0,
            animation: `heroFadeIn 0.5s ease-out ${delay}s forwards`,
        }}
    >
        {text}
    </div>
);

// --- Aurora Background — pure CSS only, zero JS animation ---
const AuroraBackground = () => (
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

        {/* Orb 1 — cyan — CSS only, GPU compositor thread */}
        <div className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] rounded-full"
            style={{
                background: 'rgba(0,240,255,0.18)',
                filter: 'blur(100px)',
                animation: 'heroOrb1 18s ease-in-out infinite',
                willChange: 'transform',
            }}
        />

        {/* Orb 2 — purple */}
        <div className="absolute bottom-1/4 right-1/4 w-[35vw] h-[35vw] rounded-full"
            style={{
                background: 'rgba(139,92,246,0.18)',
                filter: 'blur(100px)',
                animation: 'heroOrb2 22s ease-in-out infinite',
                willChange: 'transform',
            }}
        />

        {/* Orb 3 — blue center */}
        <div className="absolute top-1/2 left-1/2 w-[45vw] h-[45vw] rounded-full"
            style={{
                background: 'rgba(59,130,246,0.10)',
                filter: 'blur(120px)',
                transform: 'translate(-50%, -50%)',
                animation: 'heroOrb3 25s ease-in-out infinite',
                willChange: 'transform',
            }}
        />

        {/* Fade Out Edges */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black pointer-events-none" />

        <style>{`
            @keyframes heroOrb1 {
                0%, 100% { transform: translate(0, 0) scale(1); }
                33% { transform: translate(6vw, -4vh) scale(1.1); }
                66% { transform: translate(-4vw, 5vh) scale(0.95); }
            }
            @keyframes heroOrb2 {
                0%, 100% { transform: translate(0, 0) scale(1); }
                33% { transform: translate(-5vw, 4vh) scale(1.05); }
                66% { transform: translate(4vw, -6vh) scale(0.9); }
            }
            @keyframes heroOrb3 {
                0%, 100% { transform: translate(-50%, -50%) scale(1); }
                50% { transform: translate(-50%, -50%) scale(1.12); }
            }
            @keyframes heroFadeIn {
                from { opacity: 0; transform: translateY(10px) scale(0.95); }
                to   { opacity: 1; transform: translateY(0) scale(1); }
            }
            @keyframes heroSlideUp {
                from { opacity: 0; transform: translateY(20px); }
                to   { opacity: 1; transform: translateY(0); }
            }
        `}</style>
    </div>
);

// --- Main Hero ---
const Hero = () => {
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

                    {/* Badge — CSS fade-in */}
                    <div
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-black/40 text-cyan-300 text-[10px] sm:text-xs font-semibold tracking-widest uppercase backdrop-blur-md mb-8 shadow-[0_0_20px_rgba(0,240,255,0.15)] min-h-[34px]"
                        style={{ opacity: 0, animation: 'heroSlideUp 0.6s ease-out 0.1s forwards' }}
                    >
                        <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
                        <span>Bangalore&apos;s #1 AI Agency</span>
                    </div>

                    {/* H1 */}
                    <div className="min-h-[140px] sm:min-h-[180px] flex flex-col items-center justify-center">
                        <h1
                            className="font-display font-black tracking-tight text-white leading-[1.1] sm:leading-[1.05] mb-6 sm:mb-8 text-[2.5rem] min-[400px]:text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] px-2 sm:px-4"
                            style={{ opacity: 0, animation: 'heroSlideUp 0.7s ease-out 0.2s forwards' }}
                        >
                            Building the{" "}
                            <br className="hidden sm:block" />
                            <span className="relative inline-block mt-2 sm:mt-4">
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 drop-shadow-[0_0_30px_rgba(0,240,255,0.4)]">
                                    Intelligent Future
                                </span>
                            </span>
                        </h1>
                    </div>

                    {/* Subheadline */}
                    <p
                        className="speakable text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed mb-12 max-w-3xl mx-auto font-light px-6"
                        style={{ opacity: 0, animation: 'heroSlideUp 0.7s ease-out 0.35s forwards' }}
                    >
                        From{" "}
                        <span className="text-cyan-400 font-medium">AI Websites</span> and{" "}
                        <span className="text-cyan-400 font-medium">Custom Apps</span> to{" "}
                        <span className="text-purple-400 font-medium">AI Agents</span> and{" "}
                        <span className="text-purple-400 font-medium">Marketing</span> — we engineer technology that
                        drives your exponential growth.
                    </p>

                    {/* CTA Buttons — CSS fade-in, hover effects via Tailwind */}
                    <div
                        className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-20 w-full px-6 sm:px-0"
                        style={{ opacity: 0, animation: 'heroSlideUp 0.7s ease-out 0.45s forwards' }}
                    >
                        <Link
                            href="/contact"
                            className="relative group flex sm:inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full font-bold text-sm md:text-base overflow-hidden transition-all duration-300 w-full sm:w-auto bg-cyan-500 text-black shadow-[0_0_25px_rgba(0,240,255,0.45)] hover:shadow-[0_0_50px_rgba(0,240,255,0.7)] hover:bg-cyan-400"
                        >
                            <span className="absolute inset-0 overflow-hidden rounded-full pointer-events-none">
                                <span className="absolute -inset-x-full top-0 h-full w-[200%] bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                            </span>
                            <span className="relative z-10 flex items-center gap-2.5">
                                Start Your Project
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </span>
                        </Link>
                        <Link
                            href="#services"
                            className="relative group flex sm:inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full font-bold text-sm md:text-base overflow-hidden transition-all duration-300 w-full sm:w-auto bg-white/5 text-white border border-white/20 hover:bg-white/10 hover:border-cyan-400/50 backdrop-blur-md"
                        >
                            <span className="relative z-10 flex items-center gap-2.5">
                                Explore Services
                            </span>
                        </Link>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Hero;
