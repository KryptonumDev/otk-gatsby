import * as React from "react"
import { graphql } from "gatsby"
import Hero from "../components/sections/Hero"
import { Seo } from "../global/Seo"
import Ebook from "../components/sections/Ebook"
import BenefitsSection from "../components/sections/BenefitsSection"
import Newsletter from "../components/sections/Newsletter"

const StaffPage = ({
  data: { page: {
    hero_Heading,
    hero_Subheading,
    hero_Img,
    services_Heading,
    services_Paragraph,
    services_List,
    services_Cta,
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
      <BenefitsSection
        heading={services_Heading}
        paragraph={services_Paragraph}
        list={services_List}
        cta={services_Cta}
      />
      <Ebook />
      <Newsletter />
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
          gatsbyImageData(placeholder: NONE)
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
        title
      }
      services_Cta {
        theme
        href
        text
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