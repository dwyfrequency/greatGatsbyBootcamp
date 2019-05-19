import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import footerStyles from "./footer.module.scss"

const Footer = props => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)
  return (
    <footer className={footerStyles.footer}>
      {/* option g to create copyright symbol on mac os */}
      <p>Created by {data.site.siteMetadata.author}, © 2019</p>
    </footer>
  )
}

export default Footer
