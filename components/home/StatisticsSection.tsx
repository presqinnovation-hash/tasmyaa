import { statistics } from "@/data/homepage";
import { Container } from "@/components/common/Ui";
function ImpactIcon({ name }: { name: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      {name === "idea" ? (
        <>
          <path d="M15 32c0-6-6-8-6-16a14 14 0 0 1 28 0c0 8-6 10-6 16Z" />
          <path d="M16 37h14m-12 5h10M23 0v5M3 7l5 4m31 0 5-4" />
          <path d="m18 17 5 5 8-9" />
        </>
      ) : name === "report" ? (
        <>
          <path d="M12 5h20l8 8v31H12Z" />
          <path d="M31 5v10h9M19 23h14m-14 6h14m-14 6h10M5 12v25" />
        </>
      ) : name === "globe" ? (
        <>
          <circle cx="24" cy="24" r="20" />
          <ellipse cx="24" cy="24" rx="9" ry="20" />
          <path d="M5 18h38M5 30h38M24 4v40" />
        </>
      ) : (
        <>
          <circle cx="12" cy="11" r="5" />
          <path d="M4 40V23a8 8 0 0 1 16 0v17M12 27v17m17-32h14m-14 8h14m-14 8h14M27 6h17v29H27Z" />
        </>
      )}
    </svg>
  );
}
export default function StatisticsSection() {
  return (
    <section className="impact-section" id="our-story">
      <Container>
        <h2>
          Tasmyaa connects evidence, fresh perspectives and collective action to
          shape a more sustainable world.
        </h2>
        <div className="statistics-grid">
          {statistics.map((stat) => (
            <div className="statistic" key={stat.icon}>
              <ImpactIcon name={stat.icon} />
              <div>
                <strong>{stat.value}</strong>
                <p>{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="impact-note">
          Illustrative figures for this homepage concept
        </p>
      </Container>
    </section>
  );
}
