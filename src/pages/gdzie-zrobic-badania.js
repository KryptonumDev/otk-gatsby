import * as React from "react"
import { graphql } from "gatsby"
import { Seo } from "../global/Seo"
import Hero from "../components/sections/Hero"
import Faq from "../components/sections/Faq"
import Newsletter from "../components/sections/Newsletter"
import Ebook from "../components/sections/Ebook"
import Examination from "../components/sections/Where/Examination"
import Facility from "../components/sections/Where/Facility"

const WherePage = ({
  data: {
    page: {
      hero_Heading,
      hero_Subheading,
      hero_Img,
      examination_Heading,
      examination_Paragraph,
      examination_Img,
      facility_List,
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
      <Examination data={{
        examination_Heading,
        examination_Paragraph,
        examination_Img,
      }} />
      <Facility data={facility_List} />
      <Faq data={faqSection} />
      <Ebook />
      <Newsletter />
    </>
  )
}

export const query = graphql`
  query {
    page: sanityWhere {
      # Hero
      hero_Heading
      hero_Subheading
      hero_Img {
        asset {
          altText
          gatsbyImageData(placeholder: NONE)
        }
      }
      # Examination
      examination_Heading
      examination_Paragraph
      examination_Img {
        asset {
          altText
          gatsbyImageData(placeholder: NONE)
        }
      }
      # Facility
      facility_List {
        img {
          asset {
            altText
            gatsbyImageData(placeholder: NONE)
          }
        }
        title
        description
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

export default WherePage

export const Head = ({
  data: {
    page: { seo },
  },
  location: { pathname }
}) => (
  <Seo
    title={seo?.title}
    description={seo?.description}
    url={pathname}
    breadcrumbs={[
      { name: "Strona główna", item: '' },
      { name: "Gdzie zrobić badania", item: pathname }
    ]}
  />
)