import type { ReactNode } from "react";
import Image from "next/image";
export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`container ${className}`}>{children}</div>;
}
export function Artwork({
  name,
  alt,
  className = "",
  priority = false,
  sizes = "(max-width: 600px) 100vw, 600px",
}: {
  name: string;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
}) {
  // These illustrations are original local assets, not assets from the reference site.
  return (
    <Image
      className={`artwork ${className}`}
      src={`/images/${name}`}
      alt={alt}
      width="1200"
      height="800"
      priority={priority}
      sizes={sizes}
    />
  );
}
export function Brand() {
  return (
    <a className="brand" href="#top" aria-label="Tasmyaa home">
      <svg viewBox="0 0 36 44" aria-hidden="true">
        <path
          d="M18 40V19M18 26C4 27 2 15 3 8c13-1 18 7 15 18Z"
          fill="none"
          stroke="#849987"
          strokeWidth="2.5"
        />
        <path d="M18 19C18 7 27 2 34 3c2 10-4 18-16 16Z" fill="#21a4ca" />
        <path d="m7 14 11 12" stroke="#849987" strokeWidth="2" />
      </svg>
      <span>
        tasmyaa<small>IDEAS · EVIDENCE · IMPACT</small>
      </span>
    </a>
  );
}
export function SectionHeading({
  children,
  id,
}: {
  children: ReactNode;
  id?: string;
}) {
  return (
    <h2 className="section-heading" id={id}>
      {children}
    </h2>
  );
}
