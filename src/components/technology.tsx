"use client";

import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring, MotionValue, useMotionValue } from "framer-motion";
import { cn } from "@/lib/utils";

type TechnologyItem = {
  name: string;
  monogram: string;
  desc?: string;
};

type TechCategory = {
  num: string;
  id: string;
  title: string;
  colSpan: string;
  desc?: string;
  technologies: TechnologyItem[];
};

const CATEGORIES: TechCategory[] = [
  {
    num: "01",
    id: "frontend",
    title: "PRODUCT & FRONTEND",
    colSpan: "col-span-12 lg:col-span-6",
    technologies: [
      { name: "Next.js", monogram: "N", desc: "Application framework" },
      { name: "React", monogram: "R" },
      { name: "TypeScript", monogram: "TS", desc: "Static typing" },
      { name: "JavaScript", monogram: "JS" },
    ],
  },
  {
    num: "02",
    id: "backend",
    title: "BACKEND & APIs",
    colSpan: "col-span-12 lg:col-span-6",
    technologies: [
      { name: "Node.js", monogram: "N" },
      { name: "Python", monogram: "PY", desc: "Logic & processing" },
      { name: "REST APIs", monogram: "API" },
    ],
  },
  {
    num: "03",
    id: "ai",
    title: "AI & INTELLIGENCE",
    colSpan: "col-span-12 lg:col-span-6",
    desc: "Turning data into useful systems, automation, and intelligent product experiences.",
    technologies: [
      { name: "Machine Learning", monogram: "ML" },
      { name: "Computer Vision", monogram: "CV" },
      { name: "Data Analysis", monogram: "DA" },
      { name: "AI APIs", monogram: "AI" },
    ],
  },
  {
    num: "04",
    id: "data",
    title: "DATA & DATABASES",
    colSpan: "col-span-12 lg:col-span-6",
    technologies: [
      { name: "PostgreSQL", monogram: "PG", desc: "Relational data" },
      { name: "Supabase", monogram: "SB" },
      { name: "Firebase", monogram: "FB" },
    ],
  },
];

export function Technology() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const lineHeight = useTransform(smoothProgress, [0.1, 0.9], ["0%", "100%"]);
  
  const labelOpacity = useTransform(smoothProgress, [0, 0.1], [0, 1]);
  const labelY = useTransform(smoothProgress, [0, 0.1], [12, 0]);

  const headingOpacity = useTransform(smoothProgress, [0.05, 0.15], [0, 1]);
  const headingY = useTransform(smoothProgress, [0.05, 0.15], [20, 0]);
  const headingBlur = useTransform(smoothProgress, [0.05, 0.15], [6, 0]);
  const headingParallax = useTransform(smoothProgress, [0, 1], [0, -20]);

  const bgParallax = useTransform(smoothProgress, [0, 1], [20, -20]);

  return (
    <section
      ref={containerRef}
      className="py-[72px] lg:py-[140px] relative overflow-hidden"
    >
      <div className="absolute left-4 lg:left-12 top-0 bottom-0 w-[1px] bg-[rgba(15,23,42,0.08)] z-0 hidden sm:block">
        <motion.div 
          className="w-full bg-[var(--color-brand-accent)]"
          style={{ height: lineHeight }}
        />
      </div>

      <div className="max-w-[1320px] mx-auto px-5 sm:px-12 lg:px-24 relative z-10">
        <div className="w-full">
          <motion.div className="mb-12 lg:mb-20 max-w-[800px]" style={{ y: headingParallax }}>
            <motion.div 
              style={{ opacity: labelOpacity, y: labelY }}
              className="mb-6"
            >
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-[rgba(15,23,42,0.05)] border border-[rgba(15,23,42,0.1)] text-[11px] font-medium tracking-[0.12em] text-[var(--color-brand-text-muted)] uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand-accent)] mr-2" />
                Engineering the Foundation
              </span>
            </motion.div>
            
            <motion.h2 
              style={{ opacity: headingOpacity, y: headingY, filter: `blur(${headingBlur}px)` }}
              className="text-[clamp(36px,4vw,56px)] font-medium tracking-tight text-[var(--color-brand-text)] leading-[1.1]"
            >
              Technology
            </motion.h2>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.12 } }
            }}
            className="grid grid-cols-12 gap-4 lg:gap-6 w-full"
          >
            {CATEGORIES.map((cat, i) => (
              <TechnologyCard 
                key={cat.id} 
                category={cat} 
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function TechnologyCard({ 
  category 
}: { 
  category: TechCategory; 
}) {
  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.97 },
    show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  // Mouse Parallax logic
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / 20; 
    const y = (e.clientY - rect.top - rect.height / 2) / 20; 
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      variants={cardVariants}
      className={category.colSpan}
    >
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ x: smoothMouseX, y: smoothMouseY }}
        className={cn(
          "group relative flex flex-col p-[18px] sm:p-[20px] lg:p-[28px] rounded-[16px] transition-all duration-[400ms] ease-[cubic-bezier(0.16,1,0.3,1)] bg-white",
          "border border-[rgba(15,23,42,0.08)] shadow-[0_8px_30px_rgba(15,23,42,0.04)]",
          "hover:-translate-y-[5px] hover:scale-[1.01] hover:shadow-[0_25px_60px_rgba(15,23,42,0.12)] hover:border-[rgba(15,23,42,0.12)]"
        )}
      >
        {/* Hover glass reflection sweeping across */}
        <div className="absolute inset-0 rounded-[16px] overflow-hidden pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute inset-0 w-[200%] h-[200%] bg-[linear-gradient(135deg,transparent,rgba(15,23,42,0.8)_40%,transparent_60%)] -translate-x-[150%] group-hover:translate-x-[50%] transition-transform duration-[1.5s] ease-in-out" />
        </div>

        <div className="relative z-10 flex flex-col h-full pointer-events-none">
          <span className="text-[11px] font-semibold tracking-[0.12em] text-[var(--color-brand-text-very-muted)] block mb-4 lg:mb-5">
            {category.num}
          </span>
          <h3 className="text-[15px] lg:text-[16px] font-medium tracking-tight text-[var(--color-brand-text)] uppercase">
            {category.title}
          </h3>
          
          {category.desc && (
            <p className="mt-2 text-[12px] lg:text-[13px] text-[var(--color-brand-text-secondary)] leading-[1.5] max-w-[400px]">
              {category.desc}
            </p>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3 mt-6 lg:mt-8 pt-6 lg:pt-8 border-t border-[rgba(15,23,42,0.06)] mt-auto pointer-events-auto">
            {category.technologies.map((tech) => (
              <div key={tech.name} className="group/item flex items-center gap-3">
                <div className="relative w-[38px] h-[38px] lg:w-[46px] lg:h-[46px] rounded-[9px] bg-[#F8FAFC] border border-[rgba(15,23,42,0.08)] flex items-center justify-center shrink-0 transition-all duration-[400ms] group-hover/item:border-[var(--color-brand-border-accent)] group-hover/item:bg-[rgba(220,38,38,0.04)] group-hover/item:-translate-y-[1px] overflow-hidden">
                  <span className="text-[12px] font-mono font-medium text-[var(--color-brand-text-muted)] group-hover/item:text-[var(--color-brand-accent)] transition-colors duration-[400ms] relative z-10">
                    {tech.monogram}
                  </span>
                  {/* Subtle red/spectrum highlight on hover inside icon */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(220,38,38,0.1),transparent_70%)] opacity-0 group-hover/item:opacity-100 transition-opacity duration-[400ms]" />
                </div>
                
                <div className="flex flex-col">
                  <span className="text-[15px] lg:text-[16px] font-medium text-[var(--color-brand-text)] transition-transform duration-[400ms] group-hover/item:translate-x-0.5">
                    {tech.name}
                  </span>
                  {tech.desc && (
                    <span className="text-[12px] lg:text-[13px] text-[var(--color-brand-text-muted)] mt-0.5 block transition-transform duration-[400ms] group-hover/item:translate-x-0.5">
                      {tech.desc}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
