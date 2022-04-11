import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { nominalTypeHack } from "prop-types"
import PersonCard from "../components/PersonCard"

const PersonGrid = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
  font-family: "Georgia", Georgia, serif;
`

const HeroHeader = styled.header`
  text-align: center;
  z-index: 10;
  position: relative;
  font-family: "Georgia", Georgia, serif;

  h1 {
    margin: 0;
  }

  h3 {
    margin: 0;
    margin-bottom: 8px;
    color: white;
  }
`

const IndexPage = () => (
  <Layout>
    <Seo title="WAIS Home" />
    <HeroHeader>
      <h1>Women in Information Systems</h1>
      <h3>For women, built by women</h3>
    </HeroHeader>
    <StaticImage
      src="../images/womens-history-month.jpg"
      width={900}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="A Woman's Silhouette"
      style={{
        marginBottom: `1.45rem`,
        marginTop: "-100px",
        zIndex: 1,
        // position: "relative",
      }}
    />
    <PersonGrid>
      <PersonCard />
      <PersonCard />
      <PersonCard />
    </PersonGrid>
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
