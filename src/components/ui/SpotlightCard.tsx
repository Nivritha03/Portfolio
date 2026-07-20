"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

interface SpotlightCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  spotlightColor?: string;
}

export function SpotlightCard({
  children,
  className = "",
  spotlightColor = "rgba(255, 215, 0, 0.15)",
  ...props
}: SpotlightCardProps) {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;

    const rect = divRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setPosition({ x, y });

    // Calculate 3D tilt angles
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -6; // max 6 deg tilt
    const rotateY = ((x - centerX) / centerX) * 6;

    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
    setRotate({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      animate={{
        rotateX: rotate.x,
        rotateY: rotate.y,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      style={{ transformStyle: "preserve-3d" }}
      className={`relative overflow-hidden rounded-3xl border border-white/10 bg-[#111111] transition-colors duration-300 hover:border-[#FFD700]/40 ${className}`}
      {...props}
    >
      {/* Dynamic Cursor Spotlight Radial Mask */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 40%)`,
        }}
      />
      {/* Content wrapper */}
      <div className="relative z-10 h-full">{children}</div>
    </motion.div>
  );
}
