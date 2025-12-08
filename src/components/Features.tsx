"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, Shield, Brain, Globe, Sparkles, Layers, ArrowRight, X, CheckCircle2, Lightbulb } from "lucide-react";
import Image from "next/image";
import Background3D from "./Background3D";

// --- Types ---
interface FeatureData {
    id: string;
    title: string;
    benefit: string;
    description: string;
    icon: React.ReactNode;
    image: string;
    details: {
        extendedDesc: string;
        visualMetaphor: string;
        features: string[];
    };
}

// --- Feature Modal Component ---
const FeatureModal = ({ feature, onClose }: { feature: FeatureData; onClose: () => void }) => {
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
                className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-black border border-cyan-500/30 rounded-3xl shadow-[0_0_50px_rgba(0,240,255,0.15)]"
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
                        {feature.icon}
                    </div>
                    <div className="relative z-10 text-center md:text-left">
                        <p className="text-cyan-400 font-mono text-sm uppercase tracking-wider mb-2">{feature.benefit}</p>
                        <h3 className="text-4xl md:text-5xl font-display font-bold text-white tracking-tight drop-shadow-[0_0_10px_rgba(0,240,255,0.3)]">{feature.title}</h3>
                    </div>
                </div>

                {/* Content Section */}
                <div className="p-6 md:p-12 bg-black">
                    <div className="flex flex-col md:flex-row gap-12">
                        <div className="flex-1">
                            <p className="text-gray-300 text-xl leading-relaxed mb-12 font-light border-l-4 border-cyan-500 pl-6">
                                {feature.details.extendedDesc}
                            </p>

                            <h4 className="text-sm font-bold text-white mb-6 flex items-center gap-2 uppercase tracking-wider">
                                <Zap className="w-4 h-4 text-cyan-400" />
                                Key Capabilities
                            </h4>
                            <ul className="grid sm:grid-cols-2 gap-4">
                                {feature.details.features.map((item, idx) => (
                                    <li key={idx} className="flex items-center gap-3 text-gray-400 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-cyan-500/30 transition-colors">
                                        <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0" />
                                        <span className="text-sm font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="w-full md:w-1/3">
                            <div className="p-8 rounded-2xl bg-gradient-to-br from-gray-900 to-black border border-white/10 h-full flex flex-col justify-center items-center text-center shadow-inner">
                                <h4 className="text-xs font-bold text-gray-500 mb-6 uppercase tracking-wider flex items-center gap-2">
                                    <Lightbulb className="w-4 h-4" /> Visual Metaphor
                                </h4>
                                <div className="py-8">
                                    <span className="text-6xl mb-6 block animate-pulse opacity-80">✨</span>
                                    <p className="text-cyan-200 font-mono text-lg leading-relaxed italic">
                                        &quot;{feature.details.visualMetaphor}&quot;
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

// --- Feature Card Component (Nebula Glass) ---
const FeatureCard = ({ feature, onClick }: { feature: FeatureData; onClick: () => void }) => {
    return (
        <div
            onClick={onClick}
            className="group relative h-full bg-black/60 backdrop-blur-xl border border-cyan-500/20 rounded-xl md:rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 hover:-translate-y-2 hover:shadow-[inset_0_0_60px_rgba(0,240,255,0.15)] hover:border-cyan-400/60 flex flex-col shadow-[0_0_30px_rgba(0,240,255,0.1)]"
        >
            {/* Image Section - Top 50% with Fade */}
            <div className="relative h-[140px] md:h-[280px] w-full overflow-hidden border-b border-white/5">
                <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

                {/* Floating Icon */}
                <div className="absolute top-2 left-2 md:top-6 md:left-6 p-1.5 md:p-3 rounded-lg md:rounded-xl bg-black/60 backdrop-blur-md border border-cyan-500/30 text-cyan-400 shadow-[0_0_20px_rgba(0,240,255,0.2)] group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                </div>
            </div>

            {/* Content Section */}
            <div className="relative p-3 md:p-8 flex flex-col flex-grow">
                <div className="mb-auto">
                    <span className="inline-block px-2 py-0.5 md:px-3 md:py-1 rounded-full bg-cyan-950/30 border border-cyan-500/30 text-cyan-400 text-[10px] md:text-xs font-bold uppercase tracking-wider mb-2 md:mb-4 shadow-[0_0_10px_rgba(0,240,255,0.1)]">
                        {feature.benefit}
                    </span>
                    <h3 className="text-sm md:text-2xl font-bold text-white mb-1 md:mb-3 font-display tracking-tight group-hover:text-cyan-400 transition-colors drop-shadow-lg leading-tight">
                        {feature.title}
                    </h3>
                    <p className="text-gray-400 text-xs md:text-sm leading-relaxed line-clamp-3 md:line-clamp-none group-hover:text-gray-300 transition-colors">
                        {feature.description}
                    </p>
                </div>

                <div className="mt-2 pt-2 md:mt-8 md:pt-6 border-t border-white/10 flex items-center justify-between">
                    <span className="text-xs md:text-sm font-medium text-cyan-500/70 group-hover:text-cyan-400 transition-colors uppercase tracking-wider">Learn more</span>
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-cyan-500 group-hover:text-black group-hover:border-cyan-400 transition-all duration-300 shadow-lg">
                        <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                    </div>
                </div>
            </div>
        </div>
    );
};

const Features = () => {
    const [selectedFeature, setSelectedFeature] = useState<FeatureData | null>(null);

    const features: FeatureData[] = [
        {
            id: "intelligent-systems",
            icon: <Brain className="w-6 h-6" />,
            title: "Intelligent Systems",
            benefit: "Smarter Decisions",
            description: "We build systems that don't just follow rules—they learn, adapt, and help you make better business decisions.",
            image: "/assets/3d/neural_intelligence.png",
            details: {
                extendedDesc: "Imagine software that gets smarter the more you use it. Our Intelligent Systems mimic human learning to understand context, recognize patterns, and provide insights that standard software simply can't match.",
                visualMetaphor: "A digital brain connecting ideas like a constellation of stars.",
                features: ["Understands Natural Language", "Recognizes Complex Patterns", "Learns from Data", "Adapts to Your Needs"]
            }
        },
        {
            id: "bank-grade-security",
            icon: <Shield className="w-6 h-6" />,
            title: "Bank-Grade Security",
            benefit: "Total Protection",
            description: "Your data is your most valuable asset. We protect it with the same encryption standards used by major banks.",
            image: "/assets/3d/secure_protocols.png",
            details: {
                extendedDesc: "In today's digital world, security isn't optional. We build digital fortresses around your data, using military-grade encryption and 'Zero Trust' architecture to ensure your information stays safe, private, and under your control.",
                visualMetaphor: "A diamond shield deflecting all incoming threats.",
                features: ["Military-Grade Encryption", "Zero-Trust Architecture", "24/7 Threat Monitoring", "Complete Data Privacy"]
            }
        },
        {
            id: "instant-speed",
            icon: <Zap className="w-6 h-6" />,
            title: "Instant Speed",
            benefit: "Real-Time Action",
            description: "Don't wait for answers. Our technology processes data instantly, giving you insights the moment they happen.",
            image: "/assets/3d/lightning_ux.png",
            details: {
                extendedDesc: "Speed wins. Our systems are engineered to process information in microseconds, turning raw data into actionable insights instantly. Whether it's a customer click or a market shift, you'll know about it immediately.",
                visualMetaphor: "A lightning bolt striking a microchip, instantly powering a city.",
                features: ["Ultra-Low Latency", "Instant Analytics", "Real-Time Updates", "High-Performance Core"]
            }
        },
        {
            id: "global-scale",
            icon: <Globe className="w-6 h-6" />,
            title: "Global Scale",
            benefit: "Grow Without Limits",
            description: "Start small, grow massive. Our cloud infrastructure scales automatically to handle millions of users worldwide.",
            image: "/assets/3d/infinite_scalability.png",
            details: {
                extendedDesc: "Your technology should never hold you back. We build on cloud-native infrastructure that expands effortlessly. Whether you have 100 users or 100 million, our systems handle the load without breaking a sweat.",
                visualMetaphor: "A tree whose branches reach endlessly into the sky.",
                features: ["Auto-Scaling Servers", "Works Worldwide", "Handles High Traffic", "Reliable Performance"]
            }
        },
        {
            id: "seamless-integration",
            icon: <Layers className="w-6 h-6" />,
            title: "Seamless Integration",
            benefit: "Works with Everything",
            description: "No need to replace your existing tools. Our solutions plug right into your current workflow without disruption.",
            image: "/assets/3d/autonomous_agents.png",
            details: {
                extendedDesc: "New technology shouldn't be a headache to install. We design our solutions to fit perfectly into your existing ecosystem, connecting with your favorite apps and tools so you can keep working without interruption.",
                visualMetaphor: "Two complex gears meshing perfectly in silent unison.",
                features: ["Connects to Your Apps", "Easy Setup", "Custom Workflows", "No Disruption"]
            }
        },
        {
            id: "future-ready",
            icon: <Sparkles className="w-6 h-6" />,
            title: "Future-Ready Tech",
            benefit: "Built to Last",
            description: "We use the latest technology to ensure your software stays modern, relevant, and powerful for years to come.",
            image: "/assets/3d/sovereign_ai.png",
            details: {
                extendedDesc: "Technology moves fast. We build with the future in mind, using modular architectures that allow you to easily adopt new innovations like AI and Quantum Computing as they emerge, keeping you ahead of the curve.",
                visualMetaphor: "A bridge extending confidently into a bright, futuristic horizon.",
                features: ["Modern Tech Stack", "Easy to Upgrade", "Adaptable Design", "Long-Term Value"]
            }
        }
    ];

    return (
        <section id="features" className="py-32 bg-black relative overflow-hidden">
            <Background3D />

            {/* Background Glows */}
            <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-cyan-500/5 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-purple-600/5 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2 pointer-events-none" />

            <div className="container-width relative z-10">
                <div className="text-center mb-12 md:mb-24">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-950/30 text-cyan-300 text-sm font-medium backdrop-blur-md mb-8 shadow-[0_0_20px_rgba(0,240,255,0.2)]">
                        <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
                        <span className="uppercase tracking-wider">Why Choose Us</span>
                    </div>

                    <h2 className="text-4xl md:text-7xl font-display font-bold text-white mb-6 tracking-tight drop-shadow-2xl">
                        Engineered for <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 drop-shadow-[0_0_20px_rgba(0,240,255,0.3)]">
                            Excellence
                        </span>
                    </h2>

                    <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
                        We combine cutting-edge technology with robust engineering to deliver solutions that stand the test of time.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="h-full"
                        >
                            <FeatureCard feature={feature} onClick={() => setSelectedFeature(feature)} />
                        </motion.div>
                    ))}
                </div>
            </div>

            <AnimatePresence>
                {selectedFeature && (
                    <FeatureModal feature={selectedFeature} onClose={() => setSelectedFeature(null)} />
                )}
            </AnimatePresence>
        </section>
    );
};

export default Features;
