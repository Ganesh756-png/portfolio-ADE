"use client";

import { motion } from "framer-motion";
import { GraduationCap, Target, Calendar, MapPin, Award } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 bg-slate-950/40 relative">
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
            About <span className="text-gradient-cyan">Me</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="w-16 h-1 bg-gradient-to-r from-neon-cyan to-azure-blue mx-auto mt-4 rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Career Goal & Biography (Left) */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col justify-between p-6 sm:p-8 rounded-2xl glass-card border-white/5 shadow-xl"
          >
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-neon-cyan/15 flex items-center justify-center border border-neon-cyan/30">
                  <Target className="w-5 h-5 text-neon-cyan" />
                </div>
                <h3 className="font-outfit text-xl font-bold text-white">Career Goal</h3>
              </div>
              
              <p className="text-slate-300 font-light leading-relaxed">
                I am a <strong className="text-white font-medium">B.Sc. IT graduate (Class of 2026)</strong> and an <strong className="text-white font-medium">Aspiring Azure Data Engineer</strong>. I possess a strong foundation in orchestrating cloud data pipelines, designing clean lakehouse storage spaces, and configuring local container environments.
              </p>
              
              <p className="text-slate-300 font-light leading-relaxed">
                My technical skillset includes building automated pipelines in <strong className="text-white font-medium">Azure Data Factory (ADF)</strong>, distributed computing with <strong className="text-white font-medium">Azure Databricks</strong>, enterprise data warehousing using <strong className="text-white font-medium">Azure Synapse Analytics</strong>, cloud database provisioning on <strong className="text-white font-medium">Azure SQL Database</strong>, storage partition layouts (<strong className="text-white font-medium">ADLS Gen2</strong> & <strong className="text-white font-medium">Blob Storage</strong>), and container orchestration with <strong className="text-white font-medium">Docker</strong>.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 pt-6 border-t border-white/5">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-neon-cyan mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-xs text-slate-400 font-medium">Location</h4>
                  <p className="text-sm font-semibold text-white">Sawantwadi, Maharashtra, India</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <Award className="w-4 h-4 text-neon-cyan mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-xs text-slate-400 font-medium">Focus Areas</h4>
                  <p className="text-sm font-semibold text-white">ETL/ELT, Data Modeling, Cloud analytics</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Education Card (Right) */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 p-6 sm:p-8 rounded-2xl glass-card border-white/5 shadow-xl flex flex-col justify-between hover:border-azure-blue/20 transition-all duration-300"
          >
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-azure-blue/15 flex items-center justify-center border border-azure-blue/30">
                  <GraduationCap className="w-5 h-5 text-azure-light" />
                </div>
                <h3 className="font-outfit text-xl font-bold text-white">Education</h3>
              </div>

              <div className="relative pl-6 border-l-2 border-azure-blue/30 space-y-6 py-2">
                {/* Timeline node */}
                <div className="absolute left-[-5px] top-4 w-2 h-2 rounded-full bg-neon-cyan ring-4 ring-slate-900" />
                
                <div>
                  <span className="inline-block px-2.5 py-0.5 rounded-full bg-azure-blue/10 border border-azure-blue/20 text-[10px] font-semibold text-neon-cyan mb-2">
                    Class of 2026 Graduate
                  </span>
                  <h4 className="font-outfit font-bold text-lg text-white leading-snug">
                    Bachelor of Science in Information Technology (B.Sc. IT)
                  </h4>
                  <p className="text-sm text-slate-300 font-light mt-1.5">
                    Shri Pancham Khemraj Mahavidyalaya, Sawantwadi
                  </p>
                  <p className="text-xs text-slate-400 font-medium mt-1">
                    Affiliated with University of Mumbai
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between p-4 bg-slate-900/40 rounded-xl border border-white/5 mt-6">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-slate-400" />
                <span className="text-xs text-slate-400">Academic Status</span>
              </div>
              <span className="text-sm font-semibold text-green-400 font-mono">B.Sc. IT Graduate (2026)</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
