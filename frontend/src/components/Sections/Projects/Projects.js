import React from "react";
import Heading from "../../Heading";
import Container from "../../GlobalContainer/Container";
import Project from "./Project";
// Styles
import "./Projects.scss";

const Projects = ({ data }) => {
  data = data.allSanityProjects.nodes;
  console.log(data);
  return (
    <section className="projects" id="projects">
      <Heading headingTitle="projects" />
      <Container className="projects-container">
        <div className="projects-flex">
          {data.map((project, i) => (
            <Project key={i} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Projects;
