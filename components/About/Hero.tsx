export default function Hero() {
  return (
    <section className="h-screen w-full bg-genesis-navy flex flex-col justify-between px-8 md:px-16 pt-32 pb-12">
      <div className="flex items-start justify-between border-b border-white/10 pb-6">
        <span className="text-xs uppercase tracking-widest text-white/40 font-[GT50]">
          About Us
        </span>
        <span className="text-xs uppercase tracking-widest text-white/40 font-[GT50]">
          01
        </span>
      </div>

      <div className="flex flex-col gap-6 max-w-2xl">
        <h1 className="text-4xl md:text-5xl lg:text-6xl text-white leading-tight">
          Built on conviction.
          <br />
          <span className="text-genesis-red">Driven by purpose.</span>
        </h1>
        <p className="text-sm text-white/50 font-[GT50] leading-relaxed max-w-md">
          Since 1991, Genesis Ventures has partnered with visionary founders at
          the earliest stages of company building. We bring capital, networks,
          and decades of operational experience to every investment.
        </p>
      </div>

      <div className="flex flex-wrap gap-6 md:gap-16 border-t border-white/10 pt-8">
        {[
          { value: "1991", label: "Founded" },
          { value: "Kathmandu", label: "Headquarters" },
          { value: "$2.4B+", label: "AUM" },
          { value: "80+", label: "Portfolio Companies" },
        ].map(({ value, label }) => (
          <div key={label} className="flex flex-col gap-1">
            <span className="text-xl md:text-2xl text-white font-[PPFONT]">
              {value}
            </span>
            <span className="text-xs text-white/50 uppercase tracking-widest font-[GT50]">
              {label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
