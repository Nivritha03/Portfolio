"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [hoverText, setHoverText] = useState("");

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Look for data-cursor attributes up the DOM tree
      const cursorTarget = target.closest('[data-cursor]');
      
      if (cursorTarget) {
        setIsHovering(true);
        const text = cursorTarget.getAttribute('data-cursor');
        if (text) setHoverText(text);
      } else if (
        target.tagName.toLowerCase() === 'a' || 
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button')
      ) {
        setIsHovering(true);
        setHoverText("");
      } else {
        setIsHovering(false);
        setHoverText("");
      }
    };

    window.addEventListener("mousemove", updateMousePosition);
    document.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      document.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <>
      {/* Inner glowing dot */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[100] h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FFD700] shadow-[0_0_10px_rgba(255,215,0,0.8)]"
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
          scale: isHovering ? (hoverText ? 0 : 1.3) : 1,
          opacity: isHovering ? (hoverText ? 0 : 1) : 1,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      />
      
      {/* Outer subtle ring */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[99] flex h-7 w-7 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#FFD700]/40 bg-transparent"
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
          scale: isHovering ? (hoverText ? 2.2 : 1.4) : 1,
          borderColor: isHovering ? "#FFD700" : "rgba(255, 215, 0, 0.3)",
          backgroundColor: isHovering ? "rgba(255, 215, 0, 0.1)" : "transparent",
        }}
        transition={{ type: "spring", stiffness: 350, damping: 25 }}
      >
        {hoverText && (
          <span className="text-[7px] font-mono font-bold text-[#FFD700] uppercase tracking-wider">
            {hoverText}
          </span>
        )}
      </motion.div>
    </>
  );
}
