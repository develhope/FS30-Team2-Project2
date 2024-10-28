import Cards from "../components/Cards";
import { FirstCarousel } from "../components/FirstCarousel";
import { MapandCalendar } from "../components/MapandCalendar";

export function Home() {
  return (
    <>
      <FirstCarousel />
      <MapandCalendar />
      <Cards />
    </>
  );
}
