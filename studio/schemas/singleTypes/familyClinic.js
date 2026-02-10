export default {
  name: 'familyClinic',
  title: 'Poradnia medycyny rodzinnej',
  type: 'document',
  icon: () => '👨‍👩‍👧',
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
      name: 'benefits',
      type: 'array',
      of: [
        {
          type: 'imageAndTitle'
        }
      ],
      title: 'Benefity kafelki',
      group: 'benefits',
    },
    {
      name: 'mission_Heading',
      type: 'markdown',
      title: 'Nasza misja - Nagłowek',
      group: 'mission',
    },
    {
      name: 'mission_Subheading',
      type: 'markdown',
      title: 'Nasza misja - Podnagłówek',
      group: 'mission',
    },
    {
      name: 'mission_Paragraph',
      type: 'markdown',
      title: 'Nasza misja - Paragraf',
      group: 'mission',
    },
    {
      name: 'mission_Cta',
      type: 'array',
      of: [
        {
          type: 'cta'
        }
      ],
      validation: Rule => Rule.max(2),
      title: 'Nasza misja - Cta',
      group: 'mission',
    },
    {
      name: 'office_Heading',
      type: 'markdown',
      title: 'Przychodnia - Nagłówek',
      group: 'office',
    },
    {
      name: 'office_Cta',
      type: 'array',
      of: [
        {
          type: 'cta'
        }
      ],
      validation: Rule => Rule.max(2),
      title: 'Przychodnia - Wezwanie do działania',
      group: 'office',
    },
    {
      name: 'office_Icon',
      type: 'image',
      title: 'Przychodnia - Ikona',
      group: 'office',
    },
    {
      name: 'office_Map',
      type: 'geopoint',
      title: 'Koordynaty mapy',
      validation: Rule => Rule.required(),
    },
    {
      name: 'staffSection',
      type: 'staffSection',
      title: 'Nasz personel',
      group: 'staff',
    },
    {
      name: 'appointment_Heading',
      type: 'markdown',
      title: 'Umów wizytę - Nagłówek',
      group: 'appointment',
    },
    {
      name: 'appointment_Subheading',
      type: 'markdown',
      title: 'Umów wizytę - Podnagłówek',
      group: 'appointment',
    },
    {
      name: 'appointment_Cta',
      type: 'array',
      of: [
        {
          type: 'cta'
        }
      ],
      validation: Rule => Rule.max(2),
      title: 'Umów wizytę - Wezwanie do działania',
      group: 'appointment',
    },
    {
      name: 'appointment_Img',
      type: 'image',
      title: 'Umów wizytę - Ikona',
      group: 'appointment',
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
      name: 'benefits',
      title: 'Benefity',
    },
    {
      name: 'mission',
      title: 'Nasza misja',
    },
    {
      name: 'office',
      title: 'Nasza przychodnia',
    },
    {
      name: 'staff',
      title: 'Personel',
    },
    {
      name: 'appointment',
      title: 'Umów wizytę',
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
