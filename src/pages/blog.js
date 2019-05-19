import React from "react"
import Layout from "../components/layout"
import { graphql, useStaticQuery } from "gatsby"

const BlogPage = props => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            id
            frontmatter {
              title
              date
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <h1>Blog</h1>
      <p>Posts will show up here later on </p>
      <ol>
        {data.allMarkdownRemark.edges.map(edge => {
          const { title, date } = edge.node.frontmatter
          return (
            <li key={edge.node.id}>
              <h2>{title}</h2>
              <p>{date}</p>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default BlogPage
