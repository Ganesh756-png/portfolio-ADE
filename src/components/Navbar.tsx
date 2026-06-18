"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Menu, X, Database } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Certifications", href: "#certifications" },
    { name: "Achievements", href: "#achievements" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-neon-cyan to-azure-blue origin-left z-50"
        style={{ scaleX }}
      />

      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-slate-950/80 backdrop-blur-md border-b border-white/5 py-3 shadow-lg shadow-black/20"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-12">
            <a href="#home" className="flex items-center gap-2 group">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-azure-blue to-neon-cyan flex items-center justify-center shadow-md shadow-azure-blue/20">
                <Database className="w-5 h-5 text-slate-950 font-bold" />
              </div>
              <span className="font-outfit text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-neon-cyan group-hover:to-azure-blue transition-colors duration-300">
                Ganesh Thakur
              </span>
            </a>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="font-outfit text-sm font-medium text-slate-300 hover:text-neon-cyan transition-colors duration-200 relative py-1 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-neon-cyan after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                className="font-outfit text-sm font-semibold px-4 py-2 rounded-lg bg-azure-blue/15 hover:bg-azure-blue/25 text-neon-cyan border border-neon-cyan/20 hover:border-neon-cyan/50 transition-all duration-300"
              >
                Hire Me
              </a>
            </div>

            {/* Mobile Menu button */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 focus:outline-none"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden bg-slate-950/95 border-b border-white/5 backdrop-blur-lg px-4 pt-2 pb-4 space-y-1"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:text-neon-cyan hover:bg-white/5 transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="block text-center mt-4 px-3 py-2 rounded-md text-base font-semibold bg-azure-blue text-white hover:bg-azure-dark transition-colors duration-200"
            >
              Hire Me
            </a>
          </motion.div>
        )}
      </nav>
    </>
  );
}
