import React from 'react';
import ReactMarkdown from 'react-markdown';
import { renderToStaticMarkup } from 'react-dom/server';

const FaqSchema = ({ data }) => {
  return (
    <script type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          data.map(item => (
            {
              "@type": "Question",
              "name": renderToStaticMarkup(<ReactMarkdown>{item.question}</ReactMarkdown>),
              "acceptedAnswer": {
                "@type": "Answer",
                "text": renderToStaticMarkup(<ReactMarkdown>{item.answer}</ReactMarkdown>)
              }
            }
          ))
        ]
      })}
    </script>
  )
};

export default FaqSchema;