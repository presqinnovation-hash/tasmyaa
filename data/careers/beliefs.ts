export type CareersBelief = {
  id: string;
  heading: string;
  description: string;
};

// Proposed brand statements, not claims of existing programmes or measured achievements.
export const careersBeliefs: readonly CareersBelief[] = [
  {
    id: "learning",
    heading: "We Believe in Learning",
    description:
      "We believe learning creates opportunities for individuals to develop their abilities, gain knowledge and build confidence for the future.",
  },
  {
    id: "practical-skills",
    heading: "We Value Practical Skills",
    description:
      "We encourage learning that connects knowledge with practical application and helps individuals develop skills relevant to real-world needs.",
  },
  {
    id: "diversity",
    heading: "We Embrace Diversity",
    description:
      "We value different backgrounds, experiences, perspectives and ideas. An inclusive learning environment helps people grow together.",
  },
  {
    id: "together",
    heading: "We Grow Together",
    description:
      "We believe development is a continuous journey. Collaboration, guidance and shared learning help individuals and teams progress.",
  },
  {
    id: "improvement",
    heading: "We Believe in Continuous Improvement",
    description:
      "We value curiosity, feedback and the willingness to improve. Every learning experience is an opportunity to develop further.",
  },
  {
    id: "opportunities",
    heading: "We Create Opportunities",
    description:
      "We aim to support a culture where learning and skill development can open pathways to personal and professional growth.",
  },
];
