import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

// the variable will come from the context we setup when we created the page see gatsby-node.js
export const query = graphql`
  query($slug: String) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
      }
      html
    }
  }
`

const Blog = props => {
  const { title, date } = props.data.markdownRemark.frontmatter

  return (
    <Layout>
      <h1>{title}</h1>
      <p>{date}</p>
      {/* allows us to setup the html from our querydata */}
      <div
        dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}
      />
    </Layout>
  )
}

export default Blog
