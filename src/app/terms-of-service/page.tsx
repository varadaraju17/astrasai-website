"use client";

import React from "react";
import Background3D from "@/components/Background3D";
import { Scale, Globe, Mail } from "lucide-react";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-black text-gray-300 relative overflow-hidden font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      <Background3D />

      {/* Background Glows */}
      <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-cyan-500/5 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-purple-600/5 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2 pointer-events-none" />

      <main className="container max-w-4xl mx-auto px-4 py-24 relative z-10">
        <header className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-950/30 text-cyan-300 text-sm font-medium backdrop-blur-md mb-8 shadow-[0_0_20px_rgba(0,240,255,0.2)]">
            <Scale className="w-4 h-4 text-cyan-400" />
            <span className="uppercase tracking-wider">Legal Agreements</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 tracking-tight drop-shadow-2xl">
            Terms of <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">Service</span>
          </h1>
          <p className="text-gray-400 text-lg">Last Updated: 12/10/2025 | Website: www.astrasai.in</p>
        </header>

        <div className="prose prose-invert prose-lg max-w-none space-y-12">
          {/* Section 1 */}
          <section className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-10 hover:border-cyan-500/30 transition-colors duration-300">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-cyan-500/20 text-cyan-400 text-sm font-mono">01</span>
              Acceptance of Terms
            </h2>
            <p className="text-gray-300 leading-relaxed">
              By accessing or using <span className="text-cyan-400 font-medium">www.astrasai.in</span> (&quot;Website&quot;) and our AI-powered products, services, or solutions (&quot;Services&quot;), you agree to be bound by these Terms of Service. If you do not agree, please do not use our Services.
            </p>
          </section>

          {/* Section 2 */}
          <section className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-10 hover:border-cyan-500/30 transition-colors duration-300">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-cyan-500/20 text-cyan-400 text-sm font-mono">02</span>
              Eligibility
            </h2>
            <div className="space-y-4 text-gray-300">
              <p>You must be:</p>
              <ul className="list-none space-y-3 pl-4">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-2.5" />
                  At least 18 years old
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-2.5" />
                  Legally capable of entering into a binding contract under Indian law.
                </li>
              </ul>
              <p className="mt-4 pt-4 border-t border-white/5 text-sm">
                If you use our Services on behalf of a business, you confirm that you have the authority to bind that business.
              </p>
            </div>
          </section>

          {/* Section 3 */}
          <section className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-10 hover:border-cyan-500/30 transition-colors duration-300">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-cyan-500/20 text-cyan-400 text-sm font-mono">03</span>
              Services Provided
            </h2>
            <p className="mb-4">Astras AI offers AI-driven solutions including (but not limited to):</p>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "AI-powered website development",
                "AI-powered applications",
                "Dynamic websites",
                "E-commerce websites",
                "Web applications & PWAs",
                "Headless CMS",
                "Custom software development",
                "Digital automation tools"
              ].map((service, idx) => (
                <div key={idx} className="flex items-center gap-3 p-3 bg-white/5 rounded-xl border border-white/5">
                  <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full" />
                  <span className="text-sm">{service}</span>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm text-gray-400 italic">We may update or modify our Services at any time without prior notice.</p>
          </section>

          {/* Section 4 */}
          <section className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-10 hover:border-cyan-500/30 transition-colors duration-300">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-cyan-500/20 text-cyan-400 text-sm font-mono">04</span>
              User Obligations
            </h2>
            <p className="mb-4 text-red-300/80">You agree NOT to:</p>
            <ul className="grid md:grid-cols-2 gap-4">
              {[
                "Misuse or reverse-engineer our platform",
                "Upload harmful or malicious code",
                "Violate any applicable Indian laws",
                "Use our services for illegal, harmful, defamatory, or fraudulent purposes"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-gray-300 bg-red-500/5 p-3 rounded-lg border border-red-500/10">
                  <span className="text-red-400 font-bold">✕</span> {item}
                </li>
              ))}
            </ul>
            <p className="mt-6 pt-4 border-t border-white/5 text-sm">
              You are responsible for maintaining confidentiality of your login credentials.
            </p>
          </section>

          {/* Section 5 */}
          <section className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-10 hover:border-cyan-500/30 transition-colors duration-300">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-cyan-500/20 text-cyan-400 text-sm font-mono">05</span>
              Payments, Refunds & Billing
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold text-cyan-300 mb-2">Billing</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-400">
                  <li>All prices will be clearly communicated before project initiation.</li>
                  <li>Payments must be made as per mutually agreed invoices or proposals.</li>
                </ul>
              </div>
              <div className="p-4 bg-cyan-900/10 rounded-xl border border-cyan-500/20">
                <h3 className="text-lg font-bold text-cyan-300 mb-2">Refund Policy</h3>
                <ul className="space-y-2 text-gray-400">
                  <li className="flex gap-2"><span className="text-cyan-500">•</span> Once the project development begins, payments are non-refundable.</li>
                  <li className="flex gap-2"><span className="text-cyan-500">•</span> Refunds may be issued only for services not delivered, subject to internal review.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 6 - 8 (Grouped for grid) */}
          <div className="grid md:grid-cols-2 gap-8">
            <section className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:border-cyan-500/30 transition-colors duration-300">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-cyan-500/20 text-cyan-400 text-sm font-mono">06</span>
                Intellectual Property Rights
              </h2>
              <ul className="space-y-3 text-sm text-gray-300">
                <li>All content, designs, AI models, code, and branding on the Website belong to Astras AI.</li>
                <li>You may not copy, redistribute, or resell our proprietary material without written permission.</li>
                <li>Any project delivered to clients becomes their property only after full payment.</li>
              </ul>
            </section>

            <section className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:border-cyan-500/30 transition-colors duration-300">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-cyan-500/20 text-cyan-400 text-sm font-mono">07</span>
                Third-Party Integrations
              </h2>
              <p className="text-sm text-gray-300 mb-3">Our services may integrate APIs, plugins, or tools from third parties (e.g., Google Cloud, OpenAI, payment gateways).</p>
              <p className="text-sm font-medium text-gray-400">We are not responsible for:</p>
              <p className="text-xs text-gray-500 mt-1">Availability • Pricing changes • Policy changes • Downtime or technical failures caused by third-party providers.</p>
            </section>
          </div>

          {/* Section 8 & 9 & 10 */}
          <section className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-10 hover:border-cyan-500/30 transition-colors duration-300">
            <div className="space-y-12">
              <div>
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-cyan-500/20 text-cyan-400 text-sm font-mono">08</span>
                  Limitation of Liability
                </h2>
                <p className="text-gray-300 mb-2">To the maximum extent allowed under Indian law:</p>
                <ul className="list-disc pl-5 space-y-1 text-gray-400 text-sm">
                  <li>Astras AI is not liable for any indirect, incidental, or consequential damages.</li>
                  <li>We do not guarantee uninterrupted or error-free service.</li>
                  <li>We are not liable for data loss, security breaches due to factors beyond our control, or misuse of services by users.</li>
                </ul>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-cyan-500/20 text-cyan-400 text-sm font-mono">09</span>
                    Indemnification
                  </h2>
                  <p className="text-sm text-gray-300">You agree to indemnify and hold Astras AI harmless from any legal claims, losses, or damages arising from your use of our Services or violation of these Terms.</p>
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-cyan-500/20 text-cyan-400 text-sm font-mono">10</span>
                    Termination
                  </h2>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>Astras AI may suspend or terminate your access if:</li>
                    <li className="text-red-400">• You violate the Terms</li>
                    <li className="text-red-400">• You misuse our platform</li>
                    <li className="text-red-400">• Required by law</li>
                    <li className="mt-2 text-gray-400 italic">You may stop using our Services at any time.</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Section 11 */}
          <section className="bg-gradient-to-br from-purple-900/20 to-cyan-900/20 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-10 hover:border-cyan-500/30 transition-colors duration-300">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-cyan-500/20 text-cyan-400 text-sm font-mono">11</span>
              Governing Law & Jurisdiction
            </h2>
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <Globe className="w-12 h-12 text-cyan-500 shrink-0 opacity-50" />
              <div>
                <p className="text-gray-300 mb-4">These Terms shall be governed by Indian law, specifically:</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 rounded-full bg-cyan-950/50 border border-cyan-500/30 text-cyan-400 text-xs">Information Technology Act, 2000</span>
                  <span className="px-3 py-1 rounded-full bg-cyan-950/50 border border-cyan-500/30 text-cyan-400 text-xs">Consumer Protection Act, 2019</span>
                </div>
                <p className="text-gray-300 font-medium">All disputes shall be subject to the exclusive jurisdiction of the courts in Bengaluru, Karnataka, India.</p>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="bg-black border border-white/10 rounded-3xl p-8 md:p-10 text-center">
            <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
            <p className="text-gray-400 mb-8">If you have questions regarding these Terms, contact:</p>
            <div className="flex flex-col md:flex-row justify-center gap-6">
              <a href="mailto:support@astrasai.in" className="flex items-center gap-3 px-6 py-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors border border-white/5 hover:border-cyan-500/30 group">
                <Mail className="w-5 h-5 text-cyan-400" />
                <span className="text-white group-hover:text-cyan-400 transition-colors">support@astrasai.in</span>
              </a>
              <a href="https://www.astrasai.in" className="flex items-center gap-3 px-6 py-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors border border-white/5 hover:border-cyan-500/30 group">
                <Globe className="w-5 h-5 text-purple-400" />
                <span className="text-white group-hover:text-purple-400 transition-colors">www.astrasai.in</span>
              </a>
            </div>
          </section>

        </div>
      </main>
    </div>
  );
}
