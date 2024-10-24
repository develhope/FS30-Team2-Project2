/** @format */
import "./footer.scss";

export function Footer() {
  return (
    <footer className="footer">
      <div className="columnsContainer">
        <div className="footerColumns">
          <h4>Chi Siamo</h4>
          <ul>
            <li>Noemi D'asta</li>
            <li>Fiamma Ferrone</li>
            <li>Giancosimo Calabrese</li>
            <li>Andrea Cosma Marchetti</li>
            <li>Stanislao Tufo</li>
          </ul>
        </div>
        <div className="footerColumns">
          <h4>Contatti</h4>
          <ul>
            <li>
              <a href="tel:+">3274984886</a>
            </li>
            <li>
              <a href="/email">infoexample@gmail.com</a>
            </li>
          </ul>
        </div>
        <div className="footerColumns">
          <h4>Link inerenti</h4>
          <ul>
            <li>
              <a href="/about">Who we are</a>
            </li>
            <li>
              <a href="/services">services</a>
            </li>
            <li>
              <a href="/privacy">privacy Policy</a>
            </li>
          </ul>
        </div>

        <div className="footerColumns">
          <h4>Strumenti</h4>
          <ul>
            <li>React</li>
            <li>GitHub</li>
            <li>discord</li>
          </ul>
        </div>
      </div>
      <div className="socialIcons">
        <a href="http://"></a>
        <a href="http://"></a>
      </div>
      <hr />
      <div>
      <p>&copy;<a href="/link">EventiveTravels</a>, all rights deserved.</p>
      </div>
    </footer>
  );
}
