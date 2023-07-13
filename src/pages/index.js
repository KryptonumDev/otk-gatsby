import { graphql } from "gatsby"
import * as React from "react"
import Hero from "../components/sections/Homepage/Hero"
import { Seo } from "../global/Seo"

const IndexPage = ({
  data: { page: {
    hero_Heading,
    hero_Subheading,
    hero_Paragraph,
    hero_Cta,
    hero_Img,
  }}
}) => {
  return (
    <>
      <Hero data={{
        hero_Heading,
        hero_Subheading,
        hero_Paragraph,
        hero_Cta,
        hero_Img,
      }} /> 
    </>
  )
}

export const query = graphql`
  query {
    page: sanityHomepage {
      hero_Heading
      hero_Subheading
      hero_Paragraph
      hero_Cta {
        theme
        text
        href
      }
      hero_Img {
        asset {
          altText
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      seo {
        title
        description
      }
    }
  }
`

export default IndexPage

export const Head = ({ data: { page: { seo } } }) => (
  <Seo
    title={seo?.title}
    description={seo?.description}
    url=''
  />
)