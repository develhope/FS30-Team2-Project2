import { createContext, useState } from "react";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import "./App.css";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { Home } from "./pages/Home";

import { Events } from "./pages/Events";
import { Travels } from "./pages/Travels";

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
      <BrowserRouter>
        <LanguageContext.Provider value={lang}>
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/" element={<CalendarContent />}></Route>
            <Route path="/events" element={<Events />}></Route>
            <Route path="/travels" element={<Travels />}></Route>
            <Route
              path="/reviews"
              element={
                <div>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Tenetur quam ea illo! Nam harum, earum aliquid odit minus
                  aperiam inventore ab deleniti nihil doloremque sed incidunt
                  natus itaque reprehenderit officiis.
                </div>
              }
            ></Route>
            <Route
              path="/*"
              element={
                <>
                  <img
                    src="https://upload.wikimedia.org/wikipedia/en/5/50/Goofy_Duckipedia.png"
                    alt="pippo"
                  />
                  <div>Goofy has not found the page you were looking for.</div>
                  <Link to="/">Home?</Link>
                </>
              }
            ></Route>
          </Routes>

          <Footer />
        </LanguageContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
