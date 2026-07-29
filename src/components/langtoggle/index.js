import React from "react";
import { useLang } from "../../i18n";
import "./style.css";

// Language selector (EN / ES) — sits next to the theme toggle in the header
const Langtoggle = () => {
  const { lang, setLang, t } = useLang();

  return (
    <div className="nav_ac lang_toggle" role="group" aria-label={t.langToggleAria}>
      <button
        type="button"
        className={lang === "en" ? "active" : ""}
        onClick={() => setLang("en")}
        aria-pressed={lang === "en"}
      >
        EN
      </button>
      <span className="lang_sep" aria-hidden="true">|</span>
      <button
        type="button"
        className={lang === "es" ? "active" : ""}
        onClick={() => setLang("es")}
        aria-pressed={lang === "es"}
      >
        ES
      </button>
    </div>
  );
};

export default Langtoggle;
