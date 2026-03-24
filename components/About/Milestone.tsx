"use client";
import { useRef } from "react";

const milestones = [
  {
    year: "1991",
    title: "Founded in Kathmandu",
    description:
      "Established with a focus on early-stage technology companies.",
  },
  {
    year: "1998",
    title: "First Fund Closed",
    description:
      "Raised $120M, backing 14 companies across tech and healthcare.",
  },
  {
    year: "2005",
    title: "Life Sciences Expansion",
    description: "Launched a dedicated biotech and digital health practice.",
  },
  {
    year: "2012",
    title: "Fund III — $500M",
    description: "Largest fund to date, reflecting strong LP confidence.",
  },
  {
    year: "2018",
    title: "Global Reach",
    description: "Portfolio companies operating across 12 countries.",
  },
  {
    year: "2024",
    title: "Fund V Launched",
    description:
      "$800M in commitments, continuing our focus on transformative founders.",
  },
];

export default function Milestone() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section className="h-screen w-full bg-neutral-50 flex flex-col px-8 md:px-16 py-16 md:py-24">
      <div className="flex items-start justify-between border-b border-gray-200 pb-6">
        <span className="text-xs uppercase tracking-widest text-gray-500 font-[GT50]">
          Our History
        </span>
        <span className="text-xs uppercase tracking-widest text-gray-500 font-[GT50]">
          03
        </span>
      </div>

      <div className="flex flex-col gap-10 flex-1 pt-10 justify-between">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <h2 className="text-2xl md:text-3xl text-genesis-navy leading-snug max-w-sm">
            Three decades of disciplined investing.
          </h2>
          <p className="text-xs text-gray-500 font-[GT50] uppercase tracking-widest">
            Scroll →
          </p>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-px bg-gray-200 overflow-x-auto scrollbar-none flex-1"
          style={{ scrollbarWidth: "none" }}
        >
          {milestones.map(({ year, title, description }) => (
            <div
              key={year}
              className="bg-white flex flex-col justify-between p-6 md:p-8 min-w-[220px] md:min-w-[260px] flex-1"
            >
              <span className="text-sm text-genesis-red font-[GT50] uppercase tracking-widest">
                {year}
              </span>
              <div className="flex flex-col gap-2 mt-auto">
                <div className="w-4 h-px bg-genesis-navy mb-3" />
                <span className="text-base text-genesis-navy font-[PPFONT] leading-snug">
                  {title}
                </span>
                <span className="text-sm text-gray-600 font-[GT50] leading-relaxed">
                  {description}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
