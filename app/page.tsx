import About from "@/components/about";
import Footer from "@/components/common/footer";
import { Navbar } from "@/components/common/navbar";
import { ScrollTextHighlight } from "@/components/common/scroll-text-highlighter";
import Connect from "@/components/connect";
import Forte from "@/components/forte";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Team from "@/components/team";
import WhyUdyora from "@/components/why-udyora";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <ScrollTextHighlight text="We simplify complex regulatory processes by delivering end-to-end approvals and compliance services for industrial, commercial, institutional, and infrastructure projects. From land due diligence to occupancy certification, Udyora manages every critical approval through a single point of coordination." />
      <About />
      <Forte />
      <WhyUdyora />
      <Team />
      <Projects />
      <Connect />
      <Footer />
    </>
  );
}
