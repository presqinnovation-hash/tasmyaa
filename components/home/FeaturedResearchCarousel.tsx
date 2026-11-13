"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { featuredResearch } from "@/data/featuredResearch";
import ResearchSlide from "./ResearchSlide";

export default function FeaturedResearchCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Only the two button clicks change this state. No timers, effects, or autoplay.
  function navigate(direction: number) {
    setActiveIndex(
      (index) =>
        (index + direction + featuredResearch.length) % featuredResearch.length,
    );
  }

  return (
    <div
      className="tasmyaa-research-carousel"
      role="region"
      aria-roledescription="carousel"
      aria-label="Featured research publications"
      data-active-slide={activeIndex + 1}
    >
      <div className="tasmyaa-research-slides">
        {featuredResearch.map((publication, index) => (
          <ResearchSlide
            key={publication.id}
            publication={publication}
            active={index === activeIndex}
            index={index}
            total={featuredResearch.length}
          />
        ))}
      </div>
      <button
        className="tasmyaa-research-arrow tasmyaa-research-previous"
        type="button"
        aria-label="Previous research publication"
        onClick={() => navigate(-1)}
      >
        <ChevronLeft size={28} strokeWidth={2} aria-hidden="true" />
      </button>
      <button
        className="tasmyaa-research-arrow tasmyaa-research-next"
        type="button"
        aria-label="Next research publication"
        onClick={() => navigate(1)}
      >
        <ChevronRight size={28} strokeWidth={2} aria-hidden="true" />
      </button>
      <span className="tasmyaa-research-sr-only" role="status">
        Research publication {activeIndex + 1} of {featuredResearch.length}:{" "}
        {featuredResearch[activeIndex].title}
      </span>
    </div>
  );
}
