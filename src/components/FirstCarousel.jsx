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
      descriptionIt: "un Viaggio Avventuroso?",
      descriptionEng: "an Adventurous Trip?",
    },
    {
      image: culture,
      descriptionIt: "un Viaggio nella Cultura?",
      descriptionEng: "a Cultural Trip?",
    },
    {
      image: roadtrip,
      descriptionIt: "un Viaggio On the Road?",
      descriptionEng: "an On the Road Trip?",
    },
    {
      image: romance,
      descriptionIt: "un Viaggio Romantico?",
      descriptionEng: "a Romantic Trip?",
    },
  ];

  const { list, goLeft, goRight } = useCarousel(trips);

  const first = list[0];
  const second = list[1];
  const third = list[2];
  return (
    <>
      <div id="container">
        <div className="description" id="description2">
          <h2>
            {language === "it" ? "Cos'hai in mente?" : "What's on your mind?"}
          </h2>
        </div>
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
