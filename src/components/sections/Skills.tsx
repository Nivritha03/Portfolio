"use client";

import { motion } from "framer-motion";
import { FEATURED_TECH_STACK, SKILLS } from "@/constants/skills";

export function Skills() {
  return (
    <section id="skills" className="relative w-full py-32 bg-black overflow-hidden border-t border-white/5">
      {/* Background Particles/Grid */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]">
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-[#FFD700] opacity-10 blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        
        <motion.div 
          className="mb-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 font-space">Technical Arsenal</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#FFD700] to-[#F59E0B] mx-auto rounded-full" />
        </motion.div>

        {/* Featured Tech Stack Infinite Marquee */}
        <div className="relative flex overflow-x-hidden w-full mb-16 group">
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10" />
          
          <motion.div 
            className="flex gap-8 whitespace-nowrap py-4"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ ease: "linear", duration: 30, repeat: Infinity }}
          >
            {[...FEATURED_TECH_STACK, ...FEATURED_TECH_STACK].map((tech, i) => (
              <div 
                key={i} 
                className="flex items-center justify-center px-8 py-4 rounded-xl border border-white/10 bg-[#111111] text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-500 hover:from-[#FFD700] hover:to-[#F59E0B] transition-colors duration-500 cursor-default shadow-[0_0_20px_rgba(255,215,0,0.05)]"
              >
                {tech}
              </div>
            ))}
          </motion.div>
        </div>

        {/* True Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[250px]">
          
          {/* Main AI Tile - Spans 2x2 on desktop, auto-height on mobile */}
          <motion.div 
            className="col-span-1 md:col-span-2 lg:col-span-2 md:row-span-2 relative p-6 md:p-8 rounded-3xl border border-white/10 bg-[#111111] hover:border-[#FFD700]/50 transition-all duration-500 overflow-hidden group"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-gradient-to-bl from-[#FFD700]/20 to-transparent rounded-full blur-3xl group-hover:scale-110 transition-transform duration-700" />
            
            <h3 className="relative z-10 text-3xl font-bold text-white mb-2 font-space">AI & Machine Learning</h3>
            <p className="text-gray-400 mb-8 max-w-sm">Architecting autonomous agents and deploying scalable ML models.</p>
            
            <div className="relative z-10 flex flex-wrap gap-3">
              {SKILLS.find(s => s.category.includes("AI"))?.items.map((item, i) => (
                <span key={i} className="px-4 py-2 bg-black/50 border border-white/10 rounded-lg text-sm text-[#FFD700] backdrop-blur-md">
                  {item}
                </span>
              ))}
            </div>

            {/* Decorative background grid/animation */}
            <div className="absolute bottom-[-10%] right-[-10%] w-[80%] h-[60%] opacity-30 group-hover:opacity-60 transition-opacity duration-500 pointer-events-none">
                <svg className="w-full h-full text-[#FFD700]" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.5">
                  <motion.path 
                    d="M 0,50 Q 25,20 50,50 T 100,50" 
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  />
                  <motion.path 
                    d="M 0,60 Q 30,10 60,60 T 100,60" 
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
                    strokeDasharray="4 4"
                  />
                </svg>
            </div>
          </motion.div>

          {/* Languages Tile */}
          <motion.div 
            className="col-span-1 md:col-span-1 lg:col-span-2 row-span-1 relative p-8 rounded-3xl border border-white/10 bg-gradient-to-br from-[#111111] to-black hover:border-white/30 transition-all duration-500 overflow-hidden group flex flex-col justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-xl font-bold text-white mb-4 font-space flex items-center gap-2">
              <span className="text-[#F59E0B]">&lt;/&gt;</span> Languages
            </h3>
            <div className="flex flex-wrap gap-2">
              {SKILLS.find(s => s.category === "Languages")?.items.map((item, i) => (
                <span key={i} className="px-3 py-1.5 bg-white/5 rounded-md text-sm text-gray-300 font-mono border border-transparent group-hover:border-white/10 transition-colors">
                  {item}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Java Full Stack Tile */}
          <motion.div 
            className="col-span-1 md:col-span-2 lg:col-span-1 row-span-1 relative p-8 rounded-3xl border border-white/10 bg-[#111111] hover:border-[#FFD700]/30 transition-all duration-500 overflow-hidden group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="absolute top-4 right-4 w-12 h-12 rounded-full border border-dashed border-[#FFD700]/30 animate-[spin_10s_linear_infinite]" />
            <h3 className="text-xl font-bold text-white mb-4 font-space">Java Full Stack</h3>
            <div className="flex flex-col gap-2">
              {SKILLS.find(s => s.category === "Java Full Stack")?.items.slice(0, 4).map((item, i) => (
                <div key={i} className="w-full h-8 flex items-center">
                  <div className="w-full bg-white/5 rounded-full h-2 overflow-hidden">
                    <motion.div 
                      className="bg-gradient-to-r from-gray-500 to-[#FFD700]"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${90 - (i * 8)}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 + (i * 0.1) }}
                    />
                  </div>
                  <span className="ml-3 text-xs text-gray-400 font-mono w-24 whitespace-nowrap">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* MERN Stack Tile */}
          <motion.div 
            className="col-span-1 md:col-span-1 lg:col-span-1 row-span-1 relative p-8 rounded-3xl border border-white/10 bg-[#111111] hover:border-[#F59E0B]/30 transition-all duration-500 overflow-hidden group flex flex-col justify-end"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0iI2ZmZiIvPjwvc3ZnPg==')]" />
            <h3 className="text-xl font-bold text-white mb-2 font-space relative z-10">MERN Stack</h3>
            <p className="text-xs text-[#F59E0B] font-mono mb-4 relative z-10">Web Ecosystem</p>
            <div className="flex flex-wrap gap-2 relative z-10">
              {SKILLS.find(s => s.category === "MERN Stack")?.items.slice(0, 4).map((item, i) => (
                <span key={i} className="px-2 py-1 bg-white/10 rounded text-xs text-white backdrop-blur-sm border border-white/5">
                  {item}
                </span>
              ))}
              <span className="px-2 py-1 bg-transparent rounded text-xs text-gray-500 font-bold tracking-widest">
                ...
              </span>
            </div>
          </motion.div>

          {/* Cloud & DevOps Tile */}
          <motion.div 
            className="col-span-1 md:col-span-3 lg:col-span-2 row-span-1 relative p-8 rounded-3xl border border-white/10 bg-[#111111] hover:border-[#FFD700]/30 transition-all duration-500 overflow-hidden group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#FFD700]/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700 pointer-events-none" />
            <h3 className="text-xl font-bold text-white mb-2 font-space">Cloud & DevOps</h3>
            <p className="text-sm text-gray-400 mb-4">Scalable Infrastructure & CI/CD</p>
            <div className="flex flex-wrap gap-2">
              {SKILLS.find(s => s.category === "Cloud & DevOps")?.items.map((item, i) => (
                <span key={i} className="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-sm text-[#F59E0B] font-mono group-hover:border-[#F59E0B]/30 transition-colors">
                  {item}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Data Science Tile */}
          <motion.div 
            className="col-span-1 md:col-span-3 lg:col-span-2 row-span-1 relative p-8 rounded-3xl border border-white/10 bg-gradient-to-tr from-black to-[#111111] hover:border-white/30 transition-all duration-500 overflow-hidden group flex flex-col justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <h3 className="text-xl font-bold text-white mb-4 font-space">Data Science & Analytics</h3>
            <div className="flex flex-wrap gap-2">
              {SKILLS.find(s => s.category === "Data Science")?.items.map((item, i) => (
                <span key={i} className="px-3 py-1 bg-white/10 rounded-full text-xs text-gray-300 font-bold border border-transparent group-hover:border-white/20 transition-colors">
                  {item}
                </span>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
