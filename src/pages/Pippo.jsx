import { useLanguage } from "../context/LanguageContext";
import { Link } from "react-router-dom";
import scroll from "../assets/scroll.png";
import { Animation } from "../components/Animation";
import { WoodBar } from "../components/WoodBar";

export function Pippo() {
  const { language } = useLanguage();
  return (
    <>
      <Animation textIt={"404"} textEng={"404"} />
      <div style={{ display: "flex", justifyContent: "center", gap: "3rem" }}>
        <img src="src\assets\pippo.png" alt="pippo" />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            backgroundImage: "linear-gradient(to left, #b5e48c, #52b69a)",
            borderRadius: "40px",
            width: "400px",
            height: "300px",
            padding: "2rem",
            textAlign: "center",
            marginTop: "100px",
          }}
        >
          <h2>
            {language === "it"
              ? "Il nostro Pippo non ha trovato ciò che cercavi"
              : "Our Goofy has not found the page you were looking for"}
          </h2>
          <Link
            to="/"
            style={{
              marginTop: "20px",
              fontSize: "30px",
            }}
          >
            Home?
          </Link>
        </div>
      </div>
    </>
  );
}
