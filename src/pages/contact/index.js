import React, { useState } from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col, Alert } from "react-bootstrap";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { getEmail, getMailto, getTel } from "../../utils/contact";
import { useLang } from "../../i18n";

const EMPTY_FORM = {
  nombre: "",
  apellido: "",
  email: "",
  asunto: "",
  mensaje: "",
  _honey: "", // honeypot anti-spam: must stay empty
};

// Strip CR/LF to prevent email header injection, trim, and cap length
const sanitize = (value, maxLen) =>
  value.replace(/[\r\n\u0000-\u001f]+/g, " ").trim().slice(0, maxLen);

export const ContactUs = () => {
  const { content, t } = useLang();
  const { meta, contactConfig } = content;
  const [formData, setFormdata] = useState({ ...EMPTY_FORM, loading: false });
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    // Honeypot filled => likely a bot; silently pretend success
    if (formData._honey) {
      setSent(true);
      return;
    }

    const required = ["nombre", "apellido", "email", "asunto", "mensaje"];
    const missing = required.some((k) => !formData[k].trim());
    if (missing) {
      setError(t.contact.errRequired);
      return;
    }

    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(formData.email.trim());
    if (!emailOk) {
      setError(t.contact.errEmail);
      return;
    }

    setFormdata((prev) => ({ ...prev, loading: true }));

    const clean = {
      nombre: sanitize(formData.nombre, 80),
      apellido: sanitize(formData.apellido, 80),
      email: sanitize(formData.email, 120),
      asunto: sanitize(formData.asunto, 150),
      mensaje: sanitize(formData.mensaje, 2000),
    };

    try {
      const res = await fetch(
        "https://formsubmit.co/ajax/" + getEmail(),
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            _subject: `Portfolio contact: ${clean.asunto}`,
            _replyto: clean.email,
            _template: "table",
            nombre: clean.nombre,
            apellido: clean.apellido,
            email: clean.email,
            asunto: clean.asunto,
            mensaje: clean.mensaje,
          }),
        }
      );

      if (!res.ok) throw new Error("Request failed");

      setFormdata({ ...EMPTY_FORM, loading: false });
      setSent(true);
      window.setTimeout(() => setSent(false), 4500);
    } catch (err) {
      setFormdata((prev) => ({ ...prev, loading: false }));
      setError(t.contact.errFailed);
    }
  };

  const handleChange = (e) => {
    setFormdata({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <HelmetProvider>
      <Container>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{meta.title} | {t.contact.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">{t.contact.title}</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="12">
            <Alert
              variant="danger"
              className={`rounded-0 co_alert ${error ? "d-block" : "d-none"}`}
              onClose={() => setError("")}
              dismissible
            >
              <p className="my-0">{error}</p>
            </Alert>
          </Col>
          <Col lg="5" className="mb-5">
            <h3 className="color_sec py-4">{t.contact.getInTouch}</h3>
            <div className="ct_channels">
              <a className="ct_channel" href={getMailto()} aria-label={t.contact.emailAria}>
                <FaEnvelope className="ct_channel-icon" />
                <span className="ct_channel-label">Email</span>
              </a>
              <a className="ct_channel" href={getTel()} aria-label={t.contact.phoneAria}>
                <FaPhoneAlt className="ct_channel-icon" />
                <span className="ct_channel-label">Phone</span>
              </a>
            </div>
            <p>{contactConfig.description}</p>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <form onSubmit={handleSubmit} className="contact__form w-100">
              {/* Honeypot: hidden from humans, bots fill it */}
              <input
                type="text"
                name="_honey"
                value={formData._honey}
                onChange={handleChange}
                className="ct_honey"
                tabIndex="-1"
                autoComplete="off"
                aria-hidden="true"
              />
              <Row>
                <Col lg="6" className="form-group">
                  <input
                    className="form-control"
                    id="nombre"
                    name="nombre"
                    placeholder={t.contact.firstName}
                    value={formData.nombre}
                    type="text"
                    maxLength={80}
                    onChange={handleChange}
                  />
                </Col>
                <Col lg="6" className="form-group">
                  <input
                    className="form-control rounded-0"
                    id="apellido"
                    name="apellido"
                    placeholder={t.contact.lastName}
                    type="text"
                    value={formData.apellido}
                    maxLength={80}
                    onChange={handleChange}
                  />
                </Col>
              </Row>
              <Row>
                <Col lg="6" className="form-group">
                  <input
                    className="form-control rounded-0"
                    id="email"
                    name="email"
                    placeholder={t.contact.email}
                    type="email"
                    value={formData.email}
                    maxLength={120}
                    onChange={handleChange}
                  />
                </Col>
                <Col lg="6" className="form-group">
                  <input
                    className="form-control rounded-0"
                    id="asunto"
                    name="asunto"
                    placeholder={t.contact.subject}
                    type="text"
                    value={formData.asunto}
                    maxLength={150}
                    onChange={handleChange}
                  />
                </Col>
              </Row>
              <textarea
                className="form-control rounded-0"
                id="mensaje"
                name="mensaje"
                placeholder={t.contact.message}
                rows="5"
                value={formData.mensaje}
                maxLength={2000}
                onChange={handleChange}
              ></textarea>
              <br />
              <Row>
                <Col lg="12" className="form-group">
                  <button className="btn ac_btn" type="submit">
                    {formData.loading ? t.contact.sending : t.contact.send}
                  </button>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </Container>

      {sent && (
        <div className="ct_success" role="status" aria-live="polite">
          <svg className="ct_check" viewBox="0 0 52 52" aria-hidden="true">
            <circle className="ct_check-circle" cx="26" cy="26" r="24" fill="none" />
            <path className="ct_check-mark" fill="none" d="M14 27l7.5 7.5L38 18" />
          </svg>
          <p className="ct_success-text">{t.contact.success}</p>
        </div>
      )}

      <div className={formData.loading ? "loading-bar" : "d-none"}></div>
    </HelmetProvider>
  );
};
