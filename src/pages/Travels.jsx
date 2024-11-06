import { MapandCalendar } from "../components/MapandCalendar";
import { useLanguage } from "../context/LanguageContext";
import "../components/types/Types.css";

export function Travels() {
  const { language } = useLanguage();
  return (
    <>
      <div className="banner">
        <h2>
          {language === "it" ? "Scegli dove o quando" : "Choose where or when"}
        </h2>
      </div>
      <MapandCalendar />
      <Types
        first={language === "it" ? "Avventura" : "Adventure"}
        second={language === "it" ? "Cultura" : "Cultural"}
        third={language === "it" ? "Romantic" : "Romantic"}
      />
      link1={"/adventure"}
      link2={"/culture"}
      link3={"/romance"}
    </>
  );
}
