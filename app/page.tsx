import Hero from "@/components/Home/Hero";
import About from "@/components/Home/About";
import Sectors from "@/components/Home/Sectors";
import Portfolio from "@/components/Home/Portfolio";
import Contact from "@/components/Home/Contact";

export default function Home() {
  return (
    <main className="w-full font-[PPFONT]">
      <Hero />
      <About />
      <Sectors />
      <Portfolio />
      <Contact />
    </main>
  );
}
