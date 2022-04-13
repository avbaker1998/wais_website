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

  h2 {
    margin: 0;
    font-weight: normal;
    margin-bottom: 8px;
    color: #fef3ec;
    font-size: 2rem;
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
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
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

const SecondPage = () => (
  <Layout>
    <HeroHeader>
      <Seo title="Women in Tech" />
      <h1>Women in Tech</h1>
      <h3>Meet other women in tech! Connect with other students and alumni!</h3>
      <br />
      <CardGrid>
        <CardItem
          name="Caroline Crane"
          imgSrc="https://res.cloudinary.com/dmvxvrwjd/image/upload/v1649872595/caroline_wbonfz.jpg"
          bio="Master of Information Systems Management student | BYU AIS Co-President"
          contact="https://www.linkedin.com/in/caroline-crane/"
        />
        <CardItem
          name="Joslyn Orgill"
          imgSrc="https://res.cloudinary.com/dmvxvrwjd/image/upload/v1649875572/Image_from_iOS_8_cdqsp5.jpg"
          bio="Cloud Technical Residency at Google | 2022 BYU MISM Graduate"
          contact="https://www.linkedin.com/in/joslyn-orgill/"
        />
        <CardItem
          name="Bonnie Anderson"
          imgSrc="https://res.cloudinary.com/dmvxvrwjd/image/upload/v1649872653/bonnie2_ubulsf.jpg"
          bio="Assitant Dean of the Marriot School | Brigham Young University and Carnegie Mellon University Graduate"
          contact="https://www.linkedin.com/in/bonnie-brinton-anderson-12677111/"
        />
        <CardItem
          name="Maggie Jensen"
          imgSrc="https://res.cloudinary.com/dmvxvrwjd/image/upload/v1649871750/IMG_8360_qcxlya.jpg"
          bio="Data Engineer at Walt Disney Studios | 2022 BYU MISM Graduate"
          contact="https://www.linkedin.com/in/maggie-jensen/"
        />
        <CardItem
          name="Lilia Brown"
          imgSrc="https://res.cloudinary.com/dmvxvrwjd/image/upload/v1649876756/IMG-4341_lrxfha.jpg"
          bio="Master of Information Systems Management student | Research Assistant at BYU"
          contact="https://www.linkedin.com/in/brown-lilia/"
        />
        <CardItem
          name="Brittany Fromm"
          imgSrc="https://res.cloudinary.com/dmvxvrwjd/image/upload/v1649871891/FrommBrittany_Online_pixbqm.jpg"
          bio="NOC Engineer at TaxBit | 2022 BYU MISM Graduate"
          contact="https://www.linkedin.com/in/brittany-fromm/"
        />
        <CardItem
          name="Mckaylee Olson"
          imgSrc="https://res.cloudinary.com/dmvxvrwjd/image/upload/v1649879931/Image_from_iOS_3_2_myjgdt.jpg"
          bio="Information Systems Junior Core student | Marketing Data Analyst for Adojo"
          contact="https://www.linkedin.com/in/mckayleeolson/"
        />
        <CardItem
          name="Brittany Coon"
          imgSrc="https://res.cloudinary.com/dmvxvrwjd/image/upload/v1649880522/1_1_1_e1y1s7.jpg"
          bio="Senior Consultant at Anglepoint | 2016 BYU MISM Graduate"
          contact="https://www.linkedin.com/in/brittanycoon/"
        />
        <CardItem
          name="Cadie Christensen"
          imgSrc="https://res.cloudinary.com/dmvxvrwjd/image/upload/v1649880790/Image_from_iOS_9_yjujeg.jpg"
          bio="Associate Security Consultant at NetSPI | 2022 BYU MISM Graduate"
          contact="https://www.linkedin.com/in/cadie-perkins/"
        />
      </CardGrid>
      {/* <Link to="/">Go back to the homepage</Link> */}
    </HeroHeader>
    <br />
    <br />
    <br />
  </Layout>
)

export default SecondPage
