import * as React from "react"
import { graphql } from "gatsby"
import Hero from "../components/sections/Hero"
import { Seo } from "../global/Seo"
import Ebook from "../components/sections/Ebook"
import Newsletter from "../components/sections/Newsletter"
import Why from "../components/sections/Ebook/Why"
import OurStaff from "../components/sections/OurStaff"

const EbookPage = ({
  data: { page: {
    hero_Heading,
    hero_Subheading,
    hero_Img,
    why_Heading,
    why_Paragraph,
    authors_Heading,
    authors_List,
  }}
}) => {
  return (
    <>
      <Hero
        data={{
          hero_Heading,
          hero_Subheading,
          hero_Img,
        }}
        version="light"
      />
      <Ebook />
      <Why heading={why_Heading} paragraph={why_Paragraph} />
      <OurStaff data={{ heading: authors_Heading, list: authors_List }} />
      <Newsletter />
    </>
  )
}

export const query = graphql`
  query {
    page: sanityEbook {
      # Hero
      hero_Heading
      hero_Subheading
      hero_Img {
        asset {
          altText
          gatsbyImageData(placeholder: NONE)
        }
      }
      # Why
      why_Heading
      why_Paragraph
      # Authors
      authors_Heading
      authors_List {
        name
        position
        img {
          asset {
            altText
            gatsbyImageData(placeholder: NONE)
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

export default EbookPage

export const Head = ({ data: { page: { seo } }, location: { pathname } }) => (
  <Seo
    title={seo?.title}
    description={seo?.description}
    url={pathname}
  />
)