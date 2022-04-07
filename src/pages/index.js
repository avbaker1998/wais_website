import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { nominalTypeHack } from "prop-types"

const IndexPage = () => (
  <Layout >
    <Seo title="WAIS Home" />
    <p>
      <Link to="/page-2/">Women in Tech</Link> | 
      <Link to="/using-typescript/">About Us</Link> | 
      <Link to="/using-ssr">Upcoming Events</Link>  
      {/* <Link to="/using-dsg">Resources</Link> */}
    </p>
    <h1>BYU WAIS</h1>
    <h3>Women in Information Systems</h3>
    <p>For women, built by women</p>
    <StaticImage
      src="../images/womens-history-month.jpg"
      width={900}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="A Woman's Silhouette"
      style={{ marginBottom: `1.45rem` }}
    />
    
  </Layout>
)

export default IndexPage


// Questions for noah
// 1. How do integrate a google calendar? do you know? if not i could probably google it 
// 2. how to make different html elements like alumni boxes or a top with picture background and white with content on the bottom 
// 3. Any styling types so it doesnt look like a child made it?
// 4. how to make and add more to the index page? through layout page?
// 5. links to buttons?