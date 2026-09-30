/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { cn } from "@/lib/utils";

export function BeforeWeBuild() {
  return (
    <section className="py-24 lg:py-32 bg-[#050505] relative border-t border-[rgba(255,255,255,0.05)]">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 relative z-10 flex flex-col items-center">
        {/* Top Pill */}
        <div className="mb-6 px-4 py-1.5 rounded-full border border-[rgba(255,255,255,0.1)] text-[10px] uppercase tracking-[0.2em] text-[#A1A1AA]">
          Built Around Your Goals
        </div>
        
        {/* Heading */}
        <h2 className="text-[clamp(40px,6vw,72px)] font-medium text-white tracking-tight leading-[1.05] text-center mb-16 lg:mb-24">
          Engineering with <br />
          <em className="font-editorial italic font-normal text-[var(--color-brand-text-secondary)]">Purpose.</em>
        </h2>

        {/* Cards Container */}
        <div className="grid md:grid-cols-2 gap-6 w-full">
          {/* Left Card: Without */}
          <div className="bg-[#0A0A0B] border border-[rgba(255,255,255,0.05)] rounded-[20px] p-8 lg:p-12">
            <h3 className="text-[11px] font-medium tracking-[0.15em] text-[#A1A1AA] uppercase mb-10">
              Without Purposeful Engineering
            </h3>
            <ul className="flex flex-col gap-6">
              {[
                "Tools chosen because they're trendy",
                "Disconnected systems and data silos",
                "Manual, repetitive workflows",
                "Hard-to-maintain foundations",
                "Off-the-shelf software compromises"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="w-5 h-5 rounded-full bg-[rgba(255,255,255,0.03)] flex items-center justify-center shrink-0 mt-0.5">
                    <svg width="10" height="10" viewBox="0 0 14 14" fill="none">
                      <path d="M1 1L13 13M1 13L13 1" stroke="#52525B" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <span className="text-[15px] lg:text-[16px] text-[#A1A1AA]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Card: With */}
          <div className="bg-[#0D0A0A] border border-[rgba(255,59,48,0.15)] rounded-[20px] p-8 lg:p-12 relative overflow-hidden shadow-[0_0_40px_rgba(255,59,48,0.03)]">
            {/* Subtle red glow in corner */}
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[radial-gradient(circle,rgba(255,59,48,0.08)_0%,transparent_70%)] pointer-events-none" />
            
            <h3 className="flex items-center gap-3 text-[11px] font-medium tracking-[0.15em] text-[#F5F5F5] uppercase mb-10 relative z-10">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF3B30] shadow-[0_0_8px_rgba(255,59,48,0.8)]" />
              With HyperQube
            </h3>
            
            <ul className="flex flex-col gap-6 relative z-10">
              {[
                "Technology chosen for the problem",
                "Systems designed around your workflow",
                "Automation where it creates value",
                "Foundations built to evolve and scale",
                "Custom solutions that fit perfectly"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="w-5 h-5 rounded-full bg-[rgba(255,59,48,0.1)] flex items-center justify-center shrink-0 mt-0.5">
                    <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
                      <path d="M1 5L4.5 8.5L11 1.5" stroke="#FF3B30" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="text-[15px] lg:text-[16px] text-[#F5F5F5]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
