"use client";

import { useRef } from "react";
import { EXPERIENCE } from "@/constants/experience";
import { motion, useScroll, useTransform } from "framer-motion";

export function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="experience" className="relative w-full py-32 bg-black border-t border-white/5 overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#FFD700] rounded-full mix-blend-screen filter blur-[150px] opacity-[0.03]" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#F59E0B] rounded-full mix-blend-screen filter blur-[150px] opacity-[0.03]" />

      <div className="max-w-5xl mx-auto px-4 relative z-10">
        <motion.div 
          className="mb-24 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 font-space">Experience</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#FFD700] to-[#F59E0B] mx-auto rounded-full" />
        </motion.div>

        <div ref={containerRef} className="relative">
          {/* Static Background Vertical Line */}
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[2px] bg-white/10 transform md:-translate-x-1/2" />
          
          {/* Animated Scroll Progress Line */}
          <motion.div 
            className="absolute left-[20px] md:left-1/2 top-0 w-[4px] bg-gradient-to-b from-[#FFD700] via-[#F59E0B] to-transparent transform md:-translate-x-1/2 rounded-full shadow-[0_0_15px_rgba(255,215,0,0.5)] origin-top"
            style={{ height: lineHeight }}
          />

          <div className="space-y-24">
            {EXPERIENCE.map((exp, idx) => (
              <motion.div 
                key={idx}
                className="relative flex flex-col md:flex-row items-center w-full"
                initial={{ opacity: 0, filter: "blur(10px)", y: 50 }}
                whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
              >
                {/* Timeline Dot wrapper for precise alignment */}
                <div className="absolute left-[20px] md:left-1/2 transform -translate-x-1/2 z-20 top-6">
                  <motion.div 
                    className="w-5 h-5 rounded-full bg-black border-[3px] border-[#FFD700] shadow-[0_0_20px_rgba(255,215,0,0.8)]"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  />
                </div>

                {/* Content */}
                <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${idx % 2 === 0 ? 'md:pr-16 md:text-right ml-0 mr-auto' : 'md:pl-16 ml-auto mr-0'}`}>
                  <div className="group p-8 rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent backdrop-blur-xl hover:border-[#FFD700]/50 transition-all duration-500 shadow-2xl relative overflow-hidden">
                    
                    {/* Hover Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#FFD700]/0 via-[#FFD700]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#FFD700] transition-colors">{exp.role}</h3>
                    <h4 className="text-lg text-[#F59E0B] font-mono mb-4">{exp.company}</h4>
                    
                    <div className={`flex flex-col md:flex-row gap-3 text-sm text-gray-500 mb-6 font-mono ${idx % 2 === 0 ? 'md:justify-end' : ''}`}>
                      <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 flex items-center justify-center whitespace-nowrap">{exp.period}</span>
                      <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 flex items-center justify-center whitespace-nowrap">{exp.location}</span>
                    </div>

                    <ul className={`space-y-3 ${idx % 2 === 0 ? 'text-right' : 'text-left'}`}>
                      {exp.description.map((desc, i) => (
                        <li key={i} className="text-gray-400 leading-relaxed text-sm">
                          {desc}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-32 border-t border-white/10 pt-12 text-center text-gray-500 font-mono text-xs relative z-10 max-w-5xl mx-auto px-4">
        <p>© {new Date().getFullYear()} Nivritha Polaboina. Architected with Next.js, Framer Motion & TailwindCSS.</p>
      </div>
    </section>
  );
}
