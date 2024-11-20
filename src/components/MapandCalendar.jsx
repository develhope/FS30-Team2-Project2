import CalendarContent from "./CalendarContent";
import { Map } from "./Map/Map";
import "./MapandCalendar.scss";

export function MapandCalendar() {
  return (
    <>
      <div className="unicoDiv">
        <CalendarContent />
        <Map />
      </div>
    </>
  );
}
