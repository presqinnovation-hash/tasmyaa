import { ArrowUpRight, MapPin } from "lucide-react";
import { isValidApplicationUrl, type Position } from "@/data/careers/positions";

export default function PositionCard({ position }: { position: Position }) {
  return (
    <article className="tasmyaa-careers-position-card">
      <h3>{position.title}</h3>
      <p className="tasmyaa-careers-position-type">
        {position.department} · {position.employmentType}
      </p>
      <p className="tasmyaa-careers-position-location">
        <MapPin size={14} aria-hidden="true" />
        {position.location}
      </p>
      <p>{position.description}</p>
      {isValidApplicationUrl(position.applicationUrl) && (
        <a href={position.applicationUrl}>
          View application
          <ArrowUpRight size={15} aria-hidden="true" />
        </a>
      )}
    </article>
  );
}
