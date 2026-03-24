const sectors = [
  {
    number: "01",
    name: "Technology & AI",
    description:
      "Enterprise software, AI, and deep tech redefining how industries operate.",
  },
  {
    number: "02",
    name: "Healthcare & Life Sciences",
    description:
      "Biotech, digital health, and medical devices improving patient outcomes.",
  },
  {
    number: "03",
    name: "Financial Services",
    description:
      "Fintech platforms modernizing access to capital and financial tools.",
  },
  {
    number: "04",
    name: "Real Estate & Infrastructure",
    description:
      "PropTech and sustainable infrastructure for the built environment.",
  },
  {
    number: "05",
    name: "Consumer & Retail",
    description: "Next-generation consumer brands with strong unit economics.",
  },
];

export default function Sectors() {
  return (
    <section className="h-screen w-full bg-neutral-50 flex flex-col px-8 md:px-16 py-10 md:py-24">
      <div className="flex items-start justify-between border-b border-gray-200 pb-4 md:pb-6">
        <span className="text-xs uppercase tracking-widest text-gray-500 font-[GT50]">
          Invested Sectors
        </span>
        <span className="text-xs uppercase tracking-widest text-gray-500 font-[GT50]">
          03
        </span>
      </div>

      <div className="flex flex-col md:flex-row gap-6 md:gap-24 flex-1 pt-6 md:pt-10 overflow-hidden">
        <div className="md:w-1/3 flex flex-col gap-3 md:justify-between">
          <h2 className="text-xl sm:text-2xl md:text-3xl text-genesis-navy font-[PPFONT] leading-snug">
            Where we focus our capital.
          </h2>
          <p className="text-sm text-gray-600 font-[GT50] leading-relaxed max-w-xs hidden md:block">
            We concentrate on sectors where technology creates durable
            competitive advantages and outsized returns.
          </p>
        </div>

        <div className="md:w-2/3 flex flex-col justify-center divide-y divide-gray-200">
          {sectors.map(({ number, name, description }) => (
            <div
              key={number}
              className="flex items-start gap-4 md:gap-6 py-2 md:py-4 group cursor-default"
            >
              <span className="text-xs text-gray-400 font-[GT50] pt-0.5 w-5 shrink-0">
                {number}
              </span>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between w-full gap-0.5 md:gap-8">
                <span className="text-sm md:text-base lg:text-lg text-genesis-navy font-[PPFONT] group-hover:text-genesis-red transition-colors shrink-0">
                  {name}
                </span>
                <span className="text-xs md:text-sm text-gray-600 font-[GT50] md:max-w-xs leading-relaxed hidden sm:block">
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
