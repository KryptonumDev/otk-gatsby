import * as React from "react"
import { graphql } from "gatsby"
import Hero from "../components/sections/Hero"
import { Seo } from "../global/Seo"
import Faq from "../components/sections/Faq"
import Ebook from "../components/sections/Ebook"
import Form from "../components/sections/Contact/Form"

const ContactPage = ({
  data: {
    page: {
      hero_Heading,
      hero_Subheading,
      hero_Img,
      form_Heading,
      form_Img,
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
      <Form heading={form_Heading} icon={form_Img} />
      <Ebook />
      <Faq data={faqSection} />
    </>
  )
}

export const query = graphql`
  query {
    page: sanityContact {
      # Hero
      hero_Heading
      hero_Subheading
      hero_Img {
        asset {
          altText
          gatsbyImageData(placeholder: NONE)
        }
      }
      # Form
      form_Heading
      form_Img {
        asset {
          altText
          gatsbyImageData(placeholder: BLURRED)
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

export default ContactPage

export const Head = ({ data: { page: { seo } } }) => (
  <Seo
    title={seo?.title}
    description={seo?.description}
    url='/kontakt'
  />
)