import { createContext, useState } from "react";
import Cards from "./components/Cards";
import { Footer } from "./components/Footer";
import { MapandCalendar } from "./components/MapandCalendar";
import { Navbar } from "./components/Navbar";
import "./App.css";

export const LanguageContext = createContext("it");

function App() {
  const [lang, setLang] = useState("it");
  function handleSetLang(language) {
    setLang(language);
  }
  return (
    <>
      <div id="flagContainer">
        <img
          className="flags"
          src="src\assets\italy.png"
          alt="ita"
          onClick={() => handleSetLang("it")}
        />
        <img
          className="flags"
          src="src\assets\united-kingdom.png"
          alt="eng"
          onClick={() => handleSetLang("en")}
        />
      </div>
      <LanguageContext.Provider value={lang}>
        <Navbar />
        <Cards />
        <MapandCalendar />
        <Footer />
      </LanguageContext.Provider>
    </>
  );
}

export default App;
