export default {
  title: "Projects",
  name: "projects",
  type: "document",
  fields: [
    {
      title: "Project Title",
      name: "title",
      type: "string",
    },
    {
      title: "image",
      name: "image",
      type: "image",
    },
    {
      title: "Project Description",
      name: "description",
      type: "string",
    },
    {
      title: "Challenges",
      name: "challenges",
      type: "string",
    },
    {
      title: "Technologies Used",
      name: "technologies",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      title: "Github URL",
      name: "githubURL",
      description: "The Github URL that a user can visit to view the code.",
      type: "url",
    },
    {
      title: "Project URL",
      name: "projectURL",
      description:
        "The live project URL that a user can visit in the web browser.",
      type: "url",
    },
  ],
};
