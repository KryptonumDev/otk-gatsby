export default {
  name: 'notFound',
	title: 'Błąd 404 - Brak podstrony',
  type: 'document',
  icon: () => '🚫',
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
      name: 'hero_Cta',
      type: 'cta',
      title: 'Hero Cta',
      group: 'hero',
    },
    {
      name: 'ctaSection',
      type: 'ctaSection',
      title: 'Sekcja z wezwaniem do działania',
      group: 'ctaSection'
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
      name: 'ctaSection',
      title: 'Sekcja z wezwaniem do działania',
    },
    {
      name: 'seo',
      title: 'SEO',
    },
  ]
}