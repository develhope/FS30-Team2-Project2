/** @format */

import { Animation } from "../../components/Animation";
import { eventi, EventsArray } from "./eventsArray";

export function Namerica() {
  return (
    <>
      <Animation textEng={"North America"} textIt={"Nord America"} />

      <div>
        {eventi
          .filter((evento) => evento.continente === "Nord America")
          .map((evento, index) => (
            <EventsArray evento={evento} key={index} />
          ))}
      </div>
    </>
  );
}
