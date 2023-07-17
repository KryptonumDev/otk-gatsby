import * as React from "react"
import { graphql } from "gatsby"
import Hero from "../components/sections/Hero"
import { Seo } from "../global/Seo"

const StaffPage = ({
  data: { page: {
    hero_Heading,
    hero_Subheading,
    hero_Img,
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
      /> 
    </>
  )
}

export const query = graphql`
  query {
    page: sanityStaffPage {
      # Hero
      hero_Heading
      hero_Subheading
      hero_Img {
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

export default StaffPage

export const Head = ({ data: { page: { seo } } }) => (
  <Seo
    title={seo?.title}
    description={seo?.description}
    url='/personel-osrodka-zdrowia'
  />
)