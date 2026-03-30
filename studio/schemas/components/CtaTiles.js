import { removeMarkdown } from "../../utils/functions";

export const CtaTiles_Item = {
  name: "CtaTiles_Item",
  title: "Kafelek",
  type: "object",
  fields: [
    {
      name: 'img',
      type: 'image',
      title: 'Ikona',
      validation: Rule => Rule.required(),
    },
    {
      name: 'title',
      type: 'markdown',
      title: 'Tytuł',
      validation: Rule => Rule.required(),
    },
    {
      name: 'description',
      type: 'markdown',
      title: 'Opis',
      validation: Rule => Rule.required(),
    },
    {
      name: 'cta',
      type: 'array',
      of: [{ type: 'cta' }],
      title: 'Wezwanie do działania (opcjonalne)',
      validation: Rule => Rule.max(2),
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'description',
      media: 'img'
    },
    prepare({ title, subtitle, media }) {
      return {
        title: removeMarkdown(title),
        subtitle: removeMarkdown(subtitle),
        media,
      }
    }
  }
};

export default {
  name: "CtaTiles",
  title: "Sekcja z kafelkami wezwanie do działania",
  type: "object",
  fields: [
    {
      name: 'heading',
      type: 'markdown',
      title: 'Nagłówek',
      validation: Rule => Rule.required(),
    },
    {
      name: 'paragraph',
      type: 'markdown',
      title: 'Paragraf',
      validation: Rule => Rule.required(),
    },
    {
      name: 'img',
      type: 'image',
      title: 'Ikona',
      validation: Rule => Rule.required(),
    },
    {
      name: 'list',
      type: 'array',
      of: [{ type: 'CtaTiles_Item' }],
      title: 'Kafelki (opcjonalne)',
    },
  ],
  preview: {
    select: {
      title: 'heading',
      subtitle: 'paragraph',
    },
    prepare({ title, subtitle }) {
      return {
        title: removeMarkdown(title),
        subtitle: removeMarkdown(subtitle),
      };
    }
  }
}
