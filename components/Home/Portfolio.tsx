const companies = [
  {
    name: "Meridian AI",
    sector: "Technology",
    stage: "Series A",
    year: "2022",
  },
  { name: "Helix Health", sector: "Healthcare", stage: "Seed", year: "2023" },
  {
    name: "Clearpath Finance",
    sector: "Fintech",
    stage: "Series B",
    year: "2021",
  },
  { name: "Urbanbase", sector: "Real Estate", stage: "Series A", year: "2022" },
  { name: "Stackr", sector: "Technology", stage: "Seed", year: "2023" },
  {
    name: "Vantage Bio",
    sector: "Life Sciences",
    stage: "Series A",
    year: "2021",
  },
];

export default function Portfolio() {
  return (
    <section className="h-screen w-full bg-white flex flex-col px-8 md:px-16 py-10 md:py-24">
      <div className="flex items-start justify-between border-b border-gray-200 pb-4 md:pb-6">
        <span className="text-xs uppercase tracking-widest text-gray-500 font-[GT50]">
          Portfolio
        </span>
        <span className="text-xs uppercase tracking-widest text-gray-500 font-[GT50]">
          04
        </span>
      </div>

      <div className="flex flex-col md:flex-row gap-6 md:gap-24 flex-1 pt-6 md:pt-10 overflow-hidden">
        <div className="md:w-1/3 flex flex-row md:flex-col items-center md:items-start justify-between md:justify-between">
          <h2 className="text-xl sm:text-2xl md:text-3xl text-genesis-navy font-[PPFONT] leading-snug">
            Selected investments.
          </h2>
          <a
            href="/Projects"
            className="text-xs uppercase tracking-widest text-genesis-red border-b border-genesis-red pb-1 w-fit hover:opacity-70 transition-opacity font-[GT50] shrink-0"
          >
            View all →
          </a>
        </div>

        <div className="md:w-2/3 flex flex-col justify-center divide-y divide-gray-200">
          {companies.map(({ name, sector, stage, year }) => (
            <div
              key={name}
              className="flex items-center justify-between py-2 md:py-4 group cursor-default"
            >
              <span className="text-sm md:text-base lg:text-lg text-genesis-navy font-[PPFONT] group-hover:text-genesis-red transition-colors">
                {name}
              </span>
              <div className="flex items-center gap-3 md:gap-12">
                <span className="text-xs md:text-sm text-gray-600 font-[GT50] uppercase hidden md:block">
                  {sector}
                </span>
                <span className="text-xs md:text-sm text-gray-600 font-[GT50] uppercase">
                  {stage}
                </span>
                <span className="text-xs md:text-sm text-gray-500 font-[GT50]">
                  {year}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
