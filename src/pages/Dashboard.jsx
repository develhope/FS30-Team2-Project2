import CalendarContent from "../components/CalendarContent";
import { useLanguage } from "../context/LanguageContext";
import scroll from "../assets/scroll.png";
import { WoodBar } from "../components/WoodBar";

export function Dashboard() {
  const { language } = useLanguage();
  return (
    <>
      <div
        style={{ display: "flex", justifyContent: "center", margin: "1rem" }}
      >
        <p
          style={{
            backgroundImage: `url(${scroll})`,
            backgroundSize: "100% 100%",
            padding: "4rem 1rem",
          }}
        >
          {language === "it" ? "Crea un nuovo evento!" : "Create a new event!"}
        </p>
        <img
          src="src\assets\parrot.png"
          alt="parrot"
          style={{ width: "150px", height: "150px" }}
        />
        <p
          style={{
            backgroundImage: `url(${scroll})`,
            backgroundSize: "100% 100%",
            padding: "4rem 1rem",
          }}
        >
          {language === "it"
            ? "Crea un nuovo viaggio!"
            : "Create a new travel!"}
        </p>
      </div>
      <WoodBar />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h2
          style={{
            backgroundImage: `url(${scroll})`,
            backgroundSize: "100% 100%",
            padding: "10px",
            position: "relative",
            top: "-48px",
            color: "rgb(49, 48, 48)",
          }}
        >
          {language === "it"
            ? "I tuoi Eventi e Viaggi"
            : "Yours Events and Travels"}
        </h2>
      </div>
      <CalendarContent />
    </>
  );
}
