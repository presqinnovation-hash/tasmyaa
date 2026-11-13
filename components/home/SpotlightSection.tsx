import SpotlightCard from "./SpotlightCard";

export default function SpotlightSection() {
  return (
    <aside
      className="tasmyaa-spotlight-column"
      aria-labelledby="spotlight-heading"
    >
      <h2 id="spotlight-heading">Spotlight</h2>
      <SpotlightCard />
    </aside>
  );
}
