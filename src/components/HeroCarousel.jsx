import { useEffect, useRef, useState } from "react";
import { animate } from "animejs";
import { slides } from "../data/content.js";
import Icon from "./Icon.jsx";

export default function HeroCarousel() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [paused, setPaused] = useState(false);
  const textRef = useRef(null);
  const slide = slides[activeSlide];
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  useEffect(() => {
    if (paused || reducedMotion) return undefined;
    const timer = window.setInterval(() => setActiveSlide((current) => (current + 1) % slides.length), 6000);
    return () => window.clearInterval(timer);
  }, [paused, reducedMotion]);

  useEffect(() => {
    if (!textRef.current || reducedMotion) return;
    animate(textRef.current.querySelectorAll("[data-slide-text]"), {
      opacity: [0, 1],
      translateY: [12, 0],
      delay: 60,
      duration: 420,
      ease: "out(3)",
    });
  }, [activeSlide, reducedMotion]);

  return (
    <section
      className={`hero-banner hero-${slide.theme}`}
      id="home"
      aria-label="Workplace highlights"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setPaused(false);
      }}
    >
      <div className="hero-image-stack" aria-hidden="true">
        {slides.map((item, index) => (
          <div
            className={`hero-image ${index === activeSlide ? "is-active" : ""}`}
            key={item.image}
            style={{ backgroundImage: `linear-gradient(90deg, var(--color-hero-overlay), var(--color-hero-overlay-soft)), url("${item.image}")` }}
          />
        ))}
      </div>
      <div className="hero-content" ref={textRef} aria-live="polite" aria-atomic="true">
        <span className="hero-eyebrow" data-slide-text>{slide.eyebrow}</span>
        <h1 data-slide-text>{slide.title}</h1>
        <p data-slide-text>{slide.description}</p>
        <a className="button button-white" data-slide-text href={slide.href}>{slide.action}<Icon name="arrow" size={17} /></a>
      </div>
      <div className="hero-controls" role="group" aria-label="Choose a highlight">
        {slides.map((item, index) => (
          <button
            key={item.title}
            type="button"
            className={index === activeSlide ? "hero-dot is-active" : "hero-dot"}
            aria-label={`Show highlight ${index + 1}: ${item.title}`}
            aria-current={index === activeSlide ? "true" : undefined}
            onClick={() => setActiveSlide(index)}
          />
        ))}
      </div>
    </section>
  );
}
