import { removeMarkdown } from "../../utils/functions"

export default {
  name: "ctaSection",
  title: "Sekcja z wezwaniem do działania",
  type: "object",
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
      title: 'Tekst',
    },
    {
      name: 'claim',
      type: 'markdown',
      title: 'Wyróżniony tekst',
    },
    {
      name: 'cta',
      type: 'array',
      of: [
        {
          type: 'cta'
        }
      ],
      title: 'Wezwanie do działania',
    },
    {
      name: 'icons',
      type: 'array',
      of: [
        {
          type: 'image'
        }
      ],
      title: 'Ikony',
      validation: Rule => Rule.max(2),
    },
  ],
  preview: {
    select: {
      title: 'heading',
      subtitle: 'subheading'
    },
    prepare({ title, subtitle }){
      return {
        title: removeMarkdown(title),
        subtitle: removeMarkdown(subtitle),
      }
    }
  }
}