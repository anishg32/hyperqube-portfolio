"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import { BlurryText } from "@/components/blurry-text";
import { fadeUp, textReveal } from "@/lib/motion";
import { SpectrumGlow } from "@/components/spectrum-glow";

const FAQS = [
  {
    q: "What kind of products can HyperQube build?",
    a: "We build custom websites, web applications, SaaS products, internal tools, automation systems, data-driven applications, and intelligent software experiences."
  },
  {
    q: "Can you build from an idea that is still early?",
    a: "Yes. We can help turn an early concept into a clearer product direction, define what needs to be built first, and then move into design and development."
  },
  {
    q: "Do you work with existing products or only new builds?",
    a: "Both. We can build something new from scratch or improve, rework, extend, or modernize an existing product."
  },
  {
    q: "Can you handle the backend and infrastructure too?",
    a: "Yes. Projects can include frontend, backend, APIs, databases, authentication, integrations, deployment, and the supporting infrastructure required by the product."
  },
  {
    q: "Do you build AI and data-driven features?",
    a: "Yes. Where it makes sense for the product, we can work with data, automation, machine learning, computer vision, and AI-powered functionality."
  },
  {
    q: "How do we start a project with HyperQube?",
    a: "Start by telling us what you're trying to build, what problem you're solving, and what you need. We'll take it from there and discuss the right way to approach the project."
  }
];

export function Faq() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    if (openIndex === i) {
      setOpenIndex(null);
    } else {
      setOpenIndex(i);
    }
  };

  return (
    <section
      ref={ref}
      className="py-32 lg:py-40 bg-[var(--color-brand-bg)] border-t border-[var(--color-brand-border)] relative overflow-hidden"
    >
      {/* Subtle Spectrum Bloom */}
      <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[1000px] h-[600px] pointer-events-none opacity-30">
        <SpectrumGlow variant="section" />
      </div>

      <div className="max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        <div className="mb-16 lg:mb-24 flex flex-col items-center text-center max-w-[800px] mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mb-8"
          >
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#101010] border border-[var(--color-brand-border)] text-[11px] font-medium tracking-[0.1em] text-[var(--color-brand-text)] uppercase">
              FAQ
            </span>
          </motion.div>
          
          <BlurryText 
            as="h2" 
            delay={0.1}
            className="text-[clamp(40px,5vw,64px)] font-medium tracking-[-0.03em] text-[var(--color-brand-text)] leading-[1.05] mb-6"
          >
            Questions, <br className="hidden sm:block" />
            <em className="font-editorial italic font-normal text-[clamp(44px,5.5vw,72px)] text-[var(--color-brand-text-secondary)]">before we build?</em>
          </BlurryText>
          
          <motion.p
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            variants={textReveal}
            transition={{ delay: 0.8 }}
            className="text-[17px] lg:text-[19px] text-[var(--color-brand-text-secondary)] leading-[1.65] max-w-[500px]"
          >
            A few things people usually want to know before starting a project with HyperQube.
          </motion.p>
        </div>

        <div className="max-w-[1100px] mx-auto flex flex-col gap-4">
          {FAQS.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className={cn(
                  "group relative rounded-2xl bg-[#080808] border transition-colors duration-500 overflow-hidden",
                  isOpen ? "border-[rgba(15,23,42,0.15)]" : "border-[rgba(15,23,42,0.08)] hover:border-[rgba(15,23,42,0.15)]"
                )}
              >
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between p-6 lg:px-10 lg:py-8 text-left outline-none cursor-pointer"
                >
                  <span className="text-[18px] lg:text-[20px] font-medium text-[var(--color-brand-text)] transition-transform duration-300 group-hover:translate-x-1">
                    {faq.q}
                  </span>
                  
                  <div className="flex items-center justify-center w-8 h-8 rounded-full border border-[var(--color-brand-border)] bg-[var(--color-brand-bg)] shrink-0 ml-6 relative transition-colors duration-300 group-hover:border-[var(--color-brand-border-hover)]">
                    <Plus 
                      className={cn(
                        "w-4 h-4 text-[var(--color-brand-text-secondary)] transition-transform duration-500",
                        isOpen ? "rotate-[135deg] text-[var(--color-brand-text)]" : "group-hover:rotate-90 group-hover:text-[var(--color-brand-text)]"
                      )} 
                    />
                    <div className={cn(
                      "absolute top-0 right-0 w-1.5 h-1.5 rounded-full bg-[var(--color-brand-accent)] transition-opacity duration-300",
                      isOpen ? "opacity-100 shadow-[0_0_8px_rgba(255,75,62,0.8)]" : "opacity-0 group-hover:opacity-100 shadow-[0_0_8px_rgba(255,75,62,0)]"
                    )} />
                  </div>
                </button>
                
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="px-6 pb-8 lg:px-10 lg:pb-10 pt-0 text-[16px] lg:text-[18px] text-[var(--color-brand-text-secondary)] leading-[1.65] max-w-[800px]">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
