import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBootstrap,
  faGithub,
  faHtml5,
} from "@fortawesome/free-brands-svg-icons";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { faCss3Alt } from "@fortawesome/free-brands-svg-icons";
import { faSquareJs } from "@fortawesome/free-brands-svg-icons";
import { faNode } from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";

import tailwindIcon from "../../images/tailwind-css-icon.png";

import "./Skills.css";

const Skill = () => {
  return (
    <div className="container-fluid bg-dark text-white py-5">
      <div className="container border-top border-5">
         <div className="text-center my-5 display-4 fw-bold username letter-spacing fst-italic">
            Skills I have
          </div>
        <div class="skills-container">
         
          <div class="skills-scroll">
            <span class="skill icon html">
              <FontAwesomeIcon icon={faHtml5} /> HTML
            </span>
            <span class="skill icon css">
              <FontAwesomeIcon icon={faCss3Alt} /> CSS
            </span>
            <span class="skill icon tailwind">
              <img src={tailwindIcon} alt="" style={{ width: "20px" }} />{" "}
              Tailwind
            </span>
            <span class="skill icon bootstrap">
              <FontAwesomeIcon icon={faBootstrap} /> Bootstrap
            </span>
            <span class="skill icon react">
              <FontAwesomeIcon icon={faReact} /> React
            </span>
          </div>
        </div>
        <div class="skills-container">
          <div class="skills-scroll2">
            <span class="skill">
              <FontAwesomeIcon icon={faGithub} /> Git/Github
            </span>
            <span class="skill icon js">
              <FontAwesomeIcon icon={faSquareJs} /> JavaScript
            </span>
            <span class="skill icon node">
              <FontAwesomeIcon icon={faNode} />
              Node.js
            </span>
            <span class="skill icon mongodb">
              <FontAwesomeIcon icon={faDatabase} /> MongoDB
            </span>
            <span class="skill">ExpressJs</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
