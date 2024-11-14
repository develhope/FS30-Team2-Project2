import CalendarContent from "./CalendarContent";
import { Map } from "./Map/Map";

export function MapandCalendar() {
  return (
    <>
      <div
        style={{
          display: "flex",
          backgroundColor: "#f1e2c6 ",
        }}
      >
        <CalendarContent />
        <Map />
      </div>
    </>
  );
}
