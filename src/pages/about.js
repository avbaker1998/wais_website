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

const About = () => (
  <Layout>
    <HeroHeader>
      <Seo title="Women in Tech" />
      <h1>Women in Tech</h1>
      <h3>Meet other women in tech! Connect with other students and alumni!</h3>
      {/* add components here to add in alumni and such */}
      <Link to="/">Go back to the homepage</Link>
    </HeroHeader>
  </Layout>
)

export default About
