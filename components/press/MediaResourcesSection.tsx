import { mediaResources } from "@/data/pressReleases";
import MediaResourceCard from "./MediaResourceCard";

export default function MediaResourcesSection() {
  return (
    <section
      className="tasmyaa-press-resources"
      aria-labelledby="media-resources-heading"
    >
      <div className="tasmyaa-press-container">
        <h2 id="media-resources-heading">Media Resources</h2>
        <div className="tasmyaa-press-resources-grid">
          {mediaResources.map((resource) => (
            <MediaResourceCard key={resource.id} resource={resource} />
          ))}
        </div>
      </div>
    </section>
  );
}
