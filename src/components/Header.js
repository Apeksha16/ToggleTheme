import { useContext, useState } from "react";
import { ThemeContext } from "../utils/ThemeContext";

const Header = () => {
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <header className={`header ${theme === "dark" ? "headerDark" : ""}`}>
      <div className="header-content">
        <h1 className="header-title">
          🚀 InnovateTech Solutions
        </h1>
        <p className="header-subtitle">
          Building the future with cutting-edge technology
        </p>
      </div>
      <div className="header-controls">
        <span className="theme-label">
          {theme === "light" ? "Light" : "Dark"} Mode
        </span>
        <label className="switch">
          <input 
            type="checkbox" 
            onChange={toggleTheme}
            checked={theme === "dark"}
          />
          <span className="slider"></span>
        </label>
      </div>
    </header>
  );
};
export default Header;
