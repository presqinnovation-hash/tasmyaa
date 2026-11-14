import Image from "next/image";
import Link from "next/link";
import { Download } from "lucide-react";
import type { MediaResource } from "@/data/pressReleases";

export default function MediaResourceCard({
  resource,
}: {
  resource: MediaResource;
}) {
  return (
    <article className="tasmyaa-press-resource">
      <div className="tasmyaa-press-resource-image">
        <Image
          src={resource.image}
          alt={resource.imageAlt}
          fill
          sizes="(max-width:600px) 100vw, (max-width:1000px) 50vw, 33vw"
        />
      </div>
      <h3>{resource.title}</h3>
      <p>{resource.description}</p>
      {resource.comingSoon && (
        <span
          className="tasmyaa-press-coming-soon"
          id={`resource-status-${resource.id}`}
        >
          Coming Soon
        </span>
      )}
      <div className="tasmyaa-press-resource-actions">
        {resource.actions?.map((action) =>
          action.href ? (
            <Link
              className="tasmyaa-press-action"
              key={action.label}
              href={action.href}
            >
              {action.label}
            </Link>
          ) : (
            <button
              className="tasmyaa-press-action"
              type="button"
              disabled
              aria-describedby={
                resource.comingSoon
                  ? `resource-status-${resource.id}`
                  : undefined
              }
              key={action.label}
            >
              {action.label}
            </button>
          ),
        )}
        {resource.download && (
          <a
            className="tasmyaa-press-action"
            href={resource.download.href}
            download
          >
            {resource.download.label}
            <Download size={15} aria-hidden="true" />
          </a>
        )}
      </div>
    </article>
  );
}
