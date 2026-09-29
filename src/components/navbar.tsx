"use client";

import { useState, useEffect, useCallback } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

const NAV_ITEMS = [
  { label: "Services", href: "#services" },
  { label: "Solutions", href: "#what-we-build" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handler, { passive: true });
    handler();
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [mobileOpen]);

  const closeMobile = useCallback(() => setMobileOpen(false), []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-[rgba(255,255,255,0.8)] backdrop-blur-xl border-b border-[var(--color-brand-border)] h-14 shadow-sm"
          : "bg-transparent border-b border-transparent h-16"
      }`}
    >
      <div className="max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-12 h-full flex items-center justify-between">
        {/* Brand */}
        <a href="#" className="flex items-center gap-2.5" onClick={closeMobile}>
          <div className="w-7 h-7 bg-[var(--color-brand-text)] rounded-[4px] flex items-center justify-center shrink-0">
            <span className="text-[var(--color-brand-bg)] text-[9px] font-normal tracking-tight leading-none">
              HQ
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-[14px] font-normal tracking-[-0.01em] text-[var(--color-brand-text)] leading-none">
              HyperQube
            </span>
            <span className="text-[7px] font-normal tracking-[0.18em] text-[var(--color-brand-text-secondary)] uppercase leading-none mt-[2px]">
              Software &bull; Data &bull; Intelligence
            </span>
          </div>
        </a>

        {/* Desktop nav */}
        <nav
          className="hidden md:flex items-center gap-7"
          aria-label="Main navigation"
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[13px] font-normal text-[var(--color-brand-text-secondary)] hover:text-[var(--color-brand-text)] transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA + mobile toggle */}
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-1.5 bg-[var(--color-brand-accent)] px-4 py-[7px] text-[13px] font-normal text-white hover:bg-[var(--color-brand-accent-light)] hover:shadow-[0_4px_10px_rgba(220,38,38,0.2)] transition-all rounded-[6px]"
          >
            Start a Project
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              className="opacity-90"
              aria-hidden="true"
            >
              <path
                d="M2.5 6H9.5M6.5 3L9.5 6L6.5 9"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          <button
            className="md:hidden p-2 -mr-2 text-[var(--color-brand-text-secondary)]"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <nav
          className="md:hidden border-t border-[var(--color-brand-border)] bg-[var(--color-brand-panel)] shadow-xl"
          aria-label="Mobile navigation"
        >
          <div className="flex flex-col px-5 py-3 gap-0.5">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMobile}
                className="py-3 text-[14px] font-normal text-[var(--color-brand-text-secondary)] hover:text-[var(--color-brand-text)] border-b border-[var(--color-brand-border)] last:border-0 transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={closeMobile}
              className="mt-3 mb-1 flex items-center justify-center bg-[var(--color-brand-accent)] rounded-[6px] py-2.5 text-[14px] font-normal text-white shadow-[0_4px_10px_rgba(220,38,38,0.15)]"
            >
              Start a Project
            </a>
          </div>
        </nav>
      )}
    </motion.header>
  );
}
