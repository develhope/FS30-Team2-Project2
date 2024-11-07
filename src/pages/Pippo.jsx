import { useLanguage } from "../context/LanguageContext";
import { Link } from "react-router-dom";

export function Pippo() {
  const { language } = useLanguage();
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center", gap: "3rem" }}>
        <img
          src="https://upload.wikimedia.org/wikipedia/en/5/50/Goofy_Duckipedia.png"
          alt="pippo"
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <h2>
            {language === "it"
              ? "Pippo non ha trovato ciò che cercavi"
              : "Goofy has not found the page you were looking for"}
          </h2>
          <Link to="/">Home?</Link>
        </div>
      </div>
    </>
  );
}
