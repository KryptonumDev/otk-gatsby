import React from 'react';

const BreadcrumbsSchema = ({ domain, breadcrumbs }) => {
  return (
    <script type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          breadcrumbs.map((item, i) => (
            {
              "@type": "ListItem",
              "position": ++i,
              "name": item.name,
              "item": `${domain}${item.item}`
            }
          ))
        ]
    })}
    </script>
  )
};

export default BreadcrumbsSchema;