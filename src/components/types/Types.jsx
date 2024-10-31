import { Link } from "react-router-dom";
import "./Types.css";
import { useContext } from "react";
import { LanguageContext } from "../../App";
export function Types(props) {
  const lang = useContext(LanguageContext);
  return (
    <>
      <div>
        <h2>{lang === "it" ? "O scegli cosa" : "Or choose what"}</h2>
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
