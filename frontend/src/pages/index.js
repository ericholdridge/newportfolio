import React from "react";
import { graphql } from "gatsby";
import About from "../components/Sections/About/About";
import Hero from "../components/Sections/Hero/Hero";
import Projects from "../components/Sections/Projects/Projects";
import Contact from "../components/Sections/Contact/Contact";

const IndexPage = ({ data }) => {
  return (
    <>
      <Hero />
      <About />
      <Projects data={data} />
      <Contact />
    </>
  );
};

export const query = graphql`
  query {
    allSanityProjects {
      nodes {
        description
        title
        technologies
        challenges
        githubURL
        projectURL
        image {
          asset {
            url
          }
        }
      }
    }
  }
`;
export default IndexPage;
