/** @format */

import { Animation } from "../../components/Animation";
import { EventsArray, eventi } from "./eventsArray";
import "./africa.css"
export function Africa() {
  return (
    <>
      <Animation textEng={"Africa"} textIt={"Africa"} />
      <div className="eventsAfrica" id="events-Africa">
        {eventi
          .filter((evento) => evento.continente === "Africa")
          .map((evento, index) => (
            <EventsArray evento={evento} key={index} />
          ))}
      </div>{" "}
    </>
  );
}
