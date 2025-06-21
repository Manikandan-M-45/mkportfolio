import {
  faGithub,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Footer.css";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer>
      <div className="container-fluid text-center bg-dark text-white mb-1">
        <div className="pt-5">
          <span className="fs-2 mx-2 linkedin">
            <FontAwesomeIcon icon={faLinkedin} />
          </span>
          <span className="fs-2 mx-2 github">
            <FontAwesomeIcon icon={faGithub} />
          </span>
          <span className="fs-2 mx-2 whatsapp">
            <FontAwesomeIcon icon={faWhatsapp} />
          </span>
        </div>
        <div className="pb-5">
          <span className="fs-4">
            Made by Mk45 with <FontAwesomeIcon icon={faHeart} />
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
