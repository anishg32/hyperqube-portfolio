/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { BlurryText } from "@/components/blurry-text";
import { fadeUp } from "@/lib/motion";

const TECH_STACK = [
  "Next.js", "React", "TypeScript", "Node.js", "Python", 
  "PostgreSQL", "Supabase", "Cloud", "AI"
];

export function EngineeringStack() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-[var(--color-brand-bg)] border-t border-[rgba(255,255,255,0.05)] relative overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-12 flex flex-col items-center text-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6 lg:mb-8"
        >
          <span className="inline-block mb-4 text-[11px] font-medium tracking-[0.15em] text-[var(--color-brand-text-very-muted)] uppercase">
            09 / ENGINEERING STACK
          </span>
        </motion.div>
        
        <BlurryText 
          as="h2" 
          delay={0.1}
          className="text-[clamp(28px,4vw,44px)] font-medium tracking-tight text-[var(--color-brand-text)] leading-[1.1] mb-12 max-w-[600px]"
        >
          We choose technology for the problem — not the trend.
        </BlurryText>

        <motion.div 
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.05 } }
          }}
          className="flex flex-wrap items-center justify-center gap-3 lg:gap-4 max-w-[900px]"
        >
          {TECH_STACK.map((tech) => (
            <motion.div
              key={tech}
              variants={{
                hidden: { opacity: 0, scale: 0.9, y: 10 },
                show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } as any }
              }}
              className="px-5 py-2.5 rounded-full liquid-glass border border-[rgba(255,255,255,0.1)] text-[14px] lg:text-[15px] font-medium tracking-wide text-[var(--color-brand-text)] transition-colors hover:border-[rgba(255,255,255,0.3)] hover:text-[var(--color-brand-text)] cursor-default"
            >
              {tech}
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
