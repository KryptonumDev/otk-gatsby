import * as React from "react"
import { graphql } from "gatsby"
import Hero from "../components/sections/Hero"
import { Seo } from "../global/Seo"
import Ebook from "../components/sections/Ebook"
import BenefitsSection from "../components/sections/BenefitsSection"
import Newsletter from "../components/sections/Newsletter"
import Staff from "../components/sections/Staff/Staff"
import CtaSection from "../components/sections/CtaSection"

const StaffPage = ({
  data: {
    page: {
      hero_Heading,
      hero_Subheading,
      hero_Img,
      staff_Cta,
      services_Heading,
      services_Paragraph,
      services_List,
      services_Cta,
      ctaSection,
    },
    staff,
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
      <Staff data={staff} cta={staff_Cta} />
      <BenefitsSection
        heading={services_Heading}
        paragraph={services_Paragraph}
        list={services_List}
        cta={services_Cta}
      />
      <Ebook />
      <Newsletter />
      <CtaSection data={ctaSection} />
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
      # Staff
      staff_Cta {
        theme
        href
        text
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
      # CTA Section
      ctaSection {
        heading
        subheading
        paragraph
        claim
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
      # SEO
      seo {
        title
        description
      }
    }
    staff: allSanityStaff {
      nodes {
        name
        bio
        img {
          asset {
            altText
            gatsbyImageData(placeholder: NONE)
          }
        }
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