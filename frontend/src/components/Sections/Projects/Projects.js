import React from "react";
import Heading from "../../Heading";
import Container from "../../GlobalContainer/Container";
// Styles
import "./Projects.scss";

const Projects = () => {
  return (
    <section className="projects">
      <Heading headingTitle="projects" />
      <Container className="projects-container">
        <div className="project-image">
          <img src="https://via.placeholder.com/550" alt="" />
        </div>
        <div className="project-info">
          <div className="project-heading">
            <h3>Next Ecommerce</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Dignissimos reprehenderit saepe itaque quibusdam? Ipsam harum,
              odio magnam exercitationem eum perspiciatis ab id quidem hic optio
              sed obcaecati nostrum maxime suscipit!
            </p>
          </div>
          <div className="project-languages">
            <h3>Technologies Used</h3>
            <div className="flex-languages">
              <span>HTML/CSS</span>
              <span>Next.js</span>
              <span>GraphQL</span>
              <span>Apollo</span>
              <span>Stripe API</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Projects;
