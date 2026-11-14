"use client";

import { ChevronDown } from "lucide-react";
import { emailPreferences } from "@/data/footer";

export default function NewsletterForm() {
  return (
    <form
      className="tasmyaa-footer-newsletter-form"
      aria-label="Newsletter signup"
      onSubmit={(event) => event.preventDefault()}
    >
      <label className="tasmyaa-footer-sr-only" htmlFor="footer-email">
        Email address
      </label>
      <input
        id="footer-email"
        type="email"
        name="email"
        placeholder="Email"
        autoComplete="email"
        aria-describedby="footer-newsletter-note"
      />
      <label className="tasmyaa-footer-sr-only" htmlFor="footer-preference">
        Email preference
      </label>
      <div className="tasmyaa-footer-select">
        <select id="footer-preference" name="preference" defaultValue="">
          <option value="" disabled>
            Select Emailer
          </option>
          {emailPreferences.map((preference) => (
            <option key={preference} value={preference}>
              {preference}
            </option>
          ))}
        </select>
        <ChevronDown size={13} aria-hidden="true" />
      </div>
      <button
        type="button"
        aria-disabled="true"
        aria-describedby="footer-newsletter-note"
      >
        SUBSCRIBE
      </button>
      <p id="footer-newsletter-note">Subscriptions are not available yet.</p>
    </form>
  );
}
