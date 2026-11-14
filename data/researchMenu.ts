export type ResearchMenuLink = { label: string; href?: string };
export type ResearchMenuColumn = {
  heading: string;
  links: readonly ResearchMenuLink[];
};

// Destinations can be supplied when the research pages exist. No routes are invented here.
export const researchMenuColumns: readonly ResearchMenuColumn[] = [
  {
    heading: "Transformations",
    links: [
      { label: "Low-Carbon Economy" },
      { label: "Energy Transitions" },
      { label: "Power Markets" },
      { label: "Industrial Sustainability" },
      { label: "Sustainable Livelihoods" },
    ],
  },
  {
    heading: "Quality of life",
    links: [
      { label: "Clean Air" },
      { label: "Sustainable Water" },
      { label: "Sustainable Food Systems" },
      { label: "Sustainable Cooling" },
      { label: "Sustainable Mobility" },
    ],
  },
  {
    heading: "Enablers",
    links: [
      { label: "Sustainable Finance" },
      { label: "Technology Futures" },
      { label: "Circular Economy" },
      { label: "Climate Resilience" },
      { label: "International Cooperation" },
    ],
  },
  {
    heading: "Special Initiatives",
    links: [
      { label: "CEEW Green Finance Centre" },
      { label: "Powering Livelihoods" },
      { label: "Emerging Economies" },
    ],
  },
];
