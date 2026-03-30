import { removeMarkdown } from "../../utils/functions"

export default {
  name: "CompanyInfo",
  title: "Sekcja z informacją o firmie (mapka)",
  icon: () => '📍',
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
      name: 'list',
      type: 'array',
      of: [
        {
          type: 'markdown'
        }
      ],
      title: 'Lista',
    },
    {
      name: 'map',
      type: 'geopoint',
      title: 'Mapa',
    },
  ],
  preview: {
    select: {
      title: 'heading',
      subtitle: 'subheading'
    },
    prepare({ title, subtitle }) {
      return {
        title: removeMarkdown(title),
        subtitle: removeMarkdown(subtitle),
      }
    }
  }
}
