/** @format */ import { About } from "../pages/About";
import "../pages/About.css";
import { Link } from "react-router-dom";

const Users = ({ user }) => {
  return (
    <div className="aboutCard">
      <img src={user.photo} alt="" srcset="" className="profileImage" />
      <div className="nameAndTitle">
        <h3 className="profileName">{user.name}</h3>
        <h4 className="fullstackDev">Fullstack Developer</h4>
      </div>
      <div className="textProfile">
        <h5 className="blbl">Contacts:</h5>
        <p>
          email:{" "}
          <a href="mailto:" className="profileEmail">
            {user.email}
          </a>
        </p>
        <p>
          number:<a href="tel:+39">{user.number}</a>
        </p>
      </div>

      <Link to={user.linkedin}>
        <img
          src="\img\logoLinkedin.png"
          alt="linkedinLogo"
          className="linkedinLogo"
        />
      </Link>
    </div>
  );
};

export default Users;
