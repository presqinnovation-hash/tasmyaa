import { navigation } from "@/data/homepage";
import { Brand, Container } from "@/components/common/Ui";
function ResearchMenu() {
  return (
    <details className="research-dropdown">
      <summary>
        Research <span aria-hidden="true">⌄</span>
      </summary>
      <div className="mega-menu">
        <div>
          <p>OUR RESEARCH</p>
          <strong>
            Evidence for a<br />
            sustainable future.
          </strong>
          <span>
            Explore the connections between people, policy and the planet.
          </span>
        </div>
        <div className="mega-links">
          {navigation[0].items?.map((label) => (
            <a href="#research" key={label}>
              {label}
              <span>↗</span>
            </a>
          ))}
        </div>
      </div>
    </details>
  );
}
export default function Header() {
  return (
    <header id="top">
      <div className="masthead">
        <Brand />
        <div className="masthead-title">
          <p>RESEARCH FOR PEOPLE, ENERGY AND THE PLANET</p>
          <span>INDEPENDENT | COLLABORATIVE | FORWARD-LOOKING</span>
        </div>
      </div>
      <div className="navigation-bar">
        <Container className="navigation-inner">
          <nav className="desktop-nav" aria-label="Primary navigation">
            <ResearchMenu />
            {navigation.slice(1).map((item) => (
              <a key={item.label} href={item.href}>
                {item.label}
              </a>
            ))}
            <a className="donate-link" href="#contact">
              Support Us
            </a>
          </nav>
          <button
            className="search-button"
            type="button"
            aria-label="Search (visual preview only)"
            aria-disabled="true"
            title="Search preview only"
          >
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
          </button>
          <details className="mobile-navigation">
            <summary>
              <span className="hamburger" aria-hidden="true">
                ☰
              </span>{" "}
              Menu
            </summary>
            <nav aria-label="Mobile navigation">
              {navigation.map((item) =>
                item.items ? (
                  <details key={item.label}>
                    <summary>
                      {item.label} <span>+</span>
                    </summary>
                    {item.items.map((label) => (
                      <a href={item.href} key={label}>
                        {label}
                      </a>
                    ))}
                  </details>
                ) : (
                  <a key={item.label} href={item.href}>
                    {item.label}
                  </a>
                ),
              )}
              <a href="#contact">Support Us</a>
            </nav>
          </details>
        </Container>
      </div>
    </header>
  );
}
