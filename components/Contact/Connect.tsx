"use client";
import Button from "@/ui/Button";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useState } from "react";

gsap.registerPlugin(SplitText, ScrollTrigger);

type Tab = "general" | "pitch";

const inputClass =
  "w-full bg-transparent border-b border-genesis-navy/20 py-3 text-sm text-genesis-navy font-poppins placeholder:text-genesis-navy/30 focus:outline-none focus:border-genesis-navy/60 transition-colors";

const labelClass =
  "text-[11px] uppercase tracking-widest text-genesis-navy/60 font-poppins";

const contactDetails = [
  { label: "General", value: "contact@genesisventures.com" },
  { label: "Pitch", value: "founders@genesisventures.com" },
  { label: "Phone", value: "+1 (212) 555-0100" },
  { label: "Office", value: "Kathmandu, Nepal" },
];

export default function Connect() {
  const [tab, setTab] = useState<Tab>("general");

  useGSAP(() => {
    const splitTitle = new SplitText(".contact-heading", { type: "words" });

    gsap.from(splitTitle.words, {
      scrollTrigger: {
        trigger: ".contact-section",
        start: "top 90%",
        end: "bottom 80%",
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
    <section className="contact-section relative w-full overflow-hidden flex flex-col bg-white px-4 xs:px-6 sm:px-8 md:px-16 py-8 sm:py-12 md:py-24">
      <div className="flex items-start justify-between border-b border-genesis-navy/10 pb-3 sm:pb-4 md:pb-6">
        <span className="contact-heading text-xs uppercase tracking-widest text-gray-500 font-poppins">
          Contact Us
        </span>
        <span className="contact-heading text-xs uppercase tracking-widest text-gray-500 font-poppins">
          05
        </span>
      </div>

      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pt-5 sm:pt-6 md:pt-10 mb-10 md:mb-16">
        <div className="flex flex-col gap-3">
          <span className="contact-heading text-xs uppercase tracking-widest text-genesis-blue font-[GT50]">
            Get in touch
          </span>
          <h1 className="contact-heading text-[clamp(1.25rem,4vw,2.5rem)] text-genesis-navy font-[PPFONT] leading-snug max-w-xl">
            Let&apos;s start a conversation.
          </h1>
        </div>

        <div className="flex gap-px border border-genesis-navy/15 w-fit shrink-0">
          <button
            onClick={() => setTab("general")}
            className={`px-6 py-2.5 text-xs uppercase tracking-widest font-poppins transition-colors duration-200 ${
              tab === "general"
                ? "bg-genesis-navy text-white"
                : "text-genesis-navy/40 hover:text-genesis-navy bg-transparent"
            }`}
          >
            General
          </button>
          <button
            onClick={() => setTab("pitch")}
            className={`px-6 py-2.5 text-xs uppercase tracking-widest font-poppins transition-colors duration-200 ${
              tab === "pitch"
                ? "bg-genesis-navy text-white"
                : "text-genesis-navy/40 hover:text-genesis-navy bg-transparent"
            }`}
          >
            Pitch Us
          </button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-12 md:gap-20 flex-1">
        <div className="md:w-2/3">
          {tab === "general" ? (
            <form
              className="flex flex-col gap-8"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col gap-2">
                  <label className={labelClass}>First Name</label>
                  <input
                    type="text"
                    placeholder="Jane"
                    className={inputClass}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className={labelClass}>Last Name</label>
                  <input
                    type="text"
                    placeholder="Smith"
                    className={inputClass}
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className={labelClass}>Email</label>
                <input
                  type="email"
                  placeholder="jane@company.com"
                  className={inputClass}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className={labelClass}>Message</label>
                <textarea
                  rows={4}
                  placeholder="How can we help?"
                  className={`${inputClass} resize-none`}
                />
              </div>
              <Button text="Send Message" />
            </form>
          ) : (
            <form
              className="flex flex-col gap-8"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col gap-2">
                  <label className={labelClass}>First Name</label>
                  <input
                    type="text"
                    placeholder="Jane"
                    className={inputClass}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className={labelClass}>Last Name</label>
                  <input
                    type="text"
                    placeholder="Smith"
                    className={inputClass}
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col gap-2">
                  <label className={labelClass}>Email</label>
                  <input
                    type="email"
                    placeholder="jane@startup.com"
                    className={inputClass}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className={labelClass}>Phone</label>
                  <input
                    type="tel"
                    placeholder="+1 (212) 000-0000"
                    className={inputClass}
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className={labelClass}>Company / Startup Name</label>
                <input
                  type="text"
                  placeholder="Acme Inc."
                  className={inputClass}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className={labelClass}>Brief Description</label>
                <textarea
                  rows={4}
                  placeholder="What are you building and what stage are you at?"
                  className={`${inputClass} resize-none`}
                />
              </div>
              <Button text="Submit Pitch" />
            </form>
          )}
        </div>

        <div className="md:w-1/3 flex flex-col justify-between border-t md:border-t-0 md:border-l border-genesis-navy/10 pt-8 md:pt-0 md:pl-12">
          <div className="flex flex-col gap-8">
            {contactDetails.map(({ label, value }) => (
              <div
                key={label}
                className="flex flex-col gap-1.5 border-l border-genesis-navy/10 pl-4"
              >
                <span className="text-[10px] uppercase tracking-widest text-gray-500 font-poppins">
                  {label}
                </span>
                <span className="text-sm text-genesis-navy font-poppins">
                  {value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
