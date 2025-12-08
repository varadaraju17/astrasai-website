"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Instagram, Linkedin, MessageCircle, Twitter, ArrowRight, Mail, Phone, MapPin } from "lucide-react";
import Background3D from "./Background3D";

const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/10 py-12 relative overflow-hidden">
      <Background3D />

      {/* Background Elements */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />

      <div className="container-width relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Brand Column */}
          <div className="space-y-6">
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
            <div className="flex gap-4">
              {[
                { icon: <Instagram className="w-4 h-4" />, href: "https://www.instagram.com/astrasai" },
                { icon: <Linkedin className="w-4 h-4" />, href: "https://www.linkedin.com/company/astrasai" },
                { icon: <MessageCircle className="w-4 h-4" />, href: "https://wa.me/918197489255" },
                { icon: <Twitter className="w-4 h-4" />, href: "https://twitter.com/astrasai" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-cyan-400 transition-all duration-300 border border-white/5 hover:border-cyan-500/30 hover:shadow-[0_0_20px_rgba(0,240,255,0.1)]"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6 text-base flex items-center gap-2">
              <span className="w-1 h-4 bg-cyan-500 rounded-full" />
              Company
            </h4>
            <ul className="space-y-3">
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
            <ul className="space-y-3">
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

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold mb-6 text-base flex items-center gap-2">
              <span className="w-1 h-4 bg-cyan-500 rounded-full" />
              Contact
            </h4>
            <ul className="space-y-4">
              <li>
                <a href="mailto:services@astrasai.in" className="group flex items-start gap-3 text-gray-400 hover:text-cyan-400 transition-colors">
                  <div className="p-1.5 rounded-md bg-white/5 group-hover:bg-cyan-500/10 transition-colors mt-0.5">
                    <Mail className="w-3.5 h-3.5" />
                  </div>
                  <div className="text-sm">
                    <span className="block text-[10px] text-gray-500 uppercase tracking-wider mb-0.5">Email Us</span>
                    services@astrasai.in
                  </div>
                </a>
              </li>
              <li>
                <a href="tel:+918197489255" className="group flex items-start gap-3 text-gray-400 hover:text-cyan-400 transition-colors">
                  <div className="p-1.5 rounded-md bg-white/5 group-hover:bg-cyan-500/10 transition-colors mt-0.5">
                    <Phone className="w-3.5 h-3.5" />
                  </div>
                  <div className="text-sm">
                    <span className="block text-[10px] text-gray-500 uppercase tracking-wider mb-0.5">Call Us</span>
                    +91 8197489255
                  </div>
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <div className="p-1.5 rounded-md bg-white/5 mt-0.5">
                  <MapPin className="w-3.5 h-3.5" />
                </div>
                <div className="text-sm">
                  <span className="block text-[10px] text-gray-500 uppercase tracking-wider mb-0.5">Visit Us</span>
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