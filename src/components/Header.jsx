import { useEffect, useRef, useState } from "react";
import Icon from "./Icon.jsx";
import { uiText } from "../data/content.js";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [logoFailed, setLogoFailed] = useState(false);
  const [activeHref, setActiveHref] = useState("#home");
  const [selection, setSelection] = useState({ top: 0, height: 44, visible: false });
  const navRef = useRef(null);

  useEffect(() => {
    const sectionLinks = uiText.header.nav
      .map(({ href }) => ({ href, element: document.querySelector(href) }))
      .filter(({ element }) => element);
    let frame = 0;
    const updateActiveSection = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const marker = window.innerHeight * 0.35;
        const current = sectionLinks
          .filter(({ element }) => element.getBoundingClientRect().top <= marker)
          .at(-1);
        setActiveHref(current?.href || "#home");
      });
    };
    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return undefined;
    let frame = 0;
    const updateSelection = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const link = [...nav.querySelectorAll(".nav-link")].find((item) => item.getAttribute("href") === activeHref);
        if (!link || getComputedStyle(nav).display === "none") {
          setSelection((current) => ({ ...current, visible: false }));
          return;
        }
        setSelection({ top: link.offsetTop, height: link.offsetHeight, visible: true });
      });
    };
    updateSelection();
    const resizeObserver = new ResizeObserver(updateSelection);
    resizeObserver.observe(nav);
    window.addEventListener("resize", updateSelection);
    return () => {
      cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateSelection);
    };
  }, [activeHref, menuOpen]);

  return (
    <>
      <header className="site-header">
        <div className="header-inner">
          <button
            className="menu-button"
            type="button"
            aria-label={menuOpen ? uiText.header.closeMenuLabel : uiText.header.openMenu}
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <Icon name={menuOpen ? "close" : "menu"} size={19} />
            <span>{menuOpen ? uiText.header.closeMenu : uiText.header.menu}</span>
          </button>
          <a className="brand" href="#home" aria-label="NITA Smart Workplace home">
            {logoFailed ? (
              <span className="brand-placeholder"><span>N</span><span><strong>NITA</strong><small>{uiText.header.workplaceName}</small></span></span>
            ) : (
              <img src="/nita-logo.png" alt={uiText.header.logoAlt} onError={() => setLogoFailed(true)} />
            )}
          </a>
          <span className="header-spacer" aria-hidden="true" />
        </div>
      </header>
      <nav id="primary-navigation" ref={navRef} className={menuOpen ? "primary-nav is-open" : "primary-nav"} aria-label="Main navigation">
        <span className="sidebar-label">SMART WORKPLACE</span>
        <span
          className={`nav-selection-indicator ${selection.visible ? "is-visible" : ""}`}
          aria-hidden="true"
          style={{ top: `${selection.top}px`, height: `${selection.height}px` }}
        />
        {uiText.header.nav.map(({ label, href }) => (
          <a
            className={activeHref === href ? "nav-link active" : "nav-link"}
            href={href}
            key={label}
            aria-current={activeHref === href ? "location" : undefined}
            onClick={() => setMenuOpen(false)}
          >
            <span className="nav-marker" aria-hidden="true" />
            {label}
          </a>
        ))}
      </nav>
    </>
  );
}
