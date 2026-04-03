export type MediaItem = {
  id: number;
  date: string;
  source: string;
  tag: string;
  title: string;
  description: string;
  image: string;
  slug: string;
};

export const media: MediaItem[] = [
  {
    id: 1,
    date: "March 2026",
    source: "Press Release",
    tag: "Investment",
    title: "Genesis Ventures Invests in Fintech Startup PayFlow",
    description:
      "Genesis Ventures announced its investment in PayFlow, a Nepal-based fintech startup focused on simplifying digital payments for small businesses.",
    image: "/images/media/startup.jpg",
    slug: "genesis-invests-payflow",
  },
  {
    id: 2,
    date: "February 2026",
    source: "Company Announcement",
    tag: "Fund",
    title: "Genesis Ventures Launches New $150M Early-Stage Fund",
    description:
      "The new fund aims to support early-stage startups across South Asia, with a focus on AI, fintech, and climate technology.",
    image: "/images/media/fund.jpg",
    slug: "genesis-150m-early-stage-fund",
  },
  {
    id: 3,
    date: "January 2026",
    source: "Event",
    tag: "Leadership",
    title: "Managing Partner Speaks at South Asia Startup Summit",
    description:
      "Genesis Ventures' Managing Partner shared insights on venture capital trends and startup growth strategies at the annual startup summit.",
    image: "/images/media/asia.jpg",
    slug: "managing-partner-south-asia-summit",
  },
];
