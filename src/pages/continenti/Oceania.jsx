/** @format */
import { EventsArray, eventi } from "./eventsArray";
import { Animation } from "../../components/Animation";
import "./oceania.css";

export function Oceania() {
  return (
    <>
      <Animation textEng={"Oceania"} textIt={"Oceania"} />
      <div className="eventsOceania" id="events-Oceania">
        {eventi
          .filter((evento) => evento.continente === "Oceania")
          .map((evento, index) => (
            <EventsArray evento={evento} key={index} />
          ))}
      </div>
    </>
  );
}
