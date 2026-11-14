"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { useEffect, useState } from "react";
import { HERO_ROTATION_MS, heroSlides } from "@/data/heroSlides";
import "./HeroCarousel.css";

export default function HeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [userPaused, setUserPaused] = useState(false);
  const paused = hovered || focused || userPaused;

  useEffect(() => {
    if (paused) return;
    const timer = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % heroSlides.length);
    }, HERO_ROTATION_MS);
    return () => window.clearInterval(timer);
  }, [paused]);

  function move(direction: number) {
    setActiveIndex(
      (index) => (index + direction + heroSlides.length) % heroSlides.length,
    );
  }

  return (
    <section
      className="tasmyaa-hero-carousel"
      aria-label="Tasmyaa highlights"
      aria-roledescription="carousel"
      data-active-slide={activeIndex + 1}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocusCapture={() => setFocused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget))
          setFocused(false);
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
      {heroSlides.map((slide, index) => (
        <div
          key={slide.id}
          className={`tasmyaa-hero-slide ${index === activeIndex ? "tasmyaa-hero-active" : ""}`}
          role="group"
          aria-roledescription="slide"
          aria-label={`${index + 1} of ${heroSlides.length}`}
          aria-hidden={index !== activeIndex}
        >
          <Image
            src={slide.image}
            alt={slide.alt}
            fill
            sizes="100vw"
            priority={index === 0}
            loading={index === 0 ? undefined : "eager"}
            className="tasmyaa-hero-image"
            style={{ objectPosition: slide.position }}
          />
          <div className="tasmyaa-hero-caption">
            <h2>{slide.headline}</h2>
          </div>
        </div>
      ))}
      <button
        className={`tasmyaa-hero-arrow tasmyaa-hero-previous`}
        type="button"
        onClick={() => move(-1)}
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} aria-hidden="true" />
      </button>
      <button
        className={`tasmyaa-hero-arrow tasmyaa-hero-next`}
        type="button"
        onClick={() => move(1)}
        aria-label="Next slide"
      >
        <ChevronRight size={24} aria-hidden="true" />
      </button>
      <div className="tasmyaa-hero-controls">
        <span
          className="tasmyaa-hero-counter"
          aria-live={paused ? "polite" : "off"}
        >
          {activeIndex + 1} / {heroSlides.length}
        </span>
        <button
          type="button"
          onClick={() => setUserPaused((value) => !value)}
          aria-label={
            userPaused
              ? "Start automatic slide rotation"
              : "Pause automatic slide rotation"
          }
          aria-pressed={userPaused}
        >
          {userPaused ? (
            <Play size={14} aria-hidden="true" />
          ) : (
            <Pause size={14} aria-hidden="true" />
          )}
        </button>
      </div>
    </section>
  );
}
