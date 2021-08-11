import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faTv } from "@fortawesome/free-solid-svg-icons";
import { GatsbyImage } from "gatsby-plugin-image";

const Project = ({ project }) => {
  return (
    <div className="project-flex">
      <div className="project-image">
        <GatsbyImage
          image={project.image.asset.gatsbyImageData}
          alt={project.title}
        />
      </div>
      <div className="project-info">
        <div className="project-heading">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </div>
        <div className="project-challenges">
          <h3>Challenges</h3>
          <p>{project.challenges}</p>
        </div>
        <div className="project-languages">
          <h3>Technologies Used</h3>
          <div className="flex-languages">
            {project.technologies.map((tech) => (
              <span>{tech}</span>
            ))}
          </div>
        </div>
        <div className="project-links">
          <a href={project.githubURL} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} size="lg" className="icon" />
          </a>
          <a
            href={project.projectURL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faTv} size="lg" className="icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
