/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Search, Settings, TrendingUp } from "lucide-react";

const STEPS = [
  {
    title: "System Audit",
    desc: "We&apos;ll start by analyzing your current infrastructure and seeing what&apos;s holding you back.",
    icon: Search
  },
  {
    title: "Architecture Setup",
    desc: "Then, with your business goals in mind, we will engineer the technical foundation.",
    icon: Settings
  },
  {
    title: "Scale & Optimize",
    desc: "We&apos;ll then work towards optimizing performance and scaling the system for growth.",
    icon: TrendingUp
  }
];

export function Process() {
  return (
    <section className="py-24 lg:py-32 bg-[#050505] relative border-t border-[rgba(255,255,255,0.05)]">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 relative z-10 flex flex-col items-center text-center">
        
        {/* Top Pill */}
        <div className="mb-6 px-4 py-1.5 rounded-[12px] border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.02)] text-[11px] text-[#E0E0E0]">
          Process
        </div>

        {/* Heading */}
        <h2 className="text-[clamp(36px,6vw,64px)] font-medium text-white tracking-tight leading-[1.1] mb-6 max-w-[800px]">
          Our simple 3-step process to <em className="font-editorial italic font-normal text-[var(--color-brand-text-secondary)]">skyrocket</em> your business.
        </h2>

        <p className="text-[16px] lg:text-[18px] text-[#A1A1AA] max-w-[600px] mb-20 leading-[1.6]">
          From custom software, to data pipelines, to intelligent systems, we&apos;ve got you covered on every front.
        </p>

        {/* 3 Steps Grid */}
        <div className="grid md:grid-cols-3 gap-12 md:gap-8 w-full max-w-[1000px]">
          {STEPS.map((step, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              {/* Icon */}
              <div className="mb-6">
                <step.icon className="w-12 h-12 text-[#FF3B30]" strokeWidth={1.2} />
              </div>
              
              <h3 className="text-[20px] lg:text-[22px] font-medium text-white mb-4">
                {step.title}
              </h3>
              
              <p className="text-[14px] lg:text-[15px] text-[#A1A1AA] leading-[1.6]">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
