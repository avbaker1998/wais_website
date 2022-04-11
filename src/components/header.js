import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import styled from "styled-components"

const StyledLink = styled(Link)`
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  text-decoration: none;
  margin-left: 2px;
`

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#78231b`,
      color: `#78231b`,
      marginBottom: `1.45rem`,
      fontfamily: `"Georgia", Georgia, serif`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
        display: `flex`,
        justifyContent: `space-between`,
        alignItems: `center`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <div>
        <StyledLink to="/page-2/">Women in Tech</StyledLink>
        <StyledLink to="/using-typescript/">About Us</StyledLink>
        <StyledLink to="/using-ssr">Upcoming Events</StyledLink>
      </div>
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
