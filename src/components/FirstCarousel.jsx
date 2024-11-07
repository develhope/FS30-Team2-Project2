import "./FirstCarousel.css";
import adventures from "../assets/adventures.jpg";
import roadtrip from "../assets/roadtrip.jpg";
import culture from "../assets/culture.jpg";
import romance from "../assets/romance.jpg";
import { useCarousel } from "./useCarousel";
import { WoodBar } from "./WoodBar";
import { useLanguage } from "../context/LanguageContext";
export function FirstCarousel() {
  const { language } = useLanguage();

  const trips = [
    {
      image: adventures,
      descriptionIt: "Viaggio Avventuroso per due",
      descriptionEng: "Adventurous Trip for two",
    },
    {
      image: culture,
      descriptionIt: "Viaggio nella Cultura per due",
      descriptionEng: "Cultural Trip for two",
    },
    {
      image: roadtrip,
      descriptionIt: "Viaggio On the Road per due",
      descriptionEng: "On the Road Trip for two",
    },
    {
      image: romance,
      descriptionIt: "Viaggio romantico per due",
      descriptionEng: "Romantic Trip for two",
    },
  ];

  const { list, goLeft, goRight } = useCarousel(trips);

  const first = list[0];
  const second = list[1];
  const third = list[2];
  return (
    <>
      <div id="container">
        <div id="carousel">
          <div className="arrowBg">
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
          <div className="arrowBg">
            <img
              onClick={goRight}
              id="next"
              src="src\assets\signpost.png"
              alt="next"
            />
          </div>
        </div>
        <div className="description">
          <h2>
            {language === "it" ? second.descriptionIt : second.descriptionEng}
          </h2>
        </div>
        <div className="woodbarbottom">
          <WoodBar />
        </div>
      </div>
    </>
  );
}
