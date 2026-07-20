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
    <div ref={containerRef} className="h-screen flex items-center justify-center sticky top-0">
      <motion.div 
        style={{ scale, top: `calc(-5vh + ${i * 25}px)` }} 
        className="relative flex flex-col w-full max-w-4xl p-8 rounded-3xl origin-top border border-white/10 bg-[#111111] shadow-[0_-20px_50px_rgba(0,0,0,0.5)]"
      >
        <h2 className="text-4xl font-bold text-white mb-2">{project.title}</h2>
        <h3 className="text-xl text-[#FFD700] font-mono mb-8">{project.subtitle}</h3>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-1/2">
            <div className="relative aspect-video rounded-xl overflow-hidden border border-white/10 bg-black group">
              <div className="absolute inset-0 bg-gradient-to-tr from-black/80 to-transparent z-10 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-500" />
              
              <div className="absolute inset-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#111111] to-black flex flex-col items-center justify-center">
                <span className="text-gray-600 font-mono text-2xl animate-pulse mb-4">Live Preview</span>
                <div className="absolute inset-4 overflow-hidden opacity-20 pointer-events-none text-left flex items-start justify-start">
                  <pre className="text-xs text-[#FFD700] font-mono leading-relaxed p-4">
                    {`const config = {
  project: "${project.id}",
  status: "active",
  tech: [${project.techStack.map((t: string) => `"${t}"`).join(', ')}]
};

async function deploy() {
  await App.init();
  console.log("Deployed successfully");
}`}
                  </pre>
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 flex flex-col justify-between">
            <ul className="space-y-4 mb-8">
              {project.features.map((feature: string, idx: number) => (
                <li key={idx} className="text-gray-300 flex items-start gap-3">
                  <span className="text-[#FFD700] mt-1 text-lg">▹</span>
                  <span className="text-left text-sm leading-relaxed">{feature}</span>
                </li>
              ))}
            </ul>
            
            <div>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.techStack.map((tech: string, i: number) => (
                  <span key={i} className="px-3 py-1 text-xs font-mono rounded-full bg-white/5 text-[#F59E0B] border border-white/10">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a href={project.github} className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-colors text-sm">View Source</a>
                {project.liveDemo !== "#" && (
                  <a href={project.liveDemo} className="px-6 py-3 rounded-full bg-[#FFD700] text-black font-bold hover:scale-105 transition-transform text-sm shadow-[0_0_20px_rgba(255,215,0,0.2)]">Live Demo</a>
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
