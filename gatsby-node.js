const path = require(`path`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const blogPostTemplate = path.resolve(`src/layouts/post.js`);
  const result = await graphql(
    `
      query QueryArticles {
        allMdx {
          nodes {
            frontmatter {
              title
              slug
              author
              featuredImage {
                childImageSharp {
                  fluid(maxWidth: 700, maxHeight: 500) {
                    src
                  }
                }
              }
            }
            body
          }
        }
      }
    `,
    { limit: 1000 },
  );

  console.log(result.data.allMdx.nodes);

  // Create blog post pages.
  result.data.allMdx.nodes.forEach(post => {
    createPage({
      // Path for this page — required
      path: `articles/${post.frontmatter.slug}`,
      component: blogPostTemplate,
      context: {
        post,
      },
    });
  });
};
