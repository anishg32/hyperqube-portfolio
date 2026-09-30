/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { Check, X } from "lucide-react";
import { BlurryText } from "@/components/blurry-text";
import { fadeUp } from "@/lib/motion";
import { SpectrumGlow } from "@/components/spectrum-glow";
import { cn } from "@/lib/utils";

const BAD_POINTS = [
  "Technology chosen because it's trendy",
  "Disconnected systems and data silos",
  "Manual repetitive workflows",
  "Hard-to-maintain foundations",
  "Software that doesn't fit the business",
];

const GOOD_POINTS = [
  "Technology chosen for the problem",
  "Systems designed around your workflow",
  "Automation where it creates value",
  "Foundations built to evolve",
  "Software designed around real users",
];

export function Principles() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={containerRef}
      className="py-24 lg:py-40 bg-[var(--color-brand-bg)] relative border-t border-[rgba(255,255,255,0.05)] overflow-hidden"
    >
      <div className="max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        <div className="mb-16 lg:mb-24 flex flex-col items-center text-center">
          <motion.div 
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mb-8"
          >
            <span className="inline-block mb-4 text-[11px] font-medium tracking-[0.15em] text-[var(--color-brand-text-very-muted)] uppercase">
              06 / BUILT AROUND YOUR GOALS
            </span>
          </motion.div>
          
          <BlurryText 
            as="h2" 
            delay={0.1}
            className="text-[clamp(44px,5vw,72px)] font-medium tracking-tight text-[var(--color-brand-text)] leading-[1.05]"
          >
            Engineering with <br className="hidden sm:block" />
            <em className="font-editorial italic font-normal text-[clamp(48px,5.5vw,80px)] text-[var(--color-brand-text-secondary)]">Purpose.</em>
          </BlurryText>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column - Muted */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="bg-[rgba(255,255,255,0.01)] border border-[rgba(255,255,255,0.03)] rounded-[28px] p-8 lg:p-14 opacity-50 relative overflow-hidden"
          >
            <h3 className="text-[14px] font-medium tracking-[0.1em] text-[var(--color-brand-text-very-muted)] uppercase mb-8 lg:mb-12">
              Without Purposeful Engineering
            </h3>
            
            <ul className="flex flex-col gap-6">
              {BAD_POINTS.map((point, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="w-5 h-5 flex items-center justify-center shrink-0 mt-0.5 opacity-40">
                    <X className="w-4 h-4 text-[var(--color-brand-text-very-muted)]" />
                  </span>
                  <span className="text-[16px] text-[var(--color-brand-text-very-muted)] leading-[1.5]">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right Column - Emphasized */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="liquid-glass rounded-[28px] p-8 lg:p-14 relative overflow-hidden shadow-2xl"
          >
            <div className="absolute inset-0 opacity-[0.15] pointer-events-none mix-blend-screen bg-gradient-to-br from-[rgba(255,59,48,0.2)] to-transparent" />
            
            <div className="absolute top-[-20%] right-[-20%] w-[300px] h-[300px] pointer-events-none opacity-[0.15]">
              <SpectrumGlow variant="card" />
            </div>

            <div className="relative z-10">
              <h3 className="text-[14px] font-medium tracking-[0.1em] text-[var(--color-brand-text)] uppercase mb-8 lg:mb-12 flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand-accent)] shadow-[0_0_8px_rgba(255,59,48,0.6)]" />
                With HyperQube
              </h3>
              
              <ul className="flex flex-col gap-6">
                {GOOD_POINTS.map((point, i) => {
                  return (
                    <PrincipleItem 
                      key={i} 
                      point={point} 
                      index={i} 
                      total={GOOD_POINTS.length}
                    />
                  );
                })}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function PrincipleItem({ point, index, total }: { point: string; index: number; total: number }) {
  const ref = useRef<HTMLLIElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 90%", "end 70%"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0.3, 1]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.95, 1]);
  const x = useTransform(scrollYProgress, [0, 1], [-10, 0]);

  return (
    <motion.li 
      ref={ref}
      style={{ opacity, scale, x }}
      className="flex items-start gap-4 transition-all duration-300"
    >
      <span className="w-5 h-5 rounded-full bg-[rgba(255,59,48,0.1)] flex items-center justify-center shrink-0 mt-0.5 border border-[rgba(255,59,48,0.2)]">
        <Check className="w-3 h-3 text-[var(--color-brand-accent)]" />
      </span>
      <span className="text-[16px] text-[var(--color-brand-text)] leading-[1.5]">
        {point}
      </span>
    </motion.li>
  );
}
