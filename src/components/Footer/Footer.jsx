import {
  faGithub,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Footer.css";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
// import {}

const Footer = () => {
  return (
    <footer>
      <div className="container-fluid text-center bg-dark text-white mb-1">
        <div className="pt-5">
          <a target="_blank" href="https://www.linkedin.com/in/manikandan-m-33988a232/" className="fs-2 mx-2 linkedin">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a target="_blank" href="https://github.com/Manikandan-M-45" className="fs-2 mx-2 github">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a target="_blank" href="" className="fs-2 mx-2 whatsapp">
            <FontAwesomeIcon icon={faWhatsapp} />
          </a>
        </div>
        <div className="pb-5">
          <a target="_blank" href="" className="fs-4">
            Made by Mk45 with <FontAwesomeIcon icon={faHeart} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
