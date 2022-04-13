import * as React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import Seo from "../components/seo"

const HeroHeader = styled.header`
  text-align: center;
  z-index: 10;
  position: relative;

  h1 {
    margin: 0;
    font-weight: normal;
    margin-bottom: 8px;
    color: #fef3ec;
    font-size: 3.5rem;
    font-family: "Cormorant Garamond", serif;
  }

  h3 {
    margin: 0;
    margin-bottom: 25px;
    color: #fef3ec;
    font-weight: lighter;
    font-family: "josefin sans", sans-serif;
  }
`

const StyledLink = styled(Link)`
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  text-decoration: none;
  margin-left: 2px;
  font-family: "Josefin Sans", sans-serif;
  font-weight: lighter;
`

const Contact = () => (
  <Layout>
    <HeroHeader>
      <Seo title="Contact Us" />
      <h1>Contact Us</h1>
      <h3>
        If you are interested in joining WAIS or have any questions, feel free
        to reach out!
      </h3>
      {/* make a component for the contact page with basic websites, slack links, and  contact info for me and katy */}
      <StyledLink to="/">Go back to the homepage</StyledLink>
    </HeroHeader>
  </Layout>
)

export default Contact
