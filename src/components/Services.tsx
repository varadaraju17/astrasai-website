"use client";

import React, { useState } from "react";
import { motion, useMotionTemplate, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
    ArrowRight, Sparkles, X, CheckCircle2, Zap, Lightbulb
} from "lucide-react";
import { businessServices, individualServices, ServiceData } from "@/data/servicesData";
import Background3D from "./Background3D";

// --- Service Modal Component ---
const ServiceModal = ({ service, onClose }: { service: ServiceData; onClose: () => void }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
            onClick={onClose}
        >
            <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-6xl max-h-[90vh] overflow-y-auto bg-black border border-cyan-500/30 rounded-2xl shadow-[0_0_50px_rgba(0,240,255,0.15)]"
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/50 hover:bg-white/10 text-gray-400 hover:text-white transition-colors border border-white/10"
                >
                    <X className="w-6 h-6" />
                </button>

                {/* Header Section */}
                <div className="w-full bg-gradient-to-r from-cyan-950/30 to-purple-950/30 p-8 flex flex-col md:flex-row items-center gap-6 border-b border-white/10 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
                    <div className="relative z-10 p-4 rounded-xl bg-black/40 backdrop-blur-md border border-cyan-500/30 shadow-[0_0_20px_rgba(0,240,255,0.2)]">
                        {service.icon}
                    </div>
                    <div className="relative z-10 text-center md:text-left">
                        <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-2">{service.title}</h3>
                        <p className="text-cyan-400 font-mono text-sm uppercase tracking-wider">{service.benefit}</p>
                    </div>
                </div>

                {/* Content Section */}
                <div className="p-8 bg-black">
                    <p className="hidden md:block text-gray-300 text-lg leading-relaxed mb-8 border-l-4 border-cyan-500 pl-6 italic">
                        {service.details.extendedDesc}
                    </p>

                    {service.subServices ? (
                        // Sub-Services Grid View
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                            {service.subServices.map((sub, idx) => (
                                <div key={idx} className="group relative bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,240,255,0.1)] flex flex-col">
                                    {/* Image */}
                                    <div className="aspect-video w-full relative overflow-hidden shrink-0">
                                        <Image
                                            src={sub.image}
                                            alt={sub.title}
                                            fill
                                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                                        <div className="absolute top-2 right-2 md:top-3 md:right-3 px-1.5 py-0.5 md:px-2 md:py-1 rounded bg-black/60 backdrop-blur-md border border-white/10 text-[8px] md:text-[10px] font-mono uppercase tracking-wider text-cyan-400 z-10">
                                            {sub.tagline}
                                        </div>
                                        <div className="absolute bottom-2 left-2 md:bottom-3 md:left-3 z-10 p-1.5 md:p-2 rounded-full bg-black/40 backdrop-blur-sm border border-white/20 text-white">
                                            {React.cloneElement(sub.icon as React.ReactElement<{ className?: string }>, { className: "w-3 h-3 md:w-4 md:h-4" })}
                                        </div>
                                    </div>
                                    {/* Content */}
                                    <div className="p-3 md:p-5 flex flex-col flex-grow">
                                        <h4 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors line-clamp-2">{sub.title}</h4>
                                        <p className="text-gray-400 text-sm mb-4 line-clamp-3 leading-relaxed">{sub.description}</p>

                                        {sub.features && (
                                            <div className="mb-4 space-y-1 block">
                                                {sub.features.slice(0, 2).map((feat, i) => (
                                                    <div key={i} className="flex items-center gap-2 text-xs text-gray-500">
                                                        <div className="w-1 h-1 rounded-full bg-cyan-400" />
                                                        <span className="line-clamp-1">{feat}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        )}

                                        <Link
                                            href={`/services/detail?id=${sub.id}`}
                                            className="mt-auto w-full py-2 rounded-lg bg-white/5 hover:bg-cyan-500/10 border border-white/10 hover:border-cyan-500/50 text-cyan-400 text-sm font-medium flex items-center justify-center gap-1.5 transition-all group/link"
                                        >
                                            Learn more <ArrowRight className="w-3 h-3 group-hover/link:translate-x-0.5 transition-transform" />
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        // Standard Detail View
                        <div className="flex flex-col md:flex-row gap-8">
                            <div className="flex-1">
                                <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                                    <Zap className="w-5 h-5 text-cyan-400" />
                                    Key Capabilities
                                </h4>
                                <ul className="space-y-3">
                                    {service.details.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start gap-3 text-gray-400">
                                            <CheckCircle2 className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="w-full md:w-1/3">
                                <div className="p-6 rounded-xl bg-white/5 border border-white/10 h-full">
                                    <h4 className="text-sm font-bold text-gray-300 mb-4 uppercase tracking-wider flex items-center gap-2">
                                        <Lightbulb className="w-4 h-4" /> Visual Metaphor
                                    </h4>
                                    <div className="text-center py-8">
                                        <span className="text-4xl mb-4 block">✨</span>
                                        <p className="text-cyan-400 font-mono text-lg">{service.details.visualMetaphor}</p>
                                    </div>
                                    <div className="mt-6 pt-6 border-t border-white/10">
                                        <h4 className="text-sm font-bold text-gray-300 mb-2 uppercase tracking-wider">Best Example</h4>
                                        <p className="text-gray-400 text-sm italic">&quot;{service.example}&quot;</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </motion.div>
        </motion.div>
    );
};

// --- Service Card Component ---
const ServiceCard = ({ service, onClick }: { service: ServiceData; onClick: () => void }) => {
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
            <div className="relative aspect-video w-full overflow-hidden border-b border-white/10 shrink-0">
                <Image
                    src={service.image}
                    alt={service.title}
                    fill
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
                    <button
                        onClick={onClick}
                        className="w-full py-1.5 px-3 md:py-2 md:px-4 rounded-lg border border-cyan-500/30 bg-cyan-950/20 hover:bg-cyan-500 hover:text-black hover:border-cyan-400 text-cyan-400 transition-all duration-300 flex items-center justify-center gap-2 group/btn shadow-[0_0_10px_rgba(0,240,255,0.1)]"
                    >
                        <span className="text-xs md:text-sm font-bold uppercase tracking-wider">Know More</span>
                        <ArrowRight className="w-3 h-3 md:w-4 md:h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                </div>
            </div>
        </div>
    );
};

const Services = () => {
    const [selectedService, setSelectedService] = useState<ServiceData | null>(null);

    return (
        <section id="services" className="py-24 bg-black relative overflow-hidden">
            <Background3D />

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

                    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8 max-w-7xl mx-auto">
                        {businessServices.map((service, index) => (
                            <motion.div
                                key={service.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="h-full"
                            >
                                <ServiceCard service={service} onClick={() => setSelectedService(service)} />
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

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">
                        {individualServices.map((service, index) => (
                            <motion.div
                                key={service.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="h-full"
                            >
                                <ServiceCard service={service} onClick={() => setSelectedService(service)} />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Modal */}
            <AnimatePresence>
                {selectedService && (
                    <ServiceModal service={selectedService} onClose={() => setSelectedService(null)} />
                )}
            </AnimatePresence>
        </section>
    );
};

export default Services;