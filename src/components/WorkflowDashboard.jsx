import { useEffect, useRef, useState } from "react";
import { animate } from "animejs";
import { uiText, workflowStats } from "../data/content.js";

export default function WorkflowDashboard({ onSelect }) {
  const sectionRef = useRef(null);
  const hasCounted = useRef(false);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return undefined;
    const counters = [...section.querySelectorAll("[data-count]")];
    const countUp = () => {
      if (hasCounted.current) return;
      hasCounted.current = true;
      const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      counters.forEach((element) => {
        const target = Number(element.dataset.count);
        if (reducedMotion) {
          element.textContent = String(target);
          return;
        }
        const value = { count: 0 };
        animate(value, {
          count: target,
          duration: 620,
          ease: "out(3)",
          onUpdate: () => { element.textContent = String(Math.round(value.count)); },
        });
      });
    };
    if (!("IntersectionObserver" in window)) {
      countUp();
      return undefined;
    }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        countUp();
        observer.disconnect();
      }
    }, { threshold: 0.2 });
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const activeStat = selected === null ? null : workflowStats[selected];

  return (
    <section className="section-block workflow-section" id="workflow" ref={sectionRef} data-reveal-group>
      <div className="section-heading" data-reveal>
        <div>
          <p className="section-kicker">{uiText.workflow.kicker}</p>
          <h2>{uiText.workflow.title}</h2>
        </div>
        <p>{uiText.workflow.description}</p>
      </div>
      <div className="stats-grid">
        {workflowStats.map((stat, index) => (
          <button
            className={`stat-card tone-${stat.tone} ${selected === index ? "is-selected" : ""}`}
            key={stat.label}
            type="button"
            aria-pressed={selected === index}
            onClick={() => {
              setSelected(index);
              onSelect(stat.label);
            }}
            data-reveal
          >
            <span className="stat-label">{stat.label}</span>
            <strong className="stat-value" data-count={stat.value}>0</strong>
            <span className="stat-note">{stat.note}</span>
          </button>
        ))}
      </div>
      {activeStat && <p className="workflow-feedback" aria-live="polite">{activeStat.label}: {activeStat.note}. {uiText.workflow.sampleFigures}</p>}
    </section>
  );
}
