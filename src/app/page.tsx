import { CinematicIntro } from "@/components/cinematic-intro";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { HeroMedia } from "@/components/hero-media";
import { CapabilityStrip } from "@/components/capability-strip";
import { BeforeWeBuild } from "@/components/before-we-build";
import { ServiceIndex } from "@/components/service-index";
import { Principles } from "@/components/principles";
import { Process } from "@/components/process";
import { Technology } from "@/components/technology";
import { Faq } from "@/components/faq";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--color-brand-bg)] overflow-x-hidden">
      <CinematicIntro />
      <Navbar />
      
      <main>
        <Hero />
        <HeroMedia />
        <CapabilityStrip />
        <BeforeWeBuild />
        <ServiceIndex />
        <Principles />
        <Process />
        <Technology />
        <Faq />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
