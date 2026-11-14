import FeaturedResearchCarousel from "./FeaturedResearchCarousel";
import SpotlightSection from "./SpotlightSection";
import "./FeaturedResearchSection.css";

export default function FeaturedResearchSection() {
  return (
    <section
      className="tasmyaa-research-section"
      aria-label="Featured Research and Spotlight"
    >
      <div className="tasmyaa-research-column">
        <h2>Featured Research</h2>
        <FeaturedResearchCarousel />
      </div>
      <SpotlightSection />
    </section>
  );
}
