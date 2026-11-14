export type ResearchPublication = {
  id: string;
  title: string;
  authors: readonly string[];
  description: string;
  coverImage: string;
  coverImageAlt: string;
  coverSubtitle: string;
  category: string;
  publicationDate?: string;
};

// Illustrative Tasmyaa publications and fictional author names for this UI preview.
export const featuredResearch: readonly ResearchPublication[] = [
  {
    id: "clean-cooking",
    title: "A cleaner kitchen. A healthier future.",
    authors: ["Ananya Rao", "Kabir Sen"],
    description:
      "Clean cooking is about more than access. This research explores how affordability, everyday habits and reliable fuel supplies can help rural households make a lasting transition to healthier kitchens.",
    coverImage: "/images/research/clean-cooking.png",
    coverImageAlt:
      "Original generated image of a woman preparing a meal in a rural kitchen",
    coverSubtitle:
      "Understanding everyday choices in the transition to clean cooking",
    category: "Report",
    publicationDate: "June 2026",
  },
  {
    id: "energy-possibility",
    title: "Powering a shared tomorrow",
    authors: ["Meera Shah", "Arjun Nair"],
    description:
      "An inclusive energy transition starts with people. We explore practical pathways to reliable, affordable clean power and the opportunities for communities to shape a more resilient energy future.",
    coverImage: "/images/hero-clean-energy.png",
    coverImageAlt:
      "Solar panels and wind turbines across a rural landscape at golden hour",
    coverSubtitle:
      "Pathways to a reliable, affordable and inclusive energy future",
    category: "Research brief",
    publicationDate: "May 2026",
  },
  {
    id: "greener-communities",
    title: "Small steps. Lasting change.",
    authors: ["Isha Menon", "Dev Patel"],
    description:
      "Schools can be catalysts for local climate action. This study looks at the everyday practices that reduce waste, build environmental awareness and bring communities together around a shared purpose.",
    coverImage: "/images/editorial/school.png",
    coverImageAlt:
      "Original generated image of a volunteer taking part in a school sustainability workshop",
    coverSubtitle: "Building sustainable habits in schools and communities",
    category: "Working paper",
    publicationDate: "May 2026",
  },
];
