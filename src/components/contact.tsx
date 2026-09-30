/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
export function Contact() {
  return (
    <section id="contact" className="pt-24 lg:pt-32 pb-0 bg-[#050505] relative overflow-visible flex flex-col items-center z-0">
      
      {/* CTA Box */}
      <div className="w-full max-w-[1000px] mx-auto px-5 sm:px-8 relative z-10">
        <div className="bg-[#0A0A0A] border border-[rgba(255,255,255,0.05)] rounded-[24px] p-12 lg:p-20 flex flex-col items-center text-center shadow-2xl">
          <h2 className="text-[clamp(40px,6vw,64px)] font-medium tracking-tight text-white leading-[1.05] mb-6 max-w-[700px]">
            Ready to scale your <br className="hidden sm:block" />
            brand to <em className="font-editorial italic font-normal text-white">new heights?</em>
          </h2>
          
          <p className="text-[16px] lg:text-[18px] text-[#A1A1AA] leading-[1.6] max-w-[600px] mb-10">
            If you want to achieve ground-breaking growth with custom software, intelligent data systems, and scalable architecture, then you&apos;re in the right place.
          </p>

          <a
            href="mailto:hyperqube.ff@gmail.com"
            className="inline-flex items-center justify-center bg-[#FF453A] text-white px-8 py-3.5 rounded-[8px] text-[15px] font-medium tracking-wide hover:bg-[#ff5a50] hover:-translate-y-0.5 hover:shadow-[0_4px_20px_rgba(255,69,58,0.4)] transition-all duration-300 relative z-10"
          >
            Book a call
          </a>
        </div>
      </div>

      {/* Massive Sunset/Ocean Multi-Color Glow matching the reference image */}
      <div className="relative w-full h-[350px] mt-[-150px] pointer-events-none z-0 overflow-visible flex justify-center">
        {/* Top half: Warm Orange/Yellow glow */}
        <div className="absolute top-[30%] w-[80vw] max-w-[900px] h-[300px] bg-[radial-gradient(ellipse_at_top,rgba(255,140,40,0.85)_0%,rgba(255,80,40,0.5)_40%,transparent_70%)] blur-[80px] mix-blend-screen" />
        
        {/* Bottom half: Cool Blue/Cyan glow */}
        <div className="absolute top-[60%] w-[90vw] max-w-[1000px] h-[350px] bg-[radial-gradient(ellipse_at_bottom,rgba(0,180,255,0.7)_0%,rgba(0,100,255,0.4)_50%,transparent_70%)] blur-[90px] mix-blend-screen" />
        
        {/* Core bright white/yellow center */}
        <div className="absolute top-[45%] w-[40vw] max-w-[400px] h-[150px] bg-[radial-gradient(circle_at_center,rgba(255,230,150,0.9)_0%,transparent_60%)] blur-[50px] mix-blend-screen" />
      </div>
    </section>
  );
}
