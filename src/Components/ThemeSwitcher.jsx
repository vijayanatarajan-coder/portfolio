import React, { useContext } from "react";
import { ThemeContext } from "./ ThemeContext";
import { CiLight } from "react-icons/ci";
import { MdNightlightRound } from "react-icons/md";
import "../Styles/Nav.css";

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <section className="theme-toggle" onClick={toggleTheme}>
      {theme === "light" ? (
        <CiLight className="toggle-icon" />
      ) : (
        <MdNightlightRound className="toggle-icon" />
      )}
    </section>
  );
};

export default ThemeSwitcher;
