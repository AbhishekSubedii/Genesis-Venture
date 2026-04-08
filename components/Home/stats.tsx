const stats = [
  { value: "NPR 1B+", label: "Assets Under Management", color: "#001D3F" },
  { value: "80+", label: "Portfolio Companies", color: "#04356A" },
  { value: "30+", label: "Years of Experience", color: "#054E98" },
  { value: "12", label: "Countries Reached", color: "#0A6ED3" },
];

export default function Stats() {
  return (
    <section className="mb-4 w-full sm:mb-6 md:mb-8">
      <div className="grid w-full grid-cols-2 sm:grid-cols-4">
        {stats.map(({ value, label, color }) => (
          <div
            key={label}
            className="flex min-h-[180px] flex-col items-center justify-center gap-2 px-4 py-8 text-center sm:min-h-[220px] sm:px-6 md:px-8"
            style={{ backgroundColor: color }}
          >
            <span className="whitespace-nowrap text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-[PPFONT] text-white">
              {value}
            </span>
            <span className="text-xs sm:text-sm text-white uppercase tracking-widest font-poppins leading-tight">
              {label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
