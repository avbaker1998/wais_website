import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"

const Card = styled.div`
  padding: 24px;
  background: deepskyblue;
  border-radius: 8px;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);

  text-align: left;
`

export default function CardItem({ name, imgSrc, bio, contact }) {
  return (
    <Card>
      <h1>{name}</h1>
      <img src={imgSrc} alt={name} />
      <p>{bio}</p>
      <p>{contact}</p>
    </Card>
  )
}
