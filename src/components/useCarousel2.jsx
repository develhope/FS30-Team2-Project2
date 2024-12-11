import { useEffect, useState } from "react";
import {
  Cardsapi1,
  Cardsapi2,
  Cardsapi3,
  Cardsapi4,
} from "../assets/cardsapi1";

export function useCarousel2(intervalTime) {
  const [cards, setCards] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const totalItems = 4;

  const cardsArray = [Cardsapi1, Cardsapi2, Cardsapi3, Cardsapi4];

  useEffect(() => {
    setCards(cardsArray[currentIndex]);
  }, [currentIndex]);

  const buttons = (
    <div className="buttonContainer">
      {cardsArray.map((_, index) => (
        <button
          key={index}
          onClick={() => handlePage(index)}
          className={
            index === currentIndex ? "currentButton" : "notCurrentButton"
          }
        ></button>
      ))}
    </div>
  );

  function handlePage(number) {
    setCurrentIndex(number);
  }

  function nextSlide() {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
  }

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        nextSlide();
      }, intervalTime);
      return () => clearInterval(interval);
    }
  }, [isHovered, intervalTime]);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return {
    handleMouseEnter,
    handleMouseLeave,
    buttons,
    cards,
  };
}
