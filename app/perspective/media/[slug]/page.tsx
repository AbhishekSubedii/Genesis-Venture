import { media } from "@/lib/media";
import { notFound } from "next/dist/client/components/navigation";
import Image from "next/image";

export const dynamicParams = false;

export function generateStaticParams() {
  return media.filter((b) => b.slug !== "#").map((b) => ({ slug: b.slug }));
}

// ─── Types ───────────────────────────────────────────────────────────────────

type Section =
  | { type: "lead"; text: string }
  | { type: "heading"; text: string }
  | { type: "paragraph"; text: string }
  | { type: "quote"; text: string; attribution: string }
  | { type: "list"; heading?: string; items: string[] }
  | { type: "highlight"; label: string; value: string; note?: string };

// ─── Full article content ─────────────────────────────────────────────────────

const mediaContent: Record<
  string,
  { body: Section[]; readTime: string; source: string; date: string }
> = {
  "genesis-invests-payflow": {
    readTime: "4 min read",
    source: "Press Release",
    date: "March 2026",
    body: [
      {
        type: "lead",
        text: "Genesis Ventures has announced a strategic investment in PayFlow, a Kathmandu-based fintech startup redefining how small businesses in Nepal send, receive, and manage digital payments.",
      },
      {
        type: "paragraph",
        text: "The investment, made from Genesis Ventures' South Asia Early-Stage Fund, marks the firm's fourth fintech commitment in Nepal and its second in the SME payments space. Terms of the deal were not disclosed.",
      },
      {
        type: "heading",
        text: "About PayFlow",
      },
      {
        type: "paragraph",
        text: "Founded in 2024 by Priya Shrestha and Anil Karki, PayFlow is building a unified payments and cash-flow management platform designed specifically for the estimated 3.2 million micro, small, and medium enterprises (MSMEs) operating across Nepal. The platform integrates with Nepal Rastra Bank-licensed payment rails to enable real-time transfers, invoice financing, and working capital credit — all from a single mobile interface available in Nepali and English.",
      },
      {
        type: "paragraph",
        text: "PayFlow processed over NPR 2.4 billion in transaction volume in the twelve months prior to closing, with a month-on-month growth rate of 18%. The company currently serves more than 14,000 active merchants across Kathmandu Valley, Pokhara, and Chitwan, with plans to expand into Terai corridor markets in the second half of 2026.",
      },
      {
        type: "quote",
        text: "Nepal's MSMEs are the backbone of the economy, yet they remain largely excluded from the formal financial system. PayFlow is building the infrastructure that changes that — and we believe they are the right team to do it.",
        attribution: "Managing Partner, Genesis Ventures",
      },
      {
        type: "heading",
        text: "Why We Invested",
      },
      {
        type: "paragraph",
        text: "Genesis Ventures' investment thesis in South Asian fintech centers on companies that create genuine financial inclusion by solving distribution, trust, and product-fit challenges simultaneously. PayFlow demonstrates all three. Its merchant onboarding process takes under seven minutes using existing Citizenship ID and PAN numbers, eliminating the documentation burden that historically kept small businesses out of digital payment networks.",
      },
      {
        type: "paragraph",
        text: "The team's decision to build on Nepal's existing interoperability frameworks — rather than attempting to recreate proprietary rails — reflects the kind of infrastructure-aware thinking that we find in the best fintech founders. PayFlow doesn't compete with the banking system; it extends its reach.",
      },
      {
        type: "list",
        heading: "Use of Funds",
        items: [
          "Expand engineering team with a focus on AI-driven credit underwriting",
          "Accelerate merchant acquisition across Terai and hill-region districts",
          "Deepen integrations with Nepal's national payment switch (NCHL)",
          "Pursue regulatory approval for embedded lending products",
        ],
      },
      {
        type: "paragraph",
        text: "Genesis Ventures will take a board observer seat. The Managing Partner will work closely with the PayFlow leadership team on go-to-market strategy and follow-on fundraising preparation.",
      },
    ],
  },

  "genesis-150m-early-stage-fund": {
    readTime: "5 min read",
    source: "Company Announcement",
    date: "February 2026",
    body: [
      {
        type: "lead",
        text: "Genesis Ventures today announced the final close of its third fund — a $150 million early-stage vehicle targeting founders building across South Asia in artificial intelligence, fintech, and climate technology.",
      },
      {
        type: "paragraph",
        text: "The fund, formally designated Genesis Ventures Fund III, was oversubscribed against an initial target of $120 million. Limited partners include a mix of institutional investors, family offices, and development finance institutions from South Asia, the Gulf, and Europe. The fund held its first close in September 2025 and completed fundraising in February 2026.",
      },
      {
        type: "highlight",
        label: "Fund Size",
        value: "$150M",
        note: "Oversubscribed from initial $120M target",
      },
      {
        type: "heading",
        text: "Investment Strategy",
      },
      {
        type: "paragraph",
        text: "Fund III will make 20 to 25 investments at the pre-seed and seed stages, with initial check sizes ranging from $500,000 to $3 million. Genesis Ventures reserves approximately 40% of Fund III for follow-on investments in its highest-conviction portfolio companies through Series A. The firm will consider investments in India, Nepal, Bangladesh, Sri Lanka, and Pakistan, with a preference for companies that have a clear path to regional scale.",
      },
      {
        type: "list",
        heading: "Focus Sectors",
        items: [
          "Artificial Intelligence — enterprise software, AI-native tools, applied ML in healthcare and agriculture",
          "Fintech — credit infrastructure, payments, insurance, and wealth management for underserved segments",
          "Climate Technology — renewable energy access, carbon markets, sustainable agriculture, and climate adaptation",
        ],
      },
      {
        type: "quote",
        text: "South Asia is entering a decade where the problems are large enough to matter globally and the talent is ready to solve them. Fund III is our commitment to being the first institutional capital behind the founders who will define this moment.",
        attribution: "Managing Partner, Genesis Ventures",
      },
      {
        type: "heading",
        text: "Building on a Track Record",
      },
      {
        type: "paragraph",
        text: "Genesis Ventures Fund I (2019, $32M) and Fund II (2022, $78M) have collectively backed 38 companies across the region. Of those, six have raised follow-on Series A or B rounds from international investors, three have achieved profitability on a standalone basis, and one has been acquired. The firm's portfolio companies have collectively created more than 2,400 direct jobs and serve over 4 million end customers across the region.",
      },
      {
        type: "paragraph",
        text: "Fund III reflects both the maturation of the South Asian startup ecosystem and Genesis Ventures' conviction that the best vintage for early-stage investing in this region is the one we're in right now. Valuations remain rational, the talent pipeline from regional and international universities has never been stronger, and the regulatory environment — while complex — is trending toward enabling rather than restricting innovation.",
      },
      {
        type: "heading",
        text: "About the LP Base",
      },
      {
        type: "paragraph",
        text: "Genesis Ventures has intentionally diversified its LP base across Fund III to include capital from within the region alongside international institutional investors. Over 35% of committed capital comes from South Asian family offices and corporates — a meaningful increase from Fund II. The firm believes that local LP capital strengthens deal sourcing, portfolio company access to strategic partners, and long-term alignment with the communities its portfolio companies serve.",
      },
    ],
  },

  "managing-partner-south-asia-summit": {
    readTime: "4 min read",
    source: "Event",
    date: "January 2026",
    body: [
      {
        type: "lead",
        text: "Genesis Ventures' Managing Partner took the main stage at the South Asia Startup Summit in Kathmandu this January, delivering a keynote on the structural shifts reshaping venture capital across the region — and what they mean for founders raising today.",
      },
      {
        type: "paragraph",
        text: "The annual summit, hosted at the Hyatt Regency Kathmandu, drew over 1,200 attendees from 18 countries, including founders, institutional investors, corporate innovation leaders, and policymakers. Genesis Ventures was the summit's lead venture partner for the second consecutive year.",
      },
      {
        type: "heading",
        text: "Key Themes from the Keynote",
      },
      {
        type: "paragraph",
        text: "The keynote, titled 'The Decade Ahead: South Asia's Moment in Global Innovation,' covered three interconnected themes that Genesis Ventures believes will define the startup landscape across the region through 2035.",
      },
      {
        type: "list",
        heading: "The Three Themes",
        items: [
          "Capital is becoming local — the dependence on foreign VC is declining as regional funds, family offices, and development finance institutions mature",
          "AI is a multiplier, not a category — the most durable companies will use AI to unlock sectors that were previously too operationally complex to scale",
          "Regulatory fluency is a competitive advantage — founders who understand and engage with local regulatory environments will build more defensible businesses than those who treat compliance as an afterthought",
        ],
      },
      {
        type: "quote",
        text: "The question for South Asian founders is no longer whether the capital is here. It is. The question is whether you're building something worth backing — something specific, something urgent, something that only you could build from where you're standing.",
        attribution:
          "Managing Partner, Genesis Ventures — South Asia Startup Summit, January 2026",
      },
      {
        type: "heading",
        text: "The Fireside Conversation",
      },
      {
        type: "paragraph",
        text: "Following the keynote, the Managing Partner joined a panel with three portfolio founders for a candid fireside conversation moderated by a senior journalist from The Kathmandu Post. The session covered early fundraising mistakes, how to think about co-founder dynamics under pressure, and the specific challenges of building for markets where formal data infrastructure is still emerging.",
      },
      {
        type: "paragraph",
        text: "One exchange drew particular attention from attendees: a question from an audience member about whether South Asian founders should relocate to Singapore or Dubai to access capital. The Managing Partner's response — that relocation is increasingly unnecessary and often counterproductive for founders building products that require deep local context — was widely shared on social media in the days following the summit.",
      },
      {
        type: "heading",
        text: "Startup Showcase: Genesis Ventures Portfolio Spotlight",
      },
      {
        type: "paragraph",
        text: "Genesis Ventures hosted a dedicated portfolio spotlight session on the summit's second day, giving four portfolio companies the opportunity to present to an audience of potential investors, enterprise customers, and strategic partners. Three of the four companies reported meaningful follow-up conversations emerging from the summit within the subsequent two weeks.",
      },
      {
        type: "paragraph",
        text: "The summit also served as the venue for an informal gathering of South Asian LPs and fund managers hosted by Genesis Ventures on the evening of Day One — a sign of the firm's growing role not just as a capital allocator but as a convener of the regional investment community.",
      },
    ],
  },
};

// ─── Page ─────────────────────────────────────────────────────────────────────

export default async function MediaPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = media.find((b) => b.slug === slug);

  if (!item) notFound();

  const content = mediaContent[slug];

  return (
    <main className="w-full bg-white min-h-screen  ">
      {/* ── Hero ── */}
      <div className="relative w-full h-[52vh] min-h-85 overflow-hidden bg-genesis-navy px-8 md:px-16 py-16 md:py-24">
        <Image
          src={item.image}
          alt={item.title}
          fill
          priority
          className="object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-linear-to-t from-genesis-navy via-genesis-navy/55 to-transparent" />

        <div className="absolute inset-0 flex flex-col justify-end px-8 md:px-16 pb-12 md:pb-16 max-w-5xl">
          {/* Source badge + meta */}
          <div className="flex items-center gap-3 mb-4 flex-wrap">
            <span className="text-[10px] uppercase tracking-widest text-genesis-red font-poppins border border-genesis-red/50 px-2 py-0.5">
              {item.tag}
            </span>
            <span className="text-[10px] uppercase tracking-widest text-white/50 font-poppins">
              {item.source}
            </span>
            <span className="text-[10px] uppercase tracking-widest text-white/50 font-poppins">
              · {item.date}
            </span>
            {content && (
              <span className="text-[10px] uppercase tracking-widest text-white/50 font-poppins">
                · {content.readTime}
              </span>
            )}
          </div>

          {/* Title */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] text-white font-[PPFONT] leading-tight max-w-3xl">
            {item.title}
          </h1>
        </div>
      </div>

      {/* ── Body ── */}
      <div className="w-full px-8 md:px-16 py-16 md:py-24">
        {/* Description lede (from card) */}
        <p className="text-xs uppercase tracking-widest text-gray-400 font-poppins mb-10 border-b border-gray-100 pb-8">
          {item.description}
        </p>

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

              if (section.type === "list") {
                return (
                  <div key={i} className="space-y-3">
                    {section.heading && (
                      <p className="text-xs uppercase tracking-widest text-gray-400 font-poppins">
                        {section.heading}
                      </p>
                    )}
                    <ul className="space-y-3">
                      {section.items.map((item, j) => (
                        <li
                          key={j}
                          className="flex items-start gap-3 text-sm text-gray-600 font-poppins leading-relaxed"
                        >
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-genesis-red shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              }

              if (section.type === "highlight") {
                return (
                  <div
                    key={i}
                    className="flex items-start gap-6 bg-genesis-navy/5 border border-genesis-navy/10 px-6 py-5 my-4"
                  >
                    <div>
                      <p className="text-3xl md:text-4xl font-[PPFONT] text-genesis-navy leading-none">
                        {section.value}
                      </p>
                      <p className="mt-1 text-xs uppercase tracking-widest text-genesis-red font-poppins">
                        {section.label}
                      </p>
                      {section.note && (
                        <p className="mt-1.5 text-xs text-gray-400 font-poppins">
                          {section.note}
                        </p>
                      )}
                    </div>
                  </div>
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
            href="/perspective#media"
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
            Back to Media
          </a>
        </div>
      </div>
    </main>
  );
}
