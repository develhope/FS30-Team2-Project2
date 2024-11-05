import CalendarContent from "./CalendarContent";
import { Map } from "./Map/Map";

export function MapandCalendar() {
  return (
    <>
      <Map />
      <CalendarContent />
      <div
        style={{
          display: "flex",
        }}
      >
        <CalendarContent />
        <Map />
      </div>
    </>
  );
}
