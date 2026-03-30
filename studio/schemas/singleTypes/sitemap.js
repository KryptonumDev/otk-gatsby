export default {
  name: 'sitemap',
	title: 'Mapa strony',
  type: 'document',
  icon: () => '🗺️',
  fields: [
    {
      name: 'hero_Heading',
      type: 'markdown',
      title: 'Hero Nagłówek',
      group: 'hero',
    },
    {
      name: 'hero_Subheading',
      type: 'markdown',
      title: 'Hero Podnagłówek',
      group: 'hero',
    },
    {
      name: 'hero_Img',
      type: 'image',
      title: 'Hero Zdjęcie',
      group: 'hero',
    },
    {
      name: 'sitemap_Heading',
      type: 'markdown',
      title: 'Sitemapa Nagłówek',
      group: 'sitemap',
    },
    {
      name: 'sitemap_Paragraph',
      type: 'markdown',
      title: 'Sitemapa Paragraf',
      group: 'sitemap',
    },
    {
      name: 'seo',
      type: 'seo',
      title: 'SEO',
      group: 'seo',
    },
  ],
  groups: [
    {
      name: 'hero',
      title: 'Hero',
    },
    {
      name: 'sitemap',
      title: 'Sitemapa',
    },
    {
      name: 'seo',
      title: 'SEO',
    },
  ]
}