/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
// You can delete this file if you're not using it

/**
 * You can uncomment the following line to verify that
 * your plugin is being loaded in your site.
 *
 * See: https://www.gatsbyjs.org/docs/creating-a-local-plugin/#developing-a-local-plugin-that-is-outside-your-project
 */

const {createRemoteFileNode} = require(`gatsby-source-filesystem`);
const axios = require('axios');
const _ = require(`lodash`);
const PROJECT_NODE_TYPE = `Project`;
require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
});

exports.sourceNodes = async ({actions, createNodeId, createContentDigest, getCache}) => {
    const {createNode} = actions

    axios.defaults.headers.common['Authorization'] = `${process.env.PRIVATE_API_TOKEN}`;
    const {data} = await axios.get(`${process.env.PRIVATE_API_URL}/projects`);

    for (const project of data.data) {
        try {

            const node = Object.assign({
                id: createNodeId(`Sin-Project-${project.id}`), // note: some unique identifier here, I'm not familiar with the data source
                project_id: `${project.id}`,
                title: `${project.title}`,
                description: `${project.description}`,
                image: `${project.image}`,
                device_image: `${project.device_image}`,
                slug: `${project.slug}`,
                tags: project.tags.map(tag => {
                    return {
                        id: tag.id,
                        title: tag.title
                    }
                }),
                parent: null,
                children: [],
                internal: {
                    type: `Project`,
                    contentDigest: createContentDigest(project)
                }
            })

            // Download the external images so they will get optimized by gatsby
            const imageNode = await createRemoteFileNode({
                url: project.image,
                parentNodeId: node.id,
                getCache,
                createNode,
                createNodeId
            });

            const deviceImageNode = await createRemoteFileNode({
                url: project.device_image,
                parentNodeId: node.id,
                getCache,
                createNode,
                createNodeId
            });
            // And link them to the Project Entity so I can query them Through GraphQL Project Entity
            node.featuredImg___NODE = imageNode.id
            node.deviceImg___NODE = deviceImageNode.id
            node.localFile___NODE = imageNode.id
            createNode(node)

        } catch (error) {
            console.warn('error creating node', error);
        }
    }
}
