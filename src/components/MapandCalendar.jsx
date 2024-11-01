import CalendarContent from "./CalendarContent";
import { Map } from "./Map/Map";

export function MapandCalendar() {
  return (
    <>
      <div
      // style={{
      //   display: "flex",
      // }}
      >
        <CalendarContent />
        <Map />
      </div>
    </>
  );
}
