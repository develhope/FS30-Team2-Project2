import Cards from "../components/Cards";
import { FirstCarousel } from "../components/FirstCarousel";
import { Animation } from "../components/Animation";
import { WoodBar } from "../components/WoodBar";

export function Home() {
  return (
    <>
      <Animation textIt={"Eventive Travels"} textEng={"Eventive Travels"} />
      <WoodBar />
      <FirstCarousel />
      <WoodBar />
      <Cards />
    </>
  );
}
