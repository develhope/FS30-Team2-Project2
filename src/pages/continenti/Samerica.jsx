/** @format */

import { Animation } from "../../components/Animation";
import { EventsArray, eventi } from "./eventsArray";
import "./Samerica.css";
export function Samerica() {
  return (
    <>
      <div className="eventsSamerica" id="events-south-america">
        {eventi
          .filter((evento) => evento.continente === "Sud America")
          .map((evento, index) => (
            <EventsArray evento={evento} key={index} />
          ))}
      </div>
    </>
  );
}
