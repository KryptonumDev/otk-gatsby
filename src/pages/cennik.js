import * as React from "react"
import { graphql } from "gatsby"
import { Seo } from "../global/Seo"
import Hero from "../components/sections/Hero"
import Faq from "../components/sections/Faq"
import Newsletter from "../components/sections/Newsletter"
import Ebook from "../components/sections/Ebook"
import Pricing from "../components/sections/Pricing/Pricing"

const PricingPage = ({
  data: {
    page: {
      hero_Heading,
      hero_Subheading,
      hero_Img,
      pricing_Heading,
      pricing_List,
      pricing_Cta,
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
      <Pricing data={{
        pricing_Heading,
        pricing_List,
        pricing_Cta,
      }} />
      <Faq data={faqSection} />
      <Ebook />
      <Newsletter />
    </>
  )
}

export const query = graphql`
  query {
    page: sanityPricing {
      # Hero
      hero_Heading
      hero_Subheading
      hero_Img {
        asset {
          altText
          gatsbyImageData(placeholder: NONE)
        }
      }
      # Pricing
      pricing_Heading
      pricing_List {
        name
        price
      }
      pricing_Cta {
        theme
        text
        href
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

export default PricingPage

export const Head = ({ data: { page: { seo, faqSection } }, location: { pathname } }) => (
  <Seo
    title={seo?.title}
    description={seo?.description}
    url={pathname}
    breadcrumbs={[
      { name: "Strona główna", item: '' },
      { name: "Cennik", item: pathname }
    ]}
    faqSchema={faqSection?.list}
  />
)