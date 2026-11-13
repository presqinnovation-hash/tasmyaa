import { editorialCards } from "@/data/editorialCards";
import EditorialCard from "./EditorialCard";
import "./EditorialGrid.css";

export default function EditorialGrid() {
  return (
    <section
      className="tasmyaa-editorial-section"
      aria-label="Featured research and perspectives"
    >
      <div className="tasmyaa-editorial-grid">
        {editorialCards.map((card) => (
          <EditorialCard key={card.id} card={card} />
        ))}
      </div>
    </section>
  );
}
