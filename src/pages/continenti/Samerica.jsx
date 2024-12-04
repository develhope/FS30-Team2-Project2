/** @format */

import { Animation } from "../../components/Animation";
import { EventsArray, eventi } from "./eventsArray";
import "./Samerica.css";
export function Samerica() {
  return (
    <>
      <Animation textEng={"South America"} textIt={"Sud America"} />
      <div className="eventsSamerica" id="events-south-america">
        {eventi
          .filter((evento) => evento.continente === "Sud America")
          .map((evento, index) => (
            <EventsArray evento={evento} key={index} />
          ))}
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique qui a
        animi eius rerum odit quo iure nam sint tempore ullam suscipit porro
        neque quidem, officiis tenetur nulla libero repellat?
      </p>
    </>
  );
}
