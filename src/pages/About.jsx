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
    photo:  "../assets/profileImages/andreaImg.png",
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
  function handleLinkedinAndrea() {
    const linkedinProfileUrl1 =
      "https://www.linkedin.com/in/andrea-cosma-marchetti-b5653632b/";
    window.open(linkedinProfileUrl1, "_blank");
  }

  function handleLinkedinNoemi() {
    const linkedinProfileUrl2 =
      "https://www.linkedin.com/in/noemi-d-asta-182236274/";
    window.open(linkedinProfileUrl2, "_blank");
  }

  function handleLinkedinGian() {
    const linkedinProfileUrl3 =
      "https://www.linkedin.com/in/giancosimo-calabrese-4b0705336/";
    window.open(linkedinProfileUrl3, "_blank");
  }

  function handleLinkedinFiamma() {
    const linkedinProfileUrl4 = "https://www.linkedin.com/in/fiamma-ferrone/";
    window.open(linkedinProfileUrl4, "_blank");
  }

  function handleLinkedinStani() {
    const linkedinProfileUrl5 =
      "https://www.linkedin.com/in/stanislao-tufo-7a6258145/";
    window.open(linkedinProfileUrl5, "_blank");
  }

  return (
    <>
      <Animation textIt={"Contatti"} textEng={"About us"} />
      <WoodBar />
      <div className="containerCardsAbout">
        {users.map((user, index) => (
          <Users user={user} key={index} />
        ))}

        <div className="bigCardFooter">
          <img src="\img\andreaImg.png" alt="" className="footerBigImg" />
          <h3>Andrea Cosma Marchetti</h3>
          <h5>Fullstack Developer</h5>
          <h6 className="h6Title">
            Contacts:
            <p className="text">
              - Email:
              <a href="mailto:" className="text">
                andreacosmamarchetti@yahoo.com
              </a>
            </p>
            <p className="text">
              - Number:
              <a href="tel:+" className="number">
                +39 3333306442
              </a>
            </p>
          </h6>
          <img
            src="\img\logoLinkedin.png"
            alt=""
            width={40}
            height={40}
            className="bigImgLogo"
            onClick={handleLinkedinAndrea}
          />
        </div>
        <div className="footerCard">
          <img
            src="\img\noemiImg.jpeg"
            alt=""
            className="footerImg"
            width={100}
            height={100}
          />
          <h3>Noemi D'Asta</h3>
          <h5>Fullstack Developer</h5>
          <h6 className="h6Title">
            Contacts:
            <p className="text">
              - Email:
              <a href="mailto:" className="text">
                noemi.dasta18@gmail.com
              </a>
            </p>
            <p className="text">
              - Number:
              <a href="tel:+" className="number">
                +39 3274984986
              </a>
            </p>
          </h6>
          <img
            src="\img\logoLinkedin.png"
            alt=""
            width={40}
            height={40}
            className="imgLogo"
            onClick={handleLinkedinNoemi}
          />
        </div>

        <div className="footerCard">
          <img
            src="\img\ff.jpg"
            alt=""
            className="footerImg"
            width={100}
            height={100}
          />
          <h3>Fiamma Ferrone</h3>
          <h5>Fullstack Developer</h5>
          <h6 className="h6Title">
            Contacts:
            <p className="text">
              - Email:
              <a href="mailto:" className="text">
                fiammaferrone149@gmail.com
              </a>
            </p>
            <p className="text">
              - Number:
              <a href="tel:+" className="number">
                +39 3516418375
              </a>
            </p>
          </h6>
          <img
            src="\img\logoLinkedin.png"
            alt=""
            width={40}
            height={40}
            className="imgLogo"
            onClick={handleLinkedinFiamma}
          />
        </div>
        <div className="bigCardFooter">
          <img
            src="\img\GianCosimoImg.jpg"
            alt=""
            className="footerBigImg"
            width={90}
            height={110}
          />
          <h3>Giancosimo Calabrese</h3>
          <h5>Fullstack Developer</h5>
          <h6 className="h6Title">
            Contacts:
            <p className="text">
              - Email:
              <a href="mailto:" className="text">
                giancx91@gmail.com
              </a>
            </p>
            <p className="text">
              - Number:
              <a href="tel:+" className="number">
                +39 359595944
              </a>
            </p>
          </h6>
          <img
            src="\img\logoLinkedin.png"
            alt=""
            width={40}
            height={40}
            className="bigImgLogo"
            onClick={handleLinkedinGian}
          />
        </div>
        <div className="footerCard">
          <img
            src="\img\stani.jpg"
            alt=""
            className="footerImg"
            width={100}
            height={100}
          />
          <h3>Stanislao Tufo</h3>
          <h5>Fullstack Developer</h5>
          <h6 className="h6Title">
            Contacts:
            <p className="text">
              - Email:
              <a href="mailto:" className="text">
                stanitufo@gmail.com
              </a>
            </p>
            <p className="text">
              - Number:
              <a href="tel:+" className="number">
                {" "}
                +39 359595944
              </a>
            </p>
          </h6>
          <img
            src="\img\logoLinkedin.png"
            alt=""
            width={40}
            height={40}
            className="imgLogo"
            onClick={handleLinkedinStani}
          />
        </div>
      </div>
      <WoodBar />
      <Animation textIt={"Contatti"} textEng={"About us"} />
    </>
  );
}
// const Card = ({ user }) => {
//   return (
//   <div className="aboutCard">
//     <img src={user.photo} alt="" srcset="" />
//     <h3>{user.id}</h3>
//     <h4>Fullstack Developer</h4>
//     <p>email:{user.email}</p>
//     <p>
//       number:<a href="tel:+39">{user.number}</a>
//     </p>
//     <img
//       src="\img\logoLinkedin.png"
//       alt="linkedinLogo"
//       onClick={handleLinkedinAndrea}
//     />
//   </div>
// );
// };
