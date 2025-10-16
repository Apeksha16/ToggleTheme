import { ThemeContext } from "../utils/ThemeContext";
import { useContext } from "react";

const Footer = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <footer className={`footer ${theme === "dark" ? "footerDark" : ""}`}>
      <div className="footer-content">
        <div className="footer-section">
          <h3 className="footer-title">InnovateTech Solutions</h3>
          <p className="footer-text">
            Transforming ideas into digital reality since 2023
          </p>
        </div>
        <div className="footer-section">
          <p className="footer-links">
            <span>Privacy Policy</span> • 
            <span> Terms of Service</span> • 
            <span> Contact Us</span>
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 InnovateTech Solutions. All rights reserved.</p>
      </div>
    </footer>
  );
};
export default Footer;
