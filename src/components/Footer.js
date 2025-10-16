import { ThemeContext } from "../utils/ThemeContext";
import { useContext } from "react";

const Footer = () =>{
      const {theme} = useContext(ThemeContext);
    
        const footerLight = {
    backgroundColor: "rgb(243, 231, 216)",
    padding: "16px 20px",
    display: "flex",
    justifyContent: "space-between",
    gap: "12px",
    color: "black",
  };
  const footerDark = {
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

    return(
    <div style={theme == "light" ? footerLight : footerDark}>
        <h1 style={theme == "light" ? h1Light : h1Dark}>Welcome to Toggle Theme Footer</h1>
        {/* <label className="switch">
      <input type="checkbox" />
      <span className="slider"></span>
    </label> */}
</div> 
    )
};
export default Footer;
