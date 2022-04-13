import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"

const Card = styled.div`
  padding: 24px;
  background: #1f0d09;
  color: #fef3ec;
  border-radius: 8px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.5);
  font-size: 1.5rem;
  font-family: "Cormorant Garamond", serif;
  text-align: left;

  h2 {
    font-size: 2rem;
    font-family: "Cormorant Garamond", serif;
  }
  p {
  }
`

export default function CardItem({ name, imgSrc, bio, contact }) {
  return (
    <Card>
      <h2>{name}</h2>
      <img src={imgSrc} alt={name} />
      <p>{bio}</p>
      <a href={contact}>LinkedIn</a>
    </Card>
  )
}
