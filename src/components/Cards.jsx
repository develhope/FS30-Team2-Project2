import useCardsApi from "./useCardsApi";
import Card from "./Card";
import "./Card.css";
import { useCarousel2 } from "./useCarousel2";
import { useLanguage } from "../context/LanguageContext";
import { useEffect } from "react";
import { Button } from "./Button";
const buttonList = Button;
const Cards = () => {
  const { language } = useLanguage();
  const { cards } = useCardsApi();
  const {
    list,
    goLeft,
    goRight,
    handleMouseEnter,
    handleMouseLeave,
    currentItem,
  } = useCarousel2(cards, 4000, buttonList);

  useEffect(() => {}, [list]);

  return (
    <div>
      <div className="title-cards">
        <h1>
          Le nostre <span className="style-text-top">top destination</span>
        </h1>
      </div>
      <div className="cards-container">
        <img
          onClick={goLeft}
          className="previous"
          src="src\assets\arrowtop.png"
          alt="previous"
        />
        {language == "it"
          ? list.slice(0, 3).map((event) => (
              <div
                key={event.id}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <Card
                  content={event.contentIt}
                  image={event.image}
                  title={event.titleIt}
                  data={event.date}
                  price={event.price}
                />
                <div className="event-footer">
                  <div className="price-container">
                    <p>
                      Prezzo: {event.price} {event.currency}
                    </p>
                  </div>
                  <button className="payment-button">
                    Paga {event.price} {event.currency}
                  </button>
                </div>
              </div>
            ))
          : list.slice(0, 3).map((event) => (
              <div
                key={event.id}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <Card
                  content={event.contentEng}
                  image={event.image}
                  title={event.titleEng}
                  data={event.date}
                  price={event.price}
                />
                <div className="event-footer">
                  <div className="price-container">
                    <p>
                      Price: {event.price} {event.currency}
                    </p>
                  </div>
                  <button className="payment-button">
                    Pay {event.price} {event.currency}
                  </button>
                </div>
              </div>
            ))}
        <img
          onClick={goRight}
          className="next"
          src="src/assets/arrowtop.png"
          alt="next"
        />
      </div>
      <div>{currentItem}</div>
    </div>
  );
};

export default Cards;
