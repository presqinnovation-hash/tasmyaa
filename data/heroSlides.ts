export type HeroSlide = { id: string; headline: string; image: string; alt: string; position: string };
// Original generated learning imagery. These are illustrative scenes, not Tasmyaa events.
export const heroSlides: readonly HeroSlide[] = [
  { id: "learning", headline: "Learning begins with possibility.", image: "/images/learning/workshop.png", alt: "Illustrative scene of adult learners collaborating with an instructor in a bright training room", position: "60% center" },
  { id: "digital", headline: "New perspectives. New possibilities.", image: "/images/learning/digital.png", alt: "Illustrative scene of adult trainees collaborating in a digital learning environment", position: "center" },
  { id: "practical", headline: "Ideas take shape through practice.", image: "/images/learning/practical.png", alt: "Illustrative scene of learners exploring a demonstration assembly with an instructor", position: "center" },
];
export const heroCopy = {
  eyebrow: "LEARNING. SKILLS. POSSIBILITIES.",
  heading: "Building skills for a better tomorrow.",
  description: "Tasmyaa Skill Development Private Limited is focused on creating opportunities through learning and skill development.",
};
// Preserve the approved hero's two-second automatic rotation and pause/manual controls.
export const HERO_ROTATION_MS = 2000;
