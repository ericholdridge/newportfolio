import React from "react";
import Container from "../../GlobalContainer/Container";
import Heading from "../../Heading";
// Styles
import "./Contact.scss";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <Container className="contact-container">
        <Heading headingTitle="Contact" />
        <form
          name="contact"
          method="post"
          action="/contact"
          data-netlify="true"
        >
          <div>
            <input type="hidden" name="form-name" value="contact" />
            <input type="text" name="fullname" placeholder="Name" required />
            <input type="email" name="email" placeholder="Email" required />
          </div>
          <textarea
            name="message"
            cols="30"
            rows="10"
            placeholder="Message"
            required
          ></textarea>
          <button className="send">
            {"<"} Email Me {"/>"}
          </button>
        </form>
      </Container>
    </section>
  );
};

export default Contact;
