import star1 from "../assets/stars/1.png";
import star2 from "../assets/stars/2.png";
import star3 from "../assets/stars/3.png";
import star4 from "../assets/stars/4.png";
import star5 from "../assets/stars/5.png";
import "./Reviews.css";

export default function Review({ title, stars, review }) {
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
    <div className="reviewCard">
      <h2>{title}</h2>
      <img className="ratings" src={source()} alt="stars" />
      <h3>{review}</h3>
    </div>
  );
}
