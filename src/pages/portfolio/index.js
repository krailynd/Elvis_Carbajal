import React, { useState } from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { FaGithub, FaExternalLinkAlt, FaLaptopCode, FaTimes } from "react-icons/fa";
import { getTechIcon, getTechUrl, TECH_CATEGORY_ORDER } from "../../utils/techicons";
import ScrollCue from "../../components/scrollcue";
import { useLang } from "../../i18n";

export const Portfolio = () => {
  const { content, t } = useLang();
  const { dataportfolio, meta } = content;
  const [openPanel, setOpenPanel] = useState(null); // index into dataportfolio

  const panelProject = openPanel !== null ? dataportfolio[openPanel] : null;

  // Sections derived from the content itself, preserving order (works for both languages)
  const sections = [...new Set(dataportfolio.map((p) => p.section))];

  const techByCategory = (project) => {
    const grouped = {};
    (project.tech || []).forEach(({ name, cat }) => {
      if (!grouped[cat]) grouped[cat] = [];
      grouped[cat].push(name);
    });
    return grouped;
  };

  return (
    <HelmetProvider>
      <Container className="About-header pf_page">
        <Helmet>
          <meta charSet="utf-8" />
          <title> {t.portfolio.title} | {meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> {t.portfolio.title} </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>

        {sections.map((section) => {
          const projects = dataportfolio.filter((p) => p.section === section);
          if (projects.length === 0) return null;
          return (
            <section key={section} className="pf_section">
              <h3 className="color_sec pf_section-title">{section}</h3>
              <div className="pf_list">
                {projects.map((p, i) => {
                  const myIndex = dataportfolio.indexOf(p);
                  return (
                    <div className="pf_row" key={i}>
                      <div className="pf_info">
                        <h4 className="pf_title">{p.title}</h4>
                        <p className="pf_desc">{p.description}</p>
                        <div className="pf_actions">
                          {p.tech && p.tech.length > 0 && (
                            <button
                              type="button"
                              className="pf_lang-btn"
                              onClick={() => setOpenPanel(myIndex)}
                            >
                              <div id="button_h" className="ac_btn btn">
                                <FaLaptopCode className="pf_btn-icon" />
                                {t.portfolio.languages}
                                <div className="ring one"></div>
                                <div className="ring two"></div>
                                <div className="ring three"></div>
                              </div>
                            </button>
                          )}
                          {p.github && (
                            <a
                              href={p.github}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <div id="button_p" className="ac_btn btn">
                                <FaGithub className="pf_btn-icon" />
                                {t.portfolio.github}
                                <div className="ring one"></div>
                                <div className="ring two"></div>
                                <div className="ring three"></div>
                              </div>
                            </a>
                          )}
                          {p.demo && (
                            <a
                              href={p.demo}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <div id="button_h" className="ac_btn btn">
                                <FaExternalLinkAlt className="pf_btn-icon" />
                                {t.portfolio.live}
                                <div className="ring one"></div>
                                <div className="ring two"></div>
                                <div className="ring three"></div>
                              </div>
                            </a>
                          )}
                        </div>
                      </div>
                      <div className="pf_media">
                        {p.img ? (
                          <img src={p.img} alt={p.title} loading="lazy" />
                        ) : (
                          <div className="pf_placeholder">
                            <span>{p.title}</span>
                          </div>
                        )}
                        <div className="pf_overlay">
                          {p.github && (
                            <a
                              href={p.github}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <FaGithub className="pf_btn-icon" />
                              {t.portfolio.viewOnGithub}
                            </a>
                          )}
                          {p.demo && (
                            <a
                              href={p.demo}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <FaExternalLinkAlt className="pf_btn-icon" />
                              {t.portfolio.live}
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          );
        })}
        <ScrollCue to="/about" label={t.nav.about} />
      </Container>

      {/* Floating side panel: languages & tech of the selected project */}
      <div
        className={`tech_backdrop ${panelProject ? "open" : ""}`}
        onClick={() => setOpenPanel(null)}
        aria-hidden="true"
      />
      <aside
        className={`tech_panel ${panelProject ? "open" : ""}`}
        aria-label={t.portfolio.panelAria}
      >
        {panelProject && (
          <>
            <div className="tech_panel-head">
              <h4 className="tech_panel-title">{panelProject.title}</h4>
              <button
                type="button"
                className="tech_panel-close"
                onClick={() => setOpenPanel(null)}
                aria-label={t.portfolio.closePanel}
              >
                <FaTimes />
              </button>
            </div>
            <p className="tech_panel-sub">{t.portfolio.panelSub}</p>
            {(() => {
              const grouped = techByCategory(panelProject);
              return TECH_CATEGORY_ORDER.filter((cat) => grouped[cat]).map(
                (cat) => (
                  <div className="tech_group" key={cat}>
                    <h5 className="tech_group-title">{t.techCats[cat] || cat}</h5>
                    <div className="tech_chips">
                      {grouped[cat].map((name) => {
                        const Icon = getTechIcon(name);
                        const url = getTechUrl(name);
                        const chipInner = (
                          <>
                            <Icon className="tech_chip-icon" />
                            {name}
                          </>
                        );
                        return url ? (
                          <a
                            className="tech_chip"
                            key={name}
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            title={`${name} — official docs`}
                          >
                            {chipInner}
                          </a>
                        ) : (
                          <span className="tech_chip" key={name}>
                            {chipInner}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                )
              );
            })()}
          </>
        )}
      </aside>
    </HelmetProvider>
  );
};
