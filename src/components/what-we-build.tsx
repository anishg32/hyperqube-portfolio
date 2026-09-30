/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { fadeUp } from "@/lib/motion";

const CAPABILITIES = [
  {
    num: "01",
    title: "DIGITAL PRODUCTS",
    desc: "Web applications, customer portals, internal tools and complete digital experiences.",
  },
  {
    num: "02",
    title: "CUSTOM SOFTWARE",
    desc: "Business systems, dashboards, workflows and software built around your processes.",
  },
  {
    num: "03",
    title: "AI & AUTOMATION",
    desc: "Intelligent workflows, AI-powered features, automation and decision-support systems.",
  },
  {
    num: "04",
    title: "DATA & PLATFORMS",
    desc: "APIs, data systems, analytics, cloud infrastructure and scalable foundations.",
  }
];

export function WhatWeBuild() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Media parallax
  const mediaScale = useTransform(smoothProgress, [0.3, 0.7], [1.06, 1]);
  const mediaY = useTransform(smoothProgress, [0.3, 0.7], [25, -20]);

  // Section transition
  const sectionBg = useTransform(smoothProgress, [0.8, 1], ["var(--color-brand-bg)", "var(--color-brand-panel)"]);

  return (
    <motion.section 
      id="what-we-build" 
      ref={containerRef}
      style={{ backgroundColor: sectionBg }}
      className="py-24 lg:py-32 relative overflow-hidden"
    >
      <div className="max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Header */}
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.15 } }
          }}
          className="mb-16 lg:mb-24 max-w-[800px]"
        >
          <motion.span 
            variants={fadeUp}
            className="inline-block mb-4 text-[11px] font-medium tracking-[0.15em] text-[var(--color-brand-text-very-muted)] uppercase"
          >
            03 / WHAT WE CAN BUILD
          </motion.span>
          <div className="overflow-hidden mb-6">
            <motion.h2 
              variants={fadeUp}
              className="text-[clamp(36px,5vw,60px)] font-medium tracking-tight text-[var(--color-brand-text)] leading-[1.05]"
            >
              How can we help<br />
              you build <em className="font-editorial italic tracking-normal text-[var(--color-brand-text-secondary)]">better?</em>
            </motion.h2>
          </div>
          <motion.p 
            variants={fadeUp}
            className="text-[16px] lg:text-[18px] text-[var(--color-brand-text-secondary)] leading-[1.6] max-w-[600px]"
          >
            From digital products and custom software to AI systems, automation and data platforms, we build technology around the way your business works.
          </motion.p>
        </motion.div>

        {/* 2x2 Capabilities Grid */}
        <div className="mb-24 lg:mb-32">
          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.14 } }
            }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {CAPABILITIES.map((cap, i) => {
              return (
                <CapabilityCard key={cap.num} cap={cap} index={i} />
              );
            })}
          </motion.div>
        </div>

        {/* Cinematic Media Section */}
        <div className="w-[92%] max-w-[1300px] mx-auto h-[500px] lg:h-[620px] rounded-[32px] overflow-hidden border border-[var(--color-brand-border)] shadow-[0_30px_80px_rgba(0,0,0,0.4)] relative mb-24 lg:mb-32 group">
          <motion.div 
            style={{ scale: mediaScale, y: mediaY }}
            className="absolute inset-[-10%] w-[120%] h-[120%] bg-[#0A0D14]"
          >
            <video 
              src="/meeting.mp4"
              poster="/office.avif"
              autoPlay 
              loop 
              muted 
              playsInline 
              className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-80 pointer-events-none" />
          </motion.div>

          {/* Liquid Glass Label - Bottom Right */}
          <div className="absolute bottom-6 right-6 lg:bottom-8 lg:right-8 p-6 flex flex-col gap-3 liquid-glass">
            <span className="text-[11px] font-semibold tracking-[0.2em] text-[var(--color-brand-text)] uppercase">Software</span>
            <span className="text-[11px] font-semibold tracking-[0.2em] text-[var(--color-brand-text)] uppercase">Data</span>
            <span className="text-[11px] font-semibold tracking-[0.2em] text-[var(--color-brand-text)] uppercase">Intelligence</span>
            
            {/* Subtle Spectrum Refraction */}
            <div className="absolute inset-0 pointer-events-none mix-blend-screen opacity-10 bg-[linear-gradient(135deg,rgba(255,0,0,1),rgba(255,165,0,1),rgba(255,255,0,1),rgba(0,128,0,1),rgba(0,0,255,1),rgba(75,0,130,1),rgba(238,130,238,1))]" />
          </div>

          {/* Liquid Glass Label - Top Left */}
          <div className="absolute top-6 left-6 lg:top-8 lg:left-8 px-5 py-3 flex items-center gap-3 liquid-glass">
            <span className="w-2 h-2 rounded-full bg-[var(--color-brand-accent)] shadow-[0_0_8px_rgba(255,59,48,0.5)]" />
            <span className="text-[11px] lg:text-[12px] font-medium tracking-[0.2em] text-[var(--color-brand-text)] uppercase">
              HYPERQUBE ENGINEERING STUDIO
            </span>
            <div className="absolute inset-0 pointer-events-none mix-blend-screen opacity-10 bg-[linear-gradient(90deg,rgba(255,0,0,1),rgba(255,165,0,1),rgba(255,255,0,1),rgba(0,128,0,1),rgba(0,0,255,1),rgba(75,0,130,1),rgba(238,130,238,1))]" />
          </div>
        </div>

      </div>
    </motion.section>
  );
}

function CapabilityCard({ cap, index }: { cap: any, index: number }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 40, scale: 0.98 },
        show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } as any }
      }}
      className={cn(
        "group relative flex flex-col p-8 lg:p-12 transition-all duration-[800ms] cursor-default liquid-glass overflow-hidden hover:-translate-y-2 hover:border-[var(--color-brand-border-hover)]"
      )}
    >
      {/* Background light shift on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-[rgba(255,255,255,0.03)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out" />
      
      {/* Rainbow Spectrum Refraction inside Liquid Glass (Always Visible, brighter on hover) */}
      <div className="absolute inset-0 pointer-events-none mix-blend-screen opacity-15 group-hover:opacity-25 bg-[linear-gradient(135deg,rgba(255,0,0,1),rgba(255,165,0,1),rgba(255,255,0,1),rgba(0,128,0,1),rgba(0,0,255,1),rgba(75,0,130,1),rgba(238,130,238,1))] transition-opacity duration-700 ease-out" />
      
      {/* Permanent purple glow for AI & Automation (index 2), matching the reference */}
      {index === 2 && (
        <div className="absolute -bottom-[20%] -right-[20%] w-[120%] h-[120%] bg-[radial-gradient(circle_at_bottom_right,rgba(100,50,200,0.12)_0%,transparent_60%)] pointer-events-none" />
      )}

      <div className="flex justify-between items-start mb-16 lg:mb-24 relative z-10 transition-transform duration-500 ease-out group-hover:translate-x-1 group-hover:translate-y-1">
        <div className="flex items-center gap-3">
          <span className="text-[13px] font-medium tracking-[0.1em] text-[var(--color-brand-text-muted)] group-hover:text-[var(--color-brand-accent)] transition-colors duration-500">
            {cap.num}
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand-accent)] scale-75 opacity-50 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500" />
        </div>
        <ArrowUpRight className="w-5 h-5 text-[var(--color-brand-text-muted)] group-hover:text-[var(--color-brand-text)] transition-all duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
      </div>
      
      <div className="mt-auto relative z-10 transition-transform duration-500 ease-out group-hover:translate-x-1">
        <h3 className="text-[20px] lg:text-[24px] font-medium tracking-tight text-[var(--color-brand-text)] uppercase mb-4 transition-transform duration-500 group-hover:scale-[1.02] origin-left">
          {cap.title}
        </h3>
        <p className="text-[14px] lg:text-[15px] text-[var(--color-brand-text-secondary)] group-hover:text-[var(--color-brand-text)] transition-colors duration-500 leading-[1.6] max-w-[320px]">
          {cap.desc}
        </p>
      </div>
    </motion.div>
  );
}
