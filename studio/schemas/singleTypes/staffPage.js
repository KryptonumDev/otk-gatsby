export default {
  name: 'staffPage',
	title: 'Nasz personel',
  type: 'document',
  icon: () => '👥',
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
      name: 'staff_List',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: { type: 'staff' },
          options: {
            disableNew: true
          }
        }
      ],
      title: 'Personel - Lista osób',
      group: 'staff',
    },
    {
      name: 'staff_Cta',
      type: 'array',
      of: [
        {
          type: 'cta'
        }
      ],
      title: 'Personel - Wezwanie do działania',
      group: 'staff',
    },
    {
      name: 'services_Heading',
      type: 'markdown',
      title: 'Usługi - Nagłówek',
      group: 'services',
    },
    {
      name: 'services_Paragraph',
      type: 'markdown',
      title: 'Usługi - Paragraf',
      group: 'services',
    },
    {
      name: 'services_List',
      type: 'array',
      of: [
        {
          type: 'imageAndTitle'
        }
      ],
      title: 'Lista Usług',
      group: 'services',
    },
    {
      name: 'services_Cta',
      type: 'array',
      of: [
        {
          type: 'cta'
        }
      ],
      validation: Rule => Rule.max(2),
      title: 'Usługi - Cta',
      group: 'services',
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
      name: 'staff',
      title: 'Personel',
    },
    {
      name: 'services',
      title: 'Usługi',
    },
    {
      name: 'seo',
      title: 'SEO',
    },
  ]
}