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

function SearchIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      aria-hidden="true"
    >
      <circle cx="10" cy="10" r="6" />
      <path d="m15 15 5 5" />
    </svg>
  );
}

function NavigationItems() {
  return (
    <>
      <details className="tasmyaa-header-research">
        <summary>
          Research <span aria-hidden="true">⌄</span>
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
          <svg viewBox="0 0 36 44" aria-hidden="true">
            <path
              d="M18 40V19M18 26C4 27 2 15 3 8c13-1 18 7 15 18Z"
              fill="none"
              stroke="#849987"
              strokeWidth="2.5"
            />
            <path d="M18 19C18 7 27 2 34 3c2 10-4 18-16 16Z" fill="#159dca" />
          </svg>
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
              <span aria-hidden="true">☰</span> Menu
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
            <SearchIcon />
          </button>
        </div>
      </div>
    </header>
  );
}
