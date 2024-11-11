import { useEffect, useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import scroll from "../assets/scroll.png";

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
    <div
      style={{
        backgroundImage: "linear-gradient(to right, cyan, wheat, cyan)",
        height: "130px",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div>
        <img
          src="src\assets\ship.png"
          alt="ship"
          style={{
            height: "70px",
            width: "70px",
            position: "relative",
            top: "20px",
            left: "13rem",
            transform: `rotate(${rotation}deg)`,
            transition: "transform 0.5s ease",
          }}
        />
        <img
          src="src\assets\rock.png"
          alt="rock"
          style={{
            height: "40px",
            width: "40px",
            position: "relative",
            top: "40px",
            left: "-1rem",
          }}
        />
        <img
          src="src\assets\rock.png"
          alt="rock"
          style={{
            height: "40px",
            width: "40px",
            position: "relative",
            top: "-10px",
            left: "16rem",
          }}
        />
      </div>
      <div
        style={{
          width: "160px",
          marginRight: "5rem",
          backgroundImage: `url(${scroll})`,
          backgroundSize: "100% 100%",
          padding: "2rem",
          color: "sienna",
        }}
      >
        <h1>{language === "it" ? textIt : textEng}</h1>
        <img
          src="src\assets\treasure.png"
          alt="treasure"
          style={{
            height: "40px",
            width: "40px",
            marginLeft: "30px",
          }}
        />
      </div>
      <div>
        <img
          src="src\assets\island.png"
          alt="island"
          style={{
            height: "80px",
            width: "80px",
            position: "relative",
            top: "20px",
            left: "-3rem",
          }}
        />
      </div>
    </div>
  );
}
