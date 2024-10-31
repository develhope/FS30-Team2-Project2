import { useContext } from "react";
import { MapandCalendar } from "../components/MapandCalendar";
import { Types } from "../components/types/Types";
import { LanguageContext } from "../App";
import "../components/types/Types.css";

export function Events() {
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
        first={lang === "it" ? "Musica" : "Music"}
        second={lang === "it" ? "Feste e Sagre" : "Celebrations and Festivals"}
        third={lang === "it" ? "Spettacoli dal vivo" : "Live Entertainment"}
        link1={"/music"}
        link2={"/CaF"}
        link3={"/live"}
      />
    </>
  );
}
