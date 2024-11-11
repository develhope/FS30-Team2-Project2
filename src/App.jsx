import { createContext, useState } from "react";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import "./App.css";
import { Route, Routes, Link } from "react-router-dom";
import { Home } from "./pages/Home";
import { Events } from "./pages/Events";
import { Travels } from "./pages/Travels";
import { useLanguage } from "./context/LanguageContext";
import { About } from "./pages/About";
import { Services } from "./pages/Services";
import { PrivacyPolicy } from "./pages/PrivacyPolicy";
import { Pippo } from "./pages/Pippo";
import { Reviews } from "./pages/Reviews";
import { Africa } from "./pages/continenti/Africa";
import { Namerica } from "./pages/continenti/Namerica";
import { Samerica } from "./pages/continenti/Samerica";
import { Asia } from "./pages/continenti/Asia";
import { Europa } from "./pages/continenti/Europa";
import { Oceania } from "./pages/continenti/Oceania";

function App() {
  const { setLanguage } = useLanguage();
  return (
    <>
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
      <div id="totalContainer">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/events" element={<Events />}></Route>
          <Route path="/travels" element={<Travels />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/services" element={<Services />}></Route>
          <Route path="/policy" element={<PrivacyPolicy />}></Route>
          <Route path="/reviews" element={<Reviews />}></Route>
          <Route path="/africa" element={<Africa />}></Route>
          <Route path="/Namerica" element={<Namerica />}></Route>
          <Route path="/Samerica" element={<Samerica />}></Route>
          <Route path="/asia" element={<Asia />}></Route>
          <Route path="/europa" element={<Europa />}></Route>
          <Route path="/oceania" element={<Oceania />}></Route>
          <Route path="/*" element={<Pippo />}></Route>
        </Routes>

        <Footer />
      </div>
    </>
  );
}

export default App;
