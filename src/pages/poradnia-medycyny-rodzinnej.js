import { graphql } from "gatsby"
import * as React from "react"
import Benefits from "../components/sections/FamilyClinic/Benefits"
import Mission from "../components/sections/FamilyClinic/Mission"
import Hero from "../components/sections/Hero"
import { Seo } from "../global/Seo"

const FamilyClinicPage = ({
  data: { page: {
    hero_Heading,
    hero_Subheading,
    hero_Img,
    benefits,
    mission_Heading,
    mission_Subheading,
    mission_Paragraph,
    mission_Cta,
    office_Heading,
    office_Cta,
    office_Icon,
  }}
}) => {
  return (
    <>
      <Hero
        data={{
          hero_Heading,
          hero_Subheading,
          hero_Img,
        }}
        version="light"
      /> 
      <Benefits data={benefits} />
      <Mission data={{
        mission_Heading,
        mission_Subheading,
        mission_Paragraph,
        mission_Cta,
      }} />
    </>
  )
}

export const query = graphql`
  query {
    page: sanityFamilyClinic {
      # Hero
      hero_Heading
      hero_Subheading
      hero_Img {
        asset {
          altText
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      # Benefits
      benefits {
        img {
          asset {
            altText
            gatsbyImageData(placeholder: BLURRED)
          }
        }
        title
      }
      # Our Mission
      mission_Heading
      mission_Subheading
      mission_Paragraph
      mission_Cta {
        theme
        text
        href
      }
      # Office
      office_Heading
      office_Cta {
        theme
        text
        href
      }
      office_Icon {
        asset {
          altText
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      # SEO
      seo {
        title
        description
      }
    }
  }
`

export default FamilyClinicPage

export const Head = ({ data: { page: { seo } } }) => (
  <Seo
    title={seo?.title}
    description={seo?.description}
    url='/poradnia-medycyny-rodzinnej'
  />
)