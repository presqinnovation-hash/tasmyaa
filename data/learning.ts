export type LearningTheme = { id: string; title: string; description: string; image: string; alt: string };
// Proposed content themes, not confirmed services, programmes, or certifications.
export const learningThemes: readonly LearningTheme[] = [
  { id: "skills", title: "Skill development", description: "Exploring how learning can connect knowledge with practical capability.", image: "/images/learning/workshop.png", alt: "Illustrative collaborative learning workshop" },
  { id: "digital", title: "Digital learning", description: "Considering the role of digital tools in a changing learning landscape.", image: "/images/learning/digital.png", alt: "Illustrative digital learning environment" },
  { id: "practice", title: "Practical workshops", description: "A perspective on learning through observation, exploration and practice.", image: "/images/learning/practical.png", alt: "Illustrative hands-on training environment" },
  { id: "professional", title: "Professional development", description: "Reflecting on the habits and capabilities that support continued learning.", image: "/images/learning/digital.png", alt: "Illustrative group working together at a computer" },
  { id: "career", title: "Career preparation", description: "Thinking about the connection between individual growth and future opportunities.", image: "/images/learning/workshop.png", alt: "Illustrative instructor and learners in conversation" },
  { id: "resources", title: "Educational resources", description: "Exploring ideas that can make knowledge clearer and easier to navigate.", image: "/images/learning/practical.png", alt: "Illustrative learning materials in a practical workshop" },
];
