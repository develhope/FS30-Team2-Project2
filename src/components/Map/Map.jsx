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
              <a href=""></a>europa
            </div>
          </Link>
          <Link to="/asia">
            <div className="asia">
              <a href=""></a>asia
            </div>
          </Link>
          <Link to="/africa">
            <div className="africa">
              <a href=""></a>africa
            </div>
          </Link>
          <Link to="/oceania">
            <div className="oceania">
              <a href=""></a>oceania
            </div>
          </Link>
          <Link to="/Namerica">
            <div className="america-nord">
              <a href=""></a>america del nord
            </div>
          </Link>
          <Link to="/Samerica">
            <div className="america-sud">
              <a href=""></a>america del sud
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
