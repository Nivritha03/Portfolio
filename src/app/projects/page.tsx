"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { PROJECTS } from "@/constants/projects";
import { PremiumProjectCard } from "@/components/ui/PremiumProjectCard";
import { ProjectModal } from "@/components/ui/ProjectModal";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { Search, LayoutGrid, List } from "lucide-react";

type ProjectType = typeof PROJECTS[0];

const CATEGORIES = ["All", "AI", "Computer Vision", "LLM", "Cloud", "Automation", "Accessibility", "Full-Stack"];

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState<"grid" | "timeline">("grid");
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(null);

  // Filter projects based on category and search query
  const filteredProjects = useMemo(() => {
    return PROJECTS.filter(project => {
      const matchesCategory = selectedCategory === "All" || project.category === selectedCategory;
      const query = searchQuery.toLowerCase();
      const matchesSearch = 
        project.title.toLowerCase().includes(query) || 
        project.techStack.some(tech => tech.toLowerCase().includes(query)) ||
        project.subtitle.toLowerCase().includes(query) ||
        (project.category && project.category.toLowerCase().includes(query));
      
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <main className="min-h-screen bg-[#060606] w-full text-white selection:bg-[#F5B301]/30 relative overflow-hidden">
      
      {/* Background Elements */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.02)_1px,_transparent_1px)] bg-[length:24px_24px]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] opacity-20 bg-[radial-gradient(ellipse_at_top,_#F5B301,_transparent_60%)] blur-[100px]" />
      </div>
      
      {/* Navigation */}
      <div className="fixed top-8 left-8 z-50">
        <Link href="/" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all backdrop-blur-md">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:-translate-x-1">
            <path d="m15 18-6-6 6-6"/>
          </svg>
          Back to Home
        </Link>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-24 min-h-screen flex flex-col">
        
        {/* Hero Section */}
        <motion.div 
          className="mb-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-block relative mb-6">
            <div className="absolute -inset-4 bg-gradient-to-r from-[#FFD700] to-[#F59E0B] opacity-20 blur-2xl rounded-full" />
            <h1 className="relative text-5xl md:text-7xl font-bold font-space tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-gray-400">
              Project Showcase
            </h1>
          </div>
          
          <p className="text-gray-400 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed mb-16">
            A curated collection of production-ready AI platforms spanning Multi-Agent AI, Computer Vision, Accessibility, Cloud Infrastructure, Digital Twins, and Automation.
          </p>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2 font-space">
                <AnimatedCounter value={12} delay={0.2} />+
              </div>
              <span className="text-sm font-mono text-gray-500 uppercase tracking-wider">Enterprise Projects</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2 font-space">
                <AnimatedCounter value={35} delay={0.4} />+
              </div>
              <span className="text-sm font-mono text-gray-500 uppercase tracking-wider">AI Technologies</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2 font-space">
                <AnimatedCounter value={6} delay={0.6} />
              </div>
              <span className="text-sm font-mono text-gray-500 uppercase tracking-wider">Industries</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2 font-space">
                <AnimatedCounter value={100} delay={0.8} />K+
              </div>
              <span className="text-sm font-mono text-gray-500 uppercase tracking-wider">Lines of Code</span>
            </div>
          </div>
        </motion.div>

        {/* Controls Section (Filters & Search) */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-12 sticky top-6 z-40 bg-[#060606]/80 backdrop-blur-xl p-4 rounded-3xl border border-white/5 shadow-2xl">
          
          {/* Categories */}
          <div className="flex overflow-x-auto w-full lg:w-auto pb-2 lg:pb-0 hide-scrollbar gap-2">
            {CATEGORIES.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`relative px-5 py-2.5 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${selectedCategory === category ? 'text-black' : 'text-gray-400 hover:text-white bg-white/5 hover:bg-white/10'}`}
              >
                {selectedCategory === category && (
                  <motion.div 
                    layoutId="activeCategory"
                    className="absolute inset-0 bg-gradient-to-r from-[#FFD700] to-[#F59E0B] rounded-full"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{category}</span>
              </button>
            ))}
          </div>

          {/* Search & View Toggle */}
          <div className="flex items-center gap-4 w-full lg:w-auto">
            <div className="relative flex-1 lg:w-64">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
              <input 
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-full py-2.5 pl-11 pr-4 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#F5B301]/50 focus:bg-white/10 transition-all"
              />
            </div>
            
            <div className="flex items-center bg-white/5 border border-white/10 rounded-full p-1">
              <button 
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded-full transition-colors ${viewMode === "grid" ? 'bg-white/10 text-white' : 'text-gray-500 hover:text-gray-300'}`}
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
              <button 
                onClick={() => setViewMode("timeline")}
                className={`p-2 rounded-full transition-colors ${viewMode === "timeline" ? 'bg-white/10 text-white' : 'text-gray-500 hover:text-gray-300'}`}
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Projects Display */}
        <AnimatePresence mode="wait">
          {filteredProjects.length === 0 ? (
            <motion.div 
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex-1 flex flex-col items-center justify-center text-gray-500 py-32"
            >
              <Search className="w-12 h-12 mb-4 opacity-20" />
              <p className="text-xl">No projects found matching your criteria.</p>
            </motion.div>
          ) : viewMode === "grid" ? (
            <motion.div 
              key="grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr"
            >
              {filteredProjects.map((project, i) => (
                <PremiumProjectCard 
                  key={project.id} 
                  project={project} 
                  featured={project.featured} 
                  onClick={() => setSelectedProject(project)}
                />
              ))}
            </motion.div>
          ) : (
            <motion.div 
              key="timeline"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col gap-8 max-w-4xl mx-auto w-full relative pt-12"
            >
              {/* Timeline View Implementation */}
              <div className="absolute left-[39px] md:left-1/2 top-0 bottom-0 w-px bg-white/10" />
              
              {filteredProjects.map((project, i) => (
                <div key={project.id} className={`relative flex flex-col md:flex-row gap-8 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  
                  {/* Timeline Dot */}
                  <div className="absolute left-[39px] md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-4 border-[#060606] z-10" style={{ backgroundColor: project.color }} />
                  
                  {/* Card Content */}
                  <div className="w-full md:w-1/2 pl-24 md:pl-0">
                    <div className={`md:max-w-md ${i % 2 === 0 ? 'md:ml-auto md:pl-12' : 'md:mr-auto md:pr-12'}`}>
                      <div 
                        onClick={() => setSelectedProject(project)}
                        className="p-6 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all cursor-pointer group"
                      >
                        <div className="flex items-center gap-3 mb-4">
                          <span className="px-3 py-1 text-[10px] uppercase tracking-wider font-mono rounded-full bg-white/5 text-gray-300">
                            {project.category}
                          </span>
                          <span className="text-xs font-mono" style={{ color: project.color }}>
                            {project.status}
                          </span>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[var(--project-color)] transition-colors" style={{ '--project-color': project.color } as React.CSSProperties}>
                          {project.title}
                        </h3>
                        <p className="text-sm text-gray-400 mb-6 line-clamp-2">{project.subtitle}</p>
                        
                        <div className="flex flex-wrap gap-2">
                          {project.techStack.slice(0, 3).map((tech, idx) => (
                            <span key={idx} className="px-2 py-1 text-[10px] font-mono rounded-md bg-black/50 text-gray-400">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </AnimatePresence>
      
      {/* Global CSS for hiding scrollbars on category filter */}
      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </main>
  );
}
