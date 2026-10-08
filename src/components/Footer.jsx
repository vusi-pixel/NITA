import { useState } from "react";
import { uiText } from "../data/content.js";

export default function Footer() {
  const [logoFailed, setLogoFailed] = useState(false);

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        {logoFailed ? (
          <span className="footer-brand-placeholder" aria-label="NITA">{uiText.header.fallbackInitial}</span>
        ) : (
          <img className="footer-logo" src="/nita-logo.png" alt={uiText.header.logoAlt} onError={() => setLogoFailed(true)} />
        )}
        <span>© {new Date().getFullYear()} {uiText.footer.copyright}</span>
        <strong>{uiText.footer.product}</strong>
      </div>
    </footer>
  );
}
