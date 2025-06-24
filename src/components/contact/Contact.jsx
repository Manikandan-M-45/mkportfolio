import "./Contact.css";

const Contact = () => {
  return (
    <div className="container-fluid bg-dark py-5">
      <form className="container">
        <div className="mx-auto contact">
          <h3 className="display-4 fw-bold username letter-spacing">
            Contact Me
          </h3>
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
      </form>
    </div>
  );
};

export default Contact;
