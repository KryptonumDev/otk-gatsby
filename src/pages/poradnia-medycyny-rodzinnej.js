import * as React from "react"
import { graphql } from "gatsby"
import Ebook from "../components/sections/Ebook"
import Appointment from "../components/sections/FamilyClinic/Appointment"
import Benefits from "../components/sections/FamilyClinic/Benefits"
import Mission from "../components/sections/FamilyClinic/Mission"
import Office from "../components/sections/FamilyClinic/Office"
import Hero from "../components/sections/Hero"
import { Seo } from "../global/Seo"
import Staff from "../components/sections/Staff"
import Faq from "../components/sections/Faq"

const FamilyClinicPage = ({
  data: { page: {
    hero_Heading,
    hero_Subheading,
    hero_Img,
    benefits,
    mission_Heading,
    mission_Subheading,
    mission_Paragraph,
    mission_Cta,
    office_Heading,
    office_Cta,
    office_Icon,
    staffSection,
    appointment_Heading,
    appointment_Subheading,
    appointment_Cta,
    appointment_Img,
    faqSection,
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
      <Benefits data={benefits} />
      <Mission data={{
        mission_Heading,
        mission_Subheading,
        mission_Paragraph,
        mission_Cta,
      }} />
      <Office data={{
        office_Heading,
        office_Cta,
        office_Icon,
      }} />
      <Staff data={staffSection} />
      <Appointment data={{
        appointment_Heading,
        appointment_Subheading,
        appointment_Cta,
        appointment_Img,
      }} />
      <Ebook />
      <Faq data={faqSection} />
    </>
  )
}

export const query = graphql`
  query {
    page: sanityFamilyClinic {
      # Hero
      hero_Heading
      hero_Subheading
      hero_Img {
        asset {
          altText
          gatsbyImageData(placeholder: NONE)
        }
      }
      # Benefits
      benefits {
        img {
          asset {
            altText
            gatsbyImageData(placeholder: BLURRED)
          }
        }
        title
      }
      # Our Mission
      mission_Heading
      mission_Subheading
      mission_Paragraph
      mission_Cta {
        theme
        text
        href
      }
      # Office
      office_Heading
      office_Cta {
        theme
        text
        href
      }
      office_Icon {
        asset {
          altText
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      # Staff
      staffSection {
        heading
        subheading
        cta {
          theme
          text
          href
        }
      }
      # Appointment
      appointment_Heading
      appointment_Subheading
      appointment_Cta {
        theme
        text
        href
      }
      appointment_Img {
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

export default FamilyClinicPage

export const Head = ({ data: { page: { seo } } }) => (
  <Seo
    title={seo?.title}
    description={seo?.description}
    url='/poradnia-medycyny-rodzinnej'
  />
)