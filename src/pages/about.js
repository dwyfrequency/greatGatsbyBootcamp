import React from "react"
import { Link } from "gatsby"

const AboutPage = props => {
  return (
    <div>
      <h1>About</h1>
      <p>I currently code full-time </p>
      <p>
        Need a dev? <Link to="/contact">Contact me!</Link>
      </p>
    </div>
  )
}

export default AboutPage
