import React, { useContext } from "react";
import { FaGithub } from "react-icons/fa6";
import "../Styles/Footer.css";
import { ThemeContext } from "./ ThemeContext";
import { FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <footer
      className={`footer ${theme}`}
      aria-label="Footer with social media links"
    >
      <section
        className="footerr footer-right"
        aria-labelledby="social-media-links"
      >
        <a
          href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile"
          target="_blank"
          rel="noopener noreferrer"
          title="Visit my LinkedIn profile"
          aria-label="LinkedIn profile"
        >
          <FaLinkedin className="footer-icon" aria-hidden="true" />
        </a>

        <a
          href="https://github.com/vijayanatarajan-coder"
          target="_blank"
          rel="noopener noreferrer"
          title="Visit my GitHub profile"
          aria-label="GitHub profile"
        >
          <FaGithub className="footer-icon" aria-hidden="true" />
        </a>
      </section>
    </footer>
  );
};

export default Footer;
