"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { Search, Layers, Rocket } from "lucide-react";
import { BlurryText } from "@/components/blurry-text";
import { fadeUp, textReveal } from "@/lib/motion";
import { SpectrumGlow } from "@/components/spectrum-glow";

const PROCESS_STEPS = [
  {
    num: "01",
    title: "DISCOVER",
    desc: "We understand the problem, define the goals, and figure out what needs to be built.",
    icon: Search
  },
  {
    num: "02",
    title: "BUILD",
    desc: "We design and develop the product, system, or experience around those requirements.",
    icon: Layers
  },
  {
    num: "03",
    title: "LAUNCH & EVOLVE",
    desc: "We ship it, refine what matters, and help the product keep improving as your needs grow.",
    icon: Rocket
  }
];

export function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  // Subtle parallax for the video container
  const videoY = useTransform(scrollYProgress, [0, 1], [15, -15]);

  return (
    <section
      ref={ref}
      className="py-32 lg:py-40 bg-[var(--color-brand-bg)] border-t border-[var(--color-brand-border)] relative overflow-hidden"
    >
      <div className="max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        {/* Header */}
        <div className="mb-14 lg:mb-16 flex flex-col items-center text-center max-w-[800px] mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mb-8"
          >
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#101010] border border-[var(--color-brand-border)] text-[11px] font-medium tracking-[0.1em] text-[var(--color-brand-text)] uppercase">
              Process
            </span>
          </motion.div>
          
          <BlurryText 
            as="h2" 
            delay={0.1}
            className="text-[clamp(40px,5vw,64px)] font-medium tracking-[-0.03em] text-[var(--color-brand-text)] leading-[1.05] mb-6"
          >
            How we turn <br className="hidden sm:block" />
            <em className="font-editorial italic font-normal text-[clamp(44px,5.5vw,72px)] text-[var(--color-brand-text-secondary)]">ideas </em>
            into something real.
          </BlurryText>
          
          <motion.p
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            variants={textReveal}
            transition={{ delay: 0.8 }}
            className="text-[17px] lg:text-[19px] text-[var(--color-brand-text-secondary)] leading-[1.65] max-w-[560px]"
          >
            From the first conversation to the final launch, we keep the process clear, focused, and built around what your business actually needs.
          </motion.p>
        </div>

        {/* 3-Column Layout with Scroll Progress */}
        <div className="relative mb-20 lg:mb-24 pt-8">
          {/* Progress Line Track (Background) */}
          <div className="absolute top-[40px] left-[10%] right-[10%] h-[1px] bg-[var(--color-brand-border)] hidden md:block" />
          
          {/* Active Progress Line (Red) */}
          <motion.div 
            style={{ scaleX: scrollYProgress, transformOrigin: "left" }}
            className="absolute top-[40px] left-[10%] right-[10%] h-[1px] bg-[var(--color-brand-accent)] hidden md:block z-0" 
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 relative z-10">
            {PROCESS_STEPS.map((step, i) => {
              // Calculate activation points based on index
              const activationPoint = i * 0.33;
              const isActive = useTransform(scrollYProgress, 
                [activationPoint - 0.1, activationPoint + 0.1], 
                [0.4, 1]
              );
              const iconScale = useTransform(scrollYProgress, 
                [activationPoint - 0.1, activationPoint + 0.1], 
                [0.9, 1.1]
              );

              return (
                <motion.div
                  key={step.num}
                  style={{ opacity: isActive }}
                  className="group flex flex-col items-center text-center md:items-start md:text-left transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-8 w-full justify-center md:justify-start">
                    <span className="text-[14px] font-mono text-[var(--color-brand-text-muted)] group-hover:text-[var(--color-brand-accent)] transition-colors duration-500">
                      {step.num}
                    </span>
                    <div className="h-[1px] flex-1 bg-[var(--color-brand-border)] max-w-[60px] md:hidden" />
                  </div>

                  <motion.div 
                    style={{ scale: iconScale }}
                    className="w-16 h-16 rounded-2xl bg-white border border-[rgba(15,23,42,0.08)] shadow-[0_8px_30px_rgba(15,23,42,0.04)] flex items-center justify-center mb-8 relative"
                  >
                    <step.icon className="w-6 h-6 text-[var(--color-brand-text)]" strokeWidth={1.5} />
                    <div className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-[var(--color-brand-accent)] opacity-50 shadow-[0_0_8px_rgba(220,38,38,0.5)]" />
                  </motion.div>

                  <h3 className="text-[16px] font-medium tracking-[0.1em] text-[var(--color-brand-text)] uppercase mb-4">
                    {step.title}
                  </h3>
                  
                  <p className="text-[16px] text-[var(--color-brand-text-secondary)] leading-[1.65]">
                    {step.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Meeting Video Block */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-[1320px] mx-auto"
        >
          {/* Subtle Spectrum behind video */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[120%] pointer-events-none opacity-30 -z-10 mix-blend-screen">
            <SpectrumGlow variant="card" />
          </div>

          <motion.div
            style={{ y: videoY }}
            className="relative rounded-2xl overflow-hidden aspect-[16/9] lg:aspect-[21/9] border border-[rgba(15,23,42,0.08)] bg-[#050505]"
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover opacity-100"
            >
              <source src="/meeting.mp4" type="video/mp4" />
            </video>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
