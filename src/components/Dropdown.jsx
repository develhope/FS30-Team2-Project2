import { useContext, useState } from "react";

import "./Navbar.css";
import { LanguageContext } from "../App";

export function Dropdown() {
  const [open, setOpen] = useState(false);
  const lang = useContext(LanguageContext);

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
      <div className="dropdown">
        <img
          id="userAreaLogo"
          src="src\assets\key.png"
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
                {lang === "it" ? "Ricordami" : "Remember me"}
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
              {lang === "it" ? "Accedi" : "Login"}
            </button>
            <button onClick={reset}>Reset</button>
          </div>
        ) : null}
      </div>
    );
  } else {
    return (
      <div className="dropdown">
        <h2>
          {lang === "it"
            ? `ciao, ${loggedUsername}!`
            : `hi, ${loggedUsername}!`}
        </h2>
        <button onClick={cleanMemory}>
          {lang === "it" ? "Esci" : `Logout`}
        </button>
      </div>
    );
  }
}
