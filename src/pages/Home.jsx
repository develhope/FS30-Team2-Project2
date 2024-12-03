import Cards from "../components/Cards";
import { FirstCarousel } from "../components/FirstCarousel";

import WelcomeSection from "../components/WelcomeSection";

export function Home() {
  return (
    <>
      <FirstCarousel />

      <WelcomeSection />
      <Cards />
    </>
  );
}
