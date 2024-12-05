import CalendarContent from "../components/CalendarContent";
import { useLanguage } from "../context/LanguageContext";
import { useState } from "react";
import { CreationPopUp } from "../components/CreationPopUp";
import { Animation } from "../components/Animation";

export function Dashboard() {
  const { language } = useLanguage();
  const [openE, setOpenE] = useState(false);
  const [hover, setHover] = useState(false);
  function handleHoverOn() {
    setHover(true);
  }
  function handleHoverOff() {
    setHover(false);
  }
  function handleOpenE() {
    setOpenE(!openE);
  }
  const [openT, setOpenT] = useState(false);
  function handleOpenT() {
    setOpenT(!openT);
  }
  return (
    <div style={hover ? { cursor: "pointer" } : null}>
      <Animation textIt={"Area Utente"} textEng={"User Area"} />
      {openE && (
        <div
          style={{
            width: "100vw",
            height: "1480px",
            position: "absolute",
            top: "0px",
            right: "0px",
            zIndex: "4",
            padding: "20px",
            backgrounColor: "rgba(222, 161, 85, 0.4)",
            backdropFilter: "blur(5px)",
          }}
        >
          <img
            onClick={handleOpenE}
            src="src\assets\close.png"
            alt="close"
            onMouseEnter={handleHoverOn}
            onMouseLeave={handleHoverOff}
            style={{
              width: "5vw",
              height: "5vw",
              position: "sticky",
              top: "50px",
              left: "92vw",
            }}
          />
          <CreationPopUp textIt={"Evento"} textEng={"Events"} />
        </div>
      )}
      {openT && (
        <div
          style={{
            width: "100vw",
            height: "1480px",
            position: "absolute",
            top: "0px",
            right: "0px",
            zIndex: "4",
            padding: "20px",
            backgrounColor: "rgba(222, 161, 85, 0.4)",
            backdropFilter: "blur(5px)",
          }}
        >
          <img
            onClick={handleOpenT}
            src="src\assets\close.png"
            alt="close"
            onMouseEnter={handleHoverOn}
            onMouseLeave={handleHoverOff}
            style={{
              width: "5vw",
              height: "5vw",
              position: "sticky",
              top: "50px",
              left: "92vw",
            }}
          />
          <CreationPopUp textIt={"Viaggio"} textEng={"Travel"} />
        </div>
      )}
      <div
        style={{
          backgroundImage: "linear-gradient(to left, #b5e48c, #52b69a)",
          border: "2px solid #52b69a",
          display: "flex",
          justifyContent: "center",
          padding: "1rem",
        }}
      >
        <div>
          <p
            onMouseEnter={handleHoverOn}
            onMouseLeave={handleHoverOff}
            onClick={handleOpenE}
            style={{
              padding: "4rem 1rem",
            }}
          >
            {language === "it"
              ? "Crea un nuovo evento!"
              : "Create a new event!"}
          </p>
        </div>
        <img
          src="src\assets\parrot.png"
          alt="parrot"
          style={{ width: "150px", height: "150px" }}
        />
        <div>
          <p
            onMouseEnter={handleHoverOn}
            onMouseLeave={handleHoverOff}
            onClick={handleOpenE}
            style={{
              padding: "4rem 1rem",
            }}
          >
            {language === "it"
              ? "Crea un nuovo viaggio!"
              : "Create a new travel!"}
          </p>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h2
          style={{
            backgroundImage: "linear-gradient(to left, #b5e48c, #52b69a)",
            borderRadius: "20px",
            padding: "10px",
            position: "relative",
            top: "-10px",
            color: "rgb(49, 48, 48)",
          }}
        >
          {language === "it"
            ? "I tuoi Eventi e Viaggi"
            : "Yours Events and Travels"}
        </h2>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          position: "relative",
          top: "-70px",
        }}
      >
        <CalendarContent />
      </div>
    </div>
  );
}
