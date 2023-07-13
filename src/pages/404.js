import { graphql } from "gatsby"
import * as React from "react"
import CtaSection from "../components/sections/CtaSection"
import Hero from "../components/sections/NotFound/Hero"
import { Seo } from "../global/Seo"

const NotFoundPage = ({
  data: { page: {
    hero_Heading,
    hero_Subheading,
    hero_Cta,
    ctaSection
  }}
}) => {
  return (
    <>
      <Hero data={{
        hero_Heading,
        hero_Subheading,
        hero_Cta,
      }} />
      <CtaSection data={ctaSection} />
    </>
  )
}


export const query = graphql`
  query {
    page: sanityNotFound {
      hero_Heading
      hero_Subheading
      hero_Cta {
        theme
        text
        href
      }
      ctaSection {
        heading
        subheading
        paragraph
        cta {
          theme
          text
          href
        }
        icons {
          asset {
            altText
            gatsbyImageData(placeholder: BLURRED)
          }
        }
      }
      seo {
        title
        description
      }
    }
  }
`
export default NotFoundPage

export const Head = ({ data: { page: { seo } } }) => (
  <Seo
    title={seo?.title}
    description={seo?.description}
  />
)
