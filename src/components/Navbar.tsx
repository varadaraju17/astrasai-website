"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronRight, Zap } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Features", href: "/features" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
        ? "bg-void/80 backdrop-blur-xl border-b border-white/5 py-4 shadow-[0_0_30px_rgba(0,240,255,0.1)]"
        : "bg-transparent py-6"
        } `}
    >
      <div className="container-width flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="relative group flex items-center gap-3">
          <div className="relative w-10 h-10">
            <Image
              src="/logo.png"
              alt="Astras AI Logo"
              width={40}
              height={40}
              className="w-full h-full object-contain relative z-10"
            />
            <div className="absolute inset-0 bg-hologram-cyan/40 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <span className="font-display text-2xl font-bold tracking-wider text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-hologram-cyan group-hover:to-hologram-purple transition-all duration-300">
            ASTRAS<span className="text-hologram-cyan">AI</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          <div className="flex items-center bg-white/5 rounded-full p-1 border border-white/5 backdrop-blur-md mr-4">
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

          <Link
            href="/contact"
            className="group relative px-6 py-2.5 bg-transparent overflow-hidden rounded-full transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,240,255,0.3)] border border-hologram-cyan/30 hover:border-hologram-cyan"
          >
            <div className="absolute inset-0 bg-hologram-cyan/10 group-hover:bg-hologram-cyan/20 transition-colors duration-300" />
            <span className="relative z-10 flex items-center gap-2 text-sm font-bold text-hologram-cyan group-hover:text-white transition-colors">
              <Zap className="w-4 h-4" />
              Initialize
            </span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white p-2 relative group"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
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
            className="md:hidden bg-void/95 backdrop-blur-xl border-b border-white/10 overflow-hidden"
          >
            <div className="container-width py-8 flex flex-col space-y-4">
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
                className="mt-4 w-full py-3 bg-gradient-to-r from-hologram-cyan to-hologram-purple text-white font-bold text-center rounded-lg hover:opacity-90 transition-opacity shadow-[0_0_20px_rgba(0,240,255,0.3)]"
              >
                Initialize System
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;