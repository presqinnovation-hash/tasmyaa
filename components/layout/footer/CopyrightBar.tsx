import { cacheLife } from "next/cache";

export default async function CopyrightBar() {
  "use cache";
  // Refresh the runtime-derived year without making the homepage request-rendered.
  cacheLife("minutes");
  const year = new Intl.DateTimeFormat("en", {
    year: "numeric",
    timeZone: "Asia/Kolkata",
  }).format(new Date());
  return (
    <div className="tasmyaa-footer-copyright">
      <div className="tasmyaa-footer-container">
        © {year} Tasmyaa. All rights reserved.
      </div>
    </div>
  );
}
