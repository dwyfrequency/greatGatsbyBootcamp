import React from "react"
import Footer from "../components/footer"
import Header from "../components/header"

const ContactPage = props => {
  return (
    <div>
      <Header />
      <h1>Contact</h1>
      <p>
        The best way to reach me is via{" "}
        <a href="https://twitter.com/dwyfrequency" target="_blank">
          @dwyfrequency
        </a>{" "}
        on twitter
      </p>
      <Footer />
    </div>
  )
}

export default ContactPage
