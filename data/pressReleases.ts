export type Announcement = {
  id: string;
  headline: string;
  summary: string;
  publicationDate: string;
  category?: string;
  href: string;
};
// No verified company announcements have been supplied. Do not add fictional items.
export const announcements: readonly Announcement[] = [];

export const pressIdentity = {
  brand: "TASMYAA",
  legalName: "TASMYAA SKILL DEVELOPMENT PRIVATE LIMITED",
  tagline: "Building skills. Creating opportunities. Shaping futures.", // Proposed marketing copy.
};
export const featuredAnnouncement = {
  image: "/images/press/learning.png",
  alt: "Original generated illustration of adult learners collaborating with an instructor, not an actual Tasmyaa event",
  caption:
    "Illustrative learning scene. Not a photograph of a Tasmyaa programme or event.",
};

export type MediaContact = {
  id: string;
  name: string;
  jobTitle: string;
  email: string;
  photo: string;
  photoAlt: string;
};
// Contact cards remain hidden until genuine details and approved photographs are supplied.
export const mediaContacts: readonly MediaContact[] = [];

export type ResourceAction = { label: string; href?: string };
export type MediaResource = {
  id: string;
  image: string;
  imageAlt: string;
  title: string;
  description: string;
  comingSoon: boolean;
  actions?: readonly ResourceAction[];
  download?: { label: string; href: string };
};
export const mediaResources: readonly MediaResource[] = [
  {
    id: "about",
    title: "About Tasmyaa",
    description: "Company overview and background.",
    image: "/images/press/learning.png",
    imageAlt:
      "Illustrative adult learning workshop, not a photograph of company facilities",
    comingSoon: true,
    actions: [{ label: "Learn More" }],
  },
  {
    id: "company-profile",
    title: "Company Profile",
    description: "Information about Tasmyaa Skill Development Private Limited.",
    image: "/images/press/company-profile.svg",
    imageAlt:
      "Neutral editorial placeholder for a forthcoming Tasmyaa company profile",
    comingSoon: true,
    actions: [{ label: "View Profile" }],
  },
  {
    id: "brand",
    title: "Brand Resources",
    description: "Official brand assets and usage guidelines.",
    image: "/images/press/brand-resources.svg",
    imageAlt:
      "TASMYAA text placeholder, not an official downloadable logo or brand asset",
    comingSoon: true,
    actions: [{ label: "Contact Us", href: "/contact" }],
  },
];
