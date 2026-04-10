"use client";
import SectorShowcase from "../ui/SectorShowcase";
import SectorShowcaseBanner from "../ui/SectorShowcaseBanner";

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
  highlight: string;
  stat: { value: string; label: string };
  companies: Company[];
}

const sectors: Sector[] = [
  {
    id: "technology",
    label: "Technology & AI",
    img: "/images/Projects/tech.webp",
    tagline: "Backing software and AI companies redefining how industries",
    highlight: "operate.",
    stat: { value: "18 companies", label: "in portfolio" },
    companies: [
      { name: "Meridian AI", stage: "Series A", year: "2022", description: "Enterprise AI platform for supply chain optimization." },
      { name: "Stackr", stage: "Seed", year: "2023", description: "Developer infrastructure for cloud-native applications." },
      { name: "Loopline", stage: "Series B", year: "2020", description: "Workflow automation for mid-market operations teams." },
      { name: "Vectara", stage: "Seed", year: "2023", description: "Neural search and retrieval for enterprise knowledge bases." },
    ],
  },
  {
    id: "healthcare",
    label: "Healthcare & Life Sciences",
    img: "/images/Projects/healthcare.webp",
    tagline: "Investing in companies improving patient outcomes",
    highlight: "at scale.",
    stat: { value: "12 companies", label: "in portfolio" },
    companies: [
      { name: "Helix Health", stage: "Seed", year: "2023", description: "Digital-first primary care for underserved communities." },
      { name: "Vantage Bio", stage: "Series A", year: "2021", description: "Precision oncology diagnostics using liquid biopsy." },
      { name: "Carepath", stage: "Series B", year: "2019", description: "Care coordination software for hospital networks." },
    ],
  },
  {
    id: "fintech",
    label: "Financial Services",
    img: "/images/Projects/finances.webp",
    tagline: "Modernizing access to capital and financial",
    highlight: "infrastructure.",
    stat: { value: "9 companies", label: "in portfolio" },
    companies: [
      { name: "Clearpath Finance", stage: "Series B", year: "2021", description: "Embedded lending platform for SMB marketplaces." },
      { name: "Aurum", stage: "Seed", year: "2022", description: "Automated treasury management for growth-stage companies." },
      { name: "Bridgeway", stage: "Series A", year: "2020", description: "Cross-border payments infrastructure for emerging markets." },
    ],
  },
  {
    id: "realestate",
    label: "Real Estate & Infrastructure",
    img: "/images/Projects/real.webp",
    tagline: "PropTech and sustainable infrastructure for the built",
    highlight: "environment.",
    stat: { value: "6 companies", label: "in portfolio" },
    companies: [
      { name: "Urbanbase", stage: "Series A", year: "2022", description: "AI-powered site selection and feasibility analysis." },
      { name: "Gridform", stage: "Seed", year: "2023", description: "Modular construction management platform." },
    ],
  },
  {
    id: "consumer",
    label: "Consumer & Retail",
    img: "/images/Projects/retails.webp",
    tagline: "Next-generation consumer brands with strong unit",
    highlight: "economics.",
    stat: { value: "11 companies", label: "in portfolio" },
    companies: [
      { name: "Forma", stage: "Series A", year: "2021", description: "Personalized skincare brand powered by AI diagnostics." },
      { name: "Shelf", stage: "Seed", year: "2022", description: "Inventory intelligence for independent retailers." },
      { name: "Nouri", stage: "Series B", year: "2020", description: "Functional nutrition brand across 8,000+ locations." },
    ],
  },
];

export default function OurProjects() {
  return (
    <main className="w-full overflow-hidden">
      {sectors.map((sector, index) => {
        const isEven = index % 2 === 0;
        return isEven ? (
          <SectorShowcase
            id={sector.id}
            key={sector.id}
            label={sector.label}
            stat={sector.stat}
            companies={sector.companies}
            img={sector.img}
          />
        ) : (
          <SectorShowcaseBanner
            key={sector.id}
            id={sector.id}
            label={sector.label}
            stat={sector.stat}
            companies={sector.companies}
            img={sector.img}
          />
        );
      })}
    </main>
  );
}