import { removeMarkdown } from "../../utils/functions"

export default {
  name: 'pricing',
	title: 'Cennnik',
  type: 'document',
  icon: () => '💰',
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
      name: 'pricing_Heading',
      type: 'markdown',
      title: 'Cennik - Nagłówek',
      group: 'pricing',
    },
    {
      name: 'pricing_List',
      type: 'array',
      of: [
        { type: 'pricing_List' }
      ],
      title: 'Cennik - Lista',
      group: 'pricing',
    },
    {
      name: 'pricing_Cta',
      type: 'array',
      of: [
        { type: 'cta' }
      ],
      title: 'Cennik - Wezwanie do działania',
      group: 'pricing',
      validation: Rule => Rule.max(2),
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
      name: 'pricing',
      title: 'Cennik',
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

export const pricing_List = {
  name: "pricing_List",
  title: "Cennik",
  type: "object",
  fields: [
    {
      name: 'name',
      type: 'markdown',
      title: 'Usługa',
    },
    {
      name: 'price',
      type: 'markdown',
      title: 'Cena',
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'price'
    },
    prepare({ title, subtitle }) {
      return {
        title: removeMarkdown(title),
        subtitle: removeMarkdown(subtitle),
      }
    }
  }
}