"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [timeStr, setTimeStr] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);

    // Update time readout
    const updateTime = () => {
      const now = new Date();
      setTimeStr(now.toLocaleTimeString("en-US", { timeZone: "Asia/Kolkata", hour12: false }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(interval);
    };
  }, []);

  const navItems = [
    { name: "Overview", href: "#hero" },
    { name: "Arsenal", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Patents", href: "#patents" },
    { name: "Terminal", href: "#terminal" },
    { name: "Experience", href: "#experience" },
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 flex justify-center px-4 pt-4 ${
        scrolled ? "pt-3" : "pt-6"
      }`}
    >
      <div className="w-full max-w-7xl flex items-center justify-between px-6 py-3 rounded-full bg-black/40 backdrop-blur-xl border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.8)] hover:border-[#FFD700]/30 transition-all duration-300">
        
        {/* Brand Logo */}
        <Link href="#hero" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#FFD700] to-[#F59E0B] p-[1px] flex items-center justify-center shadow-[0_0_15px_rgba(255,215,0,0.3)]">
            <div className="w-full h-full rounded-full bg-black flex items-center justify-center font-space font-bold text-sm text-[#FFD700] group-hover:bg-[#FFD700] group-hover:text-black transition-colors duration-300">
              N
            </div>
          </div>
          <span className="font-space font-bold text-white tracking-wider text-sm hidden sm:inline-block group-hover:text-[#FFD700] transition-colors">
            NIVRITHA<span className="text-[#FFD700]">.AI</span>
          </span>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-white/5 p-1 rounded-full border border-white/5">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                const targetId = item.href.replace("#", "");
                const targetEl = document.getElementById(targetId);
                if (targetEl) {
                  targetEl.scrollIntoView({ behavior: "smooth" });
                  window.history.replaceState(null, "", window.location.pathname);
                }
              }}
              className="px-4 py-1.5 rounded-full text-xs font-mono text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-200"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Live Status & Clock */}
        <div className="flex items-center gap-4">
          <div className="hidden lg:flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/5 font-mono text-[11px] text-gray-400">
            <span className="text-[#FFD700]">IST</span>
            <span>{timeStr || "18:00:00"}</span>
          </div>

          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-xs">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="hidden sm:inline">AVAILABLE</span>
          </div>
        </div>

      </div>
    </motion.header>
  );
}
