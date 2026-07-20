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
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[100] h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00F5FF] mix-blend-screen"
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
          scale: isHovering ? (hoverText ? 0 : 0.5) : 1,
          opacity: isHovering ? (hoverText ? 0 : 1) : 1,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.15 }}
      />
      
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[99] flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#00F5FF] bg-transparent backdrop-blur-sm"
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
          scale: isHovering ? (hoverText ? 2.5 : 1.5) : 1,
          backgroundColor: hoverText ? "rgba(0, 245, 255, 0.1)" : "transparent",
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.2 }}
      >
        {hoverText && (
          <span className="text-[6px] font-bold text-[#00F5FF] uppercase tracking-widest">
            {hoverText}
          </span>
        )}
      </motion.div>
    </>
  );
}
