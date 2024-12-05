import useCardsApi from "./useCardsApi";
import Card from "./Card";
import "./Card.css";
import { useCarousel2 } from "./useCarousel2";
import { useLanguage } from "../context/LanguageContext";
import { useEffect, useState } from "react";
import { Button } from "./Button";
import PopUpPayment from "./PopUpPayment";
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
  const [displayPayment, setDisplayPayment] = useState(false);

  function handlePayment() {
    setDisplayPayment(true);
  }

  useEffect(() => {}, [list]);

  return (
    <div className="container-carousel-cards">
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
                  <div>
                    <button className="payment-button" onClick={handlePayment}>
                      Paga {event.price} {event.currency}
                    </button>
                  </div>
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
                  <div>
                    <button className="payment-button" onClick={handlePayment}>
                      Pay {event.price} {event.currency}
                    </button>
                  </div>
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
      {displayPayment && (
        <PopUpPayment onClick={() => setDisplayPayment(false)} />
      )}
    </div>
  );
};

export default Cards;
