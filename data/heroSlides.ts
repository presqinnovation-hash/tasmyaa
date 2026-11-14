export type HeroSlide = {
  id: string;
  headline: string;
  image: string;
  alt: string;
  position: string;
};

// Original generated editorial assets; these depict fictional scenes, not real Tasmyaa events.
export const heroSlides: readonly HeroSlide[] = [
  {
    id: "climate-dialogue",
    headline:
      "A shared transition: Putting people at the heart of climate action",
    image: "/images/hero-climate-forum.png",
    alt: "Fictional international delegates discussing climate policy at a roundtable",
    position: "center 48%",
  },
  {
    id: "clean-energy",
    headline:
      "Powering possibility: Building a cleaner, more resilient energy future",
    image: "/images/hero-clean-energy.png",
    alt: "Solar panels and distant wind turbines across a sunlit rural landscape",
    position: "center 58%",
  },
  {
    id: "shared-mobility",
    headline:
      "Everyday choices, collective change: Moving towards a sustainable tomorrow",
    image: "/images/hero-shared-mobility.png",
    alt: "Fictional commuters sharing a car and talking with a colleague outdoors",
    position: "center 48%",
  },
];

export const HERO_ROTATION_MS = 2000;
