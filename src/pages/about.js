import React from "react"
import { Link } from "gatsby"
import Footer from "../components/footer"
import Header from "../components/header"

const AboutPage = props => {
  return (
    <div>
      <Header />
      <h1>About</h1>
      <p>I currently code full-time </p>
      <p>
        Need a dev? <Link to="/contact">Contact me!</Link>
      </p>
      <Footer />
    </div>
  )
}

export default AboutPage
