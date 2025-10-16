import { useContext } from "react";
import { ThemeContext } from "../utils/ThemeContext";

const Sidebar = () => {
  const { theme } = useContext(ThemeContext);

  const sidebarStyle =
    theme === "dark"
      ? {
          backgroundColor: "#29323c",
          color: "white",
          width: "20%",
          margin: "0",
          padding: "20px",
          height: "calc(100vh - 178px)",
          display: "flex",
          flexDirection: "column",
          gap: "15px",
        }
      : {
          backgroundColor: "bisque",
          color: "black",
          width: "20%",
          margin: "0",
          padding: "20px",
          height: "calc(100vh - 178px)",
          display: "flex",
          flexDirection: "column",
          gap: "15px",
        };

  const linkStyle = {
    textDecoration: "none",
    color: theme === "dark" ? "white" : "black",
    display: "flex",
    alignItems: "center",
    gap: "10px",
    fontSize: "16px",
  };

  const linkHover = (e) => {
    e.target.style.color = "#0077ff";
  };

  const linkLeave = (e) => {
    e.target.style.color = theme === "dark" ? "white" : "black";
  };

  return (
    <div style={sidebarStyle}>
      <h2 style={{ marginBottom: "10px" }}>Menu</h2>

      <nav style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        <a href="#" style={linkStyle} onMouseEnter={linkHover} onMouseLeave={linkLeave}>
          🏠 Dashboard
        </a>
        <a href="#" style={linkStyle} onMouseEnter={linkHover} onMouseLeave={linkLeave}>
          💻 Projects
        </a>
        <a href="#" style={linkStyle} onMouseEnter={linkHover} onMouseLeave={linkLeave}>
          👥 Team
        </a>
        <a href="#" style={linkStyle} onMouseEnter={linkHover} onMouseLeave={linkLeave}>
          ⚙️ Settings
        </a>
        <a href="#" style={linkStyle} onMouseEnter={linkHover} onMouseLeave={linkLeave}>
          📊 Analytics
        </a>
        <a href="#" style={linkStyle} onMouseEnter={linkHover} onMouseLeave={linkLeave}>
          📞 Contact
        </a>
      </nav>
    </div>
  );
};

export default Sidebar;
