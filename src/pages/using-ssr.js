import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import styled from "styled-components"

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

  p {
    margin: 0;
    margin-bottom: 5px;
    color: #fef3ec;
    font-weight: lighter;
    font-family: "josefin sans", sans-serif;
  }
`

const StyledLink = styled(Link)`
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  text-decoration: none;
  margin-left: 2px;
  font-family: "Josefin Sans", sans-serif;
  font-weight: lighter;
`

const UsingSSR = ({ serverData }) => {
  return (
    <Layout>
      <HeroHeader>
        <Seo title="Using SSR" />
        <h1>Upcoming Events</h1>
        <h3>
          Keep up to date with upcoming events and what is happening during the
          semester!
        </h3>

        <br />
        <br />
        <br />
        <h3>
          <b>This page is currently underconstruction.</b>
        </h3>
        <p>For the time being, enjoy random pictures of dogs.</p>
        <p>You can refresh the page for a new one.</p>
        <img
          style={{ width: "300px" }}
          alt="A random dog"
          src={serverData.message}
        />
      </HeroHeader>
      <StyledLink to="/">Go back to the homepage</StyledLink>
    </Layout>
  )
}

export default UsingSSR

export async function getServerData() {
  try {
    const res = await fetch(`https://dog.ceo/api/breeds/image/random`)
    if (!res.ok) {
      throw new Error(`Response failed`)
    }
    return {
      props: await res.json(),
    }
  } catch (error) {
    return {
      status: 500,
      headers: {},
      props: {},
    }
  }
}
