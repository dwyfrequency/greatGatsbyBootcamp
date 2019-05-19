import React from "react"
import Layout from "../components/layout"
import { Link, graphql, useStaticQuery } from "gatsby"
import blogStyles from "./blog.module.scss"

const BlogPage = props => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            id
            fields {
              slug
            }
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
      <ol className={blogStyles.posts}>
        {data.allMarkdownRemark.edges.map(edge => {
          const { title, date } = edge.node.frontmatter
          const { slug } = edge.node.fields
          return (
            <li key={edge.node.id} className={blogStyles.post}>
              <Link to={`/blog/${slug}`}>
                <h2>{title}</h2>
                <p>{date}</p>
              </Link>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default BlogPage
