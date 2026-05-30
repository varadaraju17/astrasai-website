"use client";

import Link from "next/link";


/* ────────────────────────────────────────────────────────────────────────────
   ASTRAS AI — Hero Section
   Design philosophy: Linear.app × Vercel × Stripe
   Stunning cinematic graphics, deep space gradients, holographic mockup.
   ──────────────────────────────────────────────────────────────────────────── */

const SERVICES = [
  "AI Websites",
  "Mobile Apps",
  "AI Agents",
  "Workflow Automation",
  "Digital Marketing",
  "SEO Optimization",
  "Startup MVPs",
  "Business Systems",
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex items-center justify-center w-full overflow-hidden bg-black"
      style={{ minHeight: "100svh" }}
    >
      {/* ── Ambient Light Layer ── */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 select-none">
        {/* Subtle Tech Grid */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 255, 255, 0.08) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
            maskImage: "radial-gradient(circle 60% at 50% 50%, black, transparent)",
            WebkitMaskImage: "radial-gradient(circle 60% at 50% 50%, black, transparent)",
          }}
        />

        {/* Top-left cyan glow */}
        <div
          className="absolute -top-[30%] -left-[15%] h-[80vh] w-[80vh] rounded-full opacity-[0.08]"
          style={{
            background: "radial-gradient(circle, #00f0ff 0%, transparent 70%)",
            filter: "blur(90px)",
          }}
        />
        {/* Bottom-right purple glow */}
        <div
          className="absolute -bottom-[25%] -right-[10%] h-[90vh] w-[90vh] rounded-full opacity-[0.07]"
          style={{
            background: "radial-gradient(circle, #9d4edd 0%, transparent 70%)",
            filter: "blur(110px)",
          }}
        />
        {/* Center highlight — very subtle */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[60vh] w-[120vw] opacity-[0.04]"
          style={{
            background: "radial-gradient(ellipse at center, #ffffff 0%, transparent 60%)",
          }}
        />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center px-6 py-20 sm:py-32 text-center sm:px-10 lg:px-8">
        {/* Status pill */}
        <div className="mb-10 inline-flex items-center gap-2.5 rounded-full border border-white/[0.08] bg-white/[0.03] px-5 py-2 backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          <span className="text-[11px] font-medium tracking-wide text-gray-400 sm:text-xs">
            Bangalore&apos;s #1 AI Agency
          </span>
        </div>

        {/* H1 — massive, tight, modern */}
        <h1 className="mx-auto max-w-5xl text-[2.5rem] font-extrabold leading-[1.05] tracking-[-0.03em] text-white sm:text-6xl md:text-7xl lg:text-[5.5rem]">
          We build{" "}
          <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
            AI-Powered Digital Weapons
          </span>{" "}
          that multiply your{" "}
          <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-amber-300 bg-clip-text text-transparent">
            growth
          </span>
        </h1>

        {/* Sub-copy */}
        <p className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-gray-400 sm:text-lg md:text-xl">
          <span className="hidden sm:inline">
            High-converting <span className="text-cyan-400 font-semibold">AI Websites</span> · Cross-platform <span className="text-indigo-400 font-semibold">Mobile Apps</span> · Autonomous <span className="text-purple-400 font-semibold">AI Agents</span>. We construct premium, speed-optimized digital architecture that multiplies your throughput.
          </span>
          <span className="sm:hidden">
            High-converting AI Websites, Mobile Apps, and Autonomous AI Agents engineered for hyper-growth.
          </span>
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <Link
            href="/contact"
            className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-sky-400 via-cyan-400 to-blue-500 px-8 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] shadow-[0_0_20px_rgba(0,240,255,0.35)] hover:shadow-[0_0_35px_rgba(0,240,255,0.6)]"
          >
            {/* Shimmer effect */}
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            <span className="relative">Start Your Project</span>
            <svg className="relative h-4 w-4 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
          </Link>

          <a
            href="https://wa.me/918197489255"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-8 py-3.5 text-sm font-semibold text-gray-300 backdrop-blur-sm transition-colors hover:border-white/20 hover:text-white"
          >
            <svg className="h-4 w-4 text-[#25D366]" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            <span>WhatsApp Us</span>
          </a>
        </div>

        {/* ── Service Tags — fluid wrap ── */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-3">
          {SERVICES.map((s) => (
            <span
              key={s}
              className="rounded-full border border-sky-400/30 bg-sky-950/20 px-4 py-1.5 text-[11px] font-semibold tracking-wide text-sky-400 sm:text-xs shadow-[0_0_15px_rgba(56,189,248,0.05)] hover:border-sky-400 hover:bg-sky-400/10 hover:text-white hover:shadow-[0_0_20px_rgba(56,189,248,0.3)] transition-all duration-300 cursor-default"
            >
              {s}
            </span>
          ))}
        </div>
      </div>

      {/* ── Bottom gradient fade ── */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-20 h-24 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}
