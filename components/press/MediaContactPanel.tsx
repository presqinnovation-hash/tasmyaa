import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { mediaContacts, type MediaContact } from "@/data/pressReleases";

export function MediaContactCard({ contact }: { contact: MediaContact }) {
  return (
    <article className="tasmyaa-press-person">
      <Image
        src={contact.photo}
        alt={contact.photoAlt}
        width={100}
        height={100}
      />
      <h3>{contact.name}</h3>
      <p>{contact.jobTitle}</p>
      <a href={`mailto:${contact.email}`}>{contact.email}</a>
    </article>
  );
}
export default function MediaContactPanel() {
  return (
    <aside
      className="tasmyaa-press-contact"
      aria-labelledby="media-team-heading"
    >
      <h2 id="media-team-heading">Contact our Media Team</h2>
      {mediaContacts.length ? (
        mediaContacts.map((contact) => (
          <MediaContactCard key={contact.id} contact={contact} />
        ))
      ) : (
        <div className="tasmyaa-press-contact-empty">
          <div className="tasmyaa-press-contact-icon">
            <MessageCircle size={28} aria-hidden="true" />
          </div>
          <h3>Media enquiries</h3>
          <p>
            For media-related enquiries, please contact the Tasmyaa team through
            the Contact page.
          </p>
          <Link className="tasmyaa-press-contact-link" href="/contact">
            Contact Us
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      )}
    </aside>
  );
}
