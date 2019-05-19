const path = require("path")

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogTemplate = path.resolve("./src/templates/blog.js")

  const response = await graphql(`
    query {
      allContentfulBlogPost {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  response.data.allContentfulBlogPost.edges.forEach(edge => {
    createPage({
      component: blogTemplate,
      path: `/blog/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
      },
    })
  })
}

/*
// PRE CMS
// onCreateNode - is no longer needed when using contentful
// this runs when the server starts - to generate slugs
module.exports.onCreateNode = ({ node, actions }) => {
  // create a new node field.
  const { createNodeField } = actions

  if (node.internal.type === "MarkdownRemark") {
    // returns the filename and removes the extension
    const slug = path.basename(node.fileAbsolutePath, ".md")
    // creates a new node field which we can see in our graphql query
    createNodeField({
      node,
      name: "slug",
      value: slug,
    })
  }
}
*/
/*
// PRE CMS
module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogTemplate = path.resolve("./src/templates/blog.js")

  const response = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            id
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  response.data.allMarkdownRemark.edges.forEach(edge => {
    createPage({
      component: blogTemplate,
      path: `/blog/${edge.node.fields.slug}`,
      context: {
        slug: edge.node.fields.slug,
      },
    })
  })
}
*/
