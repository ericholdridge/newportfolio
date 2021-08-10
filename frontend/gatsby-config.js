module.exports = {
  siteMetadata: {
    siteUrl: "Eirc Holdridge ~ Front End Developer",
    title: "Eric Holdridge ~ Front End Developer",
  },
  plugins: [
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "c3b1kyk6",
        dataset: "production",
      },
    },
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
