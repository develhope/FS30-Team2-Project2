import { MapandCalendar } from "../components/MapandCalendar";
import { useLanguage } from "../context/LanguageContext";
import "../components/types/Types.css";
import { Types } from "../components/types/Types";
import { Animation } from "../components/Animation";
import { WoodBar } from "../components/WoodBar";

export function Travels() {
  const { language } = useLanguage();
  return (
    <>
      <Animation textIt={"Viaggi"} textEng={"Travels"} />
      <WoodBar />
      <div className="banner">
        <h2 className="bannerText">
          {language === "it" ? "Scegli dove o quando" : "Choose where or when"}
        </h2>
      </div>
      <MapandCalendar />
      <Types
        first={language === "it" ? "Avventura" : "Adventure"}
        second={language === "it" ? "Cultura" : "Cultural"}
        third={language === "it" ? "Romantico" : "Romantic"}
        link1={"/adventure"}
        link2={"/culture"}
        link3={"/romance"}
      />
    </>
  );
}
