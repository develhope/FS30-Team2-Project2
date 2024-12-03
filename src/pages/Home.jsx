import Cards from "../components/Cards";
import { FirstCarousel } from "../components/FirstCarousel";
import { Animation } from "../components/Animation";

import WelcomeSection from "../components/WelcomeSection";

export function Home() {
  return (
    <>
      <Animation textIt={"Eventive Travels"} textEng={"Eventive Travels"} />

      <FirstCarousel />

      <WelcomeSection />
      <Cards />
    </>
  );
}
