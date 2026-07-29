import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { dataportfolio, meta } from "../../content_option";

const SECTION_ORDER = [
  "Backend, Desktop & Systems",
  "Frontend & Web",
  "Data Science & AI — In Training",
];

export const Portfolio = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Portfolio | {meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> Portfolio </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>

        {SECTION_ORDER.map((section) => {
          const projects = dataportfolio.filter((p) => p.section === section);
          if (projects.length === 0) return null;
          return (
            <section key={section} className="pf_section">
              <h3 className="color_sec pf_section-title">{section}</h3>
              <div className="pf_list">
                {projects.map((p, i) => (
                  <div className="pf_row" key={i}>
                    <div className="pf_info">
                      <h4 className="pf_title">{p.title}</h4>
                      <p className="pf_desc">{p.description}</p>
                      {(p.github || p.demo) && (
                        <div className="pf_actions">
                          {p.github && (
                            <a
                              href={p.github}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <div id="button_p" className="ac_btn btn">
                                <FaGithub className="pf_btn-icon" />
                                GitHub
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
                                Live Preview
                                <div className="ring one"></div>
                                <div className="ring two"></div>
                                <div className="ring three"></div>
                              </div>
                            </a>
                          )}
                        </div>
                      )}
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
                            View on GitHub
                          </a>
                        )}
                        {p.demo && (
                          <a
                            href={p.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <FaExternalLinkAlt className="pf_btn-icon" />
                            Live Preview
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          );
        })}
      </Container>
    </HelmetProvider>
  );
};
