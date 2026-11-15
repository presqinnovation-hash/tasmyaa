import Link from "next/link";
import { CalendarDays, Newspaper } from "lucide-react";
import type { Announcement } from "@/data/pressReleases";

export default function AnnouncementList({
  items,
}: {
  items: readonly Announcement[];
}) {
  return (
    <div className="tasmyaa-press-announcements">
      <h3>Latest Announcements</h3>
      {items.length ? (
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              <Link href={item.href}>{item.headline}</Link>
              <p>{item.summary}</p>
              <div className="tasmyaa-press-announcement-meta">
                <CalendarDays size={13} aria-hidden="true" />
                <time dateTime={item.publicationDate}>
                  {item.publicationDate}
                </time>
                {item.category && <span>{item.category}</span>}
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <div className="tasmyaa-press-announcement-empty">
          <Newspaper size={35} aria-hidden="true" />
          <p>
            No press releases have been published yet. Please check back for
            updates.
          </p>
        </div>
      )}
    </div>
  );
}
