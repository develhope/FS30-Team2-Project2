import CalendarContent from "./CalendarContent";
import { Map } from "./Map/Map";

export function MapandCalendar() {
  return (
    <>
      <div
        style={{
          display: "flex",
          backgroundImage: "radial-gradient(beige, sienna)",
        }}
      >
        <CalendarContent />
        <Map />
      </div>
    </>
  );
}
