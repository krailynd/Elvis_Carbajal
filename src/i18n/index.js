import React, { createContext, useContext, useEffect, useState } from "react";
import * as en from "../content_option";
import * as es from "./content_es";
import { ui } from "./ui";

const LangCtx = createContext(null);

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(() => {
    const saved = localStorage.getItem("lang");
    return saved === "es" || saved === "en" ? saved : "en";
  });

  useEffect(() => {
    localStorage.setItem("lang", lang);
    document.documentElement.setAttribute("lang", lang);
  }, [lang]);

  const content = lang === "es" ? es : en;
  const t = ui[lang];

  return (
    <LangCtx.Provider value={{ lang, setLang, content, t }}>
      {children}
    </LangCtx.Provider>
  );
};

export const useLang = () => useContext(LangCtx);
