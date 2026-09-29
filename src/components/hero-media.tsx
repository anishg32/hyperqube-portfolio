"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { mediaReveal } from "@/lib/motion";

export function HeroMedia() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "5%"]);

  return (
    <section ref={ref} className="pb-10 lg:pb-16 bg-[var(--color-brand-bg)] relative">
      <div className="max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        {/* Mobile: show the office photo that is hidden in hero right column */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          variants={mediaReveal}
          className="lg:hidden mb-10"
        >
          <div className="relative rounded-xl overflow-hidden aspect-[16/10] border border-[rgba(15,23,42,0.15)] shadow-2xl bg-[var(--color-brand-card)]">
            <img
              src="/office.avif"
              alt="HyperQube team at work"
              className="absolute inset-0 w-full h-full object-cover opacity-95"
            />
          </div>
        </motion.div>

        {/* Full-width editorial photo — visible on desktop */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={mediaReveal}
          className="hidden lg:block relative rounded-2xl overflow-hidden aspect-[21/8] border border-[rgba(15,23,42,0.15)] bg-[var(--color-brand-card)] shadow-2xl"
        >
          <motion.img
            style={{ y }}
            src="/office.avif"
            alt="HyperQube — engineering studio"
            className="absolute top-[-5%] left-0 w-full h-[110%] object-cover opacity-95"
          />
        </motion.div>
      </div>
    </section>
  );
}
