import { Link } from "react-router-dom";
//<NavLink to="/"> <NavLink />;

const Footer = () => {
  return (
    <footer className="footer">
      <nav>
        <ul>
          <li className="footer__menu-item">
            <a className="footer__menu-link" href="/">
              A jugar
            </a>
          </li>
          <li className="footer__menu-item">
            <Link to="/instructions" className="footer__menu-link active">Instrucciones{" "}</Link>
          </li>
        </ul>
      </nav>
      <small className="footer__copy">© Adalab</small>
    </footer>
  );
};
export default Footer;

/* 
import { Link } from "react-router-dom";
//<NavLink to="/"> <NavLink />;
//importar link

const Footer = () => {
  return (
    <footer class="footer">
      <nav>
        <ul>
          <li class="footer__menu-item">
            <a class="footer__menu-link" href="#/">
              A jugar
            </a>
          </li>
          <li class="footer__menu-item">
            <a class="footer__menu-link active" href="#/instructions">
              ¿Cómo se juega?
            </a>
          </li>
          <li class="footer__menu-item">
            <a class="footer__menu-link" href="#/options">
              Más opciones
            </a>
          </li>
        </ul>
      </nav>
      <small class="footer__copy">© Adalab</small>
    </footer>
  );
};
export default Footer;

*/
