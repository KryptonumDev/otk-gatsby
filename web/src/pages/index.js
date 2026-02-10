import { graphql } from "gatsby"
import * as React from "react"
import BenefitsSection from "../components/sections/BenefitsSection"
import CompanyInfo from "../components/sections/CompanyInfo"
import CtaSection from "../components/sections/CtaSection"
import Ebook from "../components/sections/Ebook"
import Faq from "../components/sections/Faq"
import Feautures from "../components/sections/Homepage/Feautures"
import Hero from "../components/sections/Homepage/Hero"
import Learn from "../components/sections/Homepage/Learn"
import Prevention from "../components/sections/Homepage/Prevention"
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
    prevention_Heading,
    prevention_Paragraph,
    prevention_ListTitle,
    prevention_List,
    prevention_CtaTitle,
    prevention_Cta,
    faqSection,
    CompanyInfo: CompanyInfoData,
  } }
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
      <BenefitsSection
        heading={services_Heading}
        paragraph={services_Paragraph}
        list={services_List}
      />
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
      <Prevention data={{
        prevention_Heading,
        prevention_Paragraph,
        prevention_ListTitle,
        prevention_List,
        prevention_CtaTitle,
        prevention_Cta,
      }} />
      <Ebook />
      <Faq data={faqSection} />
      <CompanyInfo {...CompanyInfoData} />
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
          gatsbyImageData(placeholder: NONE)
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
      # Prevention Section
      prevention_Heading
      prevention_Paragraph
      prevention_ListTitle
      prevention_List {
        img {
          asset {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
        title
      }
      prevention_CtaTitle
      prevention_Cta {
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
      # Company Info
      CompanyInfo {
        heading
        subheading
        list
        map {
          lat
          lng
          alt
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

export default IndexPage

export const Head = ({ data: { page: { seo, faqSection } } }) => (
  <Seo
    title={seo?.title}
    description={seo?.description}
    breadcrumbs={[
      { name: "Strona główna", item: '' }
    ]}
    faqSchema={faqSection?.list}
  />
)
