import { MapandCalendar } from "../components/MapandCalendar";
import { Types } from "../components/types/Types";
import { useLanguage } from "../context/LanguageContext";
import "../components/types/Types.css";
import { Animation } from "../components/Animation";
import { WoodBar } from "../components/WoodBar";
import music from "../assets/guitar.png";
import celebrations from "../assets/garland.png";
import live from "../assets/live-show.png";

export function Events() {
  const { language } = useLanguage();
  return (
    <>
      <Animation textIt={"Eventi"} textEng={"Events"} />
      <WoodBar />

      <MapandCalendar />
      <Types
        first={language === "it" ? "Musica" : "Music"}
        second={
          language === "it" ? "Feste e Sagre" : "Celebrations and Festivals"
        }
        third={language === "it" ? "Spettacoli dal vivo" : "Live Entertainment"}
        link1={"/music"}
        link2={"/CaF"}
        link3={"/live"}
        image1={music}
        image2={celebrations}
        image3={live}
      />
    </>
  );
}
