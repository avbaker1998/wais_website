import * as React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import Seo from "../components/seo"
import CardItem from "../components/CardItem"

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

  h2 {
    margin: 0;
    font-weight: normal;
    margin-bottom: 8px;
    color: #fef3ec;
    font-size: 2rem;
    font-family: "Cormorant Garamond", serif;
  }
  h4 {
    margin: 0;
    font-weight: normal;
    margin-bottom: 8px;
    color: #fef3ec;
    font-size: 1.5rem;
    font-family: "Cormorant Garamond", serif;
  }

  p {
    margin: 0;
    margin-bottom: 25px;
    color: #fef3ec;
    font-weight: lighter;
    font-size: 1rem;
    font-family: "josefin sans", sans-serif;
  }
  a {
    margin: 0;
    margin-bottom: 25px;
    color: #fef3ec;
    font-weight: lighter;
    font-size: 1rem;
    font-family: "josefin sans", sans-serif;
  }
`
const ColumnOfLinks = styled.div`
  display: flex;
  justify-content: center;
  align-items: top;
  gap: 48px;
  padding: 2px 0;
  text-align: center;
  ul {
    list-style-type: none;
  }

  a {
    color: #fef3ec;
    font-size: 18px;
    text-decoration: none;
    font-family: "Josefin Sans", sans-serif;
    font-weight: lighter;
  }
  a:hover {
    text-decoration: underline;
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

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 24px;
  padding: 0 8px;
  max-width: 960px;
  margin: 0 auto;
`

const StyledLink = styled(Link)`
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  text-decoration: none;
  margin-left: 2px;
  font-family: "Josefin Sans", sans-serif;
  font-weight: lighter;

  &:hover {
    text-decoration: underline;
  }
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
      <br />
      <br />
      <br />
      <h2>WAIS Leadership</h2>
      <br />
      <CardGrid>
        <CardItem
          name="Allessandra Baker"
          imgSrc="https://res.cloudinary.com/dmvxvrwjd/image/upload/v1649874893/IMG_0208_orzly0.jpg"
          bio="Master of Information Systems Management student | WAIS President"
          contact="https://www.linkedin.com/in/allessandra-baker/"
        />
        <CardItem
          name="Katy Reese"
          imgSrc="https://res.cloudinary.com/dmvxvrwjd/image/upload/v1649874894/2102-45_Katy_Reese_Portrait_022_1_meujzm.jpg"
          bio="Assistant Teaching Professor of Information Systems at BYU | WAIS Advisor"
          contact="https://www.linkedin.com/in/katy-reese/"
        />
        <ColumnOfLinks>
          <ul>
            <li>
              <br />
              <h4>More Contact Information</h4>
              <br />
              <br />
              <a href="https://marriott.byu.edu/directory/details?id=30648">
                <b>Caroline Throne</b> - MISM Academic Advisor
              </a>
              <br />
              <a href="https://marriott.byu.edu/directory/details?id=23743">
                <b>Ashley Bell</b> - BSIS Academic Advisor
              </a>
              <br />
              <a href="https://marriott.byu.edu/directory/details?id=5483">
                <b>Reid Grawe </b>- Career Advisor
              </a>
              <br />

              {/* {/* <a href="https://marriott.byu.edu/directory/details?id=42655">
                WAIS Advisor
              </a> 
              <br /> */}
              <a href="https://marriott.byu.edu/directory/details?id=22394">
                <b>Tom Meservy</b> - AIS Advisor
              </a>
              <br />
              <br />
              <br />
              <br />

              <a href="https://isnews.byu.edu/">IS News</a>
              <br />
              <a href="https://iscareers.byu.edu/">IS Careers</a>
              <br />
              <a href="http://ais.byu.edu/">AIS Homepage</a>
              <br />
              <a href="https://iscareers.byu.edu/preis.html">
                Pre-Information Systems
              </a>
              <br />
              <a href="https://www.linkedin.com/groups/4199862/">LinkedIn</a>
              <br />
              <a href="https://www.instagram.com/byuais/?hl=en">Instagram</a>
              <br />
            </li>
          </ul>
        </ColumnOfLinks>
      </CardGrid>
      <br />
      <br />
      <br />
      {/* make a component for the contact page with basic websites, slack links, and  contact info for me and katy */}
      {/* <StyledLink to="/">Go back to the homepage</StyledLink> */}
    </HeroHeader>
  </Layout>
)

export default Contact
