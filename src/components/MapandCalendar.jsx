import CalendarContent from "./CalendarContent";
import { Map } from "./Map/Map";
import "./MapandCalendar.scss";

export function MapandCalendar() {
  return (
    <>
      <div
        style={{
          display: "flex",
          backgroundImage: "linear-gradient(to right, cyan, wheat, cyan)",
        }}
      >
        <CalendarContent />
        <Map />
      </div>
    </>
  );
}
