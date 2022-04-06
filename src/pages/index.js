import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout >
    <Seo title="WAIS Home" />
    <p>
      <Link to="/page-2/">Women in Tech</Link> | 
      <Link to="/using-typescript/">About Us</Link> | 
      <Link to="/using-ssr">Upcoming Events</Link> | 
      <Link to="/using-dsg">Resources</Link>
    </p>
    <h1>BYU WAIS</h1>
    <h3>Women in Information Systems</h3>
    <p>For women, built by women</p>
    <StaticImage
      src="../images/women-in-tech.jpg"
      width={900}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="A Woman's Silhouette"
      style={{ marginBottom: `1.45rem` }}
    />
    
  </Layout>
)

export default IndexPage
