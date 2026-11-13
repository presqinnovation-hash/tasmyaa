import { Container } from "@/components/common/Ui";
import { footerLinks } from "@/data/homepage";
export default function Footer() {
  return (
    <footer id="contact">
      <Container className="footer-grid">
        {footerLinks.map((group, i) => (
          <nav
            key={i}
            aria-label={i === 0 ? "Research and updates" : "About Tasmyaa"}
          >
            {group.map((link) => (
              <a key={link.label} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>
        ))}
        <div className="footer-contact">
          <h2>CONTACT US</h2>
          <p>
            Tasmyaa
            <br />
            Research for people, energy and the planet
            <br />
            New Delhi, India
          </p>
          <p>
            Contact details coming soon
            <br />
            hello@tasmyaa.example
          </p>
          <span className="footer-accent">⌖ New Delhi</span>
        </div>
        <div className="footer-newsletter" id="updates">
          <h2>SIGN UP FOR OUR EMAILERS</h2>
          <div className="newsletter-fields">
            <label className="sr-only" htmlFor="email">
              Email address
            </label>
            <input
              id="email"
              type="email"
              placeholder="Email"
              autoComplete="email"
            />
            <label className="sr-only" htmlFor="emailer">
              Select emailer
            </label>
            <select id="emailer" defaultValue="">
              <option value="" disabled>
                Select Emailer
              </option>
              <option>Research & publications</option>
              <option>News & events</option>
              <option>All updates</option>
            </select>
            <button
              type="button"
              aria-disabled="true"
              title="Subscription UI preview only"
            >
              SUBSCRIBE
            </button>
            <p className="newsletter-note">
              UI preview only. No email is submitted.
            </p>
          </div>
          <h2 className="connect-title">CONNECT WITH TASMYAA</h2>
          <div
            className="social-links"
            aria-label="Social media visual previews"
          >
            {["f", "𝕏", "in", "▶", "◎"].map((label, i) => (
              <span
                key={label}
                role="img"
                aria-label={
                  ["Facebook", "X", "LinkedIn", "YouTube", "Instagram"][i]
                }
              >
                {label}
              </span>
            ))}
          </div>
        </div>
      </Container>
      <div className="copyright">
        <Container>
          © 2026 Tasmyaa. All rights reserved.{" "}
          <span>Original editorial illustrations · Homepage concept</span>
        </Container>
      </div>
    </footer>
  );
}
