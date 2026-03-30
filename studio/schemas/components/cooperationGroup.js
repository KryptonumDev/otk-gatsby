import { removeMarkdown } from "../../utils/functions"

export default {
  name: 'cooperationGroup',
  title: 'Grupa współpracy',
  type: 'object',
  fields: [
    { name: 'heading', type: 'markdown', title: 'Nagłówek' },
    { name: 'content', type: 'markdown', title: 'Treść',
      description: 'Wspiera Markdown — listy punktowane, pogrubienia, akapity itp.' },
    { name: 'img', type: 'image', title: 'Zdjęcie (opcjonalne)' },
  ],
  preview: {
    select: { title: 'heading', media: 'img' },
    prepare({ title, media }) {
      return { title: removeMarkdown(title), media }
    }
  }
}
