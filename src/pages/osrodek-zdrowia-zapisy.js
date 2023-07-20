import * as React from "react"
import { graphql } from "gatsby"
import { Seo } from "../global/Seo"
import Hero from "../components/sections/Hero"
import Ebook from "../components/sections/Ebook"
import Faq from "../components/sections/Faq"
import CtaSection from "../components/sections/CtaSection"
import BenefitsSection from "../components/sections/BenefitsSection"

const RegistrationPage = ({
  data: {
    page: {
      hero_Heading,
      hero_Subheading,
      hero_Img,
      services_Heading,
      services_Paragraph,
      services_List,
      services_Cta,
      ctaSection,
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
      <BenefitsSection
        heading={services_Heading}
        paragraph={services_Paragraph}
        list={services_List}
        cta={services_Cta}
      />
      <CtaSection data={ctaSection} firstIconOnRight={true} />
      <Faq data={faqSection} />
      <Ebook />
    </>
  )
}

export const query = graphql`
  query {
    page: sanityRegistration {
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

export default RegistrationPage

export const Head = ({ data: { page: { seo } }, location: { pathname } }) => (
  <Seo
    title={seo?.title}
    description={seo?.description}
    url={pathname}
  />
)