import { useContext, useState } from "react";
import { ThemeContext } from "../utils/ThemeContext";

const Header = () => {
  const toggleTheme = () => {
    console.log("click");
    console.log(theme);
    if (theme == "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  const {theme, setTheme} = useContext(ThemeContext);

  const headerLight = {
    backgroundColor: "rgb(243, 231, 216)",
    padding: "16px 20px",
    display: "flex",
    justifyContent: "space-between",
    gap: "12px",
    color: "black",
  };
  const headerDark = {
    padding: "16px 20px",
    display: "flex",
    justifyContent: "space-between",
    gap: "12px",
    backgroundColor: "#33334d",
    color: "white",
  };

  const h1Light = {
    margin: "0",
    padding: "0",
    color: "black",
  };
  const h1Dark = {
    margin: "0",
    padding: "0",
    color: "white",
  };

  return (
    <div style={theme == "light" ? headerLight : headerDark}>
      <h1 style={theme == "light" ? h1Light : h1Dark}>Welcome to Toggle Theme Header</h1>
      <label className="switch">
        <input type="checkbox" onChange={() => toggleTheme()} />
        <span className="slider"></span>
      </label>
    </div>
  );
};
export default Header;
