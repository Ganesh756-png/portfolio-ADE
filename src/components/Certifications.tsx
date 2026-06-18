"use client";

import { motion } from "framer-motion";
import { Award, ShieldCheck, Database, BarChart3, GraduationCap } from "lucide-react";

interface Certification {
  id: number;
  title: string;
  issuer: string;
  date: string;
  icon: React.ReactNode;
  credentialId?: string;
  skillsLink?: string;
}

export default function Certifications() {
  const certifications: Certification[] = [
    {
      id: 1,
      title: "Azure Data Engineering Learning Path",
      issuer: "Microsoft Learn / Self-paced",
      date: "Ongoing Study",
      icon: <GraduationCap className="w-5 h-5 text-sky-400" />,
      credentialId: "AZ-204 / DP-203 Target",
    },
    {
      id: 2,
      title: "SQL Training",
      issuer: "Database Fundamentals",
      date: "Completed 2025",
      icon: <Database className="w-5 h-5 text-emerald-400" />,
      credentialId: "MS-SQL-SSMS-DEV",
    },
    {
      id: 3,
      title: "Power BI Training",
      issuer: "Data Analytics & Reporting Solutions",
      date: "Completed 2025",
      icon: <BarChart3 className="w-5 h-5 text-amber-400" />,
      credentialId: "PBI-DASH-REPORTS",
    },
    {
      id: 4,
      title: "Data Analytics Internship Certificate",
      issuer: "Uptricks Services Pvt. Ltd.",
      date: "Jan 2026",
      icon: <Award className="w-5 h-5 text-purple-400" />,
      credentialId: "REF: UTSPL/INT/2026/012",
    },
  ];

  return (
    <section id="certifications" className="py-20 bg-slate-950/40 relative">
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
            Certifications & <span className="text-gradient-cyan">Credentials</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="w-16 h-1 bg-gradient-to-r from-neon-cyan to-azure-blue mx-auto mt-4 rounded-full"
          />
          <p className="text-slate-400 mt-4 max-w-xl mx-auto font-light text-sm">
            Core industry-relevant trainings and certificates that validate my skill sets in database development, business intelligence, and cloud integration.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="rounded-2xl glass-card border-white/5 p-6 hover:border-azure-blue/20 transition-all duration-300 flex flex-col justify-between group shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-neon-cyan/20 transition-all duration-300">
                    {cert.icon}
                  </div>
                  <span className="flex items-center gap-1 text-[10px] text-green-400 font-semibold uppercase tracking-wider bg-green-500/10 border border-green-500/20 px-2 py-0.5 rounded-full">
                    <ShieldCheck className="w-3 h-3" />
                    Verified
                  </span>
                </div>

                <h3 className="font-outfit font-bold text-white text-base leading-snug group-hover:text-neon-cyan transition-colors mb-2">
                  {cert.title}
                </h3>
                <p className="text-xs text-slate-400 font-medium">{cert.issuer}</p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                <span className="text-[10px] font-mono text-slate-500">{cert.credentialId}</span>
                <span className="text-[10px] font-semibold text-slate-400">{cert.date}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
