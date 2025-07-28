import "./Journey.css";

const Journey = () => {
  return (
    <div className="container-fluid bg-dark text-light py-5 position-relative" id="journey">
      <div className="container">
      <h2 className="text-center display-4 fw-bold fst-italic py-5 letter-spacing username">
        CAREER
      </h2>

      {/* Experience Section */}
      <div className="row justify-content-start align-items-end mb-4">
        <div className="col-md-6 col-12 mb-3 mb-md-0">
          <div className="experience-detail p-4 bg-secondary rounded-4">
            <h3>Blue Pearl Technologies</h3>
            <p>Full Stack Developer</p>
            <p>Apr 2024 - Present</p>
            <p>
              Working on MERN stack projects and building internal dashboards
              for enquiry and student management systems.
            </p>
          </div>
        </div>
        <div className="col-auto">
          <div className="experience bg-warning p-3 rounded-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              role="img"
              aria-label="Experience Icon"
              style={{ width: "45px" }}
            >
              <path d="M219.3 .5c3.1-.6 6.3-.6 9.4 0l200 40C439.9 42.7 448 52.6 448 64s-8.1 21.3-19.3 23.5L352 102.9l0 57.1c0 70.7-57.3 128-128 128s-128-57.3-128-128l0-57.1L48 93.3l0 65.1 15.7 78.4c.9 4.7-.3 9.6-3.3 13.3s-7.6 5.9-12.4 5.9l-32 0c-4.8 0-9.3-2.1-12.4-5.9s-4.3-8.6-3.3-13.3L16 158.4l0-71.8C6.5 83.3 0 74.3 0 64C0 52.6 8.1 42.7 19.3 40.5l200-40zM111.9 327.7c10.5-3.4 21.8 .4 29.4 8.5l71 75.5c6.3 6.7 17 6.7 23.3 0l71-75.5c7.6-8.1 18.9-11.9 29.4-8.5C401 348.6 448 409.4 448 481.3c0 17-13.8 30.7-30.7 30.7L30.7 512C13.8 512 0 498.2 0 481.3c0-71.9 47-132.7 111.9-153.6z"></path>
            </svg>
          </div>
        </div>
      </div>

      {/* Education Section */}
      <div className="row justify-content-end align-items-end">
        <div className="col-auto">
          <div className="education bg-warning p-3 rounded-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              role="img"
              aria-label="Education Icon"
              style={{ width: "45px" }}
            >
              <path d="M219.3 .5c3.1-.6 6.3-.6 9.4 0l200 40C439.9 42.7 448 52.6 448 64s-8.1 21.3-19.3 23.5L352 102.9l0 57.1c0 70.7-57.3 128-128 128s-128-57.3-128-128l0-57.1L48 93.3l0 65.1 15.7 78.4c.9 4.7-.3 9.6-3.3 13.3s-7.6 5.9-12.4 5.9l-32 0c-4.8 0-9.3-2.1-12.4-5.9s-4.3-8.6-3.3-13.3L16 158.4l0-71.8C6.5 83.3 0 74.3 0 64C0 52.6 8.1 42.7 19.3 40.5l200-40zM111.9 327.7c10.5-3.4 21.8 .4 29.4 8.5l71 75.5c6.3 6.7 17 6.7 23.3 0l71-75.5c7.6-8.1 18.9-11.9 29.4-8.5C401 348.6 448 409.4 448 481.3c0 17-13.8 30.7-30.7 30.7L30.7 512C13.8 512 0 498.2 0 481.3c0-71.9 47-132.7 111.9-153.6z"></path>
            </svg>
          </div>
        </div>
        <div className="col-md-6 col-12 mt-3 mt-md-0">
          <div className="education-detail p-4 bg-secondary rounded-4">
            <h3>BE - Mechanical Engineering</h3>
            <p>Sethu Institute of Technology</p>
            <p>June 2018 - April 2022</p>
            <p>
              Graduated with 8.1 CGPA, gaining strong foundations in engineering
              principles, logic, and problem-solving.
            </p>
          </div>
        </div>
      </div>

      {/* Timeline Line */}
      <div className="timeline-line d-none d-md-block"></div>
    </div>
    </div>
  );
};

export default Journey;
