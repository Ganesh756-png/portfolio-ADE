"use client";

import { motion } from "framer-motion";
import { Cloud, Database, Code, BarChart3, Globe, CheckCircle2 } from "lucide-react";

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: string[];
  color: string;
}

export default function Skills() {
  const skillCategories: SkillCategory[] = [
    {
      title: "Cloud Technologies",
      icon: <Cloud className="w-5 h-5 text-sky-400" />,
      color: "from-sky-500/10 to-azure-blue/10 border-sky-500/20 text-sky-300",
      skills: [
        "Azure Data Factory",
        "Azure Data Lake Storage Gen2",
        "Azure SQL Database",
        "Azure Blob Storage",
        "Azure Key Vault",
        "Azure Monitor",
      ],
    },
    {
      title: "Data Engineering",
      icon: <Database className="w-5 h-5 text-indigo-400" />,
      color: "from-indigo-500/10 to-purple-500/10 border-indigo-500/20 text-indigo-300",
      skills: [
        "ETL/ELT Pipelines",
        "Data Warehousing",
        "Data Modeling",
        "Data Integration",
        "Data Transformation",
      ],
    },
    {
      title: "Programming",
      icon: <Code className="w-5 h-5 text-emerald-400" />,
      color: "from-emerald-500/10 to-teal-500/10 border-emerald-500/20 text-emerald-300",
      skills: ["SQL", "Python", "Java", "C++"],
    },
    {
      title: "Data Analytics",
      icon: <BarChart3 className="w-5 h-5 text-amber-400" />,
      color: "from-amber-500/10 to-yellow-500/10 border-amber-500/20 text-amber-300",
      skills: [
        "Power BI",
        "Power BI Report Builder",
        "SSMS",
        "Excel",
      ],
    },
    {
      title: "Web Technologies",
      icon: <Globe className="w-5 h-5 text-rose-400" />,
      color: "from-rose-500/10 to-pink-500/10 border-rose-500/20 text-rose-300",
      skills: ["React.js", "Tailwind CSS", "JavaScript", "HTML", "CSS"],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" as const },
    },
  };

  return (
    <section id="skills" className="py-20 bg-slate-900/10 relative grid-bg">
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
            Technical <span className="text-gradient-azure">Skills</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="w-16 h-1 bg-gradient-to-r from-neon-cyan to-azure-blue mx-auto mt-4 rounded-full"
          />
          <p className="text-slate-400 mt-4 max-w-xl mx-auto font-light text-sm">
            Core stack and tools I use to build data pipelines, cloud architectures, and interactive analytics reporting.
          </p>
        </div>

        {/* Skill Groups Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={cardVariants}
              className={`rounded-2xl glass-card border-white/5 p-6 flex flex-col justify-between hover:border-white/10 transition-all duration-300 hover:shadow-lg hover:shadow-black/20 group relative overflow-hidden`}
            >
              {/* Highlight effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-white/[0.01] pointer-events-none" />

              <div>
                {/* Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-neon-cyan/20 transition-all duration-300">
                    {category.icon}
                  </div>
                  <h3 className="font-outfit text-lg font-bold text-white group-hover:text-neon-cyan transition-colors duration-300">
                    {category.title}
                  </h3>
                </div>

                {/* Skill List */}
                <div className="flex flex-wrap gap-2.5">
                  {category.skills.map((skill) => (
                    <div
                      key={skill}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-950/60 border border-white/5 text-xs text-slate-300 hover:border-neon-cyan/30 hover:text-white transition-all duration-200 cursor-default"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-neon-cyan" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
