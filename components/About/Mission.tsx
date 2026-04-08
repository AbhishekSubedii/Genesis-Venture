"use client";

import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(SplitText, ScrollTrigger);

const values = [
  {
    title: "Conviction Over Consensus",
    description:
      "We invest before it's obvious. Our edge lies in forming independent views early, before markets converge, before narratives form. We back founders others overlook, and we hold that position with discipline.",
  },
  {
    title: "Founder Alignment",
    description:
      "Our incentives are built around founder success, not fee income. We take board seats seriously, show up in hard moments, and measure our performance by the outcomes of the companies we back, nothing else.",
  },
  {
    title: "Fiduciary Discipline",
    description:
      "Every capital allocation decision is held to the highest standard of rigor and responsibility. We treat our LPs' trust as a privilege, maintain strict governance, and never conflate enthusiasm with diligence.",
  },
  {
    title: "Compounding Relationships",
    description:
      "The best deals come through deep trust built over years. We invest in relationships long before term sheets, with founders, co-investors, and operators, because durable networks compound like the best businesses.",
  },
];

export default function Values() {
  const containerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const splitTitle = new SplitText(".mission-heading", { type: "words" });

    gsap.from(splitTitle.words, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 90%",
        end: "top 30%",
        scrub: true,
      },
      opacity: 0,
      y: 30,
      filter: "blur(10px)",
      stagger: 0.05,
      duration: 1,
      ease: "power3.out",
    });

    if (gridRef.current) {
      gsap.from(gridRef.current.querySelectorAll(".value-card"), {
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top 85%",
          end: "top 35%",
          scrub: true,
        },
        opacity: 0,
        y: 24,
        stagger: 0.08,
        duration: 0.8,
        ease: "power3.out",
      });
    }

    return () => {
      splitTitle.revert();
    };
  });

  return (
    <section
      id="our-values"
      ref={containerRef}
      className="w-full overflow-hidden bg-[#f7f6f2] px-4 py-10 xs:px-6 sm:px-8 sm:py-12 md:px-16 md:py-24"
    >
      <div className="grid min-h-[720px] grid-cols-1 overflow-hidden bg-white lg:grid-cols-[1.05fr_0.95fr]">
        <div className="flex flex-col px-5 py-10 sm:px-8 md:px-10 lg:px-12 lg:py-14 xl:px-16">
          <div className="mb-8 flex items-start justify-between pb-4 sm:pb-6">
            <span className="mission-heading font-poppins text-xs uppercase tracking-[0.24em] text-genesis-navy/55">
              Our Values
            </span>
            <span className="mission-heading font-poppins text-xs uppercase tracking-[0.24em] text-genesis-navy/35">
              02
            </span>
          </div>

          <div className="mb-10 max-w-xl">
            <h2 className="mission-heading font-[PPFONT] text-[clamp(1.8rem,4vw,3.4rem)] leading-[1.04] text-genesis-navy">
              Capital guided by principle, not just opportunity.
            </h2>
          </div>

          <div
            ref={gridRef}
            className="grid flex-1 grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:gap-6"
          >
            {values.map(({ title, description }) => (
              <article
                key={title}
                className="value-card flex h-full flex-col justify-between bg-[#f8f6f1] p-5 sm:p-6 lg:p-7"
              >
                <h3 className="font-[PPFONT] text-[1.35rem] leading-tight text-genesis-navy sm:text-[1.5rem]">
                  {title}
                </h3>
                <p className="mt-4 font-poppins text-sm leading-7 text-genesis-navy/70 sm:text-[15px]">
                  {description}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="relative min-h-[420px] lg:min-h-full">
          <Image
            src="/images/about/about-meeting.jpg"
            alt="Genesis team in discussion"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#08112a]/20 via-transparent to-transparent" />
        </div>
      </div>
    </section>
  );
}
