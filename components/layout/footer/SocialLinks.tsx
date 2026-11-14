import { socialProfiles } from "@/data/footer";

export default function SocialLinks() {
  return (
    <div className="tasmyaa-footer-social">
      <h2>CONNECT WITH TASMYAA</h2>
      <ul aria-label="Social media profiles">
        {socialProfiles.map((profile) => (
          <li key={profile.name}>
            {profile.href ? (
              <a
                href={profile.href}
                className={`tasmyaa-footer-social-label tasmyaa-footer-${profile.style}`}
                aria-label={profile.name}
              >
                {profile.label}
              </a>
            ) : (
              <span
                className={`tasmyaa-footer-social-label tasmyaa-footer-${profile.style}`}
                role="img"
                aria-label={`${profile.name} placeholder; link coming soon`}
                title={`${profile.name} link coming soon`}
              >
                {profile.label}
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
