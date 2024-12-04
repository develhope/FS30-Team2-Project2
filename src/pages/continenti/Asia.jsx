/** @format */

import { Animation } from "../../components/Animation";
import { EventsArray, eventi } from "./eventsArray";
import "./asia.css"

export function Asia() {
  return (
    <>
      <Animation textEng={"Asia"} textIt={"Asia"} />
      <div className="eventsAsia" id="events-Asia">
        {eventi
          .filter((evento) => evento.continente === "Asia")
          .map((evento, index) => (
            <EventsArray evento={evento} key={index} />
          ))}
      </div>
    </>
  );
}
