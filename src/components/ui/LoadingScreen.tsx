"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState("System Initializing...");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const steps = [
      { p: 20, t: "Loading AI Modules..." },
      { p: 50, t: "Checking Neural Network..." },
      { p: 80, t: "Preparing Portfolio..." },
      { p: 100, t: "Launching..." },
    ];

    let currentStep = 0;
    const interval = setInterval(() => {
      if (currentStep < steps.length) {
        setProgress(steps[currentStep].p);
        setLoadingText(steps[currentStep].t);
        currentStep++;
      } else {
        clearInterval(interval);
        setTimeout(() => setIsLoaded(true), 800);
      }
    }, 600);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {!isLoaded && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0B1120] text-[#00F5FF] font-mono"
          initial={{ y: 0 }}
          exit={{ y: "-100%", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
        >
          <div className="w-80 max-w-[80vw]">
            <div className="mb-4 text-sm font-semibold tracking-wider">
              {loadingText}
            </div>
            
            <div className="h-1 w-full bg-[#1E293B] overflow-hidden rounded-full">
              <motion.div
                className="h-full bg-[#00F5FF] shadow-[0_0_10px_#00F5FF]"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
            
            <div className="mt-2 text-right text-xs opacity-70">
              {progress}%
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
