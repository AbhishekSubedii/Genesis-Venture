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
      className="scroll-mt-24 w-full bg-white flex flex-col px-4 xs:px-6 sm:px-8 md:px-16 py-8 sm:py-12 md:py-24"
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

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {media.map((item) => (
          <article
            key={item.id}
            className="flex flex-col overflow-hidden border border-gray-200 bg-white"
          >
            <div className="relative h-44 w-full overflow-hidden sm:h-48">
              <Image
                src={item.image}
                alt={item.title}
                fill
                draggable={false}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="flex flex-1 flex-col gap-4 p-5 sm:p-6 md:p-7">
              <div className="flex items-center justify-between">
                <span className="text-[10px] xs:text-xs uppercase tracking-widest text-genesis-red font-poppins">
                  {item.tag}
                </span>
                <span className="text-[10px] xs:text-xs text-gray-400 font-poppins tracking-wide">
                  {item.date}
                </span>
              </div>

              <h3 className="text-sm leading-snug text-genesis-navy font-[PPFONT] sm:text-base md:text-lg">
                {item.title}
              </h3>

              <p className="flex-1 text-[10px] xs:text-xs leading-relaxed text-gray-500 font-poppins">
                {item.description}
              </p>

              <div className="border-t border-gray-100 pt-4" />

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
