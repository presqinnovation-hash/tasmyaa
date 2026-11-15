import { careersBeliefs } from "@/data/careers/beliefs";
import "./WhatWeBelieveSection.css";

export default function WhatWeBelieveSection() {
  return (
    <section
      className="tasmyaa-careers-beliefs"
      aria-labelledby="careers-beliefs-heading"
    >
      <div className="tasmyaa-careers-container">
        <h2 id="careers-beliefs-heading">What We Believe In</h2>
        <div className="tasmyaa-careers-beliefs-grid">
          {careersBeliefs.map((belief) => (
            <article key={belief.id} aria-labelledby={`belief-${belief.id}`}>
              <h3 id={`belief-${belief.id}`}>{belief.heading}</h3>
              <p>{belief.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
