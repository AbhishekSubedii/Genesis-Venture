"use client";

import { useEffect, useRef, useState } from "react";

interface Company {
  name: string;
  stage: string;
  year: string;
  description: string;
}

interface Sector {
  id: string;
  label: string;
  tagline: string;
  companies: Company[];
}

const sectors: Sector[] = [
  {
    id: "technology",
    label: "Technology & AI",
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

  return (
    <div className="flex w-full font-[PPFONT]">
      {/* Sections */}
      <div className="flex-1">
        {/* Hero */}
        <section className="h-screen bg-genesis-navy flex flex-col justify-between px-8 md:px-16 pt-32 pb-12">
          <div className="flex items-start justify-between border-b border-white/10 pb-6">
            <span className="text-xs uppercase tracking-widest text-white/40 font-[GT50]">
              Invested Sectors
            </span>
          </div>
          <div className="flex flex-col gap-4 max-w-xl">
            <h1 className="text-4xl md:text-5xl text-white leading-tight">
              Where we put our
              <br />
              <span className="text-genesis-red">capital to work.</span>
            </h1>
            <p className="text-sm text-white/50 font-[GT50] leading-relaxed max-w-sm">
              We concentrate on five sectors where technology creates durable
              competitive advantages. Each investment reflects a long-term
              thesis, not a trend.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 md:gap-8 border-t border-white/10 pt-6">
            {sectors.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className="text-xs text-white/50 hover:text-white font-[GT50] uppercase tracking-wider transition-colors"
              >
                {label.split(" ")[0]}
              </button>
            ))}
          </div>
        </section>

        {/* Sector sections */}
        {sectors.map(({ id, label, tagline, companies }, si) => (
          <section
            key={id}
            id={id}
            ref={(el) => {
              sectionRefs.current[id] = el;
            }}
            className={`h-screen flex flex-col px-8 md:px-16 py-16 md:py-24 ${si % 2 === 0 ? "bg-white" : "bg-neutral-50"}`}
          >
            <div className="flex items-start justify-between border-b border-gray-200 pb-6">
              <span className="text-xs uppercase tracking-widest text-gray-500 font-[GT50]">
                {label}
              </span>
              <span className="text-xs uppercase tracking-widest text-genesis-red font-[GT50]">
                0{si + 1}
              </span>
            </div>

            <div className="flex flex-col md:flex-row gap-12 md:gap-24 flex-1 pt-10">
              <div className="md:w-1/3 flex flex-col justify-between">
                <div className="flex flex-col gap-4">
                  <h2 className="text-2xl md:text-3xl text-genesis-navy leading-snug">
                    {label}
                  </h2>
                  <p className="text-sm text-gray-600 font-[GT50] leading-relaxed">
                    {tagline}
                  </p>
                </div>
                <span className="text-xs text-gray-500 font-[GT50] uppercase tracking-widest">
                  {companies.length}{" "}
                  {companies.length === 1 ? "company" : "companies"}
                </span>
              </div>

              <div className="md:w-2/3 flex flex-col justify-center divide-y divide-gray-200">
                {companies.map(({ name, stage, year, description }) => (
                  <div
                    key={name}
                    className="flex items-start justify-between gap-6 py-4 group cursor-default"
                  >
                    <div className="flex flex-col gap-1">
                      <span className="text-base text-genesis-navy font-[PPFONT] group-hover:text-genesis-red transition-colors">
                        {name}
                      </span>
                      <span className="text-sm text-gray-600 font-[GT50] leading-relaxed max-w-xs">
                        {description}
                      </span>
                    </div>
                    <div className="flex items-center gap-6 shrink-0">
                      <span className="text-sm text-gray-600 font-[GT50] uppercase hidden md:block">
                        {stage}
                      </span>
                      <span className="text-sm text-gray-500 font-[GT50]">
                        {year}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
