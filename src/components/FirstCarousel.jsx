import { useContext, useEffect, useState } from "react";
import { LanguageContext } from "../App";
import "./FirstCarousel.css";
import adventures from "../assets/adventures.jpg";
import roadtrip from "../assets/roadtrip.jpg";
import culture from "../assets/culture.jpg";
import romance from "../assets/romance.jpg";
export function FirstCarousel() {
  const lang = useContext(LanguageContext);
  const [page, setPage] = useState(0);
  function increment(array) {
    page !== array.length - 3 ? setPage(page + 1) : setPage(0);
  }
  function decrement(array) {
    page !== 0 ? setPage(page - 1) : setPage(array.length - 3);
  }
  const trips = [
    {
      image: adventures,
      description: `${
        lang === "it"
          ? "Viaggio avventuroso per due"
          : "Adventurous Trip for two"
      }`,
    },
    {
      image: culture,
      description: `${
        lang === "it"
          ? "Viaggio nella cultura per due"
          : "Cultural Trip for two"
      }`,
    },
    {
      image: roadtrip,
      description: `${
        lang === "it"
          ? "Viaggio On the Road per due"
          : "On the Road Trip for two"
      }`,
    },
    {
      image: romance,
      description: `${
        lang === "it" ? "Viaggio romantico per due" : "Romantic Trip for two"
      }`,
    },
    {
      image: adventures,
      description: `${
        lang === "it"
          ? "Viaggio avventuroso per due"
          : "Adventurous Trip for two"
      }`,
    },
    {
      image: culture,
      description: `${
        lang === "it"
          ? "Viaggio nella cultura per due"
          : "Cultural Trip for two"
      }`,
    },
  ];
  const first = page;
  const second = page + 1 <= trips.length ? page + 1 : 0;
  const third = page + 2 <= trips.length ? page + 2 : 1;
  return (
    <>
      <div id="container">
        <div id="carousel">
          <div>
            <img
              onClick={() => decrement(trips)}
              id="previous"
              src="src\assets\next.png"
              alt="previous"
            />
          </div>
          <div className="lateral">
            <img
              onClick={() => decrement(trips)}
              className="firstImage"
              src={trips[first].image}
              alt="firstImage"
            />
          </div>
          <div className="central">
            <img
              className="secondImage"
              src={trips[second].image}
              alt="secondImage"
            />
          </div>

          <div className="lateral">
            <img
              onClick={() => increment(trips)}
              className="thirdImage"
              src={trips[third].image}
              alt="thirdImage"
            />
          </div>
          <div>
            <img
              onClick={() => increment(trips)}
              id="next"
              src="src\assets\next.png"
              alt="next"
            />
          </div>
        </div>
        <div className="description">
          <h2>{trips[second].description}</h2>
        </div>
      </div>
    </>
  );
}
