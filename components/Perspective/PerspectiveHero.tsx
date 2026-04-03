"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";

const stats = [
  { value: "120+", label: "Articles Published" },
  { value: "12", label: "Markets Covered" },
  { value: "Since 1991", label: "Sharing Insights" },
  { value: "Weekly", label: "Market Updates" },
];

const PerspectiveHero = () => {
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

    gsap.from(".stat-item", {
      opacity: 0,
      y: 16,
      stagger: 0.08,
      duration: 0.8,
      ease: "power2.out",
      delay: 0.8,
    });

    gsap.from(".nav-tabs", {
      opacity: 0,
      y: -10,
      duration: 0.6,
      ease: "power2.out",
      delay: 0.2,
    });

    return () => {
      splitTitle.revert();
      splitDesc.revert();
    };
  });

  return (
    <section className="relative min-h-svh w-full flex flex-col justify-between items-center px-5 sm:px-8 md:px-16 pt-24 sm:pt-28 md:pt-32 pb-8 sm:pb-10 md:pb-12 overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover -z-20"
      >
        <source src="/videos/insights.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-genesis-navy/30 -z-10" />

      <div className="nav-tabs flex gap-0 border border-white/10 mt-2 w-full sm:w-auto">
        <a
          href="#market-insights"
          className="flex-1 sm:flex-none text-center px-5 sm:px-6 py-2.5 text-[10px] sm:text-xs uppercase tracking-widest font-poppins text-white bg-genesis-navy hover:bg-white/20 transition-colors duration-150"
        >
          Market Insights
        </a>
        <a
          href="#media"
          className="flex-1 sm:flex-none text-center px-5 sm:px-6 py-2.5 text-[10px] sm:text-xs uppercase tracking-widest font-poppins text-white/50 hover:text-white hover:bg-white/10 transition-colors duration-150"
        >
          Media
        </a>
      </div>

      <div className="flex flex-col items-center gap-4 sm:gap-6 w-full max-w-xs sm:max-w-lg md:max-w-2xl text-center px-2 sm:px-0">
        <h1 className="hero-heading text-[2.4rem] leading-[1.1] sm:text-5xl md:text-6xl lg:text-7xl text-white font-[PPFONT]">
          Insight over
          <br />
          noise.
        </h1>
        <p className="desc text-xs sm:text-sm text-white/80 font-poppins leading-relaxed max-w-70 sm:max-w-sm md:max-w-md">
          Our team of investors and analysts share what they&apos;re seeing
          across markets, sectors, and the founders shaping the next decade.
        </p>
      </div>

      <div className="w-full border-t border-white/10 pt-6 sm:pt-8">
        {/* <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-6 gap-x-4 sm:gap-0 sm:flex sm:justify-between sm:items-end">
          {stats.map(({ value, label }) => (
            <div
              key={label}
              className="stat-item flex flex-col gap-1 text-center sm:text-left"
            >
              <span className="text-xl sm:text-2xl md:text-3xl text-white font-[PPFONT] leading-none">
                {value}
              </span>
              <span className="text-[9px] sm:text-[10px] md:text-xs text-white/50 uppercase tracking-widest font-poppins">
                {label}
              </span>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default PerspectiveHero;
