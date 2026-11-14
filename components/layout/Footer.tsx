import { footerNavigation } from "@/data/footer";
import FooterNavigation from "./footer/FooterNavigation";
import FooterContact from "./footer/FooterContact";
import NewsletterForm from "./footer/NewsletterForm";
import SocialLinks from "./footer/SocialLinks";
import CopyrightBar from "./footer/CopyrightBar";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="tasmyaa-footer" aria-label="Tasmyaa footer">
      <div className="tasmyaa-footer-container tasmyaa-footer-grid">
        {footerNavigation.map((group) => (
          <FooterNavigation key={group.label} group={group} />
        ))}
        <FooterContact />
        <div className="tasmyaa-footer-newsletter">
          <h2>SIGN UP FOR OUR EMAILERS</h2>
          <NewsletterForm />
          <SocialLinks />
        </div>
      </div>
      <CopyrightBar />
    </footer>
  );
}
