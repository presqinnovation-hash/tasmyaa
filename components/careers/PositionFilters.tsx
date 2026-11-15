import { ChevronDown, RotateCcw } from "lucide-react";
import type { PositionFilters as Filters } from "@/data/careers/positions";

type Props = {
  departments: readonly string[];
  employmentTypes: readonly string[];
  selected: Filters;
  onChange: (filters: Filters) => void;
  onApply: () => void;
  onReset: () => void;
};
export default function PositionFilters({
  departments,
  employmentTypes,
  selected,
  onChange,
  onApply,
  onReset,
}: Props) {
  return (
    <form
      className="tasmyaa-careers-filters"
      aria-label="Filter open positions"
      onSubmit={(event) => {
        event.preventDefault();
        onApply();
      }}
    >
      <div>
        <label htmlFor="careers-department">Department</label>
        <div className="tasmyaa-careers-select">
          <select
            id="careers-department"
            value={selected.department}
            onChange={(event) =>
              onChange({ ...selected, department: event.target.value })
            }
          >
            <option value="">All Departments</option>
            {departments.map((department) => (
              <option value={department} key={department}>
                {department}
              </option>
            ))}
          </select>
          <ChevronDown size={14} aria-hidden="true" />
        </div>
      </div>
      <div>
        <label htmlFor="careers-employment">Employment Type</label>
        <div className="tasmyaa-careers-select">
          <select
            id="careers-employment"
            value={selected.employmentType}
            onChange={(event) =>
              onChange({ ...selected, employmentType: event.target.value })
            }
          >
            <option value="">All Employment Types</option>
            {employmentTypes.map((type) => (
              <option value={type} key={type}>
                {type}
              </option>
            ))}
          </select>
          <ChevronDown size={14} aria-hidden="true" />
        </div>
      </div>
      <button
        className="tasmyaa-careers-apply"
        type="submit"
        aria-label="Apply position filters"
      >
        Apply
      </button>
      <button className="tasmyaa-careers-reset" type="button" onClick={onReset}>
        <RotateCcw size={14} aria-hidden="true" />
        Clear filters
      </button>
    </form>
  );
}
