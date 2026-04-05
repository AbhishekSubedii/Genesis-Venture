"use client";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { media } from "@/lib/media";
import Link from "next/dist/client/link";
import Button from "../ui/Button2";

gsap.registerPlugin(SplitText, ScrollTrigger);

const Media = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const splitTitle = new SplitText(".media-heading", { type: "words" });

    gsap.from(splitTitle.words, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 90%",
        end: "top top",
        scrub: true,
      },
      opacity: 0,
      y: 30,
      filter: "blur(10px)",
      stagger: 0.05,
      duration: 1,
      ease: "power3.out",
    });

    return () => {
      splitTitle.revert();
    };
  });

  return (
    <section
      ref={containerRef}
      id="media"
      className="w-full bg-white flex flex-col px-4 xs:px-6 sm:px-8 md:px-16 py-8 sm:py-12 md:py-24"
    >
      <div className="flex items-start justify-between border-b border-gray-200 pb-3 sm:pb-4 md:pb-6">
        <span className="media-heading text-xs uppercase tracking-widest text-gray-500 font-poppins">
          Media
        </span>
      </div>

      <div className="pt-5 sm:pt-6 md:pt-10 mb-6 sm:mb-8 md:mb-14">
        <h2 className="media-heading text-[clamp(1.25rem,4vw,2.5rem)] text-genesis-navy leading-snug font-[PPFONT] max-w-2xl">
          News, announcements, and public updates from Genesis Ventures.
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200">
        {media.map((item) => (
          <article
            key={item.id}
            className="relative bg-white flex flex-col group p-2 md:p-4 hover:bg-gray-50 transition-colors duration-200 overflow-hidden"
          >
            <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-genesis-red scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />

            <div className="relative w-full h-36 xs:h-40 sm:h-44 overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                draggable={false}
                className="w-full h-full object-cover grayscale-15 group-hover:grayscale-0 group-hover:scale-[1.03] transition-all duration-500"
              />
            </div>

            <div className="flex flex-col gap-3 sm:gap-4 p-4 xs:p-5 sm:p-6 md:p-8 flex-1">
              <div className="flex items-center justify-between">
                <span className="text-[10px] xs:text-xs uppercase tracking-widest text-genesis-red font-poppins">
                  {item.tag}
                </span>
                <span className="text-[10px] xs:text-xs text-gray-400 font-poppins tracking-wide">
                  {item.date}
                </span>
              </div>

              <h3 className="text-sm sm:text-base md:text-lg font-[PPFONT] text-genesis-navy leading-snug group-hover:text-genesis-red transition-colors duration-200">
                {item.title}
              </h3>

              <p className="text-[10px] xs:text-xs text-gray-500 font-poppins leading-relaxed flex-1">
                {item.description}
              </p>

              <div className="border-t border-gray-100" />

              <div className="flex items-center justify-between">
                <span className="text-[10px] xs:text-xs text-gray-400 font-poppins tracking-wide">
                  {item.source}
                </span>
                {/* <Button
                  text="Read More"
                  href={`/perspective/media/${item.slug}`}
                /> */}
                <Link href={`/perspective/media/${item.slug}`}>
                  <Button
                    variant="primary"
                    size="md"
                    className="mt-12 bg-genesis-navy px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.28em] text-white hover:bg-genesis-navy/80 transition-colors"
                  >
                    <span className="inline-flex items-center gap-3">
                      Read More
                    </span>
                  </Button>
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Media;
