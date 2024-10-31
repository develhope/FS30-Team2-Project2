import { useContext } from "react";
import { MapandCalendar } from "../components/MapandCalendar";
import { Types } from "../components/types/Types";
import { LanguageContext } from "../App";
import "../components/types/Types.css";

export function Travels() {
  const lang = useContext(LanguageContext);
  return (
    <>
      <div className="banner">
        <h2>
          {lang === "it" ? "Scegli dove o quando" : "Choose where or when"}
        </h2>
      </div>
      <MapandCalendar />
      <Types
        first={lang === "it" ? "Avventura" : "Adventure"}
        second={lang === "it" ? "Cultura" : "Cultural"}
        third={lang === "it" ? "Romantic" : "Romantic"}
      />
      link1={"/adventure"}
      link2={"/culture"}
      link3={"/romance"}
    </>
  );
}
