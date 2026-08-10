"use client";

import { motion } from "framer-motion";

export function FloatingSocials() {
  return (
    <div className="hidden lg:flex fixed bottom-0 left-8 xl:left-12 z-40 flex-col items-center gap-6">
      <motion.div
        className="flex flex-col gap-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        <a
          href="https://github.com/Nivritha03"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-[#FFD700] hover:-translate-y-1 hover:scale-110 transition-all duration-300 block"
          aria-label="GitHub"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="drop-shadow-[0_0_8px_rgba(255,215,0,0.3)]">
            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
            <path d="M9 18c-4.51 2-5-2-7-2"></path>
          </svg>
        </a>
        <a
          href="https://www.linkedin.com/in/nivritha-pola-b8b4b52a0/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-[#FFD700] hover:-translate-y-1 hover:scale-110 transition-all duration-300 block"
          aria-label="LinkedIn"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="drop-shadow-[0_0_8px_rgba(255,215,0,0.3)]">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
            <rect x="2" y="9" width="4" height="12"></rect>
            <circle cx="4" cy="4" r="2"></circle>
          </svg>
        </a>
        <a
          href="mailto:nivritha.pola@gmail.com"
          className="text-gray-400 hover:text-[#FFD700] hover:-translate-y-1 hover:scale-110 transition-all duration-300 block"
          aria-label="Email"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="drop-shadow-[0_0_8px_rgba(255,215,0,0.3)]">
            <rect width="20" height="16" x="2" y="4" rx="2"></rect>
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
          </svg>
        </a>
      </motion.div>
      {/* Thin glowing vertical line */}
      <motion.div
        className="w-[1px] h-32 bg-gradient-to-b from-[#FFD700] to-transparent origin-bottom"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
      />
    </div>
  );
}
