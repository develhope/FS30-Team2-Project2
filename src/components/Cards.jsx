import Card from "./Card";
import "./Card.css";
import { useCarousel2 } from "./useCarousel2";
import { useLanguage } from "../context/LanguageContext";
import { useState } from "react";
import PopUpPayment from "./PopUpPayment";

const Cards = () => {
  const { language } = useLanguage();
  const { cards, handleMouseEnter, handleMouseLeave, buttons } =
    useCarousel2(4000);
  const [displayPayment, setDisplayPayment] = useState(false);

  const handlePayment = () => setDisplayPayment(true);

  return (
    <div className="container-carousel-cards">
      <div className="title-cards">
        <h1>
          Le nostre <span className="style-text-top">top destination</span>
        </h1>
      </div>
      <div className="cards-container">
        {cards.map((event) => (
          <div
            key={event.id}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Card
              content={language === "it" ? event.contentIt : event.contentEng}
              image={event.image}
              title={language === "it" ? event.titleIt : event.titleEng}
              data={event.date}
              price={event.price}
            />
            <div className="event-footer">
              <div className="price-container">
                <p>
                  {language === "it" ? "Prezzo:" : "Price:"} {event.price}{" "}
                  {event.currency}
                </p>
              </div>
              <div>
                <button className="payment-button" onClick={handlePayment}>
                  {language === "it" ? "Paga" : "Pay"} {event.price}{" "}
                  {event.currency}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        {buttons}
      </div>

      {displayPayment && (
        <PopUpPayment onClick={() => setDisplayPayment(false)} />
      )}
    </div>
  );
};

export default Cards;
