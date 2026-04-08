import Link from "next/link";

const nav = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/About" },
  { label: "Invested Sectors", href: "/Projects" },
  { label: "Contact Us", href: "/Contacts" },
];

const social = [
  { label: "LinkedIn", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "Facebook", href: "#" },
];

const legal = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Use", href: "#" },
];

const resources = [
  { label: "Investment Process", href: "/About" },
  { label: "Founder FAQs", href: "/" },
  { label: "Media & Insights", href: "/perspective/media" },
  { label: "Risk Disclosure", href: "/investor-relations/disclosures" },
];

export default function Footer() {
  return (
    <footer className="relative w-full min-h-[780px] overflow-hidden bg-genesis-navy text-white font-poppins">
      <div className="pointer-events-none absolute inset-0 bg-[url('/footer/footer.jpg')] bg-cover bg-center opacity-30" />
      <div className="pointer-events-none absolute inset-0 bg-black/30" />

      <div className="relative z-10 flex min-h-[780px] flex-col">
        <div className="flex flex-1 flex-col gap-14 px-8 pb-20 pt-24 md:px-16 md:pb-24 md:pt-28">
          <div className="flex flex-col justify-between gap-14 md:flex-row">
            <div className="flex max-w-xl flex-col gap-3">
              <h2 className="font-[PPFONT] text-xl leading-snug text-white sm:text-2xl md:text-3xl lg:text-4xl">
                Ready to build something
                <br />
                significant?
              </h2>
              <p className="hidden max-w-sm font-poppins text-sm leading-relaxed text-white/60 sm:block">
                We review every submission and respond within 5 business days.
                If there's a fit, we move quickly.
              </p>
            </div>

            <div className="flex flex-wrap gap-8 md:gap-20">
              <div className="flex flex-col gap-3">
                <span className="mb-1 text-xs uppercase tracking-widest text-white/50">
                  Navigation
                </span>
                {nav.map(({ label, href }) => (
                  <Link
                    key={href}
                    href={href}
                    className="text-sm uppercase tracking-wider text-white/80 transition-colors hover:text-white"
                  >
                    {label}
                  </Link>
                ))}
              </div>

              <div className="flex flex-col gap-3">
                <span className="mb-1 text-xs uppercase tracking-widest text-white/50">
                  Follow
                </span>
                {social.map(({ label, href }) => (
                  <Link
                    key={label}
                    href={href}
                    className="inline-flex items-center gap-2 text-sm uppercase tracking-wider text-white/80 transition-colors hover:text-white"
                  >
                    {label === "LinkedIn" && (
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        className="h-4 w-4"
                        fill="currentColor"
                      >
                        <path d="M19 3A2 2 0 0 1 21 5v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14Zm-9.75 7.17H6.77V18h2.48v-7.83ZM8 5.98a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88ZM18 13.7c0-2.53-1.35-3.7-3.15-3.7-1.45 0-2.1.8-2.46 1.36v-1.19H9.91V18h2.48v-4.35c0-1.15.22-2.27 1.65-2.27 1.41 0 1.43 1.32 1.43 2.35V18H18v-4.3Z" />
                      </svg>
                    )}
                    {label === "Instagram" && (
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        className="h-4 w-4"
                        fill="currentColor"
                      >
                        <path d="M12 7.4A4.6 4.6 0 1 0 12 16.6 4.6 4.6 0 1 0 12 7.4Zm0 7.6A3 3 0 1 1 12 9a3 3 0 0 1 0 6Zm5.9-7.8a1.1 1.1 0 1 1-2.2 0 1.1 1.1 0 0 1 2.2 0ZM12 3.6c2.7 0 3 .01 4.06.06 1 .05 1.55.21 1.92.35.5.2.86.43 1.24.8.37.38.6.74.8 1.24.14.37.3.92.35 1.92.05 1.06.06 1.37.06 4.06s-.01 3-.06 4.06c-.05 1-.21 1.55-.35 1.92-.2.5-.43.86-.8 1.24-.38.37-.74.6-1.24.8-.37.14-.92.3-1.92.35-1.06.05-1.37.06-4.06.06s-3-.01-4.06-.06c-1-.05-1.55-.21-1.92-.35a3.3 3.3 0 0 1-1.24-.8 3.3 3.3 0 0 1-.8-1.24c-.14-.37-.3-.92-.35-1.92C3.61 15 3.6 14.69 3.6 12s.01-3 .06-4.06c.05-1 .21-1.55.35-1.92.2-.5.43-.86.8-1.24.38-.37.74-.6 1.24-.8.37-.14.92-.3 1.92-.35C9 3.61 9.31 3.6 12 3.6Zm0-1.6c-2.74 0-3.08.01-4.13.06-1.05.05-1.76.22-2.39.47a4.9 4.9 0 0 0-1.78 1.16 4.9 4.9 0 0 0-1.16 1.78c-.25.63-.42 1.34-.47 2.39C2.01 8.92 2 9.26 2 12s.01 3.08.06 4.13c.05 1.05.22 1.76.47 2.39.26.68.6 1.26 1.16 1.78.52.56 1.1.9 1.78 1.16.63.25 1.34.42 2.39.47 1.05.05 1.39.06 4.13.06s3.08-.01 4.13-.06c1.05-.05 1.76-.22 2.39-.47a4.9 4.9 0 0 0 1.78-1.16 4.9 4.9 0 0 0 1.16-1.78c.25-.63.42-1.34.47-2.39.05-1.05.06-1.39.06-4.13s-.01-3.08-.06-4.13c-.05-1.05-.22-1.76-.47-2.39a4.9 4.9 0 0 0-1.16-1.78 4.9 4.9 0 0 0-1.78-1.16c-.63-.25-1.34-.42-2.39-.47C15.08 2.01 14.74 2 12 2Z" />
                      </svg>
                    )}
                    {label === "Facebook" && (
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        className="h-4 w-4"
                        fill="currentColor"
                      >
                        <path d="M13.5 21v-8.1h2.7l.4-3.1h-3.1v-2c0-.9.2-1.5 1.5-1.5h1.7V3.5c-.8-.1-1.6-.2-2.4-.2-2.4 0-4 1.5-4 4.2v2.3H8v3.1h2.3V21h3.2Z" />
                      </svg>
                    )}
                    {label}
                  </Link>
                ))}
              </div>

              <div className="flex flex-col gap-3">
                <span className="mb-1 text-xs uppercase tracking-widest text-white/50">
                  Contact
                </span>
                <span className="text-sm text-white/80">
                  contact@genesisventures.com
                </span>
                <span className="text-sm text-white/80">+1 (212) 555-0100</span>
                <span className="text-sm text-white/80">
                  350 Fifth Ave, New York, NY
                </span>
              </div>

              <div className="flex flex-col gap-3">
                <span className="mb-1 text-xs uppercase tracking-widest text-white/50">
                  Resources
                </span>
                {resources.map(({ label, href }) => (
                  <Link
                    key={label}
                    href={href}
                    className="text-sm uppercase tracking-wider text-white/80 transition-colors hover:text-white"
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="mx-auto mt-14 w-full max-w-2xl bg-white/5 p-5 text-center backdrop-blur-sm md:mt-18">
            <span className="text-[11px] uppercase tracking-[0.24em] text-white/55">
              For Founders
            </span>
            <p className="mt-2 text-sm leading-relaxed text-white/75">
              Share your deck, traction, and vision. We value clarity, speed,
              and honest feedback from first meeting onward.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 items-center gap-3 px-8 py-8 text-center md:grid-cols-3 md:px-16 md:text-left">
          <span className="text-xs text-white/80 md:justify-self-start">
            Copyright (c) {new Date().getFullYear()} Genesis Ventures, Inc. All
            Rights Reserved.
          </span>
          <div className="flex items-center justify-center gap-6 md:justify-self-center">
            {legal.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className="text-xs text-white/55 transition-colors hover:text-white"
              >
                {label}
              </Link>
            ))}
          </div>
          <a
            href="https://www.webxnepal.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 text-xs text-white/60 transition-colors hover:text-white md:justify-self-end"
          >
            <span>Designed &amp; Developed by</span>
            <img
              src="https://www.webxnepal.com/logo/logo.svg"
              alt="WebX Nepal"
              className="h-4 w-auto"
              loading="lazy"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
