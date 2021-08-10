import React from "react";
import Container from "../../GlobalContainer/Container";
import Heading from "../../Heading";
import Skills from "../Skills/Skills";
// Styles
import "./About.scss";

const About = () => {
  return (
    <section className="about" id="about">
      <Container className="about-container">
        <Heading headingTitle="about" />
        <div className="box">
          <p className="first">
            Hello! My name is Eric, a self taught frontend web developer.
          </p>
          <p className="second">
            For the past 2.5 years, I've been continuously self-learning about
            front-end web development. I have a <strong>strong</strong> passion
            for the rapidly growing web development industry and am always
            looking to expand my skills and knowledge.
          </p>
          <p className="third">
            The scope of my work usually partakes on the front-end web
            development side which includes PSD to HTML, coding layouts, single
            page applications, responsive websites, web apps, and other work
            based on web development and javascript.
          </p>
        </div>
        <Skills />
      </Container>
    </section>
  );
};

export default About;
