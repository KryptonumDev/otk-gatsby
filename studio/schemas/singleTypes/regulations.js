import { removeMarkdown } from "../../utils/functions"

export default {
  name: 'regulations',
	title: 'Regulamin',
  type: 'document',
  icon: () => '📑',
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
      name: 'rules_Heading',
      type: 'markdown',
      title: 'Zasady - Nagłówek',
      group: 'rules',
    },
    {
      name: 'rules_Subheading',
      type: 'markdown',
      title: 'Zasady - Podnagłówek',
      group: 'rules',
    },
    {
      name: 'rules_List',
      type: 'array',
      of: [
        { type: 'regulations_RulesList' }
      ],
      title: 'Zasady - Lista zasad',
      group: 'rules',
    },
    {
      name: 'staffSection',
      type: 'staffSection',
      title: 'Nasz personel',
      group: 'staff',
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
      name: 'rules',
      title: 'Zasady',
    },
    {
      name: 'staff',
      title: 'Personel',
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

export const regulations_RulesList = {
  name: "regulations_RulesList",
  title: "Lista zasad",
  type: "object",
  fields: [
    {
      name: 'string',
      type: 'markdown',
      title: 'Tekst',
    },
    {
      name: 'extended',
      type: 'boolean',
      title: 'Rozszerzony element',
      description: 'Czy element jest rozszerzony (Wezwanie do działania, siatka elementów...)?',
      initialValue: false,
    },
    {
      name: 'grid',
      type: 'array',
      of: [
        {
          type: 'titleAndDescription'
        }
      ],
      title: 'Siatka elementów',
      hidden: ({ parent }) => !parent.extended,
    },
    {
      name: 'cta',
      type: 'array',
      of: [
        {
          type: 'cta'
        }
      ],
      validation: Rule => Rule.max(2),
      title: 'Wezwanie do działania',
      hidden: ({ parent }) => !parent.extended,
    },
  ],
  preview: {
    select: {
      title: 'string',
    },
    prepare({ title }) {
      return {
        title: removeMarkdown(title),
      }
    }
  }
}