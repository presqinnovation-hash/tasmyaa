import { ExternalLink } from "lucide-react";
import { careersVideo } from "@/data/careers/content";

export default function CareersVideoSection() {
  return (
    <section
      className="tasmyaa-careers-video-section"
      aria-labelledby="careers-video-heading"
    >
      <div className="tasmyaa-careers-container">
        <h2 id="careers-video-heading">{careersVideo.heading}</h2>
        <p>{careersVideo.description}</p>
        <div className="tasmyaa-careers-video">
          <iframe
            src={careersVideo.embedUrl}
            title="Discover Tasmyaa — supplied culture video"
            loading="lazy"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>
        <a
          href={careersVideo.suppliedUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="tasmyaa-careers-video-link"
        >
          Watch the supplied video on YouTube
          <ExternalLink size={13} aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
