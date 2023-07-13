import { graphql } from "gatsby"
import * as React from "react"
import CtaSection from "../components/sections/CtaSection"
import Feautures from "../components/sections/Homepage/Feautures"
import Hero from "../components/sections/Homepage/Hero"
import Learn from "../components/sections/Homepage/Learn"
import Services from "../components/sections/Homepage/Services"
import { Seo } from "../global/Seo"

const IndexPage = ({
  data: { page: {
    hero_Heading,
    hero_Subheading,
    hero_Paragraph,
    hero_Cta,
    hero_Img,
    services_Heading,
    services_Paragraph,
    services_List,
    learn_List,
    learn_Paragraph,
    learn_Cta,
    learn_Img,
    ctaSection,
    features_Heading,
    features_List,
    ctaSection2,
    ctaSection3,
  }}
}) => {
  return (
    <>
      <Hero data={{
        hero_Heading,
        hero_Subheading,
        hero_Paragraph,
        hero_Cta,
        hero_Img,
      }} /> 
      <Services data={{
        services_Heading,
        services_Paragraph,
        services_List,
      }} />
      <Learn data={{
        learn_List,
        learn_Paragraph,
        learn_Cta,
        learn_Img,
      }} />
      <CtaSection data={ctaSection} firstIconOnRight={true} />
      <Feautures data={{
        features_Heading,
        features_List
      }} />
      <CtaSection data={ctaSection2} />
      <CtaSection data={ctaSection3} />
    </>
  )
}

export const query = graphql`
  query {
    page: sanityHomepage {
      # Hero
      hero_Heading
      hero_Subheading
      hero_Paragraph
      hero_Cta {
        theme
        text
        href
      }
      hero_Img {
        asset {
          altText
          gatsbyImageData(placeholder: BLURRED)
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
      # Learn more
      learn_List
      learn_Paragraph
      learn_Cta {
        theme
        text
        href
      }
      learn_Img {
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
      # Feautures 
      features_Heading
      features_List {
        img {
          asset {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
        title
        description
      }
      seo {
        title
        description
      }
      # CTA Section 2
      ctaSection2 {
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
      # CTA Section 3
      ctaSection3 {
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
    }
  }
`

export default IndexPage

export const Head = ({ data: { page: { seo } } }) => (
  <Seo
    title={seo?.title}
    description={seo?.description}
    url=''
  />
)