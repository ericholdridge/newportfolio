import React from "react";
import Heading from "../../Heading";
// Styles
import "./Skills.scss";

const Skills = () => {
  return (
    <div className="skills">
      <Heading headingTitle={"technologies & Skills"} />
      <div className="skills-box">
        <p>{`Languages > HTML/CSS, SASS, JavaScript`}</p>
        <p>{`Framewoks/Libraries > React, Redux, Gatsby.js/Next.js, GraphQL, Apollo, Rest API's`}</p>
        <p>{`CSS Libraries > Bootstrap, TailwindCSS, Chakra UI`}</p>
        <p>{`Content Management Systems > Sanity.io, Contentful`}</p>
      </div>
    </div>
  );
};

export default Skills;
