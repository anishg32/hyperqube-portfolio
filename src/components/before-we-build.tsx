"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const QUESTIONS = [
  {
    num: "01",
    title: "What problem are we solving?",
    img: "/office.avif",
  },
  {
    num: "02",
    title: "Who will use it?",
    img: "/office.avif",
  },
  {
    num: "03",
    title: "What should the experience feel like?",
    img: "/office.avif",
  },
  {
    num: "04",
    title: "What needs to scale?",
    img: "/office.avif",
  },
  {
    num: "05",
    title: "What technology actually makes sense?",
    img: "/office.avif",
  },
];

export function BeforeWeBuild() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeQ, setActiveQ] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProg = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    // There are 5 questions + 1 final cinematic moment = 6 stages
    // We want the final moment to take up the last portion of the scroll.
    const sections = QUESTIONS.length + 1; // 6
    const index = Math.floor(v * sections);
    setActiveQ(Math.min(Math.max(index, 0), sections - 1));
  });

  // Cinematic Moment Animations
  const isCinematic = activeQ === 5;
  const cinematicScale = useTransform(smoothProg, [5/6, 1], [1.06, 0.97]);
  const cinematicY = useTransform(smoothProg, [5/6, 1], ["50px", "-50px"]);

  return (
    <section ref={containerRef} className="relative bg-[var(--color-brand-bg)] h-[400vh]">
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-center items-center py-20">
        
        {/* Intro / Questions Phase */}
        <div className={cn(
          "max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-12 w-full transition-all duration-1000",
          isCinematic ? "opacity-0 -translate-y-20 pointer-events-none absolute" : "opacity-100 translate-y-0"
        )}>
          {/* Header */}
          <div className="mb-12 lg:mb-20 max-w-[800px]">
            <span className="inline-block mb-4 text-[11px] font-medium tracking-[0.15em] text-[var(--color-brand-text-very-muted)] uppercase">
              01 / BEFORE WE BUILD
            </span>
            <h2 className="text-[clamp(32px,4vw,48px)] font-medium tracking-tight text-[var(--color-brand-text)] leading-[1.1] mb-6">
              First, we ask the right questions.
            </h2>
            <p className="text-[17px] text-[var(--color-brand-text-secondary)] leading-[1.6]">
              Before choosing a technology, we understand the problem, the people, and the outcome we're building toward.
            </p>
          </div>

          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-24 items-center">
            {/* Left: Crossfading Images (Cinematic Media Area) */}
            <div className="relative aspect-[4/3] rounded-[24px] overflow-hidden border border-[rgba(15,23,42,0.08)] shadow-[0_30px_80px_rgba(15,23,42,0.12)] hidden lg:block bg-[rgba(15,23,42,0.02)] order-2 lg:order-1">
              {/* Subtle Spectrum Refraction Overlay */}
              <div className="absolute inset-0 z-10 pointer-events-none mix-blend-overlay opacity-10 bg-[linear-gradient(135deg,rgba(255,0,0,0.1),rgba(255,165,0,0.1),rgba(255,255,0,0.1),rgba(0,128,0,0.1),rgba(0,0,255,0.1),rgba(75,0,130,0.1),rgba(238,130,238,0.1))]" />
              
              <AnimatePresence mode="popLayout">
                {activeQ < 5 && (
                  <motion.img
                    key={activeQ}
                    src={QUESTIONS[activeQ].img}
                    alt={QUESTIONS[activeQ].title}
                    initial={{ opacity: 0, scale: 1.08, filter: "blur(4px)" }}
                    animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                    exit={{ opacity: 0, scale: 0.95, filter: "blur(4px)" }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                )}
              </AnimatePresence>
            </div>

            {/* Right: Questions List */}
            <div className="flex flex-col gap-6 lg:gap-8 order-1 lg:order-2">
              {QUESTIONS.map((q, i) => {
                const isActive = activeQ === i;
                const isPast = activeQ > i;
                return (
                  <div 
                    key={q.num}
                    className={cn(
                      "transition-all duration-700 ease-out flex gap-6 items-start",
                      isActive ? "opacity-100 scale-100 translate-y-0" : "opacity-30 scale-[0.98]",
                      isPast ? "-translate-y-4" : !isActive && "translate-y-4"
                    )}
                  >
                    <span className={cn(
                      "text-[14px] font-medium tracking-wider mt-1 transition-colors duration-500",
                      isActive ? "text-[var(--color-brand-accent)]" : "text-[var(--color-brand-text-muted)]"
                    )}>
                      {q.num}
                    </span>
                    <h3 className={cn(
                      "text-[22px] lg:text-[28px] font-medium leading-[1.2] transition-colors duration-500",
                      isActive ? "text-[var(--color-brand-text)]" : "text-[var(--color-brand-text-muted)]"
                    )}>
                      {q.title}
                    </h3>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Cinematic Media Phase */}
        <motion.div 
          className={cn(
            "absolute inset-0 flex items-center justify-center pointer-events-none transition-all duration-1000",
            isCinematic ? "opacity-100 pointer-events-auto" : "opacity-0 translate-y-20 scale-[0.98]"
          )}
        >
          <motion.div 
            style={{ scale: cinematicScale, y: cinematicY }}
            className="relative w-[90%] max-w-[1200px] h-[500px] lg:h-[650px] rounded-[30px] overflow-hidden border border-[rgba(15,23,42,0.08)] shadow-[0_30px_90px_rgba(15,23,42,0.15)] bg-[#0A0D14]"
          >
            {/* Cinematic Image */}
            <img 
              src="/office.avif" 
              alt="HyperQube Engineering Cinematic"
              className="absolute inset-0 w-full h-full object-cover opacity-90"
            />
            
            {/* Liquid Glass Label 1 */}
            <div className="absolute top-8 left-8 lg:top-12 lg:left-12 px-5 py-3 rounded-[16px] bg-[rgba(255,255,255,0.55)] backdrop-blur-[22px] saturate-[140%] border border-[rgba(255,255,255,0.75)] shadow-[0_20px_60px_rgba(15,23,42,0.10)] flex items-center gap-3 overflow-hidden group pointer-events-auto hover:bg-[rgba(255,255,255,0.70)] transition-colors duration-300">
              <span className="w-2 h-2 rounded-full bg-[var(--color-brand-accent)] shadow-[0_0_8px_rgba(220,38,38,0.5)]" />
              <span className="text-[11px] lg:text-[12px] font-medium tracking-[0.2em] text-[#0F172A] uppercase">
                HyperQube Engineering
              </span>
              {/* Subtle Rainbow Refraction */}
              <div className="absolute inset-0 pointer-events-none mix-blend-overlay opacity-10 bg-[linear-gradient(90deg,rgba(255,0,0,0.1),rgba(255,165,0,0.1),rgba(255,255,0,0.1),rgba(0,128,0,0.1),rgba(0,0,255,0.1),rgba(75,0,130,0.1),rgba(238,130,238,0.1))]" />
            </div>

            {/* Liquid Glass Label 2 */}
            <div className="absolute bottom-8 right-8 lg:bottom-12 lg:right-12 p-6 rounded-[20px] bg-[rgba(255,255,255,0.55)] backdrop-blur-[22px] saturate-[140%] border border-[rgba(255,255,255,0.75)] shadow-[0_20px_60px_rgba(15,23,42,0.10)] flex flex-col gap-3 overflow-hidden pointer-events-auto hidden sm:flex">
              <span className="text-[11px] font-semibold tracking-[0.2em] text-[#0F172A] uppercase">Software</span>
              <span className="text-[11px] font-semibold tracking-[0.2em] text-[#0F172A] uppercase">Data</span>
              <span className="text-[11px] font-semibold tracking-[0.2em] text-[#0F172A] uppercase">Intelligence</span>
              {/* Subtle Rainbow Refraction */}
              <div className="absolute inset-0 pointer-events-none mix-blend-overlay opacity-10 bg-[linear-gradient(135deg,rgba(255,0,0,0.1),rgba(255,165,0,0.1),rgba(255,255,0,0.1),rgba(0,128,0,0.1),rgba(0,0,255,0.1),rgba(75,0,130,0.1),rgba(238,130,238,0.1))]" />
            </div>

            {/* Light sweep animation that triggers when entering cinematic phase */}
            {isCinematic && (
              <motion.div 
                className="absolute inset-0 w-[200%] h-full bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.3)] to-transparent skew-x-[-20deg]"
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
              />
            )}
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
