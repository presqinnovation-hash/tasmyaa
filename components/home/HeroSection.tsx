import { Artwork } from "@/components/common/Ui";
import { hero } from "@/data/homepage";

export default function HeroSection() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <Artwork name={hero.image} alt={hero.alt} priority sizes="100vw" />
      <div className="hero-caption">
        <h1 id="hero-title">{hero.title}</h1>
        <div
          className="hero-indicators"
          aria-label="Slide 1 of 3, visual preview"
        >
          <span className="is-active" />
          <span />
          <span />
        </div>
      </div>
    </section>
  );
}
