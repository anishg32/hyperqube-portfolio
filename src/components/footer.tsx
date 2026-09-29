import { SpectrumGlow } from "@/components/spectrum-glow";

export function Footer() {
  return (
    <footer className="bg-[#000000] border-t border-[var(--color-brand-border)] py-14 relative overflow-hidden">
      {/* Background glow spilling from contact */}
      <SpectrumGlow 
        className="bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[800px] h-[400px]"
        opacity={0.06}
      />

      <div className="max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-7 h-7 bg-white rounded-[4px] flex items-center justify-center shrink-0">
                <span className="text-black text-[9px] font-normal tracking-tight leading-none">
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
            </div>
            <a
              href="mailto:hyperqube.ff@gmail.com"
              className="text-[13px] text-[var(--color-brand-text-secondary)] hover:text-[var(--color-brand-accent)] transition-colors"
            >
              hyperqube.ff@gmail.com
            </a>
          </div>

          {/* Nav */}
          <nav className="flex flex-wrap gap-x-7 gap-y-3">
            {[
              { label: "Services", href: "#services" },
              { label: "Solutions", href: "#what-we-build" },
              { label: "Process", href: "#process" },
              { label: "Contact", href: "#contact" },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-[13px] font-normal tracking-[0.04em] uppercase text-[var(--color-brand-text-secondary)] hover:text-[var(--color-brand-accent)] transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="pt-6 border-t border-[var(--color-brand-border)] flex justify-between items-center">
          <p className="text-[12px] text-[var(--color-brand-text-secondary)]">
            &copy; {new Date().getFullYear()} HyperQube. All rights reserved.
          </p>
          <p className="text-[12px] text-[var(--color-brand-text-secondary)] hidden md:block">
            Engineering Studio
          </p>
        </div>
      </div>
    </footer>
  );
}
