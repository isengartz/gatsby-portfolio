const { createRemoteFileNode } = require(`gatsby-source-filesystem`);
const axios = require('axios');
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

exports.sourceNodes = async ({
  actions,
  createNodeId,
  createContentDigest,
  getCache,
}) => {
  const { createNode } = actions;
  const phpApiHeaders = {
    headers: {
      Authorization: `${process.env.PRIVATE_API_TOKEN}`,
    },
  };
  const expressApiHeaders = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const { data } = await axios
    .get(`${process.env.PRIVATE_API_URL}/projects`, phpApiHeaders)
    .catch((e) => console.debug(e));

  const {
    data: {
      data: { blogs = [] },
    },
  } = await axios
    .get(`${process.env.EXPRESS_API_URL}/blogs`, expressApiHeaders)
    .catch((e) => console.log(e));

  // eslint-disable-next-line no-restricted-syntax
  for (const blog of blogs) {
    try {
      const node = {
        id: createNodeId(`Sin-Blog-${blog._id}`),
        blog_id: `${blog._id}`,
        title: `${blog.title}`,
        description: `${blog.description}`,
        shortDescription: `${blog.shortDescription}`,
        image: `${blog.image}`,
        slug: `${blog.slug}`,
        parent: null,
        children: [],
        internal: {
          type: `Blog`,
          contentDigest: createContentDigest(blog),
        },
      };

      // // Download the external images so they will get optimized by gatsby
      // eslint-disable-next-line no-await-in-loop
      const imageNode = await createRemoteFileNode({
        url: blog.featuredImage,
        parentNodeId: node.id,
        getCache,
        createNode,
        createNodeId,
      });
      node.featuredImg___NODE = imageNode.id;
      createNode(node);
    } catch (e) {
      console.warn('error creating node Blog', e);
    }
  }

  // eslint-disable-next-line no-restricted-syntax
  for (const project of data.data) {
    try {
      console.debug(project);
      const node = {
        id: createNodeId(`Sin-Project-${project.id}`),
        project_id: `${project.id}`,
        title: `${project.title}`,
        description: `${project.description}`,
        image: `${project.image}`,
        device_image: `${project.device_image}`,
        slug: `${project.slug}`,
        link: project.link || null,
        sorting: project.sorting,
        tags: project.tags.map((tag) => {
          return {
            id: tag.id,
            title: tag.title,
          };
        }),
        parent: null,
        children: [],
        internal: {
          type: `Project`,
          contentDigest: createContentDigest(project),
        },
      };

      // Download the external images so they will get optimized by gatsby
      // eslint-disable-next-line no-await-in-loop
      const imageNode = await createRemoteFileNode({
        url: project.image,
        parentNodeId: node.id,
        getCache,
        createNode,
        createNodeId,
      });

      // eslint-disable-next-line no-await-in-loop
      const deviceImageNode = await createRemoteFileNode({
        url: project.device_image,
        parentNodeId: node.id,
        getCache,
        createNode,
        createNodeId,
      });
      // And link them to the Project Entity so I can query them Through GraphQL Project Entity
      node.featuredImg___NODE = imageNode.id;
      node.deviceImg___NODE = deviceImageNode.id;
      node.localFile___NODE = imageNode.id;
      createNode(node);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.warn('error creating node', error);
    }
  }
};
