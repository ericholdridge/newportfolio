import React from "react";
import Container from "../../GlobalContainer/Container";
import Nav from "../../Nav/Nav";
// Styles
import "./Hero.scss";

const Hero = () => {
  return (
    <section className="hero" id="home">
      <Nav />
      <Container className="hero-container">
        <div className="box">
          <span>Hello, I am</span>
          <h2>Eric Holdridge, </h2>
          <h2>Front End Developer</h2>
          <div className="box-info">
            <p className="design-info">
              I build high quality, responsive websites with clean user
              interfaces. Mainly targeting JavaScript, React, and other web
              development technologies.
            </p>
          </div>
          <a href="#contact" className="letsconnect">{`< Let's Connect />`}</a>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
