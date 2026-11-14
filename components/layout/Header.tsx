import { ChevronDown, Menu, Search, Sprout } from "lucide-react";
import "./Header.css";

const navigation = [
  "Publications",
  "Our Story",
  "Meet our Team",
  "Join our Events",
  "Blogs",
  "Press Releases",
  "Work with Us",
  "Contact",
];
const themes = [
  "Clean energy",
  "Climate resilience",
  "Water & ecosystems",
  "Sustainable cities",
];

function NavigationItems() {
  return (
    <>
      <details className="tasmyaa-header-research">
        <summary>
          Research <ChevronDown size={14} aria-hidden="true" />
        </summary>
        <div className="tasmyaa-header-dropdown">
          {themes.map((theme) => (
            <button type="button" aria-disabled="true" key={theme}>
              {theme}
            </button>
          ))}
        </div>
      </details>
      {navigation.map((label) => (
        <button type="button" aria-disabled="true" key={label}>
          {label}
        </button>
      ))}
      <button
        type="button"
        aria-disabled="true"
        className="tasmyaa-header-donate"
      >
        Donate
      </button>
    </>
  );
}

export default function Header() {
  return (
    <header id="top" className="tasmyaa-header-header">
      <div className="tasmyaa-header-masthead">
        <a
          className="tasmyaa-header-logo"
          href="#top"
          aria-label="Tasmyaa home"
        >
          <Sprout className="tasmyaa-header-brandIcon" aria-hidden="true" />
          <span>
            tasmyaa<small>IDEAS · EVIDENCE · IMPACT</small>
          </span>
        </a>
        <div className="tasmyaa-header-organization">
          <p>TASMYAA — RESEARCH FOR PEOPLE AND THE PLANET</p>
          <span>INTEGRATED | COLLABORATIVE | INDEPENDENT</span>
        </div>
      </div>
      <div className="tasmyaa-header-navbar">
        <div className="tasmyaa-header-navInner">
          <nav
            className="tasmyaa-header-desktopNav"
            aria-label="Primary navigation"
          >
            <NavigationItems />
          </nav>
          <details className="tasmyaa-header-mobileNav">
            <summary>
              <Menu
                className="tasmyaa-header-menuIcon"
                size={20}
                aria-hidden="true"
              />{" "}
              Menu
            </summary>
            <nav aria-label="Mobile navigation">
              <NavigationItems />
            </nav>
          </details>
          <button
            type="button"
            aria-disabled="true"
            className="tasmyaa-header-search"
            aria-label="Search"
          >
            <Search size={20} aria-hidden="true" />
          </button>
        </div>
      </div>
    </header>
  );
}
