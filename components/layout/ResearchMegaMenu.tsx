"use client";

import { useEffect, useId, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { researchMenuColumns } from "@/data/researchMenu";
import "./ResearchMegaMenu.css";

export default function ResearchMegaMenu() {
  const [open, setOpen] = useState(false);
  const id = useId();
  const root = useRef<HTMLDivElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const panel = useRef<HTMLElement>(null);
  const pinned = useRef(false);
  const pendingFocus = useRef<"first" | "last" | null>(null);

  function close() {
    pinned.current = false;
    setOpen(false);
  }

  function focusLink(position: "first" | "last") {
    const links = panel.current?.querySelectorAll<HTMLAnchorElement>("a");
    if (links?.length)
      links[position === "first" ? 0 : links.length - 1].focus();
  }

  useEffect(() => {
    if (!open) return;
    if (pendingFocus.current) {
      focusLink(pendingFocus.current);
      pendingFocus.current = null;
    }
    function onOutsideClick(event: PointerEvent) {
      if (!root.current?.contains(event.target as Node)) {
        pinned.current = false;
        setOpen(false);
      }
    }
    function onEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        const focusInside = root.current?.contains(document.activeElement);
        pinned.current = false;
        setOpen(false);
        if (focusInside) trigger.current?.focus();
      }
    }
    document.addEventListener("pointerdown", onOutsideClick);
    document.addEventListener("keydown", onEscape);
    return () => {
      document.removeEventListener("pointerdown", onOutsideClick);
      document.removeEventListener("keydown", onEscape);
    };
  }, [open]);

  return (
    <div
      className="tasmyaa-research-disclosure"
      ref={root}
      onPointerEnter={(event) => {
        if (event.pointerType === "mouse") setOpen(true);
      }}
      onPointerLeave={(event) => {
        if (
          event.pointerType === "mouse" &&
          !pinned.current &&
          !root.current?.contains(document.activeElement)
        )
          close();
      }}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) close();
      }}
    >
      <button
        className="tasmyaa-research-trigger"
        ref={trigger}
        type="button"
        aria-expanded={open}
        aria-controls={id}
        onClick={() => {
          if (pinned.current) close();
          else {
            pinned.current = true;
            setOpen(true);
          }
        }}
        onKeyDown={(event) => {
          if (event.key === "ArrowDown" || event.key === "ArrowUp") {
            event.preventDefault();
            const position = event.key === "ArrowDown" ? "first" : "last";
            pinned.current = true;
            if (open) focusLink(position);
            else {
              pendingFocus.current = position;
              setOpen(true);
            }
          }
        }}
      >
        Research <ChevronDown size={14} aria-hidden="true" />
      </button>
      <nav
        className="tasmyaa-research-mega-panel"
        id={id}
        ref={panel}
        hidden={!open}
        aria-label="Research topics"
      >
        <div className="tasmyaa-research-mega-columns">
          {researchMenuColumns.map((column, index) => (
            <section
              className="tasmyaa-research-mega-column"
              key={column.heading}
              aria-labelledby={`${id}-heading-${index}`}
            >
              <h2 id={`${id}-heading-${index}`}>{column.heading}</h2>
              <ul>
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      tabIndex={link.href ? undefined : 0}
                      role={link.href ? undefined : "link"}
                      aria-disabled={link.href ? undefined : true}
                      title={
                        link.href
                          ? undefined
                          : "Research destination coming soon"
                      }
                      onClick={() => {
                        if (link.href) close();
                      }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </nav>
    </div>
  );
}
