"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { PROJECTS } from "@/constants/projects";
import { SpotlightCard } from "@/components/ui/SpotlightCard";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-black w-full text-white selection:bg-[#FFD700]/30 relative">
      {/* Background styling */}
      <div className="fixed inset-0 z-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/[0.03] via-black to-black pointer-events-none" />
      
      {/* Floating Back Button */}
      <div className="fixed top-8 left-8 z-50">
        <Link href="/" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all backdrop-blur-md">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:-translate-x-1">
            <path d="m15 18-6-6 6-6"/>
          </svg>
          Back to Home
        </Link>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-24">
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold font-space mb-4">All Projects</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-[#FFD700] to-[#F59E0B] rounded-full mb-6" />
          <p className="text-gray-400 max-w-2xl text-lg">A comprehensive archive of my work spanning across Full-Stack Development, AI/ML integrations, and automation workflows.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project) => (
            <SpotlightCard key={project.id} className="p-8">
              <div className="mb-6 flex-1">
                <h2 className="text-2xl font-bold text-white mb-2 group-hover:text-[#FFD700] transition-colors">{project.title}</h2>
                <h3 className="text-sm font-mono text-[#F59E0B] mb-6">{project.subtitle}</h3>
                
                <ul className="space-y-3 mb-8">
                  {project.features.slice(0, 2).map((feat, idx) => (
                    <li key={idx} className="text-gray-400 text-sm flex items-start gap-2">
                      <span className="text-[#FFD700] mt-0.5">▹</span>
                      <span className="leading-relaxed">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.slice(0, 4).map((tech, idx) => (
                    <span key={idx} className="px-2.5 py-1 text-[11px] font-mono rounded-lg bg-white/5 text-gray-300 border border-white/5">
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 4 && (
                    <span className="px-2.5 py-1 text-[11px] font-mono rounded-lg bg-white/5 text-gray-400 border border-white/5">
                      +{project.techStack.length - 4} more
                    </span>
                  )}
                </div>
                
                <div className="flex items-center gap-4">
                  <a href={project.github} target="_blank" rel="noreferrer" className="text-sm font-medium text-gray-300 hover:text-white transition-colors flex items-center gap-2">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
                      <path d="M9 18c-4.51 2-5-2-7-2"/>
                    </svg>
                    Source
                  </a>
                  {project.liveDemo !== "#" && (
                    <a href={project.liveDemo} target="_blank" rel="noreferrer" className="text-sm font-medium text-[#FFD700] hover:text-[#F59E0B] transition-colors flex items-center gap-1">
                      View Live
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M7 17L17 7"></path>
                        <path d="M7 7h10v10"></path>
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </main>
  );
}
