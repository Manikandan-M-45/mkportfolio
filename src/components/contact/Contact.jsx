import "./Contact.css";

const Contact = () => {
  return (
    <div className="container-fluid bg-dark py-5">
      <form className="container">
          <h3 className="display-4 fw-bold username letter-spacing">
            Contact Me
          </h3>
        <div className="row">
          <div className="col-5">
            <div>
              <div className="px-5 py-2 my-2 rounded bg-white d-flex align-items-center gap-3">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    style={{width: "45px"}}
                  >
                    <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"></path>
                  </svg>
                </div>
                <div>
                  <p className="fs-3 fw-bolder">Email</p>
                  <p className="fs-5 fw-semibold">mani171845@gmail.com</p>
                </div>
              </div>
              <div className="px-5 py-2 my-2 rounded bg-white d-flex align-items-center gap-3">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={{width: "45px"}}><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg>
                </div>
                <div>
                  <p className="fs-3 fw-bolder">Phone</p>
                  <p className="fs-5 fw-semibold">9361540758</p>
                </div>
              </div>
             <div className="px-5 py-2 my-2 rounded bg-white d-flex align-items-center gap-3">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={{width: "45px"}}><path d="M256 0c17.7 0 32 14.3 32 32l0 34.7C368.4 80.1 431.9 143.6 445.3 224l34.7 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-34.7 0C431.9 368.4 368.4 431.9 288 445.3l0 34.7c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-34.7C143.6 431.9 80.1 368.4 66.7 288L32 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l34.7 0C80.1 143.6 143.6 80.1 224 66.7L224 32c0-17.7 14.3-32 32-32zM128 256a128 128 0 1 0 256 0 128 128 0 1 0 -256 0zm128-80a80 80 0 1 1 0 160 80 80 0 1 1 0-160z"/></svg>
                </div>
                <div>
                  <p className="fs-3 fw-bolder">Location</p>
                  <p className="fs-5 fw-semibold">Madurai</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-5">
 <div className="mx-auto contact">
        
          <div class="form-floating mb-3 mt-3">
            <input
              type="text"
              class="form-control"
              id="name"
              placeholder="Your name"
              name="name"
            />
            <label for="name">Name</label>
          </div>

          <div class="form-floating mb-3 mt-3">
            <input
              type="text"
              class="form-control"
              id="email"
              placeholder="Enter email"
              name="email"
            />
            <label for="email">Email</label>
          </div>
          <div class="form-floating mb-3 mt-3">
            <textarea
              type="text"
              class="form-control"
              id="message"
              placeholder="Enter email"
              name="message"
              style={{ height: "200px" }}
            />
            <label for="message">Message</label>
          </div>
        </div>
          </div>
        </div>
       
      </form>
    </div>
  );
};

export default Contact;
