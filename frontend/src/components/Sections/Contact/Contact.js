import React from "react";
import Container from "../../GlobalContainer/Container";
import Heading from "../../Heading";
import { navigate } from "gatsby";
// Styles
import "./Contact.scss";

const Contact = () => {
  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  // Submit the form data
  const handleFormSubmit = (event) => {
    event.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": event.target.getAttribute("name"),
      }),
    })
      .then(() => navigate("/success/"))
      .catch((error) => alert(error));
  };

  return (
    <section className="contact" id="contact">
      <Container className="contact-container">
        <Heading headingTitle="Contact" />
        <form
          name="contact"
          method="post"
          onSubmit={handleFormSubmit}
          data-netlify="true"
        >
          <div>
            <input type="hidden" name="form-name" value="contact" />
            <input type="text" name="Name" placeholder="Name" required />
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
