"use client";
import { useState } from "react";

const sectors = [
  { label: "Technology & AI", short: "Tech", id: "technology" },
  { label: "Healthcare & Life Sciences", short: "Health", id: "healthcare" },
  { label: "Financial Services", short: "Finance", id: "fintech" },
  {
    label: "Real Estate & Infrastructure",
    short: "Real Estate",
    id: "realestate",
  },
  { label: "Consumer & Retail", short: "Consumer", id: "consumer" },
];

export default function SectorStrip() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const handleClick = (id: string) => {
    setActiveId(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className="w-full border-y border-gray-100 px-4 h-18 sm:px-8 md:px-16 flex items-center justify-between gap-1 sm:gap-2 overflow-x-auto"
      style={{ scrollbarWidth: "none" }}
    >
      <span className="text-[10px] sm:text-xs text-gray-400 font-poppins uppercase tracking-widest pr-3 sm:pr-6 border-r border-gray-200 py-3 sm:py-4 shrink-0">
        Portfolio 
      </span>

      <div className="flex items-center min-w-0">
        {sectors.map(({ label, short, id }) => {
          const isActive = activeId === id;
          const isHovered = hoveredId === id;

          return (
            <button
              key={id}
              onClick={() => handleClick(id)}
              onMouseEnter={() => setHoveredId(id)}
              onMouseLeave={() => setHoveredId(null)}
              className={`relative group px-2 xs:px-3 sm:px-5 md:px-6 py-3 sm:py-4 text-[9px] xs:text-[10px] sm:text-xs md:text-sm font-poppins uppercase tracking-wider whitespace-nowrap transition-colors duration-200 ${
                isActive
                  ? "text-genesis-navy"
                  : "text-gray-400 hover:text-genesis-navy"
              }`}
            >
              <span className="sm:hidden">{short}</span>
              <span className="hidden sm:inline">{label}</span>

              <span
                className={`absolute bottom-0 left-0 h-0.5 bg-genesis-red transition-all duration-300 ease-out ${
                  isActive
                    ? "w-full opacity-100"
                    : isHovered
                      ? "w-full opacity-60"
                      : "w-0 opacity-0"
                }`}
              />

              <span
                className={`absolute inset-0 bg-genesis-navy transition-opacity duration-200 ${
                  isHovered && !isActive ? "opacity-[0.03]" : "opacity-0"
                }`}
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}
