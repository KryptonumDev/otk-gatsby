import { removeMarkdown } from "../../utils/functions";

export default {
  name: "imageAndTitle",
  title: "Element z ikoną i tytułem",
  type: "object",
  fields: [
    {
      name: 'img',
      type: 'image',
      title: 'Zdjęcie',
    },
    {
      name: 'title',
      type: 'markdown',
      title: 'Tytuł',
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'img'
    },
    prepare({ title, media }) {
      return {
        title: removeMarkdown(title),
        media,
      };
    }
  }
}