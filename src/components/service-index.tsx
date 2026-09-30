/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CAPABILITIES } from "../data/capabilities";
import { cn } from "@/lib/utils";
import { BlurryText } from "@/components/blurry-text";
import { fadeUp, textReveal } from "@/lib/motion";

export function ServiceIndex() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section id="what-we-build" className="py-20 lg:py-32 bg-[var(--color-brand-bg)] relative overflow-hidden">
      <div
        className="max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-12 relative z-10"
        ref={containerRef}
      >
        {/* ── Heading ── */}
        <div className="mb-16 lg:mb-24 flex flex-col items-center text-center max-w-[800px] mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mb-8"
          >
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#101010] border border-[var(--color-brand-border)] text-[11px] font-medium tracking-[0.1em] text-[var(--color-brand-text)] uppercase">
              What We Build
            </span>
          </motion.div>
          
          <BlurryText 
            as="h2" 
            delay={0.1}
            className="text-[clamp(40px,5vw,64px)] font-medium tracking-[-0.03em] text-[var(--color-brand-text)] leading-[1.05]"
          >
            What can we <br className="hidden sm:block" />
            <em className="font-editorial italic font-normal text-[clamp(44px,5.5vw,72px)] text-[var(--color-brand-text-secondary)]">build for you?</em>
          </BlurryText>

          <motion.p
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            variants={textReveal}
            transition={{ delay: 0.8 }}
            className="mt-6 text-[16px] text-[var(--color-brand-text-secondary)] max-w-[600px] mx-auto"
          >
            From first idea to production-ready systems, we build the technology
            your business actually needs.
          </motion.p>
        </div>

        {/* ── Service List ── */}
        <div className="flex flex-col gap-24 lg:gap-32">
          {CAPABILITIES.map((cap, i) => (
            <ServiceRow key={cap.num} cap={cap} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceRow({ cap, index }: { cap: any; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
      className="relative grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8 lg:gap-24 items-start group"
    >
      {/* Background Subtle Light Reflection */}
      <motion.div 
        variants={itemVariants}
        className="absolute inset-0 opacity-0 group-hover:opacity-40 transition-opacity duration-1000 pointer-events-none"
      >
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[300px] h-[300px] bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.05),transparent_60%)] mix-blend-multiply" />
      </motion.div>

      <motion.div variants={itemVariants} className="flex items-center gap-4 lg:pt-2">
        <span className="text-[13px] font-medium tracking-[0.2em] text-[var(--color-brand-text-very-muted)] group-hover:text-[var(--color-brand-accent)] transition-colors duration-500">
          {cap.num}
        </span>
        <div className="h-[1px] flex-1 bg-[var(--color-brand-border)] lg:hidden" />
      </motion.div>

      <div className="flex flex-col">
        <motion.h3 
          variants={itemVariants}
          className="text-[32px] lg:text-[48px] font-medium tracking-tight text-[var(--color-brand-text)] mb-6 transition-transform duration-500 origin-left"
        >
          {cap.title}
        </motion.h3>

        <motion.p 
          variants={itemVariants}
          className="text-[17px] lg:text-[19px] text-[var(--color-brand-text-secondary)] leading-[1.65] max-w-[640px]"
        >
          {cap.shortDesc}
        </motion.p>
      </div>
    </motion.div>
  );
}
