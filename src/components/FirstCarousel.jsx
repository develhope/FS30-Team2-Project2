import { useContext, useEffect, useState } from "react";
import { LanguageContext } from "../App";
import "./FirstCarousel.css";
import adventures from "../assets/adventures.jpg";
import roadtrip from "../assets/roadtrip.jpg";
import culture from "../assets/culture.jpg";
import romance from "../assets/romance.jpg";
import { useCarousel } from "./useCarousel";
export function FirstCarousel() {
  const lang = useContext(LanguageContext);
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
  ];

  const { list, goLeft, goRight } = useCarousel(trips);

  const first = list[0];
  const second = list[1];
  const third = list[2];
  return (
    <>
      <div id="container">
        <div className="wood"></div>
        <div id="carousel">
          <div>
            <img
              onClick={goLeft}
              id="previous"
              src="src\assets\signpost.png"
              alt="previous"
            />
          </div>
          <div className="lateral">
            <img
              onClick={goLeft}
              className="firstImage"
              src={first.image}
              alt="firstImage"
            />
          </div>
          <div className="central">
            <img className="secondImage" src={second.image} alt="secondImage" />
          </div>

          <div className="lateral">
            <img
              onClick={goRight}
              className="thirdImage"
              src={third.image}
              alt="thirdImage"
            />
          </div>
          <div>
            <img
              onClick={goRight}
              id="next"
              src="src\assets\signpost.png"
              alt="next"
            />
          </div>
        </div>
        <div className="description">
          <h2>{second.description}</h2>
        </div>
        <div className="wood"></div>
      </div>
    </>
  );
}
