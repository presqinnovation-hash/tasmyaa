import { impactStatement, impactStatistics } from "@/data/impactStatistics";
import StatisticItem from "./StatisticItem";
import "./ImpactStatisticsSection.css";

export default function ImpactStatisticsSection() {
  return (
    <section
      className="tasmyaa-impact-section"
      aria-labelledby="impact-heading"
    >
      <div className="tasmyaa-impact-content">
        <h2 id="impact-heading">{impactStatement}</h2>
        <ul
          className="tasmyaa-impact-statistics"
          aria-label="Illustrative impact statistics"
        >
          {impactStatistics.map((statistic) => (
            <StatisticItem key={statistic.id} statistic={statistic} />
          ))}
        </ul>
      </div>
    </section>
  );
}
