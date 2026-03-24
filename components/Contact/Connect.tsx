"use client";
import { useState } from "react";

type Tab = "general" | "pitch";

const inputClass =
  "w-full bg-transparent border-b border-gray-200 py-3 text-sm text-genesis-navy font-[GT50] placeholder:text-gray-400 focus:outline-none focus:border-genesis-navy transition-colors";

const labelClass =
  "text-xs uppercase tracking-widest text-gray-500 font-[GT50]";

const contactDetails = [
  { label: "General", value: "contact@genesisventures.com" },
  { label: "Pitch", value: "founders@genesisventures.com" },
  { label: "Phone", value: "+1 (212) 555-0100" },
  { label: "Office", value: "Kathmandu, Nepal" },
];

export default function Connect() {
  const [tab, setTab] = useState<Tab>("general");

  return (
    <section className="min-h-screen w-full bg-white flex flex-col px-8 md:px-16 pt-28 pb-16">
      {/* Top bar: title + tab switcher */}
      <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-gray-200 pb-6 gap-4">
        <div>
          <span className="text-xs uppercase tracking-widest text-gray-500 font-[GT50]">
            Contact Us
          </span>
          <h1 className="text-2xl md:text-3xl text-genesis-navy font-[PPFONT] mt-1">
            Get in touch.
          </h1>
        </div>

        {/* Tab switcher */}
        <div className="flex gap-0 border border-gray-200 w-fit">
          <button
            onClick={() => setTab("general")}
            className={`px-6 py-2 text-xs uppercase tracking-widest font-[GT50] transition-colors ${
              tab === "general"
                ? "bg-genesis-navy text-white"
                : "text-gray-500 hover:text-genesis-navy"
            }`}
          >
            General
          </button>
          <button
            onClick={() => setTab("pitch")}
            className={`px-6 py-2 text-xs uppercase tracking-widest font-[GT50] transition-colors ${
              tab === "pitch"
                ? "bg-genesis-red text-white"
                : "text-gray-500 hover:text-genesis-navy"
            }`}
          >
            Pitch
          </button>
        </div>
      </div>

      {/* Form */}
      <div className="flex flex-col md:flex-row gap-12 md:gap-24 flex-1 pt-10">
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
              <button
                type="submit"
                className="w-fit px-8 py-3 bg-genesis-navy text-white text-xs uppercase tracking-widest font-[GT50] hover:bg-genesis-navy-dark transition-colors"
              >
                Send Message
              </button>
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
              <button
                type="submit"
                className="w-fit px-8 py-3 bg-genesis-red text-white text-xs uppercase tracking-widest font-[GT50] hover:bg-genesis-red-dark transition-colors"
              >
                Submit Pitch
              </button>
            </form>
          )}
        </div>

        {/* Contact details sidebar */}
        <div className="md:w-1/3 flex flex-col justify-start gap-6 border-t md:border-t-0 md:border-l border-gray-100 pt-8 md:pt-0 md:pl-12">
          {contactDetails.map(({ label, value }) => (
            <div key={label} className="flex flex-col gap-1">
              <span className="text-xs uppercase tracking-widest text-gray-400 font-[GT50]">
                {label}
              </span>
              <span className="text-sm text-genesis-navy font-[GT50]">
                {value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
