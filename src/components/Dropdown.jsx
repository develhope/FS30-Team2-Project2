import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { NuovoUser } from "./NuovoUser";

import "./Navbar.css";

export function Dropdown() {
  const [open, setOpen] = useState(false);
  const [nuovo, setNuovo] = useState(false);
  const { language } = useLanguage();

  const handleOpen = () => {
    setOpen(!open);
  };
  const [data, setData] = useState({
    username: "",
    password: "",
    session: false,
  });
  function handleInput2(event) {
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
      username: "",
      password: "",
      session: false,
    });
  }
  const handleNuovo = () => {
    setNuovo(!nuovo);
  };
  const loggedUsername = !localStorage.getItem("username")
    ? sessionStorage.getItem("username")
    : localStorage.getItem("username");
  const loggedPassword = !localStorage.getItem("password")
    ? sessionStorage.getItem("password")
    : localStorage.getItem("password");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  function cleanMemory() {
    localStorage.clear();
    sessionStorage.clear();
    setUsername("");
    setPassword("");
  }
  function onLogin() {
    if (data.session == false) {
      sessionStorage.setItem("username", data.username);
      sessionStorage.setItem("password", data.password);
    } else {
      localStorage.setItem("username", data.username);
      localStorage.setItem("password", data.password);
    }
    setUsername(loggedUsername);
    setPassword(loggedPassword);
    reset();
  }

  if (!loggedUsername) {
    return (
      <>
        <div id="popUp">
          <img
            className="unloggedParrot"
            src="src\assets\parrot.png"
            alt="parrot"
          />
          <div id="popUpText">
            <h2 id="popUpLink" onClick={handleNuovo}>
              {language === "it" ? "Iscriviti" : "Sign in"}
            </h2>
            <h2>
              {language === "it"
                ? "per aggiungere eventi e viaggi al tuo calendario o crearne di nuovi!"
                : "to add events and travels to your calendar or to create new ones!"}
            </h2>
          </div>
        </div>
        <div className="dropdown">
          <img
            id="userAreaLogo"
            src="src\assets\pirate.png"
            onClick={handleOpen}
            alt="userAreaLogo"
          />
          {open ? (
            <div className="loginDropdown">
              <input
                name="username"
                value={data.username}
                onChange={handleInput2}
              />
              <input
                type="password"
                name="password"
                value={data.password}
                onChange={handleInput2}
              />
              <form>
                <label>
                  {language === "it" ? "Ricordami" : "Remember me"}
                  <input
                    type="checkbox"
                    name="session"
                    id="session"
                    checked={data.session}
                    onChange={handleInput2}
                  />
                </label>
              </form>
              <button
                disabled={!data.username || !data.password}
                onClick={onLogin}
              >
                {language === "it" ? "Accedi" : "Login"}
              </button>
              <button onClick={reset}>Reset</button>
              <button onClick={handleNuovo}>
                {language === "it" ? "Nuovo utente?" : "New user?"}
              </button>
            </div>
          ) : null}
          {nuovo ? (
            <>
              <div className="opacityFilter">
                <img
                  onClick={handleNuovo}
                  className="closeIcon"
                  src="src\assets\close.png"
                  alt="close"
                />
                <NuovoUser />
              </div>
            </>
          ) : null}
        </div>
      </>
    );
  } else {
    return (
      <div className="parrotDropdown">
        <img id="loggedParrot" src="src\assets\parrot.png" alt="parrot" />
        <div className="dropdown">
          <div className="hiddenDropdown">
            <h2>
              {language === "it"
                ? `Ciao, ${loggedUsername}!`
                : `Hi, ${loggedUsername}!`}
            </h2>
            <div id="userLinks">
              <button>{language === "it" ? "Area Utente" : `User Area`}</button>
              <button onClick={cleanMemory}>
                {language === "it" ? "Esci" : `Logout`}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
