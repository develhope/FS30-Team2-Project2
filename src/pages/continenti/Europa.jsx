/** @format */

import { Animation } from "../../components/Animation";
import { EventsArray, eventi } from "./eventsArray";
import "./Europa.css"
export function Europa() {
  return (
    <>
      <Animation textEng={"Europe"} textIt={"Europa"} />
      <div>
        <div className="eventsEuropa" id="events-Europa">
          {eventi
            .filter((evento) => evento.continente === "Europa")
            .map((evento, index) => (
              <EventsArray evento={evento} key={index} />
            ))}
        </div>{" "}
      </div>

     
    </>
  );
}
