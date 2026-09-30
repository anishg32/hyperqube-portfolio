/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect } from "react";
import { X, ArrowRight } from "lucide-react";
import type { Capability } from "../data/capabilities";

interface CapabilityModalProps {
  capability: Capability;
  onClose: () => void;
}

export function CapabilityModal({ capability, onClose }: CapabilityModalProps) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEsc);
    };
  }, [onClose]);

  const handleDiscuss = () => {
    onClose();
    window.location.hash = "#contact";
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="absolute inset-0 bg-[#0B132B]/10 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />
      <div className="relative w-full max-w-[720px] max-h-[90vh] bg-white border border-slate-200 shadow-2xl flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="flex items-center justify-between px-8 py-6 border-b border-slate-100 bg-white">
          <div className="flex items-center gap-4">
            <span className="text-[12px] font-normal tracking-[0.2em] text-[#0066FF]">
              {capability.num}
            </span>
            <div className="w-[1px] h-4 bg-slate-200" />
            <h2 id="modal-title" className="text-[14px] font-normal tracking-[0.1em] text-[#0B132B] uppercase">
              {capability.title}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-[#0B132B] transition-colors"
            aria-label="Close modal"
          >
            <X className="w-6 h-6 stroke-[1.5]" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-8 lg:p-10 bg-white">
          <p className="text-[18px] font-normal text-[#0B132B] leading-[1.6] mb-12">
            {capability.longDesc}
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-[10px] font-normal tracking-[0.2em] text-[#0B132B] uppercase mb-4 opacity-50">
                What We Can Build
              </h3>
              <ul className="space-y-4">
                {capability.solutions.map((solution) => (
                  <li
                    key={solution}
                    className="flex items-start gap-3 text-[14px] text-slate-600 font-normal"
                  >
                    <span className="text-[#0066FF] mt-0.5">&bull;</span>
                    {solution}
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-12">
              <div>
                <h3 className="text-[10px] font-normal tracking-[0.2em] text-[#0B132B] uppercase mb-4 opacity-50">
                  Technology
                </h3>
                <div className="flex flex-wrap gap-x-4 gap-y-2">
                  {capability.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-[14px] font-normal text-[#0B132B]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-[10px] font-normal tracking-[0.2em] text-[#0B132B] uppercase mb-4 opacity-50">
                  Built For
                </h3>
                <div className="flex flex-wrap gap-x-4 gap-y-2">
                  {capability.builtFor.map((audience) => (
                    <span
                      key={audience}
                      className="text-[14px] font-normal text-[#0B132B]"
                    >
                      {audience}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-8 border-t border-slate-100 bg-white mt-auto">
          <button
            onClick={handleDiscuss}
            className="group flex w-full sm:w-auto items-center justify-center gap-3 bg-white border border-[#0B132B] px-8 py-4 text-[13px] font-normal tracking-[0.05em] uppercase text-[#0B132B] hover:bg-[#0B132B] hover:text-[var(--color-brand-text)] transition-colors"
          >
            Discuss this capability
            <ArrowRight className="w-4 h-4 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
}
