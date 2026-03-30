export default {
  name: 'preventionAndDiagnosis',
  title: 'Profilaktyka i diagnostyka',
  type: 'document',
  icon: () => '🩺',
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
      name: 'contact_Heading',
      type: 'markdown',
      title: 'Skontaktuj się - Nagłówek',
      group: 'contact',
    },
    {
      name: 'contact_Cta',
      type: 'array',
      of: [
        { type: 'cta' }
      ],
      validation: Rule => Rule.max(2),
      title: 'Skontaktuj się - Wezwanie do działania',
      group: 'contact',
    },
    {
      name: 'contact_Img',
      type: 'image',
      title: 'Skontaktuj się - Ikona',
      group: 'contact',
    },
    {
      name: 'explanation_Heading',
      type: 'markdown',
      title: 'Wyjaśnienie - Nagłówek',
      group: 'explanation',
    },
    {
      name: 'explanation_Paragraph',
      type: 'markdown',
      title: 'Wyjaśnienie - Paragraf',
      group: 'explanation',
    },
    {
      name: 'explanation_Cta',
      type: 'array',
      of: [
        { type: 'cta' }
      ],
      validation: Rule => Rule.max(2),
      title: 'Wyjaśnienie - Wezwanie do działania',
      group: 'explanation',
    },
    {
      name: 'types_Heading',
      type: 'markdown',
      title: 'Rodzaje programów - Nagłówek',
      group: 'types',
    },
    {
      name: 'types_List',
      type: 'array',
      of: [
        { type: 'titleAndDescription' }
      ],
      title: 'Rodzaje programów - Lista',
      group: 'types',
    },
    {
      name: 'types_Cta',
      type: 'array',
      of: [
        { type: 'cta' }
      ],
      validation: Rule => Rule.max(2),
      title: 'Rodzaje programów - Wezwanie do działania',
      group: 'types',
    },
    {
      name: 'types_Icon',
      type: 'image',
      title: 'Rodzaje programów - Ikona',
      group: 'types',
    },
    {
      name: 'ctaSection',
      type: 'ctaSection',
      title: 'Sekcja wezwanie do działania',
      group: 'ctaSection',
    },
    {
      name: 'faqSection',
      type: 'faqSection',
      title: 'Sekcja z FAQ',
      group: 'faq',
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
      name: 'contact',
      title: 'Skontaktuj się',
    },
    {
      name: 'explanation',
      title: 'Sekcja z wyjaśnieniem',
    },
    {
      name: 'types',
      title: 'Rodzaje programów',
    },
    {
      name: 'ctaSection',
      title: 'Sekcja wezwanie do działania',
    },
    {
      name: 'faq',
      title: 'Sekcja z FAQ',
    },
    {
      name: 'seo',
      title: 'SEO',
    },
  ]
}
