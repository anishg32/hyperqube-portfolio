/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface BlurryTextProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  as?: React.ElementType;
}

export function BlurryText({ children, className, as: Component = "h2", delay = 0, duration = 1.1 }: BlurryTextProps) {
  const ref = useRef<HTMLElement>(null);
  // Trigger when approximately 20-30% of the heading enters the viewport
  const isInView = useInView(ref, { once: true, margin: "-20%" });
  const prefersReducedMotion = useReducedMotion();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: delay },
    },
  };

  const item = {
    hidden: prefersReducedMotion
      ? { opacity: 0, y: 15 }
      : { opacity: 0, filter: "blur(10px)", y: 30, rotateX: -55, scale: 0.96 },
    show: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      rotateX: 0,
      scale: 1,
      transition: {
        duration: duration,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  // Reference the existing motion component (e.g. motion.h2, motion.div)
  const MotionComponent = (motion as any)[Component as keyof typeof motion] || motion.div;

  return (
    <MotionComponent
      ref={ref}
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
      variants={container}
      className={cn(className)}
      style={{ perspective: "1200px" }}
    >
      {React.Children.map(children, (child, i) => {
        // If the child is a string, split by words while preserving spaces
        if (typeof child === "string") {
          const words = child.split(/(\s+)/);
          return words.map((word, j) => {
            if (word.match(/^\s+$/)) {
              return <span key={`${i}-${j}`}>{word}</span>;
            }
            if (word === "") return null;
            return (
              <motion.span
                key={`${i}-${j}`}
                variants={item}
                className="inline-block"
                style={{ transformStyle: "preserve-3d", transformOrigin: "center bottom" }}
              >
                {word}
              </motion.span>
            );
          });
        }
        
        // If it's a React element
        if (React.isValidElement(child)) {
          // Do not wrap <br /> in an inline-block motion span, otherwise it breaks formatting
          if (child.type === "br") {
             return child;
          }
          // Wrap other elements (like <em> or <span>) so they participate in the 3D stagger
          return (
            <motion.span
              key={i}
              variants={item}
              className="inline-block"
              style={{ transformStyle: "preserve-3d", transformOrigin: "center bottom" }}
            >
              {child}
            </motion.span>
          );
        }
        
        return child;
      })}
    </MotionComponent>
  );
}
