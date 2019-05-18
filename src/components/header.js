import React from "react"
import { Link } from "gatsby"

const Header = props => {
  return (
    <div
    // style={{
    //   display: "flex",
    //   justifyContent: "space-between",
    //   alignItems: "center",
    //   background: "purple",
    // }}
    >
      <h1>Jack's Site</h1>

      <nav>
        <ul>
          <li>
            <Link to="/">Main</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
