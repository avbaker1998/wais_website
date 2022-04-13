// If you don't want to use TypeScript you can delete this file!
import * as React from "react"
import { PageProps, Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import styled from "styled-components"

type DataProps = {
  site: {
    buildTime: string
  }
}

//create a styled header const in typescript

// const HeroHeader = styled.h1`
//   text-align: center;
//   z-index: 10;
//   position: relative;

//   h1 {
//     margin: 0;
//     font-weight: normal;
//     margin-bottom: 8px;
//     color: #fef3ec;
//     font-size: 3.5rem;
//     font-family: "Cormorant Garamond", serif;
//   }

//   h3 {
//     margin: 0;
//     margin-bottom: 25px;
//     color: #fef3ec;
//     font-weight: lighter;
//     font-family: "josefin sans", sans-serif;
//   }
// `

const UsingTypescript: React.FC<PageProps<DataProps>> = ({ data, path }) => (
  <Layout>
    <Seo title="About Us" />
    <h1>What is WAIS?</h1>
    <p>
      WAIS is a Brigham Young University organization 
      created for women in Information Systems. By Women, For Women.
    </p>
    <p>
     
    </p>
    <p>
      {/* You're currently on the page "{path}" which was built on{" "}
      {data.site.buildTime}. */}
    </p>
    <p>
      {/* To learn more, head over to our{" "}
      <a href="https://www.gatsbyjs.com/docs/typescript/">
        documentation about TypeScript
      </a>
      . */}
    </p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default UsingTypescript

export const query = graphql`
  {
    site {
      buildTime(formatString: "YYYY-MM-DD hh:mm a z")
    }
  }
`
