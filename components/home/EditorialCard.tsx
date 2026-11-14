import Image from "next/image";
import type { EditorialCardData } from "@/data/editorialCards";

export default function EditorialCard({ card }: { card: EditorialCardData }) {
  const titleId = `editorial-title-${card.id}`;
  const descriptionId = `editorial-description-${card.id}`;
  const content = (
    <>
      <Image
        src={card.image}
        alt={card.imageAlt}
        fill
        sizes={
          card.placement === "lead" || card.placement === "feature"
            ? "(max-width: 600px) 100vw, (max-width: 900px) 50vw, 39vw"
            : "(max-width: 600px) 100vw, (max-width: 900px) 25vw, 20vw"
        }
        className="tasmyaa-editorial-image"
        style={{ objectPosition: card.imagePosition ?? "center" }}
      />
      <span className="tasmyaa-editorial-overlay" aria-hidden="true" />
      <p className="tasmyaa-editorial-description" id={descriptionId}>
        {card.description}
      </p>
      <div className="tasmyaa-editorial-caption">
        <h2 id={titleId}>{card.title}</h2>
        <p>{card.category}</p>
      </div>
    </>
  );
  const className = `tasmyaa-editorial-card tasmyaa-editorial-${card.placement}`;

  // A card becomes a link only when a destination has been supplied.
  // Static previews remain keyboard-focusable so their descriptions can be revealed.
  return card.href ? (
    <a
      className={className}
      href={card.href}
      aria-labelledby={titleId}
      aria-describedby={descriptionId}
    >
      {content}
    </a>
  ) : (
    <article
      className={className}
      tabIndex={0}
      aria-labelledby={titleId}
      aria-describedby={descriptionId}
    >
      {content}
    </article>
  );
}
