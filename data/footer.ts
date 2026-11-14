export type FooterLink = { label: string; href?: string };
export type FooterLinkGroup = { label: string; links: readonly FooterLink[] };

// Only existing homepage destinations are linked. Other destinations remain placeholders.
export const footerNavigation: readonly FooterLinkGroup[] = [
  {
    label: "Research and updates",
    links: [
      { label: "Publications", href: "#editorial-title-climate-lens" },
      { label: "Press Releases" },
      { label: "Blogs", href: "#blogs-heading" },
      { label: "Join our Events" },
      { label: "Data", href: "#editorial-title-climate-lens" },
      { label: "About Tasmyaa", href: "#impact-heading" },
    ],
  },
  {
    label: "Our organization",
    links: [
      { label: "Our Story", href: "#impact-heading" },
      { label: "Meet our Team", href: "#spotlight-heading" },
      { label: "Work with Us" },
      { label: "Donate" },
      { label: "FAQs" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
];

// All contact details below are explicit placeholders, not real Tasmyaa contact details.
export const footerContact = {
  name: "Tasmyaa",
  address: [
    "Office address (placeholder)",
    "City, postal code, country (to be confirmed)",
  ],
  phone: "+00 000 000 0000",
  email: "hello@tasmyaa.example",
  recruitmentEmail: "careers@tasmyaa.example",
};

export const emailPreferences = [
  "Research and publications",
  "News and events",
  "All updates",
];

export type SocialProfile = {
  name: string;
  label: string;
  style: string;
  href?: string;
};
export const socialProfiles: readonly SocialProfile[] = [
  { name: "Facebook", label: "f", style: "facebook" },
  { name: "X", label: "X", style: "x" },
  { name: "LinkedIn", label: "in", style: "linkedin" },
  { name: "YouTube", label: "YT", style: "youtube" },
  { name: "Instagram", label: "IG", style: "instagram" },
];
