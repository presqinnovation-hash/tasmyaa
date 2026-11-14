export type Programme = {
  id: string; title: string; description: string; image: string; imageAlt: string;
  duration: string; eligibility: string; learningOutcomes: readonly string[];
};
// Populate only after verified programme details are supplied. No invented course offerings.
export const programmes: readonly Programme[] = [];
