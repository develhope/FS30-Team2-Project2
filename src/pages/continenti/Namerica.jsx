/** @format */

import { Animation } from "../../components/Animation";
import { EventsArray, eventi } from "./eventsArray";
import "./Namerica.css";

export function Namerica() {
  return (
    <>
      <Animation textEng={"North America"} textIt={"Nord America"} />
      <div className="eventsNamerica" id="events-north-america">
        {eventi
          .filter((evento) => evento.continente === "Nord America")
          .map((evento, index) => (
            <EventsArray evento={evento} key={index} />
          ))}
      </div>
    </>
  );
}
