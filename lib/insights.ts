export type InsightArticle = {
  id: number;
  date: string;
  author: string;
  tag: string;
  title: string;
  excerpt: string;
  image: string;
  slug: string;
};

export const articles: InsightArticle[] = [
  {
    id: 1,
    date: "March 2026",
    author: "Genesis Ventures",
    tag: "AI & Technology",
    title: "The Rise of AI Startups in Emerging Markets",
    excerpt:
      "Artificial Intelligence is no longer limited to developed markets. Emerging economies are witnessing a rapid surge in AI-driven startups, particularly in sectors like healthcare, fintech, and logistics.",
    image: "/images/insights/startup.jpg",
    slug: "rise-of-ai-startups-emerging-markets",
  },
  {
    id: 2,
    date: "February 2026",
    author: "Investment Team",
    tag: "Founder Insights",
    title: "What We Look for in Early-Stage Founders",
    excerpt:
      "Backing early-stage founders goes beyond capital. It's about identifying vision, resilience, and execution capability in rapidly changing environments.",
    image: "/images/insights/founders.jpg",
    slug: "what-we-look-for-early-stage-founders",
  },
  {
    id: 3,
    date: "January 2026",
    author: "Research Team",
    tag: "Fintech",
    title: "Fintech in South Asia: The Next Growth Frontier",
    excerpt:
      "Fintech continues to redefine financial access across South Asia, creating opportunities for both consumers and investors through scalable digital infrastructure.",
    image: "/images/insights/fintech.jpg",
    slug: "fintech-south-asia-next-growth-frontier",
  },
];
