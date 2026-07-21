"use client";

import { motion } from "framer-motion";
import { PROJECTS } from "@/constants/projects";
import { X, ExternalLink, Code2, Activity, BarChart, Server } from "lucide-react";
import { useEffect } from "react";

type ProjectType = typeof PROJECTS[0];

export function ProjectModal({ project, onClose }: { project: ProjectType, onClose: () => void }) {
  
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
    >
      <div className="absolute inset-0 bg-black/80 backdrop-blur-xl" onClick={onClose} />
      
      <motion.div 
        initial={{ y: 50, opacity: 0, scale: 0.95 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        exit={{ y: 20, opacity: 0, scale: 0.95 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="relative w-full max-w-6xl max-h-[90vh] overflow-y-auto bg-[#060606] border border-white/10 rounded-3xl shadow-2xl flex flex-col"
        style={{ '--project-color': project.color } as React.CSSProperties}
      >
        <button 
          onClick={onClose}
          className="sticky top-6 left-full -translate-x-14 z-50 p-3 rounded-full bg-black/50 border border-white/10 text-gray-400 hover:text-white backdrop-blur-md transition-all hover:bg-white/10 hover:rotate-90"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Hero Image / Banner */}
        <div className="relative w-full h-[40vh] min-h-[300px] bg-gradient-to-br from-[#111] to-[#0a0a0a] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--project-color),_transparent_70%)] opacity-20" />
          
          <div className="relative z-10 text-center px-6">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <div className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm font-mono text-[var(--project-color)] mb-6">
                {project.category} // {project.status}
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight">{project.title}</h1>
              <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto">{project.subtitle}</p>
            </motion.div>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-8 md:p-12">
          
          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {project.detailedContent?.metrics?.map((metric: any, i: number) => (
              <motion.div 
                key={i}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="p-6 rounded-2xl bg-white/5 border border-white/5 flex flex-col gap-2 relative overflow-hidden group"
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-[var(--project-color)] opacity-50 group-hover:opacity-100 transition-opacity" />
                <span className="text-sm font-mono text-gray-500 uppercase tracking-wider">{metric.label}</span>
                <span className="text-4xl font-bold text-white">{metric.value}</span>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Left Column (Main Content) */}
            <div className="lg:col-span-2 space-y-12">
              
              <motion.section
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <Activity className="w-6 h-6 text-[var(--project-color)]" />
                  Engineering Challenges
                </h3>
                <ul className="space-y-4">
                  {project.detailedContent?.challenges?.map((challenge: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5">
                      <div className="w-1.5 h-1.5 mt-2.5 rounded-full bg-[var(--project-color)] shrink-0" />
                      <span className="text-gray-300 leading-relaxed">{challenge}</span>
                    </li>
                  ))}
                </ul>
              </motion.section>

              <motion.section
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <Server className="w-6 h-6 text-[var(--project-color)]" />
                  Architectural Solution
                </h3>
                <div className="p-6 md:p-8 rounded-2xl bg-white/5 border border-white/10 prose prose-invert max-w-none">
                  <p className="text-gray-300 text-lg leading-relaxed">
                    {project.detailedContent?.solution}
                  </p>
                </div>
              </motion.section>
              
            </div>

            {/* Right Column (Sidebar) */}
            <div className="space-y-8">
              
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="p-6 rounded-2xl bg-white/5 border border-white/5"
              >
                <h4 className="text-sm font-mono text-gray-500 uppercase tracking-wider mb-4">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech: string, i: number) => (
                    <span key={i} className="px-3 py-1.5 text-xs font-mono rounded-lg bg-black/50 text-gray-300 border border-white/10">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="flex flex-col gap-4"
              >
                {project.github && (
                  <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center justify-between p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white transition-all group">
                    <span className="flex items-center gap-3 font-medium"><Code2 className="w-5 h-5" /> Source Code</span>
                    <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-white transition-colors" />
                  </a>
                )}
                
                {project.liveDemo !== "#" && (
                  <a href={project.liveDemo} target="_blank" rel="noreferrer" className="flex items-center justify-between p-4 rounded-xl text-black font-bold transition-all hover:scale-[1.02] group shadow-lg" style={{ backgroundColor: project.color, boxShadow: `0 4px 20px ${project.color}30` }}>
                    <span className="flex items-center gap-3"><Play className="w-5 h-5" /> Live Deployment</span>
                    <ExternalLink className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity" />
                  </a>
                )}
              </motion.div>

            </div>
          </div>

        </div>
      </motion.div>
    </motion.div>
  );
}
