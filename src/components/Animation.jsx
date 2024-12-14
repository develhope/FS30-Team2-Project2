import { useEffect, useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import "./Animation.css";

export function Animation({ textIt, textEng }) {
  const { language } = useLanguage();
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prevRotation) =>
        prevRotation >= 0 ? prevRotation - 3 : prevRotation + 3
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div id="animationContainer">
      <div id="animationCenter">
        <h1>{language === "it" ? textIt : textEng}</h1>
        <img
          src="src\assets\ship.png"
          alt="ship"
          className="ship"
          style={{
            transform: `rotate(${rotation}deg)`,
            transition: "transform 0.5s ease",
          }}
        />
      </div>
    </div>
  );
}
