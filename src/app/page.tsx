import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { HeroMedia } from "@/components/hero-media";
import { CapabilityStrip } from "@/components/capability-strip";
import { BeforeWeBuild } from "@/components/before-we-build";
import { WhatWeBuild } from "@/components/what-we-build";
import { Principles } from "@/components/principles";
import { Process } from "@/components/process";
import { EngineeringStack } from "@/components/engineering-stack";
import { Faq } from "@/components/faq";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { SmoothScroll } from "@/components/smooth-scroll";
import { SpectrumGlow } from "@/components/spectrum-glow";

export default function Home() {
  return (
    <SmoothScroll>
      <div className="min-h-screen bg-[var(--color-brand-bg)] overflow-clip w-full relative">
        <Navbar />
        
        <main className="relative z-10">
          <Hero />
          <HeroMedia />
          <CapabilityStrip />
          <BeforeWeBuild />
          <WhatWeBuild />
          <Principles />
          <Process />
          <EngineeringStack />
          <Faq />
          <Contact />
        </main>

        <Footer />
      </div>
    </SmoothScroll>
  );
}
