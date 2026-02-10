import * as React from "react"
import { graphql } from "gatsby"
import { Seo } from "../global/Seo"
import Hero from "../components/sections/Hero"
import Ebook from "../components/sections/Ebook"
import Faq from "../components/sections/Faq"
import CtaSection from "../components/sections/CtaSection"
import BenefitsSection from "../components/sections/BenefitsSection"
import Newsletter from "../components/sections/Newsletter"
import Registration from "../components/sections/Registration"

const RegistrationPage = ({
  data: { page: {
    hero_Heading,
    hero_Subheading,
    hero_Img,
    hero_Cta,
    services_CtaOnTop,
    services_Heading,
    services_Paragraph,
    services_List,
    services_Cta,
    registration_Heading,
    registration_Paragraph,
    registration_Has_Title,
    registration_Has_Paragraph,
    registration_Has_Cta,
    registration_HasNot_Title,
    registration_HasNot_Heading,
    registration_HasNot_Subheading,
    registration_HasNot_Paragraph,
    registration_HasNot_List,
    ctaSection,
    faqSection,
  } }
}) => {
  return (
    <>
      <Hero
        data={{
          hero_Heading,
          hero_Subheading,
          hero_Img,
          hero_Cta,
        }}
      />
      <BenefitsSection
        ctaOnTop={services_CtaOnTop}
        heading={services_Heading}
        paragraph={services_Paragraph}
        list={services_List}
        cta={services_Cta}
      />
      <Registration data={{
        registration_Heading,
        registration_Paragraph,
        registration_Has_Title,
        registration_Has_Paragraph,
        registration_Has_Cta,
        registration_HasNot_Title,
        registration_HasNot_Heading,
        registration_HasNot_Subheading,
        registration_HasNot_Paragraph,
        registration_HasNot_List,
      }} />
      <CtaSection data={ctaSection} firstIconOnRight={true} />
      <Faq data={faqSection} />
      <Ebook />
      <Newsletter />
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
      hero_Cta {
        theme
        href
        text
      }
      # Services
      services_CtaOnTop {
        theme
        href
        text
      }
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
      # Registration
      registration_Heading
      registration_Paragraph
      registration_Has_Title
      registration_Has_Paragraph
      registration_Has_Cta {
        theme
        text
        href
      }
      registration_HasNot_Title
      registration_HasNot_Heading
      registration_HasNot_Subheading
      registration_HasNot_Paragraph
      registration_HasNot_List {
        img {
          asset {
            altText
            gatsbyImageData(placeholder: BLURRED)
          }
        }
        title
        description
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

export const Head = ({ data: { page: { seo, faqSection } }, location: { pathname } }) => (
  <Seo
    title={seo?.title}
    description={seo?.description}
    url={pathname}
    breadcrumbs={[
      { name: "Strona główna", item: '' },
      { name: "Zapisy", item: pathname }
    ]}
    faqSchema={faqSection?.list}
  />
)
