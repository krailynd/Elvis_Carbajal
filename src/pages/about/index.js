import React, { useEffect, useRef, useState } from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebookF, FaYoutube } from "react-icons/fa";
import { XIcon } from "../../components/socialicons";
import { getTechIcon, getTechUrl } from "../../utils/techicons";
import { useLang } from "../../i18n";

export const About = () => {
  const { content, t, lang } = useLang();
  const {
    dataabout,
    meta,
    worktimeline,
    education,
    skills,
    services,
    certifications,
    socialprofils,
  } = content;

  const containerRef = useRef(null);
  const lineFillRef = useRef(null);
  const branchTopsRef = useRef([]);
  const [branchTops, setBranchTops] = useState([]);
  const [activeCount, setActiveCount] = useState(0);

  // Measure each section title's vertical center (relative to the container)
  useEffect(() => {
    const c = containerRef.current;
    if (!c) return;
    const measure = () => {
      const tops = Array.from(c.querySelectorAll("h3.color_sec")).map(
        (el) => el.offsetTop + el.offsetHeight / 2 - 1
      );
      const prev = branchTopsRef.current;
      const same =
        prev.length === tops.length &&
        prev.every((v, i) => Math.abs(v - tops[i]) < 1);
      if (!same) {
        branchTopsRef.current = tops;
        setBranchTops(tops);
      }
    };
    measure();
    // Re-measure whenever layout shifts: images loading, font swap,
    // window resize, full page load — keeps arrows pointed at titles.
    const ro = new ResizeObserver(measure);
    ro.observe(c);
    window.addEventListener("resize", measure);
    window.addEventListener("load", measure);
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(measure);
    }
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
      window.removeEventListener("load", measure);
    };
  }, [lang]);

  // Scroll-driven fill + branch activation.
  // Once the tree reaches the very end it stays fully generated until refresh.
  const lockedRef = useRef(false);

  useEffect(() => {
    let raf = null;
    const update = () => {
      raf = null;
      if (lockedRef.current) return;
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      const p = max > 0 ? Math.min(Math.max(window.scrollY / max, 0), 1) : 1;
      if (lineFillRef.current) {
        lineFillRef.current.style.transform = `scaleY(${p})`;
      }
      const c = containerRef.current;
      if (c) {
        const y = p * c.offsetHeight;
        const total = branchTopsRef.current.length;
        const done = p >= 0.99;
        const n = done
          ? total
          : branchTopsRef.current.filter((tp) => y >= tp).length;
        setActiveCount((prev) => (prev === n ? prev : n));
        if (done) {
          lockedRef.current = true;
          if (lineFillRef.current) {
            lineFillRef.current.style.transform = "scaleY(1)";
          }
        }
      }
    };
    const onScroll = () => {
      if (raf == null) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf != null) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <HelmetProvider>
      <Container className="About-header" ref={containerRef}>
        <Helmet>
          <meta charSet="utf-8" />
          <title> {t.about.title} | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <div className="about_line" aria-hidden="true">
          <div className="about_line__fill" ref={lineFillRef} />
        </div>
        {branchTops.map((top, i) => (
          <span
            key={i}
            className={`about_branch${i < activeCount ? " on" : ""}`}
            style={{ top: `${top}px` }}
            aria-hidden="true"
          >
            <span className="about_branch__stem" />
            <span className="about_branch__head" />
          </span>
        ))}
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">{t.about.title}</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">{dataabout.title}</h3>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <div>
              <p>{dataabout.aboutme}</p>
            </div>
          </Col>
        </Row>
        <Row className=" sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">{t.about.work}</h3>
          </Col>
          <Col lg="7">
            <table className="table caption-top">
              <tbody>
                {worktimeline.map((data, i) => {
                  return (
                    <tr key={i}>
                      <th scope="row">{data.jobtitle}</th>
                      <td>{data.where}</td>
                      <td>{data.date}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">{t.about.education}</h3>
          </Col>
          <Col lg="7">
            <table className="table caption-top">
              <tbody>
                {education.map((data, i) => {
                  return (
                    <tr key={i}>
                      <th scope="row">{data.degree}</th>
                      <td>{data.where}</td>
                      <td>{data.date}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">{t.about.skills}</h3>
          </Col>
          <Col lg="7">
            {skills.map((data, i) => {
              return (
                <div className="service_ py-4" key={i}>
                  <h5 className="service__title" style={{ fontWeight: 600 }}>{data.name}</h5>
                  <p className="service_desc">{data.description}</p>
                  {data.icons && data.icons.length > 0 && (
                    <div className="skill_icons">
                      {data.icons.map((name) => {
                        const Icon = getTechIcon(name);
                        const url = getTechUrl(name);
                        const chipInner = (
                          <>
                            <Icon className="skill_icon-glyph" />
                            <span className="skill_icon-name">{name}</span>
                          </>
                        );
                        return url ? (
                          <a
                            className="skill_icon"
                            key={name}
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            title={`${name} — official docs`}
                          >
                            {chipInner}
                          </a>
                        ) : (
                          <span className="skill_icon" key={name} title={name}>
                            {chipInner}
                          </span>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lang="5">
            <h3 className="color_sec py-4">{t.about.services}</h3>
          </Col>
          <Col lg="7">
            {services.map((data, i) => {
              return (
                <div className="service_ py-4" key={i}>
                  <h5 className="service__title">{data.title}</h5>
                  <p className="service_desc">{data.description}</p>
                </div>
              );
            })}
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lang="5">
            <h3 className="color_sec py-4">{t.about.certifications}</h3>
          </Col>
          <Col lg="7">
            {certifications.map((data, i) => {
              return (
                <div className="service_ py-4" key={i}>
                  <h5 className="service__title">
                    {data.link ? (
                      <a
                        className="cert_link"
                        href={data.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {data.title}
                      </a>
                    ) : (
                      data.title
                    )}
                  </h5>
                  <p className="service_desc">{data.description}</p>
                </div>
              );
            })}
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">{t.about.extra}</h3>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <div className="about_socials">
              <a
                href={socialprofils.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>
              <a
                href={socialprofils.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X"
              >
                <XIcon />
              </a>
              <a
                href={socialprofils.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
              >
                <FaYoutube />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};
