import { approachSteps } from "@/data/careers/content";
import ApproachStep from "./ApproachStep";

export default function OurApproachSection() {
  return (
    <section
      className="tasmyaa-careers-approach-section"
      aria-labelledby="careers-approach-heading"
    >
      <div className="tasmyaa-careers-container">
        <h2 id="careers-approach-heading">Our Approach to Skill Development</h2>
        <p className="tasmyaa-careers-approach-note">
          A proposed approach for this website, not a claim of an established
          Tasmyaa training methodology.
        </p>
        <ol className="tasmyaa-careers-approach-grid">
          {approachSteps.map((step, index) => (
            <ApproachStep key={step.id} step={step} number={index + 1} />
          ))}
        </ol>
      </div>
    </section>
  );
}
