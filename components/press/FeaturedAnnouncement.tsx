import Image from "next/image";
import { featuredAnnouncement } from "@/data/pressReleases";

export default function FeaturedAnnouncement() {
  return (
    <figure className="tasmyaa-press-featured-image">
      <div>
        <Image
          src={featuredAnnouncement.image}
          alt={featuredAnnouncement.alt}
          fill
          sizes="(max-width:600px) 100vw, (max-width:1000px) 65vw, 38vw"
          priority
        />
      </div>
      <figcaption>{featuredAnnouncement.caption}</figcaption>
    </figure>
  );
}
