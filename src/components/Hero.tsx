"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Download, ArrowRight, Server, Database, BarChart3, Cloud } from "lucide-react";
import confetti from "canvas-confetti";

interface StatItemProps {
  end: number;
  label: string;
  suffix?: string;
}

function StatItem({ end, label, suffix = "" }: StatItemProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;
    const duration = 1500; // 1.5s animation

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [end]);

  return (
    <div className="flex flex-col items-center justify-center p-4 rounded-xl glass-card border-white/5 text-center">
      <span className="text-3xl sm:text-4xl font-extrabold font-outfit text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-azure-blue">
        {count}
        {suffix}
      </span>
      <span className="text-xs sm:text-sm text-slate-400 mt-1 font-medium">{label}</span>
    </div>
  );
}

export default function Hero() {
  const [viewMode, setViewMode] = useState<"simulator" | "architecture">("simulator");

  const handleDownloadResume = () => {
    // Confetti effect
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.8 },
      colors: ["#00f2fe", "#0078d4", "#8b5cf6"],
    });

    // Create a mock resume download
    const link = document.createElement("a");
    link.href = "#"; // Replace with actual resume path when available
    link.setAttribute("download", "Ganesh_Thakur_Resume.pdf");
    // Since there is no actual file in the workspace yet, we will just show a nice user notification in the console/alert or create a tiny dummy file. We will simulate the download.
    alert("Resume download started! (Demo Mode: In a production environment, this will download Ganesh Thakur's verified PDF resume)");
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden grid-bg"
    >
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-azure-blue/10 blur-[100px] pointer-events-none z-0 animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[400px] h-[400px] rounded-full bg-neon-cyan/5 blur-[120px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Text Content */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-azure-blue/10 border border-azure-blue/20 text-xs sm:text-sm text-neon-cyan font-semibold w-fit"
          >
            <Cloud className="w-4 h-4 animate-pulse" />
            Aspiring Azure Data Engineer
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-outfit leading-tight"
          >
            Hi, I am <br />
            <span className="text-gradient-azure">Ganesh Thakur</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl font-light"
          >
            A B.Sc. IT student passionate about <strong className="font-semibold text-white">Data Engineering</strong>, <strong className="font-semibold text-white">Cloud Computing</strong>, and <strong className="font-semibold text-white">Analytics</strong>. Experienced in Power BI, SQL, SSMS, and building automated data workflows. Currently specializing in Azure Data Engineering (ADF, ADLS Gen2, Azure SQL).
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-4 pt-2"
          >
            <button
              onClick={handleDownloadResume}
              className="flex items-center gap-2 bg-gradient-to-r from-azure-blue to-neon-cyan hover:from-azure-light hover:to-neon-cyan text-slate-950 font-bold px-6 py-3 rounded-lg shadow-lg shadow-azure-blue/20 hover:shadow-cyan-500/30 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </button>
            <a
              href="#projects"
              className="flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/20 font-semibold px-6 py-3 rounded-lg transition-all duration-300 transform hover:-translate-y-0.5"
            >
              View My Work
              <ArrowRight className="w-4 h-4 text-neon-cyan" />
            </a>
          </motion.div>

          {/* Statistics Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6"
          >
            <StatItem end={15} label="Reports & Dashboards" suffix="+" />
            <StatItem end={5} label="Azure Services" suffix="+" />
            <StatItem end={4} label="Completed Certs" />
            <StatItem end={6} label="Tech Achievements" suffix="+" />
          </motion.div>
        </div>

        {/* Visual Showcase (ADF Data Pipeline Animation / Image) */}
        <div className="lg:col-span-5 relative flex justify-center items-center h-[350px] lg:h-[450px]">
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full max-w-[360px] h-[360px] rounded-2xl glass-card p-6 flex flex-col justify-between border-white/5 shadow-2xl relative overflow-hidden group"
          >
            {/* Ambient Background Light in Card */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-neon-cyan/10 rounded-full blur-2xl group-hover:bg-neon-cyan/20 transition-all duration-500 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-azure-blue/10 rounded-full blur-2xl group-hover:bg-azure-blue/20 transition-all duration-500 pointer-events-none" />

            {/* Toggle header inside Card */}
            <div className="flex items-center justify-between mb-4 border-b border-white/5 pb-3 relative z-20">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                Pipeline Visuals
              </span>
              <div className="flex gap-1 bg-slate-950/80 p-0.5 rounded-md border border-white/5">
                <button
                  onClick={() => setViewMode("simulator")}
                  className={`text-[9px] font-bold px-2 py-1 rounded transition-all cursor-pointer ${
                    viewMode === "simulator"
                      ? "bg-azure-blue text-slate-950 font-extrabold shadow-sm"
                      : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  Live Simulator
                </button>
                <button
                  onClick={() => setViewMode("architecture")}
                  className={`text-[9px] font-bold px-2 py-1 rounded transition-all cursor-pointer ${
                    viewMode === "architecture"
                      ? "bg-azure-blue text-slate-950 font-extrabold shadow-sm"
                      : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  Architecture
                </button>
              </div>
            </div>

            {/* View Mode Conditional Rendering */}
            {viewMode === "architecture" ? (
              <div className="flex flex-col items-center justify-center relative flex-grow w-full h-[240px] overflow-hidden rounded-xl border border-white/5 bg-slate-950/20 group-hover:border-neon-cyan/20 transition-all duration-300">
                <img
                  src="/images/pipeline_concept.png"
                  alt="Azure Data Engineering Pipeline Architecture"
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-2 left-2 right-2 px-2 py-1 rounded bg-slate-950/90 backdrop-blur-sm border border-white/5 text-[9px] text-center text-slate-300 font-mono">
                  Azure Data Lake Lakehouse Design
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center space-y-5 relative flex-grow">
                {/* Vertical dotted connecting lines */}
                <div className="absolute top-1/6 bottom-1/6 w-0.5 border-r border-dashed border-azure-blue/40 z-0">
                  {/* Glowing moving dot */}
                  <div className="w-1.5 h-1.5 bg-neon-cyan rounded-full animate-bounce absolute left-[-2.5px]" style={{ animationDuration: "3s" }} />
                </div>

                {/* Source (Blob Storage/API) */}
                <div className="flex items-center gap-3 z-10 w-full p-2.5 bg-slate-900/80 rounded-xl border border-white/5 shadow-md">
                  <div className="w-9 h-9 rounded-lg bg-orange-500/10 flex items-center justify-center border border-orange-500/20">
                    <Cloud className="w-4.5 h-4.5 text-orange-400" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs font-semibold text-white">Blob / CSV Source</div>
                    <div className="text-[9px] text-slate-400">Bronze Data Layer</div>
                  </div>
                  <div className="ml-auto text-[9px] text-green-400 font-mono">100KB/s</div>
                </div>

                {/* Ingestion & Transform (Azure Data Factory) */}
                <div className="flex items-center gap-3 z-10 w-full p-2.5 bg-slate-900/80 rounded-xl border border-neon-cyan/20 shadow-md shadow-neon-cyan/5 relative group-hover:border-neon-cyan/40 transition-all duration-300">
                  <div className="w-9 h-9 rounded-lg bg-neon-cyan/10 flex items-center justify-center border border-neon-cyan/30">
                    <Server className="w-4.5 h-4.5 text-neon-cyan animate-spin" style={{ animationDuration: "10s" }} />
                  </div>
                  <div className="text-left">
                    <div className="text-xs font-semibold text-white">Azure Data Factory</div>
                    <div className="text-[9px] text-slate-400">Silver Layer (Cleanse)</div>
                  </div>
                  <div className="ml-auto text-[9px] text-neon-cyan font-mono animate-pulse">Running</div>
                </div>

                {/* Sink (Azure SQL Database) */}
                <div className="flex items-center gap-3 z-10 w-full p-2.5 bg-slate-900/80 rounded-xl border border-white/5 shadow-md">
                  <div className="w-9 h-9 rounded-lg bg-azure-blue/10 flex items-center justify-center border border-azure-blue/20">
                    <Database className="w-4.5 h-4.5 text-azure-blue" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs font-semibold text-white">Azure SQL DB</div>
                    <div className="text-[9px] text-slate-400">Gold Layer (Reporting)</div>
                  </div>
                  <div className="ml-auto text-[9px] text-azure-light font-mono">Complete</div>
                </div>
              </div>
            )}

            <div className="text-center text-[10px] text-slate-500 font-mono mt-3 border-t border-white/5 pt-2 relative z-20">
              Pipeline Active Uptime: 99.98%
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
