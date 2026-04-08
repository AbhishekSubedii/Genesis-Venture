"use client";

import Image from "next/image";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(SplitText, ScrollTrigger);

export default function Devider() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const splitTitle = new SplitText(".devider-title", { type: "words" });

    gsap.from(splitTitle.words, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 85%",
        end: "top 30%",
        scrub: true,
      },
      opacity: 0,
      y: 28,
      filter: "blur(10px)",
      stagger: 0.04,
      duration: 0.9,
      ease: "power3.out",
    });

    gsap.from(".devider-fade", {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 85%",
        end: "top 30%",
        scrub: true,
      },
      opacity: 0,
      y: 24,
      stagger: 0.1,
      duration: 0.8,
      ease: "power2.out",
    });

    return () => {
      splitTitle.revert();
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative h-screen min-h-screen w-full overflow-hidden"
    >
      <Image
        src="/images/projects/grow.png"
        alt="Growth visual divider"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[#08112a]/68" />
      <div className="relative z-10 flex h-full items-center justify-center px-6 text-center sm:px-10 md:px-16 lg:px-20">
        <div className="max-w-5xl -translate-y-8 sm:-translate-y-10 md:-translate-y-12">
          <h2 className="devider-title font-[PPFONT] text-[clamp(1.8rem,4.6vw,4.4rem)] leading-[1.18] text-white">
            Backing bold ideas before the market catches on.
          </h2>
          <div className="devider-fade mx-auto mt-4 h-px w-[58%] bg-white/55" />
        </div>
      </div>
    </section>
  );
}
