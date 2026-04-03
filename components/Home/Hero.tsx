"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "../ui/Button2";
import Link from "next/link";

gsap.registerPlugin(SplitText, ScrollTrigger);

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
    });

    return () => {
      splitTitle.revert();
      splitDesc.revert();
    };
  });

  return (
    <section className="relative w-full min-h-screen overflow-hidden flex flex-col items-center justify-center bg-genesis-navy px-4 xs:px-6 sm:px-8 md:px-16 pt-16 xs:pt-20 md:pt-28 lg:pt-32 pb-24 xs:pb-28 sm:pb-16 md:pb-12">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/final1.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-genesis-navy/30" />

      <p className="absolute bottom-24 xs:bottom-28 sm:bottom-32 md:bottom-36 right-2 xs:right-3 sm:right-4 text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-[PPFONT] leading-tight text-white/30 select-none pointer-events-none">
        established in
      </p>

      <div className="absolute bottom-0 right-2 xs:right-3 sm:right-4 text-[14vw] sm:text-[12vw] md:text-[10vw] font-[PPFONT] leading-none text-white/30 select-none pointer-events-none">
        1991
      </div>

      <div className="relative z-10 flex flex-col items-center text-center gap-4 sm:gap-5 md:gap-6 w-full max-w-5xl mx-auto">
        <h1 className="hero-heading text-[clamp(1.75rem,7vw,4.5rem)] font-[PPFONT] text-white leading-tight tracking-tight">
          Creating Long Term
          <br />
          Sustainable Wealth
        </h1>

        {/* <p className="desc text-xs xs:text-sm sm:text-base text-white/80 font-poppins max-w-[90%] xs:max-w-sm sm:max-w-md md:max-w-2xl mx-auto leading-relaxed">
          Genesis Ventures partners with founders at the earliest stages,
          providing capital, strategy, and long-term support across high-growth
          sectors.
        </p> */}
      </div>

      {/* <div className="relative z-50 mt-6 sm:mt-8 md:mt-10">
        <Button text="About Us" href="/About" />
      </div> */}
      <Link href="/About">
        <Button
          variant="primary"
          size="md"
          className="mt-12 bg-genesis-navy px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.28em] text-white hover:bg-genesis-navy/80 transition-colors"
        >
          <span className="inline-flex items-center gap-3">About Us</span>
        </Button>
      </Link>
    </section>
  );
}
