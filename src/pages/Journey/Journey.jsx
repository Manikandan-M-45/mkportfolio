import "./Journey.css"

const Journey = () => {
  return (
    <div class="container-fluid bg-dark">
      <div class="container d-flex justify-content-start align-items-end">
        <div class="education bg-warning p-3 rounded-5 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            style={{ width: "45px" }}
          >
            <path d="M219.3 .5c3.1-.6 6.3-.6 9.4 0l200 40C439.9 42.7 448 52.6 448 64s-8.1 21.3-19.3 23.5L352 102.9l0 57.1c0 70.7-57.3 128-128 128s-128-57.3-128-128l0-57.1L48 93.3l0 65.1 15.7 78.4c.9 4.7-.3 9.6-3.3 13.3s-7.6 5.9-12.4 5.9l-32 0c-4.8 0-9.3-2.1-12.4-5.9s-4.3-8.6-3.3-13.3L16 158.4l0-71.8C6.5 83.3 0 74.3 0 64C0 52.6 8.1 42.7 19.3 40.5l200-40zM111.9 327.7c10.5-3.4 21.8 .4 29.4 8.5l71 75.5c6.3 6.7 17 6.7 23.3 0l71-75.5c7.6-8.1 18.9-11.9 29.4-8.5C401 348.6 448 409.4 448 481.3c0 17-13.8 30.7-30.7 30.7L30.7 512C13.8 512 0 498.2 0 481.3c0-71.9 47-132.7 111.9-153.6z"></path>
          </svg>
        </div>
        <div className="education-detail">
          <h3>BE - Mechanical Engineering</h3>
          <p>SIT</p>
          <p>June 2015 - April 2019</p>
          <p>
            Graduated with an overall 7.2 CGPA, developing a strong
            understanding of engineering concepts, critical thinking, and
            technical problem-solving.
          </p>
        </div>
      </div>
      <div class="container d-flex justify-content-end align-items-end">
        <div class="experience bg-warning p-3 rounded-5 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            style={{ width: "45px" }}
          >
            <path d="M219.3 .5c3.1-.6 6.3-.6 9.4 0l200 40C439.9 42.7 448 52.6 448 64s-8.1 21.3-19.3 23.5L352 102.9l0 57.1c0 70.7-57.3 128-128 128s-128-57.3-128-128l0-57.1L48 93.3l0 65.1 15.7 78.4c.9 4.7-.3 9.6-3.3 13.3s-7.6 5.9-12.4 5.9l-32 0c-4.8 0-9.3-2.1-12.4-5.9s-4.3-8.6-3.3-13.3L16 158.4l0-71.8C6.5 83.3 0 74.3 0 64C0 52.6 8.1 42.7 19.3 40.5l200-40zM111.9 327.7c10.5-3.4 21.8 .4 29.4 8.5l71 75.5c6.3 6.7 17 6.7 23.3 0l71-75.5c7.6-8.1 18.9-11.9 29.4-8.5C401 348.6 448 409.4 448 481.3c0 17-13.8 30.7-30.7 30.7L30.7 512C13.8 512 0 498.2 0 481.3c0-71.9 47-132.7 111.9-153.6z"></path>
          </svg>
        </div>
        <div className="experience-detail">
          <h3>BE - Mechanical Engineering</h3>
          <p>SIT</p>
          <p>June 2015 - April 2019</p>
          <p>
            Graduated with an overall 7.2 CGPA, developing a strong
            understanding of engineering concepts, critical thinking, and
            technical problem-solving.
          </p>
        </div>
      </div>
      
    </div>
  );
};

export default Journey;
