import { ArrowUpRight, BookOpen, MapPin, Menu, X } from "lucide-react";
import { company, primaryNavigation } from "@/data/company";
import "./Header.css";

export default function Header() {
  return <header className="site-header">
    <div className="site-header-legal"><div className="container"><span>{company.legalName}</span><span><MapPin size={12} aria-hidden="true"/>Ranchi, Jharkhand</span></div></div>
    <div className="container site-header-main"><a className="site-brand" href="#top" aria-label="TASMYAA home"><span className="site-brand-mark"><BookOpen size={25} aria-hidden="true"/></span><span>{company.brand}<small>LEARNING & OPPORTUNITIES</small></span></a>
      <nav className="site-desktop-nav" aria-label="Primary navigation">{primaryNavigation.map(link => <a href={link.href} key={link.label}>{link.label}</a>)}<a className="button button-small" href="#contact">Enquire Now<ArrowUpRight size={15} aria-hidden="true"/></a></nav>
      <details className="site-mobile-nav"><summary aria-label="Toggle navigation"><Menu className="menu-open-icon" size={24} aria-hidden="true"/><X className="menu-close-icon" size={24} aria-hidden="true"/></summary><nav aria-label="Mobile navigation">{primaryNavigation.map(link => <a key={link.label} href={link.href}>{link.label}</a>)}<a className="button button-small" href="#contact">Enquire Now<ArrowUpRight size={15} aria-hidden="true"/></a></nav></details>
    </div>
  </header>;
}
