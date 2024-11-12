import { useState } from "react";
import scroll from "../assets/scroll.png";
import { useLanguage } from "../context/LanguageContext";
export function NuovoUser() {
  const { language } = useLanguage();
  const [data2, setData2] = useState({
    username: "",
    password: "",
    email: "",
    session: false,
  });
  function handleInput3(event) {
    const name = event.target.name;
    const value = event.target.value;
    const checked = event.target.checked;
    const type = event.target.type;
    setData2((d) => {
      return {
        ...d,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }
  function reset2() {
    setData2({
      username: "",
      password: "",
      email: "",
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
          position: "absolute",
          width: "40vw",
          height: "500px",
          right: "30vw",
          backgroundImage: `url(${scroll})`,
          backgroundSize: "100% 100%",
          padding: "8rem 4vw",
        }}
      >
        <label style={{ fontSize: "15px" }}>
          {language === "it" ? "Nome Utente" : "Username"}
        </label>
        <input
          name="username2"
          value={data2.username}
          onChange={handleInput3}
        />
        <label style={{ fontSize: "15px" }}>Email</label>
        <input type="email2" name="email" value={data2.email} />
        <label style={{ fontSize: "15px" }}>Password</label>
        <input
          type="password"
          name="password"
          value={data2.password}
          onChange={handleInput3}
        />

        <button
          style={{ marginTop: "10px", fontSize: "15px" }}
          disabled={!data2.username || !data2.password || !data2.email}
        >
          {language === "it" ? "Registrati" : "Sign in"}
        </button>
        <button
          style={{ marginTop: "10px", fontSize: "15px" }}
          onClick={reset2}
        >
          Reset
        </button>
      </div>
    </>
  );
}
