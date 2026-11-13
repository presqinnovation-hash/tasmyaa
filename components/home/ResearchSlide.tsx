import Image from "next/image";
import type { ResearchPublication } from "@/data/featuredResearch";

export default function ResearchSlide({
  publication,
  active,
  index,
  total,
}: {
  publication: ResearchPublication;
  active: boolean;
  index: number;
  total: number;
}) {
  return (
    <div
      className={`tasmyaa-research-slide ${active ? "tasmyaa-research-slide-active" : ""}`}
      role="group"
      aria-roledescription="slide"
      aria-label={`${index + 1} of ${total}`}
      aria-hidden={!active}
    >
      <div className="tasmyaa-research-cover">
        <div className="tasmyaa-research-wordmark">
          tasmyaa<span>IDEAS · EVIDENCE · IMPACT</span>
        </div>
        <p className="tasmyaa-research-edition">
          {publication.category}
          {publication.publicationDate && ` | ${publication.publicationDate}`}
        </p>
        <p className="tasmyaa-research-cover-title">{publication.title}</p>
        <p className="tasmyaa-research-cover-subtitle">
          {publication.coverSubtitle}
        </p>
        <p className="tasmyaa-research-cover-authors">
          {publication.authors.join(", ")}
        </p>
        <div className="tasmyaa-research-photo">
          <Image
            src={publication.coverImage}
            alt={publication.coverImageAlt}
            fill
            sizes="(max-width: 600px) 90vw, (max-width: 900px) 50vw, 34vw"
          />
        </div>
      </div>
      <div className="tasmyaa-research-information">
        <h3>{publication.title}</h3>
        <p className="tasmyaa-research-authors">
          {publication.authors.join(", ")}
        </p>
        <p className="tasmyaa-research-description">
          {publication.description}
        </p>
        <div className="tasmyaa-research-brand-dots" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
      </div>
    </div>
  );
}
