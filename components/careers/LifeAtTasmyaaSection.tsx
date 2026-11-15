import { careersLifeSlides } from "@/data/careers/content";
import CareersCarousel from "./CareersCarousel";

export default function LifeAtTasmyaaSection() {
  return (
    <section
      className="tasmyaa-careers-life-section"
      aria-labelledby="careers-life-heading"
    >
      <div className="tasmyaa-careers-container">
        <h2 id="careers-life-heading">Life at Tasmyaa</h2>
        <p className="tasmyaa-careers-life-note">
          A visual perspective on learning and collaboration. These illustrative
          scenes do not depict Tasmyaa’s actual workplace.
        </p>
      </div>
      <CareersCarousel
        slides={careersLifeSlides}
        label="Life at Tasmyaa"
        variant="life"
      />
    </section>
  );
}
