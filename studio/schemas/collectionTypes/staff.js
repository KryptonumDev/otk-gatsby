import { removeMarkdown } from "../../utils/functions"

export default {
  name: 'staff',
	title: 'Personel',
  type: 'document',
  icon: () => '👩‍⚕️',
  fields: [
    {
      name: 'img',
      type: 'image',
      title: 'Zdjęcie',
    },
    {
      name: 'name',
      type: 'markdown',
      title: 'Imię',
    },
    {
      name: 'position',
      type: 'markdown',
      title: 'Stanowisko',
    },
    {
      name: 'bio',
      type: 'markdown',
      title: 'Biogram - opis',
    },
    {
      name: 'embed',
      type: 'YoutubeEmbed',
      title: 'Film z Youtube*',
      description: 'To pole jest opcjonalne. Jeżeli nie zostanie uzupełnione, to na stronie nie pokażemy filmu przy danej osobie.'
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'position',
      media: 'img'
    },
    prepare({ title, subtitle, media }){
      return {
        title: removeMarkdown(title),
        subtitle: removeMarkdown(subtitle),
        media
      }
    }
  }
}