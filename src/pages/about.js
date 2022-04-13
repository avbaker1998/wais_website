import * as React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"

const HeroHeader = styled.header`
  text-align: center;
  z-index: 10;
  position: relative;
  margin: 0;
  padding: 0;
  width: 100%;

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
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 70px;
    margin: 0;
    font-weight: 300;
    font-family: "josefin sans", sans-serif;
  }
  img {
    margin: 0 auto;
    padding: 0 16px;
    justify-content: center;
    align-items: center;
    display: flex;
  }

  div.images {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`
const BackgroundSection = styled.div`
  background: #fef3ec; ;
`

const About = () => (
  <Layout>
    <HeroHeader>
      <Seo title="About" />
      <br />
      <br />
      <h1>What is WAIS?</h1>
      {/* <h3>Meet other women in tech! Connect with other students and alumni!</h3> */}
      <br />
      <br />
      <br />
      <BackgroundSection>
        <div>
          <p>
            Women in Information Systems, also known as WAIS is a sub club
            within the Association of Information Systems (AIS). WAIS is geared
            towards women in and interested in the Information Systems major
            offered in the Marriott School of Business at Brigham Young
            University. WAIS serves society through the advancement of knowledge
            and the promotion of excellence in the practice and study of
            information systems and is the premier professional association for
            women and organizations who lead the research, teaching, practice,
            and study of information systems worldwide. WAIS strives to create a
            supportive community and bring together women of different
            backgrounds and cultures. We provide a supportive environment for
            women to explore and succeed in the field of Information Systems.
            Information Systems involves the synthesis of business and
            technology. Professionals define, develop, and maintain the
            information system infrastructure that supports the operations of
            all businesses, governments, and other institutions. These
            professionals use a wide variety of skills in carrying out this
            function. Currently within the field of technology, 25% of those
            employed are female but over the past few years there has been a
            steady increase. Women are so vital to these companies and to
            technology in general. Through WAIS, we strive to increase the
            awareness of technology and show that anyone can be successful!
          </p>
          <div className="images">
            <StaticImage
              src="..\images\gala girls.jpg"
              alt="WAIS event"
              quality={100}
            />
            <StaticImage
              src="..\images\Image from iOS (9).jpg"
              alt="WAIS event"
              quality={100}
            />
          </div>
          <p>
            The Women in Information Systems (WAIS) organization was founded
            with the mission to support, connect, and empower women in the
            Information Systems field. The three main purposes of WAIS are to
            create a community of women within IS, foster mentorship as
            empowered women empower women, and network with alumni and companies
            to bring incredible career opportunities to those within WAIS. WAIS
            has been successful in creating a supportive community for women in
            technology. The organization has over 300 members at Brigham Young
            University and is a part of AIS which is in over 100 countries, with
            a strong presence in the United States, Canada, and Europe. WAIS
            offers its members a variety of resources, including an online
            forum, monthly networking lunches, and semi-annual events and
            socials to grow the community and foster friendship. This community
            provides a safe space for women to network, learn from each other,
            and collaborate on projects. One of the key ways WAIS supports its
            members is through mentorship. The organization offers a variety of
            mentorship programs, including an online mentor directory, and a
            community of mentors. These programs pair experienced professionals
            with women who are early in their careers, providing them with the
            guidance and support they need to succeed. WAIS also works to
            connect its members with incredible career opportunities. Alumni
            mentors share their own experiences and knowledge with students, and
            help them develop the skills they need to succeed in the field of
            Information Systems. The organization has built relationships with
            leading companies in technology, and works to connect its members
            with these companies through job postings, events, information
            sessions, and its annual career fair. WAIS also offers its members
            exclusive access to its alumni network, which includes over 2,000
            successful women in information systems and the technology field.
          </p>
        </div>
      </BackgroundSection>

      {/* <Link to="/">Go back to the homepage</Link> */}
    </HeroHeader>
  </Layout>
)

export default About
