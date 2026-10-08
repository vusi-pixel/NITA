import { useEffect, useRef, useState } from "react";
import Header from "./components/Header.jsx";
import HeroCarousel from "./components/HeroCarousel.jsx";
import ModuleLinks from "./components/ModuleLinks.jsx";
import WorkflowDashboard from "./components/WorkflowDashboard.jsx";
import NewsAndLinks from "./components/NewsAndLinks.jsx";
import InfoCards from "./components/InfoCards.jsx";
import Footer from "./components/Footer.jsx";
import { useReveal } from "./hooks/useReveal.js";
import { uiText } from "./data/content.js";

export default function App() {
  const pageRef = useReveal();
  const [message, setMessage] = useState("");
  const dialogRef = useRef(null);
  const returnFocusRef = useRef(null);

  useEffect(() => {
    if (!message) return undefined;
    dialogRef.current?.querySelector("button")?.focus();
    const onKeyDown = (event) => {
      if (event.key === "Escape") setMessage("");
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      if (returnFocusRef.current instanceof HTMLElement) returnFocusRef.current.focus();
    };
  }, [message]);

  const showMessage = (text) => {
    returnFocusRef.current = document.activeElement;
    setMessage(text);
  };

  return (
    <div className="app-shell" ref={pageRef}>
      <Header />
      <main className="app-main">
        <HeroCarousel />
        <div className="page-container">
          <ModuleLinks onSelect={(name) => showMessage(`${name} ${uiText.modules.unavailable}`)} />
          <WorkflowDashboard onSelect={(name) => showMessage(`${name} ${uiText.workflow.sampleDetails}`)} />
          <NewsAndLinks onSelect={(name) => showMessage(`${name} ${uiText.news.sampleDetails}`)} />
          <InfoCards onSelect={(name) => showMessage(`${name} ${uiText.info.sampleDetails}`)} />
        </div>
      </main>
      <Footer />
      {message && (
        <div className="dialog-backdrop" role="presentation" onMouseDown={(event) => event.target === event.currentTarget && setMessage("")}>
          <section className="action-dialog" ref={dialogRef} role="dialog" aria-modal="true" aria-labelledby="dialog-title">
            <button className="dialog-close" type="button" aria-label={uiText.dialog.close} onClick={() => setMessage("")}>×</button>
            <h2 id="dialog-title">{uiText.dialog.title}</h2>
            <p>{message}</p>
            <button className="button button-primary" type="button" onClick={() => setMessage("")}>{uiText.dialog.confirm}</button>
          </section>
        </div>
      )}
    </div>
  );
}
