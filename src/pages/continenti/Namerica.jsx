/** @format */

import { Animation } from "../../components/Animation";
import { eventi, EventsArray } from "./eventsArray";

export function Namerica() {
  return (
    <>
      <Animation textEng={"North America"} textIt={"Nord America"} />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique qui a
        animi eius rerum odit quo iure nam sint tempore ullam suscipit porro
        neque quidem, officiis tenetur nulla libero repellat?
      </p>
      {/* <div>
        {eventi
          .filter((evento) => evento.continente === "Nord America")
          .map((evento, index) => {
            <EventsArray evento={evento} key={index} />;
          })}
      </div> */}
    </>
  );
}
