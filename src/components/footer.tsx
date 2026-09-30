"use client";

/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
export function Footer() {
  return (
    <footer className="bg-transparent pt-0 pb-20 relative overflow-visible z-10">
      {/* We don't need a top border or background since it merges perfectly with the Contact section's glow */}
      
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 relative z-10 flex flex-col lg:flex-row justify-between gap-16 lg:gap-24 pt-20">
        
        {/* Left Side: Newsletter */}
        <div className="flex flex-col gap-6 max-w-[480px]">
          <h2 className="text-[24px] lg:text-[28px] font-medium tracking-tight text-white mb-2">
            HyperQube
          </h2>
          
          <div className="flex flex-col gap-2">
            <h3 className="text-[16px] font-medium text-white">Join our newsletter</h3>
            <p className="text-[14px] text-[#A1A1AA] leading-[1.6]">
              Sign up to our mailing list below and be the first to know about new updates. Don&apos;t worry, we hate spam too.
            </p>
          </div>
          
          <form className="flex items-center gap-3 mt-2" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Enter your Email Address" 
              className="flex-1 bg-[#121212] border border-[rgba(255,255,255,0.1)] rounded-[8px] px-4 py-3 text-[14px] text-white outline-none focus:border-[rgba(255,255,255,0.3)] transition-colors"
              required
            />
            <button 
              type="submit"
              className="bg-[#FF3B30] text-white px-6 py-3 rounded-[8px] text-[14px] font-medium hover:bg-[#ff5247] transition-colors"
            >
              Get Notified
            </button>
          </form>
        </div>

        {/* Right Side: Links */}
        <div className="flex gap-16 lg:gap-24">
          <div className="flex flex-col gap-5">
            <h4 className="text-[15px] font-medium text-white mb-1">Pages</h4>
            <a href="#about" className="text-[14px] text-[#A1A1AA] hover:text-white transition-colors">About</a>
            <a href="#work" className="text-[14px] text-[#A1A1AA] hover:text-white transition-colors">Work</a>
            <a href="#services" className="text-[14px] text-[#A1A1AA] hover:text-white transition-colors">Services</a>
            <a href="#process" className="text-[14px] text-[#A1A1AA] hover:text-white transition-colors">Process</a>
          </div>

          <div className="flex flex-col gap-5">
            <h4 className="text-[15px] font-medium text-white mb-1">Information</h4>
            <a href="#faq" className="text-[14px] text-[#A1A1AA] hover:text-white transition-colors">FAQ</a>
            <a href="#contact" className="text-[14px] text-[#A1A1AA] hover:text-white transition-colors">Contact</a>
            <a href="#" className="text-[14px] text-[#A1A1AA] hover:text-white transition-colors">Legal</a>
            <a href="#" className="text-[14px] text-[#A1A1AA] hover:text-white transition-colors">Privacy Policy</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
