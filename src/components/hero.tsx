/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { BlurryText } from "@/components/blurry-text";
import { fadeUp, mediaReveal } from "@/lib/motion";
import { SpectrumGlow } from "@/components/spectrum-glow";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  


  // Subtle parallax effects
  const textY = useTransform(scrollYProgress, [0, 1], ["0px", "-10px"]);
  const imgY = useTransform(scrollYProgress, [0, 1], ["0px", "-25px"]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1.04, 1]);
  const imgOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.92]);
  const glowY = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);

  return (
    <motion.section
      ref={containerRef}
      initial={{ opacity: 0, y: 40, filter: "blur(12px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="relative min-h-[88vh] flex items-center pt-20 pb-16 lg:pt-0 lg:pb-0 bg-[var(--color-brand-bg)] overflow-visible"
    >
      {/* Spectrum Atmospheric Glow */}
      <motion.div 
        style={{ y: glowY }} 
        className="absolute bottom-[-15%] left-1/2 -translate-x-1/2 w-[1100px] h-[550px] pointer-events-none z-0"
      >
        <SpectrumGlow variant="hero" />
      </motion.div>

      <div className="w-full max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-12 grid lg:grid-cols-[1.15fr_0.85fr] gap-10 lg:gap-16 items-center">
        {/* ── Left: Copy ── */}
        <motion.div
          style={{ y: textY }}
          className="relative z-10"
        >
          <motion.div 
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-3 mb-8"
          >
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] text-[11px] font-medium tracking-[0.1em] text-[var(--color-brand-text-secondary)] uppercase">
              Turn your ideas into reality
            </span>
          </motion.div>

          <BlurryText 
            as="h1" 
            delay={0.2}
            className="text-[clamp(64px,7vw,118px)] font-normal tracking-[-0.04em] text-[var(--color-brand-text)] leading-[0.98] mb-8"
          >
            Have an Idea? <br />
            <em className="font-editorial italic font-normal tracking-[-0.02em] text-[clamp(68px,7.5vw,126px)]">We&apos;ll Build It.</em>
          </BlurryText>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
            className="text-[17px] lg:text-[19px] font-normal text-[var(--color-brand-text-secondary)] leading-[1.65] mb-12 max-w-[480px]"
          >
            Custom software, digital products, intelligent systems, and
            data-driven solutions built around your business.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 1.15, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center gap-5"
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 bg-[var(--color-brand-accent)] px-7 py-3.5 text-[14px] font-normal text-white hover:bg-[var(--color-brand-accent-light)] hover:shadow-[0_8px_20px_rgba(220,38,38,0.2)] hover:-translate-y-0.5 transition-all duration-300 rounded-[8px]"
            >
              Start a Project
              <ArrowRight className="w-4 h-4 opacity-90 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#what-we-build"
              className="group relative inline-flex items-center gap-2 bg-[var(--color-brand-panel)] border border-[var(--color-brand-border)] hover:border-[var(--color-brand-border-hover)] px-6 py-3.5 text-[14px] font-normal text-[var(--color-brand-text)] hover:text-[var(--color-brand-accent)] transition-all rounded-[8px]"
            >
              Explore What We Build
              <ArrowRight className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
            </a>
          </motion.div>
        </motion.div>

        {/* ── Right: Editorial photo card ── */}
        <motion.div
          style={{ y: imgY, scale: imgScale, opacity: imgOpacity }}
          className="hidden lg:block relative"
        >
          {/* Subtle spectrum glow behind it */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] pointer-events-none opacity-40">
            <SpectrumGlow variant="card" />
          </div>
          
          <div className="relative rounded-[24px] overflow-hidden aspect-[4/5] liquid-glass group">
            <img
              src="/office.avif"
              alt="HyperQube team at work"
              className="absolute inset-0 w-full h-[105%] object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-[1.5s] ease-out"
            />
            {/* Cinematic dark overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(5,5,5,0.8)] via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Small floating glass label */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 1, ease: "easeOut" }}
            className="absolute -left-8 bottom-16 liquid-glass px-5 py-3.5 flex items-center gap-3 overflow-hidden pointer-events-none"
          >
            {/* Subtle spectrum inside glass label */}
            <div className="absolute inset-0 mix-blend-screen opacity-10 bg-[linear-gradient(90deg,rgba(255,0,0,0.2),rgba(138,43,226,0.2),rgba(0,0,255,0.2))]" />
            <span className="w-2 h-2 rounded-full bg-[var(--color-brand-accent)] relative z-10 shadow-[0_0_8px_rgba(220,38,38,0.5)]" />
            <span className="text-[11px] font-medium tracking-[0.18em] text-[var(--color-brand-text)] uppercase relative z-10">
              Engineering Studio
            </span>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
