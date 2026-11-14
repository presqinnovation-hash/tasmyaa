import { MapPin } from "lucide-react";
import { contactMap } from "@/data/contact";

export default function ContactMap() {
  return (
    <section
      className="tasmyaa-contact-location"
      aria-labelledby="location-heading"
    >
      <h2 id="location-heading">{contactMap.title}</h2>
      <p className="tasmyaa-contact-map-note" id="map-location-note">
        <MapPin size={17} aria-hidden="true" />
        <span>{contactMap.note}</span>
      </p>
      <div className="tasmyaa-contact-map">
        <iframe
          src={contactMap.embedUrl}
          title={contactMap.iframeTitle}
          aria-describedby="map-location-note"
          width="100%"
          height="410"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
}
