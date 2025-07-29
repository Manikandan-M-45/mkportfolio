import React from "react";
import "./Home.css";
import profile from "../../images/profile2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowDown } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  return (
    <div className="container-fluid bg-dark text-white">
      <div className="container p-5 mt-5">
        <div className="row mt-5">
          <div className="col-12 col-md-7 col-lg-7">
            <h2 className="display-5 fw-bold" >
              Hello, I'm{" "}
              <span className="username display-1 fw-bold  gradient-text">MANIKANDAN </span><span className="d-inline-block">👋</span>
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
            
              <button class="button-85 mx-5">  <a className="text-decoration-none text-white" href="/FSD-RES.pdf" download target="_blank" rel="noopener noreferrer">
                My Resume <FontAwesomeIcon icon={faCircleArrowDown} /></a>
              </button>
            </div>
          </div>
          <div className="col-12 col-md-5 col-lg-5 text-center mt-5">
            <div className="profile" style={{height: "500px"}}>
              <img src={profile} alt="user-profile" className="img-fluid rounded-5" style={{height: "100%"}} />
              {/* <div className="circle"></div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
