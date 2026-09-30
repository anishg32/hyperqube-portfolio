/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
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
        {/* Layer: Deep Blue (Bottom Base) */}
        <motion.div
          variants={animCyan}
          initial="hidden"
          animate={["show", "float"]}
          className={cn(`absolute w-[140%] h-[120%] bg-[rgba(30,50,110,0.4)] rounded-[9999px] ${mixBlend} ${baseBlur}`)}
          style={{ transform: "translate(0%, 30%)" }}
        />

        {/* Layer: Dark Violet/Plum (Middle/Sides) */}
        <motion.div
          variants={animViolet}
          initial="hidden"
          animate={["show", "float"]}
          className={cn(`absolute w-[160%] h-[100%] bg-[rgba(100,40,70,0.5)] rounded-[9999px] ${mixBlend} ${baseBlur}`)}
          style={{ transform: "translate(0%, 0%)" }}
        />

        {/* Layer: Warm Orange/Rust (Core) */}
        <motion.div
          variants={animOrange}
          initial="hidden"
          animate={["show", "float"]}
          className={cn(`absolute w-[120%] h-[80%] bg-[rgba(200,90,50,0.6)] rounded-[9999px] ${mixBlend} ${baseBlur}`)}
          style={{ transform: "translate(0%, -20%)" }}
        />

        {/* Layer: Soft Peach/Yellow (Bright Center Top) */}
        <motion.div
          variants={animWhite}
          initial="hidden"
          animate={["show", "float"]}
          className={cn(`absolute w-[80%] h-[60%] bg-[rgba(255,180,120,0.7)] rounded-[9999px] ${mixBlend} ${baseBlur}`)}
          style={{ transform: "translate(0%, -30%)" }}
        />
      </div>
    </div>
  );
}
