"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Server, Database, BarChart3, ExternalLink, GitFork, CheckCircle, ArrowRight } from "lucide-react";

interface Project {
  id: number;
  title: string;
  category: "azure" | "powerbi";
  description: string;
  technologies: string[];
  features: string[];
  icon: React.ReactNode;
  github?: string;
  demo?: string;
  image?: string;
}

export default function Projects() {
  const [filter, setFilter] = useState<"all" | "azure" | "powerbi">("all");

  const projects: Project[] = [
    {
      id: 1,
      title: "Azure ETL Pipeline",
      category: "azure",
      description:
        "Built an automated end-to-end ETL pipeline using Azure Data Factory to ingest data from multiple source environments into Azure Data Lake Storage and queryable Azure SQL Database warehouses.",
      technologies: ["Azure Data Factory", "ADLS Gen2", "Azure SQL", "Azure Key Vault"],
      features: [
        "Automated copy & ingest tasks",
        "Data schema transformations",
        "Pipeline alerts & monitoring",
        "Trigger-based automatic schedules",
      ],
      icon: <Server className="w-6 h-6 text-neon-cyan" />,
      github: "https://github.com/ganesh-thakur/azure-etl-pipeline",
      image: "/images/pipeline_concept.png",
    },
    {
      id: 2,
      title: "Data Lake Analytics Platform",
      category: "azure",
      description:
        "Created a scalable and governed Lakehouse architecture for storing and processing structured, semi-structured, and unstructured raw business data partitions.",
      technologies: ["Azure Data Lake Storage Gen2", "Azure Blob Storage", "Azure Monitor"],
      features: [
        "Bronze Layer (Raw Ingestion)",
        "Silver Layer (Cleansed/Enriched)",
        "Gold Layer (Aggregated/Business)",
        "Strict Access Control & Governance",
      ],
      icon: <Database className="w-6 h-6 text-indigo-400" />,
      github: "https://github.com/ganesh-thakur/datalake-analytics",
      image: "/images/pipeline_concept.png",
    },
    {
      id: 3,
      title: "Sales Analytics Dashboard",
      category: "powerbi",
      description:
        "Designed and published an interactive sales intelligence dashboard for sales performance tracking, region analysis, and customer segment trends.",
      technologies: ["Power BI", "SQL Server", "SSMS", "Excel"],
      features: [
        "Interactive revenue drilldown analysis",
        "Product/category performance matrix",
        "Customer retention insights",
        "KPI metrics tracking & thresholds",
      ],
      icon: <BarChart3 className="w-6 h-6 text-amber-400" />,
      github: "https://github.com/ganesh-thakur/sales-analytics-powerbi",
      image: "/images/dashboard_concept.png",
    },
  ];

  const filteredProjects =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-20 bg-slate-900/10 relative grid-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-extrabold font-outfit text-white"
          >
            Featured <span className="text-gradient-azure">Projects</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="w-16 h-1 bg-gradient-to-r from-neon-cyan to-azure-blue mx-auto mt-4 rounded-full"
          />
          <p className="text-slate-400 mt-4 max-w-xl mx-auto font-light text-sm">
            Explore my implementation projects illustrating cloud engineering pipelines, data warehousing layers, and reporting solutions.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-4 mb-16">
          {[
            { id: "all", name: "All Work" },
            { id: "azure", name: "Azure Data Engineering" },
            { id: "powerbi", name: "Power BI & Analytics" },
          ].map((btn) => (
            <button
              key={btn.id}
              onClick={() => setFilter(btn.id as typeof filter)}
              className={`font-outfit text-sm font-semibold px-5 py-2.5 rounded-lg border transition-all duration-300 cursor-pointer ${
                filter === btn.id
                  ? "bg-gradient-to-r from-azure-blue to-neon-cyan border-none text-slate-950 shadow-md shadow-azure-blue/20"
                  : "bg-slate-900/50 border-white/5 text-slate-300 hover:border-white/10 hover:text-white"
              }`}
            >
              {btn.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={project.id}
                className="rounded-2xl glass-card border-white/5 p-6 sm:p-8 flex flex-col justify-between hover:border-azure-blue/20 transition-all duration-300 shadow-xl group"
              >
                <div>
                  {project.image && (
                    <div className="relative w-full h-40 rounded-xl overflow-hidden mb-5 border border-white/5 bg-slate-950/40">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover opacity-75 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent" />
                    </div>
                  )}

                  {/* Top Bar with Icon & Link */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-neon-cyan/20 transition-all duration-300 shadow-inner">
                      {project.icon}
                    </div>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-neon-cyan transition-colors"
                      title="View GitHub Repository"
                    >
                      <GitFork className="w-5 h-5" />
                    </a>
                  </div>

                  {/* Content */}
                  <h3 className="font-outfit text-xl font-bold text-white mb-3 group-hover:text-neon-cyan transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-sm font-light leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Bullet features */}
                  <div className="space-y-2.5 mb-6">
                    {project.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-neon-cyan mt-0.5 flex-shrink-0" />
                        <span className="text-xs text-slate-300 leading-normal font-light">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech tags */}
                <div className="pt-4 border-t border-white/5 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded bg-white/5 border border-white/5 text-[10px] text-slate-300 font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
