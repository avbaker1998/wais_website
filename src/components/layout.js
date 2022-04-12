/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <head>
        <link
          href="https://fonts.googleapis.com/css?family=Playfair+Display:regular,500,600,700,800,900,italic,500italic,600italic,700italic,800italic,900italic"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Josefin+Sans:100,200,300,regular,500,600,700,100italic,200italic,300italic,italic,500italic,600italic,700italic"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Montserrat:100,200,300,regular,500,600,700,800,900,100italic,200italic,300italic,italic,500italic,600italic,700italic,800italic,900italic"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Cormorant+Garamond:300,300italic,regular,italic,500,500italic,600,600italic,700,700italic"
          rel="stylesheet"
        />
      </head>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <footer
          style={{
            marginTop: `2rem`,
          }}
        ></footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
