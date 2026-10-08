import { news, quickLinks, uiText } from "../data/content.js";
import Icon from "./Icon.jsx";

export default function NewsAndLinks({ onSelect }) {
  return (
    <section className="section-block news-links-section" id="news-links" data-reveal-group>
      <div className="news-panel" data-reveal>
        <div className="section-heading compact-heading">
          <div><p className="section-kicker">{uiText.news.kicker}</p><h2>{uiText.news.title}</h2></div>
        </div>
        <div className="news-list">
          {news.map((item) => (
            <button className="news-item" key={item.headline} type="button" onClick={() => onSelect(item.headline)}>
              <span className="news-item-copy">
                <span className="news-tag">{item.tag}</span>
                <strong>{item.headline}</strong>
              </span>
              <time>{item.date}</time>
              <Icon name="chevron" size={17} />
            </button>
          ))}
        </div>
      </div>
      <div className="quick-links-panel" data-reveal>
        <div className="section-heading compact-heading">
          <div><p className="section-kicker">{uiText.news.quickLinksKicker}</p><h2>{uiText.news.quickLinksTitle}</h2></div>
        </div>
        <div className="quick-link-list">
          {quickLinks.map((link) => (
            <button className="quick-link" key={link.label} type="button" onClick={() => onSelect(link.label)}>
              <span className="quick-link-icon"><Icon name={link.icon} size={18} /></span>
              <span className="quick-link-copy"><strong>{link.label}</strong><small>{link.description}</small></span>
              <Icon name="arrow" size={16} />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
