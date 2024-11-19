import useCardsApi from "./useCardsApi";
import Card from "./Card";
import "./Card.css";
import { useCarousel2 } from "./useCarousel2";
import { useLanguage } from "../context/LanguageContext";
const Cards = () => {
  const { language } = useLanguage();
  const { cards } = useCardsApi();
  const { list, goLeft, goRight } = useCarousel2(cards);
  console.log(cards);
  console.log(list);

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
                  data={event.date}
                />
              </div>
            ))
          : list.slice(0, 3).map((event) => (
              <div key={event.id}>
                <Card
                  content={event.contentEng}
                  image={event.image}
                  title={event.titleEng}
                  data={event.date}
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
