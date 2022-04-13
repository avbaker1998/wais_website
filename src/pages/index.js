import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { nominalTypeHack } from "prop-types"
import CardItem from "../components/CardItem"
import BottomHome from "../components/BottomHome"
import Cards from "../components/Cards"

const PersonGrid = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
  font-family: "Georgia", Georgia, serif;
`
const StyledLink = styled(Link)`
  color: #1f0d09;
  border-radius: 4px;
  text-decoration: none;
  margin-left: 2px;
  margin: 0;
  padding: 0;
  margin-bottom: 12px;
  font-size: 2rem;
  font-weight: bold;
  font-family: "Cormorant Garamond", serif;
  text-align: justify;

  &:hover {
    text-decoration: underline;
  }
`

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

const Section = styled.section`
  background: #fef3ec;
  margin: 0;
  padding: 0;
  width: 100%;
  position: relative;
`

const ContentSection = styled.section`
  display: flex;
  gap: 48px;
  padding: 24px 0;

  h2,
  Link {
    margin: 0;
    padding: 0;
    margin-bottom: 12px;
    font-size: 2rem;
    font-weight: bold;
    font-family: "Cormorant Garamond", serif;
  }

  p {
    margin: 0;
    padding: 0;
    margin-bottom: 12px;
    font-size: 1rem;
    font-weight: 300;
    font-family: "josefin sans", sans-serif;
    text-align: justify;
  }

  img {
    // border: 5px solid #1f0d09;
    // border-radius: 4px;
    shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const BackgroundSection = styled.div`
  background: #fef3ec; ;
`

const MainSection = styled.main`
  max-width: 960px;
  margin: 0 auto;
  padding: 0 16px;
`

const Hero = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const IndexPage = () => (
  <Layout>
    <Seo title="WAIS Home" />
    <Hero>
      <HeroHeader>
        <h1>Women in Information Systems</h1>
        <h3>Brigham Young University WAIS</h3>
      </HeroHeader>

      <StaticImage
        src="../images/4 women.jpg"
        width={900}
        quality={100}
        formats={["auto", "webp", "avif"]}
        alt="A Woman's Silhouette"
        style={{
          margin: "0 auto",
          zIndex: 1,
          position: "relative",
        }}
      />
    </Hero>

    <BackgroundSection>
      <br />
      <br />
      <br />
      <MainSection>
        <ContentSection>
          <div>
            <StyledLink to="/about">About Us</StyledLink>
            <br />
            <br />
            <p>
              The Women in Information Systems (WAIS) organization was founded
              with the mission to support, connect, and empower women in the
              Information Systems field. The three main purposes of WAIS are to
              create a community of women within IS, foster mentorship as
              empowered women empower women, and network with alumni and
              companies to bring incredible career opportunities to those within
              WAIS. WAIS has been successful in creating a supportive community
              for women in technology.
            </p>
            {/* <Link to="/about">Learn More</Link> */}
          </div>
          <StaticImage
            src="../images/IMG_0119.jpg"
            alt="WAIS event"
            quality={100}
          />
        </ContentSection>
        <br />
        <br />
        <br />
        <ContentSection>
          <StaticImage
            src="..\images\IMG_0019.jpg"
            alt="WAIS event"
            quality={100}
          />
          <div>
            <StyledLink to="/wit">Connect with Women in Tech</StyledLink>
            <br />
            <br />
            <p>
              One of the key ways WAIS supports its members is through
              mentorship. The organization offers a variety of mentorship
              programs, including an online mentor directory, and a community of
              mentors. WAIS also works to connect its members with incredible
              career opportunities. Mentors share their own experiences and
              knowledge with students, and help them develop the skills they
              need to succeed in the field of Information Systems.
            </p>
            {/* <Link to="/about">Learn More</Link> */}
          </div>
        </ContentSection>
        <br />
        <br />
        <br />
        <br />
        <br />
      </MainSection>
    </BackgroundSection>

    {/* <Cards /> */}
    {/* <Section>
      
    </Section> */}
    {/* <PersonGrid>
      <CardItem />
      <CardItem />
      <CardItem />
    </PersonGrid> */}
  </Layout>
)

export default IndexPage

// Questions for noah
// 1. How do integrate a google calendar? do you know? if not i could probably google it
// 2. how to make different html elements like alumni boxes or a top with picture background and white with content on the bottom
// 3. Any styling types so it doesnt look like a child made it?
// 4. how to make and add more to the index page? through layout page?
// 5. links to buttons?

//tailwind, tailwind utility classes, css import classes, style componetns (react),
