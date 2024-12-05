/** @format */
import { Animation } from "../components/Animation";
import { WoodBar } from "../components/WoodBar";
import "./About.css";
import Users from "../assets/users";
import Andrea from "../assets/profileImages/andreaImg.png";
import Noemi from "../assets/profileImages/noemiImg.jpeg";
import Gian from "../assets/profileImages/GianCosimoImg.jpg";
import Fiamma from "../assets/profileImages/ff.jpg";
import Stani from "../assets/profileImages/stani.jpg";

const users = [
  {
    name: "Andrea Cosma Marchetti",
    email: "andreacosmamarchetti@yahoo.com",
    number: "+393333306442",
    photo: Andrea,
    linkedin: "https://www.linkedin.com/in/andrea-cosma-marchetti-b5653632b/",
  },
  {
    name: "Noemi D'Asta",
    email: "noemi.dasta18@gmail.com",
    number: "+393274984986",
    photo: Noemi,
    linkedin: "https://www.linkedin.com/in/noemi-d-asta-182236274/",
  },
  {
    name: "Giancosimo Calabrese",
    email: "giancx91@gmail.com",
    number: "+39359595944",
    photo: Gian,
    linkedin: "https://www.linkedin.com/in/giancosimo-calabrese-4b0705336/",
  },
  {
    name: "Fiamma Ferrone",
    email: "fiammaferrone149@gmail.com",
    number: "+393516418375",
    photo: Fiamma,
    linkedin: "https://www.linkedin.com/in/fiamma-ferrone/",
  },
  {
    name: "Stanislao Tufo",
    email: "stanitufo@gmail.com",
    photo: Stani,
    number: "+39359595944",
    linkedin: "https://www.linkedin.com/in/stanislao-tufo-7a6258145/",
  },
];

export function About() {
  return (
    <>
      <Animation textIt={"Contatti"} textEng={"About us"} />
      <div className="containerCardsAbout">
        {users.map((user, index) => (
          <Users user={user} key={index} />
        ))}
      </div>
    </>
  );
}
