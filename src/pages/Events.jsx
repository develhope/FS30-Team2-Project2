import { MapandCalendar } from "../components/MapandCalendar";
import { Types } from "../components/types/Types";
import { useLanguage } from "../context/LanguageContext";
import "../components/types/Types.css";
import { Animation } from "../components/Animation";
import { WoodBar } from "../components/WoodBar";

export function Events() {
  const { language } = useLanguage();
  return (
    <>
      <Animation textIt={"Eventi"} textEng={"Events"} />
      <WoodBar />
      <div className="banner">
        <h2 className="bannerText">
          {language === "it" ? "Scegli dove o quando" : "Choose where or when"}
        </h2>
      </div>
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
      />
    </>
  );
}
