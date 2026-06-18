"use client";

import { motion } from "framer-motion";
import { Award, Trophy, Star, Sparkles, Code2, Users } from "lucide-react";
import confetti from "canvas-confetti";

interface Achievement {
  id: number;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  description: string;
  glowColor: string;
}

export default function Achievements() {
  const achievements: Achievement[] = [
    {
      id: 1,
      title: "Winner of SQL Competition",
      subtitle: "Technical Fest Award",
      icon: <Trophy className="w-5 h-5 text-amber-400" />,
      description: "Secured 1st place in the database programming and query optimization competition.",
      glowColor: "rgba(245, 158, 11, 0.15)",
    },
    {
      id: 2,
      title: "2nd Prize in App Development",
      subtitle: "Project Competition",
      icon: <Code2 className="w-5 h-5 text-cyan-400" />,
      description: "Honored for designing and presenting an innovative mobile application solution.",
      glowColor: "rgba(6, 182, 212, 0.15)",
    },
    {
      id: 3,
      title: "1st Prize in Tech Treasure Hunt",
      subtitle: "Logic & Problem Solving",
      icon: <Award className="w-5 h-5 text-emerald-400" />,
      description: "Led a 3-member team to solve cryptographic codes and technical reasoning puzzles.",
      glowColor: "rgba(16, 185, 129, 0.15)",
    },
    {
      id: 4,
      title: "3rd Prize in Coding Ninja Competition",
      subtitle: "Algorithm Challenges",
      icon: <Sparkles className="w-5 h-5 text-purple-400" />,
      description: "Recognized for speed and accuracy in solving complex algorithmic problems.",
      glowColor: "rgba(139, 92, 246, 0.15)",
    },
    {
      id: 5,
      title: "State Level Project Competition Participant",
      subtitle: "Inter-collegiate Fest",
      icon: <Users className="w-5 h-5 text-sky-400" />,
      description: "Represented university at state level, showcasing full-stack application models.",
      glowColor: "rgba(14, 165, 233, 0.15)",
    },
    {
      id: 6,
      title: "2nd Prize for ScanniMart Startup Project",
      subtitle: "Innovation & Entrepreneurship",
      icon: <Star className="w-5 h-5 text-rose-400" />,
      description: "Developed and pitched a smart-shopping digital billing platform prototype.",
      glowColor: "rgba(244, 63, 94, 0.15)",
    },
  ];

  const handleCardClick = (title: string, glow: string) => {
    // Generate a mini confetti burst at random locations
    confetti({
      particleCount: 50,
      angle: 60,
      spread: 55,
      origin: { x: 0.1 },
      colors: ["#00f2fe", "#0078d4", "#8b5cf6"],
    });
    confetti({
      particleCount: 50,
      angle: 120,
      spread: 55,
      origin: { x: 0.9 },
      colors: ["#00f2fe", "#0078d4", "#8b5cf6"],
    });
  };

  return (
    <section id="achievements" className="py-20 bg-slate-900/10 relative grid-bg">
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
            Prizes & <span className="text-gradient-cyan">Achievements</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="w-16 h-1 bg-gradient-to-r from-neon-cyan to-azure-blue mx-auto mt-4 rounded-full"
          />
          <p className="text-slate-400 mt-4 max-w-xl mx-auto font-light text-sm">
            Milestones and awards in hackathons, coding contests, database speedruns, and startup pitches. <span className="text-neon-cyan font-medium">Click on a card for a surprise!</span>
          </p>
        </div>

        {/* Timeline Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {achievements.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              onClick={() => handleCardClick(item.title, item.glowColor)}
              className="rounded-2xl glass-card border-white/5 p-6 hover:border-white/10 transition-all duration-300 flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 group cursor-pointer relative overflow-hidden active:scale-95"
              style={{
                boxShadow: `0 4px 30px rgba(0, 0, 0, 0.2)`
              }}
            >
              {/* Highlight effect */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  background: `radial-gradient(circle at 10% 20%, ${item.glowColor} 0%, transparent 60%)`
                }}
              />

              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-white/20 transition-all duration-300">
                    {item.icon}
                  </div>
                  <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest font-semibold bg-white/5 px-2 py-0.5 rounded">
                    Award #{item.id}
                  </span>
                </div>

                <h3 className="font-outfit font-bold text-white text-base leading-snug group-hover:text-neon-cyan transition-colors mb-1.5">
                  {item.title}
                </h3>
                <p className="text-xs text-neon-cyan font-medium mb-3">{item.subtitle}</p>
                <p className="text-slate-400 text-xs font-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
