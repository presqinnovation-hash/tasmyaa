"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { careersRotationMs, type CareersSlide } from "@/data/careers/content";

export default function CareersCarousel({
  slides,
  label,
  variant,
}: {
  slides: readonly CareersSlide[];
  label: string;
  variant: "hero" | "life";
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [stopped, setStopped] = useState(false);
  const swipeStart = useRef<{ x: number; y: number } | null>(null);
  const paused = hovered || focused || stopped;

  useEffect(() => {
    if (paused || slides.length < 2) return;
    const interval = window.setInterval(
      () => setActiveIndex((index) => (index + 1) % slides.length),
      careersRotationMs,
    );
    return () => window.clearInterval(interval);
  }, [paused, slides.length]);

  function move(direction: number) {
    setActiveIndex(
      (index) => (index + direction + slides.length) % slides.length,
    );
  }

  return (
    <div
      className={`tasmyaa-careers-carousel tasmyaa-careers-carousel-${variant}`}
      role="region"
      aria-roledescription="carousel"
      aria-label={label}
      data-active-slide={activeIndex + 1}
      onPointerEnter={(event) => {
        if (event.pointerType === "mouse") setHovered(true);
      }}
      onPointerLeave={(event) => {
        if (event.pointerType === "mouse") setHovered(false);
      }}
      onFocusCapture={() => setFocused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget))
          setFocused(false);
      }}
      onPointerDown={(event) => {
        if (
          event.pointerType !== "mouse" &&
          !(event.target as HTMLElement).closest("button,a")
        )
          swipeStart.current = { x: event.clientX, y: event.clientY };
      }}
      onPointerUp={(event) => {
        if (!swipeStart.current) return;
        const dx = event.clientX - swipeStart.current.x,
          dy = event.clientY - swipeStart.current.y;
        swipeStart.current = null;
        if (Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy))
          move(dx < 0 ? 1 : -1);
      }}
      onPointerCancel={() => {
        swipeStart.current = null;
      }}
      onKeyDown={(event) => {
        if (event.key === "ArrowLeft") {
          event.preventDefault();
          move(-1);
        }
        if (event.key === "ArrowRight") {
          event.preventDefault();
          move(1);
        }
      }}
    >
      {slides.map((slide, index) => (
        <div
          className={`tasmyaa-careers-slide ${index === activeIndex ? "tasmyaa-careers-slide-active" : ""}`}
          key={slide.id}
          role="group"
          aria-roledescription="slide"
          aria-label={`${index + 1} of ${slides.length}`}
          aria-hidden={index !== activeIndex}
        >
          <div className="tasmyaa-careers-slide-photo">
            <Image
              src={slide.image}
              alt={slide.alt}
              fill
              sizes="100vw"
              priority={variant === "hero" && index === 0}
              loading={variant === "hero" && index === 0 ? undefined : "eager"}
              style={{ objectPosition: slide.position ?? "center" }}
            />
          </div>
          <div className="tasmyaa-careers-slide-caption">
            <h2>{slide.heading}</h2>
            <p>{slide.description}</p>
          </div>
        </div>
      ))}
      <button
        className="tasmyaa-careers-carousel-arrow tasmyaa-careers-carousel-previous"
        type="button"
        aria-label={`Previous ${label} slide`}
        onClick={() => move(-1)}
      >
        <ChevronLeft size={28} aria-hidden="true" />
      </button>
      <button
        className="tasmyaa-careers-carousel-arrow tasmyaa-careers-carousel-next"
        type="button"
        aria-label={`Next ${label} slide`}
        onClick={() => move(1)}
      >
        <ChevronRight size={28} aria-hidden="true" />
      </button>
      <div
        className="tasmyaa-careers-carousel-dots"
        aria-label={`${label} slide selection`}
      >
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            type="button"
            aria-label={`Go to ${label} slide ${index + 1}`}
            aria-current={index === activeIndex ? "true" : undefined}
            onClick={() => setActiveIndex(index)}
          >
            <span />
          </button>
        ))}
      </div>
      <div className="tasmyaa-careers-carousel-rotation">
        <span aria-live={paused ? "polite" : "off"}>
          {activeIndex + 1} / {slides.length}
        </span>
        <button
          type="button"
          aria-label={`${stopped ? "Start" : "Pause"} ${label} automatic rotation`}
          aria-pressed={stopped}
          onClick={() => setStopped((value) => !value)}
        >
          {stopped ? (
            <Play size={14} aria-hidden="true" />
          ) : (
            <Pause size={14} aria-hidden="true" />
          )}
        </button>
      </div>
    </div>
  );
}
