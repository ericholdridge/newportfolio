import React from "react";
import Container from "../../GlobalContainer/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
// Styles
import "./Socials.scss";

const Socials = () => {
  return (
    <section className="socials">
      <Container className="socials-container">
        <a
          href="https://github.com/ericholdridge"
          target="_blank"
          rel="noopener noreferrer"
          className="socials-box"
        >
          <div>
            <h3>Github</h3>
            <span>/ericholdridge</span>
          </div>
          <FontAwesomeIcon icon={faGithub} size="2x" className="socials-icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/eric-holdridge-bb6183144/"
          target="_blank"
          rel="noopener noreferrer"
          className="socials-box"
        >
          <div>
            <h3>LinkedIn</h3>
            <span>/in/eric-holdridge-bb6183144</span>
          </div>
          <FontAwesomeIcon
            icon={faLinkedin}
            size="2x"
            className="socials-icon"
          />
        </a>
      </Container>
    </section>
  );
};

export default Socials;
