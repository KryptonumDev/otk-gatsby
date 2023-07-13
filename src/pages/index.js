import { graphql } from "gatsby"
import * as React from "react"
import Hero from "../components/sections/Homepage/Hero"
import Learn from "../components/sections/Homepage/Learn"
import Services from "../components/sections/Homepage/Services"
import { Seo } from "../global/Seo"

const IndexPage = ({
  data: { page: {
    hero_Heading,
    hero_Subheading,
    hero_Paragraph,
    hero_Cta,
    hero_Img,
    services_Heading,
    services_Paragraph,
    services_List,
    learn_List,
    learn_Paragraph,
    learn_Cta,
    learn_Img,
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
      <Services data={{
        services_Heading,
        services_Paragraph,
        services_List,
      }} />
      <Learn data={{
        learn_List,
        learn_Paragraph,
        learn_Cta,
        learn_Img,
      }} />
    </>
  )
}

export const query = graphql`
  query {
    page: sanityHomepage {
      # Hero
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
      # Services
      services_Heading
      services_Paragraph
      services_List {
        img {
          asset {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
        paragraph
      }
      # Learn more
      learn_List
      learn_Paragraph
      learn_Cta {
        theme
        text
        href
      }
      learn_Img {
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