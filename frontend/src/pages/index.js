import React from "react";
import About from "../components/Sections/About/About";
import Hero from "../components/Sections/Hero/Hero";
import Projects from "../components/Sections/Projects/Projects";
import { graphql } from "gatsby";

const IndexPage = ({ data }) => {
  return (
    <>
      <Hero />
      <About />
      <Projects data={data} />
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
