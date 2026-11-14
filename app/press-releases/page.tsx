import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import InFocusSection from "@/components/press/InFocusSection";
import MediaResourcesSection from "@/components/press/MediaResourcesSection";
import "./press-releases.css";

export const metadata: Metadata = {
  title: "Press Releases | TASMYAA",
  description:
    "Press announcements and media resources for Tasmyaa Skill Development Private Limited. Building skills. Creating opportunities. Shaping futures.",
};
export default function PressReleasesPage() {
  return (
    <>
      <a className="tasmyaa-press-skip" href="#press-main">
        Skip to press releases
      </a>
      <Header />
      <main className="tasmyaa-press-page" id="press-main">
        <h1 className="tasmyaa-press-sr-only">TASMYAA Press Releases</h1>
        <InFocusSection />
        <MediaResourcesSection />
      </main>
      <Footer />
    </>
  );
}
