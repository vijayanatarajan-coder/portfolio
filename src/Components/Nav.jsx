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
    <nav className="navbar">
      <ul>
        <li>
          <Link className="vn" to="/">
            VN
          </Link>
        </li>
        <li>
          <Link className="awt" to="/About">
            About
          </Link>
        </li>
        <li>
          <Link className="awt" to="/Work">
            Work
          </Link>
        </li>
        <li>
          <Link className="awt" to="/Thoughts">
            Thoughts
          </Link>
        </li>
        <li className="mode">
          <ThemeSwitcher />
          Mode
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
