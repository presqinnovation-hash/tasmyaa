"use client";

import { useState } from "react";
import { BriefcaseBusiness } from "lucide-react";
import positionsData from "@/data/careers/positions.json";
import {
  filterPublishedPositions,
  type Position,
  type PositionFilters as Filters,
} from "@/data/careers/positions";
import { positionsIntroduction } from "@/data/careers/content";
import PositionFilters from "./PositionFilters";
import PositionCard from "./PositionCard";

const positions: readonly Position[] = positionsData;
const allFilters: Filters = { department: "", employmentType: "" };
const published = filterPublishedPositions(positions, allFilters);
const departments = [
  ...new Set(published.map((position) => position.department)),
].sort();
const employmentTypes = [
  ...new Set(published.map((position) => position.employmentType)),
].sort();

export default function OpenPositionsSection() {
  const [selected, setSelected] = useState<Filters>(allFilters);
  const [applied, setApplied] = useState<Filters>(allFilters);
  const results = filterPublishedPositions(positions, applied);
  return (
    <section
      className="tasmyaa-careers-positions-section"
      aria-labelledby="careers-positions-heading"
    >
      <div className="tasmyaa-careers-container">
        <h2 id="careers-positions-heading">Open Positions</h2>
        <p className="tasmyaa-careers-positions-intro">
          {positionsIntroduction}
        </p>
        <PositionFilters
          departments={departments}
          employmentTypes={employmentTypes}
          selected={selected}
          onChange={setSelected}
          onApply={() => setApplied(selected)}
          onReset={() => {
            setSelected(allFilters);
            setApplied(allFilters);
          }}
        />
        {results.length ? (
          <>
            <p className="tasmyaa-careers-results" role="status">
              {results.length} {results.length === 1 ? "position" : "positions"}{" "}
              found
            </p>
            <div className="tasmyaa-careers-positions-grid">
              {results.map((position) => (
                <PositionCard key={position.id} position={position} />
              ))}
            </div>
          </>
        ) : (
          <div className="tasmyaa-careers-positions-empty" role="status">
            <BriefcaseBusiness size={29} aria-hidden="true" />
            <p>
              {published.length
                ? "No positions match these filters. Try a different selection."
                : "No open positions at the moment. Please check back for future opportunities."}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
