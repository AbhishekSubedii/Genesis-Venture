import AboutUs from "@/components/About/AboutUs";
import Hero from "@/components/About/Hero";
import Leadership from "@/components/About/Leadership";
import Milestone from "@/components/About/Milestone";
import ValuesShowcase from "@/components/About/ValuesShowcase";

export default function About() {
  return (
    <main className="w-full font-[PPFONT]">
      <Hero />
      <AboutUs />
      <ValuesShowcase />
      {/* <Milestone /> */}
      <Leadership />
    </main>
  );
}
