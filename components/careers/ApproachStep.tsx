import {
  BookOpen,
  ClipboardCheck,
  PencilRuler,
  Search,
  Sprout,
  TrendingUp,
  Wrench,
} from "lucide-react";
import type { ApproachStepData } from "@/data/careers/content";
const icons = {
  identify: Search,
  assess: ClipboardCheck,
  design: PencilRuler,
  learn: BookOpen,
  practise: Wrench,
  develop: TrendingUp,
  grow: Sprout,
};

export default function ApproachStep({
  step,
  number,
}: {
  step: ApproachStepData;
  number: number;
}) {
  const Icon = icons[step.id];
  return (
    <li className="tasmyaa-careers-approach-step">
      <div className="tasmyaa-careers-step-icon">
        <Icon size={86} strokeWidth={2} aria-hidden="true" />
        <span aria-label={`Step ${number}`}>{number}</span>
      </div>
      <h3>{step.title}</h3>
      <p>{step.description}</p>
    </li>
  );
}
