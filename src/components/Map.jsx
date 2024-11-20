import "./Map.scss";
import { Link } from "react-router-dom";

export function Map() {
  return (
    <>
      <div id="map">
        <img src="./img/map2.png" />
        <div className="continenti">
          <Link to="/europa">
            <div className="europa">
              <p>Europa</p>
            </div>
          </Link>
          <Link to="/asia">
            <div className="asia">
              <p>Asia</p>
            </div>
          </Link>
          <Link to="/africa">
            <div className="africa">
              <p>Africa</p>
            </div>
          </Link>
          <Link to="/oceania">
            <div className="oceania">
              <p>Oceania</p>
            </div>
          </Link>
          <Link to="/Namerica">
            <div className="america-nord">
              <p>America del nord</p>
            </div>
          </Link>
          <Link to="/Samerica">
            <div className="america-sud">
              <p>America del sud</p>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
