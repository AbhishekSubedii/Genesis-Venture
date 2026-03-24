const values = [
  {
    title: "Conviction",
    description:
      "We back founders others overlook — early, decisively, and with full commitment.",
  },
  {
    title: "Partnership",
    description:
      "We sit alongside our founders through every stage, not just at the term sheet.",
  },
  {
    title: "Integrity",
    description:
      "Transparent communication and honest counsel, even when it's difficult.",
  },
  {
    title: "Long-term thinking",
    description: "We measure success in decades, not quarters.",
  },
];

export default function Mission() {
  return (
    <section className="h-screen w-full bg-white flex flex-col px-8 md:px-16 py-16 md:py-24">
      <div className="flex items-start justify-between border-b border-gray-200 pb-6">
        <span className="text-xs uppercase tracking-widest text-gray-500 font-[GT50]">
          Mission & Values
        </span>
        <span className="text-xs uppercase tracking-widest text-gray-500 font-[GT50]">
          02
        </span>
      </div>

      <div className="flex flex-col md:flex-row gap-12 md:gap-24 flex-1 pt-10">
        <div className="md:w-1/3 flex flex-col justify-between">
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl md:text-3xl text-genesis-navy leading-snug">
              Our mission is to back the builders who change industries.
            </h2>
            <p className="text-sm text-gray-600 font-[GT50] leading-relaxed">
              We invest at the intersection of ambition and execution — where a
              founder's vision meets the discipline to see it through.
            </p>
          </div>
        </div>

        <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-px bg-gray-100">
          {values.map(({ title, description }) => (
            <div
              key={title}
              className="bg-white p-6 md:p-8 flex flex-col gap-3"
            >
              <span className="text-xs uppercase tracking-widest text-genesis-red font-[GT50]">
                {title}
              </span>
              <p className="text-sm text-gray-600 font-[GT50] leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
