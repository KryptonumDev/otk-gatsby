import * as React from "react"
import { graphql } from "gatsby"
import { Seo } from "../global/Seo"
import Hero from "../components/sections/Hero"
import Faq from "../components/sections/Faq"
import Newsletter from "../components/sections/Newsletter"
import Ebook from "../components/sections/Ebook"
import OurStaff from "../components/sections/OurStaff"

const RegulationsPage = ({
  data: {
    page: {
      hero_Heading,
      hero_Subheading,
      hero_Img,
      staffSection,
      faqSection,
    },
  }
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
      <OurStaff data={staffSection} />
      <Faq data={faqSection} />
      <Ebook />
      <Newsletter />
    </>
  )
}

export const query = graphql`
  query {
    page: sanityRegulations {
      # Hero
      hero_Heading
      hero_Subheading
      hero_Img {
        asset {
          altText
          gatsbyImageData(placeholder: NONE)
        }
      }
      # Staff
      staffSection {
        heading
        subheading
        cta {
          theme
          text
          href
        }
      }
      # FAQ Section
      faqSection {
        heading
        paragraph
        list {
          question
          answer
        }
        cta {
          theme
          text
          href
        }
        icon {
          asset {
            altText
            gatsbyImageData(placeholder: BLURRED)
          }
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

export default RegulationsPage

export const Head = ({ data: { page: { seo } }, location: { pathname } }) => (
  <Seo
    title={seo?.title}
    description={seo?.description}
    url={pathname}
  />
)