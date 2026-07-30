import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const ScrollCue = ({ to, label, fixed = false }) => (
  <Link
    to={to}
    className={`scroll_cue${fixed ? " scroll_cue--fixed" : ""}`}
    aria-label={label}
  >
    <span className="scroll_cue__arrow" aria-hidden="true" />
    <span className="scroll_cue__text">{label}</span>
  </Link>
);

export default ScrollCue;
