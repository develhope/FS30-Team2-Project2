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
  function onLogin() {
    console.log(data);
  }

  return (
    <div id="dropdown">
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
          <button disabled={!data.username || !data.password} onClick={onLogin}>
            {lang === "it" ? "Accedi" : "Login"}
          </button>
          <button onClick={reset}>Reset</button>
        </div>
      ) : null}
    </div>
  );
}