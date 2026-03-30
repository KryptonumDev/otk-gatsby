import * as React from "react"
import { graphql } from "gatsby"
import Hero from "../components/sections/Hero"
import { Seo } from "../global/Seo"
import Newsletter from "../components/sections/Newsletter"
import Ebook from "../components/sections/Ebook"
import Sitemap from "../components/sections/Sitemap/Sitemap"

const SitemapPage = ({
  data: {
    page: {
      hero_Heading,
      hero_Subheading,
      hero_Img,
      sitemap_Heading,
      sitemap_Paragraph,
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
      <Sitemap data={{
        sitemap_Heading,
        sitemap_Paragraph,
      }} />
      <Ebook />
      <Newsletter />
    </>
  )
}

export const query = graphql`
  query {
    page: sanitySitemap {
      # Hero
      hero_Heading
      hero_Subheading
      hero_Img {
        asset {
          altText
          gatsbyImageData(placeholder: NONE)
        }
      }
      sitemap_Heading
      sitemap_Paragraph
      # SEO
      seo {
        title
        description
      }
    }
  }
`

export default SitemapPage

export const Head = ({ data: { page: { seo } }, location: { pathname } }) => (
  <Seo
    title={seo?.title}
    description={seo?.description}
    url={pathname}
    breadcrumbs={[
      { name: "Strona główna", item: '' },
      { name: "Mapa strony", item: pathname }
    ]}
  />
)