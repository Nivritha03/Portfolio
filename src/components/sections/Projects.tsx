"use client";

import { useState } from "react";
import Link from "next/link";
import { PROJECTS } from "@/constants/projects";
import { motion, AnimatePresence } from "framer-motion";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { ProjectModal } from "@/components/ui/ProjectModal";
import {
  ExternalLink,
  Maximize2,
  Sparkles,
  Terminal,
  Activity,
  Layers,
  ArrowUpRight,
} from "lucide-react";

type ProjectType = (typeof PROJECTS)[0];

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(null);

  const featuredProjects = PROJECTS.slice(0, 5);
  const heroProject = featuredProjects[0];
  const secondaryProjects = featuredProjects.slice(1, 4);

  return (
    <section id="projects" className="relative w-full py-32 bg-black border-t border-white/10 overflow-hidden">
      {/* Subtle Background Lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-r from-amber-500/10 via-amber-300/5 to-purple-500/10 rounded-full blur-[140px] pointer-events-none opacity-50" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#FFD700] mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>SELECTED WORKS</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight font-editorial">
              Engineered Systems & Projects
            </h2>
          </div>
          <p className="text-gray-400 font-mono text-xs md:text-sm max-w-md leading-relaxed">
            Asymmetric showcase of autonomous AI agents, distributed systems, and modern web architectures.
          </p>
        </div>

        {/* Asymmetric Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          {/* HERO BENTO CARD (Span 2 cols on Desktop) */}
          <div className="md:col-span-2">
            <SpotlightCard
              spotlightColor={`${heroProject.color}25`}
              borderColor={`${heroProject.color}60`}
              className="group cursor-pointer h-full min-h-[460px] flex flex-col justify-between p-8 md:p-10 border border-white/15 bg-gradient-to-br from-[#121216] to-[#0a0a0c]"
              onClick={() => setSelectedProject(heroProject)}
            >
              {/* Card Header Tag */}
              <div className="flex items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full animate-pulse" style={{ backgroundColor: heroProject.color }} />
                  <span className="text-xs font-mono font-bold tracking-wider text-gray-400 uppercase">
                    FEATURED FLAGSHIP
                  </span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-gray-300 group-hover:border-white/30 transition-colors">
                  <span>Explore Architecture</span>
                  <Maximize2 className="w-3.5 h-3.5 text-[#FFD700] group-hover:scale-110 transition-transform" />
                </div>
              </div>

              {/* Title & Subtitle */}
              <div className="mb-6">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-2 tracking-tight group-hover:text-[#FFD700] transition-colors">
                  {heroProject.title}
                </h3>
                <p className="text-sm md:text-base font-mono" style={{ color: heroProject.color }}>
                  {heroProject.subtitle}
                </p>
              </div>

              {/* Mock Terminal / Interactive Preview Window */}
              <div className="relative my-4 p-4 md:p-5 rounded-2xl bg-black/60 border border-white/10 font-mono text-xs text-gray-300 overflow-hidden shadow-inner group-hover:border-white/25 transition-colors">
                <div className="flex items-center gap-2 mb-3 pb-2 border-b border-white/10 text-gray-500 text-[11px]">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                  <span className="ml-2 text-gray-400">~/projects/{heroProject.id}.sys</span>
                </div>
                <div className="space-y-1.5 text-gray-400 text-xs">
                  {heroProject.features.slice(0, 2).map((feat, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <span style={{ color: heroProject.color }}>❯</span>
                      <span className="leading-snug">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack Pills & Action Bar */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-white/10 mt-auto">
                <div className="flex flex-wrap gap-2">
                  {heroProject.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs font-mono rounded-lg bg-white/5 text-gray-300 border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  {heroProject.github && (
                    <a
                      href={heroProject.github}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
                      title="View Source Code"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
                    </a>
                  )}
                  {heroProject.liveDemo !== "#" && (
                    <a
                      href={heroProject.liveDemo}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-black font-bold text-xs transition-transform hover:scale-105"
                      style={{ backgroundColor: heroProject.color }}
                    >
                      <span>Live Demo</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </SpotlightCard>
          </div>

          {/* BENTO TILE 2: Quick Metrics / Stack Highlight Tile */}
          <div className="md:col-span-1">
            <SpotlightCard
              spotlightColor="rgba(255, 215, 0, 0.15)"
              borderColor="rgba(255, 215, 0, 0.4)"
              className="h-full min-h-[460px] p-8 flex flex-col justify-between border border-white/15 bg-gradient-to-br from-[#101014] to-[#0c0c0f]"
            >
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-xs font-mono text-[#FFD700] mb-6">
                  <Activity className="w-3.5 h-3.5" />
                  <span>SYSTEM METRICS</span>
                </div>
                <h4 className="text-2xl font-bold text-white mb-4 tracking-tight">
                  High-Throughput Intelligence
                </h4>
                <p className="text-xs font-mono text-gray-400 leading-relaxed mb-6">
                  Architected with modular microservices, vector search indices, and low-latency API pipelines.
                </p>
              </div>

              {/* Stats Stack */}
              <div className="space-y-3 font-mono">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between">
                  <span className="text-xs text-gray-400">Total Systems Built</span>
                  <span className="text-xl font-bold text-white">10+</span>
                </div>
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between">
                  <span className="text-xs text-gray-400">Architecture</span>
                  <span className="text-xs font-bold text-[#FFD700]">Next.js / PyTorch</span>
                </div>
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between">
                  <span className="text-xs text-gray-400">Code Quality</span>
                  <span className="text-xs font-bold text-emerald-400">100% Type-Safe</span>
                </div>
              </div>
            </SpotlightCard>
          </div>

          {/* SECONDARY BENTO CARDS (Row 2: 3 Cards) */}
          {secondaryProjects.map((project) => (
            <div key={project.id} className="md:col-span-1">
              <SpotlightCard
                spotlightColor={`${project.color}20`}
                borderColor={`${project.color}50`}
                className="group cursor-pointer h-full min-h-[380px] flex flex-col justify-between p-7 border border-white/15 bg-gradient-to-br from-[#101013] to-[#09090b]"
                onClick={() => setSelectedProject(project)}
              >
                <div>
                  {/* Top Bar */}
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-mono"
                      style={{ color: project.color }}
                    >
                      {project.category}
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-gray-500 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>

                  <h4 className="text-2xl font-bold text-white mb-2 tracking-tight group-hover:text-[#FFD700] transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-xs font-mono text-gray-400 line-clamp-2 mb-4 leading-relaxed">
                    {project.subtitle}
                  </p>
                </div>

                {/* Features Mini List */}
                <div className="space-y-2 mb-6">
                  {project.features.slice(0, 2).map((feature, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-gray-400">
                      <span className="text-[#FFD700] shrink-0">▹</span>
                      <span className="line-clamp-1">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Bottom Tech Pills */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/10 mt-auto">
                  {project.techStack.slice(0, 3).map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 text-[11px] font-mono rounded-lg bg-white/5 text-gray-300 border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </SpotlightCard>
            </div>
          ))}

        </div>

        {/* View All Projects Action Link */}
        <div className="flex justify-center mt-12">
          <Link
            href="/projects"
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-white/5 text-white border border-white/15 font-mono text-xs font-bold rounded-full overflow-hidden transition-all hover:bg-white/10 hover:border-[#FFD700]/50 active:scale-95 shadow-xl"
          >
            <span>VIEW COMPLETE ARCHIVE ({PROJECTS.length} PROJECTS)</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-[#FFD700]" />
          </Link>
        </div>

      </div>

      {/* Expanded Shared Layout Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
