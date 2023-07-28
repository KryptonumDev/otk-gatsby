import * as React from "react"
import { graphql } from "gatsby"
import { Seo } from "../global/Seo"
import Hero from "../components/sections/Hero"
import Faq from "../components/sections/Faq"
import Newsletter from "../components/sections/Newsletter"
import Ebook from "../components/sections/Ebook"
import CtaSection from "../components/sections/CtaSection"
import Contact from "../components/sections/PreventionAndDiagnosis/Contact"
import Explanation from "../components/sections/PreventionAndDiagnosis/Explanation"
import Types from "../components/sections/PreventionAndDiagnosis/Types"

const PreventionAndDiagnosisPage = ({
  data: {
    page: {
      hero_Heading,
      hero_Subheading,
      hero_Img,
      contact_Heading,
      contact_Cta,
      contact_Img,
      explanation_Heading,
      explanation_Paragraph,
      explanation_Cta,
      types_Heading,
      types_List,
      types_Cta,
      types_Icon,
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
      <Contact data={{
        contact_Heading,
        contact_Cta,
        contact_Img,
      }} />
      <Explanation data={{
        explanation_Heading,
        explanation_Paragraph,
        explanation_Cta,
      }} />
      <Types data={{
        types_Heading,
        types_List,
        types_Cta,
        types_Icon,
      }} />
      <CtaSection data={ctaSection} />
      <Faq data={faqSection} />
      <Ebook />
      <Newsletter />
    </>
  )
}

export const query = graphql`
  query {
    page: sanityPreventionAndDiagnosis {
      # Hero
      hero_Heading
      hero_Subheading
      hero_Img {
        asset {
          altText
          gatsbyImageData(placeholder: NONE)
        }
      }
      # Contact
      contact_Heading
      contact_Cta {
        theme
        text
        href
      }
      contact_Img {
        asset {
          altText
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      # Explanation
      explanation_Heading
      explanation_Paragraph
      explanation_Cta {
        theme
        text
        href
      }
      # Types
      types_Heading
      types_List {
        title
        description
      }
      types_Cta {
        theme
        text
        href
      }
      types_Icon {
        asset {
          altText
          gatsbyImageData(placeholder: BLURRED)
        }
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
  }
`

export default PreventionAndDiagnosisPage

export const Head = ({ data: { page: { seo, faqSection } }, location: { pathname } }) => (
  <Seo
    title={seo?.title}
    description={seo?.description}
    url={pathname}
    breadcrumbs={[
      { name: "Strona główna", item: '' },
      { name: "Profilaktyka i diagnostyka", item: pathname }
    ]}
    faqSchema={faqSection?.list}
  />
)