"use client";

import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/all";
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

export default function ValuesShowcase() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const splitTitle = new SplitText(".values-showcase-heading", {
      type: "words",
    });

    gsap.from(splitTitle.words, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 85%",
        end: "top 35%",
        scrub: true,
      },
      opacity: 0,
      y: 24,
      filter: "blur(10px)",
      stagger: 0.05,
      duration: 0.8,
      ease: "power3.out",
    });

    gsap.from(".values-showcase-card", {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 75%",
        end: "top 30%",
        scrub: true,
      },
      opacity: 0,
      y: 30,
      stagger: 0.08,
      duration: 0.8,
      ease: "power3.out",
    });

    return () => {
      splitTitle.revert();
    };
  }, []);

  return (
    <section
      id="our-values"
      ref={sectionRef}
      className="relative mt-10 w-full overflow-hidden bg-[#08112a] text-white sm:mt-12 lg:mt-14 lg:h-screen lg:min-h-screen"
    >
      <div className="absolute inset-0">
        <Image
          src="/images/about/image1.png"
          alt="Genesis team meeting"
          fill
          className="object-cover"
          priority={false}
        />
        <div className="absolute inset-0 bg-[#08112a]/28" />
        <div className="absolute inset-0 bg-linear-to-t from-[#08112a]/72 via-[#08112a]/20 to-transparent" />
      </div>

      <div className="relative z-10 flex min-h-svh px-4 py-14 xs:px-6 sm:px-8 sm:py-16 md:px-16 md:py-20 lg:h-screen lg:min-h-screen lg:py-16">
        <div className="flex w-full flex-col gap-8 lg:h-full lg:justify-between lg:gap-4">
          <div className="w-full max-w-3xl pt-28 sm:pt-32 md:pt-36 lg:pt-48">
            <div className="mb-8 sm:mb-10">
              <span className="font-poppins text-[11px] uppercase tracking-[0.24em] text-white/90">
                Our Values
              </span>
            </div>

            <div className="mb-10 max-w-2xl sm:mb-12">
              <h2 className="values-showcase-heading font-[PPFONT] text-[clamp(1.6rem,3.8vw,2.8rem)] leading-[1.06] text-white">
                Capital guided by principle, not just opportunity.
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 pb-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5 lg:pb-8">
            {values.map(({ title, description }) => (
              <article
                key={title}
                className="values-showcase-card bg-white/18 p-4 backdrop-blur-md sm:p-5"
              >
                <h3 className="font-[PPFONT] text-[1rem] leading-tight text-white sm:text-[1.08rem]">
                  {title}
                </h3>
                <p className="mt-2.5 font-poppins text-[11px] leading-5 text-white/88 sm:text-xs sm:leading-6">
                  {description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
