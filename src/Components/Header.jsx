import React, { useContext } from "react";
import Nav from "./Nav";
import "../Styles/Header.css";
import { ThemeContext } from "./ ThemeContext";

const Header = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <header className={`header ${theme}`} role="banner">
      <nav aria-label="Main navigation">
        <Nav />
      </nav>
    </header>
  );
};

export default Header;
