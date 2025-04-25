import React from "react";
import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import "../Styles/Nav.css";
import ThemeSwitcher from "./ThemeSwitcher";
import { ThemeContext } from "./ ThemeContext";
const Nav = () => {
  const { theme } = useContext(ThemeContext);

  // Apply the theme to the body element
  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.add("dark");
      document.body.classList.remove("light");
    } else {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    }
  }, [theme]);
  return (
    <nav className="navbar" aria-label="Main navigation">
      <ul>
        <li>
          <Link className="vn" to="/" title="Go to the homepage">
            VN
          </Link>
        </li>
        <li>
          <Link className="awt" to="/About" title="Learn more about me">
            About
          </Link>
        </li>
        <li>
          <Link className="awt" to="/Work" title="View my work portfolio">
            Work
          </Link>
        </li>
        <li>
          <Link
            className="awt"
            to="/Thoughts"
            title="Read my thoughts and blog"
          >
            Thoughts
          </Link>
        </li>
        <li className="mode">
          <ThemeSwitcher />
          <span>Mode</span>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
