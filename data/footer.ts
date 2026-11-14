import { company } from "./company";
export type FooterLink = { label: string; href?: string };
export type FooterLinkGroup = { label: string; links: readonly FooterLink[] };
export const footerNavigation: readonly FooterLinkGroup[] = [
  { label: "Explore TASMYAA", links: [
    { label: "About Us", href: "#about" }, { label: "Programmes", href: "#programmes" },
    { label: "Learning Resources", href: "#learning" }, { label: "Latest Updates", href: "#updates" },
    { label: "Contact Us", href: "#contact" },
  ] },
];
export const footerContact = { name: company.legalName, address: company.address, cin: company.cin };
export const emailPreferences = ["Programme information", "Learning resources", "Company updates"];
export type SocialProfile = { name: string; label: string; style: string; href?: string };
// No verified social URLs supplied. Keep the existing reusable SocialLinks component hidden.
export const socialProfiles: readonly SocialProfile[] = [];
