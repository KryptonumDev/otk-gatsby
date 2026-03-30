import * as React from "react"
import { graphql } from "gatsby"
import Hero from "../components/sections/Hero"
import { Seo } from "../global/Seo"
import Intro from "../components/sections/Cooperation/Intro"
import Groups from "../components/sections/Cooperation/Groups"
import Network from "../components/sections/Cooperation/Network"
import Form from "../components/sections/Contact/Form"
import Faq from "../components/sections/Faq"

const cooperationSubjects = [
  'Staż podyplomowy w POZ',
  'Szkolenie specjalizacyjne (rezydencja)',
  'Współpraca kliniczna (lekarz / pielęgniarka / położna)',
  'Szkolenia i doradztwo (zarządzanie POZ)',
  'Inny temat',
];

const fetchHeroDisableShape = async () => {
  const response = await fetch('/api/cooperation-hero');

  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`);
  }

  const payload = await response.json();
  return Boolean(payload?.hero_DisableShape);
};

const CooperationPage = ({ data: { page, global } }) => {
  const [heroDisableShape, setHeroDisableShape] = React.useState(
    typeof page?.hero_DisableShape === 'boolean' ? page.hero_DisableShape : undefined
  );
  const [heroShapeResolved, setHeroShapeResolved] = React.useState(
    !page?.hero_Img || typeof page?.hero_DisableShape === 'boolean'
  );

  React.useEffect(() => {
    if (!page?.hero_Img || heroShapeResolved) {
      return undefined;
    }

    let isCancelled = false;

    fetchHeroDisableShape()
      .then((value) => {
        if (!isCancelled) {
          setHeroDisableShape(value);
        }
      })
      .catch((error) => {
        console.error('[cooperation] Failed to resolve hero shape mode:', error);
        if (!isCancelled) {
          setHeroDisableShape(false);
        }
      })
      .finally(() => {
        if (!isCancelled) {
          setHeroShapeResolved(true);
        }
      });

    return () => {
      isCancelled = true;
    };
  }, [heroShapeResolved, page?.hero_Img]);

  if (!page) {
    return (
      <div className="max-width" style={{ padding: '120px 0', textAlign: 'center' }}>
        <h1>Współpraca</h1>
        <p style={{ marginTop: '24px', fontSize: '18px', opacity: 0.7 }}>
          Treść strony jest w trakcie przygotowania. Zapraszamy wkrótce.
        </p>
      </div>
    )
  }

  const {
    hero_Heading,
    hero_Subheading,
    hero_Img,
    hero_Cta,
    intro_Heading,
    intro_Paragraph,
    groups,
    network_Heading,
    network_Paragraph,
    form_Heading,
    form_Img,
    form_TargetEmail,
    faqSection,
  } = page;

  return (
    <>
      {hero_Heading && (
        <Hero
          data={{
            hero_Heading,
            hero_Subheading,
            hero_Img,
            hero_DisableShape: heroDisableShape,
            hero_ShouldRenderImage: heroShapeResolved,
            hero_Cta,
          }}
        />
      )}
      {intro_Heading && (
        <Intro
          heading={intro_Heading}
          paragraph={intro_Paragraph}
        />
      )}
      {groups && groups.length > 0 && (
        <Groups groups={groups} />
      )}
      {network_Heading && (
        <Network
          heading={network_Heading}
          paragraph={network_Paragraph}
          clinics={global.networkClinics}
        />
      )}
      {form_Heading && (
        <Form
          heading={form_Heading}
          icon={form_Img}
          formProps={{
            endpoint: '/api/cooperation',
            subjects: cooperationSubjects,
            targetEmail: form_TargetEmail,
          }}
        />
      )}
      {faqSection && (
        <Faq data={faqSection} />
      )}
    </>
  )
}

export const query = graphql`
  query {
    page: sanityCooperation {
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
        text
        href
      }
      # Intro
      intro_Heading
      intro_Paragraph
      # Groups
      groups {
        heading
        content
        img {
          asset {
            altText
            url
            gatsbyImageData(placeholder: BLURRED, width: 600)
          }
        }
      }
      # Network
      network_Heading
      network_Paragraph
      # Form
      form_Heading
      form_Img {
        asset {
          altText
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      form_TargetEmail
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
    global: sanityGlobal {
      networkClinics {
        name
        locations {
          city
          address
          phone
          email
        }
        url
        logo {
          asset {
            url
          }
        }
        isActive
      }
    }
  }
`

export default CooperationPage

export const Head = ({ data: { page }, location: { pathname } }) => (
  <Seo
    title={page?.seo?.title || 'Współpraca'}
    description={page?.seo?.description}
    url={pathname}
    breadcrumbs={[
      { name: "Strona główna", item: '' },
      { name: "Współpraca", item: pathname }
    ]}
    faqSchema={page?.faqSection?.list}
  />
)
