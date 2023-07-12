import React from "react"

export const SEO = ({ author, date, title, description, url, ogImage, children }) => {
  const seo = {
    title: title || 'Ośrodek TK',
    description: description || '',
    url: url || '',
  }
  const locale = "pl_PL";
  return (
    <>
      <meta name="robots" content="noindex" />
      <title>{seo.title}</title>
      <meta property="og:title" content={seo.title} />
      <meta name="description" content={seo.description} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:locale" content={locale} />
      <meta property="og:type" content="website" />

      {/* <meta property="og:image" content={ogImage || og_Img.asset.url} /> */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta property="twitter:domain" content={`${domain}/pl`} />
      <meta property="twitter:image" content={og_Img.asset.url} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      <meta property="twitter:url" content={`${domain}${seo.url}`} />
      <link rel="canonical" href={`${domain}${seo.url}`} />
      <meta property="og:url" content={`${domain}${seo.url}`} />
      {children}
    </>
  )
}