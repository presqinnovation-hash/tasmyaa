export type EditorialCardData = {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  imageAlt: string;
  placement:
    | "lead"
    | "upperMiddle"
    | "upperRight"
    | "lowerLeft"
    | "lowerMiddle"
    | "feature";
  imagePosition?: string;
  href?: string;
};

// Original mock editorial content. Generated photographs depict illustrative scenes.
// Add href only when a real destination exists; cards are otherwise focusable previews.
export const editorialCards: readonly EditorialCardData[] = [
  {
    id: "climate-lens",
    title: "Climate Lens: Evidence for a more resilient future",
    category: "TOOL",
    description:
      "A new perspective on climate risk, connecting local insights with environmental evidence to help communities plan for a changing world.",
    image: "/images/editorial/climate-lens.svg",
    imageAlt:
      "Original Climate Lens graphic on a black background, created for Tasmyaa",
    placement: "lead",
  },
  {
    id: "everyday-planet",
    title: "Our everyday planet",
    category: "ILLUSTRATED SERIES",
    description:
      "Exploring the connections between our food, water, energy and everyday choices.",
    image: "/images/editorial/everyday-planet.svg",
    imageAlt:
      "Original illustration of energy, water and nature signposts in a green landscape",
    placement: "upperMiddle",
  },
  {
    id: "climate-intelligence",
    title: "New intelligence for a changing climate",
    category: "REPORT",
    description:
      "How emerging technologies can support practical climate solutions.",
    image: "/images/hero-clean-energy.png",
    imageAlt: "Solar panels across a sunlit rural landscape",
    placement: "upperRight",
    imagePosition: "center 60%",
  },
  {
    id: "greener-schools",
    title: "A practical guide to greener schools",
    category: "MANUAL",
    description:
      "Small steps for reducing waste and inspiring change across school communities.",
    image: "/images/editorial/school.png",
    imageAlt:
      "Original generated image of a volunteer wearing gardening gloves in a school courtyard",
    placement: "lowerLeft",
    imagePosition: "center 40%",
  },
  {
    id: "digital-future",
    title: "Building a cleaner digital future",
    category: "REPORT",
    description:
      "Rethinking the energy footprint of our growing digital infrastructure.",
    image: "/images/editorial/digital.png",
    imageAlt:
      "Original generated image of a microprocessor with a leaf emblem on a copper circuit board",
    placement: "lowerMiddle",
  },
  {
    id: "shared-future",
    title: "Small choices. A shared future.",
    category: "ISSUE BRIEF",
    description:
      "From the journeys we share to the energy we use, everyday choices can open new pathways to a more sustainable, inclusive future.",
    image: "/images/hero-shared-mobility.png",
    imageAlt:
      "Original generated image of commuters sharing a car and talking with a colleague",
    placement: "feature",
    imagePosition: "center 48%",
  },
];
