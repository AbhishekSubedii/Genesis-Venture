const stats = [
  { value: "$2.4B+", label: "Assets Under Management" },
  { value: "80+", label: "Portfolio Companies" },
  { value: "30+", label: "Years of Experience" },
  { value: "12", label: "Countries Reached" },
];

export default function About() {
  return (
    <section className="h-screen w-full bg-white flex flex-col px-8 md:px-16 py-10 md:py-24">
      <div className="flex items-start justify-between border-b border-gray-200 pb-4 md:pb-6">
        <span className="text-xs uppercase tracking-widest text-gray-500 font-[GT50]">
          About Us
        </span>
        <span className="text-xs uppercase tracking-widest text-gray-500 font-[GT50]">
          02
        </span>
      </div>

      <div className="flex flex-col md:flex-row gap-8 md:gap-24 flex-1 pt-6 md:pt-10 overflow-hidden">
        <div className="md:w-1/2 flex flex-col gap-4 md:gap-6 md:justify-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-genesis-navy leading-snug font-[PPFONT]">
            A disciplined approach to early-stage investment.
          </h2>
          <p className="text-sm text-gray-600 font-[GT50] leading-relaxed max-w-sm hidden sm:block">
            Founded in 1991, Genesis Ventures has built a reputation for
            identifying transformative businesses before they reach mainstream
            attention. We work closely with founders to accelerate growth and
            create lasting value.
          </p>
          <a
            href="/About"
            className="text-xs uppercase tracking-widest text-genesis-red border-b border-genesis-red pb-1 w-fit hover:opacity-70 transition-opacity font-[GT50]"
          >
            Our story →
          </a>
        </div>

        <div className="md:w-1/2 grid grid-cols-2 gap-4 md:gap-8 md:content-center">
          {stats.map(({ value, label }) => (
            <div
              key={label}
              className="flex flex-col gap-1 border-l border-gray-200 pl-4 md:pl-5"
            >
              <span className="text-xl md:text-2xl lg:text-3xl font-[PPFONT] text-genesis-navy">
                {value}
              </span>
              <span className="text-xs text-gray-500 uppercase tracking-widest font-[GT50] leading-tight">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-gray-100 pt-3 mt-4 md:mt-0">
        <p className="text-xs text-gray-500 font-[GT50] uppercase tracking-widest">
          Genesis Ventures, Inc. — Kathmandu, Nepal
        </p>
      </div>
    </section>
  );
}
