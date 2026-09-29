"use client";

import { motion, Variants } from "framer-motion";
import { cn } from "@/lib/utils";

type SpectrumVariant = "hero" | "section" | "card" | "footer";

interface SpectrumGlowProps {
  className?: string;
  opacity?: number;
  variant?: SpectrumVariant;
}

// Reusable animation variants for different layers to create natural atmospheric movement
const animOrange: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 3 } },
  float: {
    x: [-15, 15, -15],
    y: [-5, 5, -5],
    scale: [1, 1.02, 1],
    transition: { duration: 25, ease: "easeInOut", repeat: Infinity, repeatType: "mirror" }
  }
};

const animRed: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 3 } },
  float: {
    x: [10, -10, 10],
    y: [5, -5, 5],
    scale: [1, 1.03, 1],
    transition: { duration: 28, ease: "easeInOut", repeat: Infinity, repeatType: "mirror" }
  }
};

const animWhite: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 3 } },
  float: {
    scale: [1, 1.04, 1],
    transition: { duration: 22, ease: "easeInOut", repeat: Infinity, repeatType: "mirror" }
  }
};

const animCyan: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 3 } },
  float: {
    x: [10, -10, 10],
    y: [-10, 10, -10],
    transition: { duration: 30, ease: "easeInOut", repeat: Infinity, repeatType: "mirror" }
  }
};

const animViolet: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 3 } },
  float: {
    y: [-5, 5, -5],
    x: [-5, 10, -5],
    scale: [1, 1.02, 1],
    transition: { duration: 35, ease: "easeInOut", repeat: Infinity, repeatType: "mirror" }
  }
};

export function SpectrumGlow({ className, opacity = 1, variant = "section" }: SpectrumGlowProps) {
  // Adjust blur and blending based on variant
  const baseBlur = variant === "card" ? "blur-[60px]" : "blur-[120px] md:blur-[140px]";
  const mixBlend = "mix-blend-screen";

  return (
    <div
      className={cn("pointer-events-none absolute z-0", className)}
      style={{ opacity }}
    >
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Layer G: Violet (Outer Edge Bottom/Right) */}
        <motion.div
          variants={animViolet}
          initial="hidden"
          animate={["show", "float"]}
          className={cn(`absolute w-[120%] h-[120%] bg-[rgba(130,70,220,0.06)] rounded-[9999px] ${mixBlend} ${baseBlur}`)}
          style={{ transform: "translate(10%, 10%)" }}
        />

        {/* Layer F: Blue (Outer Edge) */}
        <motion.div
          variants={animCyan}
          initial="hidden"
          animate={["show", "float"]}
          className={cn(`absolute w-[110%] h-[110%] bg-[rgba(30,100,255,0.08)] rounded-[9999px] ${mixBlend} ${baseBlur}`)}
          style={{ transform: "translate(-5%, -5%)" }}
        />

        {/* Layer E: Cyan (Side Accent) */}
        <motion.div
          variants={animCyan}
          initial="hidden"
          animate={["show", "float"]}
          className={cn(`absolute w-[90%] h-[100%] bg-[rgba(50,210,225,0.10)] rounded-[9999px] ${mixBlend} ${baseBlur}`)}
          style={{ transform: "translate(-10%, 5%)" }}
        />

        {/* Layer A: Orange (Main Body) */}
        <motion.div
          variants={animOrange}
          initial="hidden"
          animate={["show", "float"]}
          className={cn(`absolute w-[100%] h-[100%] bg-[rgba(255,105,35,0.20)] rounded-[9999px] ${mixBlend} ${baseBlur}`)}
        />

        {/* Layer B: Red (Core Accent) */}
        <motion.div
          variants={animRed}
          initial="hidden"
          animate={["show", "float"]}
          className={cn(`absolute w-[85%] h-[90%] bg-[rgba(255,45,55,0.14)] rounded-[9999px] ${mixBlend} ${baseBlur}`)}
          style={{ transform: "translate(5%, -5%)" }}
        />

        {/* Layer C: Warm Yellow (Inner Center) */}
        <motion.div
          variants={animOrange}
          initial="hidden"
          animate={["show", "float"]}
          className={cn(`absolute w-[70%] h-[80%] bg-[rgba(255,190,80,0.12)] rounded-[9999px] ${mixBlend} ${baseBlur}`)}
        />

        {/* Layer D: White (Bright Center) */}
        <motion.div
          variants={animWhite}
          initial="hidden"
          animate={["show", "float"]}
          className={cn(`absolute w-[50%] h-[60%] bg-[rgba(15,23,42,0.08)] rounded-[9999px] ${mixBlend} ${baseBlur}`)}
        />
      </div>
    </div>
  );
}
