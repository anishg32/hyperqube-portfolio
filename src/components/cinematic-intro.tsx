"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function CinematicIntro() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    // Respect prefers-reduced-motion
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) {
      setShowIntro(false);
      return;
    }

    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 1200); // 1.2 seconds before transitioning

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {showIntro && (
        <motion.div
          key="intro"
          initial={{ opacity: 1, y: "0%" }}
          exit={{ 
            opacity: 0, 
            y: "-100%", 
            transition: { 
              duration: 1.2, 
              ease: [0.76, 0, 0.24, 1] // Apple-like smooth cinematic curve
            } 
          }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[var(--color-brand-bg)] pointer-events-none"
        >
          <div className="flex flex-col items-center gap-6">
            <h1 className="text-[clamp(40px,6vw,64px)] font-medium tracking-[0.15em] text-[var(--color-brand-text)] leading-none uppercase">
              HyperQube
            </h1>
            
            <div className="flex items-center gap-3">
              <span className="text-[11px] font-medium tracking-[0.25em] text-[var(--color-brand-text-muted)] uppercase">
                Software • Data • Intelligence
              </span>
              <motion.div
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand-accent)] shadow-[0_0_8px_rgba(220,38,38,0.5)]"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
