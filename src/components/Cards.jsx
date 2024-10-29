import Cardsapi from "../assets/cardsapi";
import Card from "./Card";
import "./Card.css";
import { useCarousel2 } from "./useCarousel2";
const Cards = () => {
  const { list, goLeft, goRight } = useCarousel2(Cardsapi);
  return (
    <div>
      <div className="cards-container">
        <img
          onClick={goLeft}
          className="previous"
          src="src\assets\next.png"
          alt="previous"
        />
        {list.slice(0, 3).map((event) => (
          <div key={event.id}>
            <Card
              content={event.content}
              image={event.image}
              title={event.title}
            />
          </div>
        ))}
        <img
          onClick={goRight}
          className="next"
          src="src\assets\next.png"
          alt="next"
        />
      </div>
    </div>
  );
};

export default Cards;
