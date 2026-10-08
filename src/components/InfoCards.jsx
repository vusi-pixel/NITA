import { documents, events, uiText } from "../data/content.js";
import Icon from "./Icon.jsx";
import Weather from "./Weather.jsx";

export default function InfoCards({ onSelect }) {
  return (
    <section className="section-block info-grid" id="info-cards" aria-label="Events, weather and recent documents" data-reveal-group>
      <article className="info-card events-card" data-reveal>
        <div className="section-heading compact-heading">
          <div><p className="section-kicker">{uiText.info.eventsKicker}</p><h2>{uiText.info.eventsTitle}</h2></div>
        </div>
        <div className="event-list">
          {events.map((event) => (
            <button className="event-row" type="button" key={event.title} onClick={() => onSelect(event.title)}>
              <span className="event-date"><strong>{event.day}</strong><small>{event.month}</small></span>
              <span className="event-copy"><strong>{event.title}</strong><small>{event.time}</small></span>
              <Icon name="chevron" size={16} />
            </button>
          ))}
        </div>
        <button className="card-link" type="button" onClick={() => onSelect(uiText.info.calendarNotice)}>{uiText.info.calendarLink}<Icon name="arrow" size={15} /></button>
      </article>
      <Weather />
      <article className="info-card documents-card" data-reveal>
        <div className="section-heading compact-heading">
          <div><p className="section-kicker">{uiText.info.documentsKicker}</p><h2>{uiText.info.documentsTitle}</h2></div>
        </div>
        <div className="document-list">
          {documents.map((document) => (
            <button className="document-row" type="button" key={document.name} onClick={() => onSelect(document.name)}>
              <span className="document-icon"><Icon name="document" size={18} /></span>
              <span className="document-copy"><strong>{document.name}</strong><small>{document.date}</small></span>
              <Icon name="chevron" size={16} />
            </button>
          ))}
        </div>
      </article>
    </section>
  );
}
