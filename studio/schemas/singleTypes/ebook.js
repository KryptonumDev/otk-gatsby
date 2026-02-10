import { removeMarkdown } from "../../utils/functions"

export default {
  name: 'ebook',
	title: 'Podstrona z Ebookiem',
  type: 'document',
  icon: () => '📖',
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
      name: 'why_Heading',
      type: 'markdown',
      title: 'Dlaczego warto - Nagłówek',
      group: 'why',
    },
    {
      name: 'why_Paragraph',
      type: 'markdown',
      title: 'Dlaczego warto - Nagłówek',
      group: 'why',
    },
    {
      name: 'contents_Heading',
      type: 'markdown',
      title: 'Spis treści - Nagłówek',
      group: 'contents',
    },
    {
      name: 'contents_Title',
      type: 'markdown',
      title: 'Spis treści - Tytuł',
      group: 'contents',
    },
    {
      name: 'contents_List',
      type: 'array',
      of: [
        { type: 'ebook_Contents' }
      ],
      title: 'Spis treści - Lista',
      group: 'contents',
    },
    {
      name: 'contents_Icon',
      type: 'image',
      title: 'Spis treści - Ikona',
      group: 'contents',
    },
    {
      name: 'authors_Heading',
      type: 'markdown',
      title: 'Autorzy - Nagłówek',
      group: 'authors',
    },
    {
      name: 'authors_List',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'staff' }],
          options: { disableNew: true }
        }
      ],
      title: 'Autorzy - Osoby',
      group: 'authors',
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
      name: 'why',
      title: 'Dlaczego?',
    },
    {
      name: 'contents',
      title: 'Spis treści',
    },
    {
      name: 'authors',
      title: 'Autorzy',
    },
    {
      name: 'seo',
      title: 'SEO',
    },
  ]
}

export const ebook_Contents = {
  name: "ebook_Contents",
  title: "Spis treści",
  type: "object",
  fields: [
    {
      name: 'part',
      type: 'markdown',
      title: 'Część',
    },
    {
      name: 'title',
      type: 'markdown',
      title: 'Tytuł',
    },
    {
      name: 'page',
      type: 'markdown',
      title: 'Strona',
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'page'
    },
    prepare({ title, subtitle }) {
      return {
        title: removeMarkdown(title),
        subtitle: removeMarkdown(subtitle),
      }
    }
  }
}