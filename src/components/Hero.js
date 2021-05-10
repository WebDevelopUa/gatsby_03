import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Image from 'gatsby-image'

const query = graphql`
  {
    person: file(relativePath: { eq: "person.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Hero = ({ showPerson }) => {
  const { person } = useStaticQuery(query)

  return (
    <header className="hero">
      {showPerson && (
        <Image
          fluid={person.childImageSharp.fluid}
          className="hero-person"
          loading="eager"
          backgroundColor="transparent"
          durationFadeIn={0}
          fadeIn={false}
        />
      )}
    </header>
  )
}

export default Hero
