"use client";

import { useRef } from "react";
import Link from "next/link";
import { PROJECTS } from "@/constants/projects";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

type ProjectType = typeof PROJECTS[0];

function ProjectCard({ project, i, progress, range, targetScale }: { project: ProjectType, i: number, progress: MotionValue<number>, range: number[], targetScale: number }) {
  const containerRef = useRef(null);
  
  const scale = useTransform(progress, range, [1, targetScale]);
  
  return (
    <div ref={containerRef} className="min-h-[85vh] py-8 md:py-0 md:h-screen flex items-center justify-center sticky top-0">
      <motion.div 
        style={{ scale, top: `calc(-5vh + ${i * 25}px)` }} 
        className="relative flex flex-col w-full max-w-4xl p-8 md:p-12 rounded-[2.5rem] origin-top border border-white/10 bg-[#0a0a0a] overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.8)] group"
      >
        {/* Animated gradient background based on project color */}
        <div 
          className="absolute -top-40 -right-40 w-96 h-96 rounded-full blur-[100px] opacity-20 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none" 
          style={{ backgroundColor: project.color }}
        />
        <div 
          className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full blur-[100px] opacity-10 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none" 
          style={{ backgroundColor: project.color }}
        />

        {/* Large background watermark */}
        <div className="absolute top-4 right-8 text-[150px] font-bold font-space text-white/[0.02] pointer-events-none select-none leading-none">
          {String(i + 1).padStart(2, '0')}
        </div>
        
        <div className="relative z-10 flex flex-col h-full">
          <div className="mb-8">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">{project.title}</h2>
            <h3 className="text-xl font-mono" style={{ color: project.color }}>{project.subtitle}</h3>
          </div>

          <div className="flex flex-col gap-8 flex-grow">
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.features.map((feature: string, idx: number) => (
                <li key={idx} className="relative overflow-hidden group/item p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300 hover:bg-white/[0.07]">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity duration-300" />
                  <div className="relative z-10 flex items-start gap-4">
                    <span className="mt-1 text-xl leading-none" style={{ color: project.color }}>▹</span>
                    <span className="text-left text-sm text-gray-300 leading-relaxed font-medium">{feature}</span>
                  </div>
                </li>
              ))}
            </ul>
            
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mt-auto pt-8 border-t border-white/10 relative">
              {/* Subtle line glow */}
              <div className="absolute top-0 left-0 w-1/3 h-[1px]" style={{ background: `linear-gradient(90deg, ${project.color}, transparent)` }} />
              
              <div className="flex flex-wrap gap-2 flex-1">
                {project.techStack.map((tech: string, i: number) => (
                  <span 
                    key={i} 
                    className="px-4 py-2 text-xs font-mono rounded-xl bg-black/50 text-gray-300 border border-white/10 backdrop-blur-md hover:border-white/30 transition-colors cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 shrink-0">
                <a href={project.github} target="_blank" rel="noreferrer" className="px-8 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-all text-sm backdrop-blur-md">
                  View Source
                </a>
                {project.liveDemo !== "#" && (
                  <a href={project.liveDemo} target="_blank" rel="noreferrer" className="px-8 py-3.5 rounded-xl text-black font-bold hover:scale-[1.02] transition-all text-sm shadow-lg hover:shadow-xl" style={{ backgroundColor: project.color, boxShadow: `0 4px 20px ${project.color}40` }}>
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export function Projects() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  });

  return (
    <section id="projects" className="relative w-full bg-black border-t border-white/5">
      <div className="pt-32 pb-16 px-4 max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 font-space">Featured Work</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#FFD700] to-[#F59E0B] mx-auto rounded-full" />
        </motion.div>
      </div>

      <div ref={container} className="relative mt-[5vh] pb-[10vh]">
        {PROJECTS.slice(0, 4).map((project, i) => {
          const targetScale = 1 - ( (4 - i) * 0.05);
          return (
            <ProjectCard 
              key={project.id} 
              i={i} 
              project={project} 
              progress={scrollYProgress} 
              range={[i * 0.25, 1]} 
              targetScale={targetScale} 
            />
          );
        })}
      </div>

      <div className="flex justify-center pb-32">
        <Link href="/projects" className="group relative inline-flex px-8 py-4 bg-white/5 text-white border border-[#FFD700]/30 font-bold rounded-full overflow-hidden text-center transition-all hover:bg-[#FFD700]/10 hover:border-[#FFD700]/50 active:scale-95 backdrop-blur-sm">
          <span className="relative z-10 flex items-center justify-center gap-2">
            View All Projects
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform">
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </span>
          <div className="absolute inset-0 bg-white/20 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300 rounded-full" />
        </Link>
      </div>
    </section>
  );
}
