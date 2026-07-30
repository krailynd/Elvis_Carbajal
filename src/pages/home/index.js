import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";
import { useLang } from "../../i18n";

export const Home = () => {
  const { content, t, lang } = useLang();
  const { introdata, meta } = content;

  return (
    <HelmetProvider>
      <section id="home" className="home">
        <Helmet>
          <meta charSet="utf-8" />
          <title> {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <div className="intro_sec d-block d-lg-flex align-items-center ">
          <div className="h_photo order-1 order-lg-2 h-100 d-flex flex-column justify-content-center align-items-center">
            <Link to="/about" className="intro-photo-link" aria-label={t.home.photoAria}>
              <img
                src={introdata.your_img_url}
                alt="Elvis Carbajal"
                className="intro-photo"
              />
            </Link>
          </div>
          <div className="text order-2 order-lg-1 h-100 d-lg-flex justify-content-center">
            <div className="align-self-center ">
              <div className="intro mx-auto">
                <h2 className="mb-1x">{introdata.title}</h2>
                <h1 className="fluidz-48 mb-1x">
                  <Typewriter
                    key={lang}
                    options={{
                      strings: [
                        introdata.animated.first,
                        introdata.animated.second,
                        introdata.animated.third,
                      ],
                      autoStart: true,
                      loop: true,
                      deleteSpeed: 10,
                    }}
                  />
                </h1>
                <p className="mb-1x">{introdata.description}</p>
                <div className="intro_btn-action pb-5">
                  <Link to="/portfolio" className="text_2">
                    <div id="button_p" className="ac_btn btn ">
                      {t.home.portfolioBtn}
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  </Link>
                  <Link to="/contact">
                    <div id="button_h" className="ac_btn btn">
                      {t.home.contactBtn}
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Link to="/portfolio" className="home_cue" aria-label={t.home.cueAria}>
          <span className="home_cue__arrow" aria-hidden="true" />
          <span className="home_cue__text">{t.home.cue}</span>
        </Link>
      </section>
    </HelmetProvider>
  );
};
