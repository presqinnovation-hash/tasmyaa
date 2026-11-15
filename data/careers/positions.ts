export type Position = {
  id: string;
  title: string;
  department: string;
  employmentType: string;
  location: string;
  description: string;
  applicationUrl: string;
  status: "draft" | "published" | "closed";
};
export type PositionFilters = { department: string; employmentType: string };

export function filterPublishedPositions(
  positions: readonly Position[],
  filters: PositionFilters,
): Position[] {
  return positions.filter(
    (position) =>
      position.status === "published" &&
      (!filters.department || position.department === filters.department) &&
      (!filters.employmentType ||
        position.employmentType === filters.employmentType),
  );
}
export function isValidApplicationUrl(value: string): boolean {
  try {
    const url = new URL(value);
    return url.protocol === "https:" || url.protocol === "http:";
  } catch {
    return false;
  }
}
