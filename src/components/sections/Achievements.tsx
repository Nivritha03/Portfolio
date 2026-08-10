"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Trophy, Award, Target, Brain, Code, Shield, Database, Sparkles, Activity } from "lucide-react";
import { ACHIEVEMENTS, CERTIFICATIONS, Achievement } from "@/constants/achievements";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  trophy: Trophy,
  award: Award,
  target: Target,
  brain: Brain,
  code: Code,
  shield: Shield,
  database: Database,
  sparkles: Sparkles
};

export function Achievements() {
  const [activeCategory, setActiveCategory] = useState(CERTIFICATIONS[0].id);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  // Custom 3D Tilt Hook/Logic for individual cards
  const [tilt, setTilt] = useState<{ id: number; x: number; y: number } | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, id: number) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Max tilt: 8 degrees
    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;
    
    setTilt({ id, x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setTilt(null);
  };

  const activeCategoryData = CERTIFICATIONS.find((cat) => cat.id === activeCategory);

  return (
    <section id="achievements" className="relative w-full py-32 bg-black border-t border-white/5 overflow-hidden">
      {/* Dynamic Aura Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[20%] right-[10%] h-[500px] w-[500px] rounded-full bg-[#FFD700] opacity-[0.03] blur-[150px] mix-blend-screen" />
        <div className="absolute bottom-[20%] left-[10%] h-[500px] w-[500px] rounded-full bg-[#EC4899] opacity-[0.03] blur-[150px] mix-blend-screen" />
      </div>

      {/* Grid Pattern Background */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:30px_30px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="mb-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#FFD700]/20 bg-[#FFD700]/5 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#FFD700] animate-pulse" />
            <span className="text-xs font-mono text-[#FFD700] uppercase tracking-widest">Milestones</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 font-space">
            Achievements & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] via-[#F59E0B] to-white">Accolades</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto font-mono text-sm leading-relaxed">
            A showcase of hackathons won, competitive milestones, and professional certifications earned.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#FFD700] to-[#F59E0B] mx-auto mt-6 rounded-full" />
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          {ACHIEVEMENTS.map((ach) => {
            const IconComponent = iconMap[ach.icon] || Trophy;
            const isHovered = hoveredCard === ach.id;
            const cardTilt = tilt && tilt.id === ach.id ? tilt : { x: 0, y: 0 };
            
            // Determine sizing for bento layout
            // Card 1: 1st Place Winner - col-span-2 on md+
            // Card 2: 2nd Place Ideathon - col-span-1
            // Card 3, 4, 5: col-span-1
            const colSpanClass = ach.id === 1 ? "md:col-span-2" : "md:col-span-1";

            return (
              <motion.div
                key={ach.id}
                className={`relative rounded-3xl overflow-hidden border border-white/10 bg-[#0d0d0d] p-8 flex flex-col justify-between group transition-all duration-500 cursor-default ${colSpanClass}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: ach.id * 0.1 }}
                onMouseEnter={() => setHoveredCard(ach.id)}
                onMouseLeave={() => {
                  setHoveredCard(null);
                  handleMouseLeave();
                }}
                onMouseMove={(e) => handleMouseMove(e, ach.id)}
                style={{
                  transform: `perspective(1000px) rotateX(${cardTilt.x}deg) rotateY(${cardTilt.y}deg)`,
                  transformStyle: "preserve-3d",
                  transition: isHovered ? "none" : "all 0.5s ease"
                }}
              >
                {/* Custom Radial Glow */}
                <div
                  className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(400px circle at var(--x, 50%) var(--y, 50%), ${ach.glowColor}, transparent 60%)`
                  }}
                  onMouseMove={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    e.currentTarget.style.setProperty("--x", `${x}px`);
                    e.currentTarget.style.setProperty("--y", `${y}px`);
                  }}
                />

                {/* Glowing border outline */}
                <div className={`absolute inset-px rounded-[23px] pointer-events-none border border-transparent group-hover:border-white/10 transition-colors duration-500`} />
                
                {/* Glowing background gradient glow element */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${ach.gradient} opacity-0 group-hover:opacity-10 filter blur-[40px] transition-opacity duration-700 pointer-events-none rounded-full`} />

                {/* Card Top / Details */}
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-6">
                    {/* Icon wrapper */}
                    <div className={`p-4 rounded-2xl bg-white/5 border border-white/10 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:${ach.gradient} transition-all duration-300`}>
                      <IconComponent className="w-7 h-7" />
                    </div>

                    {/* Badge */}
                    <span className={`px-3.5 py-1 text-[10px] font-bold font-mono uppercase tracking-wider rounded-full border ${ach.badgeColor}`}>
                      {ach.badge}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3 font-space group-hover:text-[#FFD700] transition-colors duration-300">
                    {ach.title}
                  </h3>
                  <p className="text-gray-400 font-mono text-xs mb-4">
                    {ach.subtitle}
                  </p>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {ach.description}
                  </p>
                </div>

                {/* Card Bottom / Stats Callout */}
                <div className="relative z-10 mt-8 pt-6 border-t border-white/5 flex items-end justify-between">
                  <div>
                    <p className="text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-1">Impact / Status</p>
                    <p className="text-sm font-semibold text-white font-mono">{ach.role}</p>
                  </div>
                  
                  {/* Big striking stat callout */}
                  <div className="text-right">
                    <span className={`text-4xl md:text-5xl font-extrabold font-space bg-gradient-to-r ${ach.gradient} bg-clip-text text-transparent block leading-none`}>
                      {ach.stat}
                    </span>
                    <span className="text-[9px] font-mono text-gray-500 uppercase tracking-wider mt-1 block">
                      {ach.statLabel}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Certifications Dashboard Card */}
        <motion.div
          className="relative rounded-3xl border border-white/10 bg-[#0d0d0d] overflow-hidden p-8 md:p-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Dashboard Accent */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#FFD700]/50 to-transparent" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
            {/* Left side: Category Selector */}
            <div className="lg:col-span-4 flex flex-col gap-3">
              <div className="mb-4">
                <span className="px-3 py-1 text-[10px] font-bold font-mono uppercase tracking-widest text-[#FFD700] bg-[#FFD700]/10 border border-[#FFD700]/20 rounded-full">
                  Skill Verification
                </span>
                <h3 className="text-2xl font-bold text-white mt-3 font-space">
                  Professional Certifications
                </h3>
                <p className="text-gray-500 font-mono text-xs mt-1">
                  Validated credentials across specialized categories.
                </p>
              </div>

              {/* Tabs */}
              <div className="flex flex-col gap-2">
                {CERTIFICATIONS.map((cat) => {
                  const CatIcon = iconMap[cat.icon] || Shield;
                  const isActive = activeCategory === cat.id;
                  
                  return (
                    <button
                      key={cat.id}
                      onClick={() => setActiveCategory(cat.id)}
                      className={`w-full text-left px-5 py-4 rounded-2xl flex items-center justify-between border font-mono text-xs transition-all duration-300 ${
                        isActive
                          ? "bg-white/5 border-[#FFD700]/50 text-white shadow-[0_0_15px_rgba(255,215,0,0.05)]"
                          : "bg-transparent border-white/5 text-gray-500 hover:border-white/10 hover:text-gray-300"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <CatIcon className={`w-4 h-4 ${isActive ? "text-[#FFD700]" : "text-gray-500"}`} />
                        <span>{cat.name}</span>
                      </div>
                      <span className={`text-[10px] px-2 py-0.5 rounded-md font-bold ${
                        isActive ? "bg-[#FFD700]/10 text-[#FFD700]" : "bg-white/5 text-gray-500"
                      }`}>
                        {cat.items.length}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right side: Interactive Certification Cloud */}
            <div className="lg:col-span-8 h-full flex flex-col justify-between bg-black/40 border border-white/5 p-6 md:p-8 rounded-2xl min-h-[300px]">
              <div className="flex justify-between items-center mb-6 border-b border-white/5 pb-4">
                <span className="text-[11px] font-mono text-gray-500 uppercase tracking-widest">
                  Showing: <span className="text-white">{activeCategoryData?.name}</span>
                </span>
                <div className="flex items-center gap-1.5 text-[10px] font-mono text-emerald-400">
                  <Activity className="w-3 h-3 animate-pulse" />
                  <span>VERIFIED SECURE</span>
                </div>
              </div>

              {/* Badges Container */}
              <div className="flex flex-wrap gap-3 mb-8">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeCategory}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-wrap gap-3"
                  >
                    {activeCategoryData?.items.map((cert, index) => (
                      <motion.div
                        key={cert}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.05 }}
                        whileHover={{ scale: 1.05, y: -2 }}
                        className="px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-gray-300 font-mono text-xs flex items-center gap-2 hover:border-[#FFD700]/30 hover:text-white hover:bg-white/10 transition-all cursor-default select-none"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#FFD700]/80" />
                        <span>{cert}</span>
                      </motion.div>
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Status footer inside Cloud */}
              <div className="bg-white/5 rounded-xl p-4 border border-white/5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-xs font-mono">
                <div className="flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-bold text-[10px]">
                    ✓
                  </div>
                  <span className="text-gray-400">Credentials officially cleared for systems deployment.</span>
                </div>
                <div className="text-[10px] text-gray-500 uppercase tracking-wider">
                  Total: {CERTIFICATIONS.reduce((acc, cat) => acc + cat.items.length, 0)} Badges
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
