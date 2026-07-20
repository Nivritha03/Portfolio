"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [timeStr, setTimeStr] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const targetId = href.replace("#", "");
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: "smooth" });
      window.history.replaceState(null, "", window.location.pathname);
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 flex justify-center px-4 pt-4 ${
          scrolled ? "pt-3" : "pt-6"
        }`}
      >
        <div className="w-full max-w-7xl flex items-center justify-between px-5 md:px-6 py-3 rounded-full bg-black/50 backdrop-blur-xl border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.8)] hover:border-[#FFD700]/30 transition-all duration-300">
          
          {/* Brand Logo (Static) */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#FFD700] to-[#F59E0B] p-[1px] flex items-center justify-center shadow-[0_0_15px_rgba(255,215,0,0.3)]">
              <div className="w-full h-full rounded-full bg-black flex items-center justify-center font-space font-bold text-sm text-[#FFD700]">
                N
              </div>
            </div>
            <span className="font-space font-bold text-white tracking-wider text-sm">
              NIVRITHA
            </span>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-white/5 p-1 rounded-full border border-white/5">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className="px-4 py-1.5 rounded-full text-xs font-mono text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-200"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Live Status & Mobile Toggle */}
          <div className="flex items-center gap-3">
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

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                {mobileMenuOpen ? (
                  <path d="M18 6L6 18M6 6l12 12" />
                ) : (
                  <path d="M4 12h16M4 6h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

        </div>
      </motion.header>

      {/* Mobile Sliding Glass Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-24 left-4 right-4 z-40 p-6 rounded-3xl bg-black/90 backdrop-blur-2xl border border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.9)] md:hidden flex flex-col gap-3"
          >
            <div className="flex justify-between items-center mb-2 pb-3 border-b border-white/10">
              <span className="text-xs font-mono text-[#FFD700] uppercase tracking-wider">Navigation Menu</span>
              <span className="text-[11px] font-mono text-gray-500">IST {timeStr}</span>
            </div>

            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className="w-full text-left px-4 py-3 rounded-xl bg-white/5 border border-white/5 text-gray-200 font-mono text-sm hover:text-[#FFD700] hover:bg-white/10 hover:border-[#FFD700]/30 transition-all flex items-center justify-between"
              >
                <span>{item.name}</span>
                <span className="text-gray-600 text-xs">→</span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
