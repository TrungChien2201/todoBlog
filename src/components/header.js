import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import '../styles/index.scss'
const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
    className="d-flex header-menu"
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <Link to="/">Home</Link> 
      <Link to="/admin/">Admin</Link> 
      <Link to="/blog/">Blog</Link>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
