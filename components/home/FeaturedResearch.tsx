import { featuredResearch } from "@/data/homepage";
import { Artwork, SectionHeading } from "@/components/common/Ui";
export default function FeaturedResearch() {
  return (
    <section className="featured-section" id="research">
      <SectionHeading>Featured Research</SectionHeading>
      <div className="research-feature">
        <div className="research-cover">
          <div className="report-brand">
            tasmyaa<span>RESEARCH & INSIGHTS</span>
          </div>
          <p className="report-date">
            {featuredResearch.type} | {featuredResearch.date}
          </p>
          <h3>{featuredResearch.title}</h3>
          <p className="report-subtitle">{featuredResearch.subtitle}</p>
          <Artwork
            name="solar.svg"
            alt="Original illustration of a solar energy landscape"
          />
          <span className="cover-chevron" aria-hidden="true">
            ‹
          </span>
        </div>
        <div className="research-description">
          <h3>{featuredResearch.title}</h3>
          <p className="research-authors">{featuredResearch.authors}</p>
          <p>{featuredResearch.description}</p>
          <div
            className="research-dots"
            aria-label="First featured report, static preview"
          >
            <i />
            <i />
            <i />
          </div>
          <span className="research-chevron" aria-hidden="true">
            ›
          </span>
        </div>
      </div>
    </section>
  );
}
