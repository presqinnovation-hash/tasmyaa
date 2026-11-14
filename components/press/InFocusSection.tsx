import { announcements } from "@/data/pressReleases";
import FeaturedAnnouncement from "./FeaturedAnnouncement";
import AnnouncementList from "./AnnouncementList";
import MediaContactPanel from "./MediaContactPanel";

export default function InFocusSection() {
  return (
    <section className="tasmyaa-press-focus" aria-labelledby="in-focus-heading">
      <div className="tasmyaa-press-feature">
        <h2 id="in-focus-heading">In Focus</h2>
        <div className="tasmyaa-press-feature-grid">
          <FeaturedAnnouncement />
          <AnnouncementList items={announcements} />
        </div>
      </div>
      <MediaContactPanel />
    </section>
  );
}
