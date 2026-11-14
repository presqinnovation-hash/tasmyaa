import { Mail, MapPin, Phone } from "lucide-react";
import { footerContact } from "@/data/footer";

export default function FooterContact() {
  return (
    <div className="tasmyaa-footer-contact">
      <h2>CONTACT US</h2>
      <address>
        <p>
          {footerContact.name}
          <span className="tasmyaa-footer-placeholder-note">
            Contact information placeholders
          </span>
        </p>
        <p>
          {footerContact.address.map((line) => (
            <span className="tasmyaa-footer-address-line" key={line}>
              {line}
            </span>
          ))}
        </p>
        <div className="tasmyaa-footer-contact-lines">
          <p>
            <Phone size={12} aria-hidden="true" />
            <span>{footerContact.phone}</span>
          </p>
          <p>
            <Mail size={12} aria-hidden="true" />
            <span>{footerContact.email}</span>
          </p>
          <p>
            <Mail size={12} aria-hidden="true" />
            <span>{footerContact.recruitmentEmail}</span>
          </p>
        </div>
      </address>
      <span
        className="tasmyaa-footer-map"
        role="link"
        aria-disabled="true"
        title="Map location to be confirmed"
      >
        <MapPin size={12} aria-hidden="true" />
        View Map
        <span className="tasmyaa-footer-sr-only">
          {" "}
          (location to be confirmed)
        </span>
      </span>
    </div>
  );
}
