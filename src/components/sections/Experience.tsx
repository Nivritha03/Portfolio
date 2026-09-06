"use client";

import { useRef } from "react";
import { EXPERIENCE } from "@/constants/experience";
import { motion, useScroll, useTransform } from "framer-motion";
import { Briefcase, Calendar, MapPin, Sparkles, CheckCircle2 } from "lucide-react";

export function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 75%", "end 50%"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="experience" className="relative w-full py-32 bg-black border-t border-white/10 overflow-hidden">
      
      {/* Background Micro-Lighting */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="mb-24 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#FFD700] mb-4">
            <Briefcase className="w-3.5 h-3.5" />
            <span>CAREER MILESTONES</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight font-editorial mb-4">
            Experience & Leadership
          </h2>
          <p className="text-gray-400 font-mono text-xs md:text-sm max-w-md mx-auto">
            A chronological timeline of roles in software engineering, AI research, and technical leadership.
          </p>
        </div>

        <div ref={containerRef} className="relative">
          
          {/* Static Background Vertical Track */}
          <div className="absolute left-[24px] md:left-1/2 top-0 bottom-0 w-[2px] bg-white/10 transform md:-translate-x-1/2" />

          {/* Glowing Animated Progress Track */}
          <motion.div
            className="absolute left-[24px] md:left-1/2 top-0 w-[3px] bg-gradient-to-b from-[#FFD700] via-amber-400 to-emerald-400 transform md:-translate-x-1/2 rounded-full shadow-[0_0_18px_rgba(255,215,0,0.8)] origin-top z-10"
            style={{ height: lineHeight }}
          />

          <div className="space-y-20">
            {EXPERIENCE.map((exp, idx) => (
              <motion.div
                key={idx}
                className="relative flex flex-col md:flex-row items-center w-full"
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                {/* Illuminated Checkpoint Node */}
                <div className="absolute left-[24px] md:left-1/2 transform -translate-x-1/2 z-20 top-6">
                  <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, margin: "-80px" }}
                    className="relative flex items-center justify-center"
                  >
                    {/* Glowing outer pulse ring */}
                    <div className="absolute inset-0 w-8 h-8 -translate-x-1.5 -translate-y-1.5 rounded-full bg-[#FFD700]/20 animate-ping pointer-events-none" />
                    
                    {/* Inner glowing dot */}
                    <div className="w-5 h-5 rounded-full bg-[#0a0a0d] border-2 border-[#FFD700] shadow-[0_0_14px_rgba(255,215,0,0.9)] flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#FFD700]" />
                    </div>
                  </motion.div>
                </div>

                {/* Content Card Box */}
                <div
                  className={`w-full md:w-1/2 pl-14 md:pl-0 ${
                    idx % 2 === 0
                      ? "md:pr-14 md:text-right ml-0 mr-auto"
                      : "md:pl-14 ml-auto mr-0"
                  }`}
                >
                  <motion.div
                    whileHover={{ y: -3 }}
                    className="group relative p-7 md:p-8 rounded-3xl border border-white/15 bg-gradient-to-b from-[#121216] to-[#0a0a0c] backdrop-blur-2xl hover:border-[#FFD700]/50 transition-all duration-300 shadow-xl overflow-hidden"
                  >
                    {/* Top Lighting Accent */}
                    <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#FFD700]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                    {/* Role Title & Company */}
                    <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-[#FFD700] transition-colors tracking-tight">
                      {exp.role}
                    </h3>
                    <h4 className="text-base text-amber-400 font-mono mb-4 flex items-center gap-2 justify-start md:justify-inherit">
                      <span>{exp.company}</span>
                    </h4>

                    {/* Metadata Pills */}
                    <div
                      className={`flex flex-wrap gap-2 text-xs font-mono text-gray-400 mb-6 ${
                        idx % 2 === 0 ? "md:justify-end" : "justify-start"
                      }`}
                    >
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300">
                        <Calendar className="w-3 h-3 text-[#FFD700]" />
                        {exp.period}
                      </span>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300">
                        <MapPin className="w-3 h-3 text-emerald-400" />
                        {exp.location}
                      </span>
                    </div>

                    {/* Accomplishment Bullet Points */}
                    <ul className="space-y-3">
                      {exp.description.map((desc, i) => (
                        <li
                          key={i}
                          className={`flex items-start gap-2.5 text-xs md:text-sm text-gray-300 leading-relaxed font-sans ${
                            idx % 2 === 0 ? "md:flex-row-reverse md:text-right" : "text-left"
                          }`}
                        >
                          <CheckCircle2 className="w-4 h-4 text-[#FFD700] shrink-0 mt-0.5" />
                          <span>{desc}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
