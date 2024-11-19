import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { UserList } from "../assets/UserList";

import "./Navbar.css";
const nameCheck = UserList.filter(check);
function check(value) {
  return value;
}
export function Dropdown() {
  const [open, setOpen] = useState(false);
  const [nuovo, setNuovo] = useState(false);
  const { language } = useLanguage();
  const [hidden, setHidden] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  const [data, setData] = useState({
    username: "",
    password: "",
    session: false,
  });
  const [data2, setData2] = useState({
    username: "",
    password: "",
    email: "",
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
  function handleInput3(event) {
    const name = event.target.name;
    const value = event.target.value;
    setData2((d) => {
      return {
        ...d,
        [name]: value,
      };
    });
  }
  function reset2() {
    setData2({
      username: "",
      password: "",
      email: "",
    });
  }
  function createNew() {
    const isValidUser = () => {
      const userExistsInList = UserList.some(
        (user) => user.username === data2.username
      );
      return userExistsInList;
    };
    if (isValidUser()) {
      alert(
        language === "it"
          ? "Username già esistente!"
          : "Username already in use!"
      );
    } else {
      sessionStorage.setItem("username", data2.username);
      sessionStorage.setItem("password", data2.password);
      localStorage.setItem("username", data2.username);
      localStorage.setItem("password", data2.password);
      alert(
        language === "it"
          ? "Profilo creato correttamente!"
          : "Profile created successfully!"
      );
      reset2();
      setNuovo(false);
    }
  }
  function handleToggle() {
    {
      hidden ? setHidden(false) : setHidden(true);
    }
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
    const isValidUser = () => {
      const userExistsInList = UserList.some(
        (user) =>
          user.username === data.username && user.password === data.password
      );
      const storedUsername =
        localStorage.getItem("username") || sessionStorage.getItem("username");
      const storedPassword =
        localStorage.getItem("password") || sessionStorage.getItem("password");
      const userExistsInStorage =
        storedUsername === data.username && storedPassword === data.password;
      return userExistsInList || userExistsInStorage;
    };
    if (isValidUser()) {
      if (data.session === false) {
        sessionStorage.setItem("username", data.username);
        sessionStorage.setItem("password", data.password);
      } else {
        localStorage.setItem("username", data.username);
        localStorage.setItem("password", data.password);
      }
      setUsername(data.username);
      setPassword(data.password);
      reset();
    } else {
      alert(
        language === "it"
          ? "Username o password non validi!"
          : "Invalid username or password!"
      );
    }
  }

  if (!username) {
    return (
      <>
        <div id="popUp">
          <img
            className="unloggedParrot"
            src="src\assets\parrot.png"
            alt="parrot"
            onClick={handleToggle}
          />
          {!hidden && (
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
          )}
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
                placeholder="username"
                name="username"
                value={data.username}
                onChange={handleInput2}
              />
              <input
                placeholder="password"
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
                <div id="nuovoUser">
                  <label style={{ fontSize: "15px" }}>
                    {language === "it" ? "Nome Utente" : "Username"}
                  </label>
                  <input
                    type="text"
                    name="username"
                    value={data2.username}
                    onChange={handleInput3}
                  />
                  <label style={{ fontSize: "15px" }}>Email</label>
                  <input
                    type="email"
                    name="email"
                    value={data2.email}
                    onChange={handleInput3}
                  />
                  <label style={{ fontSize: "15px" }}>Password</label>
                  <input
                    type="password"
                    name="password"
                    value={data2.password}
                    onChange={handleInput3}
                  />

                  <button
                    style={{ marginTop: "10px", fontSize: "15px" }}
                    disabled={
                      !data2.username || !data2.password || !data2.email
                    }
                    onClick={createNew}
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
              </div>
            </>
          ) : null}
        </div>
      </>
    );
  } else {
    return (
      <div className="dropdown">
        <div className="hiddenDropdown">
          <h3>
            {language === "it" ? `Ciao, ${username}!` : `Hi, ${username}!`}
          </h3>
          <div id="userLinks">
            <button>{language === "it" ? "Area Utente" : `User Area`}</button>
            <button onClick={cleanMemory}>
              {language === "it" ? "Esci" : `Logout`}
            </button>
          </div>
        </div>
      </div>
    );
  }
}
