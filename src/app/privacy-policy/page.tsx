"use client";

import React from "react";
import Background3D from "@/components/Background3D";
import { Lock, Eye, Shield, Server, Globe, Mail } from "lucide-react";

export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen bg-black text-gray-300 relative overflow-hidden font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
            <Background3D />

            {/* Background Glows */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-purple-600/5 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-cyan-500/5 rounded-full blur-[120px] -translate-x-1/2 translate-y-1/2 pointer-events-none" />

            <main className="container max-w-4xl mx-auto px-4 py-24 relative z-10">
                <header className="mb-16 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-950/30 text-cyan-300 text-sm font-medium backdrop-blur-md mb-8 shadow-[0_0_20px_rgba(0,240,255,0.2)]">
                        <Lock className="w-4 h-4 text-cyan-400" />
                        <span className="uppercase tracking-wider">Data Protection</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 tracking-tight drop-shadow-2xl">
                        Privacy <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400">Policy</span>
                    </h1>
                    <p className="text-gray-400 text-lg">Last Updated: 12/10/2025 | Website: www.astrasai.in</p>
                    <div className="mt-8 p-4 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm max-w-2xl mx-auto text-sm text-gray-400">
                        Astras AI (“We”, “Us”, “Our”) is committed to protecting your privacy in compliance with the Information Technology (Reasonable Security Practices and Procedures) Rules, 2011 and IT Act 2000 (Amended).
                    </div>
                </header>

                <div className="prose prose-invert prose-lg max-w-none space-y-12">

                    {/* Section 1 */}
                    <section className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-10 hover:border-purple-500/30 transition-colors duration-300">
                        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-500/20 text-purple-400 text-sm font-mono">01</span>
                            Information We Collect
                        </h2>

                        <div className="space-y-8">
                            <div>
                                <h3 className="text-lg font-bold text-purple-300 mb-3 flex items-center gap-2"><Eye className="w-4 h-4" /> 1.1 Personal Information</h3>
                                <p className="text-sm text-gray-400 mb-3">We may collect:</p>
                                <div className="flex flex-wrap gap-2">
                                    {["Name", "Email address", "Phone number", "Company name", "Billing details", "IP address"].map((item, idx) => (
                                        <span key={idx} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300">{item}</span>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h3 className="text-lg font-bold text-purple-300 mb-3 flex items-center gap-2"><Lock className="w-4 h-4" /> 1.2 Sensitive Personal Data (SPDI)</h3>
                                <p className="text-sm text-gray-400 mb-3">Only if required (and with consent):</p>
                                <div className="flex flex-wrap gap-2">
                                    {["Financial information (UPI, bank details)", "Passwords (encrypted)"].map((item, idx) => (
                                        <span key={idx} className="px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs text-purple-300">{item}</span>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h3 className="text-lg font-bold text-purple-300 mb-3 flex items-center gap-2"><Server className="w-4 h-4" /> 1.3 Non-Personal & Technical Data</h3>
                                <div className="flex flex-wrap gap-2">
                                    {["Browser type", "Device type", "Cookies & analytics data", "Usage patterns", "Location (approximate)"].map((item, idx) => (
                                        <span key={idx} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300">{item}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Section 2 */}
                    <section className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-10 hover:border-purple-500/30 transition-colors duration-300">
                        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-500/20 text-purple-400 text-sm font-mono">02</span>
                            How We Use Your Information
                        </h2>
                        <div className="grid md:grid-cols-2 gap-4">
                            {[
                                "Provide and improve our AI services",
                                "Communicate project updates & support",
                                "Enhance user experience",
                                "Process payments",
                                "Ensure security and fraud prevention",
                                "Comply with legal requirements in India"
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-center gap-3 p-3 bg-white/5 rounded-xl border border-white/5">
                                    <div className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
                                    <span className="text-sm text-gray-300">{item}</span>
                                </div>
                            ))}
                        </div>
                        <p className="mt-6 text-sm text-gray-400 italic border-t border-white/5 pt-4">We do not sell or rent your personal data to third parties.</p>
                    </section>

                    {/* Section 3 & 4 */}
                    <div className="grid md:grid-cols-2 gap-8">
                        <section className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:border-purple-500/30 transition-colors duration-300">
                            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-500/20 text-purple-400 text-sm font-mono">03</span>
                                Cookies & Tracking Tools
                            </h2>
                            <p className="text-sm text-gray-400 mb-3">We use cookies for:</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["Website functionality", "Analytics", "Preference storage", "Session management"].map((item, idx) => (
                                    <span key={idx} className="px-2 py-1 rounded bg-white/5 text-xs text-gray-400">{item}</span>
                                ))}
                            </div>
                            <p className="text-xs text-gray-500">You may disable cookies via your browser, but some features may not work properly.</p>
                        </section>

                        <section className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:border-purple-500/30 transition-colors duration-300">
                            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-500/20 text-purple-400 text-sm font-mono">04</span>
                                Data Sharing & Disclosure
                            </h2>
                            <p className="text-sm text-gray-400 mb-3">We may share data with:</p>
                            <ul className="space-y-2 mb-4">
                                <li className="text-sm text-gray-300 flex gap-2"><span className="text-purple-500">•</span> Trusted third-party service providers (cloud hosting, email services, payment gateways)</li>
                                <li className="text-sm text-gray-300 flex gap-2"><span className="text-purple-500">•</span> Legal authorities, when required</li>
                            </ul>
                            <p className="text-xs text-gray-500">We ensure all third parties follow reasonable security practices as per Indian law.</p>
                        </section>
                    </div>

                    {/* Section 5 */}
                    <section className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-10 hover:border-purple-500/30 transition-colors duration-300">
                        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-500/20 text-purple-400 text-sm font-mono">05</span>
                            Data Storage & Security
                        </h2>
                        <div className="flex flex-col md:flex-row items-center gap-8">
                            <Shield className="w-16 h-16 text-purple-500/50" />
                            <div className="flex-1">
                                <p className="text-gray-300 mb-4">We use reasonable security measures including:</p>
                                <div className="grid grid-cols-2 gap-4">
                                    {["SSL encryption", "Secure servers", "Access controls", "Regular audits"].map((item, idx) => (
                                        <div key={idx} className="flex items-center gap-2 text-sm text-purple-200">
                                            <span className="w-1.5 h-1.5 bg-green-400 rounded-full" /> {item}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <p className="mt-6 text-sm text-gray-500 text-center italic">While we follow industry practices, no online system is 100% secure.</p>
                    </section>

                    {/* Section 6 & 7 & 8 */}
                    <div className="grid md:grid-cols-3 gap-6">
                        <section className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 hover:border-purple-500/30 transition-colors duration-300">
                            <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                                <span className="text-purple-400">06.</span> Data Retention
                            </h2>
                            <p className="text-xs text-gray-400 mb-2">We retain your information only as required for services, legal compliance, and audits.</p>
                            <p className="text-xs text-purple-300">You may request deletion anytime.</p>
                        </section>

                        <section className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 hover:border-purple-500/30 transition-colors duration-300">
                            <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                                <span className="text-purple-400">07.</span> Your Rights
                            </h2>
                            <ul className="text-xs text-gray-400 space-y-1 mb-3">
                                <li>• Request access/corrections</li>
                                <li>• Withdraw consent</li>
                                <li>• Request deletion</li>
                            </ul>
                            <a href="mailto:support@astrasai.in" className="text-xs text-purple-400 hover:text-white transition-colors">support@astrasai.in</a>
                        </section>

                        <section className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 hover:border-purple-500/30 transition-colors duration-300">
                            <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                                <span className="text-purple-400">08.</span> Children&apos;s Privacy
                            </h2>
                            <p className="text-xs text-gray-400">Our services are NOT intended for children under 18. We do not knowingly collect their data.</p>
                        </section>
                    </div>

                    {/* Section 9 & 10 */}
                    <section className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-10 hover:border-purple-500/30 transition-colors duration-300">
                        <div className="flex flex-col gap-6">
                            <div>
                                <h2 className="text-xl font-bold text-white mb-2 flex items-center gap-3">
                                    <span className="text-purple-400">09.</span> Third-Party Links
                                </h2>
                                <p className="text-sm text-gray-400">Our site may contain links to third-party websites. We are not responsible for their privacy practices or content.</p>
                            </div>
                            <div>
                                <h2 className="text-xl font-bold text-white mb-2 flex items-center gap-3">
                                    <span className="text-purple-400">10.</span> Changes to This Policy
                                </h2>
                                <p className="text-sm text-gray-400">We may update this Policy occasionally. The latest version will always be available on <span className="text-white">www.astrasai.in</span>.</p>
                            </div>
                        </div>
                    </section>

                    {/* Contact Section */}
                    <section className="bg-black border border-white/10 rounded-3xl p-8 md:p-10 text-center">
                        <h2 className="text-2xl font-bold text-white mb-6">Contact Us</h2>
                        <p className="text-gray-400 mb-8">If you have questions about this Privacy Policy:</p>
                        <div className="flex flex-col md:flex-row justify-center gap-6">
                            <a href="mailto:privacy@astrasai.in" className="flex items-center gap-3 px-6 py-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors border border-white/5 hover:border-purple-500/30 group">
                                <Mail className="w-5 h-5 text-purple-400" />
                                <span className="text-white group-hover:text-purple-400 transition-colors">privacy@astrasai.in</span>
                            </a>
                            <div className="flex items-center gap-3 px-6 py-4 rounded-xl bg-white/5 border border-white/5">
                                <Globe className="w-5 h-5 text-gray-500" />
                                <span className="text-gray-400">Bengaluru, Karnataka, India</span>
                            </div>
                        </div>
                    </section>

                </div>
            </main>
        </div>
    );
}
