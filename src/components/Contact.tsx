"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Youtube, Linkedin, Instagram, ArrowRight, Loader2, MessageCircle, Facebook } from "lucide-react";
import Background3D from "./Background3D";

const Contact = () => {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        phone: "",
        companyName: "",
        service: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

    const services = [
        "AI Powered Website Development",
        "AI Powered App Development",
        "AI Integrated Custom Software",
        "AI Powered Ads & Marketing",
        "AI Agents & Automation",
        "AI Powered Startup MVP",
        "AI Social Media Management",
        "AI Business Automation",
        "AI Driven SEO",
        "AI Academic Projects",
        "AI Profile Makeover",
        "AI Career Mentorship",
        "Other"
    ];

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formState),
            });

            if (response.ok) {
                setSubmitStatus("success");
                setFormState({
                    name: "",
                    email: "",
                    phone: "",
                    companyName: "",
                    service: "",
                    message: ""
                });
            } else {
                setSubmitStatus("error");
            }
        } catch {
            setSubmitStatus("error");
        } finally {
            setIsSubmitting(false);
            setTimeout(() => setSubmitStatus("idle"), 5000);
        }
    };

    return (
        <section id="contact" className="py-20 lg:py-24 relative overflow-hidden bg-black">
            <Background3D />

            {/* Background Ambience */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px] -translate-x-1/2 translate-y-1/2" />
            </div>

            <div className="container-width relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-start">

                    {/* Left Column: Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:sticky lg:top-24"
                    >
                        <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-950/30 text-cyan-400 text-sm font-medium font-mono tracking-wider shadow-[0_0_15px_rgba(0,240,255,0.2)]">
                            {'// GET_IN_TOUCH'}
                        </div>

                        <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4 leading-tight">
                            Let&apos;s Build <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 text-glow-cyan">
                                The Future
                            </span>
                        </h2>

                        <p className="text-lg text-gray-400 mb-8 leading-relaxed max-w-lg">
                            Ready to transform your business with AI? Connect with us directly or fill out the form to get started.
                        </p>

                        <div className="space-y-6">
                            {/* Email */}
                            <div className="flex items-center gap-5 group">
                                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500 group-hover:text-black transition-all duration-300 shadow-[0_0_10px_rgba(0,240,255,0.1)] group-hover:shadow-[0_0_20px_rgba(0,240,255,0.4)]">
                                    <Mail className="w-4 h-4" />
                                </div>
                                <div>
                                    <h3 className="text-base font-bold text-white">Email</h3>
                                    <a href="mailto:services@astrasai.in" className="text-gray-400 hover:text-cyan-400 transition-colors font-mono text-base">
                                        services@astrasai.in
                                    </a>
                                </div>
                            </div>

                            {/* Phone */}
                            <div className="flex items-center gap-5 group">
                                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-purple-400 group-hover:bg-purple-500 group-hover:text-black transition-all duration-300 shadow-[0_0_10px_rgba(168,85,247,0.1)] group-hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]">
                                    <Phone className="w-4 h-4" />
                                </div>
                                <div>
                                    <h3 className="text-base font-bold text-white">Phone</h3>
                                    <a href="tel:+918197489255" className="text-gray-400 hover:text-purple-400 transition-colors font-mono text-base">
                                        +91 81974 89255
                                    </a>
                                </div>
                            </div>

                            {/* WhatsApp */}
                            <div className="flex items-center gap-5 group">
                                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-green-500 group-hover:bg-green-500 group-hover:text-black transition-all duration-300 shadow-[0_0_10px_rgba(34,197,94,0.1)] group-hover:shadow-[0_0_20px_rgba(34,197,94,0.4)]">
                                    <MessageCircle className="w-4 h-4" />
                                </div>
                                <div>
                                    <h3 className="text-base font-bold text-white">WhatsApp</h3>
                                    <a
                                        href="https://wa.me/918197489255"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-400 hover:text-green-500 transition-colors font-mono text-base"
                                    >
                                        Chat with us
                                    </a>
                                </div>
                            </div>

                            {/* Social Links */}
                            <div className="pt-6 border-t border-white/10">
                                <h3 className="text-base font-bold text-white mb-4">Connect With Us</h3>
                                <div className="flex flex-wrap gap-4">
                                    <a
                                        href="https://www.instagram.com/astrasai"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-3 text-gray-400 hover:text-pink-500 transition-colors group"
                                    >
                                        <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-pink-500/50 transition-colors">
                                            <Instagram className="w-4 h-4" />
                                        </div>
                                        <span className="font-medium text-sm">Instagram</span>
                                    </a>

                                    <a
                                        href="https://www.facebook.com/astras.ai17"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-3 text-gray-400 hover:text-blue-600 transition-colors group"
                                    >
                                        <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-blue-600/50 transition-colors">
                                            <Facebook className="w-4 h-4" />
                                        </div>
                                        <span className="font-medium text-sm">Facebook</span>
                                    </a>

                                    <a
                                        href="https://www.linkedin.com/company/astrasai"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-3 text-gray-400 hover:text-blue-500 transition-colors group"
                                    >
                                        <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-blue-500/50 transition-colors">
                                            <Linkedin className="w-4 h-4" />
                                        </div>
                                        <span className="font-medium text-sm">LinkedIn</span>
                                    </a>

                                    <a
                                        href="https://www.youtube.com/@astrasai"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-3 text-gray-400 hover:text-red-500 transition-colors group"
                                    >
                                        <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-red-500/50 transition-colors">
                                            <Youtube className="w-4 h-4" />
                                        </div>
                                        <span className="font-medium text-sm">YouTube</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-600/20 rounded-3xl blur-xl opacity-50" />

                        <div className="relative bg-black/60 backdrop-blur-xl border border-cyan-500/20 p-6 md:p-8 rounded-3xl shadow-[0_0_30px_rgba(0,240,255,0.1)]">
                            <h3 className="text-xl font-bold text-white mb-6">Send a Message</h3>

                            <form onSubmit={handleSubmit} className="space-y-3">
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="space-y-1">
                                        <label className="text-[10px] font-medium text-gray-400 ml-1 uppercase tracking-wider">Full Name</label>
                                        <input
                                            type="text"
                                            required
                                            placeholder="John Doe"
                                            value={formState.name}
                                            onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                            className="w-full px-3 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-gray-600 focus:outline-none focus:border-cyan-500/50 focus:bg-white/10 transition-all text-xs"
                                        />
                                    </div>
                                    <div className="space-y-1">
                                        <label className="text-[10px] font-medium text-gray-400 ml-1 uppercase tracking-wider">Phone</label>
                                        <input
                                            type="tel"
                                            placeholder="+91 98765 43210"
                                            value={formState.phone}
                                            onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                                            className="w-full px-3 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-gray-600 focus:outline-none focus:border-cyan-500/50 focus:bg-white/10 transition-all text-xs"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-3">
                                    <div className="space-y-1">
                                        <label className="text-[10px] font-medium text-gray-400 ml-1 uppercase tracking-wider">Email</label>
                                        <input
                                            type="email"
                                            required
                                            placeholder="john@company.com"
                                            value={formState.email}
                                            onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                            className="w-full px-3 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-gray-600 focus:outline-none focus:border-cyan-500/50 focus:bg-white/10 transition-all text-xs"
                                        />
                                    </div>
                                    <div className="space-y-1">
                                        <label className="text-[10px] font-medium text-gray-400 ml-1 uppercase tracking-wider">Company</label>
                                        <input
                                            type="text"
                                            placeholder="Company Ltd."
                                            value={formState.companyName}
                                            onChange={(e) => setFormState({ ...formState, companyName: e.target.value })}
                                            className="w-full px-3 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-gray-600 focus:outline-none focus:border-cyan-500/50 focus:bg-white/10 transition-all text-xs"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-1">
                                    <label className="text-[10px] font-medium text-gray-400 ml-1 uppercase tracking-wider">Service Required</label>
                                    <div className="relative">
                                        <select
                                            required
                                            value={formState.service}
                                            onChange={(e) => setFormState({ ...formState, service: e.target.value })}
                                            className="w-full px-3 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-gray-600 focus:outline-none focus:border-cyan-500/50 focus:bg-white/10 transition-all appearance-none cursor-pointer text-xs"
                                        >
                                            <option value="" disabled className="bg-black text-gray-500">Select a service...</option>
                                            {services.map((service, idx) => (
                                                <option key={idx} value={service} className="bg-gray-900 text-white">
                                                    {service}
                                                </option>
                                            ))}
                                        </select>
                                        <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-1">
                                    <label className="text-[10px] font-medium text-gray-400 ml-1 uppercase tracking-wider">Message</label>
                                    <textarea
                                        required
                                        rows={3}
                                        placeholder="Tell us about your project..."
                                        value={formState.message}
                                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                        className="w-full px-3 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-gray-600 focus:outline-none focus:border-cyan-500/50 focus:bg-white/10 transition-all resize-none text-xs"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full group relative px-6 py-3.5 rounded-xl font-bold text-base tracking-wide overflow-hidden transition-all hover:scale-[1.02] disabled:opacity-70 disabled:hover:scale-100 text-white shadow-[0_0_20px_rgba(0,240,255,0.3)]"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
                                    <span className="relative z-10 flex items-center justify-center gap-2">
                                        {isSubmitting ? (
                                            <>
                                                <Loader2 className="w-4 h-4 animate-spin" />
                                                Sending...
                                            </>
                                        ) : (
                                            <>
                                                Send Message
                                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                            </>
                                        )}
                                    </span>
                                </button>

                                {submitStatus === "success" && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="p-3 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400 text-center text-xs font-medium"
                                    >
                                        Message sent successfully! We&apos;ll get back to you soon.
                                    </motion.div>
                                )}

                                {submitStatus === "error" && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-center text-xs font-medium"
                                    >
                                        Something went wrong. Please try again later.
                                    </motion.div>
                                )}
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
