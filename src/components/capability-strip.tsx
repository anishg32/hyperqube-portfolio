"use client";

import { motion } from "framer-motion";

const ITEMS = ["BUILD", "INNOVATE", "AUTOMATE", "ANALYZE", "SCALE"];
const MARQUEE = [...ITEMS, ...ITEMS, ...ITEMS, ...ITEMS];

export function CapabilityStrip() {
  return (
    <div
      id="services"
      className="border-y border-[var(--color-brand-border)] bg-[var(--color-brand-bg)] py-5 overflow-hidden flex relative group"
    >
      {/* edge fades */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[var(--color-brand-bg)] to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[var(--color-brand-bg)] to-transparent z-10 pointer-events-none" />

      <motion.div
        className="flex whitespace-nowrap group-hover:[animation-play-state:paused]"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
      >
        {MARQUEE.map((item, i) => (
          <div key={i} className="flex items-center">
            <span
              className="text-[14px] sm:text-[16px] font-normal tracking-[0.24em] uppercase text-[var(--color-brand-text)]"
            >
              {item}
            </span>
            {/* Gray dots, orange separators */}
            <div className="flex items-center gap-6 mx-10 sm:mx-16">
              <span className="text-[var(--color-brand-text-secondary)] text-[6px]">●</span>
              <span className="text-[var(--color-brand-accent)] text-[12px] font-black italic">/</span>
              <span className="text-[var(--color-brand-text-secondary)] text-[6px]">●</span>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
