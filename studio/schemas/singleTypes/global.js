export default {
  name: 'global',
  title: 'Globalne',
  type: 'document',
  icon: () => '🌍',
  fields: [
    {
      name: 'tel',
      type: 'string',
      title: 'Numer telefonu',
      group: 'general',
    },
    {
      name: 'email',
      type: 'string',
      title: 'Adres e-mail',
      group: 'general',
    },
    {
      name: 'facebook',
      type: 'string',
      title: 'Facebook Link',
      group: 'general',
    },
    {
      name: 'youtube',
      type: 'string',
      title: 'YouTube Link',
      group: 'general',
    },
    {
      name: 'nav',
      type: 'global_Nav',
      title: 'Nawigacja',
      group: 'nav',
    },
    {
      name: 'footer',
      type: 'global_Footer',
      title: 'Stopka',
      group: 'footer',
    },
    {
      name: 'ebook',
      type: 'global_Ebook',
      title: 'Zapisz się i pobierz ebook',
      group: 'ebook',
    },
    {
      name: 'newsletter',
      type: 'global_Newsletter',
      title: 'Newsletter',
      group: 'newsletter',
    },
    {
      name: 'seo',
      type: 'global_Seo',
      title: 'Globalne SEO',
      group: 'seo',
    },
  ],
  groups: [
    {
      name: 'general',
      title: 'Ogólne',
    },
    {
      name: 'nav',
      title: 'Nawigacja',
    },
    {
      name: 'footer',
      title: 'Stopka',
    },
    {
      name: 'ebook',
      title: 'Zapisz się i pobierz ebook',
    },
    {
      name: 'info',
      title: 'Informacje o firmie',
    },
    {
      name: 'newsletter',
      title: 'Newsletter',
    },
    {
      name: 'seo',
      title: 'SEO',
    },
  ]
}

export const global_Footer = {
  name: 'global_Footer',
  title: 'Stopka',
  type: 'object',
  fields: [
    {
      name: 'heading',
      type: 'string',
      title: 'Nagłówek',
    },
    {
      name: 'paragraph',
      type: 'string',
      title: 'Paragraf',
    },
    {
      name: 'cta',
      type: 'cta',
      title: 'Wezwanie do działania',
    },
    {
      name: 'legal_Text',
      type: 'markdown',
      title: 'Fundusze Europejski Informacje',
    },
    {
      name: 'legal_Images',
      type: 'array',
      of: [
        {
          type: 'image'
        }
      ],
      title: 'Fundusze Europejski Loga',
    },
  ]
}

export const global_Nav = {
  name: 'global_Nav',
  title: 'Nawigacja',
  type: 'object',
  fields: [
    {
      name: 'workingHours',
      type: 'string',
      title: 'Godziny otwarcia',
    },
    {
      name: 'questionnaire',
      type: 'url',
      title: 'Link do ankiety satysfakcji',
    },
  ]
}

export const global_Ebook = {
  name: 'global_Ebook',
  title: 'Zapisz się i pobierz ebook',
  type: 'object',
  fields: [
    {
      name: 'heading',
      type: 'markdown',
      title: 'Nagłówek',
    },
    {
      name: 'subheading',
      type: 'markdown',
      title: 'Podnagłówek',
    },
    {
      name: 'paragraph',
      type: 'markdown',
      title: 'Paragraf',
    },
    {
      name: 'formCta',
      type: 'string',
      title: 'Tekst Przcisku Formularza',
    },
    {
      name: 'cta',
      type: 'cta',
      title: 'Wezwanie do działania',
    },
    {
      name: 'icon',
      type: 'image',
      title: 'Ikona',
    },
  ]
}

export const global_Newsletter = {
  name: 'global_Newsletter',
  title: 'Sekcja Newsletter',
  type: 'object',
  fields: [
    {
      name: 'heading',
      type: 'markdown',
      title: 'Nagłówek',
    },
    {
      name: 'subheading',
      type: 'markdown',
      title: 'Podnagłówek',
    },
    {
      name: 'cta',
      type: 'string',
      title: 'Tekst na przycisku',
    },
    {
      name: 'img',
      type: 'image',
      title: 'Zdjęcie',
    },
  ]
}

export const global_Seo = {
  name: "global_Seo",
  title: "Global SEO",
  type: "object",
  fields: [
    {
      name: 'og_Img',
      type: 'image',
      title: 'OG Image',
      description: 'Zdjęcie, które jest widoczne przy udostępnianiu strony w mediach społecznościowych. Wymiary zdjęcia powinny mieć 1200x630px'
    },
  ]
}
