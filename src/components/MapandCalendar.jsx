import CalendarContent from "./CalendarContent";
import { Map } from "./Map/Map";

export function MapandCalendar() {
  return (
    <>
      <div
        style={{
          display: "flex",
          backgroundColor: "#d2b19c  ",
        }}
      >
        <CalendarContent />
        <Map />
      </div>
    </>
  );
}
