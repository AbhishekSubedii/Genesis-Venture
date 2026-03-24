"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/About" },
  { label: "Invested Sectors", href: "/Projects" },
  { label: "Contact Us", href: "/Contacts" },
];

const sectors = [
  { label: "Technology & AI", id: "technology" },
  { label: "Healthcare & Life Sciences", id: "healthcare" },
  { label: "Financial Services", id: "fintech" },
  { label: "Real Estate & Infrastructure", id: "realestate" },
  { label: "Consumer & Retail", id: "consumer" },
];

export default function NavBar() {
  const pathname = usePathname();
  const isProjects = pathname === "/Projects";
  const [activeId, setActiveId] = useState(sectors[0].id);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) setMenuOpen(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  useEffect(() => {
    if (!isProjects) return;
    const observers: IntersectionObserver[] = [];
    sectors.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveId(id);
        },
        { threshold: 0.5 },
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, [isProjects]);

  const handleSectorClick = (id: string) => {
    setActiveId(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-100 flex flex-col">
      {/* Main navbar */}
      <nav className="flex items-center justify-between px-8 md:px-16 py-4 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <Link href="/" className="flex flex-col leading-none select-none">
          <span className="text-2xl font-bold tracking-tight text-genesis-navy font-[PPFONT]">
            genes<span className="text-genesis-red">i</span>s
          </span>
          <span
            className="text-sm text-end font-normal tracking-widest text-genesis-red font-[GT50]"
            style={{ marginTop: "-2px" }}
          >
            ventures
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map(({ label, href }) => (
            <li key={href}>
              <Link
                href={href}
                className={`text-xs uppercase tracking-widest font-[GT50] transition-colors duration-200 ${pathname === href ? "text-genesis-red" : "text-genesis-navy hover:text-genesis-red"}`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-genesis-navy p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 px-8 py-4 flex flex-col gap-4">
          {navLinks.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className={`text-sm uppercase tracking-widest font-[GT50] transition-colors ${pathname === href ? "text-genesis-red" : "text-genesis-navy"}`}
            >
              {label}
            </Link>
          ))}
        </div>
      )}

      {/* Sector strip — only on /Projects */}
      {isProjects && (
        <div
          className="w-full bg-white border-b border-gray-100 px-8 md:px-16 flex items-center overflow-x-auto"
          style={{ scrollbarWidth: "none" }}
        >
          <span className="text-xs text-gray-400 font-[GT50] uppercase tracking-widest pr-6 border-r border-gray-200 py-3 shrink-0">
            Sectors
          </span>
          {sectors.map(({ label, id }) => (
            <button
              key={id}
              onClick={() => handleSectorClick(id)}
              className={`relative text-xs md:text-sm font-[GT50] uppercase tracking-wider whitespace-nowrap transition-colors px-4 md:px-5 py-3 ${activeId === id ? "text-genesis-navy" : "text-gray-500 hover:text-genesis-navy"}`}
            >
              {label}
              {activeId === id && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-genesis-red" />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
