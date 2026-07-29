import React from "react";
import "./style.css";
import {
  FaGithub,
  FaFacebookF,
  FaLinkedin,
  FaYoutube,
  FaTwitch,
  FaInstagram,
  FaSnapchatGhost,
  FaTiktok,
  FaEnvelope,
  FaCircle
} from "react-icons/fa";
import { socialprofils } from "../../content_option";

// X (formerly Twitter) logo — inline SVG so it works with any react-icons version
export const XIcon = (props) => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 24 24"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
  </svg>
);

const ICON_MAPPING = {
  default: FaCircle,
  email: FaEnvelope,
  facebook: FaFacebookF,
  github: FaGithub,
  instagram: FaInstagram,
  linkedin: FaLinkedin,
  snapchat: FaSnapchatGhost,
  tiktok: FaTiktok,
  twitter: XIcon,
  x: XIcon,
  twitch: FaTwitch,
  youtube: FaYoutube
};

// Sidebar shows only: email, GitHub and LinkedIn
const SIDEBAR_PLATFORMS = ["email", "github", "linkedin"];

export const Socialicons = (params) => {
  return (
    <div className="stick_follow_icon">
      <ul>
        {Object.entries(socialprofils)
          .filter(([platform]) => SIDEBAR_PLATFORMS.includes(platform))
          .map(([platform, url]) => {
            const IconComponent = ICON_MAPPING[platform] || ICON_MAPPING.default;
            const isEmail = platform === "email";
            return (
              <li key={platform}>
                <a
                  href={url}
                  {...(isEmail
                    ? { "aria-label": "Send me an email" }
                    : { target: "_blank", rel: "noopener noreferrer" })}
                >
                  <IconComponent />
                </a>
              </li>
            );
          })}
      </ul>
      <p>Contact Me</p>
    </div>
  );
};
