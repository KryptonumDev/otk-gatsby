import * as React from "react"
import { graphql } from "gatsby"
import { Seo } from "../global/Seo"
import Hero from "../components/sections/Hero"
import Faq from "../components/sections/Faq"
import Newsletter from "../components/sections/Newsletter"
import Ebook from "../components/sections/Ebook"
import CtaTiles from "../components/sections/CtaTiles"

const WherePage = ({
  data: {
    page: {
      hero_Heading,
      hero_Subheading,
      hero_Img,
      CtaTiles: CtaTilesData,
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
      <CtaTiles {...CtaTilesData} />
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
      # Cta Tiles
      CtaTiles {
        heading
        paragraph
        img {
          asset {
            altText
            gatsbyImageData(placeholder: NONE)
          }
        }
        list {
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
    page: { seo, faqSection },
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
    faqSchema={faqSection?.list}
  />
)
