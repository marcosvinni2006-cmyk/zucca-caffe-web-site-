import { About } from "@/components/About";
import { Careers } from "@/components/Careers";
import { Gallery } from "@/components/Gallery";
import { FindUs } from "@/components/FindUs";
import { Hero } from "@/components/Hero";
import { Highlights } from "@/components/Highlights";
import { Menu } from "@/components/Menu";
import { SectionDivider } from "@/components/Ornament";
import { Visit } from "@/components/Visit";

export default function Home() {
  return (
    <>
      <Hero />
      <Highlights />
      <SectionDivider />
      <About />
      <SectionDivider />
      <Menu />
      <SectionDivider />
      <Visit />
      <FindUs />
      <Gallery />
      <SectionDivider />
      <Careers />
    </>
  );
}
