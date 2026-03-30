export default {
  name: 'privacyPolicy',
	title: 'Polityka prywatności',
  type: 'document',
  icon: () => '📄',
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
      name: 'content',
      type: 'array',
      of: [
        {
          type: 'block'
        }
      ],
      title: 'Treść polityki',
      group: 'content',
    },
    {
      name: 'content_Img',
      type: 'image',
      title: 'Treść polityki - Ikona',
      group: 'content',
    },
    {
      name: 'ctaSection',
      type: 'ctaSection',
      title: 'Sekcja z wezwaniem do działania',
      group: 'ctaSection',
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
      name: 'content',
      title: 'Treść polityki',
    },
    {
      name: 'ctaSection',
      title: 'Sekcja z wezwaniem do działania',
    },
    {
      name: 'seo',
      title: 'SEO',
    },
  ]
}