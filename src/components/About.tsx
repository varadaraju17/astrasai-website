"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Brain, Shield, Zap, Sparkles, ArrowRight, X } from "lucide-react";

interface AboutItem {
    title: string;
    description: string;
    icon: React.ReactNode;
    image: string;
    benefit: string;
    extendedDesc: string;
    stats: { label: string; value: string }[];
}

const AboutModal = ({ item, onClose }: { item: AboutItem; onClose: () => void }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
            onClick={onClose}
        >
            <motion.div
                initial={{ scale: 0.95, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.95, opacity: 0, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-black border border-cyan-500/30 rounded-3xl shadow-[0_0_50px_rgba(0,240,255,0.15)]"
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-6 right-6 z-20 p-2 rounded-full bg-black/50 hover:bg-white/10 text-gray-400 hover:text-white transition-colors border border-white/10"
                >
                    <X className="w-6 h-6" />
                </button>

                {/* Header Section */}
                <div className="w-full bg-gradient-to-br from-cyan-950/30 to-purple-950/30 p-6 md:p-12 flex flex-col md:flex-row items-center gap-8 border-b border-white/10 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
                    <div className="relative z-10 p-6 rounded-2xl bg-black/40 backdrop-blur-xl border border-cyan-500/30 shadow-[0_0_30px_rgba(0,240,255,0.2)]">
                        {React.cloneElement(item.icon as React.ReactElement<{ className?: string }>, { className: "w-12 h-12 text-cyan-400" })}
                    </div>
                    <div className="relative z-10 text-center md:text-left">
                        <p className="text-cyan-400 font-mono text-sm uppercase tracking-wider mb-2">{item.benefit}</p>
                        <h3 className="text-3xl md:text-5xl font-display font-bold text-white tracking-tight drop-shadow-[0_0_10px_rgba(0,240,255,0.3)]">{item.title}</h3>
                    </div>
                </div>

                {/* Content Section */}
                <div className="p-6 md:p-12 bg-black">
                    <div className="flex flex-col gap-8">
                        <p className="text-gray-300 text-lg md:text-xl leading-relaxed font-light border-l-4 border-cyan-500 pl-6">
                            {item.extendedDesc}
                        </p>

                        <div className="grid sm:grid-cols-2 gap-4 mt-4">
                            {item.stats.map((stat, idx) => (
                                <div key={idx} className="p-6 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between hover:border-cyan-500/30 transition-colors">
                                    <span className="text-gray-400 text-sm uppercase tracking-wider">{stat.label}</span>
                                    <span className="text-2xl font-bold text-cyan-400 font-display">{stat.value}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

const AboutCard = ({ item, onClick }: { item: AboutItem; onClick: () => void }) => {
    return (
        <div
            onClick={onClick}
            className="group relative h-full bg-black/40 backdrop-blur-xl border border-white/10 rounded-xl md:rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[inset_0_0_60px_rgba(0,240,255,0.15)] hover:border-cyan-400/60 flex flex-col cursor-pointer"
        >
            {/* Image Section - Top 50% with Fade */}
            <div className="relative h-[140px] md:h-[280px] w-full overflow-hidden border-b border-white/5">
                <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

                {/* Floating Icon */}
                <div className="absolute top-2 left-2 md:top-6 md:left-6 p-1.5 md:p-3 rounded-lg md:rounded-xl bg-black/60 backdrop-blur-md border border-cyan-500/30 text-cyan-400 shadow-[0_0_20px_rgba(0,240,255,0.2)] group-hover:scale-110 transition-transform duration-300">
                    {React.cloneElement(item.icon as React.ReactElement<{ className?: string }>, { className: "w-4 h-4 md:w-6 md:h-6" })}
                </div>
            </div>

            {/* Content Section */}
            <div className="relative p-3 md:p-8 flex flex-col flex-grow">
                <div className="mb-auto">
                    <span className="inline-block px-2 py-0.5 md:px-3 md:py-1 rounded-full bg-cyan-950/30 border border-cyan-500/30 text-cyan-400 text-[10px] md:text-xs font-bold uppercase tracking-wider mb-2 md:mb-4 shadow-[0_0_10px_rgba(0,240,255,0.1)] w-fit">
                        {item.benefit}
                    </span>
                    <h3 className="text-sm md:text-2xl font-bold text-white mb-1 md:mb-3 font-display tracking-tight group-hover:text-cyan-400 transition-colors drop-shadow-lg leading-tight">
                        {item.title}
                    </h3>
                    <p className="text-gray-400 text-xs md:text-sm leading-relaxed group-hover:text-gray-300 transition-colors line-clamp-3 md:line-clamp-none">
                        {item.description}
                    </p>
                </div>

                {/* Know More Button */}
                <div className="mt-2 pt-2 md:mt-6 md:pt-6 border-t border-white/10 flex items-center justify-between">
                    <span className="text-xs md:text-sm font-medium text-cyan-500/70 group-hover:text-cyan-400 transition-colors uppercase tracking-wider">Know more</span>
                    <div className="w-6 h-6 md:w-10 md:h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-cyan-500 group-hover:text-black group-hover:border-cyan-400 transition-all duration-300 shadow-lg">
                        <ArrowRight className="w-3 h-3 md:w-5 md:h-5" />
                    </div>
                </div>
            </div>
        </div>
    );
};

const About = () => {
    const [selectedItem, setSelectedItem] = useState<AboutItem | null>(null);

    const aboutItems: AboutItem[] = [
        {
            image: "/assets/3d/neural_intelligence.png",
            title: "More Than Just Code",
            description: "We believe true intelligence comes from understanding your business, not just writing algorithms. Our AI systems are designed to think like a partner, adapting to your specific needs and goals.",
            icon: <Brain className="w-6 h-6" />,
            benefit: "Human-Centric AI",
            extendedDesc: "We don't just build black boxes. We design AI systems that amplify human potential. Our approach focuses on intuitive interfaces, explainable logic, and workflows that feel natural to your team, ensuring that technology serves people, not the other way around.",
            stats: [
                { label: "User Adoption", value: "100%" },
                { label: "Efficiency Boost", value: "50%" }
            ]
        },
        {
            image: "/assets/3d/secure_protocols.png",
            title: "Your Data, Your Rules",
            description: "In a world of data leaks, we build vaults. We prioritize your privacy and security above all else, ensuring your proprietary information remains strictly yours—encrypted, protected, and sovereign.",
            icon: <Shield className="w-6 h-6" />,
            benefit: "Uncompromised Security",
            extendedDesc: "Security is the bedrock of trust. We employ state-of-the-art encryption, rigorous penetration testing, and compliance with global standards to ensure your data is impenetrable. Your intellectual property is safe with us.",
            stats: [
                { label: "Security Breaches", value: "0" },
                { label: "Encryption", value: "256-bit" }
            ]
        },
        {
            image: "/assets/3d/infinite_scalability.png",
            title: "Built for Growth",
            description: "We don't build for today; we build for where you want to be tomorrow. Our scalable systems grow with your ambition, ensuring technology never becomes a bottleneck to your success.",
            icon: <Zap className="w-6 h-6" />,
            benefit: "Infinite Scalability",
            extendedDesc: "Growth shouldn't be painful. Our cloud-native architectures are built to handle exponential spikes in traffic and data without skipping a beat. From your first user to your billionth, our systems scale seamlessly with your success.",
            stats: [
                { label: "Uptime Guarantee", value: "99.99%" },
                { label: "Scaling", value: "Auto" }
            ]
        },
    ];

    return (
        <section id="about" className="py-24 bg-black relative overflow-hidden">
            {/* Background Glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container-width relative z-10">
                {/* Section Header */}
                <div className="text-center mb-12 md:mb-24">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-950/30 text-cyan-300 text-sm font-medium backdrop-blur-md mb-8 shadow-[0_0_20px_rgba(0,240,255,0.2)]">
                        <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
                        <span className="uppercase tracking-wider">Who We Are</span>
                    </div>

                    <h2 className="text-4xl md:text-7xl font-display font-bold text-white mb-6 tracking-tight drop-shadow-2xl">
                        Architects of the <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 drop-shadow-[0_0_20px_rgba(0,240,255,0.3)]">
                            Digital Future
                        </span>
                    </h2>

                    <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto font-light">
                        Astras AI is an elite innovation studio based in Bangalore. We don&apos;t just build software; we forge digital advantages that propel your business forward.
                    </p>
                </div>

                {/* Standard Grid Layout */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-8">
                    {aboutItems.map((item, index) => (
                        <div key={index} className="h-full">
                            <AboutCard item={item} onClick={() => setSelectedItem(item)} />
                        </div>
                    ))}
                </div>
            </div>

            <AnimatePresence>
                {selectedItem && (
                    <AboutModal item={selectedItem} onClose={() => setSelectedItem(null)} />
                )}
            </AnimatePresence>
        </section>
    );
};

export default About;
