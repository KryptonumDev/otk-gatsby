export default {
  name: 'surazClinic',
  title: 'Filia w Surażu',
  type: 'document',
  icon: () => '🏥',
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
      name: 'CompanyInfo',
      type: 'CompanyInfo',
      title: 'Sekcja z informacją o firmie (mapka)',
      group: 'CompanyInfo',
    },
    {
      name: 'registration_Heading',
      type: 'markdown',
      title: 'Rejestracja - Nagłowek',
      group: 'registration',
    },
    {
      name: 'registration_Paragraph',
      type: 'markdown',
      title: 'Rejestracja - Paragraf',
      group: 'registration',
    },
    {
      name: 'registration_Has_Title',
      type: 'markdown',
      title: 'Rejestracja - Mam Konto - Tytuł',
      group: 'registration',
      fieldset: 'registration_Has'
    },
    {
      name: 'registration_Has_Paragraph',
      type: 'markdown',
      title: 'Rejestracja - Mam Konto - Paragraf',
      group: 'registration',
      fieldset: 'registration_Has'
    },
    {
      name: 'registration_Has_Cta',
      type: 'array',
      of: [
        { type: 'cta' }
      ],
      title: 'Rejestracja - Mam Konto - Wezwanie do działania',
      group: 'registration',
      fieldset: 'registration_Has'
    },
    {
      name: 'registration_HasNot_Title',
      type: 'markdown',
      title: 'Rejestracja - Nie Mam Konta - Tytuł',
      group: 'registration',
      fieldset: 'registration_HasNot'
    },
    {
      name: 'registration_HasNot_Heading',
      type: 'markdown',
      title: 'Rejestracja - Nie Mam Konta - Nagłowek',
      group: 'registration',
      fieldset: 'registration_HasNot'
    },
    {
      name: 'registration_HasNot_Subheading',
      type: 'markdown',
      title: 'Rejestracja - Nie Mam Konta - Podnagłowek',
      group: 'registration',
      fieldset: 'registration_HasNot'
    },
    {
      name: 'registration_HasNot_Paragraph',
      type: 'markdown',
      title: 'Rejestracja - Nie Mam Konta - Paragraf',
      group: 'registration',
      fieldset: 'registration_HasNot'
    },
    {
      name: 'registration_HasNot_List',
      type: 'array',
      of: [
        { type: 'imageAndDescription' }
      ],
      title: 'Rejestracja - Nie Mam Konta - Lista',
      group: 'registration',
      fieldset: 'registration_HasNot'
    },
    {
      name: 'faqSection',
      type: 'faqSection',
      title: 'Sekcja z FAQ',
      group: 'faq',
    },
    {
      name: 'ctaSection',
      type: 'ctaSection',
      title: 'Dowiedz się więcej - Sekcja wezwanie do działania',
      group: 'ctaSection',
    },
    {
      name: 'staffSection',
      type: 'staffSection',
      title: 'Nasz personel',
      group: 'staff',
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
      name: 'CtaTiles',
      type: 'CtaTiles',
      title: 'Sekcja z kafelkami wezwanie do działania',
      group: 'CtaTiles',
    },
    {
      name: 'seo',
      type: 'seo',
      title: 'SEO',
      group: 'seo',
    },
  ],
  fieldsets: [
    {
      name: 'registration_Has',
      title: 'Mam konto',
      options: { collapsible: true, collapsed: true },
    },
    {
      name: 'registration_HasNot',
      title: 'Nie mam konta',
      options: { collapsible: true, collapsed: true },
    }
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
      name: 'features',
      title: 'Cechy',
    },
    {
      name: 'CompanyInfo',
      title: 'Sekcja z informacją o firmie (mapka)',
    },
    {
      name: 'registration',
      title: 'Rejestracja',
    },
    {
      name: 'faq',
      title: 'Sekcja z FAQ',
    },
    {
      name: 'ctaSection',
      title: 'Sekcja wezwanie do działania',
    },
    {
      name: 'staff',
      title: 'Personel',
    },
    {
      name: 'prevention',
      title: 'Profilaktyka',
    },
    {
      name: 'CtaTiles',
      title: 'Sekcja z kafelkami wezwanie do działania',
    },
    {
      name: 'seo',
      title: 'SEO',
    },
  ]
}
