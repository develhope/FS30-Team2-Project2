import Cards from "../components/Cards";
import { FirstCarousel } from "../components/FirstCarousel";
import { Animation } from "../components/Animation";

import WelcomeSection from "../components/WelcomeSection";
import { Reviews1 } from "./Reviews1";

export function Home() {
  return (
    <>
      {/* <Animation textIt={"Home"} textEng={"Home"} /> */}
      <FirstCarousel />

      <WelcomeSection />
      <Cards />
      <Reviews1 />
    </>
  );
}
