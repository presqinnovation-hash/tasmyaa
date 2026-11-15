import { careersHeroSlides } from "@/data/careers/content";
import CareersCarousel from "./CareersCarousel";

export default function CareersHero() {
  return (
    <section
      className="tasmyaa-careers-hero"
      aria-label="Build your future with Tasmyaa"
    >
      <CareersCarousel
        slides={careersHeroSlides}
        label="Careers hero"
        variant="hero"
      />
      <p className="tasmyaa-careers-hero-note">
        Proposed career messages. Images are illustrative and do not depict
        Tasmyaa employees, programmes or offices.
      </p>
    </section>
  );
}
