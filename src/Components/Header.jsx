import React, { useContext } from "react";
import Nav from "./Nav";
import "../Styles/Header.css";
import { ThemeContext } from "./ ThemeContext";

const Header = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div>
      <header className={`header ${theme}`}>
        <Nav />
      </header>
    </div>
  );
};

export default Header;
