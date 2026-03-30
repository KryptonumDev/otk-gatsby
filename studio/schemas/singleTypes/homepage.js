export default {
  name: 'homepage',
  title: 'Strona główna',
  type: 'document',
  icon: () => '⭐️',
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
      name: 'hero_Paragraph',
      type: 'markdown',
      title: 'Hero Paragraf',
      group: 'hero',
    },
    {
      name: 'hero_Cta',
      type: 'array',
      of: [
        {
          type: 'cta'
        }
      ],
      title: 'Hero Cta',
      group: 'hero',
    },
    {
      name: 'hero_Img',
      type: 'image',
      title: 'Hero Zdjęcie',
      group: 'hero',
    },
    {
      name: 'services_Heading',
      type: 'markdown',
      title: 'Usługi Nagłówek',
      group: 'services',
    },
    {
      name: 'services_Paragraph',
      type: 'markdown',
      title: 'Usługi Paragraf',
      group: 'services',
    },
    {
      name: 'services_List',
      type: 'array',
      of: [
        {
          type: 'imageAndDescription'
        }
      ],
      title: 'Lista Usług',
      group: 'services',
    },
    {
      name: 'learn_List',
      type: 'array',
      of: [
        {
          type: 'markdown'
        }
      ],
      title: 'Dowiedz się więcej - Lista',
      group: 'learnMore',
    },
    {
      name: 'learn_Paragraph',
      type: 'markdown',
      title: 'Dowiedz się więcej - Paragraf',
      group: 'learnMore',
    },
    {
      name: 'learn_Cta',
      type: 'array',
      of: [
        {
          type: 'cta'
        }
      ],
      title: 'Dowiedz się więcej - Wezwanie do działania',
      group: 'learnMore',
    },
    {
      name: 'learn_Img',
      type: 'image',
      title: 'Dowiedz się więcej - Zdjęcie',
      group: 'learnMore',
    },
    {
      name: 'ctaSection',
      type: 'ctaSection',
      title: 'Dowiedz się więcej - Sekcja wezwanie do działania',
      group: 'ctaSection',
    },
    {
      name: 'features_Heading',
      type: 'markdown',
      title: 'Cechy - Nagłówek',
      group: 'features',
    },
    {
      name: 'features_List',
      type: 'array',
      of: [
        {
          type: 'imageAndDescription'
        }
      ],
      title: 'Cechy - Lista',
      group: 'features',
    },
    {
      name: 'ctaSection2',
      type: 'ctaSection',
      title: 'Dowiedz się więcej - Sekcja wezwanie do działania',
      group: 'ctaSection2',
    },
    {
      name: 'prevention_Heading',
      type: 'markdown',
      title: 'Profilaktyka - Nagłówek',
      group: 'prevention',
    },
    {
      name: 'prevention_Paragraph',
      type: 'markdown',
      title: 'Profilaktyka - Paragraf',
      group: 'prevention',
    },
    {
      name: 'prevention_ListTitle',
      type: 'markdown',
      title: 'Profilaktyka - Tytuł Listy',
      group: 'prevention',
    },
    {
      name: 'prevention_List',
      type: 'array',
      of: [
        {
          type: 'imageAndDescription'
        }
      ],
      title: 'Profilaktyka - Lista',
      group: 'prevention',
    },
    {
      name: 'prevention_CtaTitle',
      type: 'markdown',
      title: 'Profilaktyka - Wezwanie do działania Tytuł',
      group: 'prevention',
    },
    {
      name: 'prevention_Cta',
      type: 'array',
      of: [
        {
          type: 'cta'
        }
      ],
      title: 'Profilaktyka - Wezwanie do działania',
      group: 'prevention',
    },
    {
      name: 'faqSection',
      type: 'faqSection',
      title: 'Sekcja z FAQ',
      group: 'faq',
    },
    {
      name: 'CompanyInfo',
      type: 'CompanyInfo',
      title: 'Sekcja z informacją o firmie (mapka)',
      group: 'CompanyInfo',
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
      name: 'services',
      title: 'Usługi',
    },
    {
      name: 'learnMore',
      title: 'Dowiedz się więcej',
    },
    {
      name: 'ctaSection',
      title: 'Sekcja wezwanie do działania',
    },
    {
      name: 'features',
      title: 'Cechy',
    },
    {
      name: 'ctaSection2',
      title: 'Sekcja wezwanie do działania 2',
    },
    {
      name: 'prevention',
      title: 'Profilaktyka',
    },
    {
      name: 'faq',
      title: 'Sekcja z FAQ',
    },
    {
      name: 'CompanyInfo',
      title: 'Sekcja z informacją o firmie (mapka)',
    },
    {
      name: 'seo',
      title: 'SEO',
    },
  ]
}
