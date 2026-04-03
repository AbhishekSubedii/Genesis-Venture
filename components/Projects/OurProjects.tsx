"use client";

import { useEffect, useRef, useState } from "react";
import SectorStrip from "./Sector";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(SplitText, ScrollTrigger);

interface Company {
  name: string;
  stage: string;
  year: string;
  description: string;
}

interface Sector {
  id: string;
  label: string;
  img: string;
  tagline: string;
  companies: Company[];
}

const sectors: Sector[] = [
  {
    id: "technology",
    label: "Technology & AI",
    img: "/images/projects/ai.jpg",
    tagline:
      "Backing software and AI companies redefining how industries operate.",
    companies: [
      {
        name: "Meridian AI",
        stage: "Series A",
        year: "2022",
        description: "Enterprise AI platform for supply chain optimization.",
      },
      {
        name: "Stackr",
        stage: "Seed",
        year: "2023",
        description: "Developer infrastructure for cloud-native applications.",
      },
      {
        name: "Loopline",
        stage: "Series B",
        year: "2020",
        description: "Workflow automation for mid-market operations teams.",
      },
      {
        name: "Vectara",
        stage: "Seed",
        year: "2023",
        description:
          "Neural search and retrieval for enterprise knowledge bases.",
      },
    ],
  },
  {
    id: "healthcare",
    img: "/images/projects/healthcare.jpg",
    label: "Healthcare & Life Sciences",
    tagline: "Investing in companies improving patient outcomes at scale.",
    companies: [
      {
        name: "Helix Health",
        stage: "Seed",
        year: "2023",
        description:
          "Digital-first primary care platform for underserved communities.",
      },
      {
        name: "Vantage Bio",
        stage: "Series A",
        year: "2021",
        description: "Precision oncology diagnostics using liquid biopsy.",
      },
      {
        name: "Carepath",
        stage: "Series B",
        year: "2019",
        description: "Care coordination software for hospital networks.",
      },
    ],
  },
  {
    id: "fintech",
    img: "/images/projects/finance.jpg",
    label: "Financial Services",
    tagline: "Modernizing access to capital and financial infrastructure.",
    companies: [
      {
        name: "Clearpath Finance",
        stage: "Series B",
        year: "2021",
        description: "Embedded lending platform for SMB marketplaces.",
      },
      {
        name: "Aurum",
        stage: "Seed",
        year: "2022",
        description:
          "Automated treasury management for growth-stage companies.",
      },
      {
        name: "Bridgeway",
        stage: "Series A",
        year: "2020",
        description:
          "Cross-border payments infrastructure for emerging markets.",
      },
    ],
  },
  {
    id: "realestate",
    label: "Real Estate & Infrastructure",
    img: "/images/projects/real.jpg",
    tagline:
      "PropTech and sustainable infrastructure for the built environment.",
    companies: [
      {
        name: "Urbanbase",
        stage: "Series A",
        year: "2022",
        description:
          "AI-powered site selection and feasibility analysis for developers.",
      },
      {
        name: "Gridform",
        stage: "Seed",
        year: "2023",
        description: "Modular construction management platform.",
      },
    ],
  },
  {
    id: "consumer",
    label: "Consumer & Retail",
    img: "/images/projects/retail.jpg",
    tagline: "Next-generation consumer brands with strong unit economics.",
    companies: [
      {
        name: "Forma",
        stage: "Series A",
        year: "2021",
        description: "Personalized skincare brand powered by AI diagnostics.",
      },
      {
        name: "Shelf",
        stage: "Seed",
        year: "2022",
        description:
          "Inventory intelligence platform for independent retailers.",
      },
      {
        name: "Nouri",
        stage: "Series B",
        year: "2020",
        description:
          "Functional nutrition brand distributed across 8,000+ locations.",
      },
    ],
  },
];

export default function OurProjects() {
  const [activeId, setActiveId] = useState(sectors[0].id);
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    sectors.forEach(({ id }) => {
      const el = sectionRefs.current[id];
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveId(id);
        },
        { threshold: 0.5 },
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const scrollTo = (id: string) => {
    sectionRefs.current[id]?.scrollIntoView({ behavior: "smooth" });
  };

  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const splitTitle = new SplitText(".project-heading", { type: "words" });

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

    gsap.utils.toArray<HTMLElement>(".company-row").forEach((row) => {
      gsap.fromTo(
        row,
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: row,
            start: "top 88%",
            toggleActions: "play none none reverse",
          },
        },
      );
    });

    return () => {
      splitTitle.revert();
      splitDesc.revert();
    };
  });

  return (
      <div className="w-full bg-white flex flex-col px-4 xs:px-6 sm:px-8 md:px-16 py-8 sm:py-12 md:py-24">
        <section 
        ref={containerRef}
          id="portfolio"
          className="relative flex flex-col gap-8 sm:gap-12 md:gap-16"
        >
          

          {sectors.map(({ id, label, img, tagline, companies }, si) => (
            <section
              key={id}
              id={id}
              ref={(el) => {
                sectionRefs.current[id] = el;
              }}
              className={`w-full min-h-screen flex flex-col  py-8 sm:py-12 md:py-24 ${si % 2 === 0 ? "bg-white" : "bg-neutral-50"}`}
            >
              <div className="flex items-start justify-between border-b border-gray-200 pb-3 sm:pb-4 md:pb-6">
                <span className="row-heading text-xs uppercase tracking-widest text-gray-500 font-poppins">
                  {label}
                </span>
                <span className="row-heading text-xs uppercase tracking-widest text-genesis-navy font-poppins">
                  0{si + 1}
                </span>
              </div>

              <div className={`flex flex-col md:flex-row gap-6 sm:gap-8 md:gap-24 flex-1 pt-5 sm:pt-6 md:pt-10 ${
              si % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}>
                <div className="group w-full md:w-1/3 flex flex-col gap-4 sm:gap-6">
                  <h2 className="row-heading z-50 text-[clamp(1.25rem,4vw,2rem)] text-genesis-navy leading-snug">
                    {label}
                  </h2>
                  <div className="relative w-full h-44 xs:h-52 sm:h-64 md:h-full overflow-hidden">
                    <Image
                      src={img}
                      alt={label}
                      fill
                      className="object-cover  scale-105 group-hover:scale-100 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-black/20" />
                  </div>
                  <p className="text-xs sm:text-sm z-50 text-gray-600 font-poppins leading-relaxed">
                    {tagline}
                  </p>
                </div>

                <div className="w-full md:w-2/3 flex flex-col justify-center divide-y divide-gray-200">
                  {companies.map(({ name, stage, year, description }) => (
                    <div
                      key={name}
                      className="relative company-row flex items-start justify-between gap-3 sm:gap-4 md:gap-6 py-3 sm:py-3.5 md:py-4 px-2 sm:px-3 md:px-6 group cursor-default hover:bg-genesis-navy/20 transition-colors"
                    >
                      <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-genesis-red scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />

                      <div className="flex flex-col gap-0.5 sm:gap-1">
                        <span className="text-sm sm:text-base text-genesis-blue group-hover:text-genesis-red font-[PPFONT]">
                          {name}
                        </span>
                        <span className="text-xs sm:text-sm text-gray-600 group-hover:text-white font-poppins leading-relaxed max-w-[200px] sm:max-w-xs">
                          {description}
                        </span>
                      </div>

                      <div className="flex items-center gap-3 sm:gap-4 md:gap-6 shrink-0">
                        <span className="text-xs sm:text-sm text-gray-600 group-hover:text-white font-poppins uppercase hidden sm:block">
                          {stage}
                        </span>
                        <span className="text-xs sm:text-sm text-gray-500 group-hover:text-white font-poppins">
                          {year}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          ))}
        </section>

        
      </div>
  );
}
