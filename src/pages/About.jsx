/** @format */
import { Animation } from "../components/Animation";
import { WoodBar } from "../components/WoodBar";
import "./About.css";

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
      <div className="container">
        <div className="footerCard">
          <img
            src="\img\image.png"
            alt=""
            className="footerImg"
            width={130}
            height={120}
          />
          <h4>Andrea Cosma Marchetti</h4>
          <h5>Fullstack Developer</h5>
          <div>
            <h6 className="contacts">
              Contacts:
              <p className="email">
                email:
                <a href="mailto:" className="email">
                  cmcmcmc@gmail.com
                </a>
              </p>
              <p className="numbers">
                number:<a href="tel:+">359595944</a>
              </p>
            </h6>
            <div className="logoLinkedin">
              <img
                src="\img\logoLinkedin.png"
                alt=""
                width={40}
                height={40}
                className="imgLogo"
                onClick={handleLinkedinAndrea}
              />
            </div>
          </div>
        </div>
        <div className="footerCard">
          <img src="" alt="" className="footerImg" width={130} height={120} />
          <h4>Noemi D'Asta</h4>
          <h5>Fullstack Developer</h5>
          <div>
            <h6 className="contacts">
              Contacts:
              <p className="email">
                email:
                <a href="mailto:" className="email">
                  cmcmcmc@gmail.com
                </a>
              </p>
              <p className="numbers">
                number:<a href="tel:+">359595944</a>
              </p>
            </h6>
          </div>
          <div className="logoLinkedin">
            <img
              src="\img\logoLinkedin.png"
              alt=""
              width={40}
              height={40}
              className="imgLogo"
              onClick={handleLinkedinNoemi}
            />
          </div>
        </div>
        <div className="footerCard">
          <img src="" alt="" className="footerImg" width={130} height={120} />
          <h4>Giancosimo Calabrese</h4>
          <h5>Fullstack Developer</h5>
          <div>
            <h6 className="contacts">
              Contacts:
              <p className="email">
                email:
                <a href="mailto:" className="email">
                  cmcmcmc@gmail.com
                </a>
              </p>
              <p className="numbers">
                number:<a href="tel:+">359595944</a>
              </p>
            </h6>
          </div>
          <div className="logoLinkedin">
            <img
              src="\img\logoLinkedin.png"
              alt=""
              width={40}
              height={40}
              className="imgLogo"
              onClick={handleLinkedinGian}
            />
          </div>
        </div>
        <div className="footerCard">
          <img src="" alt="" className="footerImg" width={130} height={120} />
          <h4>Fiamma Ferrone</h4>
          <h5>Fullstack Developer</h5>
          <div>
            <h6 className="contacts">
              Contacts:
              <p className="email">
                email:
                <a href="mailto:" className="email">
                  cmcmcmc@gmail.com
                </a>
              </p>
              <p className="numbers">
                number:<a href="tel:+">359595944</a>
              </p>
            </h6>
          </div>
          <div className="logoLinkedin">
            <img
              src="\img\logoLinkedin.png"
              alt=""
              width={40}
              height={40}
              className="imgLogo"
              onClick={handleLinkedinFiamma}
            />
          </div>
        </div>
        <div className="footerCard">
          <img src="" alt="" className="footerImg" width={130} height={120} />
          <h4>Stanislao Tufo</h4>
          <h5>Fullstack Developer</h5>
          <div>
            <h6 className="contacts">
              Contacts:
              <p className="email">
                email:
                <a href="mailto:" className="email">
                  cmcmcmc@gmail.com
                </a>
              </p>
              <p className="numbers">
                number:<a href="tel:+">359595944</a>
              </p>
            </h6>
          </div>
          <div className="logoLinkedin">
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
      </div>
      {/* <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque
        cupiditate architecto necessitatibus suscipit officiis, nam non aut
        corrupti quibusdam hic, velit quas dicta rerum temporibus alias commodi
        cumque molestias pariatur.
      </p> */}
    </>
  );
}
