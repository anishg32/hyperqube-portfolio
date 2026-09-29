"use client";

import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { BlurryText } from "@/components/blurry-text";
import { textReveal, buttonReveal } from "@/lib/motion";
import { SpectrumGlow } from "@/components/spectrum-glow";

export function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="contact"
      className="py-24 lg:py-32 bg-[var(--color-brand-bg)] relative overflow-hidden"
    >
      <div
        className="max-w-[1000px] mx-auto px-5 sm:px-8 relative z-10"
        ref={ref}
      >
        <motion.div 
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.98 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-[32px] overflow-hidden bg-[rgba(255,255,255,0.55)] backdrop-blur-[22px] saturate-[140%] border border-[rgba(255,255,255,0.75)] shadow-[0_20px_60px_rgba(15,23,42,0.06)]"
        >
          {/* Subtle spectrum refraction inside glass */}
          <div className="absolute inset-0 pointer-events-none mix-blend-overlay opacity-10 bg-[linear-gradient(135deg,rgba(255,0,0,0.1),rgba(255,165,0,0.1),rgba(255,255,0,0.1),rgba(0,128,0,0.1),rgba(0,0,255,0.1),rgba(75,0,130,0.1),rgba(238,130,238,0.1))]" />
          
          <div className="relative z-10 py-20 px-8 sm:px-16 flex flex-col items-center text-center">
            <span className="inline-block mb-6 text-[11px] font-medium tracking-[0.15em] text-[var(--color-brand-text-very-muted)] uppercase">
              Project Inquiry
            </span>

            <BlurryText 
              as="h2" 
              delay={0.1}
              duration={1.2}
              className="text-[clamp(40px,6vw,64px)] font-medium tracking-tight text-[var(--color-brand-text)] leading-[1.05] mb-6"
            >
              Let's build something <br className="hidden sm:block" />
              <em className="font-editorial italic font-normal tracking-[-0.02em] text-[clamp(44px,6.5vw,72px)] text-[var(--color-brand-text-secondary)]">worth building.</em>
            </BlurryText>

            <motion.p
              initial="hidden"
              animate={isInView ? "show" : "hidden"}
              variants={textReveal}
              transition={{ delay: 0.9 }}
              className="text-[17px] text-[var(--color-brand-text-secondary)] leading-[1.6] mb-12 max-w-[480px]"
            >
              Whether it's a digital product, intelligent system, or complex software architecture, we have the team to make it real.
            </motion.p>

            <motion.a
              href="mailto:hyperqube.ff@gmail.com"
              initial="hidden"
              animate={isInView ? "show" : "hidden"}
              variants={buttonReveal}
              transition={{ delay: 1.0 }}
              className="group inline-flex items-center gap-3 bg-[var(--color-brand-accent)] px-8 py-4 text-[15px] font-medium text-white hover:bg-[var(--color-brand-accent-light)] transition-all duration-300 rounded-[12px] justify-center shadow-[0_10px_30px_rgba(220,38,38,0.2)] hover:-translate-y-0.5"
            >
              Start a Project
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
