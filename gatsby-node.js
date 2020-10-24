/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require(`path`);

// Create a Page for every Project Entity
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    query {
      allProject(
        filter: { slug: { ne: "3d-virtual-tour" } }
        sort: { fields: sorting }
      ) {
        edges {
          node {
            description
            device_image
            id
            image
            title
            project_id
            slug
            tags {
              id
              title
            }
          }
        }
      }
    }
  `);

  result.data.allProject.edges.forEach(({ node }, index) => {
    createPage({
      path: `project/${node.slug}`,
      component: path.resolve(`./src/templates/project.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.slug,
        project_id: node.project_id,
        technologyIcons:
          node.tags != null ? node.tags.map((tag) => tag.title) : [],

        prev:
          index === 0
            ? null
            : result.data.allProject.edges[index - 1].node.slug, // If the Loop Index isnt 0
        next:
          index === result.data.allProject.edges.length - 1
            ? null
            : result.data.allProject.edges[index + 1].node.slug, // If loop Index isn't eq to the length of Array
      },
    });
  });
};

// exports.onCreateWebpackConfig = ({stage, loaders, actions}) => {
//     if (stage === "build-html") {
//         actions.setWebpackConfig({
//             module: {
//                 rules: [
//                     {
//                         test: /react-skillbars/,
//                         use: loaders.null(),
//                     },
//                 ],
//             },
//         })
//     }
// }
