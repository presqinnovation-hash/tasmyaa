import Link from "next/link";
import type { FooterLinkGroup } from "@/data/footer";

export default function FooterNavigation({
  group,
}: {
  group: FooterLinkGroup;
}) {
  return (
    <nav className="tasmyaa-footer-navigation" aria-label={group.label}>
      {group.links.map((link) =>
        link.href ? (
          <Link
            key={link.label}
            href={link.href.startsWith("#") ? `/${link.href}` : link.href}
          >
            {link.label}
          </Link>
        ) : (
          <span
            key={link.label}
            role="link"
            aria-disabled="true"
            title="Destination coming soon"
          >
            {link.label}
          </span>
        ),
      )}
    </nav>
  );
}
