"use client";

import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, Zap, Sparkles } from "lucide-react";
import { businessServices, individualServices } from "@/data/servicesData";
import { motion } from "framer-motion";

const ServiceDetailContent = () => {
    const searchParams = useSearchParams();
    const id = searchParams.get("id");

    // Find the sub-service data
    // Find the data
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let subService: any = undefined;

    // 1. Check if it's a main service
    const mainService = businessServices.find(s => s.id === id) || individualServices.find(s => s.id === id);

    if (mainService) {
        // Map main service to the structure expected by the UI
        subService = {
            id: mainService.id,
            title: mainService.title,
            tagline: mainService.benefit,
            image: mainService.image,
            icon: mainService.icon,
            description: mainService.desc,
            longDescription: mainService.details.extendedDesc,
            features: mainService.details.features,
            benefits: mainService.subServices?.map(s => s.title), // List sub-services as benefits
            process: undefined
        };
    } else {
        // 2. Search in sub-services
        for (const service of businessServices) {
            const found = service.subServices?.find((sub) => sub.id === id);
            if (found) {
                subService = found;
                break;
            }
        }

        // Search in individual services if not found
        if (!subService) {
            for (const service of individualServices) {
                const found = service.subServices?.find((sub) => sub.id === id);
                if (found) {
                    subService = found;
                    break;
                }
            }
        }
    }

    if (!subService) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-void text-white">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
                    <Link href="/#services" className="text-nebula-cyan hover:underline">
                        Return to Services
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-void pt-24 pb-20 relative overflow-hidden">
            {/* Background Elements */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-nebula-purple/20 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-nebula-cyan/20 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2" />
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03]" />
            </div>

            <div className="container-width relative z-10">
                {/* Back Button */}
                <Link
                    href="/#services"
                    className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors group"
                >
                    <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                    Back to Services
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                    {/* Left Column: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col gap-8"
                    >
                        {/* Header */}
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-nebula-cyan text-sm font-medium mb-4">
                                <Sparkles className="w-4 h-4" />
                                {subService.tagline}
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 leading-tight">
                                {subService.title}
                            </h1>
                            <p className="text-xl text-gray-300 leading-relaxed">
                                {subService.description}
                            </p>
                        </div>

                        {/* Long Description */}
                        {subService.longDescription && (
                            <div className="glass-panel-premium p-8 rounded-3xl">
                                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                                    <Zap className="w-6 h-6 text-nebula-purple" />
                                    Overview
                                </h3>
                                <p className="text-gray-400 leading-relaxed">
                                    {subService.longDescription}
                                </p>
                            </div>
                        )}

                        {/* Benefits */}
                        {subService.benefits && (
                            <div className="glass-panel-premium p-8 rounded-3xl">
                                <h3 className="text-2xl font-bold text-white mb-6">Key Benefits</h3>
                                <ul className="space-y-4">
                                    {subService.benefits.map((benefit, index) => (
                                        <li key={index} className="flex items-start gap-3 text-gray-300">
                                            <CheckCircle2 className="w-6 h-6 text-nebula-cyan shrink-0 mt-0.5" />
                                            <span>{benefit}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {/* Features List */}
                        {subService.features && (
                            <div className="glass-panel-premium p-8 rounded-3xl">
                                <h3 className="text-2xl font-bold text-white mb-6">Features</h3>
                                <ul className="grid grid-cols-1 gap-4">
                                    {subService.features.map((feature, index) => (
                                        <li key={index} className="flex items-center gap-3 text-gray-300 bg-white/5 p-4 rounded-xl border border-white/5">
                                            <div className="w-2 h-2 rounded-full bg-nebula-purple shrink-0" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {/* CTA */}
                        <div className="flex flex-col sm:flex-row gap-4 mt-4">
                            <Link
                                href="#contact"
                                className="btn-nebula-primary text-center justify-center"
                            >
                                Get Started
                            </Link>
                            <Link
                                href="#contact"
                                className="px-8 py-4 rounded-xl border border-white/10 text-white font-medium hover:bg-white/5 transition-colors text-center"
                            >
                                Book Consultation
                            </Link>
                        </div>
                    </motion.div>

                    {/* Right Column: Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="lg:sticky lg:top-32"
                    >
                        <div className="relative aspect-[4/3] w-full rounded-3xl overflow-hidden glass-panel-premium p-2 border border-white/10 shadow-2xl shadow-nebula-purple/20 group">
                            <div className="absolute inset-0 bg-gradient-to-br from-nebula-cyan/10 via-transparent to-nebula-purple/10 opacity-50 group-hover:opacity-100 transition-opacity duration-700" />

                            <div className="relative h-full w-full rounded-2xl overflow-hidden bg-void/50">
                                <Image
                                    src={subService.image}
                                    alt={subService.title}
                                    fill
                                    className="object-contain p-8 group-hover:scale-105 transition-transform duration-700"
                                />
                            </div>

                            {/* Floating Badge */}
                            <div className="absolute bottom-8 right-8 px-6 py-3 bg-black/60 backdrop-blur-xl border border-white/10 rounded-full text-white font-medium flex items-center gap-2 shadow-lg">
                                <Sparkles className="w-4 h-4 text-nebula-cyan" />
                                <span>AI Enhanced</span>
                            </div>
                        </div>

                        {/* Process/How it works (Optional, displayed below image on desktop) */}
                        {subService.process && (
                            <div className="mt-12">
                                <h3 className="text-2xl font-bold text-white mb-8">How It Works</h3>
                                <div className="space-y-6">
                                    {subService.process.map((step, index) => (
                                        <div key={index} className="flex gap-6 group">
                                            <div className="flex flex-col items-center">
                                                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-nebula-cyan font-bold group-hover:bg-nebula-cyan group-hover:text-black transition-colors duration-300">
                                                    {index + 1}
                                                </div>
                                                {index !== subService.process!.length - 1 && (
                                                    <div className="w-[1px] h-full bg-white/10 my-2 group-hover:bg-nebula-cyan/30 transition-colors" />
                                                )}
                                            </div>
                                            <div className="pb-8">
                                                <h4 className="text-lg font-bold text-white mb-2">{step.title}</h4>
                                                <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default function ServiceDetailPage() {
    return (
        <Suspense fallback={<div className="min-h-screen bg-void flex items-center justify-center text-white">Loading...</div>}>
            <ServiceDetailContent />
        </Suspense>
    );
}
