import React from "react";
import Container from "../GlobalContainer/Container";
// Styles
import "./Nav.scss";

const Nav = () => {
  return (
    <nav>
      <Container className="nav-container">
        <div className="logo">
          <a href="/">eHoldridge</a>
        </div>
        <ul>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Projects</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
          <li>
            <a href="/">{`< Hire Me />`}</a>
          </li>
        </ul>
      </Container>
    </nav>
  );
};

export default Nav;
