import { useState } from "react";
import scroll from "../assets/scroll.png";
import { useLanguage } from "../context/LanguageContext";
export function CreationPopUp({ textIt, textEng }) {
  const { language } = useLanguage();
  const [data, setData] = useState({
    title: "",
    content: "",
    image: "",
    session: false,
  });
  function handleInput(event) {
    const name = event.target.name;
    const value = event.target.value;
    const checked = event.target.checked;
    const type = event.target.type;
    setData((d) => {
      return {
        ...d,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }
  function reset() {
    setData({
      title: "",
      content: "",
      image: "",
      session: false,
    });
  }
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          position: "sticky",
          top: "100px",
          left: "30vw",
          width: "40vw",
          boxSizing: "border-box",
          right: "30vw",
          backgroundImage: `url(${scroll})`,
          backgroundSize: "100% 100%",
          padding: "8rem 4vw",
        }}
      >
        <h2>
          {language === "it"
            ? `Crea il tuo  ${textIt}`
            : `Create your " ${textEng}`}
        </h2>
        <label style={{ fontSize: "15px" }}>
          {language === "it" ? "Titolo" : "Title"}
        </label>
        <input
          type="text"
          name="title"
          value={data.title}
          onChange={handleInput}
        />
        <label style={{ fontSize: "15px" }}>
          {language === "it" ? "Immagine" : "Image"}
        </label>
        <input
          type="image"
          name="image"
          value={data.image}
          onChange={handleInput}
        />
        <label style={{ fontSize: "15px" }}>
          {language === "it" ? "Contenuto" : "Content"}
        </label>
        <input
          type="text"
          name="content"
          value={data.content}
          onChange={handleInput}
        />

        <button
          style={{ marginTop: "10px", fontSize: "15px" }}
          disabled={!data.title || !data.content || !data.image}
        >
          {language === "it" ? "Invio" : "Enter"}
        </button>
        <button style={{ marginTop: "10px", fontSize: "15px" }} onClick={reset}>
          Reset
        </button>
      </div>
    </>
  );
}
