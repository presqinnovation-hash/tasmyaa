import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CareersHero from "@/components/careers/CareersHero";
import CareersVideoSection from "@/components/careers/CareersVideoSection";
import OurApproachSection from "@/components/careers/OurApproachSection";
import OpenPositionsSection from "@/components/careers/OpenPositionsSection";
import LifeAtTasmyaaSection from "@/components/careers/LifeAtTasmyaaSection";
import WhatWeBelieveSection from "@/components/careers/WhatWeBelieveSection";
import "./careers.css";

export const metadata: Metadata = {
  title: "Careers & Work With Us | TASMYAA",
  description:
    "Explore learning, development and future opportunities at Tasmyaa. Find verified open positions and information about our proposed approach to skill development.",
};
export default function CareersPage() {
  return (
    <>
      <a className="tasmyaa-careers-skip" href="#careers-main">
        Skip to careers
      </a>
      <Header />
      <main className="tasmyaa-careers-page" id="careers-main">
        <h1 className="tasmyaa-careers-sr-only">Careers at TASMYAA</h1>
        <CareersHero />
        <CareersVideoSection />
        <OurApproachSection />
        <OpenPositionsSection />
        <LifeAtTasmyaaSection />
        <WhatWeBelieveSection />
      </main>
      <Footer />
    </>
  );
}
