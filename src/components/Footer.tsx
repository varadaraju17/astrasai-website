"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Instagram, Linkedin, MessageCircle, ArrowRight, Mail, Phone, MapPin } from "lucide-react";
import Background3D from "./Background3D";

const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/10 py-20 relative overflow-hidden">
      <Background3D />

      {/* Background Elements */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />

      {/* Watermark */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/3 pointer-events-none select-none opacity-[0.03]">
        <span className="text-[20vw] font-display font-bold text-white tracking-tighter leading-none whitespace-nowrap">
          ASTRAS AI
        </span>
      </div>

      <div className="container-width relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 lg:gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6 col-span-2 md:col-span-1 lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 group w-fit">
              <div className="relative w-10 h-10">
                <Image
                  src="/logo.png"
                  alt="Astras AI Logo"
                  width={40}
                  height={40}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-display text-2xl font-bold tracking-wider text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-600 transition-all duration-300">
                ASTRAS<span className="text-cyan-400">AI</span>
              </span>
            </Link>
            <p className="text-gray-400 leading-relaxed text-sm">
              We build AI agents, websites, and apps that automate your work and grow your revenue.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6 text-base flex items-center gap-2">
              <span className="w-1 h-4 bg-cyan-500 rounded-full" />
              Company
            </h4>
            <ul className="space-y-4">
              {['About', 'Services', 'Features', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-cyan-400 transition-colors flex items-center gap-2 group text-sm"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-cyan-400" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{item}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-6 text-base flex items-center gap-2">
              <span className="w-1 h-4 bg-purple-500 rounded-full" />
              Services
            </h4>
            <ul className="space-y-4">
              {['AI Agents', 'Web Development', 'Consulting', 'Marketing'].map((item) => (
                <li key={item}>
                  <Link
                    href="/services"
                    className="text-gray-400 hover:text-purple-400 transition-colors flex items-center gap-2 group text-sm"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-purple-400" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{item}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect With Us */}
          <div>
            <h4 className="text-white font-bold mb-6 text-base flex items-center gap-2">
              <span className="w-1 h-4 bg-pink-500 rounded-full" />
              Connect
            </h4>
            <ul className="space-y-4">
              {[
                { name: 'Instagram', icon: <Instagram className="w-4 h-4" />, href: "https://www.instagram.com/astras_ai/" },
                { name: 'LinkedIn', icon: <Linkedin className="w-4 h-4" />, href: "https://www.linkedin.com/company/astras-ai-tech/" },
                {
                  name: 'X (Twitter)', icon: (
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  ), href: "https://x.com/astras_ai"
                },
                { name: 'WhatsApp', icon: <MessageCircle className="w-4 h-4" />, href: "https://wa.me/918197489255" },
              ].map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-pink-400 transition-colors flex items-center gap-2 group text-sm"
                  >
                    <span className="p-1.5 rounded-md bg-white/5 group-hover:bg-pink-500/10 transition-colors border border-white/5 group-hover:border-pink-500/20">
                      {item.icon}
                    </span>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{item.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold mb-6 text-base flex items-center gap-2">
              <span className="w-1 h-4 bg-cyan-500 rounded-full" />
              Contact
            </h4>
            <ul className="space-y-5">
              <li>
                <a href="mailto:services@astrasai.in" className="group flex items-start gap-3 text-gray-400 hover:text-cyan-400 transition-colors">
                  <div className="p-2 rounded-md bg-white/5 group-hover:bg-cyan-500/10 transition-colors mt-0.5 border border-white/5 group-hover:border-cyan-500/20">
                    <Mail className="w-3.5 h-3.5" />
                  </div>
                  <div className="text-sm">
                    <span className="block text-[10px] text-gray-500 uppercase tracking-wider mb-0.5 font-medium">Email Us</span>
                    services@astrasai.in
                  </div>
                </a>
              </li>
              <li>
                <a href="tel:+918197489255" className="group flex items-start gap-3 text-gray-400 hover:text-cyan-400 transition-colors">
                  <div className="p-2 rounded-md bg-white/5 group-hover:bg-cyan-500/10 transition-colors mt-0.5 border border-white/5 group-hover:border-cyan-500/20">
                    <Phone className="w-3.5 h-3.5" />
                  </div>
                  <div className="text-sm">
                    <span className="block text-[10px] text-gray-500 uppercase tracking-wider mb-0.5 font-medium">Call Us</span>
                    +91 8197489255
                  </div>
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <div className="p-2 rounded-md bg-white/5 mt-0.5 border border-white/5">
                  <MapPin className="w-3.5 h-3.5" />
                </div>
                <div className="text-sm">
                  <span className="block text-[10px] text-gray-500 uppercase tracking-wider mb-0.5 font-medium">Visit Us</span>
                  Bangalore, India
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-xs">
          <p>&copy; {new Date().getFullYear()} AstrasAI. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-cyan-400 transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-cyan-400 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;