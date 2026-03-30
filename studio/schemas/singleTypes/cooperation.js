export default {
  name: 'cooperation',
  title: 'Współpraca',
  type: 'document',
  icon: () => '🤝',
  fields: [
    // Hero
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
      name: 'hero_DisableShape',
      type: 'boolean',
      title: 'Hero bez dekoracyjnego kształtu',
      description: 'Po włączeniu zdjęcie hero będzie prostokątne, bez dekoracyjnego tła.',
      group: 'hero',
    },
    {
      name: 'hero_Cta',
      type: 'array',
      of: [{ type: 'cta' }],
      title: 'Hero CTA',
      group: 'hero',
    },
    // Intro
    {
      name: 'intro_Heading',
      type: 'markdown',
      title: 'Wprowadzenie - Nagłówek',
      group: 'intro',
    },
    {
      name: 'intro_Paragraph',
      type: 'markdown',
      title: 'Wprowadzenie - Tekst',
      description: 'Wspiera Markdown — listy, pogrubienia, linki itp.',
      group: 'intro',
    },
    // Cooperation Groups
    {
      name: 'groups',
      type: 'array',
      title: 'Grupy współpracy',
      group: 'groups',
      of: [{ type: 'cooperationGroup' }],
    },
    // Network
    {
      name: 'network_Heading',
      type: 'markdown',
      title: 'Sieć placówek - Nagłówek',
      group: 'network',
    },
    {
      name: 'network_Paragraph',
      type: 'markdown',
      title: 'Sieć placówek - Tekst',
      group: 'network',
    },
    // Form
    {
      name: 'form_Heading',
      type: 'markdown',
      title: 'Formularz - Nagłówek',
      group: 'form',
    },
    {
      name: 'form_Img',
      type: 'image',
      title: 'Formularz - Ikona',
      group: 'form',
    },
    {
      name: 'form_TargetEmail',
      type: 'string',
      title: 'Formularz - Email docelowy',
      description: 'Adres email, na który będą wysyłane wiadomości z formularza współpracy',
      validation: Rule => Rule.required().email(),
      group: 'form',
    },
    // FAQ
    {
      name: 'faqSection',
      type: 'faqSection',
      title: 'Sekcja z FAQ',
      group: 'faq',
    },
    // SEO
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
      name: 'intro',
      title: 'Wprowadzenie',
    },
    {
      name: 'groups',
      title: 'Grupy współpracy',
    },
    {
      name: 'network',
      title: 'Sieć placówek',
    },
    {
      name: 'form',
      title: 'Formularz',
    },
    {
      name: 'faq',
      title: 'FAQ',
    },
    {
      name: 'seo',
      title: 'SEO',
    },
  ]
}
