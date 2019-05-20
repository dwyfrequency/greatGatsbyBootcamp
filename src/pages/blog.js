import React from "react"
import Layout from "../components/layout"
import { Link, graphql, useStaticQuery } from "gatsby"
import blogStyles from "./blog.module.scss"
import Head from "../components/head"

const BlogPage = props => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: ASC }) {
        edges {
          node {
            id
            title
            publishedDate(formatString: "MMMM Do, YYYY") #can see acceptable
            # date patterns on moment.js's site
            slug
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <Head title="Blog" />
      <h1>Blog</h1>
      <p>Posts will show up here later on </p>
      <ol className={blogStyles.posts}>
        {data.allContentfulBlogPost.edges.map(edge => {
          const { id, title, publishedDate, slug } = edge.node
          return (
            <li key={id} className={blogStyles.post}>
              <Link to={`/blog/${slug}`}>
                <h2>{title}</h2>
                <p>{publishedDate}</p>
              </Link>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}
/*
const BlogPageBeforeCMS = props => {
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
*/
export default BlogPage
