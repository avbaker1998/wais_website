import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Contact = () => (
  <Layout>
    <Seo title="Women in Tech" />
    <h1>Women in Tech</h1>
    <p>Meet other women in tech! Connect with other students and alumni!</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Contact
