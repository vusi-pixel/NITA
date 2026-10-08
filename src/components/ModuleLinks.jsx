import { modules, uiText } from "../data/content.js";
import Icon from "./Icon.jsx";

export default function ModuleLinks({ onSelect }) {
  return (
    <section className="section-block module-section" id="modules" data-reveal-group>
      <div className="section-heading" data-reveal>
        <div>
          <p className="section-kicker">{uiText.modules.kicker}</p>
          <h2>{uiText.modules.title}</h2>
        </div>
        <p>{uiText.modules.description}</p>
      </div>
      <div className="module-grid">
        {modules.map((module) => (
          <button className="module-tile" key={module.name} type="button" onClick={() => onSelect(module.name)} data-reveal>
            <span className="module-icon"><Icon name={module.icon} size={22} /></span>
            <span className="module-label">{module.name}</span>
          </button>
        ))}
      </div>
    </section>
  );
}
