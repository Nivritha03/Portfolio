"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
// @ts-expect-error maath/random missing types
import * as random from "maath/random/dist/maath-random.esm";
import { motion, useScroll, useTransform } from "framer-motion";
import { heroTextReveal } from "@/animations/hero";
import { slideUp } from "@/animations/slide";
import * as THREE from "three";
import Image from "next/image";
import { MagneticButton } from "@/components/ui/MagneticButton";

function StarBackground(props: React.ComponentPropsWithoutRef<typeof Points>) {
  const ref = useRef<THREE.Points>(null!);
  // Float32Array length must be a multiple of 3 for 3D coordinates (x, y, z)
  const sphere = random.inSphere(new Float32Array(5000 * 3), { radius: 1.5 });

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 20;
      ref.current.rotation.y -= delta / 25;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere as Float32Array} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color="#FFD700"
          size={0.0015}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

export function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -150]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-black">
      {/* 3D Particle Background */}
      <div className="absolute inset-0 z-0 opacity-40">
        <Canvas camera={{ position: [0, 0, 1] }}>
          <StarBackground />
        </Canvas>
      </div>

      {/* Aurora Glow */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-black to-black pointer-events-none">
         <div className="absolute top-[10%] left-[10%] h-[600px] w-[600px] rounded-full bg-[#FFD700] opacity-[0.05] blur-[150px] mix-blend-screen animate-pulse" />
         <div className="absolute bottom-[10%] right-[10%] h-[600px] w-[600px] rounded-full bg-[#F59E0B] opacity-[0.05] blur-[150px] mix-blend-screen animate-pulse" style={{ animationDelay: "2s" }} />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between px-6 lg:px-12 w-full max-w-7xl mx-auto pt-36 lg:pt-40 pb-16 gap-16">
        
        {/* Left Side: Typography */}
        <motion.div style={{ y: y1, opacity }} className="flex-1 flex flex-col items-start text-left z-20">
          
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8 shadow-[0_0_15px_rgba(255,215,0,0.1)]"
            variants={slideUp}
            initial="hidden"
            animate="visible"
          >
            <span className="h-2 w-2 rounded-full bg-[#FFD700] animate-ping" />
            <span className="text-sm font-medium text-white/80 uppercase tracking-widest font-mono">Available for impact</span>
          </motion.div>

          <div className="overflow-hidden mb-2 w-full">
            <motion.h1 
              className="text-4xl sm:text-6xl md:text-8xl lg:text-[7rem] font-bold tracking-tighter text-white font-space leading-[0.95] break-words"
              variants={heroTextReveal}
              initial="hidden"
              animate="visible"
            >
              NIVRITHA
            </motion.h1>
          </div>
          <div className="overflow-hidden mb-8 w-full">
            <motion.h1 
              className="text-4xl sm:text-6xl md:text-8xl lg:text-[7rem] font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] via-[#F59E0B] to-white font-space leading-[0.95] break-words"
              variants={heroTextReveal}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.1 }}
            >
              POLABOINA.
            </motion.h1>
          </div>
          
          <div className="overflow-hidden mb-10">
            <motion.h2 
              className="text-xl md:text-3xl text-gray-300 font-medium font-mono border-l-2 border-[#FFD700] pl-6"
              variants={heroTextReveal}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.2 }}
            >
              AI Systems Engineer <br className="hidden md:block"/>& Full Stack Developer
            </motion.h2>
          </div>

          <motion.p 
            className="text-base md:text-lg text-gray-400 max-w-xl leading-relaxed mb-8"
            variants={slideUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.3 }}
          >
            Architecting intelligent systems and generative AI applications. Focused on highly scalable backend infrastructures and premium frontend experiences.
          </motion.p>

          {/* Live Metrics Grid */}
          <motion.div 
            className="grid grid-cols-3 gap-4 mb-10 w-full max-w-lg p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md"
            variants={slideUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.35 }}
          >
            <div>
              <p className="text-2xl md:text-3xl font-bold font-space text-[#FFD700]">12+</p>
              <p className="text-[11px] font-mono text-gray-400 uppercase tracking-wider">Built Projects</p>
            </div>
            <div className="border-l border-white/10 pl-4">
              <p className="text-2xl md:text-3xl font-bold font-space text-[#F59E0B]">1</p>
              <p className="text-[11px] font-mono text-gray-400 uppercase tracking-wider">AI Patent</p>
            </div>
            <div className="border-l border-white/10 pl-4">
              <p className="text-2xl md:text-3xl font-bold font-space text-white">5+</p>
              <p className="text-[11px] font-mono text-gray-400 uppercase tracking-wider">Tech Stacks</p>
            </div>
          </motion.div>

          <motion.div 
            className="flex flex-col sm:flex-row gap-6 items-center w-full sm:w-auto"
            variants={slideUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.4 }}
          >
            <MagneticButton>
              <a href="#projects" data-cursor="View" className="group relative inline-flex px-8 py-4 bg-[#FFD700] text-black font-bold rounded-full overflow-hidden w-full sm:w-auto text-center transition-transform hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(255,215,0,0.3)]">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Explore Work
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform">
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </span>
                <div className="absolute inset-0 bg-white/20 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300 rounded-full" />
              </a>
            </MagneticButton>

            {/* Social Links */}
            <div className="flex gap-4 items-center">
              <a href="mailto:nivritha.pola@gmail.com" target="_blank" rel="noopener noreferrer" className="group relative p-3.5 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-[#FFD700] hover:border-[#FFD700]/50 hover:bg-[#FFD700]/10 transition-all hover:scale-110 active:scale-95 backdrop-blur-md">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
                <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-black/80 text-[#FFD700] text-xs font-mono font-bold rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap border border-[#FFD700]/30 pointer-events-none shadow-xl">
                  Email Me
                </span>
              </a>
              <a href="https://github.com/Nivritha03" target="_blank" rel="noopener noreferrer" className="group relative p-3.5 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-[#FFD700] hover:border-[#FFD700]/50 hover:bg-[#FFD700]/10 transition-all hover:scale-110 active:scale-95 backdrop-blur-md">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                  <path d="M9 18c-4.51 2-5-2-7-2"></path>
                </svg>
                <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-black/80 text-[#FFD700] text-xs font-mono font-bold rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap border border-[#FFD700]/30 pointer-events-none shadow-xl">
                  GitHub
                </span>
              </a>
              <a href="https://www.linkedin.com/in/nivritha-pola-b8b4b52a0" target="_blank" rel="noopener noreferrer" className="group relative p-3.5 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-[#FFD700] hover:border-[#FFD700]/50 hover:bg-[#FFD700]/10 transition-all hover:scale-110 active:scale-95 backdrop-blur-md">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
                <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-black/80 text-[#FFD700] text-xs font-mono font-bold rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap border border-[#FFD700]/30 pointer-events-none shadow-xl">
                  LinkedIn
                </span>
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Side: Glassmorphic ID Card */}
        <motion.div style={{ y: y2, opacity }} className="flex-1 w-full flex justify-center lg:justify-end relative z-10 mb-20 lg:mb-0">
          <motion.div 
            className="relative w-full max-w-[320px] sm:w-[350px] aspect-[3/4] rounded-2xl border border-white/20 bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-2xl shadow-[0_0_50px_rgba(255,215,0,0.15)] overflow-hidden group"
            initial={{ opacity: 0, rotateY: 30, x: 50 }}
            animate={{ opacity: 1, rotateY: 0, x: 0 }}
            transition={{ duration: 1, type: "spring", bounce: 0.4, delay: 0.5 }}
            whileHover={{ rotateY: 5, rotateX: -5, scale: 1.02 }}
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* Glossy reflection */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/20 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none transform -translate-x-full group-hover:translate-x-full" />

            {/* Cyberpunk HUD Corner Accents */}
            <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-[#FFD700] z-20 pointer-events-none" />
            <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-[#FFD700] z-20 pointer-events-none" />
            <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-[#FFD700] z-20 pointer-events-none" />
            <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-[#FFD700] z-20 pointer-events-none" />

            <div className="p-6 h-full flex flex-col justify-between">
              {/* Header */}
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 rounded-lg bg-[#FFD700]/20 flex items-center justify-center border border-[#FFD700]/50">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFD700" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2L2 7l10 5 10-5-10-5Z"/>
                    <path d="m2 17 10 5 10-5"/>
                    <path d="m2 12 10 5 10-5"/>
                  </svg>
                </div>
                <div className="text-right">
                  <p className="text-[10px] text-gray-400 font-mono uppercase tracking-widest">CLEARANCE</p>
                  <p className="text-sm font-bold text-[#FFD700] font-mono">LEVEL 4</p>
                </div>
              </div>

              {/* Profile Image inside card */}
              <div className="relative w-full aspect-square rounded-xl overflow-hidden border border-white/10 mb-6 shadow-2xl">
                <Image
                  src="/profile.jpg" // User's uploaded picture path
                  alt="Nivritha Polaboina"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-xs text-gray-400 font-mono mb-1">STATUS</p>
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        <span className="text-sm text-white font-medium">ONLINE</span>
                      </div>
                    </div>
                    {/* Simulated barcode */}
                    <div className="flex gap-[2px] h-6 opacity-50">
                      {[...Array(12)].map((_, i) => (
                        <div key={i} className="bg-white h-full" style={{ width: ((i * 37) % 4) + 1 + 'px' }} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div>
                <p className="text-sm text-gray-400 font-mono uppercase tracking-wider mb-1">Access Level</p>
                <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-gradient-to-r from-[#FFD700] to-[#F59E0B]"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ delay: 1.2, duration: 1.5, ease: "easeInOut" }}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="relative z-10 pb-8 flex flex-col items-center gap-2 text-[#FFD700]/50"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <span className="text-[10px] uppercase tracking-widest font-mono">Scroll</span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-[#FFD700]/50 to-transparent" />
      </motion.div>
    </section>
  );
}
