import * as React from "react"
import { graphql } from "gatsby"
import Hero from "../components/sections/Hero"
import { Seo } from "../global/Seo"
import CtaSection from "../components/sections/CtaSection"
import Content from "../components/sections/PrivacyPolicy/Content"

const PrivacyPolicyPage = ({
  data: { page: {
    hero_Heading,
    hero_Subheading,
    hero_Img,
    _rawContent,
    content_Img,
    ctaSection,
  } }
}) => {
  return (
    <>
      <Hero
        data={{
          hero_Heading,
          hero_Subheading,
          hero_Img,
        }}
        version="dark"
      />
      <Content data={_rawContent} icon={content_Img} />
      <CtaSection data={ctaSection} />
    </>
  )
}

export const query = graphql`
  query {
    page: sanityPrivacyPolicy {
      # Hero
      hero_Heading
      hero_Subheading
      hero_Img {
        asset {
          altText
          gatsbyImageData(placeholder: NONE)
        }
      }
      # Content
      _rawContent
      content_Img {
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
      # SEO
      seo {
        title
        description
      }
    }
  }
`

export default PrivacyPolicyPage

export const Head = ({ data: { page: { seo } }, location: { pathname } }) => (
  <Seo
    title={seo?.title}
    description={seo?.description}
    url={pathname}
    breadcrumbs={[
      { name: "Strona główna", item: '' },
      { name: "Polityka prywatności", item: pathname }
    ]}
  />
)
