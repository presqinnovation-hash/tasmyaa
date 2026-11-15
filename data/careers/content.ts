export type CareersSlide = {
  id: string;
  image: string;
  alt: string;
  heading: string;
  description: string;
  position?: string;
};
// Proposed marketing messages and original illustrative images, not actual employees/facilities.
export const careersHeroSlides: readonly CareersSlide[] = [
  {
    id: "future",
    image: "/images/press/learning.png",
    alt: "Illustrative adult learners collaborating in a professional learning environment",
    heading: "Build your future with Tasmyaa",
    description: "Explore opportunities to learn, contribute and grow.",
    position: "center 46%",
  },
  {
    id: "meaning",
    image: "/images/careers/collaboration.png",
    alt: "Illustrative group sharing ideas in a collaborative workshop, not actual Tasmyaa staff",
    heading: "Be part of something meaningful",
    description:
      "Bring your ideas, abilities and ambition to a growing organisation.",
    position: "center",
  },
  {
    id: "growth",
    image: "/images/careers/practice.png",
    alt: "Illustrative practical learning session, not a Tasmyaa programme or workplace",
    heading: "Grow through opportunity",
    description:
      "Discover a workplace that values learning, development and collaboration.",
    position: "center 45%",
  },
];
export const careersLifeSlides: readonly CareersSlide[] = [
  {
    id: "collaboration",
    image: "/images/careers/collaboration.png",
    alt: "Illustrative professionals collaborating around a workshop table",
    heading: "Ideas grow through conversation.",
    description:
      "Illustrative collaboration scene — not a photograph of Tasmyaa employees or offices.",
  },
  {
    id: "practice",
    image: "/images/careers/practice.png",
    alt: "Illustrative learners and an instructor examining a practical demonstration",
    heading: "Learning takes many forms.",
    description:
      "Illustrative learning scene — not a photograph of a Tasmyaa training facility.",
  },
  {
    id: "learning",
    image: "/images/press/learning.png",
    alt: "Illustrative instructor and adult learners working together",
    heading: "A shared space for new possibilities.",
    description:
      "Illustrative professional learning scene — not a Tasmyaa company event.",
  },
];
export const careersVideo = {
  heading: "Discover Tasmyaa",
  description:
    "Get to know Tasmyaa, our approach to learning, development and opportunities.",
  suppliedUrl: "https://youtu.be/xeXV1KoX034?si=tsR6kGqYBBaJXBcv",
  embedUrl: "https://www.youtube.com/embed/xeXV1KoX034",
};
export type ApproachStepData = {
  id:
    | "identify"
    | "assess"
    | "design"
    | "learn"
    | "practise"
    | "develop"
    | "grow";
  title: string;
  description: string;
};
// Proposed website descriptions; not a claim of an established training methodology.
export const approachSteps: readonly ApproachStepData[] = [
  {
    id: "identify",
    title: "Identify",
    description:
      "Understand learner needs, existing abilities and development goals.",
  },
  {
    id: "assess",
    title: "Assess",
    description:
      "Identify skill gaps and determine suitable learning objectives.",
  },
  {
    id: "design",
    title: "Design",
    description:
      "Structure relevant learning experiences and development pathways.",
  },
  {
    id: "learn",
    title: "Learn",
    description:
      "Encourage structured learning through appropriate educational resources.",
  },
  {
    id: "practise",
    title: "Practise",
    description: "Apply knowledge through practical exercises and activities.",
  },
  {
    id: "develop",
    title: "Develop",
    description:
      "Strengthen abilities through continued learning and feedback.",
  },
  {
    id: "grow",
    title: "Grow",
    description: "Support continuous improvement and future opportunities.",
  },
];
export const careersRotationMs = 4500;
export const positionsIntroduction =
  "Explore opportunities to work with Tasmyaa. We welcome people who are interested in learning, development and contributing to meaningful work.";
