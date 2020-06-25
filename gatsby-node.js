/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require(`path`);
const {createFilePath} = require(`gatsby-source-filesystem`);



exports.createPages = async ({graphql, actions}) => {
    const {createPage} = actions
    const result = await graphql(`
    query {
      allProject {
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
  `)
    result.data.allProject.edges.forEach(({node}) => {
        createPage({
            path: `project/${node.slug}`,
            component: path.resolve(`./src/templates/project.js`),
            context: {
                // Data passed to context is available
                // in page queries as GraphQL variables.
                slug: node.slug,
                project_id: node.project_id
            },
        })
    })
}

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
