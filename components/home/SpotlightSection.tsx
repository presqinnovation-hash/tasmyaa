import { Artwork, SectionHeading } from "@/components/common/Ui";
import { spotlight } from "@/data/homepage";

export default function SpotlightSection() {
  return (
    <aside className="spotlight-section" id="spotlight">
      <SectionHeading>Spotlight</SectionHeading>
      <article>
        <Artwork
          name={spotlight.image}
          alt={spotlight.alt}
          sizes="(max-width: 600px) 42vw, 260px"
        />
        <div className="spotlight-copy">
          <h3>{spotlight.title}</h3>
          <p className="spotlight-role">{spotlight.role}</p>
          <p>{spotlight.description}</p>
        </div>
      </article>
    </aside>
  );
}
