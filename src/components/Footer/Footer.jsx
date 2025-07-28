import {
  faGithub,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer text-white bg-dark">
      <div className="container py-5">
        <div className="row text-center text-md-start justify-content-between">
        
          {/* Socials */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold mb-3 text-center">Connect with Me</h5>
            <div className="d-flex justify-content-center">
              <a target="_blank" href="https://www.linkedin.com/in/manikandan-m-33988a232/" className="footer-icon linkedin">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a target="_blank" href="https://github.com/Manikandan-M-45" className="footer-icon github">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a target="_blank" href="https://wa.me/919876543210" className="footer-icon whatsapp">
                <FontAwesomeIcon icon={faWhatsapp} />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold mb-3">Contact</h5>
            <p className="small text-muted mb-1">
              <FontAwesomeIcon icon={faEnvelope} className="me-2" />
              mani171845@gmail.com
            </p>
            <p className="small text-muted">
              <FontAwesomeIcon icon={faLocationDot} className="me-2" />
              Tamil Nadu, India
            </p>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="text-center mt-4 small text-muted">
          Made with <FontAwesomeIcon icon={faHeart} className="text-danger" /> by Mk45 &copy; {new Date().getFullYear()}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
