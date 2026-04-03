import AboutUs from "@/components/About/AboutUs";
import Hero from "@/components/About/Hero";
import Leadership from "@/components/About/Leadership";
import Milestone from "@/components/About/Milestone";
import Mission from "@/components/About/Mission";

export default function About() {
  return (
    <main className="w-full font-[PPFONT]">
      <Hero />
      <AboutUs />
      <Mission />
      {/* <Milestone /> */}
      <Leadership />
    </main>
  );
}
