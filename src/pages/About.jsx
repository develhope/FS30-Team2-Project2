/** @format */
import { Animation } from "../components/Animation";
import { WoodBar } from "../components/WoodBar";
import "./About.css";
import Users from "../assets/users";

const users = [
  {
    name: "Andrea Cosma Marchetti",
    email: "andreacosmamarchetti@yahoo.com",
    number: "+393333306442",
    photo: "../assets/profileImages/andreaImg.png",
    linkedin: "https://www.linkedin.com/in/andrea-cosma-marchetti-b5653632b/",
  },
  {
    name: "Noemi D'Asta",
    email: "noemi.dasta18@gmail.com",
    number: "+393274984986",
    photo: "noemiImg.jpeg",
    linkedin: "https://www.linkedin.com/in/noemi-d-asta-182236274/",
  },
  {
    name: "Giancosimo Calabrese",
    email: "giancx91@gmail.com",
    number: "+39359595944",
    photo: "GianCosimoImg.jpg",
    linkedin: "https://www.linkedin.com/in/giancosimo-calabrese-4b0705336/",
  },
  {
    name: "Fiamma Ferrone",
    email: "fiammaferrone149@gmail.com",
    number: "+393516418375",
    photo: "ff.jpg",
    linkedin: "https://www.linkedin.com/in/fiamma-ferrone/",
  },
  {
    name: "Stanislao Tufo",
    email: "stanitufo@gmail.com",
    photo: "stani.jpg",
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
