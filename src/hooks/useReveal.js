import { useEffect, useRef } from "react";
import { animate, stagger } from "animejs";

export function useReveal() {
  const pageRef = useRef(null);

  useEffect(() => {
    const page = pageRef.current;
    if (!page) return undefined;
    const groups = [...page.querySelectorAll("[data-reveal-group]")];
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reducedMotion || !("IntersectionObserver" in window)) {
      page.classList.add("reveal-ready");
      page.querySelectorAll("[data-reveal]").forEach((element) => element.classList.add("is-visible"));
      return undefined;
    }

    page.classList.add("reveal-ready");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(({ target, isIntersecting }) => {
        if (!isIntersecting) return;
        const items = [...target.querySelectorAll("[data-reveal]")];
        items.forEach((item) => item.classList.add("is-visible"));
        animate(items, {
          opacity: [0, 1],
          translateY: [18, 0],
          delay: stagger(34),
          duration: 430,
          ease: "out(3)",
        });
        observer.unobserve(target);
      });
    }, { threshold: 0.12 });

    groups.forEach((group) => observer.observe(group));
    return () => observer.disconnect();
  }, []);

  return pageRef;
}
