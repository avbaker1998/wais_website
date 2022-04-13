import * as React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"

const HeroHeader = styled.header`
  text-align: center;
  z-index: 10;
  position: relative;
  margin: 0;
  padding: 0;
  width: 100%;

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

  p {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 70px;
    margin: 0;
  }
  img {
    margin: 0 auto;
    padding: 0 16px;
    justify-content: center;
    align-items: center;
    display: flex;
  }

  div.images {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`
const BackgroundSection = styled.div`
  background: #fef3ec; ;
`

const About = () => (
  <Layout>
    <HeroHeader>
      <Seo title="About" />
      <br />
      <br />
      <h1>What is WAIS?</h1>
      {/* <h3>Meet other women in tech! Connect with other students and alumni!</h3> */}
      <br />
      <br />
      <br />
      <BackgroundSection>
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>
          <div className="images">
            <StaticImage
              src="..\images\Image from iOS (8).jpg"
              alt="WAIS event"
              quality={100}
            />
            <StaticImage
              src="..\images\Image from iOS (9).jpg"
              alt="WAIS event"
              quality={100}
            />
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </BackgroundSection>

      {/* <Link to="/">Go back to the homepage</Link> */}
    </HeroHeader>
  </Layout>
)

export default About
