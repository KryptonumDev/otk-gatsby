import * as React from "react"
import { graphql } from "gatsby"
import { Seo } from "../global/Seo"
import Hero from "../components/sections/Hero"
import Faq from "../components/sections/Faq"
import Newsletter from "../components/sections/Newsletter"
import Ebook from "../components/sections/Ebook"
import OurStaff from "../components/sections/OurStaff"
import Rules from "../components/sections/Regulations/Rules"

const RegulationsPage = ({
  data: {
    page: {
      hero_Heading,
      hero_Subheading,
      hero_Img,
      rules_Heading,
      rules_Subheading,
      rules_List,
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
      <Rules data={{
        rules_Heading,
        rules_Subheading,
        rules_List,
      }} />
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
      # Rules
      rules_Heading
      rules_Subheading
      rules_List {
        string
        extended
        grid {
          title
          description
        }
        cta {
          theme
          text
          href
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
    breadcrumbs={[
      { name: "Strona główna", item: '' },
      { name: "Regulamin", item: pathname }
    ]}
  />
)