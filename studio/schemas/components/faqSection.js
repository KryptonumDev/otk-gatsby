import { removeMarkdown } from "../../utils/functions";

export default {
  name: "faqSection",
  title: "Sekcja z FAQ",
  type: "object",
  fields: [
    {
      name: 'heading',
      type: 'markdown',
      title: 'Nagłówek',
      initialValue: 'Masz pytanie?',
    },
    {
      name: 'paragraph',
      type: 'markdown',
      title: 'Paragraf',
      initialValue: 'Chętnie rozwiejemy Twoje wątpliwości!',
    },
    {
      name: 'list',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'faq' }],
          options: { disableNew: true },
        },
      ],
      title: 'Lista',
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
      initialValue: [
        {
          theme: 'primary',
          text: 'Zapisz się',
          href: '/osrodek-zdrowia-zapisy',
        },
        {
          theme: 'secondary',
          text: 'Skontaktuj się z nami',
          href: '/kontakt',
        }
      ],
    },
    {
      name: 'icon',
      type: 'image',
      title: 'Ikona'
    }
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