import "./Contact.css";

const Contact = () => {
  return (
    <div className="container-fluid bg-dark py-5 text-light" id="contact">
      <form className="container">
        <h3 className="display-4 fw-bold username letter-spacing text-center mb-5">
          Contact Me
        </h3>

        <div className="row gy-4">
          {/* Left: Info Cards */}
          <div className="col-12 col-md-6">
            <div className="d-flex flex-column gap-4">
              {/* Email */}
              <div className="contact-card bg-white d-flex align-items-center gap-3 p-3 rounded">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="contact_icon"
                >
                  <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
                </svg>
                <div>
                  <p className="fs-4 fw-bold mb-1 text-dark">Email</p>
                  <p className="fs-6 mb-0 text-muted">mani171845@gmail.com</p>
                </div>
              </div>

              {/* Phone */}
              <div className="contact-card bg-white d-flex align-items-center gap-3 p-3 rounded">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="contact_icon"
                >
                  <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
                </svg>
                <div>
                  <p className="fs-4 fw-bold mb-1 text-dark">Phone</p>
                  <p className="fs-6 mb-0 text-muted">9361540758</p>
                </div>
              </div>

              {/* Location */}
              <div className="contact-card bg-white d-flex align-items-center gap-3 p-3 rounded">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 640"
                  className="contact_icon"
                >
                  <path d="M196.3 512L103.4 512L103.4 212.9L196.3 212.9L196.3 512zM149.8 172.1C120.1 172.1 96 147.5 96 117.8C96 103.5 101.7 89.9 111.8 79.8C121.9 69.7 135.6 64 149.8 64C164 64 177.7 69.7 187.8 79.8C197.9 89.9 203.6 103.6 203.6 117.8C203.6 147.5 179.5 172.1 149.8 172.1zM543.9 512L451.2 512L451.2 366.4C451.2 331.7 450.5 287.2 402.9 287.2C354.6 287.2 347.2 324.9 347.2 363.9L347.2 512L254.4 512L254.4 212.9L343.5 212.9L343.5 253.7L344.8 253.7C357.2 230.2 387.5 205.4 432.7 205.4C526.7 205.4 544 267.3 544 347.7L544 512L543.9 512z" />
                </svg>
                <div>
                  <p className="fs-4 fw-bold mb-1 text-dark">LinkedIn</p>
                  <p className="fs-6 mb-0 text-muted">Manikandan M</p>
                </div>
              </div>
              {/* Location */}
              <div className="contact-card bg-white d-flex align-items-center gap-3 p-3 rounded">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="contact_icon"
                >
                  <path d="M256 0c17.7 0 32 14.3 32 32l0 34.7C368.4 80.1 431.9 143.6 445.3 224l34.7 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-34.7 0C431.9 368.4 368.4 431.9 288 445.3l0 34.7c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-34.7C143.6 431.9 80.1 368.4 66.7 288L32 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l34.7 0C80.1 143.6 143.6 80.1 224 66.7L224 32c0-17.7 14.3-32 32-32zM128 256a128 128 0 1 0 256 0 128 128 0 1 0 -256 0z" />
                </svg>
                <div>
                  <p className="fs-4 fw-bold mb-1 text-dark">Location</p>
                  <p className="fs-6 mb-0 text-muted">Madurai</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="col-12 col-md-6">
            <div className="contact-form bg-white p-4 rounded text-dark">
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Your name"
                  name="name"
                />
                <label htmlFor="name">Name</label>
              </div>

              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter email"
                  name="email"
                />
                <label htmlFor="email">Email</label>
              </div>

              <div className="form-floating mb-3">
                <textarea
                  className="form-control"
                  id="message"
                  placeholder="Enter message"
                  name="message"
                  style={{ height: "200px" }}
                />
                <label htmlFor="message">Message</label>
              </div>

              <button
                className="btn btn-warning w-100 mt-3 fw-bold"
                type="submit"
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Contact;
