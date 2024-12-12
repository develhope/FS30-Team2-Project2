import { useState } from "react";
import star1 from "../assets/stars/1.png";
import star2 from "../assets/stars/2.png";
import star3 from "../assets/stars/3.png";
import star4 from "../assets/stars/4.png";
import star5 from "../assets/stars/5.png";
import "./Reviews.css";

export default function Review({ title, stars, review, date }) {
  const [hidden, setHidden] = useState(true);

  function handleToggle() {
    {
      hidden ? setHidden(false) : setHidden(true);
    }
  }
  function source() {
    if (stars === 1) {
      return star1;
    } else if (stars === 2) {
      return star2;
    } else if (stars === 3) {
      return star3;
    } else if (stars === 4) {
      return star4;
    } else {
      return star5;
    }
  }
  return (
    <div
      className="reviewCard"
      style={
        hidden
          ? { height: "250px", marginBottom: "220px" }
          : { height: "450px", marginBottom: "0px" }
      }
      onClick={handleToggle}
    >
      <h2 style={hidden ? { padding: "0rem" } : { paddingTop: "20px" }}>
        {title}
      </h2>
      <div className="dateImage">
        <img className="ratings" src={source()} alt="stars" />
        {date}
      </div>
      {!hidden && <h4>{review}</h4>}
    </div>
  );
}
