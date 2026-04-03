import { articles } from "@/lib/insights";
import { notFound } from "next/dist/client/components/navigation";
import Image from "next/image";

export const dynamicParams = false;

export function generateStaticParams() {
  return articles.filter((b) => b.slug !== "#").map((b) => ({ slug: b.slug }));
}

// ─── Full article content ───────────────────────────────────────────────────

const articleContent: Record<string, { body: Section[]; readTime: string }> = {
  "rise-of-ai-startups-emerging-markets": {
    readTime: "7 min read",
    body: [
      {
        type: "lead",
        text: "Artificial Intelligence is no longer the exclusive domain of Silicon Valley or the tech corridors of East Asia. A quieter, more transformative wave is rising across emerging markets — and it's reshaping industries from the ground up.",
      },
      {
        type: "heading",
        text: "A Shift in the Innovation Center of Gravity",
      },
      {
        type: "paragraph",
        text: "For decades, AI innovation followed a predictable geography: well-funded research labs in the US, China, and Europe produced breakthroughs that eventually trickled down to the rest of the world. That model is rapidly becoming obsolete. Today, founders in Lagos, Nairobi, Karachi, and Ho Chi Minh City are building AI-native companies that are not imitating Silicon Valley playbooks — they're solving problems that Silicon Valley doesn't even know exist.",
      },
      {
        type: "paragraph",
        text: "The catalyst is a combination of forces arriving simultaneously: dramatically lower compute costs, open-weight foundation models, a growing pool of local engineering talent, and populations that are mobile-first and eager to adopt digital services. The result is a Cambrian explosion of AI-driven startups in sectors where legacy infrastructure never had a chance to calcify.",
      },
      {
        type: "quote",
        text: "The most interesting AI companies of the next decade won't come from markets with the most data — they'll come from markets with the most urgent problems.",
        attribution: "Genesis Ventures Research, 2026",
      },
      {
        type: "heading",
        text: "Healthcare: AI Where Doctors Are Scarce",
      },
      {
        type: "paragraph",
        text: "Sub-Saharan Africa has roughly 2.3 physicians per 10,000 people — a fraction of the WHO's recommended ratio. This scarcity, long considered a crisis, is now being reframed as an opportunity. AI-powered diagnostic tools trained on locally relevant disease profiles are extending the reach of a single clinician to hundreds of remote patients. Startups in Kenya and Ghana are deploying voice-based triage systems in local dialects, dramatically reducing the burden on overstretched health systems.",
      },
      {
        type: "paragraph",
        text: "What makes these solutions distinctive is not just their technology but their constraints-first design philosophy. Built for low-bandwidth environments, feature phones, and intermittent power, they are inherently more robust than products designed for high-resource settings. This robustness is becoming a competitive advantage as these companies explore expansion into underserved communities in developed markets.",
      },
      {
        type: "heading",
        text: "Fintech: Leapfrogging Legacy Rails",
      },
      {
        type: "paragraph",
        text: "Perhaps nowhere is the AI-in-emerging-markets story more vivid than in fintech. Countries without entrenched banking infrastructure are not burdened by the technical debt of COBOL-era core systems. AI-native lenders in South and Southeast Asia are underwriting credit using alternative data — utility payments, mobile top-up patterns, even agricultural yield predictions — to serve the 1.4 billion adults globally who remain unbanked.",
      },
      {
        type: "paragraph",
        text: "Fraud detection models trained on local transaction patterns are outperforming global solutions that treat unusual local behaviors as red flags. Conversational AI in regional languages is enabling customer service at scale without the cost of large call centers. These are not incremental improvements — they are structural advantages that will compound over time.",
      },
      {
        type: "heading",
        text: "What This Means for Investors",
      },
      {
        type: "paragraph",
        text: "At Genesis Ventures, we believe the most durable returns in AI over the next decade will come not from the latest foundation model, but from companies that embed AI deeply into industries and geographies that are structurally underserved. The playbook is different here: longer timelines to PMF, more complex regulatory landscapes, and distribution challenges that require genuine local knowledge.",
      },
      {
        type: "paragraph",
        text: "But the moats are also wider. A company that has spent three years building trust with rural healthcare workers in Bangladesh or negotiating data-sharing agreements with a central bank in West Africa has an advantage that no amount of venture capital can quickly replicate. This is patient capital in the truest sense — and we believe the patience will be well rewarded.",
      },
    ],
  },

  "what-we-look-for-early-stage-founders": {
    readTime: "6 min read",
    body: [
      {
        type: "lead",
        text: "We've reviewed thousands of decks. We've sat across from founders who had everything — the pedigree, the pitch, the polished narrative — and watched their companies quietly fail. And we've backed founders who had almost nothing on paper, and watched them build something extraordinary. The pattern, over time, becomes unmistakable.",
      },
      {
        type: "heading",
        text: "The Myth of the Perfect Founder",
      },
      {
        type: "paragraph",
        text: "Venture capital has long operated on a template: second-time founder, Tier 1 university, previous exit, domain expertise, warm introduction. This template is a useful heuristic, not a truth. Some of the most consequential companies of the past decade were built by people who matched none of these criteria. The template optimizes for reducing downside risk, not for identifying outlier outcomes.",
      },
      {
        type: "paragraph",
        text: "We are, explicitly, in the business of outlier outcomes. That requires a different kind of filtering — one that is harder to systematize but, we believe, more predictive of what actually matters: the ability to do something that has never been done before, in conditions of radical uncertainty, with insufficient resources and imperfect information.",
      },
      {
        type: "quote",
        text: "We don't ask whether a founder has succeeded before. We ask whether they have failed well — and what they built from the wreckage.",
        attribution: "Genesis Ventures Investment Team",
      },
      {
        type: "heading",
        text: "First Signal: Unreasonable Conviction",
      },
      {
        type: "paragraph",
        text: "The first thing we look for is conviction that borders on the irrational. Not arrogance — that's a different thing entirely. We mean the specific quality of a founder who has so thoroughly internalized a problem that they cannot imagine not solving it. This often manifests as an unusual relationship with time: they've been thinking about this space for years before anyone considered it interesting, or they've pivoted into it after a visceral personal encounter with the problem.",
      },
      {
        type: "paragraph",
        text: "This unreasonable conviction matters because early-stage company building is an exercise in sustained irrationality. The rational move, at nearly every stage, is to stop. Conviction is what keeps a founder going through the periods — and there will be many — when all the evidence suggests they should quit.",
      },
      {
        type: "heading",
        text: "Second Signal: Calibrated Adaptability",
      },
      {
        type: "paragraph",
        text: "Conviction without adaptability is fanaticism. The founders we back hold their vision tightly and their tactics loosely. They can articulate, with precision, what they will never compromise on — and what they are willing to change tomorrow if the evidence demands it. This is a rare combination. Most people are either too rigid or too fluid. The best founders have an internal compass that lets them distinguish between the two.",
      },
      {
        type: "paragraph",
        text: "We've learned to probe this in our conversations. We'll ask a founder to walk us through a time they changed their mind about something important. The quality of that story — the specificity, the honesty about what they got wrong, the clarity about what the new evidence was — tells us more than any financial projection.",
      },
      {
        type: "heading",
        text: "Third Signal: Relationship with Uncertainty",
      },
      {
        type: "paragraph",
        text: "Early-stage founders operate in conditions where the information required to make good decisions is precisely the information they don't have yet. How a founder relates to this uncertainty is enormously predictive. Some founders freeze. Some manufacture false certainty. The best founders develop a working relationship with ambiguity: they identify the questions that matter most, design fast experiments to answer them, and move forward without waiting for a certainty that will never arrive.",
      },
      {
        type: "heading",
        text: "What We Are Not Looking For",
      },
      {
        type: "paragraph",
        text: "We are not looking for founders who have a perfect answer to every question. We are not looking for founders who have never failed. We are not looking for founders who can project revenue to three decimal places five years from now. We are looking for founders who know what they don't know, who are honest about the risks in their own model, and who have a plan for finding the answers that will determine whether their company survives.",
      },
      {
        type: "paragraph",
        text: "These qualities are harder to see in a deck and easier to see in a conversation. Which is why we invest heavily in the time before we invest — in meetings that don't have an agenda, in reference calls that go long, in the follow-up questions that we ask six months after a first meeting. The founders who are still sharp, still curious, still willing to engage — those are the ones we want to back.",
      },
    ],
  },

  "fintech-south-asia-next-growth-frontier": {
    readTime: "8 min read",
    body: [
      {
        type: "lead",
        text: "South Asia is home to nearly two billion people, a rapidly expanding middle class, and some of the most dynamic fintech ecosystems in the world. The region is not just catching up with global financial innovation — in several dimensions, it is leading it.",
      },
      {
        type: "heading",
        text: "The Infrastructure Advantage",
      },
      {
        type: "paragraph",
        text: "India's Unified Payments Interface processed over 18 billion transactions in a single month in 2025, a volume that dwarfs the payment systems of many developed economies. UPI is not merely a payment rail — it is a foundation layer upon which an entire ecosystem of financial services is being constructed. Lending, insurance, wealth management, and even healthcare financing are being layered onto this infrastructure at a pace that has no parallel in financial history.",
      },
      {
        type: "paragraph",
        text: "What makes the South Asian context particularly interesting for investors is that this infrastructure buildout is happening simultaneously with the maturation of AI capabilities. Unlike markets where digital finance was built before modern machine learning, South Asia is building its financial infrastructure and its AI applications at the same time. The result is a set of products that are AI-native from inception — not retrofitted.",
      },
      {
        type: "quote",
        text: "South Asia is not building a digital version of a 20th-century financial system. It is building a financial system that could only exist in the 21st century.",
        attribution: "Genesis Ventures Research Team",
      },
      {
        type: "heading",
        text: "Credit: The Largest Unsolved Problem",
      },
      {
        type: "paragraph",
        text: "Despite the progress, formal credit remains inaccessible to the majority of South Asians. Traditional credit scoring — built on decades of borrowing history, formal employment, and physical collateral — excludes precisely the people who are entering the formal economy for the first time. The opportunity for AI-driven alternative underwriting is, by almost any measure, the largest unsolved problem in the region's financial sector.",
      },
      {
        type: "paragraph",
        text: "Startups across India, Bangladesh, and Sri Lanka are building models that incorporate agricultural satellite data, mobile recharge patterns, digital commerce behavior, and even social network analysis to assess creditworthiness. The early results are promising: default rates for well-designed alternative underwriting models are comparable to, and in some cohorts better than, traditional bureau-based models. The challenge now is scale — building the distribution and regulatory trust to deploy these models at the volume the market demands.",
      },
      {
        type: "heading",
        text: "Insurance: A Market Waiting to Be Created",
      },
      {
        type: "paragraph",
        text: "South Asia's insurance penetration rates are among the lowest in the world — below 5% of GDP in most markets. The reasons are structural: products designed for formal-sector employees don't fit the income volatility and risk profiles of gig workers, smallholder farmers, and informal traders. Distribution through agents who are paid by commission creates misalignment between seller and buyer. And the claims process in traditional insurance is opaque enough that many people who are technically insured don't trust that they will be paid when they need to be.",
      },
      {
        type: "paragraph",
        text: "Embedded insurance — products that attach to existing digital behaviors rather than requiring customers to seek them out — is beginning to unlock this market. A small business that uses a digital payments platform can be offered parametric insurance against revenue disruption. A farmer using a crop-advisory app can purchase weather-indexed coverage directly in the same interface. These distribution innovations, combined with AI-driven underwriting and automated claims settlement, are beginning to create products that work for customers who have never trusted insurance before.",
      },
      {
        type: "heading",
        text: "Regulatory Tailwinds and Headwinds",
      },
      {
        type: "paragraph",
        text: "The regulatory environment across South Asia is evolving rapidly, and not uniformly. India's regulatory sandbox for fintech innovation has enabled a generation of companies to test novel products with appropriate guardrails. Bangladesh's central bank has moved aggressively on mobile financial services regulation, creating a framework that has supported the explosive growth of bKash and its competitors. Sri Lanka and Nepal are further behind, but the direction of travel is toward enabling rather than restricting innovation.",
      },
      {
        type: "paragraph",
        text: "The data localization requirements that several South Asian countries have introduced create complexity for global investors but also create defensibility for local players. A company that has built its data infrastructure for compliance with Indian or Pakistani data laws is not easily replicated by a global platform. This regulatory moat is underappreciated by investors who view compliance as a cost center rather than a competitive asset.",
      },
      {
        type: "heading",
        text: "Our Investment Thesis",
      },
      {
        type: "paragraph",
        text: "At Genesis Ventures, we are actively building exposure to South Asian fintech across three vectors: infrastructure plays that power the ecosystem rather than competing within it, credit and insurance innovators with proprietary data advantages, and cross-border remittance and trade finance companies serving the South Asian diaspora. We believe the window for early-stage entry into category-defining companies in this region is narrowing — the best opportunities of the next five years are being founded right now.",
      },
    ],
  },
};

// ─── Types ──────────────────────────────────────────────────────────────────

type Section =
  | { type: "lead"; text: string }
  | { type: "heading"; text: string }
  | { type: "paragraph"; text: string }
  | { type: "quote"; text: string; attribution: string };

// ─── Page ───────────────────────────────────────────────────────────────────

export default async function BlogPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blog = articles.find((b) => b.slug === slug);

  if (!blog) notFound();

  const content = articleContent[slug];

  return (
    <main className="w-full bg-white min-h-screen ">
      {/* ── Hero ── */}
      <div className="relative w-full h-[55vh] min-h-90 overflow-hidden bg-genesis-navy  px-8 md:px-16 py-16 md:py-24">
        <Image
          src={blog.image}
          alt={blog.title}
          fill
          priority
          className="object-cover opacity-40"
        />
        {/* gradient overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-genesis-navy via-genesis-navy/60 to-transparent" />

        <div className="absolute inset-0 flex flex-col justify-end px-8 md:px-16 pb-12 md:pb-16 max-w-5xl">
          {/* Tag + meta */}
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[10px] uppercase tracking-widest text-genesis-red font-poppins border border-genesis-red/50 px-2 py-0.5">
              {blog.tag}
            </span>
            <span className="text-[10px] uppercase tracking-widest text-white/50 font-poppins">
              {blog.date}
            </span>
            {content && (
              <span className="text-[10px] uppercase tracking-widest text-white/50 font-poppins">
                · {content.readTime}
              </span>
            )}
          </div>

          {/* Title */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-[PPFONT] leading-tight max-w-3xl">
            {blog.title}
          </h1>

          {/* Author */}
          <p className="mt-4 text-xs text-white/50 font-poppins tracking-widest uppercase">
            By {blog.author}
          </p>
        </div>
      </div>

      {/* ── Body ── */}
      <div className="w-full px-8 md:px-16 py-16 md:py-24">
        {content ? (
          <div className="space-y-8">
            {content.body.map((section, i) => {
              if (section.type === "lead") {
                return (
                  <p
                    key={i}
                    className="text-lg md:text-xl text-genesis-navy font-[PPFONT] leading-relaxed border-l-2 border-genesis-red pl-5"
                  >
                    {section.text}
                  </p>
                );
              }
              if (section.type === "heading") {
                return (
                  <h2
                    key={i}
                    className="text-xl md:text-2xl font-[PPFONT] text-genesis-navy pt-4"
                  >
                    {section.text}
                  </h2>
                );
              }
              if (section.type === "paragraph") {
                return (
                  <p
                    key={i}
                    className="text-sm md:text-base text-gray-600 font-poppins leading-[1.85]"
                  >
                    {section.text}
                  </p>
                );
              }
              if (section.type === "quote") {
                return (
                  <blockquote
                    key={i}
                    className="my-10 bg-gray-50 border-l-4 border-genesis-red px-8 py-6"
                  >
                    <p className="text-base md:text-lg font-[PPFONT] text-genesis-navy leading-snug italic">
                      "{section.text}"
                    </p>
                    <footer className="mt-3 text-xs text-gray-400 font-poppins uppercase tracking-widest">
                      — {section.attribution}
                    </footer>
                  </blockquote>
                );
              }
              return null;
            })}
          </div>
        ) : (
          <p className="text-gray-400 font-poppins">Content coming soon.</p>
        )}

        {/* ── Back link ── */}
        <div className="mt-16 pt-8 border-t border-gray-100">
          <a
            href="/perspective#market-insights"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-poppins text-genesis-red hover:opacity-70 transition-opacity"
          >
            <svg
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
            Back to Insights
          </a>
        </div>
      </div>
    </main>
  );
}
