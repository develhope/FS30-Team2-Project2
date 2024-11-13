import Cardsapi from "../assets/cardsapi";
import Card from "./Card";
import "./Card.css";
import { useCarousel2 } from "./useCarousel2";
import { useLanguage } from "../context/LanguageContext";
const Cards = () => {
  const { language } = useLanguage();
  const { list, goLeft, goRight } = useCarousel2(Cardsapi);
  return (
    <div>
      <div className="cards-container">
        <img
          onClick={goLeft}
          className="previous"
          src="src\assets\signpost.png"
          alt="previous"
        />
        {language == "it"
          ? list.slice(0, 3).map((event) => (
              <div key={event.id}>
                <Card
                  content={event.contentIt}
                  image={event.image}
                  title={event.titleIt}
                />
              </div>
            ))
          : list.slice(0, 3).map((event) => (
              <div key={event.id}>
                <Card
                  content={event.contentEng}
                  image={event.image}
                  title={event.titleEng}
                />
              </div>
            ))}
        <img
          onClick={goRight}
          className="next"
          src="src\assets\signpost.png"
          alt="next"
        />
      </div>
    </div>
  );
};

export default Cards;
