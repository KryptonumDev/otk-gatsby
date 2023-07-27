import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

const OrganizationSchema = () => {
  const { staff } = useStaticQuery(graphql`
    query {
      staff: allSanityStaff {
        nodes {
          name
          position
        }
      }
    }
  `)

  return (
    <script type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "MedicalClinic",
        "name": "Ośrodek Zdrowia w Turośni Kościelnej",
        "url": "https://osrodektk.pl",
        "telephone": "+48 85 650 52 79",
        "email": "rejestracja@osrodektk.pl",
        "logo": "https://osrodektk.pl/logo-osrodek-zdrowia-w-turosni-koscielnej.png",
        "image": "https://osrodektk.pl/logo-osrodek-zdrowia-w-turosni-koscielnej.png",
        "description": "Poradnia lekarza rodzinnego w Turośni Kościelnej. Opieka zdrowotna, diagnostyka oraz liczne programy profilaktyczne w ramach NFZ.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Białostocka 7",
          "addressLocality": "Turośń Kościelna",
          "postalCode": "18-106",
          "addressCountry": "PL"
        },
        "OpeningHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday"
          ],
          "opens": "08:00",
          "closes": "18:00"
        },
        "contactPoint": [
          {
            "@type": "ContactPoint",
            "telephone": "+48 85 650 52 79",
            "email": "rejestracja@osrodektk.pl",
            "contactType": "Rejestracja"
          },
        ],
        "employees": [
          staff.nodes.map(person => (
            {
              "@type": "Person",
              "name": person.name,
              "jobTitle": person.position,
            }
          )),
        ],
        "sameAs": [
          "https://www.facebook.com/OsrodekTK",
          "https://www.youtube.com/@osrodekTK"
        ]
      })}
    </script>
  )
};

export default OrganizationSchema;