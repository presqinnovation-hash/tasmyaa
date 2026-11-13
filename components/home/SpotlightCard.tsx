import Image from "next/image";
import { spotlight } from "@/data/spotlight";

export default function SpotlightCard() {
  return (
    <article className="tasmyaa-spotlight-card">
      <Image
        src={spotlight.image}
        alt={spotlight.imageAlt}
        width={1200}
        height={864}
        sizes="(max-width: 600px) 90vw, (max-width: 900px) 30vw, 25vw"
        className="tasmyaa-spotlight-photo"
      />
      <div className="tasmyaa-spotlight-information">
        <h3>{spotlight.name}</h3>
        <p className="tasmyaa-spotlight-designation">{spotlight.designation}</p>
        <p>{spotlight.biography}</p>
      </div>
    </article>
  );
}
