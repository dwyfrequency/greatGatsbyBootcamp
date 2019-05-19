const path = require("path")

// this runs when the server starts
module.exports.onCreateNode = ({ node, actions }) => {
  // create a new node field.
  const { createNodeField } = actions

  if (node.internal.type === "MarkdownRemark") {
    // returns the filename and removes the extension
    const slug = path.basename(node.fileAbsolutePath, ".md")
    // console.log(">>>>>>>", slug)
    // // convert node to string just so we can see it
    // console.log(JSON.stringify(node, undefined, 4))

    // creates a new node field which we can see in our graphql query
    createNodeField({
      node,
      name: "slug",
      value: slug,
    })
  }
}
