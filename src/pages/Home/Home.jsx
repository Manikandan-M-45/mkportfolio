import React from "react";
import "./Home.css";
import profile from "../../images/profile.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowDown } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  return (
    <div className="container-fluid bg-dark text-white">
      <div className="container p-5 mt-5">
        <div className="row mt-5">
          <div className="col-12 col-md-7 col-lg-7">
            <h2 className="display-5 fw-bold">
              Hello, I'm{" "}
              <span className="username display-1 fw-bold">MANIKANDAN 👋</span>
            </h2>
            <h3 className="mt-4">
              <span className="role">Full stack Developer 💻</span>
            </h3>
            <p className="pt-3 ms-1 fs-4">
              I build responsive, scalable, and modern web applications from
              front to back.
            </p>

            <div className="mt-5 d-flex">
              <button class="button-85">Got a project?</button>
              <button class="button-85 mx-5">
                My Resume <FontAwesomeIcon icon={faCircleArrowDown} />
              </button>
            </div>
          </div>
          <div className="col-12 col-md-5 col-lg-5 text-center mt-5">
            <div className="profile">
              <img src={profile} alt="user-profile" />
              <div className="circle"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
