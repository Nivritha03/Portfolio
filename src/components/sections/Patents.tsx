"use client";

import { motion } from "framer-motion";

export function Patents() {
  return (
    <section id="patents" className="relative w-full py-32 bg-black overflow-hidden border-t border-white/5">
      {/* Abstract Grid Background */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-[#FFD700] opacity-[0.05] blur-[120px] pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-space">Research & Patents</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#FFD700] to-[#F59E0B] mx-auto rounded-full" />
        </motion.div>

        <motion.div 
          className="relative max-w-3xl mx-auto p-1 rounded-3xl bg-gradient-to-br from-white/20 via-white/5 to-white/10"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative p-10 md:p-16 rounded-[23px] bg-[#111111] overflow-hidden group">
            {/* Glossy reflection */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none transform -translate-x-full group-hover:translate-x-full" />
            
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#FFD700]/20 to-transparent blur-2xl rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
            
            <div className="relative z-10">
              <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#FFD700]/10 border border-[#FFD700]/30 text-[#FFD700]">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                  <polyline points="3.29 7 12 12 20.71 7"/>
                  <line x1="12" y1="22" x2="12" y2="12"/>
                </svg>
              </div>
              
              <div className="flex items-center justify-center gap-3 mb-4">
                <span className="px-3 py-1 text-xs font-bold uppercase tracking-widest text-[#111111] bg-[#FFD700] rounded-full">Patent Filed</span>
              </div>
              
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 font-space group-hover:text-[#FFD700] transition-colors duration-300">
                AI Virtual Professor
              </h3>
              
              <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed mb-10">
                Invented an AI-powered adaptive virtual teaching and personalized learning system designed to fundamentally change how educational content is delivered.
              </p>
              
              <div className="inline-flex gap-2">
                <span className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm text-gray-300 font-mono">Generative AI</span>
                <span className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm text-gray-300 font-mono">Personalized Learning</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
