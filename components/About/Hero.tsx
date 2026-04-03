"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";

gsap.registerPlugin(SplitText);

export default function Hero() {
  useGSAP(() => {
    const splitTitle = new SplitText(".hero-heading", { type: "words" });

    gsap.from(splitTitle.words, {
      opacity: 0,
      y: 30,
      filter: "blur(10px)",
      stagger: 0.05,
      duration: 1,
      ease: "power3.out",
    });

    const splitDesc = new SplitText(".desc", { type: "lines" });

    gsap.from(splitDesc.lines, {
      opacity: 0,
      y: 20,
      stagger: 0.1,
      duration: 1,
      ease: "power2.out",
      delay: 0.5,
    });

    return () => {
      splitTitle.revert();
      splitDesc.revert();
    };
  });

  return (
    <section className="relative min-h-screen w-full flex flex-col justify-between items-center px-4 xs:px-6 sm:px-8 md:px-16 pt-20 xs:pt-24 sm:pt-28 md:pt-32 pb-8 sm:pb-10 md:pb-12 overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover -z-20"
      >
        <source src="/videos/about-us.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-genesis-navy/30 -z-10" />

      <div className="w-full flex items-start justify-between border-b border-white/10 pb-3">
       
      </div>

      <div className="flex flex-col items-center gap-4 sm:gap-6 max-w-xs xs:max-w-sm sm:max-w-md md:max-w-2xl text-center">
        <h1 className="hero-heading text-[clamp(2rem,6vw,3.75rem)] text-white leading-tight font-[PPFONT]">
          Built on conviction.
          <br />
          Driven by purpose.
        </h1>
        <p className="desc text-xs xs:text-sm text-center text-white/80 font-poppins leading-relaxed max-w-xs sm:max-w-sm md:max-w-md">
          Since 1991, Genesis Ventures has partnered with visionary founders at
          the earliest stages of company building. We bring capital, networks,
          and decades of operational experience to every investment.
        </p>
      </div>

      {/* Bottom spacer — stats moved to About section */}
      <div className="w-full border-t border-white/10 pt-6 sm:pt-8" />
    </section>
  );
}
