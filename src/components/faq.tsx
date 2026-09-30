/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
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
      className="py-32 lg:py-40 bg-[#050505] relative overflow-hidden"
    >
      <div className="max-w-[1000px] mx-auto px-5 sm:px-8 relative z-10 flex flex-col items-center">
        
        {/* Title area can remain or be simplified. The screenshot only shows the list, but we need a title. Let's keep it minimal. */}
        <div className="mb-16 lg:mb-24 flex flex-col items-center text-center">
          <BlurryText 
            as="h2" 
            delay={0.1}
            className="text-[clamp(32px,5vw,48px)] font-medium tracking-tight text-[#F5F5F5] mb-4"
          >
            Questions?
          </BlurryText>
        </div>

        <div className="w-full flex flex-col gap-3">
          {FAQS.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ duration: 0.5, delay: i * 0.05, ease: "easeOut" }}
                className={cn(
                  "group relative transition-all duration-300 overflow-hidden bg-[#0A0A0B] border border-[rgba(255,255,255,0.08)] rounded-[12px]",
                  isOpen ? "bg-[#0D0D0F]" : "hover:border-[rgba(255,255,255,0.15)]"
                )}
              >
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between p-5 lg:px-6 lg:py-5 text-left outline-none cursor-pointer relative z-10"
                >
                  <span className={cn(
                    "text-[15px] lg:text-[16px] font-normal transition-colors duration-300",
                    isOpen ? "text-white" : "text-[#E0E0E0] group-hover:text-white"
                  )}>
                    {faq.q}
                  </span>
                  
                  <div className="flex items-center justify-center shrink-0 ml-4 relative transition-colors duration-300">
                    <Plus 
                      className={cn(
                        "w-4 h-4 transition-transform duration-300",
                        isOpen ? "rotate-[135deg] text-white" : "text-[#A1A1AA] group-hover:text-white"
                      )} 
                    />
                  </div>
                </button>
                
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-5 pb-5 lg:px-6 lg:pb-6 pt-0 text-[14px] lg:text-[15px] text-[#A1A1AA] leading-[1.6]">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* The Red Dot from the screenshot */}
        <motion.div 
          initial={{ opacity: 0, scale: 0 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 w-3 h-3 rounded-full bg-[#FF3B30] shadow-[0_0_12px_rgba(255,59,48,0.8)]"
        />
      </div>
    </section>
  );
}
