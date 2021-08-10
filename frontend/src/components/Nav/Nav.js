import React, { useState } from "react";
import Container from "../GlobalContainer/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
// Styles
import "./Nav.scss";

const Nav = () => {
  const [showNav, setShowNav] = useState(false);
  return (
    <nav>
      <Container className="nav-container">
        <div className="wrapper">
          <div className="logo">
            <a href="/">eHoldridge</a>
          </div>
          <FontAwesomeIcon
            icon={faBars}
            size="lg"
            className="navIcon"
            onClick={() => setShowNav(!showNav)}
          />
        </div>
        <ul className={showNav ? "" : "hideItems"}>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">{`< Contact />`}</a>
          </li>
        </ul>
      </Container>
    </nav>
  );
};

export default Nav;
