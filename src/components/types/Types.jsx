import { Link } from "react-router-dom";
import "./Types.css";
import { useLanguage } from "../../context/LanguageContext";
import { WoodBar } from "../WoodBar";
export function Types(props) {
  const { language } = useLanguage();
  return (
    <>
      <WoodBar />
      <div className="banner">
        <h2 className="bannerText">
          {language === "it" ? "O scegli cosa" : "Or choose what"}
        </h2>
      </div>
      <div className="container">
        <Link to={props.link1}>
          <div className="type">
            <h2>{props.first}</h2>
          </div>
        </Link>
        <Link to={props.link2}>
          <div className="type">
            <h2>{props.second}</h2>
          </div>
        </Link>
        <Link to={props.link3}>
          <div className="type">
            <h2>{props.third}</h2>
          </div>
        </Link>
      </div>
    </>
  );
}
