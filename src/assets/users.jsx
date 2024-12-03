/** @format */ import { About } from "../pages/About";
import { Link } from "react-router-dom";
import "../assets/users.css";

const Users = ({ user }) => {
  return (
    <div className="aboutCard">
      <img src={user.photo} alt="" srcset="" className="profileImage" />
      <div className="nameAndTitle">
        <h3 className="text">{user.name}</h3>
        <h4 className=" text-fullstackDev">Fullstack Developer</h4>
      </div>
      <div className=" text">
        <h5 className="text">Contacts:</h5>
        <p  className="textContact" >
          email:{" "}
          <a href="mailto:">
            {user.email}
          </a>
        </p>
        <p className="textContact">
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
