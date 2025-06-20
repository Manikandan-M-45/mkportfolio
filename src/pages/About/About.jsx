import React from "react";
import "../About/About.css";
import about from '../../images/about.png'

const About = () => {
  return (
    <div className="container-fluid bg-dark text-white ">
      <div className="container border-top border-5 px-5 py-4">
        <div className="d-flex flex-column flex-lg-row flex-column-reverse flex-lg-row align-items-center">
          <div>
            <img src={about} alt="" style={{width: "100%"}} />
          </div>
        <div>
          <h3 className="text-center display-4 fw-bold username letter-spacing">About Me</h3>
          <p className="fs-5 lh-base my-5">
            I’m a Full-Stack Developer with 1 year of hands-on experience
            building web applications using modern technologies like React,
            Node.js, Express, and MongoDB. I focus on writing clean,
            maintainable code and creating seamless user experiences. My
            background includes working on both freelance and team-based
            projects, contributing to all phases of development—from planning
            and designing to deploying live applications. I enjoy solving
            real-world problems and constantly strive to improve my skills.
          </p>
        </div>
        </div>

        {/* <div>
          <h3 className="text-center">Collabrative Approach</h3>
          <p>
            I thrive in collaborative environments, working closely with
            designers, backend developers, and other stakeholders to deliver
            cohesive and effective digital solutions.
          </p>
        </div>

        <div>
          <h3 className="text-center">Technical Expertise</h3>
          <p>
            My expertise lies in translating design mockups and wireframes into
            code, ensuring every detail is meticulously implemented to align
            with the vision of UX/UI designers. I am committed to optimizing web
            performance, focusing on fast load times and smooth interactions to
            enhance the overall user experience.
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default About;
