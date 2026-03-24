"use client";
import { useEffect, useRef } from "react";

const stats = [
  { value: "$2.4B+", label: "AUM" },
  { value: "80+", label: "Portfolio Co." },
  { value: "30+", label: "Years" },
  { value: "12", label: "Countries" },
  { value: "14", label: "IPOs" },
];

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let animFrame: number;
    let t = 0;
    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const cols = Math.ceil(canvas.width / 40);
      const rows = Math.ceil(canvas.height / 40);
      for (let r = 0; r <= rows; r++) {
        for (let c = 0; c <= cols; c++) {
          const wave = Math.sin(t * 0.02 + c * 0.4 + r * 0.3) * 0.5 + 0.5;
          ctx.beginPath();
          ctx.arc(c * 40, r * 40, 1.2, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255,255,255,${0.04 + wave * 0.1})`;
          ctx.fill();
        }
      }
      t++;
      animFrame = requestAnimationFrame(draw);
    };
    draw();
    return () => {
      cancelAnimationFrame(animFrame);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section className="h-screen w-full bg-genesis-navy relative overflow-hidden flex flex-col justify-between px-8 md:px-16 pt-20 md:pt-32 pb-8 md:pb-12">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />

      <div
        className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(139,26,46,0.18) 0%, transparent 70%)",
        }}
      />

      <div className="absolute bottom-0 right-0 text-[22vw] font-[PPFONT] leading-none text-white/3 select-none pointer-events-none pr-4">
        1991
      </div>

      {/* Top meta */}
      <div className="relative flex items-start justify-between">
        <span className="text-xs uppercase tracking-widest text-white/50 font-[GT50]">
          Est. 1991 — Kathmandu, Nepal
        </span>
        <span className="text-xs uppercase tracking-widest text-white/50 font-[GT50]">
          Venture Capital
        </span>
      </div>

      {/* Main content */}
      <div className="relative flex flex-col gap-4 md:gap-6">
        <div className="flex items-center gap-3">
          <div className="w-6 h-px bg-genesis-red" />
          <span className="text-xs uppercase tracking-widest text-genesis-red font-[GT50]">
            Early-Stage Investment
          </span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-[PPFONT] text-white leading-tight">
          Investing in the
          <br />
          <span className="text-genesis-red">companies</span> that
          <br />
          shape tomorrow.
        </h1>
        <p className="text-sm text-white/60 font-[GT50] max-w-sm leading-relaxed hidden sm:block">
          Genesis Ventures partners with founders at the earliest stages,
          providing capital, strategy, and long-term support across high-growth
          sectors.
        </p>
      </div>

      {/* Bottom: CTA + stats */}
      <div className="relative flex flex-col gap-4">
        <a
          href="/Contacts"
          className="text-xs uppercase tracking-widest text-white bg-genesis-red px-5 py-2.5 hover:bg-genesis-red-dark transition-colors font-[GT50] w-fit"
        >
          Get in touch →
        </a>
        <div className="flex gap-4 md:gap-6 flex-wrap">
          {stats.map(({ value, label }) => (
            <div
              key={label}
              className="flex flex-col gap-0.5 border-l border-white/10 pl-3"
            >
              <span className="text-sm md:text-lg text-white font-[PPFONT] leading-none">
                {value}
              </span>
              <span className="text-xs text-white/50 font-[GT50] uppercase tracking-wider leading-tight">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
