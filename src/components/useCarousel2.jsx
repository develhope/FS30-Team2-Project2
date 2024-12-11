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
  const [intervalId, setIntervalId] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const [buttons, setButtons] = useState([]);
  const totalItems = 4;

  useEffect(() => {
    if (currentIndex == 0) {
      setCards(Cardsapi1);
      setButtons(
        <div className="buttonContainer">
          <button onClick={handlePage(0)} className="currentButton"></button>
          <button onClick={handlePage(1)} className="notCurrentButton"></button>
          <button onClick={handlePage(2)} className="notCurrentButton"></button>
          <button onClick={handlePage(3)} className="notCurrentButton"></button>
        </div>
      );
    } else if (currentIndex == 1) {
      setCards(Cardsapi2);
      setButtons(
        <div className="buttonContainer">
          <button onClick={handlePage(0)} className="notCurrentButton"></button>
          <button onClick={handlePage(1)} className="currentButton"></button>
          <button onClick={handlePage(2)} className="notCurrentButton"></button>
          <button onClick={handlePage(3)} className="notCurrentButton"></button>
        </div>
      );
    } else if (currentIndex == 2) {
      setCards(Cardsapi3);
      setButtons(
        <div className="buttonContainer">
          <button onClick={handlePage(0)} className="notCurrentButton"></button>
          <button onClick={handlePage(1)} className="notCurrentButton"></button>
          <button onClick={handlePage(2)} className="currentButton"></button>
          <button onClick={handlePage(3)} className="notCurrentButton"></button>
        </div>
      );
    } else if (currentIndex == 3) {
      setCards(Cardsapi4);
      setButtons(
        <div className="buttonContainer">
          <button onClick={handlePage(0)} className="notCurrentButton"></button>
          <button onClick={handlePage(1)} className="notCurrentButton"></button>
          <button onClick={handlePage(2)} className="notCurrentButton"></button>
          <button onClick={handlePage(3)} className="currentButton"></button>
        </div>
      );
    }
  }, [currentIndex]);

  function handlePage(number) {
    setCurrentIndex(number);
  }

  function right() {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
  }
  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        right();
      }, intervalTime);
      setIntervalId(interval);
      return () => clearInterval(interval);
    }
  }, [isHovered, intervalTime]);

  const handleMouseEnter = () => {
    setIsHovered(true);
    clearInterval(intervalId);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return {
    handleMouseEnter,
    handleMouseLeave,
    currentItem: buttons,
    cards,
    handlePage,
  };
}
