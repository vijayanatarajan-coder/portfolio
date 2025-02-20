import React, { useContext } from "react";
import { FaGithub } from "react-icons/fa6";
import { TbMilkshake } from "react-icons/tb";
import "../Styles/Footer.css";
import { ThemeContext } from "./ ThemeContext";
import { FaLinkedin } from "react-icons/fa6";
//import EmailIcon from "./Email";

const Footer = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <footer className={`header ${theme}`}>
      <div className="footerr">
        <div className="footer-left">
          If you like my work? Buy me a MilkShake
          <TbMilkshake className="footer-icon" />
        </div>
        <div className="footer-right">
          {/* <EmailIcon /> */}
          <a
            href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://github.com/vijayanatarajan-coder"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="footer-icon" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
