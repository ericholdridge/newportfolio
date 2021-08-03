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
      title: "Technologies Used",
      name: "technologies",
      type: "array",
      of: [{ type: "string" }],
    },
  ],
};
