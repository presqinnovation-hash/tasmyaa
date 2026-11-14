export type ImpactStatistic = {
  id: "opinion" | "research" | "livelihoods" | "events";
  value: string;
  label: string;
};

// Sample figures supplied for this UI; not verified claims about Tasmyaa's impact.
export const impactStatistics: readonly ImpactStatistic[] = [
  { id: "opinion", value: "800+", label: "Opinion pieces" },
  { id: "research", value: "680+", label: "Peer-reviewed studies" },
  { id: "livelihoods", value: "80,000+", label: "Livelihoods enabled" },
  { id: "events", value: "770+", label: "Seminars and conferences" },
];

export const impactStatement =
  "Tasmyaa uses data, integrated analysis, and strategic outreach to explain — and change — the use, reuse, and misuse of resources.";
