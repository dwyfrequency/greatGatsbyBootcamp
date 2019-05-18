import React from "react"
import { Link } from "gatsby"
// import "./header.module.scss"
import headerStyles from "./header.module.scss"

const Header = props => {
  return (
    <div>
      <h1>Jack's Site</h1>

      <nav>
        <ul>
          <li>
            <Link to="/" className={headerStyles.link}>
              Main
            </Link>
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
