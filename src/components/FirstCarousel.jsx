import "./FirstCarousel.css";
import adventures from "../assets/adventures.jpg";
import roadtrip from "../assets/roadtrip.jpg";
import culture from "../assets/culture.jpg";
import romance from "../assets/romance.jpg";
import { useCarousel } from "./useCarousel";
import { useLanguage } from "../context/LanguageContext";
export function FirstCarousel() {
  const { language } = useLanguage();

  const trips = [
    {
      image: adventures,
      descriptionIt: "UN VIAGGIO AVVENTUROSO?",
      descriptionEng: "AH ADVENTUROUS TRIP?",
    },
    {
      image: culture,
      descriptionIt: "UN VIAGGIO CULTURALE?",
      descriptionEng: "A CULTURAL TRIP?",
    },
    {
      image: roadtrip,
      descriptionIt: "UN VIAGGIO ON THE ROAD?",
      descriptionEng: "AN ON THE ROAD TRIP?",
    },
    {
      image: romance,
      descriptionIt: "UN VIAGGIO ROMANTICO?",
      descriptionEng: "A ROMANTIC TRIP?",
    },
  ];

  const { list } = useCarousel(trips);

  const first = list[0];
  const second = list[1];
  const third = list[2];
  return (
    <>
      <div id="container">
        <div className="description" id="descriptionUp">
          <h1>
            {language === "it" ? (
              <span className="text-description">COS'HAI IN MENTE?</span>
            ) : (
              <span>WHAT'S ON YOUR MIND?</span>
            )}
          </h1>
        </div>
        <div id="carousel">
          <div className="lateral">
            <img className="firstImage" src={first.image} alt="firstImage" />
          </div>
          <div className="central">
            <img className="secondImage" src={second.image} alt="secondImage" />
          </div>

          <div className="lateral">
            <img className="thirdImage" src={third.image} alt="thirdImage" />
          </div>
        </div>
        <div className="description" id="descriptionDown">
          <h2>
            {language === "it" ? (
              <span className="text-description">{second.descriptionIt}</span>
            ) : (
              <span>{second.descriptionEng}</span>
            )}
          </h2>
        </div>
      </div>
    </>
  );
}
