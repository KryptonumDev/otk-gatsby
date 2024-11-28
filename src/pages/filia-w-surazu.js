import { graphql } from "gatsby"
import * as React from "react"
import Hero from "../components/sections/Homepage/Hero"
import BenefitsSection from "../components/sections/BenefitsSection"
import Learn from "../components/sections/Homepage/Learn"
import Feautures from "../components/sections/Homepage/Feautures"
import CompanyInfo from "../components/sections/CompanyInfo"
import Registration from "../components/sections/Registration"
import Faq from "../components/sections/Faq"
import CtaSection from "../components/sections/CtaSection"
import OurStaff from "../components/sections/OurStaff"
import Prevention from "../components/sections/Homepage/Prevention"
import CtaTiles from "../components/sections/CtaTiles"
import { Seo } from "../global/Seo"

const SurazClinicPage = ({
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
    features_Heading,
    features_List,
    CompanyInfo: CompanyInfoData,
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
    faqSection,
    ctaSection,
    staffSection,
    prevention_Heading,
    prevention_Paragraph,
    prevention_ListTitle,
    prevention_List,
    prevention_CtaTitle,
    prevention_Cta,
    CtaTiles: CtaTilesData,
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
      <Feautures data={{
        features_Heading,
        features_List
      }} />
      <CompanyInfo {...CompanyInfoData} />
      <Registration id="zapisz-sie" data={{
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
      <Faq data={faqSection} />
      <CtaSection data={ctaSection} />
      <OurStaff data={staffSection} />
      <Prevention data={{
        prevention_Heading,
        prevention_Paragraph,
        prevention_ListTitle,
        prevention_List,
        prevention_CtaTitle,
        prevention_Cta,
      }} />
      <CtaTiles {...CtaTilesData} />
    </>
  )
}

export const query = graphql`
  query {
    page: sanitySurazClinic {
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
      # Staff
      staffSection {
        heading
        subheading
        list {
          name
          position
          img {
            asset {
              altText
              gatsbyImageData(placeholder: NONE)
            }
          }
        }
        cta {
          theme
          text
          href
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
      # Cta Tiles
      CtaTiles {
        heading
        paragraph
        img {
          asset {
            altText
            gatsbyImageData(placeholder: NONE)
          }
        }
        list {
          img {
            asset {
              altText
              gatsbyImageData(placeholder: NONE)
            }
          }
          title
          description
          cta {
            theme
            text
            href
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

export default SurazClinicPage

export const Head = ({ data: { page: { seo, faqSection } }, location: { pathname } }) => (
  <Seo
    title={seo?.title}
    description={seo?.description}
    breadcrumbs={[
      { name: "Strona główna", item: '' },
      { name: "Filia w Surażu", item: pathname }
    ]}
    faqSchema={faqSection?.list}
  />
)
