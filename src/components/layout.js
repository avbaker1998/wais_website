/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { Link } from "gatsby"

import Header from "./header"
import "./layout.css"

const Footer = styled.footer`
  background: #1f0d09;
  color: #fef3ec;
  padding: 2rem;
  text-align: center;
  margin-bottom: 0;
  height: auto;
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;

  a.join {
    color: #fef3ec;
    font-size: 35px;
    border-radius: 1px;
    text-decoration: none;
    margin-left: 2px;
    font-family: "Cormorant Garamond", serif;
    font-weight: lighter;
    text-align: center;
  }

  a.linktree {
    color: #fef3ec;
    font-size: 25px;
    text-decoration: none;
    font-family: "Josefin Sans", sans-serif;
    font-weight: lighter;
    text-align: center;
  }

  ul {
    list-style-type: none;
  }

  p.bottom {
    position: absolute;
    align-self: center;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    color: #fef3ec;
    font-size: 15px;
    text-decoration: none;
    font-family: "Josefin Sans", sans-serif;
    font-weight: lighter;
  }
`
const ColumnOfLinks = styled.div`
  display: flex;
  justify-content: center;
  align-items: top;
  gap: 48px;
  padding: 2px 0;
  text-align: center;

  a {
    color: #fef3ec;
    font-size: 18px;
    text-decoration: none;
    font-family: "Josefin Sans", sans-serif;
    font-weight: lighter;
  }

  p {
    color: #fef3ec;
    font-size: 20px;
    text-decoration: none;
    font-family: "Cormorant Garamond", serif;
    font-weight: normal;
    margin: 0;
  }
`

const StyledLink = styled(Link)`
  color: #fef3ec;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  text-decoration: none;
  margin-left: 2px;
  font-family: "Josefin Sans", sans-serif;
  font-weight: lighter;
`

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

      <main>{children}</main>
      <Footer>
        <div>
          <a
            className="join"
            href="https://byu-is.slack.com/archives/C01AFRJ098B"
          >
            Join Women in Information Systems
          </a>{" "}
          <br />
          <br />
          <a className="linktree" href="https://linktr.ee/byuwais">
            Keep Up-to-Date with WAIS
          </a>
          <br />
          <br />
          <br />
        </div>
        <ColumnOfLinks>
          <div>
            <ul>
              <li>
                <p>Social Media</p>
                <a href="https://www.linkedin.com/groups/4199862/">LinkedIn</a>
                <br />
                <a href="https://www.instagram.com/byuais/?hl=en">Instagram</a>
                <br />
                <a href="https://twitter.com/BYUAIS">Twitter</a>
                <br />
                <a href="https://byu-is.slack.com/archives/C01AFRJ098B">
                  WAIS Slack
                </a>
                <br />
                <a href="https://join.slack.com/t/byu-is/shared_invite/zt-wu548ree-jcdIkPRi1Z7OCD7m1WPLUQ">
                  AIS Slack
                </a>
                <br />
              </li>
            </ul>
          </div>

          <div>
            <ul>
              <li>
                <p>Contact</p>
                <StyledLink to="/contact">Contact Us</StyledLink>
                <br />
                <a href="https://isnews.byu.edu/contact-us/">IS News</a>
                <br />
                <a href="https://marriott.byu.edu/directory/details?id=30648">
                  MISM Academic Advisor
                </a>
                <br />
                <a href="https://marriott.byu.edu/directory/details?id=23743">
                  BSIS Academic Advisor
                </a>
                <br />
                <a href="https://marriott.byu.edu/directory/details?id=5483">
                  Career Advisor
                </a>
                <br />
                <a href="https://marriott.byu.edu/directory/details?id=42655">
                  WAIS Advisor
                </a>
                <br />
                <a href="https://marriott.byu.edu/directory/details?id=22394">
                  AIS Advisor
                </a>
                <br />
              </li>
            </ul>
          </div>

          <div>
            <ul>
              <li>
                <p>Information Systems</p>
                <StyledLink to="/about">About Us</StyledLink>
                <br />
                <a href="https://isnews.byu.edu/">IS News</a>
                <br />
                <a href="https://iscareers.byu.edu/">IS Careers</a>
                <br />
                <a href="http://ais.byu.edu/">AIS Homepage</a>
                <br />
                <a href="https://iscareers.byu.edu/placement.html">
                  IS Placement Stats
                </a>
                <br />
                <a href="https://iscareers.byu.edu/careerexplorer.html">
                  IS Career Explorer
                </a>
                <br />
                <a href="https://iscareers.byu.edu/preis.html">
                  Pre-Information Systems
                </a>
                <br />
                <a href="https://iscareers.byu.edu/calendar.html">AIS Events</a>
                <br />
              </li>
            </ul>
          </div>
        </ColumnOfLinks>
        <br />
        <p className="bottom">Made by Allessandra Baker - 2022</p>
      </Footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
