import { useEffect, useState } from "react";
import Cardsapi from "../assets/cardsapi";

let sharedCards = [];
export default function useCardsApi() {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    setCards(Cardsapi);
  }, [cards]);

  return { cards };
}
