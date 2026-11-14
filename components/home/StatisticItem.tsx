import { FileText, Globe, Lightbulb, Users } from "lucide-react";
import type { ImpactStatistic } from "@/data/impactStatistics";

const icons = {
  opinion: Lightbulb,
  research: FileText,
  livelihoods: Globe,
  events: Users,
};

export default function StatisticItem({
  statistic,
}: {
  statistic: ImpactStatistic;
}) {
  const Icon = icons[statistic.id];
  return (
    <li className="tasmyaa-impact-statistic">
      <Icon size={44} strokeWidth={2} aria-hidden="true" />
      <div>
        <strong>{statistic.value}</strong>
        <p>{statistic.label}</p>
      </div>
    </li>
  );
}
