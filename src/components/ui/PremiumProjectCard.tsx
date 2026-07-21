"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { PROJECTS } from "@/constants/projects";
import { ArrowRight, Code2, Play, Zap, CheckCircle2, ShieldAlert } from "lucide-react";

type ProjectType = typeof PROJECTS[0];

export function PremiumProjectCard({ project, onClick, featured }: { project: ProjectType, onClick: () => void, featured?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Production Ready": return <CheckCircle2 className="w-4 h-4 text-green-500" />;
      case "Beta": return <Zap className="w-4 h-4 text-[#F5B301]" />;
      default: return <ShieldAlert className="w-4 h-4 text-blue-400" />;
    }
  };

  const getCategoryIcon = (category: string) => {
    return <div className="w-2 h-2 rounded-full" style={{ backgroundColor: project.color }} />;
  };

  const renderComplexity = (score: number) => {
    const segments = 10;
    const filled = Math.round((score / 100) * segments);
    return (
      <div className="flex gap-1 items-center mt-2">
        <span className="text-xs text-gray-500 font-mono mr-2">COMPLEXITY</span>
        {[...Array(segments)].map((_, i) => (
          <div 
            key={i} 
            className={`h-1.5 w-4 rounded-full ${i < filled ? '' : 'bg-white/10'}`}
            style={i < filled ? { backgroundColor: project.color } : {}}
          />
        ))}
        <span className="text-xs font-mono ml-2 text-white/50">{score}</span>
      </div>
    );
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      variants={{
        hidden: { opacity: 0, y: 40, scale: 0.95 },
        visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 60, damping: 20 } }
      }}
      whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.3, ease: "easeOut" } }}
      className="relative group cursor-pointer h-full flex flex-col"
      style={{ '--project-color': project.color } as React.CSSProperties}
    >
      {/* Spotlight effect */}
      <div 
        className="absolute inset-0 z-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100 rounded-[2rem] pointer-events-none"
        style={{
          background: `radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.06), transparent 40%)`,
        }}
      />

      {/* Animated glowing border */}
      <div className="absolute -inset-[1px] rounded-[2rem] bg-gradient-to-br from-white/10 via-transparent to-white/5 opacity-50 group-hover:opacity-100 transition-opacity z-0 pointer-events-none" />
      
      <div className="absolute -inset-[1px] rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity z-0 pointer-events-none" 
        style={{
          background: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, ${project.color}60, transparent 40%)`,
        }}
      />

      {/* Outer shadow glow */}
      <div 
        className="absolute -inset-2 rounded-[2rem] blur-2xl opacity-0 group-hover:opacity-20 transition duration-700 pointer-events-none bg-[var(--project-color)] z-0"
      />

      {/* Main content container */}
      <div className="relative z-10 flex flex-col h-full bg-[#060606]/90 backdrop-blur-xl rounded-[2rem] border border-white/5 overflow-hidden p-6 md:p-8">
        
        {/* Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-gray-300">
            {getStatusIcon(project.status || "Beta")}
            {project.status || "Beta"}
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-gray-400 font-mono uppercase tracking-wider">
            {getCategoryIcon(project.category || "AI")}
            {project.category || "AI"}
          </div>
        </div>

        {/* Title & Description */}
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-white mb-2 group-hover:text-[var(--project-color)] transition-colors duration-300 flex items-center gap-2">
            {project.title}
          </h2>
          <h3 className="text-sm font-mono text-[var(--project-color)] mb-4">{project.subtitle}</h3>
          
          <p className="text-gray-400 text-sm md:text-base leading-relaxed line-clamp-3 group-hover:text-gray-300 transition-colors">
            {project.features.join(" ")}
          </p>
        </div>

        {/* Complexity Meter */}
        <div className="mb-8">
          {renderComplexity(project.complexity || 80)}
        </div>

        {/* Footer */}
        <div className="mt-auto pt-6 border-t border-white/5 group-hover:border-white/10 transition-colors">
          <div className="flex flex-wrap gap-2 mb-6">
            {project.techStack.slice(0, 4).map((tech, idx) => (
              <span 
                key={idx} 
                className="px-2.5 py-1 text-[11px] font-mono rounded-lg bg-black/80 backdrop-blur-md text-gray-300 border border-white/5 group-hover:border-white/10 group-hover:-translate-y-0.5 transition-all cursor-default"
              >
                {tech}
              </span>
            ))}
            {project.techStack.length > 4 && (
              <span className="px-2.5 py-1 text-[11px] font-mono rounded-lg bg-white/5 text-gray-500 border border-transparent cursor-default">
                +{project.techStack.length - 4} more
              </span>
            )}
          </div>
          
          <div className="flex items-center gap-4 justify-between w-full">
            <span className="text-sm font-medium text-[var(--project-color)] flex items-center gap-1 opacity-80 group-hover:opacity-100 transition-opacity">
              View Case Study <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>

            <div className="flex items-center gap-3">
              {project.github && (
                <button 
                  onClick={(e) => { e.stopPropagation(); window.open(project.github, "_blank"); }}
                  className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
                >
                  <Code2 className="w-4 h-4" />
                </button>
              )}
              {project.liveDemo !== "#" && (
                <button 
                  onClick={(e) => { e.stopPropagation(); window.open(project.liveDemo, "_blank"); }}
                  className="p-2 rounded-full text-black transition-transform hover:scale-110"
                  style={{ backgroundColor: project.color, boxShadow: `0 0 20px ${project.color}40` }}
                >
                  <Play className="w-4 h-4 ml-0.5" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
