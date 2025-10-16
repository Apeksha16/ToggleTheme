import { ThemeContext } from "../utils/ThemeContext";
import { useContext } from "react";

const HomePageDiv1 = (props) => {
  const { theme } = useContext(ThemeContext);

const data = props.data
console.log(props);
  return (
    <div className="mainDiv">
      <div className={`div1 ${theme == "dark" ? "divDark" : ""}`}>
     
        <h2>{data.heading}</h2>
        {data.details.map((item) => (
          <span key={item.key}>
            <h3>{item.key}</h3>
            <p>{item.description}</p>
          </span>
        ))}
      </div>
    </div>
  );
};

export default HomePageDiv1;
