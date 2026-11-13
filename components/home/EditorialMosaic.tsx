import { highlights } from "@/data/homepage";
import { Artwork } from "@/components/common/Ui";
export default function EditorialMosaic() {
  return (
    <section
      className="editorial-mosaic"
      id="publications"
      aria-label="Latest publications and research themes"
    >
      {highlights.map((item) => (
        <article key={item.id} className={`editorial-tile ${item.className}`}>
          <Artwork name={item.image} alt={item.alt} />
          <div className="tile-caption">
            <h2>{item.title}</h2>
            <p>{item.category}</p>
          </div>
        </article>
      ))}
    </section>
  );
}
