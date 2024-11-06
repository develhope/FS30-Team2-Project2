import { createContext, useState } from "react";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import "./App.css";
import { Route, Routes, Link } from "react-router-dom";
import { Home } from "./pages/Home";
import CalendarContent from "./components/CalendarContent";
import { Events } from "./pages/Events";
import { Travels } from "./pages/Travels";
import { useLanguage } from "./context/LanguageContext";
import { About } from "./pages/About";
import { Services } from "./pages/Services";
import { PrivacyPolicy } from "./pages/PrivacyPolicy";

function App() {
  const { setLanguage } = useLanguage();
  return (
    <div>
      <div id="flagContainer">
        <img
          className="flags"
          src="src\assets\italy.png"
          alt="ita"
          onClick={() => setLanguage("it")}
        />
        <img
          className="flags"
          src="src\assets\united-kingdom.png"
          alt="eng"
          onClick={() => setLanguage("en")}
        />
      </div>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/" element={<CalendarContent />}></Route>
        <Route path="/events" element={<Events />}></Route>
        <Route path="/travels" element={<Travels />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/services" element={<Services />}></Route>
        <Route path="/policy" element={<PrivacyPolicy />}></Route>
        <Route
          path="/reviews"
          element={
            <div>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur
              quam ea illo! Nam harum, earum aliquid odit minus aperiam
              inventore ab deleniti nihil doloremque sed incidunt natus itaque
              reprehenderit officiis.
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
    </div>
  );
}

export default App;
