"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, CheckCircle2, TrendingUp } from "lucide-react";

export default function Internship() {
  const responsibilities = [
    "Developed SQL queries for business reporting to facilitate decision-making.",
    "Created interactive Power BI dashboards and reports representing sales performance.",
    "Built paginated reports using Power BI Report Builder for structured billing and exports.",
    "Worked with relational databases and schemas using SQL Server Management Studio (SSMS).",
    "Generated critical business insights from complex sales and customer datasets.",
    "Delivered 15+ production-ready analytical reports and dashboards to client specifications."
  ];

  return (
    <section id="experience" className="py-20 bg-slate-950/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-extrabold font-outfit text-white"
          >
            Internship <span className="text-gradient-cyan">Experience</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="w-16 h-1 bg-gradient-to-r from-neon-cyan to-azure-blue mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Feature Internship Card */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl glass-card border-white/5 p-6 sm:p-10 shadow-2xl relative overflow-hidden group hover:border-azure-blue/20 transition-all duration-300"
          >
            {/* Ambient Background Light in Card */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-azure-blue/5 rounded-full blur-[80px] group-hover:bg-azure-blue/10 transition-all duration-500" />
            
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-6 border-b border-white/5">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-azure-blue/15 flex items-center justify-center border border-azure-blue/30 flex-shrink-0">
                  <Briefcase className="w-6 h-6 text-neon-cyan" />
                </div>
                <div>
                  <h3 className="font-outfit text-xl sm:text-2xl font-bold text-white leading-snug">
                    Data Analytics Intern
                  </h3>
                  <p className="text-base text-neon-cyan font-medium mt-1">
                    Uptricks Services Pvt. Ltd.
                  </p>
                  <div className="flex flex-wrap gap-4 mt-2 text-xs text-slate-400 font-medium">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      14 Nov 2025 – 13 Jan 2026
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      Remote / Hybrid
                    </span>
                  </div>
                </div>
              </div>

              {/* Stat Badge */}
              <div className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-green-500/10 border border-green-500/20 w-fit self-start md:self-auto shadow-md">
                <TrendingUp className="w-5 h-5 text-green-400" />
                <div className="text-left">
                  <div className="text-xs text-slate-400 font-medium leading-none">Deliverables</div>
                  <div className="text-sm font-bold text-green-400 font-mono mt-1">15+ Reports Built</div>
                </div>
              </div>
            </div>

            {/* Responsibilities */}
            <div className="pt-6">
              <h4 className="font-outfit text-sm font-semibold uppercase tracking-wider text-slate-400 mb-6">
                Key Responsibilities & Contributions
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {responsibilities.map((resp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="flex items-start gap-3 p-3 rounded-xl bg-slate-900/40 border border-white/5 hover:border-white/10 transition-all duration-200"
                  >
                    <CheckCircle2 className="w-4 h-4 text-neon-cyan mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-300 font-light leading-relaxed">{resp}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Tech Badge Footer inside Card */}
            <div className="mt-8 pt-6 border-t border-white/5 flex flex-wrap items-center gap-2">
              <span className="text-xs text-slate-400 font-medium mr-2">Skills applied:</span>
              {["SQL", "Power BI", "Power BI Report Builder", "SSMS", "Excel"].map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-md bg-white/5 border border-white/5 text-xs text-slate-300 font-mono"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
