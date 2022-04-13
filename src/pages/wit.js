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
      <CardGrid>
        <CardItem
          name="Alle"
          imgSrc="https://images.unsplash.com/photo-1585156569731-4c5b959234f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80"
          bio="The best!"
          contact="Slack"
        />
        <CardItem
          name="Alle"
          imgSrc="https://images.unsplash.com/photo-1585156569731-4c5b959234f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80"
          bio="The best!"
          contact="Slack"
        />
        <CardItem
          name="Alle"
          imgSrc="https://images.unsplash.com/photo-1585156569731-4c5b959234f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80"
          bio="The best!"
          contact="Slack"
        />
      </CardGrid>
      <Link to="/">Go back to the homepage</Link>
    </HeroHeader>
  </Layout>
)

export default SecondPage
