export default {
  name: 'networkClinic',
  title: 'Placówka w sieci',
  type: 'object',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Nazwa placówki',
      description: 'Np. "Ośrodek TK", "Medicus", "Alma-Med"',
      validation: Rule => Rule.required(),
    },
    {
      name: 'locations',
      type: 'array',
      title: 'Lokalizacje',
      description: 'Dla jednej marki/strony możesz podać wiele lokalizacji (np. Turośń Kościelna i Suraż).',
      of: [{ type: 'networkLocation' }],
    },
    {
      name: 'logo',
      type: 'image',
      title: 'Logo',
      description: 'Logo placówki (SVG lub PNG z przezroczystym tłem)',
      validation: Rule => Rule.required(),
    },
    {
      name: 'url',
      type: 'url',
      title: 'Adres strony',
      description: 'URL do strony internetowej placówki, np. "https://osrodektk.pl"',
      validation: Rule => Rule.required().uri({
        scheme: ['http', 'https']
      }),
    },
    {
      name: 'isActive',
      type: 'boolean',
      title: 'Aktywna',
      description: 'Czy placówka powinna być widoczna na stronie?',
      initialValue: true,
    },
  ],
  preview: {
    select: {
      title: 'name',
      locations: 'locations',
      media: 'logo',
    },
    prepare({ title, locations, media }) {
      const cities = (locations || [])
        .map(location => location?.city)
        .filter(Boolean)
      const uniqueCities = Array.from(new Set(cities))
      return {
        title,
        subtitle: uniqueCities.join(', '),
        media,
      }
    },
  },
}
