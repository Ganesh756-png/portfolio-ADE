"use client";

import { ChevronUp, Database } from "lucide-react";

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/5 bg-slate-950/80 py-8 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Branding */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-azure-blue/15 flex items-center justify-center border border-azure-blue/30">
            <Database className="w-4.5 h-4.5 text-neon-cyan" />
          </div>
          <span className="font-outfit font-bold text-white text-sm">
            Ganesh Thakur
          </span>
        </div>

        {/* Copy details */}
        <p className="text-xs text-slate-500 font-light text-center md:text-left">
          &copy; {new Date().getFullYear()} Ganesh Thakur. All rights reserved. <br className="sm:hidden" />
          <span className="text-slate-600">Designed with Next.js & Tailwind CSS.</span>
        </p>

        {/* Action button */}
        <button
          onClick={handleScrollToTop}
          className="flex items-center justify-center w-9 h-9 rounded-lg bg-slate-900 border border-white/5 text-slate-400 hover:text-neon-cyan hover:border-neon-cyan/20 transition-all duration-300 shadow-md group cursor-pointer"
          title="Back to Top"
        >
          <ChevronUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
        </button>
      </div>
    </footer>
  );
}
