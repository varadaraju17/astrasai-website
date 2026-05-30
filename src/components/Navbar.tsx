"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronRight, ChevronDown, Sparkles, MessageSquare } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setIsServicesOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setIsServicesOpen(false);
    }, 150);
  };

  const services = [
    { name: "AI Websites", href: "/services/ai-website-development", desc: "Sleek, high-converting AI platforms." },
    { name: "Mobile Apps", href: "/services/mobile-app-development", desc: "Stunning iOS & Android native apps." },
    { name: "AI Agents", href: "/services/ai-agents", desc: "Autonomous bots working 24/7." },
    { name: "Digital Marketing", href: "/services/digital-marketing", desc: "AI growth targeting high conversion." },
    { name: "Business Automation", href: "/services/business-automation", desc: "Workflow orchestrations cutting manual effort." },
    { name: "Startup MVP", href: "/services/startup-mvp", desc: "Build & launch investor-ready MVPs." },
    { name: "SEO Optimization", href: "/services/seo-optimization", desc: "Command Page 1 of Search & AI engines." },
    { name: "Social Media", href: "/services/social-media", desc: "Active community building & brand pages." }
  ];

  const navLinks = [
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Pricing", href: "/pricing" },
    { name: "Case Studies", href: "/case-studies" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
        ? "bg-void/90 backdrop-blur-xl border-b border-white/5 py-3 shadow-[0_0_30px_rgba(0,240,255,0.1)]"
        : "bg-transparent py-5"
        } `}
    >
      <div className="container-width flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="relative group flex items-center gap-3">
          <div className="relative w-10 h-10">
            <Image
              src="/logo.webp"
              alt="Astras AI Logo"
              title="Astras AI Logo"
              width={40}
              height={40}
              priority
              className="w-full h-full object-contain relative z-10"
            />
            <div className="absolute inset-0 bg-hologram-cyan/40 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <span className="font-display text-2xl font-bold tracking-wider text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-hologram-cyan group-hover:to-hologram-purple transition-all duration-300">
            ASTRAS<span className="text-hologram-cyan">AI</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-4">
          <div className="flex items-center bg-white/5 rounded-full p-1 border border-white/5 backdrop-blur-md relative">
            {/* Services Dropdown Trigger */}
            <div
              className="relative rounded-full"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className={`relative px-4 py-2 text-sm font-medium transition-colors flex items-center gap-1 rounded-full ${isServicesOpen ? "text-hologram-cyan bg-white/5" : "text-gray-300 hover:text-white"
                  }`}
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isServicesOpen ? "rotate-180 text-hologram-cyan" : "text-gray-400"}`} />
              </button>

              {/* Mega Dropdown Menu */}
              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-1/2 -translate-x-1/2 top-full mt-3 w-[560px] bg-black/95 backdrop-blur-3xl border border-white/10 p-6 rounded-3xl shadow-[0_20px_50px_rgba(0,240,255,0.15)] z-50 text-left"
                  >
                    <div className="flex items-center justify-between mb-4 pb-2 border-b border-white/5">
                      <div className="flex items-center gap-2">
                        <Sparkles className="w-3.5 h-3.5 text-hologram-cyan animate-pulse" />
                        <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-hologram-cyan">
                          BRAHMASTRA AI SYSTEMS
                        </span>
                      </div>
                      <span className="text-[9px] text-gray-500 font-mono tracking-wider">ENTERPRISE SOLUTIONS</span>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      {services.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          onClick={() => setIsServicesOpen(false)}
                          className="group/item flex flex-col p-2.5 rounded-2xl hover:bg-white/5 border border-transparent hover:border-white/5 transition-all duration-200"
                        >
                          <span className="text-sm font-bold text-white group-hover/item:text-hologram-cyan transition-colors">
                            {item.name}
                          </span>
                          <span className="text-[10px] text-gray-500 leading-normal mt-0.5 group-hover/item:text-gray-400">
                            {item.desc}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="relative px-5 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors group rounded-full overflow-hidden"
              >
                <span className="relative z-10">{link.name}</span>
                <span className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-hologram-cyan shadow-[0_0_10px_#00F0FF] transition-all duration-300 group-hover:w-1/2" />
              </Link>
            ))}
          </div>

          {/* Dedicated Contact Button with Icon */}
          <Link
            href="/contact"
            className="relative group flex items-center gap-2 px-5 py-2 text-sm font-semibold rounded-full border border-hologram-cyan/30 bg-hologram-cyan/10 hover:bg-hologram-cyan/20 text-white transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] overflow-hidden"
          >
            <MessageSquare className="w-4 h-4 text-hologram-cyan group-hover:rotate-12 transition-transform duration-300" />
            <span className="relative z-10">Contact Us</span>
            <span className="absolute inset-0 bg-gradient-to-r from-hologram-cyan/20 to-hologram-purple/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white p-2 relative group"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          <div className="absolute inset-0 bg-hologram-cyan/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          {isMobileMenuOpen ? <X size={24} className="relative z-10" /> : <Menu size={24} className="relative z-10" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-void/95 backdrop-blur-xl border-b border-white/10 max-h-[75vh] overflow-y-auto"
          >
            <div className="container-width py-6 flex flex-col space-y-3">
              {/* Mobile Services Collapsible */}
              <div className="w-full">
                <button
                  onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                  className="w-full flex items-center justify-between text-lg font-medium text-gray-300 hover:text-hologram-cyan transition-colors p-2 rounded-lg hover:bg-white/5"
                >
                  <span>Services</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isMobileServicesOpen ? "rotate-180 text-hologram-cyan" : "text-gray-400"}`} />
                </button>

                {isMobileServicesOpen && (
                  <div className="pl-4 mt-2 mb-3 border-l border-white/10 space-y-2 flex flex-col">
                    {services.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => {
                          setIsMobileMenuOpen(false);
                          setIsMobileServicesOpen(false);
                        }}
                        className="text-sm text-gray-400 hover:text-hologram-cyan transition-colors p-1.5 pl-3 rounded-md hover:bg-white/5"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-between text-lg font-medium text-gray-300 hover:text-hologram-cyan transition-colors p-2 rounded-lg hover:bg-white/5"
                >
                  {link.name}
                  <ChevronRight size={16} className="text-hologram-cyan" />
                </Link>
              ))}

              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-4 flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-gradient-to-r from-hologram-cyan to-hologram-purple text-white text-base font-bold transition-all duration-300 shadow-[0_0_20px_rgba(0,240,255,0.3)] hover:shadow-[0_0_30px_rgba(0,240,255,0.5)]"
              >
                <MessageSquare className="w-5 h-5 text-white" />
                <span>Contact Us</span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;