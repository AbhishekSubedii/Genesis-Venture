"use client";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import Link from "next/dist/client/link";
import Button from "../ui/Button2";

gsap.registerPlugin(SplitText, ScrollTrigger);

const sectors = [
  {
    name: "Technology & AI",
    description:
      "Enterprise software, AI, and deep tech redefining how industries operate.",
  },
  {
    name: "Healthcare & Life Sciences",
    description:
      "Biotech, digital health, and medical devices improving patient outcomes.",
  },
  {
    name: "Financial Services",
    description:
      "Fintech platforms modernizing access to capital and financial tools.",
  },
  {
    name: "Real Estate & Infrastructure",
    description:
      "PropTech and sustainable infrastructure for the built environment.",
  },
  {
    name: "Consumer & Retail",
    description: "Next-generation consumer brands with strong unit economics.",
  },
];

export default function Sectors() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const splitTitle = new SplitText(".sectors-heading", { type: "words" });

    gsap.from(splitTitle.words, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 90%",
        end: "bottom 80%",
        scrub: true,
      },
      opacity: 0,
      y: 30,
      filter: "blur(10px)",
      stagger: 0.05,
      duration: 1,
      ease: "power3.out",
    });

    if (!containerRef.current) return;

    const paragraph = containerRef.current.querySelector<HTMLParagraphElement>(
      "#sectors-animated-paragraph",
    );
    if (!paragraph) return;

    const words = paragraph.textContent
      ?.split(" ")
      .map((word) => `<span class="word">${word}</span>`)
      .join(" ");
    if (words) paragraph.innerHTML = words;

    const wordEls = paragraph.querySelectorAll(".word");

    gsap.fromTo(
      wordEls,
      { opacity: 0.1 },
      {
        opacity: 1,
        stagger: 0.1,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 90%",
          end: "top -10%",
          scrub: true,
        },
      },
    );

    gsap.from(".sector-tag", {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 85%",
        end: "bottom 80%",
        scrub: true,
      },
      opacity: 0,
      y: 20,
      filter: "blur(6px)",
      stagger: 0.05,
      duration: 1,
      ease: "power3.out",
    });

    return () => {
      splitTitle.revert();
    };
  });

  return (
    <section
      ref={containerRef}
      className="w-full bg-neutral-50 flex flex-col px-4 xs:px-6 sm:px-8 md:px-16 py-8 sm:py-12 md:py-24"
    >
      <div className="flex items-start justify-between border-b border-gray-200">
        <span className="sectors-heading text-xs uppercase tracking-widest text-gray-500 font-poppins">
          Invested Sectors
        </span>
        <span className="sectors-heading text-xs uppercase tracking-widest text-gray-500 font-poppins">
          03
        </span>
      </div>

      <div className="flex flex-col md:flex-row gap-6 sm:gap-8 md:gap-24 flex-1 pt-5 sm:pt-6 md:pt-10 pb-8 sm:pb-10 overflow-hidden">
        <div className="relative w-full md:w-1/2 h-[40vh] xs:h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh]">
          <Image
            src="/images/hero/sector.jpg"
            alt="Invested sectors"
            fill
            className="object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 flex flex-col gap-4 md:gap-6 md:justify-center">
          <h2 className="sectors-heading text-[clamp(1.25rem,4vw,2.5rem)] text-genesis-navy leading-snug font-[PPFONT]">
            Where we focus our capital.
          </h2>

          <p
            id="sectors-animated-paragraph"
            className="text-xs sm:text-sm text-gray-600 font-poppins leading-relaxed max-w-lg"
          >
            We concentrate on sectors where technology creates durable
            competitive advantages and outsized returns. From deep tech to
            consumer innovation, we back founders operating at the frontier of
            meaningful change.
          </p>

          <div className="flex flex-wrap gap-3 mt-2">
            {sectors.map(({ name, description }) => (
              <div
                key={name}
                className="sector-tag flex flex-col gap-1 border-l border-gray-200 pl-3 sm:pl-4"
              >
                <span className="text-xs sm:text-sm font-[PPFONT] text-genesis-navy leading-snug">
                  {name}
                </span>
                <span className="text-[10px] xs:text-xs text-gray-500 font-poppins leading-tight max-w-[18rem]">
                  {description}
                </span>
              </div>
            ))}
          </div>

          {/* <Button
            text="Our Portfolio"
            href="/Projects"
            className="relative z-50 mt-2"
          /> */}
          <Link href="/Projects">
            <Button
              variant="primary"
              size="md"
              className="mt-12 bg-genesis-navy px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.28em] text-white hover:bg-genesis-navy/80 transition-colors"
            >
              <span className="inline-flex items-center gap-3">
                Our Portfolio
              </span>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
